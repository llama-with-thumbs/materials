# Interesting Materials among the magazines and the databases

*Where this portal sits in the landscape of materials publishing, what the neighbours do better,
and the fixes that fall out of the comparison. Written 2026-10-26.*

## The short version

Interesting Materials is neither a magazine nor a database, and that is its whole position. A
magazine like IEEE Spectrum publishes a few deep, authored stories a week; a database like the
Materials Project holds a hundred thousand computed compounds nobody reads for pleasure. This
portal is the thing in between: a *curated field guide* of 539 materials, each kept for one
nameable reason, browsable like a catalogue and written like an explainer, set in a single design
system and free. Against the magazines it wins on browsability, honesty of sourcing and cost, and
loses on depth, authority signals and interactive polish. The upgrades at the bottom come straight
from that second list.

## The landscape

| Neighbour | What it is | Its strength | Its weakness | What this portal can borrow |
|---|---|---|---|---|
| **IEEE Spectrum** | Engineering magazine | Deep authored features, special-report *packages* (Top Tech, Top Programming Languages), interactive infographics, a strong modular visual identity | Few items, paywalled depth, no browsable catalogue of *things* | Interactive packages; a full-width "feature" treatment for a standout card |
| **Quanta Magazine** | Explanatory science magazine | Best-in-class explanatory writing and hand-built interactive graphics; everything free | Narrow topic set; no catalogue | Interactive diagrams as a first-class format — the plates are the start of this |
| **AZoM** | Materials-science news site | Huge volume, an A–Z materials index, supplier directory, free | SEO-shaped, shallow, commercial, an AI answer box that warns it may be wrong | The A–Z index idea; nothing of the commerce or the volume-over-care model |
| **MatWeb / Matmatch** | Materials property databases | Hundreds of thousands of datasheets, filterable by property *number* | Dry, datasheet-first, no story, registration walls | Structured, comparable properties — the enabler for a compare view |
| **Materials Project** | Computational materials database | ~150k+ computed materials, an open API, built for researchers | Unreadable for a lay audience; no editorial, no design | Property-space thinking (an Ashby chart with the cards plotted) |
| **Institute of Making, UCL** | A physical materials *library* | A curated handling collection (~1,500 samples) you can pick up; playful, tactile, expert | Physical, members-only, not online | The curator's voice and the one-reason selection — the closest sibling in spirit |
| **Material ConneXion** | Commercial materials library for designers | Curated, cross-industry, well-photographed | Subscription, trade-facing, closed | Curation discipline; none of the wall |
| **Wikipedia** | The encyclopedia | Comprehensive, free, linked | No curation for interest, no design, variable depth | Dense cross-linking between related entries |

## The scorecard

How the portal rates against the field, axis by axis. "Lead" / "par" / "behind" is the portal's
standing, not a grade.

| Axis | Portal's standing | Note |
|---|---|---|
| **Curation** (one reason per item) | **lead** | The defining move. Magazines curate stories, databases curate nothing; only the Institute of Making curates *things* the way this does, and it is not online |
| **Browsability** | **lead** | 539 cards, one grid, instant filter and search, shareable URL state. No magazine offers this; databases offer it joylessly |
| **Design coherence** | **lead** | One typeface, one colour, a dark theme that only swaps ink and paper. Spectrum has a strong identity too; nobody else in materials does |
| **Sourcing honesty** | **lead** | Every image licensed and credited, every founding claim tied to a paper, the library linking out to the primary text. Stronger than AZoM, on a par with the best journalism |
| **Access and cost** | **lead** | Free, open, works with JavaScript off. Spectrum, MatWeb, Material ConneXion all wall something |
| **Depth per item** | **behind** | A card is a paragraph; Spectrum and Quanta give 3,000 words. The papers and plates are the first step toward depth on demand |
| **Interactivity / data-viz** | **behind** | One plate so far. Quanta and Spectrum ship bespoke interactives; the Materials Project ships data |
| **Property search** | **behind** | Search is text only. MatWeb and the Materials Project filter by density, modulus, temperature *ranges*; this portal cannot answer "show me everything stiffer than steel" |
| **Authority signals** | **behind** | The page is anonymous. Spectrum has bylines, AZoM has expert profiles. The principles and credits exist but are not surfaced on the page |
| **Cadence / freshness** | **par** | "Material of the week" and the growing count are the heartbeat; magazines publish continually, databases update silently. No feed or newsletter yet |
| **Breadth** | **by choice** | 539 curated against Wikipedia's millions and the Materials Project's 150k. Smallness is the point, not a deficit |
| **Accessibility / performance** | **lead** | Lightweight, keyboard-reachable, degrades to readable data. Most magazine sites are heavier and worse |

