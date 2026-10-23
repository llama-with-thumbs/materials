# -*- coding: utf-8 -*-
"""The register of second sources: every `src` in data.js, grouped by site.

Usage: python -I tools/sources.py            rewrite SOURCES.md from data.js
       python -I tools/sources.py --check    also fetch every URL and report the ones that fail

The point of the register is that the next source hunt starts from what already worked.
A site that has answered a script and carried a datasheet is worth more than a search
result, and a site that 403s is worth knowing about before the fifth attempt. The hand-
written notes at the top of SOURCES.md are kept across rebuilds; only the table is generated.
"""
import re, sys, os, collections, time, urllib.request
sys.stdout.reconfigure(encoding="utf-8")
ROOT = os.environ.get("MATERIALS_ROOT") or os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "SOURCES.md")
MARK = "<!-- generated below this line: python -I tools/sources.py -->"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"}

HEAD = """# Sources

The second opinion behind the cards. Every card links to Wikipedia; the ones listed here
also carry a `src` that is not Wikipedia — a maker's datasheet, a trade body, a teaching
page, an archive or a standards reference. One source is not a source.

## What a source has to be

- It says the thing the card says, in its own words, and it loads.
- It is not a shop. A product page with a datasheet is fine; a listing with a price is not.
- It answers a script, or it is recorded here as one that opens in a browser but 403s a
  script, so nobody wastes an hour rediscovering that.

## Families that have held up

| Family | Good for | Note |
|---|---|---|
| `pslc.ws/macrog/<x>.htm` (Macrogalleria) | commodity polymers, taught properly | the most-cited site in the register |
| `boedeker.com/Family/<Name>` | engineering plastics, grade tables | answers a script politely |
| `o-ring.info/en/materials/<x>/` (ERIKS) | elastomers | — |
| `edmundoptics.com/knowledge-center/` | optics application notes | — |
| `loc.gov/preservation/care/` | film, paper, archives | — |
| `spinoff.nasa.gov`, `nasa.gov/mission/` | anything that flew | — |
| trade bodies: `alufoil.org`, `epsindustry.org`, `plasticpipe.org`, `esda.org`, `geosynthetic-institute.org`, `pda-online.org` | the industry's own numbers | often the only place a figure is stated plainly |
| makers' own pages where they load: Covestro, Kuraray, Arkema, Zotefoams, Trosifol, Gore, Dyneema, Kurz, Orafol, Vishay, Amcor, Gauzy, Futamura | the datasheet | corporate sites move pages constantly; re-check before trusting |

## Refused or dead, do not retry

MatWeb, Curbell, Omnexus/SpecialChem, Parker, Dow, Chemours, ExxonMobil, Celanese, Daicel,
ScienceDirect, CAMEO, Britannica, CITES, Smithsonian MCI, FHWA, 3M, Sealed Air, BPF
Plastipedia, NEDCC all answer 403 to a script. polymerdatabase.com is parked. ACS pages
return an empty JS shell. PubMed Central puts a reCAPTCHA in front of scripts. The full
history is in `tools/searchlog.md`.

## Where the papers are

A few cards rest on a paper rather than a page: milkweed floss (a textile-science study),
the self-healing concrete, the two-photon resist. The plan for a `refs` field that carries a
DOI per card is in `ROADMAP.md`; until it exists, a paper goes in `src` like anything else,
with the journal as the label.

"""

data = open(os.path.join(ROOT, "data.js"), encoding="utf-8").read()
entries = re.findall(r'\{\n  id: "([^"]+)", cat: "([^"]+)", name: "([^"]+)",(.*?)\n\}', data, re.S)
rows, cited = [], []
for i, c, n, body in entries:
    m = re.search(r'src: \["([^"]+)", "([^"]+)"\]', body)
    rows.append(i)
    if m:
        cited.append((i, c, n, m.group(1), m.group(2)))
by_site = collections.OrderedDict()
for i, c, n, lab, url in cited:
    site = re.sub(r"^https?://(www\.)?", "", url).split("/")[0]
    by_site.setdefault(site, []).append((i, n, lab, url))
sites = sorted(by_site.items(), key=lambda kv: (-len(kv[1]), kv[0]))

lines = [MARK, "", "## The register",
         "",
         "%d of %d cards carry a second source, across %d sites. Generated from `data.js`; edit the cards, not this table."
         % (len(cited), len(rows), len(by_site)), "",
         "| Site | Cards | As cited |", "|---|---|---|"]
for site, items in sites:
    cards = ", ".join("`%s`" % i for i, n, lab, url in items)
    labels = sorted({lab for i, n, lab, url in items})
    lines.append("| %s | %s | %s |" % (site, cards, "; ".join(labels)))

if "--check" in sys.argv[1:]:
    bad = []
    seen = set()
    for i, c, n, lab, url in cited:
        if url in seen:
            continue
        seen.add(url)
        try:
            r = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=25)
            code = r.status
        except Exception as e:
            code = getattr(e, "code", None) or str(e)[:50]
        if code != 200:
            bad.append((i, code, url))
            print("FAIL", i, code, url)
        time.sleep(0.3)
    lines += ["", "## Last check", "",
              "%s: %d URLs fetched, %d failed." % (time.strftime("%Y-%m-%d"), len(seen), len(bad))]
    if bad:
        lines += ["", "| Card | Answer | URL |", "|---|---|---|"]
        lines += ["| `%s` | %s | %s |" % b for b in bad]
    lines.append("")
    lines.append("A 403 is usually the site refusing scripts, not a dead page; open it in a browser before replacing it.")

old = open(OUT, encoding="utf-8").read() if os.path.exists(OUT) else ""
head = old.split(MARK)[0] if MARK in old else HEAD
# A plain rebuild keeps the last dated check; only --check replaces it.
if "--check" not in sys.argv[1:] and "## Last check" in old:
    lines += [""] + old[old.index("## Last check"):].rstrip("\n").split("\n")
open(OUT, "w", encoding="utf-8", newline="\n").write(head.rstrip("\n") + "\n\n" + "\n".join(lines) + "\n")
print("SOURCES.md: %d cards with a source, %d sites" % (len(cited), len(by_site)))
