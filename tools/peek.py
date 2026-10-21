"""Download candidate Commons files somewhere scratch, so they can be looked at
before anything is committed to images.txt.

Usage: python -I tools/peek.py names.txt OUTDIR
Writes OUTDIR/peek0.jpg, peek1.jpg ... in the order of the names file.
"""
import sys, os, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding="utf-8")
UA = {"User-Agent": "MaterialsCatalogue/1.0 (https://github.com/llama-with-thumbs/materials; static site build)"}

names = [l.strip() for l in open(sys.argv[1], encoding="utf-8") if l.strip()]
outdir = sys.argv[2]
os.makedirs(outdir, exist_ok=True)

for i, name in enumerate(names):
    url = ("https://commons.wikimedia.org/wiki/Special:FilePath/"
           + urllib.parse.quote(name.replace(" ", "_")) + "?width=900")
    out = os.path.join(outdir, "peek%d.jpg" % i)
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=90) as r, open(out, "wb") as f:
        f.write(r.read())
    print(i, os.path.getsize(out), name)
