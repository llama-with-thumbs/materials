# -*- coding: utf-8 -*-
"""Regenerate every number in README.md and index.html from data.js and tools/images.txt.

Usage: python -I tools/readme_numbers.py

Asserts exactly one substitution per pattern, so a reworded sentence fails loudly
instead of quietly leaving a stale count behind. Set MATERIALS_ROOT to work on a copy.
"""
import re, sys, os, collections
sys.stdout.reconfigure(encoding="utf-8")
ROOT = os.environ.get("MATERIALS_ROOT") or os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

data = open(os.path.join(ROOT, "data.js"), encoding="utf-8").read()
total = data.count('\n  id: "')
cats = collections.Counter(re.findall(r'cat: "([^"]+)"', data))
# Extra views are additional images.txt lines keyed by their own id, not a material's own
# card picture, so they are left out of the per-material image breakdown below.
extra_ids = set(re.findall(r'"([a-z0-9]+)"', " ".join(re.findall(r'extra:\s*\[([^\]]*)\]', data))))
kinds = collections.Counter()
extra_n = 0
for line in open(os.path.join(ROOT, "tools", "images.txt"), encoding="utf-8"):
    line = line.strip()
    if line and not line.startswith("#"):
        p = line.split("|")
        if p[0] in extra_ids:
            extra_n += 1
            continue
        kinds[p[4]] += 1
plates = kinds.pop("plate", 0)        # plates have images too, but they are not materials
assert sum(kinds.values()) == total, (sum(kinds.values()), total)

p = os.path.join(ROOT, "README.md")
s = open(p, encoding="utf-8").read()
n = 0

def sub1(pat, repl):
    global s, n
    new, k = re.subn(pat, repl, s, count=1)
    assert k == 1, pat
    s = new
    n += 1

sub1(r"A single-page field guide to \d+ materials", "A single-page field guide to %d materials" % total)
sub1(r"the catalogue \u2014 \d+ entries", "the catalogue \u2014 %d entries" % total)
sub1(r"images/        \d+ images", "images/        %d images" % total)
for c, count in cats.items():
    sub1(r"\| `%s` \| ([^|]+) \| \d+ \|" % c, lambda m, c=count: "| `%s` | %s | %d |" % (m.group(0).split("`")[1], m.group(1), c))
sub1(r"All \d+ entries carry an image", "All %d entries carry an image" % total)
sub1(r"\d+ are photographs of the material itself\. \d+ are not",
     "%d are photographs of the material itself. %d are not" % (kinds["photo"], total - kinds["photo"]))
sub1(r"- \*\*\d+ show something made from it\*\*", "- **%d show something made from it**" % kinds["product"])
sub1(r"- \*\*\d+ show a similar example\*\*", "- **%d show a similar example**" % kinds["analog"])
sub1(r"- \*\*\d+ show a close relative\*\*", "- **%d show a close relative**" % kinds["related"])
sub1(r"- \*\*\d+ show how it is made\*\*", "- **%d show how it is made**" % kinds["process"])
sub1(r"A few cards carry a second view, paged in the lightbox — \d+ so far",
     "A few cards carry a second view, paged in the lightbox — %d so far" % extra_n)
open(p, "w", encoding="utf-8", newline="\n").write(s)
print("README: %d substitutions | total %d | %s" % (n, total, dict(kinds)))
print("categories:", dict(cats))

p = os.path.join(ROOT, "index.html")
s = open(p, encoding="utf-8").read()
# The sentence appears twice, both lowercase: in the lede and in the og:description.
s2, k = re.subn(r"a field guide to \d+ materials", "a field guide to %d materials" % total, s)
assert k == 2, k
open(p, "w", encoding="utf-8", newline="\n").write(s2)
print("index.html updated")
