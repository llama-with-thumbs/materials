# Guiding Principles

*A Bauhaus rule of conduct for Interesting Materials.*

This catalogue calls itself "the preliminary course, continued." That is a claim, and a claim
should answer to its source. These principles are drawn from the writing of the people who ran
the Bauhaus and taught its preliminary course — the texts now collected in [the library](library.js) —
and every one of them is meant to be *checked*, not admired. Where a principle can be enforced
by `tools/check.js`, it is. Where it can only be judged by eye, the judge is this page.

The order is the order of the work: first what the thing is, then how little we may say about it,
then how honestly we may show it, last how plainly we may set it.

---

## 1. The material first, its picture second

> "Art is not a profession. There is no essential difference between the artist and the
> craftsman." — Gropius, *Bauhaus Manifesto*, 1919

The Bauhaus sent every student to the workshop before the drawing board: a term of handling
metal, wood, paper and cloth, to learn what each will do and what it refuses to do. A card here
is first the behaviour of a material — what it does, how it is made, how it fails — and only then
a photograph of it. A card that is mostly a pretty picture with a caption has the order backwards.

**In practice:** the `hook` carries the reason the material is interesting; the three `stats` are
properties, not adjectives; `uses` says where you actually meet it. The photograph is evidence, not
the point.

**Checked by:** `check.js` requires `hook`, `stats` (exactly three pairs) and `uses` on every card.

## 2. One reason, or it does not earn its place

> "To design is to plan and to organize… to accept nothing arbitrary." — Kandinsky,
> *Point and Line to Plane*, 1926

The footer already says it: "nothing on the page that is not doing a job." Every material is here
for one nameable reason — a thing it does, a way it is made, or a way it fails — and the card names
it. A material that is only ordinary, or only famous, is not a candidate. Neither is a second card
that makes the same point as the first.

**In practice:** the ROADMAP's rule holds — "a paper earns its place the same way a photo does, by
being the thing the card's claim actually rests on." The same test governs every entry type.

**Checked by:** `check.js` forbids duplicate names and duplicate source photographs; a shared image
is a sign two cards are making one point.

## 3. Show the thing itself; where you cannot, say what you are showing

> "The concern is the discrepancy between physical fact and psychic effect." — Josef Albers,
> *Interaction of Color*, 1963

Albers built a whole course on the gap between what a thing *is* and what it *appears* to be. The
honest answer to that gap is to label it. When no free photograph of the material itself exists, the
card shows the next best thing — something made from it, how it is made, a close relative, a similar
example — and stamps in red on the picture what it actually is. The reader is never allowed to mistake
an analogue for the thing.

**In practice:** the `KINDS` vocabulary (`structure`, `product`, `process`, `related`, `analog`) is
exactly this disclosure, printed on the corner of the photograph and repeated in the lightbox caption.

**Checked by:** `check.js` requires a declared `kind` for any non-photograph and refuses an unknown one.

## 4. Truth to the source: every claim rests on something a reader can reach

> "From material to architecture." — Moholy-Nagy, *Von Material zu Architektur* (The New Vision), 1929

Moholy-Nagy's title is a direction of travel: form is earned from the honest nature of the material,
not imposed on it. A catalogue that continues his course owes the same honesty about where its facts
come from. Every photograph keeps its licence and its origin; every founding claim can be traced to a
paper; the library links out to the primary text so a reader can go past this page to the source.

**In practice:** `credits.js` carries a licence and a page for every image; `papers.js` carries a DOI
checked against Crossref; `library.js` links to a public-domain full text or, failing that, the
publisher — and says which.

**Checked by:** `check.js` rejects a non-reusable licence (NC, ND, "fair use"), a malformed DOI, and a
public-domain library entry with no reading link; `papers.py` resolves every DOI through Crossref.

## 5. Form is the record of a process

> "A line is a dot that went for a walk." — Paul Klee, *Pedagogical Sketchbook*, 1925

Klee taught form as the visible trace of the forces that made it. The plates are this principle made
literal: the iron–carbon diagram is not a decoration between the cards but a map of the forces — carbon
and heat — whose paths are every heat treatment of steel. A material is best explained by the process
that shapes it and the process that breaks it.

