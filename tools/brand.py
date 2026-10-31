"""Rebuild every raster the mark appears in from mark.svg: the app icons and the share cards.

The mark is sketch five of a crumpled sheet, traced once to SVG; this script never redraws it,
it only sets it on paper at the sizes the platforms want. Needs Chrome, which renders the fonts
in fonts/ and the SVG exactly as the page does.

    python -I tools/brand.py
"""
import os, subprocess, sys, tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
MARK = "file:///" + ROOT.replace("\\", "/") + "/mark.svg"
FONT = "file:///" + ROOT.replace("\\", "/") + "/fonts/jost-latin.woff2"

HEAD = """<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:Jost;src:url(%s) format("woff2");font-weight:300 700}
html,body{margin:0;background:#f5f2eb;font-family:Jost,Futura,sans-serif;color:#111}
</style>""" % FONT

ICON = HEAD + """<body style="width:%(s)dpx;height:%(s)dpx;display:flex;align-items:center;justify-content:center">
<img src="%(mark)s" style="width:%(w)dpx"></body>"""

CARD = HEAD + """<body style="width:1200px;height:630px;position:relative">
<div style="position:absolute;left:84px;top:96px;font-size:32px;color:#5f5b54">interesting materials<span style="color:#d1261c">.</span></div>
<div style="position:absolute;left:84px;top:164px;width:130px;height:10px;background:#d1261c"></div>
<div style="position:absolute;left:84px;top:%(ty)dpx;width:860px;font-size:%(ts)dpx;font-weight:500;line-height:1.02;letter-spacing:-.01em">%(title)s</div>
<div style="position:absolute;left:84px;top:%(sy)dpx;width:720px;font-size:34px;line-height:1.35;color:#5f5b54">%(sub)s</div>
<img src="%(mark)s" style="position:absolute;right:76px;bottom:52px;width:260px"></body>"""

CARDS = {
    "card-home.png":       dict(title="a field guide to materials", ts=96, ty=212, sub="each one here for a reason of its own", sy=430),
    "card-about.png":      dict(title="how this is made", ts=96, ty=212, sub="the method, the sources, and the rules it keeps", sy=336),
    "card-comparison.png": dict(title="among the magazines and the databases", ts=84, ty=212, sub="measured against spectrum, quanta and the databases", sy=430),
}
ICONS = {"apple-touch-icon.png": 180, "icon-192.png": 192, "icon-512.png": 512}

def shoot(html, out, w, h):
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False, encoding="utf-8") as f:
        f.write(html); src = f.name
    try:
        subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                        "--window-size=%d,%d" % (w, h), "--screenshot=" + os.path.join(ROOT, out),
                        "file:///" + src.replace("\\", "/")],
                       check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=60)
    finally:
        os.unlink(src)
    print("ok  ", out, os.path.getsize(os.path.join(ROOT, out)) // 1024, "KB")

for name, s in ICONS.items():
    shoot(ICON % dict(s=s, w=int(s * 0.8), mark=MARK), name, s, s)
for name, spec in CARDS.items():
    shoot(CARD % dict(spec, mark=MARK), name, 1200, 630)
