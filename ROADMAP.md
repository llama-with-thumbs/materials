# What to do next

Written 2026-10-20, after the refactor that came with the Warmth & insulation category.
Ordered by payoff per hour, not by how interesting it is to build.

## Just done

| Change | Why it mattered |
|---|---|
| `taxonomy.js` | Categories, picture kinds and themes were hard-coded in `app.js` and unknown to the tools. A typo in `cat` used to render a card with a blank badge; now `check.js` fails. |
| Themes (`tags`) | A card has one category but can do several jobs. Merino stays under ropes and still appears under Keeping warm. This is the mechanism the warmth category needed. |
| Card HTML cached, search debounced | Every keystroke rebuilt 486 cards from scratch. Now each card's HTML is built once and re-used, and typing waits 120 ms for a pause. |
| Accent-folded search index | `pina` finds Piña, `crepe` finds Crêpe, and the index covers the stats and the category name, not just the prose. |
| `width`/`height` on every image | `credits.js` now records the real pixel size, read from the file with no PIL dependency. The grid stops jumping while photographs load. |
| `content-visibility` on cards | The browser skips layout for the cards nobody is looking at. |
| Theme chosen before first paint | A light-mode reader used to get a dark flash while `app.js` parsed half a megabyte. |
| Shareable URL state | `#cat=warmth&q=hollow&sort=az` restores the view. A filtered page can be sent to someone. |
| `fetch_images.py` made incremental | It re-queried Commons for all 486 rows on every run, over two minutes. Now it asks only about what changed: 20 seconds for a 15-card round. |
| `tools/build.py` | One command runs the five steps in the only order that works and stops at the first failure. The order used to live in a skill file. |
| Stricter `check.js` | Now also checks: category and tag declared, exactly three stats, `src` shape, duplicate names, licence not NC/ND, image dimensions present, `images.txt` agrees with `data.js`, files on disk nobody references. |
| `render.js` exercises the controls | It rendered the grid and the sorts; it now also drives search, every filter, every theme and the URL state. It is the CI test. |
| 64 dead `swatch` blocks removed | They sat beside a photograph, so they could never draw. Dead code that cannot run is worse than no code. |
| CI on every push | `check.js`, `render.js`, a counts-are-current check and a secret scan. |
| `LICENSE`, `robots.txt`, `sitemap.xml`, Open Graph tags | The site is public now. MIT for the text and tools; the photographs keep their own licences, which is spelled out. |
| Skip link, `aria-live` count, lightbox close button, print stylesheet | The small accessibility debts. |

## Next, in order

### 1. Thumbnails — the biggest single win

Every card loads a 900 px photograph (~200 KB) to display it at about 340 px. Generate
`images/thumb/<id>.webp` at 480 px with PIL, reference them with `srcset`, keep the big file
for the lightbox. Expect the grid to get four to six times lighter. Half a day, and it is the
difference between usable and not usable on a phone with a bad signal.

### 2. A second source for the other 432 cards

59 polymers and 10 of the 15 warmth cards carry `src`. The method is proven and recorded in
`tools/searchlog.md`, including which source families answer a script and which 403. Work one
category per session, verify every URL over HTTP before it is written, and never substitute a
shop for a reference.

### 3. A link audit that runs itself

A scheduled Action, monthly: batch every `link` through the MediaWiki API, HEAD every `src`,
write the failures into an issue. Wikipedia titles move, company pages die constantly. This
should report, never fail the build.

### 4. More themes

`warmth` proved the mechanism. The honest next ones, each needing a curation pass rather than
a grep: **fire and heat**, **wet and waterproof**, **wear and abrasion**, **electrical**,
**medical and in the body**, **space and vacuum**. Roughly half an hour per theme to do
properly; do not bulk-tag by keyword, because the point of a theme is that a person decided.

### 5. One card, one link

Every card already has `id="m-<id>"`. Add a copy-link affordance and open the lightbox when the
page loads with that fragment. Cheap, and it makes individual cards quotable.

### 6. A credits page

`credits.html`, generated: 501 photographs, photographer, licence, source link. It is good
licence hygiene and it is the page somebody reusing an image actually needs.

### 7. Deploy through Actions

Pages currently builds straight from `master`, so a broken commit publishes itself. Move to the
Actions deploy so `check.js` and `render.js` gate the deploy.

