# What to do next

Written 2026-10-20, after the refactor that came with the Warmth & insulation category.
Ordered by payoff per hour, not by how interesting it is to build.

## Where the platform goes, 2026-10-22

Three tracks, chosen because each one makes the catalogue more trustworthy or more
re-visitable without adding a server, a framework or an account. The constraint stays:
five scripts, works off a USB stick.

### 1. Material of the week — built

A red square under the filters names one card, chosen by the ISO week number hashed over
the catalogue. Everyone who opens the page the same week sees the same card; nobody picks
it; there is nothing to maintain. Clicking it clears the filters, scrolls to the card and
outlines it in red.

Next steps, in order of cost:
- An `#week` link people can share, and an `og:image` that follows the pick. Needs a tiny
  Action that rewrites two meta tags every Monday, which is the first thing on this site
  that would not be static. Half a day. Odds it ships cleanly: 80%.
- A short note on *why this one*, written per week, as a `weekly.js` with one line per
  ISO week. That is editorial work, 10 minutes a week, and the thing that would make
  people come back. Odds the habit survives a month: 50%.

### 2. Trusted sources — register built, audit next

`tools/sources.py` writes `SOURCES.md`: every second source in the catalogue grouped by
site, the families that have held up, the sites that refuse scripts, and, with `--check`,
a dated table of which URLs no longer answer. This is the memory the source hunt lacked.

Next:
- The scheduled link audit from item 3 below, now with a tool to run. Monthly Action,
  reports to an issue, never fails the build. Two hours. Odds: 90%.