**In practice:** plates explain several cards at once by drawing the field they share; a card's `hook`
favours the mechanism over the marketing.

**Checked by:** `check.js` validates a plate's figure — zones must tile the axes and carry phases and a
structure — so a diagram cannot ship half-drawn.

## 6. Economy of means

> "Less is more." — Mies van der Rohe, director of the Bauhaus, 1930–1933

One typeface (Jost, after Futura), one working colour (red), everything lowercase, a dark theme that is
the same page with ink and paper swapped and nothing else. Ornament is not neutral; it is noise charged
to the reader. Every element on the page is asked the Kandinsky question — what job are you doing — and
removed if the answer is none.

**In practice:** the design system in `style.css` is deliberately small; the page works with JavaScript
off, degraded to the raw readable data.

**Checked by:** eye, and the standing rule that a new feature must remove or justify its weight.

## 7. The workshops are the order

> The Bauhaus organised its teaching by material workshop — metal, weaving, cabinetmaking, wall-painting,
> print — not by product or market.

The categories here are named after those workshops and set in the Bauhaus manner, lowercase: "metal,"
"clay and glass," "yarn and rope," "the preliminary course." A material is filed under what it *is*, in a
workshop; a theme is a job it happens to do, and cuts across the workshops without moving the card.

**In practice:** `taxonomy.js` is the single vocabulary; a category or theme not declared there is a hard
error, not a silent typo.

**Checked by:** `check.js` rejects any card, plate, paper or text that names an undeclared workshop.

---

*These principles are the test the portal is measured against in [the audit below](#the-portal-measured-against-these-principles).
A change to the portal that cannot be defended by one of them is a change that needs a new principle first.*

## The portal measured against these principles

The honest headline of the re-evaluation: the portal already obeys most of these principles, because
it was built on them before they were written down. What was missing was not the practice but the
*source* — the principles were implicit, and the Bauhaus texts they derive from were nowhere on the
page. The library and this document close that gap. The audit, principle by principle:

| # | Principle | Verdict | Evidence |
|---|---|---|---|
| 1 | Material first | **holds** | `hook`, three `stats` and `uses` are required on every card; the photograph is evidence, not the lede |
| 2 | One reason | **holds** | `check.js` forbids duplicate names and shared source photographs |
| 3 | Say what you show | **holds** | the `KINDS` vocabulary stamps `analog`/`related`/`process` in red on every non-photograph |
| 4 | Truth to the source | **partial** | images are licensed and credited and papers are Crossref-checked, but 432 of 539 pictures still sit on Wikimedia Commons; owning more of them is ongoing (ROADMAP §5, 107 moved). The library now adds a third, outward-linking source layer |
| 5 | Form is process | **thin** | the mechanism exists — drawn figures, the pointer readout — but only one plate has been made; the principle is underused, not broken (ROADMAP §4) |
| 6 | Economy of means | **holds** | one typeface, one colour, lowercase, a dark theme that only swaps ink and paper, a page that works with JavaScript off |
| 7 | The workshops are the order | **holds** | `taxonomy.js` is the single vocabulary; an undeclared workshop is a hard error |

### What this pass changed

- **Added the library** (`library.js`, wired through `app.js`, `index.html` and `check.js`). It serves
  principle 4 directly — a third layer of checkable sources beside the image licences and the paper DOIs —
  and principle 1: a reader can now leave this page for the primary text instead of trusting the summary.
- **Wrote these principles down** (`PRINCIPLES.md`), turning an implicit house style into a rule that a
  future change must answer to.
- **Taught the checker the library's own honesty rule**: `check.js` now refuses a text that claims the
  public domain without either a reading link or a named holding institution, the same way it already
  refused a non-reusable image licence. The rule of conduct is enforced, not just stated.
- **Documented the library** in `README.md`, at parity with the plates and the papers.

### What this pass deliberately did *not* change

Principle 6 forbids adding weight without a job. The evaluation found no principle being *violated* that a
new feature should fix, so none was bolted on. The masthead was left alone — the new *the library* shelf
button surfaces the texts without a second paragraph of chrome. The two standing shortfalls (more plates,
more images off Commons) are growth already tracked in the ROADMAP, not defects to paper over here.

</content>
