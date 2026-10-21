# Interesting Materials

A single-page field guide to 508 materials that exist because of one specific trick — a
polyurethane that carries tons without overheating, a ceramic that clamps its own cracks shut,
a lashing that tightens itself as it dries, an airbag woven closed so it has no seam to burst.

Each card gives the material's name and chemistry, what makes it interesting, two or three
characteristic numbers, and where you actually run into it.

## Viewing it

Open `index.html` in a browser. No build step, no server, no dependencies — plain HTML, CSS and
a handful of plain script files, and it works straight off the filesystem.

## Layout

```
index.html     page shell
style.css      styling, dark by default with a light toggle
taxonomy.js    the vocabulary: categories, picture kinds, cross-cutting themes
app.js         rendering, search, filters, sort, shareable URL state, lightbox
swatch.js      the drawn fallback used when a material has no photograph
data.js        the catalogue — 508 entries, this is the file to edit
credits.js     generated: image filenames, dimensions, photographers, licences, links
added.js       generated: when each entry joined, in add order — the default sort
images/        508 images, 900 px wide
robots.txt     sitemap.xml   for search engines
LICENSE        MIT for the text and the tools; the photographs keep their own licences
tools/
  build.py           one command: rebuild everything, then run every check
  images.txt         id | Commons filename | caption | kind
  fetch_images.py    downloads missing images and regenerates credits.js (incremental)
  added.py           rebuilds added.js from the git history of data.js
  add_cards.py       inserts new cards from a JSON file into data.js and images.txt
  search.py          Commons search for candidate photographs
  describe.py        descriptions, sizes and licences of candidate files
  peek.py            downloads candidates somewhere scratch, to be looked at first
  readme_numbers.py  rewrites every count in README.md and index.html from the data
  check.js           data.js against taxonomy.js, credits.js, images.txt and images/
  render.js          renders the grid in a DOM stub and exercises the controls
  searchlog.md       what was searched for and not found, and why
.github/workflows/check.yml     the same checks on every push
.claude/skills/add-materials/   the whole routine, written down
```

One command rebuilds and verifies the lot:

```sh
python -I tools/build.py          # images, credits, add order, counts, both checks
python -I tools/build.py --quick  # skip the network and git steps while editing the page
```

## Categories

| `cat` | Shown as | Entries |
|---|---|---|
| `polymer` | Polymers & elastomers | 59 |
| `metal` | Metals & alloys | 46 |
| `ceramic` | Ceramics & glass | 50 |
| `electronic` | Semiconductors & optics | 29 |
| `composite` | Composites & structures | 36 |
| `additive` | 3D printing & additive | 20 |
| `fibre` | Ropes & woven materials | 69 |
| `fabric` | Fabrics & constructions | 51 |
| `natural` | Natural & biological | 29 |
| `exotic` | Active & exotic | 32 |
| `music` | Sound & music | 65 |
| `warmth` | Warmth & insulation | 22 |

`additive` is a materials category like the rest: each card is a feedstock or the stuff a printed
part is made of — filament, resin, powder, wire, slurry, bath — and the process that consumes it is
named in the subtitle and the stats, not made the subject. It is deliberately short: twenty
materials that each carry their own distinct picture, rather than a card for every machine on the
market.

`music` is the same idea applied to sound: alloys and woods chosen for how they ring, a few recent
developments, and three or four materials whose acoustic behaviour nobody designed — sand that booms
when it slides, diabase boulders that answer a hammer like metal, an oil drum that became an
instrument, a coiled spring whose dispersion turned into the sound of an amplifier. It also covers
the mounts: the headstock a bell hangs from, the felts that hold a cymbal without clamping it, the
cushion under a singing bowl, the glue inside a violin — every one of them a choice between
coupling the instrument to something and isolating it from everything. The later additions
follow the sound out of the instrument and into the equipment — the pulp cone and voice coil of a
loudspeaker, the metal dome of a tweeter, the compound a record is pressed from, the wood-wool
board on a hall ceiling — and end on grain-oriented electrical steel, which hums at twice the
mains frequency for no better reason than that magnetising it makes it change length. After that
come the small parts that decide how an instrument speaks and that nobody photographs: the felt
on a piano hammer, the two-micrometre ribbon in a microphone, the steel tongue in an accordion,
the pad under a saxophone key, the lacquer disc every record is cut on. Then the gear that
carries the sound to a room, which is mostly not instrument making at all: a moulded
polypropylene PA box, perforated grille steel, the rubber surround of a cone, laminated road
case panel, tolex, grille cloth, aluminium truss, gaffer tape and a sheet of lighting gel.