- A second source for the 440 cards that lack one, one category per session, starting
  with metals (makers' datasheets are plentiful and stable) and ending with music
  (where the honest source is often a luthier's page that will move). The register
  tells the next session which families to try first. Twelve sessions. Odds of finishing
  every category: 40%; of finishing metals, ceramics and composites: 85%.

### 3. Papers — designed, not built

Built 2026-10-22 as a third kind of entry rather than a field on the cards: `papers.js`, 48
papers, each verified against Crossref by `tools/papers.py`, shown among the cards with the year
where the photograph would be and on their own under *the papers*. The reserve of 36 verified
candidates that did not make the first cut is in the session log, with DOIs.

A card whose best evidence is a paper should say so. Design:
- An optional `refs` field: `refs: [["Short title, journal, year", "https://doi.org/..."]]`,
  one to three per card, DOIs only. `check.js` validates the shape and the `doi.org` prefix.
- Rendered in the meta row as `paper` with the title on hover, after the source and before
  read more. No abstracts, no PDFs: the card already says what the paper found.
- Crossref's API answers a script and returns title, journal and year for a DOI, so a
  `tools/refs.py` can verify every DOI and flag retractions. That is the MCP candidate the
  roadmap already lists.
- Where to start: the cards that are already a paper in disguise — milkweed floss,
  self-healing concrete, two-photon resist, graphene, aerographite, MXenes, the
  magnetocaloric and electrocaloric work, the liquid crystal elastomer, SLIPS, Vantablack,
  the shutdown separator if it ever gets a photo. Twenty cards, one session. Odds: 75%.
- What it must not become: a bibliography. A paper earns its place the same way a photo
  does, by being the thing the card's claim actually rests on.

### 4. Plates — built, two so far

A plate is a figure that explains several cards (see the README). The iron–carbon diagram is a
field diagram; the Ashby chart of stiffness against density (added 2026-10-27) is a scatter — the
`points` layer and the log axes the renderer was always said to want, now built, with each dot
linking to its card. Candidates still open, each an afternoon of data entry against a published one:
- the stable iron–graphite diagram beside the metastable one, for grey iron
- a TTT or CCT diagram for a eutectoid steel: time on a log axis, the same renderer
- copper–zinc (brass), copper–tin (bronze), aluminium–silicon, lead–tin (solder)
- the water phase diagram, with ice Ih and the pressure axis on a log scale
- a second Ashby chart on the same engine: strength against density, or toughness against modulus
- the galvanic series as a one-axis plate; Mohs; the glass transition against crystallinity
Odds a third plate lands within a month: 80%.

### 5. Photographs from somewhere other than Wikimedia — tooling done, 107 moved by 2026-10-23

Decided 2026-10-22: the page should not display images taken from Wikipedia and Commons
where any other honest source exists. Commons stays the research tool (search, describe,
peek); what the page shows comes from elsewhere, and Commons is the last resort, used only
when nothing else exists.

Sources that allow display, in the order to try them:
1. the maker: a press image with written permission, or an image released under a licence
   that permits reuse (several makers publish CC BY press kits)
2. public-domain agencies, cited as themselves rather than through Commons: NASA, NIST,
   USGS, FEMA, the US Army, the National Archives, the Library of Congress
3. open-access museums: the Met, Smithsonian Open Access, the Rijksmuseum, the Science
   Museum Group, Cooper Hewitt, the Wellcome Collection, all CC0 or CC BY
4. Flickr under CC BY or CC BY-SA, with the photographer named
5. photographs taken for the site, which is the Bauhaus answer and the slowest
6. Commons, only when the five above produce nothing, and recorded as such

Where it stands (2026-10-23): the tooling is in (`images.txt` source column, fetch by
source, `check.js` count), and 107 of 539 pictures now come from somewhere else: 36
Flickr imports re-cited at Flickr after checking each page and licence, eleven re-cited
at NASA, the Department of Energy, DVIDS, ESO, Poly Haven, GeoDIL and pxhere, and 60
replaced after looking at every candidate from Openverse (Flickr, CC only), NASA's image
library and the Cleveland Museum of Art's CC0 collection. What did not work: Geograph
answers 403 to any script, so its six stay on Commons; the Met and Chicago APIs returned
nothing usable for material names; Openverse anonymous is 200 queries a day (194 cards queried so far, 345 not yet) and most hits
for alloy names are people and places called the same thing. The museum route is the one
that pays for cloth, fibre, wood, bone, horn and instruments. The remaining 432 are mostly
Commons users' own photographs of samples, which no museum or agency has; those need
makers or our own camera.

What it needs:
- `tools/images.txt` grows a source column: `id|source|file-or-url|caption|kind|licence|credit|page`,
  so a row can come from any of the six; `fetch_images.py` fetches by source and
  `credits.js` records the origin honestly
- a per-category migration, one session each, same bar as the first round: look at every
  photograph before it goes in
- `check.js` reports how many cards still show a Commons image, so the number is visible
  and goes down
Cost: 539 photographs at roughly fifteen a session is a season's work. Odds the tooling
lands in one session: 90%. Odds every category is migrated within three months: 30%; the
honest target is the categories with makers behind them first (plastics, metal, film and
foil, additive), where press images exist.

Not doing: comments, accounts, votes, a newsletter, analytics of any kind. The week's card
is the only thing that changes without a commit, and it changes by arithmetic.

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
| Plates (2026-10-22) | A new entity for figures that explain several cards, with a data-driven renderer and a pointer readout. The iron–carbon diagram is plate 1. |
| Material of the week, sources register (2026-10-22) | A weekly pick by arithmetic, and `SOURCES.md` generated from the cards so the source hunt starts from what worked. See the tracks above. |
| Bauhaus redesign (2026-10-22) | Paper by default, Jost bundled, lowercase chrome, one working red, stats as a hairline table, a running card number, categories named after the workshops they descend from. The rules and the lineage are in the README under Design, so the next change has something to be consistent with. |
| Reference band + six nitpicks (2026-10-27) | Plates, papers and the library scattered among the materials under every filter and sort; they now gather in a labelled band at the end, and the shelves still isolate one kind. Alongside: the stale red pick outline clears on each jump, the field-diagram readout reads from its own axes instead of hard-coding iron, `render.js` exercises the library, and the count line leads with the collection on a shelf. Tracked in `NITPICKS.md`. |
| A second view per card (2026-10-27) | A card can carry an `extra` list of more images, each a credit id of its own sourced through `images.txt` like the rest; the lightbox pages them with arrows, dots and the arrow keys, and the card says how many. Seeded with four — Nitinol wire, the abalone interior, the cork harvest, a brick on a slab of aerogel — the first step on 257 cards whose one picture is a stand-in. |
| The library and the principles (2026-10-26) | A fourth entity (`library.js`): 16 primary Bauhaus texts by the masters and the students who stayed to teach — Gropius's manifesto, the Bauhausbücher, Klee, Kandinsky, Moholy-Nagy, Itten, the Alberses, Stölzl, Brandt — each linking out to a public-domain copy or, where still in copyright, a place to find one, and saying which. `PRINCIPLES.md` writes down the house rules those texts are the source of, and the re-evaluation that checks the portal against them. `check.js` now refuses a text that claims the public domain with no reading link. |

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

## From the magazine comparison (2026-10-26)

Drawn from `COMPARISON.md`, which sets the portal against IEEE Spectrum, Quanta, AZoM, MatWeb, the
Materials Project and the UCL Institute of Making. The portal leads on curation, browsability, design,
sourcing and cost; it lags on depth, interactivity, property search and visible authority. The gaps,
each mapped to the neighbour that shows the way, highest value for the effort first:

1. **An Ashby chart as a plate** — ✓ done 2026-10-27. Stiffness against density, 39 materials as
   points, log axes, each dot linking to its card; the `points` layer the renderer always wanted is
   built. Borrowed from the Materials Project and Quanta.
2. **A compare view** — two or three cards' stats side by side. Borrows from MatWeb. Wants (7). Odds 65%.
3. **An on-page about / method page** — surface `PRINCIPLES.md`, the credits and the sourcing rules, so
   the trust the site earns is visible. Borrows from Spectrum bylines. Small, high value. Odds 90%.
4. **Related materials on each card** — two or three near neighbours from shared workshop, theme or
   paper. Borrows from Wikipedia. Odds 80%.
5. **A recently-added feed and per-card Open Graph images** — from `added.js`. Borrows from the magazine
   newsletters. Overlaps the generated-social-cards note above. Odds 75%.
6. **More plates** — TTT/CCT, copper–zinc, the galvanic series (already in §4). Odds 85%.
7. **A structured property schema for `stats`** — ranges and units behind the free-text pairs; the
   foundation under (1), (2) and any numeric filter. Large. Odds 55%.
8. **A long-read layer** — a card expands to a fuller essay only where it earns one, depth kept opt-in.
   Borrows from Spectrum and Quanta; guard against breaking the economy-of-means principle. Odds 50%.

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
