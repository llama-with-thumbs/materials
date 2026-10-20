"""Print the Commons description, size and licence of candidate files.

Usage: python -I tools/describe.py names.txt
One Commons file name per line, no "File:" prefix.

Read the description before writing a caption -- and then look at the picture
anyway, because descriptions lie by omission more often than you would think.
"""
import json, urllib.request, urllib.parse, re, html, sys, time
sys.stdout.reconfigure(encoding="utf-8")
UA = {"User-Agent": "MaterialsStaticSite/1.0 (personal static page; contact via github)"}


def api(p):
    u = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(p)
    req = urllib.request.Request(u, headers=UA)
    for attempt in range(6):
        try:
            return json.load(urllib.request.urlopen(req, timeout=90))
        except Exception as e:
            code = getattr(e, "code", None)
            if code in (429, 503) or code is None:
                time.sleep(8 * (attempt + 1)); continue
            raise
    raise SystemExit("gave up")


names = [l.rstrip("\n") for l in open(sys.argv[1], encoding="utf-8") if l.strip()]
for i in range(0, len(names), 10):
    d = api({"action": "query", "format": "json", "formatversion": "2",
             "titles": "|".join("File:" + n for n in names[i:i + 10]),
             "prop": "imageinfo", "iiprop": "extmetadata|size",
             "iiextmetadatafilter": "ImageDescription|LicenseShortName|ObjectName"})
    for p in d["query"]["pages"]:
        if p.get("missing"):
            print("--- MISSING:", p["title"]); continue
        ii = (p.get("imageinfo") or [{}])[0]; em = ii.get("extmetadata", {})
        desc = html.unescape(re.sub(r"<[^>]+>", " ", em.get("ImageDescription", {}).get("value", "") or "")).strip()
        desc = re.sub(r"\s+", " ", desc)
        print("--- %s | %sx%s | %s" % (p["title"].replace("File:", ""), ii.get("width"), ii.get("height"),
                                       em.get("LicenseShortName", {}).get("value")))
        print("    " + desc[:320])
    sys.stdout.flush()
    time.sleep(1.0)