`warmth` is the newest category and the first one that is a job rather than a chemistry: what
people put between a body and the cold. The first round was the fibres that do it best —
eiderdown whose barbules hook into each other so it needs no baffles, hollow hair from rabbits,
camels, possums and reindeer, a wild camelid fleece at twelve microns, vicuna and alpaca and
the nap raised on a flannel shirt, the siliconised hollow polyester that replaced all of it,
milkweed floss out of a wartime kapok shortage, the carroted fur felt that poisoned its hatters,
and snow, which insulates as well as a mineral wool batt until the heat inside glazes it to ice.

The second round takes a duvet apart, because a duvet is an argument between four materials
rather than one thing: the fill, sold as a down-to-feather ratio because a feather has a shaft
and a down cluster has not; silk wadding, pulled by hand into continuous sheets and therefore
needing no quilting at all; the thread lattice that cages a loose cotton batt instead of
stitching through it; and the downproof ticking that stops any of them escaping, at the price
of a cloth that barely breathes. Three more do the same job for buildings — milled newsprint
blown into a cavity, flax tow carded into mats, and the eelgrass that has kept the roofs of
Læsø warm for three hundred years.

## Themes

A card has exactly one category, which is what the material *is*. A theme is a job it happens
to do, and a card can carry several — declared as `tags: ["warmth"]` in `data.js` and listed in
`taxonomy.js`. Filtering on a theme shows its own category plus every card tagged with it, so
merino wool stays filed under ropes and woven materials and still turns up under *Keeping warm*
along with down, cashmere, qiviut, kapok, fleece, felt, tweed, mineral wool, EPS, aerogel,
vacuum panels and phase-change material.

*Inside a duvet* is the second theme, and it is deliberately narrow: fifteen cards that are
either the filling, the cloth around it, or the thing that stops the filling moving. A card
is only tagged with it if its own `uses` line says it goes into bedding, which is why camel
hair and alpaca are not in it even though both are sold as duvets somewhere.

The three jobs, and why each material is chosen for one of them:

| Job | Cards | What the choice decides |
|---|---|---|
| Filling | goose down, eiderdown, feather-and-down blend, silk wadding, polyester fibrefill, cotton batting, kapok, milkweed floss, merino | Warmth per gram, what happens when it gets wet, and whether it can be washed. Down wins on warmth and loses completely when damp; polyester survives the wash and dies of compression; cotton is heavy and walks; silk cannot migrate but has no loft at all |
| Lining and cover | downproof ticking, satin weave, seersucker, flannel, lyocell | Whether the filling stays in, and what the cloth does against skin. Ticking is woven tight enough to stop a quill and is therefore nearly airproof; seersucker lifts off the skin; flannel's nap holds a layer of still air; lyocell moves moisture |
| Holding it together | thread lattice | Whether the filling can move inside its cover. Quilting lines, baffle walls and the Hainan thread lattice are three answers to one problem: an unrestrained batt migrates to the corners and leaves cold voids |

## Order

The cards are sorted by when each one was added, oldest first, so the newest are at the bottom of
the page. The select next to the search box also offers newest first, A–Z, and the grouping the
file itself uses — category by category, add order within each. The choice is remembered.

There is no date field in `data.js`. The add order comes from git: `tools/added.py` walks every
commit that touched `data.js`, oldest first, and records the commit a given id first appeared in.
Run it after adding materials:

```sh
python tools/added.py
```

It writes `added.js`, whose key order *is* the sort order. Entries added but not yet committed are
not in the history yet, so they sort to the very end — which is where they belong anyway. Run it
again after committing and they get their real date.

A pair of buttons at the bottom right jumps to the top or the bottom of the page; each greys out at
the end it points to, and both disappear on a page too short to scroll.

`fibre` and `fabric` split the same way everywhere: `fibre` holds the stock — fibres, yarns,
ropes and the plants they are cut from — and `fabric` holds what is made by putting that stock
together, which is why a weave or a knit with no new material in it still gets its own card — and
why `fabric` also holds the finishes and the cloths made with no yarn at all: fulling, flocking,
permanent pleating, beaten barkcloth.

## Adding a material

Append an entry to `data.js`:

```js
{
  id: "shortname", cat: "ceramic", name: "Display name",
  sub: "chemistry or trade name", img: "shortname",
  hook: "Why it is interesting — the one thing it does that nothing else does.",
  stats: [["Property", "value"], ["Property", "value"]],
  uses: "Where you meet it.",
  link: "https://en.wikipedia.org/wiki/...",
  src: ["Who says so", "https://..."],
  tags: ["warmth"]
}
```

`link` is the encyclopaedia entry; `src` is the second opinion — a maker's datasheet, a trade
body, a teaching page, a standards or conservation reference. Anything but Wikipedia, because one
source is not a source. Check it actually loads before committing it: manufacturers move pages
constantly, and a few answer 403 to a script while opening fine in a browser.