## Where it wins, where it lags

**It wins** by doing the one thing none of the others does at once: *choosing* the materials, *saying
why* each is interesting, and *showing the source*, inside a design that treats the reader's attention
as the scarce resource. A magazine cannot be browsed; a database cannot be read; the Institute of
Making cannot be opened in a tab. This portal is all three at a small size, and the library and
principles just added make its honesty its signature.

**It lags** wherever a reader wants to go *deeper* or *compare*. There is no long read when a card
earns one, no way to plot stiffness against density, no way to filter by a number, and no visible
author to trust. These are not flaws in the idea; they are the next rooms to build, and every one of
them has a neighbour who has already shown how.

## The upgrades that fall out of this

Ranked by value for the effort. "Borrow from" names the neighbour whose strength this closes the gap
to. Odds are the chance it lands well if attempted, in the ROADMAP's manner.

| # | Upgrade | Borrow from | Closes the gap on | Effort | Odds |
|---|---|---|---|---|---|
| 1 | **An Ashby chart as a plate** — stiffness against density, the cards plotted as points, pan and read like the iron–carbon figure | Materials Project, Quanta | interactivity, property thinking | medium (needs a `points` layer in `figures.js`) | 70% |
| 2 | **A compare view** — pick two or three cards, see their stats side by side | MatWeb, Matmatch | property search, depth | medium–large (wants structured stats first, see #7) | 65% |
| 3 | **An on-page about / method page** — surface `PRINCIPLES.md`, the credits and the sourcing rules, so the trust the site earns is visible | Spectrum bylines, AZoM experts | authority signals | small | 90% |
| 4 | **Related materials on each card** — two or three links to near neighbours, derived from shared workshop, theme or paper | Wikipedia, Quanta | discovery across 539 cards | medium | 80% |
| 5 | **A "recently added" feed and per-card share images** — an RSS/JSON feed from `added.js`, and an Open Graph image per card | Spectrum, Quanta newsletters | cadence, shareability | medium | 75% |
| 6 | **More plates** — a TTT/CCT curve, copper–zinc, the galvanic series; the renderer already generalises | Quanta, Spectrum interactives | interactivity | medium, repeatable | 85% |
| 7 | **A structured property schema for `stats`** — ranges and units behind the free-text pairs, the foundation under #1, #2 and any numeric filter | Materials Project, MatWeb | property search | large, foundational | 55% |
| 8 | **A long-read layer** — let a card expand to a fuller essay only where the material earns it, so depth is opt-in and the grid stays light | IEEE Spectrum, Quanta | depth per item | large; guard against breaking principle 6 (economy) | 50% |

**Deliberately not borrowed:** the supplier directory and "request a quote" (AZoM) — the portal is not
a marketplace; the volume-over-care model (AZoM, Wikipedia) — smallness is the thesis; video and
podcast (Spectrum) — they fail the economy-of-means test; and any registration wall (MatWeb, Material
ConneXion) — the page stays free and open.

## Sources

- [IEEE Spectrum 2025 media kit](https://advertise.ieee.org/wp-content/uploads/2025/01/2025-Spectrum-Media-Kit.pdf) and the [Pentagram redesign](https://www.pentagram.com/work/ieee-spectrum)
- [Institute of Making Materials Library](https://www.instituteofmaking.org.uk/materials-library) and [Times Higher Education on the collection](https://timeshighereducation.com/node/112508)
- [About AZoM](https://www.azom.com/aboutus.aspx) and its [materials index](https://www.azom.com/materials.aspx)
- [Materials Project](https://materialsproject.org) and the [US DOE write-up](https://www.energy.gov/science/articles/search-engine-materials-data-how-materials-project-advances-research)
</content>
