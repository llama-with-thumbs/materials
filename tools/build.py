"""One command to rebuild and check the whole site.

Usage: python -I tools/build.py [--all] [--quick]

Runs, in the only order that works:

  1. fetch_images.py   images/ and credits.js from tools/images.txt   (--all re-queries Commons)
  2. added.py          added.js from the git history of data.js
  3. readme_numbers.py every count in README.md and index.html
  4. check.js          data.js against taxonomy.js, credits.js, images.txt and images/
  5. render.js         renders all cards, exercises search, sorts and filters

--quick skips steps 1 and 2, which are the two that talk to the network or to git;
use it while editing the page itself. Any step that fails stops the run, because
every later step reads what the failed one was supposed to write.
"""
import os
import subprocess
import sys
import time

sys.stdout.reconfigure(encoding="utf-8")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PY = [sys.executable, "-I"]
QUICK = "--quick" in sys.argv[1:]
ALL = "--all" in sys.argv[1:]

steps = [
    ("images and credits", PY + ["tools/fetch_images.py"] + (["--all"] if ALL else []), not QUICK),
    ("add order", PY + ["tools/added.py"], not QUICK),
    ("counts in the prose", PY + ["tools/readme_numbers.py"], True),
    ("structure check", ["node", "tools/check.js"], True),
    ("render check", ["node", "tools/render.js"], True),
]

failed = []
for name, cmd, run in steps:
    if not run:
        print("--  %-22s skipped (--quick)" % name)
        continue
    t0 = time.time()
    r = subprocess.run(cmd, cwd=ROOT, capture_output=True)
    out = (r.stdout + r.returncode * b"" + r.stderr).decode("utf-8", "replace")
    tail = [l for l in out.strip().split("\n") if l.strip()][-3:]
    print("%s  %-22s %5.1fs  %s" % ("ok " if r.returncode == 0 else "FAIL", name,
                                    time.time() - t0, " / ".join(t.strip() for t in tail)))
    if r.returncode != 0:
        print("\n--- %s said ---\n%s" % (name, out.strip()))
        failed.append(name)
        break

print("\nbuild failed at: " + failed[0] if failed else "\nsite is consistent")
sys.exit(1 if failed else 0)
