"""Search Commons for candidate photos.

Usage: python -I tools/search.py queries.txt [first] [last]
Each line of the query file is  id|search words  (blank lines and # comments ignored).
Prints up to six bitmaps of at least 640x400 per query, largest index first.

Commons full-text search ANDs every word, so short single-concept queries win:
"speaker grille" finds things, "loudspeaker grille perforated steel" finds nothing.
"""
import sys, os, json, time, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding="utf-8")
UA = {"User-Agent": "MaterialsStaticSite/1.0 (personal static page; contact via github)"}


def api(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=UA)
    for attempt in range(5):
        try:
            return json.load(urllib.request.urlopen(req, timeout=60))
        except Exception as e:
            code = getattr(e, "code", None)
            if code in (429, 503) or code is None:
                time.sleep(5 * (attempt + 1)); continue
            raise
    return {}


rows = []
for line in open(sys.argv[1], encoding="utf-8"):
    line = line.strip()
    if line and "|" in line and not line.startswith("#"):
        rows.append(line.split("|", 1))

a = int(sys.argv[2]) if len(sys.argv) > 2 else 0
b = int(sys.argv[3]) if len(sys.argv) > 3 else len(rows)

for mid, q in rows[a:b]:
    data = api({"action": "query", "format": "json", "formatversion": "2",
                "generator": "search", "gsrnamespace": "6", "gsrlimit": "16",
                "gsrsearch": q + " filetype:bitmap",
                "prop": "imageinfo", "iiprop": "url|size|mime"})
    pages = data.get("query", {}).get("pages", [])
    pages.sort(key=lambda p: p.get("index", 99))
    out = []
    for p in pages:
        ii = (p.get("imageinfo") or [{}])[0]
        w, h = ii.get("width", 0), ii.get("height", 0)
        if w < 640 or h < 400:
            continue
        out.append("      %-4dx%-4d  %s" % (w, h, p["title"].replace("File:", "")))
        if len(out) >= 6:
            break
    print("### %s  <%s>" % (mid, q))
    print("\n".join(out) if out else "      (none)")
    sys.stdout.flush()
    time.sleep(0.3)