All 59 polymer and elastomer cards carry one, and the warmth cards carry one wherever a source
existed that was not a shop. The other categories do not yet.

`tags` is optional and cross-cuts the categories; see *Themes* above. Both the category and
every tag have to be declared in `taxonomy.js` or `tools/check.js` fails.

For a picture, add a line to `tools/images.txt` as `id|Commons File name.jpg|caption|kind` and run:

```sh
python -I tools/fetch_images.py
```

That downloads anything missing into `images/` and rewrites `credits.js` with the photographer
and licence. It skips files already on disk and backs off when Commons rate-limits it. If one
file keeps returning HTTP 429 the script aborts before writing `credits.js` — pick a different
Commons file for that entry and run it again.

`kind` is optional and defaults to `photo`. The other values — `product`, `process`, `related`,
`analog` and `structure` — are for materials nobody has photographed: the card then shows
something made from the material, how it is made, a close relative, the nearest comparable thing
or a molecular structure, and labels the image in the corner so it is never mistaken for the
material itself.

Every entry currently carries an image, so no card falls back to a swatch — the dead `swatch`
fields that sat unused beside a photograph have been removed. The fallback itself still works
(`swatch.js`): drop the `img` field and give the entry a `swatch` instead:

```js
swatch: { pattern: "brushed", colors: ["#434a52", "#98a3ad", "#2b3137"] }
```

Patterns available: `gloss`, `brushed`, `fiber`, `ribbon`, `laminate`, `grain`, `powder`,
`speckle`, `weave`, `honeycomb`. The three colours are mid, highlight and shadow.

Finding candidate images is the slow part, and most of `tools/` exists for it:
`search.py` queries the File namespace and filters to bitmaps of at least 640x400,
`describe.py` prints the description and licence of a shortlist, and `peek.py` downloads
candidates somewhere scratch so they can be looked at before anything is committed. Looking is
not optional — descriptions mislead, and `tools/searchlog.md` records the ones that did, along
with every candidate that was searched for and had no honest photograph. Read that file before
starting a round, so the same dead ends are not walked twice.

## Images and licensing

All 508 entries carry an image from Wikimedia Commons. Each remains under its own licence
(CC0, CC BY, CC BY-SA in several versions, FAL, GFDL, "Attribution" or public domain); the
photographer, licence and source page are recorded in `credits.js` and shown on the card and in
the lightbox. If you redistribute this page, keep those credits. No two cards use the same
photograph.

289 are photographs of the material itself. 219 are not, and say so in the corner of the image:

- **159 show something made from it** — Lego bricks for ABS, a track frog for manganese steel, a
  fuel rod for Zircaloy, climbing carabiners for 7075 aluminium, a gas turbine thrust bearing for
  Babbitt, the underside of a CD-RW for chalcogenide glass, a laser-sintered nylon bicycle for PA12
  powder, a printed RS-25 fuel injector for GRCop-42, a titanium hip prosthesis for Ti-6Al-4V, a
  chemical tanker for duplex stainless, and a 2 mm model of an 1871 microscope for the two-photon
  resist.
- **23 show a similar example** — the nearest comparable thing, where neither the material nor
  anything made from it has been photographed freely: a piezoelectric hydrophone for Terfenol-D, a
  Level IIIA vest for Zylon, a roll of Kapton tape for Torlon, activated carbon for MOF-5, a
  dye-laser mirror for hafnium oxide, a cast-iron surface plate for the granite one, a
  magnetorheological fluid for the electrorheological one, aramid filaments for M5, turnout gear for
  melamine fibre, and a hand-laid glass-reinforced body for sheet moulding compound. The caption
  always says what the picture actually is.
- **17 show a close relative** — Wood's metal for Field's metal, PFA tubing for FEP, fluorite for
  optical calcium fluoride, a superhydrophobic droplet for SLIPS, a printed sand mould for
  furan-bonded sand, a GAGG:Ce scintillator for GGG, and a cut-resistant glove for Vectran.
- **20 show how it is made** — melt spinning for Metglas, nanotube spinning for CNT yarn, catalyst
  spraying for Nafion, cold spray mid-deposition for cold-spray powder, hand needle felting for
  needle-punched felt, two Markforged X7 machines for continuous fibre printing, and the loom or
  knitting machine itself for Jacquard weave, warp knitting and whole-garment knitting.

No entry falls back to a drawn swatch, and none shows a molecular or crystal structure: where a
material itself has never been photographed freely, the card carries the closest real object
instead.

Three photographs are representative rather than exact and say so in their captions: the Vulkollan
card shows a cast polyurethane wheel of the same family, the AlON card shows transparent
spinel, the closely related ceramic, and the graphene card shows a commercial one-to-three-layer
sample rather than a single sheet.

Figures in the cards are typical published values for a common grade. They are for interest, not
for design work — use a real datasheet for that.
