# Interesting Materials

A single-page field guide to 539 materials, each here for a reason of its own — a polyurethane
that carries tons without overheating, a ceramic that clamps its own cracks shut, a lashing that
tightens itself as it dries, an airbag woven closed so it has no seam to burst, a film base that
eats itself. Some are here for what they do, some for how they are made, some for how they fail,
and a few because nobody designed them and they ring, boom or insulate anyway.

Each card gives the material's name and chemistry, what makes it interesting, two or three
characteristic numbers, and where you actually run into it.

## Viewing it

Open `index.html` in a browser. No build step, no server, no dependencies — plain HTML, CSS and
a handful of plain script files, and it works straight off the filesystem.

## Layout

```
index.html     page shell
style.css      the design system: paper by default, a dark toggle, Jost
taxonomy.js    the vocabulary: categories, picture kinds, cross-cutting themes
app.js         rendering, search, filters, sort, shareable URL state, lightbox
swatch.js      the drawn fallback used when a material has no photograph
data.js        the catalogue — 539 entries, this is the file to edit
plates.js      the plates: diagrams that explain several cards, drawn from data or credited
papers.js      the papers: the paper behind a material, or one that promises something
figures.js     draws a plate's figure from its data and runs the readout under the pointer
credits.js     generated: image filenames, dimensions, photographers, licences, links
added.js       generated: when each entry joined, in add order — the default sort
images/        539 images, 960 px wide
fonts/         Jost, variable weight, latin and latin-ext, with its OFL licence
robots.txt     sitemap.xml   for search engines
LICENSE        MIT for the text and the tools; the photographs keep their own licences
SOURCES.md     generated: every second source grouped by site, and which ones answer
tools/
  build.py           one command: rebuild everything, then run every check
  images.txt         id | source | file or URL | caption | kind [| licence | credit | page]
  fetch_images.py    downloads missing images and regenerates credits.js (incremental)
  added.py           rebuilds added.js from the git history of data.js
  add_cards.py       inserts new cards from a JSON file into data.js and images.txt
  search.py          Commons search for candidate photographs
  describe.py        descriptions, sizes and licences of candidate files
  peek.py            downloads candidates somewhere scratch, to be looked at first
  readme_numbers.py  rewrites every count in README.md and index.html from the data
  sources.py         writes SOURCES.md, the register of second sources, grouped by site
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

## Design

The page is set as a continuation of the Bauhaus preliminary course. Itten, then Moholy-Nagy
and Albers, sent every student to the workshop before the drawing board: a term of handling
metal, wood, paper and cloth, with simple tools and no end product, to learn what each material
will do and what it refuses to do. Albers called it a school of invention and aimed at the most
effect from the least material, energy and time. A catalogue of what materials do, how they are
made and how they fail is that exercise carried on, so the page borrows the school's print
manner as well: Bayer's lowercase sans and red bars, Schmidt's asymmetric grid, Kandinsky's
three primaries kept for the three primary forms.

The rules, so the next change has something to be consistent with:

- One typeface: Jost, Futura's open-licence successor, bundled in `fonts/`. Fallback is Futura,
  then Century Gothic, then the system sans.
- Paper ground, white panels, near-black type, one working colour: red. It marks the active
  filter, the title's full stop, the bar over the title, a hovered link, and the stamp that says
  a picture is not the material itself. Blue and yellow appear in exactly two places: the circle
  and triangle on the two cross-category themes, and the favicon.
- Every radius is 0. No shadow, gradient, blur or transition. Structure is drawn with rules:
  3 px under the masthead and over the footer, 2 px between a picture and its text, 1 px
  hairlines everywhere else, including the three-row table the stats are set in.
- The page speaks in lowercase: title, labels, buttons, pills, count, footer. The data keeps
  its own case, because PTFE is not ptfe and Kevlar is a name. Lowercase is written into the
  source strings, never applied with `text-transform`, so copy and paste gets what is shown.
- The workshop is stamped in black on the top-left of every picture; when the picture is not the
  material itself, what it shows is stamped in red at the bottom-right.
- Every card carries its number in add order, `no. 1` to `no. 539`.
- The dark theme is the same page with ink and paper swapped, nothing else.

The categories are named after the workshop each descends from. The keys in `data.js` never
change; only the label the filter button shows. Where the school had no such workshop, the
table says so rather than pretending.

| key | shown as | descends from |
|---|---|---|
| `polymer` | plastics | none: the school closed in 1933 before plastics had a workshop of their own |
| `metal` | metal | the metal workshop (Moholy-Nagy; Brandt, Wagenfeld) |
| `ceramic` | clay and glass | the pottery at Dornburg (Marcks, Bogler, Lindig) and the glass-painting workshop (Albers) |
| `electronic` | light and current | none: the nearest is Moholy-Nagy's light studies and the Light-Space Modulator |
| `composite` | building | the building department, from 1927 under Meyer |
| `additive` | printing in three dimensions | none: the printing and advertising workshop (Bayer) was two dimensions short |
| `fibre` | yarn and rope | the weaving workshop (Stölzl, Albers), the yarn side |
| `fabric` | cloth | the weaving workshop, the cloth side |
| `natural` | wood, bone and horn | the cabinet-making workshop (Breuer) and the wood and stone sculpture workshop |
| `exotic` | the preliminary course | the Vorkurs itself: material studies with no product in mind |
| `music` | stage and sound | the stage workshop (Schlemmer); the Bauhaus band had no workshop |
| `warmth` | warmth | none as a workshop; the weavers made the blankets |
| `film` | film and foil | none: photography (Peterhans, from 1929) is the nearest, with the Vorkurs paper exercises |

## Categories

| `cat` | Shown as | Entries |
|---|---|---|
| `polymer` | plastics | 59 |
| `metal` | metal | 46 |
| `ceramic` | clay and glass | 50 |
| `electronic` | light and current | 29 |
| `composite` | building | 36 |
| `additive` | printing in three dimensions | 20 |
| `fibre` | yarn and rope | 69 |
| `fabric` | cloth | 54 |
| `natural` | wood, bone and horn | 29 |
| `exotic` | the preliminary course | 32 |
| `music` | stage and sound | 65 |
| `warmth` | warmth | 22 |
| `film` | film and foil | 28 |

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

`film` is a shape rather than a chemistry: anything made and sold as a sheet thin enough to roll,
whatever it is made of. The category exists because a film is interesting for reasons the bulk
material is not — stretching a sheet lines its molecules up, and most of these cards are about what
that buys. Polarising film is polyvinyl alcohol pulled until its iodine sits in parallel lines;
shrink film and the shrink-art sheet are the same orientation frozen in and released by heat;
stretch wrap and bale wrap are polyethylene that never stops trying to recover; a blown bag is
tough because it was inflated. Others are about thinness itself: gold leaf at a tenth of a micron,
a solar sail at a few microns, a capacitor electrode so thin it burns itself out of a fault,
aluminium foil with two different faces because the mill rolls it in pairs. The surface tricks are
here too — retroreflective sheeting, holographic foil, lenticular and Fresnel sheets, a liquid
crystal strip that reads temperature in colour, a sheet that turns from frosted to clear at sixty
volts — and the ones that are famous for failing: nitrate film base, which eats itself, and
cellophane, which is not a plastic at all. The agricultural and civil films at the end are the
largest tonnages in the category and the least photographed: mulch, polytunnel cover, landfill
liner. Feeler stock is the one metal that is not a foil in the packaging sense; it is here because a
feeler gauge is nothing but a strip of steel held to a tolerance.

## Themes

A card has exactly one category, which is what the material *is*. A theme is a job it happens
to do, and a card can carry several — declared as `tags: ["warmth"]` in `data.js` and listed in
`taxonomy.js`. Filtering on a theme shows its own category plus every card tagged with it, so
merino wool stays filed under yarn and rope and still turns up under *keeping warm*
along with down, cashmere, qiviut, kapok, fleece, felt, tweed, mineral wool, EPS, aerogel,
vacuum panels and phase-change material.

*inside a duvet* is the second theme, and it is deliberately narrow: fifteen cards that are
either the filling, the cloth around it, or the thing that stops the filling moving. A card
is only tagged with it if its own `uses` line says it goes into bedding, which is why camel
hair and alpaca are not in it even though both are sold as duvets somewhere.

The three jobs, and why each material is chosen for one of them:

| Job | Cards | What the choice decides |
|---|---|---|
| Filling | goose down, eiderdown, feather-and-down blend, silk wadding, polyester fibrefill, cotton batting, kapok, milkweed floss, merino | Warmth per gram, what happens when it gets wet, and whether it can be washed. Down wins on warmth and loses completely when damp; polyester survives the wash and dies of compression; cotton is heavy and walks; silk cannot migrate but has no loft at all |
| Lining and cover | downproof ticking, satin weave, seersucker, flannel, lyocell | Whether the filling stays in, and what the cloth does against skin. Ticking is woven tight enough to stop a quill and is therefore nearly airproof; seersucker lifts off the skin; flannel's nap holds a layer of still air; lyocell moves moisture |
| Holding it together | thread lattice | Whether the filling can move inside its cover. Quilting lines, baffle walls and the Hainan thread lattice are three answers to one problem: an unrestrained batt migrates to the corners and leaves cold voids |

## Plates

A card is one material. A plate is a figure that explains several, the way the plates in the
Bauhaus books sat between the chapters: the iron–carbon diagram is the first. A plate is not
filed under a category, because it is not a material; it names the workshops it belongs to
(`cats`) and appears among their cards, twice as wide, with its own running number. It also
names the cards it explains, and those are links.

A plate carries either a credited image, through `tools/images.txt` like any card, or a
figure drawn from data. A drawn figure is a set of fields on two axes — polygons in axis
units, with a name, the phases present, the crystal structure and a note for each — plus
the rules, labels and ticks to draw. `figures.js` scales and draws it as flat polygons in the
page's own ink and paper, and keeps a readout under it that follows the pointer: which field,
which phases, what structure, and the two coordinates under the cursor. Touch works the same
way, by tapping. Nothing in the renderer knows about iron; the next phase diagram, TTT curve
or Ashby chart is the same code with different data. The shape of the data is documented at
the top of `plates.js`, and `tools/check.js` refuses a zone that is incomplete or leaves the
axes.

Plates live in `plates.js`, go through `tools/added.py` for their date like the cards, and are
counted separately: the count line says `539 materials, 1 plate` when both are showing.

## Papers

A paper is the third kind of entry. It is not a material and not a figure: it is the paper
that introduced a material on a card (Kistler's aerogel, Novoselov's graphene), or a recent
one whose result promises something and has not yet become a material anyone can buy. Each
carries the material it is about, the citation, the DOI, a free full text where one exists,
two or three sentences on what it showed and one on what it implies, hedged where the result
is still unconfirmed. A paper names the workshops it belongs to (`cats`) and the cards it
touches (`cards`), and appears among them with its own running number; the year stands where
the photograph would be. *the papers* in the row across the workshops shows them alone.

Papers live in `papers.js`; `tools/check.js` refuses one without a DOI of the right shape, a
year, a workshop that is declared, or a card that does not exist.

## Material of the week

A red square under the filters names one card. It is chosen by arithmetic: the ISO week
number, hashed over the catalogue, so everyone who opens the page in the same week sees the
same card and nobody chooses it. Clicking it clears the filters, scrolls to the card and
outlines it in red. Adding a card changes the count and so the pick; that is fine, it is a
week, not a contract.

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

The shirting cloths are a small family inside it, and worth reading together: chambray, Oxford
cloth and gingham are all cotton, all built on the plain weave or one step off it, and all get
their appearance from dyed yarn rather than from anything applied afterwards. Chambray crosses a
coloured warp with a white weft; Oxford lifts the warp in pairs for a coarser, softer basket;
gingham blocks the colour along both directions and gets a check with two identical faces. None
of them is printed, which is why none of them wears out its pattern before it wears out its
cloth.

## Adding a material

Append an entry to `data.js`:

```js
{
  id: "shortname", cat: "ceramic", name: "Display name",
  sub: "chemistry or trade name", img: "shortname",
  hook: "Why it is interesting — what it does, how it is made, or how it fails.",
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
constantly, and a few answer 403 to a script while opening fine in a browser. `SOURCES.md` lists
every source already in the catalogue by site, the families that have held up and the ones that
refuse scripts; `python -I tools/sources.py --check` fetches them all and dates the failures.

All 59 polymer and elastomer cards carry one, and the warmth and film cards carry one wherever a
source existed that was not a shop. The other categories do not yet.

`tags` is optional and cross-cuts the categories; see *Themes* above. Both the category and
every tag have to be declared in `taxonomy.js` or `tools/check.js` fails.

For a picture, add a line to `tools/images.txt` and run:

```sh
python -I tools/fetch_images.py
```

A row is `id|source|ref|caption|kind`, and the source decides the rest. `commons` means ref is
a Wikimedia Commons File name and the photographer, licence and source page are read from the
API. Any other source is the name of the site the picture is shown as coming from — `Flickr`,
`NASA`, `Geograph`, a maker — and the row carries three more columns, `|licence|credit|page`,
with ref the direct image URL. The script downloads anything missing into `images/`, scales it
to 960 px wide, and rewrites `credits.js`. It skips files already on disk and backs off when
Commons rate-limits it. If one file keeps returning HTTP 429 the script aborts before writing
`credits.js` — pick a different file for that entry and run it again.

Commons is the last resort, not the first: it stays the research tool (`search.py`, `peek.py`,
`describe.py` all work on it), but a picture is shown from the photographer's own page, an
agency, a museum or a maker wherever one exists, and `check.js` prints how many cards still
show a Commons picture so the number is visible and goes down.

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

All 539 entries carry an image, credited to where it came from — a photographer's Flickr
page, an agency, a museum, a maker, or Wikimedia Commons. Each remains under its own licence
(CC0, CC BY, CC BY-SA in several versions, FAL, GFDL, "Attribution" or public domain); the
photographer, licence and source page are recorded in `credits.js` and shown on the card and in
the lightbox. If you redistribute this page, keep those credits. No two cards use the same
photograph. The typeface, Jost, is bundled under the SIL Open Font License; the licence text is
in `fonts/OFL.txt`.

291 are photographs of the material itself. 248 are not, and say so in red on the corner of the image:

- **187 show something made from it** — Lego bricks for ABS, a track frog for manganese steel, a
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
- **18 show a close relative** — Wood's metal for Field's metal, PFA tubing for FEP, fluorite for
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
