"""Insert new cards into data.js and their image lines into tools/images.txt.

Usage: python -I tools/add_cards.py newcards.json [--dry]

newcards.json is a list of objects:
  {"id": "gel", "cat": "music", "name": "Lighting gel",
   "sub": "deep-dyed polyester filter film",
   "hook": "One paragraph. No double quotes.",
   "stats": [["Film", "0.05-0.25 mm"], ["Works by", "absorbing the rest as heat"]],
   "uses": "Stage and studio lanterns.",
   "link": "https://en.wikipedia.org/wiki/Color_gel",
   "file": "Many color gels.jpg", "caption": "Lighting gels laid out", "kind": "product"}

kind is photo (default), product, process, structure, related or analog.
Each card is appended to the end of its own category block, so the add order
that tools/added.py reads out of git stays meaningful.

Set MATERIALS_ROOT to work on a copy of the site (used by the tests).
"""
import sys, os, json
sys.stdout.reconfigure(encoding="utf-8")

ROOT = os.environ.get("MATERIALS_ROOT") or os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KINDS = {"photo", "product", "process", "structure", "related", "analog"}
TEXT = ("name", "sub", "hook", "uses")
DRY = "--dry" in sys.argv[2:]

cards = json.load(open(sys.argv[1], encoding="utf-8"))
assert isinstance(cards, list) and cards, "expected a non-empty list"


def block(e, comma):
    stats = ", ".join('["%s", "%s"]' % (k, v) for k, v in e["stats"])
    return ('{\n  id: "%s", cat: "%s", name: "%s",\n  sub: "%s", img: "%s",\n'
            '  hook: "%s",\n  stats: [%s],\n  uses: "%s",\n  link: "%s"\n}%s\n'
            % (e["id"], e["cat"], e["name"], e["sub"], e["id"], e["hook"], stats,
               e["uses"], e["link"], "," if comma else ""))


data_path = os.path.join(ROOT, "data.js")
img_path = os.path.join(ROOT, "tools", "images.txt")
s = open(data_path, encoding="utf-8").read()
img_lines = open(img_path, encoding="utf-8").read().rstrip("\n").split("\n")
have_ids = {l.split("|")[0] for l in img_lines}
have_files = {l.split("|")[1] for l in img_lines if "|" in l}
before = s.count('\n  id: "')

seen = set()
for e in cards:
    for f in ("id", "cat", "name", "sub", "hook", "stats", "uses", "link", "file", "caption"):
        assert e.get(f), (e.get("id"), "missing " + f)
    assert e["id"] not in seen, e["id"]
    seen.add(e["id"])
    for f in TEXT:
        assert '"' not in e[f], (e["id"], 'double quote in ' + f)
    assert all(len(p) == 2 for p in e["stats"]), e["id"]
    assert all('"' not in x for p in e["stats"] for x in p), e["id"]
    assert "|" not in e["caption"], e["id"]
    assert e.get("kind", "photo") in KINDS, (e["id"], e.get("kind"))
    assert 'id: "%s"' % e["id"] not in s, ("id already in data.js", e["id"])
    assert e["id"] not in have_ids, ("id already in images.txt", e["id"])
    assert e["file"] not in have_files, ("photo already used", e["file"])
    assert 'cat: "%s"' % e["cat"] in s, ("unknown category", e["cat"])
    have_files.add(e["file"])

TAIL = "}\n\n];"
for e in cards:
    key = 'cat: "%s"' % e["cat"]
    i = s.rindex(key)
    j = s.find("\n},\n", i)
    k = s.find("\n" + TAIL, i)
    assert j != -1 or k != -1, e["id"]
    if k != -1 and (j == -1 or k < j):          # this category ends the file
        s = s[:k] + "\n},\n" + block(e, False) + "\n];" + s[k + len("\n" + TAIL):]
        where = "end of file"
    else:                                        # mid-file category block
        s = s[:j + 4] + block(e, True) + s[j + 4:]
        where = "after the last %s card" % e["cat"]
    print("%-14s %s" % (e["id"], where))

assert s.count('\n  id: "') == before + len(cards)
img_lines += ["%s|%s|%s|%s" % (e["id"], e["file"], e["caption"], e.get("kind", "photo")) for e in cards]

if DRY:
    print("dry run: data.js %d -> %d entries, images.txt -> %d lines"
          % (before, before + len(cards), len(img_lines)))
    sys.exit(0)

open(data_path, "w", encoding="utf-8", newline="\n").write(s)
open(img_path, "w", encoding="utf-8", newline="\n").write("\n".join(img_lines) + "\n")
print("data.js: %d -> %d entries | images.txt: %d lines" % (before, before + len(cards), len(img_lines)))
print("next: python -I tools/fetch_images.py   (run it in the background, it walks every entry)")
