---
name: add-materials
description: Add cards to the Materials catalogue — research candidates on Wikimedia Commons, write the entries, fetch and verify the images, validate, log the dead ends and commit. Use whenever the ask is to add, extend or develop a category of this site.
---

# Adding materials to the catalogue

The catalogue is a static page: `data.js` holds the cards, `tools/images.txt` maps each card to
one Commons photograph, `credits.js` and `added.js` are generated. There is no build step.

Work through the Bash tool. Long Python goes in the session scratchpad, not in the repo.

## The bar

A card is only worth adding if **all** of these hold. They are not negotiable, and they are the
reason this takes a while.

1. **It is a real material or a real material-in-a-role**, not a product category. A weave, a
   finish or an application of a material already in the catalogue is fine — `cabinetmdf` sits
   happily beside generic MDF — but the card must say what is special about *that* use.
2. **It is not already there under another name.** Grep `data.js` for the obvious synonyms
   before researching; `tools/searchlog.md` lists things already ruled out.
3. **It has its own freely licensed photograph on Commons**, used by no other card.
4. **The caption is honest about what the picture shows.** If the photo is not the bare material,
   it gets the right `kind` badge: `product`, `process`, `structure`, `related` or `analog`.
5. **The hook teaches something.** One paragraph, concrete, with the trade-off or the failure
   mode in it. Not a dictionary definition.

If a candidate fails on the photograph, drop it and write a line in `tools/searchlog.md`. Don't
ask permission, and don't lower the bar to keep the count up.

## Pipeline

```sh
# 1  what is already there, so nothing is researched twice
python - <<'PY'
import re
s=open('data.js',encoding='utf-8').read()
for a,c,n in re.findall(r'id: "([^"]+)", cat: "([^"]+)", name: "([^"]+)"',s):
    if c=='music': print(a,'|',n)
PY
cat tools/searchlog.md            # the dead ends, do not re-walk them

# 2  search Commons — short single-concept queries, several per candidate
printf 'gel|lighting gel\ngel|colour filter\n' > $SCR/q.txt
python -I tools/search.py $SCR/q.txt

# 3  read the descriptions of the shortlist
printf 'Many color gels.jpg\n' > $SCR/names.txt
python -I tools/describe.py $SCR/names.txt

# 4  LOOK at anything doubtful before committing to it
python -I tools/peek.py $SCR/names.txt $SCR/peek
#    then Read the downloaded peek0.jpg etc.

# 5  write the cards and insert them
python -I tools/add_cards.py $SCR/newcards.json --dry
python -I tools/add_cards.py $SCR/newcards.json

# 6  fetch the new images, rebuild credits.js and added.js, fix every count, run both checks
python -I tools/build.py
```

`tools/build.py` is the whole chain in the only order that works, and it stops at the first
failure. `fetch_images.py` is incremental now — it only asks Commons about rows it does not
already have on disk, so a fifteen-card round takes twenty seconds, not two minutes. Pass
`--all` when a caption changed in bulk or a licence on Commons has moved.

`newcards.json` is a list of objects; `tools/add_cards.py` documents the shape and refuses
duplicate ids, duplicate photographs, bad stats and unknown categories.

## Writing the card

- `sub` — the chemistry, the trade name or the build, lower case, a few words.
- `hook` — one paragraph, 60–110 words, no double quotes (the file is JS). Lead with the thing
  that is surprising, then the cost of it. Catalogue voice: plain, specific, dry; no marketing,
  no "revolutionary", no exclamation marks.
- `stats` — exactly three pairs, label and value, each a fact you could check. The third is
  usually the trade-off or the failure mode ("Foam rot", "Killed by", "Ruined by").
- `uses` — one sentence of real places you meet it.
- `link` — an English Wikipedia URL. **Verify it**: titles redirect and go missing. Batch the
  check through the MediaWiki API rather than curling each one (bulk curl gets 429s).
- `tags` — optional, cross-cutting themes from `taxonomy.js`, e.g. `tags: ["warmth"]`. A card
  keeps one `cat`, which is what it *is*; a tag is a job it does. Filtering on a theme shows its
  own category plus everything tagged with it, which is how merino stays under ropes and still
  appears under Keeping warm.