### Smaller, worth doing when annoyed enough

- Search ranking: a name match should sort above a hook match. Currently all hits are equal.
- Keyboard: `/` to focus search, `Esc` to clear, arrow keys through the lightbox.
- A random-card button. The catalogue is for browsing, and 501 cards is too many to browse linearly.
- A service worker: cache the shell and visited images, and the field guide works in the field.
- Generated social cards per category, so a shared link shows something.

## Deliberately not doing

- **No framework, no bundler, no npm.** The page is five scripts and works off the filesystem.
  Every dependency added would have to be maintained for a site with no deadlines.
- **No JSON + `fetch` for the data.** It would cut parse time, but `fetch` is blocked on
  `file://`, and opening `index.html` straight off a USB stick is a feature.
- **No analytics.**
- **Images stay in the repository.** 97 MB is a slow clone and nothing else. LFS costs money and
  rewriting history costs an afternoon.

## Content backlog

From `tools/searchlog.md`, all blocked on a photograph rather than an idea: timpani copper bowl,
fretwire, loudspeaker spider, bow hair, nitrocellulose finish, piano key covering, paper-machine
forming fabric, solid-woven belting, yak down, downproof ticking, Thinsulate, electric blanket
element, silk wadding, cellular blanket.

Categories that could carry fifteen honest cards each: **adhesives and tapes**, **lubricants and
greases**, **coatings and paint**, **battery and cell materials**, **marine and anti-fouling**,
**packaging**, **nuclear**, **civil and construction**.

## Skills worth building

The pattern that works: a skill is a routine that has already been done twice by hand, written
down with its gotchas, so the third time is not an archaeology exercise.

| Skill | Fires when | What it does |
|---|---|---|
| `catalogue-qa` | before any push | `build.py`, then headless screenshots at three widths, console errors, a sample of links. One short report. Stops the "it renders in the stub" class of bug. |
| `source-hunt` | "add sources to the metals" | Walks a category, finds a non-Wikipedia source per card, verifies it over HTTP, writes `src`, logs the families that refused. Carries the 403 blocklist so it is not rediscovered every time. |
| `image-swap` | a photograph turns out to be wrong | Delete the file, re-fetch, fix caption and `kind`, add the rejection line to `searchlog.md`. Four steps, all easy to half-do. |
| `theme-tag` | a new theme | Propose candidates, confirm each by reading the card, write `tags`, update `taxonomy.js` and the README. |
| `publish-site` | "push it" | Secret scan, push, poll the Pages build, check every asset returns 200, report the URL. |
| `card-doctor` | maintenance | Audit a sample of existing cards against their sources: stale figures, claims that drifted, dead links. Growth is easy; rot is what kills a catalogue. |

Not worth a skill: starting a new category (five steps, now in `add-materials`), or anything
done once.

## MCP servers worth adding

| Server | What it buys here | Verdict |
|---|---|---|
| **Playwright** | A real browser: accurate viewports, console errors, the accessibility tree, clicking things. Today's screenshots come from Chrome's old headless, which clamps the window to 500 px and lies about phone width. | **Add it.** Highest value for the money. |
| **A local `materials` server** wrapping `tools/*.py` | `search_commons`, `describe_file`, `peek`, `add_cards`, `build` as typed tools with the validation inside the server instead of in a skill document. Turns a six-step shell dance into four calls and makes the rules unskippable. | **Add it.** About 150 lines against the Python MCP SDK. |
| **Wikipedia / Wikidata** | Link verification and structured facts — density, melting point, year — with a citation, straight into the stats. | Worth it. Accuracy, not speed. |
| **Crossref or OpenAlex** | A DOI for cards where the best source is a paper, as the milkweed card already is. | Worth it for `src` quality. |
| **Fetch / HTTP with a browser user agent** | Source verification at scale. | `tools/urlcheck.py` already does 80% of it. Only if the source hunt becomes the main activity. |
| **GitHub** | Actions status, issues as the content backlog. | Marginal — the `gh` CLI is already authenticated. |
| **SQLite** | Real queries across the catalogue. | Not yet. Revisit past a thousand cards. |
| **Memory / knowledge graph** | — | No. The file memory and `searchlog.md` already do this, and they are readable by a human. |
