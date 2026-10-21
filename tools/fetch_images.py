"""Download material photos from Wikimedia Commons into images/ and write credits.js.

Usage: python -I tools/fetch_images.py [--all]
Reads tools/images.txt  ->  id|Commons File name|caption[|kind]
kind is photo (default), structure, product, process, related or analog.

By default this is incremental: a row whose image is already on disk and whose credit
in credits.js still matches the line in images.txt is reused without touching the API,
so a normal run after adding a few cards takes seconds instead of minutes. Pass --all
to re-query every row, which is what you want after editing a caption in bulk or when
a licence on Commons has changed.

Swapping a photograph means deleting images/<id>.<ext> first — a file already on disk
is never re-downloaded.
"""
import sys, os, re, json, time, html, struct, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding="utf-8")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UA = {"User-Agent": "MaterialsStaticSite/1.0 (personal static page; contact via github)"}
WIDTH = 900
FULL = "--all" in sys.argv[1:]

def api(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=UA)
    for attempt in range(5):
        try:
            return json.load(urllib.request.urlopen(req, timeout=90))
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                time.sleep(6 * (attempt + 1)); continue
            raise
    raise SystemExit("API gave up: " + url)

def strip_html(s):
    return html.unescape(re.sub(r"<[^>]+>", "", s or "")).strip()

def imagesize(path):
    """Width and height of a JPEG or PNG, without PIL — python -I cannot see it."""
    try:
        with open(path, "rb") as fh:
            head = fh.read(32)
            if head[:8] == b"\x89PNG\r\n\x1a\n":
                w, h = struct.unpack(">II", head[16:24])
                return int(w), int(h)
            if head[:2] != b"\xff\xd8":
                return None, None
            fh.seek(2)
            while True:
                b = fh.read(1)
                while b and b != b"\xff":
                    b = fh.read(1)
                marker = fh.read(1)
                while marker == b"\xff":
                    marker = fh.read(1)
                if not marker:
                    return None, None
                if marker[0] in (0xD8, 0xD9) or 0xD0 <= marker[0] <= 0xD7:
                    continue
                size = struct.unpack(">H", fh.read(2))[0]
                if 0xC0 <= marker[0] <= 0xCF and marker[0] not in (0xC4, 0xC8, 0xCC):
                    h, w = struct.unpack(">HH", fh.read(5)[1:])
                    return int(w), int(h)
                fh.seek(size - 2, 1)
    except Exception as e:
        print("size? %s: %s" % (os.path.basename(path), e))
    return None, None

def download(src, dest):
    """Fetch one file, backing off politely when Commons rate-limits us."""
    req = urllib.request.Request(src, headers=UA)
    for attempt in range(6):
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                blob = r.read()
            with open(dest, "wb") as out:
                out.write(blob)
            return
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                time.sleep(8 * (attempt + 1)); continue
            raise
    raise SystemExit("download gave up: " + src)

rows = []
with open(os.path.join(ROOT, "tools", "images.txt"), encoding="utf-8") as fh:
    for line in fh:
        line = line.strip()
        if line and not line.startswith("#"):
            parts = line.split("|")
            mid, fname, caption = parts[0], parts[1], parts[2]
            kind = parts[3] if len(parts) > 3 else "photo"
            rows.append((mid, fname, caption, kind))

# What we already know, so a routine run only asks Commons about what changed.
old = {}
cpath = os.path.join(ROOT, "credits.js")
if os.path.exists(cpath) and not FULL:
    blob = open(cpath, encoding="utf-8").read()
    old = json.loads(blob[blob.index("{"):blob.rindex("}") + 1])

credits = {}
todo = []
for mid, fname, caption, kind in rows:
    c = old.get(mid)
    on_disk = c and os.path.exists(os.path.join(ROOT, "images", c.get("file", "")))
    if c and on_disk and c.get("title") == fname and c.get("page") and c.get("artist"):
        c = dict(c, caption=caption, kind=kind)
        if not c.get("w"):
            c["w"], c["h"] = imagesize(os.path.join(ROOT, "images", c["file"]))
        credits[mid] = c
    else:
        todo.append((mid, fname, caption, kind))

print("%d rows: %d reused, %d to fetch%s"
      % (len(rows), len(credits), len(todo), " (--all)" if FULL else ""))

for i in range(0, len(todo), 10):
    chunk = todo[i:i + 10]
    data = api({"action": "query", "format": "json", "formatversion": "2",
                "titles": "|".join("File:" + f for _, f, _, _ in chunk),
                "prop": "imageinfo", "iiprop": "url|extmetadata|mime",
                "iiurlwidth": str(WIDTH)})
    byname = {}
    for p in data.get("query", {}).get("pages", []):
        if p.get("missing"):
            print("MISSING " + p.get("title", "?")); continue
        byname[p["title"].replace("File:", "")] = p["imageinfo"][0]
    for mid, fname, caption, kind in chunk:
        ii = byname.get(fname)
        if not ii:
            print("no imageinfo: " + fname); continue
        em = ii.get("extmetadata", {})
        src = ii.get("thumburl") or ii["url"]
        ext = ".png" if ".png" in src.lower().split("/")[-1] else ".jpg"
        dest = os.path.join(ROOT, "images", mid + ext)
        if not os.path.exists(dest) or os.path.getsize(dest) == 0:
            download(src, dest)
            time.sleep(0.8)
        w, h = imagesize(dest)
        credits[mid] = {
            "file": mid + ext,
            "caption": caption,
            "kind": kind,
            "title": fname,
            "artist": strip_html(em.get("Artist", {}).get("value", "")) or "Unknown",
            "license": strip_html(em.get("LicenseShortName", {}).get("value", "")) or "see source",
            "page": ii.get("descriptionurl", ""),
            "w": w,
            "h": h,
        }
        print(f"ok  {mid:12s} {os.path.getsize(dest)//1024:5d} KB  {credits[mid]['license']}")
    time.sleep(1.0)

# Keep credits.js in the order of images.txt, whatever order the fetching happened in.
credits = {mid: credits[mid] for mid, _, _, _ in rows if mid in credits}

with open(cpath, "w", encoding="utf-8") as fh:
    fh.write("// Generated by tools/fetch_images.py - image provenance from Wikimedia Commons\n")
    fh.write("window.CREDITS = " + json.dumps(credits, indent=2, ensure_ascii=False) + ";\n")
print(f"\n{len(credits)}/{len(rows)} images written")