- `src` — `["Who says so", "https://..."]`, a second source that is **not** Wikipedia: a maker's
  datasheet, a trade body, a teaching page, a conservation or standards reference. Fetch it before
  committing it. Families that hold up and answer scripts politely: `boedeker.com/Family/<Name>`
  for engineering plastics, `pslc.ws/macrog/<x>.htm` (Macrogalleria) for the commodity polymers,
  `o-ring.info/en/materials/<x>/` (ERIKS) for elastomers, and the maker's own page where it loads.
  Corporate sites 404 and 403 constantly — budget for it.

## Validate before committing

```sh
python -I tools/build.py                  # all of it, in order, stopping at the first failure
node tools/check.js                       # or one at a time: data, credits, images, themes
node tools/render.js $SCR/out.html        # renders every card, exercises search, sorts, filters
python -I tools/readme_numbers.py         # every count in README.md and index.html
```

Then look at the real page, not just the stub — the DOM stub cannot see layout:

```sh
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless --disable-gpu   --hide-scrollbars --window-size=1280,1000 --virtual-time-budget=8000   --screenshot=$SCR/shot.png "file:///C:/Users/laman/Documents/git/Materials/index.html#cat=warmth"
```

Chrome's old headless clamps the window to 500 px wide, and `--window-size` is in device pixels,
so a screenshot that looks like it overflows at phone width usually is not overflowing. Log
`console.log` output with `--enable-logging=stderr --dump-dom` and measure `scrollWidth`
before believing it.

Then look at each **new** image file with the Read tool. This catches what Commons descriptions
hide: a texture map with no texture, a silhouette, cloth where steel was promised. Fixing a
source photo means `rm images/<id>.<ext>` first — `fetch_images.py` skips files already on disk.

Also confirm with PIL that each new image decodes and is ~900 px wide. Use plain `python` for
PIL work: `python -I` excludes user site-packages and PIL is not found under it.

## Starting a new category

A category exists when `taxonomy.js` says it does. In order:

1. add it to `window.CATS` in `taxonomy.js`, last, with the label the filter button shows;
2. if the first word of that label is uninformative on its own, add a short badge word to
   `window.CAT_TAGS` — the corner of every photograph uses it;
3. write the cards as usual and run `add_cards.py`: the first card of an undeclared-in-`data.js`
   category starts its block at the end of the file, and the rest stack after it;
4. add a row to the Categories table in `README.md` with any number in it — `readme_numbers.py`
   corrects it, but it refuses to invent a row that is not there;
5. write the category's paragraph under the table. That part is prose and nobody can generate it.

A theme is the same but in `window.THEMES`, and then `tags: ["name"]` on the cards that earn it.
If a theme's key matches a category's key, the page shows one button, not two, and it returns
the union.

## Log the dead ends

Before committing, append to `tools/searchlog.md`:

- every candidate searched and **not** added — the queries tried, why it failed, what might
  unblock it;
- every source photograph rejected **after looking at it**, and what replaced it.

This is the part that compounds. Without it the next session re-searches timpani copper.

## Numbers in the prose

`tools/readme_numbers.py` rewrites every count in `README.md` and `index.html` from the data and
asserts one substitution per pattern — so if a sentence was reworded it fails instead of leaving
a stale number. Never edit the counts by hand. Separately, extend the README paragraph for the
category that grew; that part is prose and has to be written.

## Gotchas

- The **last category block in `data.js` is whatever category came last** — `warmth` at the time
  of writing — so those cards append at the end of the file and everything else inserts after its
  own category's last entry. `tools/add_cards.py` handles both, and starts a new block when the
  category has no cards yet.
- Count entries with `s.count('\n  id: "')`. A regex over whole entry objects misses the last one,
  which ends `}` with no comma.
- `credits.js` keys the photographer as **`artist`**, and duplicate-photo checks group by
  **`title`**, not `file` — two cards can hold the same photo under different filenames.
- `fetch_images.py` walks every entry on every run; at ~500 cards that is over two minutes, so
  run it in the background and wait for the notification rather than polling.
- Captions must not contain `|`, and no text field in `data.js` may contain a double quote.
- Wikipedia link checks: one batched API call, not a loop of curls.

## Commit

One commit per round: the new images, `data.js`, `tools/images.txt`, `credits.js`, `added.js`,
`README.md`, `index.html` and `tools/searchlog.md`. Subject line names the round
("Add thirteen stage and PA materials to Sound & music"), body lists the cards. End with:

```
Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
```

Then report to the user as a table: card, and the one thing that makes it interesting. Say
plainly what was dropped and what images were swapped after looking at them.
