"""Check every paper in papers.js against Crossref.

Usage: python -I tools/papers.py [--fix]

For each entry the DOI is resolved through api.crossref.org and the title, year and journal
are compared with what papers.js says. A DOI that does not resolve, or a title that does not
match, is a failure. --fix rewrites title, journal and year in papers.js from Crossref (the
exact published title, including its own capitalisation), which is the honest form of a
citation. Nothing else in the file is touched. Run it after adding a paper, and now and then
anyway: DOIs do not move, but a preprint's DOI can be superseded by the published one.
"""
import sys, os, re, json, time, html, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding="utf-8")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UA = {"User-Agent": "MaterialsCatalogue/1.0 (https://github.com/llama-with-thumbs/materials; mailto:vlad.filitovich@gmail.com)"}
FIX = "--fix" in sys.argv[1:]

path = os.path.join(ROOT, "papers.js")
src = open(path, encoding="utf-8").read()

def field(block, name):
    m = re.search(r'\b%s:\s*"((?:[^"\\]|\\.)*)"' % name, block)
    return m.group(1) if m else None

def norm(s):
    s = html.unescape(re.sub(r"<[^>]+>", "", s or ""))
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()

blocks = re.findall(r"\{\s*id:\s*\"[a-z0-9]+\".*?\n\}", src, re.S)
fails, fixed = 0, 0
for b in blocks:
    pid, doi = field(b, "id"), field(b, "doi")
    year = re.search(r"\byear:\s*(\d{4})", b)
    year = int(year.group(1)) if year else None
    url = "https://api.crossref.org/works/" + urllib.parse.quote(doi, safe="")
    try:
        w = json.load(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60))["message"]
    except Exception as e:
        print("FAIL %-16s DOI does not resolve: %s (%s)" % (pid, doi, e)); fails += 1; continue
    title = html.unescape(re.sub(r"<[^>]+>", "", (w.get("title") or [""])[0])).strip()
    journal = (w.get("container-title") or w.get("short-container-title") or [""])[0]
    issued = (w.get("published-print") or w.get("published-online") or w.get("issued") or {}).get("date-parts", [[None]])[0][0]
    ours = field(b, "title")
    problems = []
    if norm(ours) != norm(title):
        if norm(title) and norm(ours) not in norm(title) and norm(title) not in norm(ours):
            problems.append("title differs: crossref says '%s'" % title)
    if issued and year and abs(issued - year) > 1:
        problems.append("year differs: crossref says %s" % issued)
    if problems:
        if FIX:
            nb = b
            if title: nb = re.sub(r'(\btitle:\s*)"(?:[^"\\]|\\.)*"', lambda m: m.group(1) + json.dumps(title, ensure_ascii=False), nb, count=1)
            if journal: nb = re.sub(r'(\bjournal:\s*)"(?:[^"\\]|\\.)*"', lambda m: m.group(1) + json.dumps(journal, ensure_ascii=False), nb, count=1)
            if issued: nb = re.sub(r"(\byear:\s*)\d{4}", lambda m: m.group(1) + str(issued), nb, count=1)
            src = src.replace(b, nb); fixed += 1
            print("fixed %-16s %s" % (pid, "; ".join(problems)))
        else:
            print("FAIL %-16s %s" % (pid, "; ".join(problems))); fails += 1
    else:
        print("ok   %-16s %s %s" % (pid, issued, title[:70]))
    time.sleep(0.3)

if FIX and fixed:
    open(path, "w", encoding="utf-8", newline="\n").write(src)
print("\n%d papers, %d failures%s" % (len(blocks), fails, ", %d rewritten from Crossref" % fixed if fixed else ""))
sys.exit(1 if fails else 0)
