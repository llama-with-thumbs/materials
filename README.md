# Interesting Materials

A single-page field guide to 584 materials, each here for a reason of its own — a polyurethane
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
app.js         rendering, search, filters, sort, shareable URL state, view carousel
swatch.js      the drawn fallback used when a material has no photograph
data.js        the catalogue — 584 entries, this is the file to edit
plates.js      the plates: diagrams that explain several cards, drawn from data or credited
papers.js      the papers: the paper behind a material, or one that promises something
library.js     the library: primary Bauhaus texts, each linking out to a public-domain copy
lattices.js    the lattices: the fourteen Bravais lattices, each drawn from its six numbers
classes.js     the classes: metal, ceramic, glass, polymer, elastomer, composite, semiconductor
figures.js     draws a plate's figure from its data and runs the readout under the pointer
bauhaus.html   the curriculum wheel: Gropius's 1922 diagram of the course, drawn as rings that answer the pointer
wheel.js       the wheel's segments, what is known about each, and the drawing
drawings.js    draws a lattice's cell and a class's sketch, in ink, paper and one red
credits.js     generated: image filenames, dimensions, photographers, licences, links
added.js       generated: when each entry joined, in add order — the default sort
images/        584 images, 960 px wide
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
  papers.py          checks every paper in papers.js against Crossref; --fix takes the exact title
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
  filter, the title's full stop, the mark over the title, a hovered link, and the stamp that says
  a picture is not the material itself. Blue is the hand colour, taken from Herbert Bayer's 1923
  Kraus poster: it is what the pointer brings out, on the carousel arrows, the band along the
  edge the next picture comes in from, and the read-more button. Yellow appears in exactly one
  place, the triangle on the warmth theme; blue also draws the duvet circle.
- A filter is a small boxed button: a hairline box at rest, blue under the pointer, and
  inverted, ink and paper swapped, when it is the one pressed. The labels before the themes
  and the collections are bare, because they are not buttons.
- The carousel arrow follows Klee's chapter on the arrow in the Pedagogical Sketchbook. At rest
  only the point shows. Near the pointer the shaft slides in behind it, the fletching follows and
  a blue charge runs from tail to point; the two fins steer a little toward the pointer's height.
  Pressing heats it red. The track does not wrap: the first view has only the right arrow, the
  last only the left, and a card with one view has none. Small squares at the foot of the picture
  count the views, the one showing in ink; each jumps to its view.
- The mark is a crumpled sheet of paper, drawn with a brush in one go and traced to `mark.svg`:
  red fill, ink creases; `mark-dark.svg` has paper creases for the dark theme, and `favicon.svg`
  flips between the two on the system scheme. A crumpled sheet is the catalogue's argument in one
  object: chaotic, still paper, and yet a different material from the flat sheet, rounder, stiffer,
  more predictable in the air, with room in it for something new. `tools/brand.py` sets the mark
  on paper for the app icons and the share cards; nothing redraws it.
- Every radius is 0. No shadow, gradient, blur or transition. Structure is drawn with rules:
  3 px under the masthead and over the footer, 2 px between a picture and its text, 1 px
  hairlines everywhere else, including the three-row table the stats are set in.
- The page speaks in lowercase: title, labels, buttons, pills, count, footer. The data keeps
  its own case, because PTFE is not ptfe and Kevlar is a name. Lowercase is written into the
  source strings, never applied with `text-transform`, so copy and paste gets what is shown.
- The workshop is stamped in black on the top-left of every picture; when the picture is not the
  material itself, what it shows runs up the left edge in a paper strip, ink on paper.
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
| `polymer` | plastics | 74 |
| `metal` | metal | 56 |
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
| `glue` | glues | 20 |

`polymer` is the broadest block and the one that gets revisited. The first pass took the
engineering plastics and the elastomers; the second added the early plastics that came before oil
(galalith, celluloid, melamine, urea-formaldehyde); the third, on 2026-11-04, filled the gaps a
materials engineer notices on a walk round the house: the two polystyrenes, cast Catalin beside
moulded Bakelite, Bois Durci pressed from sawdust and blood, the hydrogel of the soft contact lens,
the suture the body dissolves, castor-oil nylon, the starch packing chip, the filled acrylic of a
worktop, PVC plastisol, and the polyurethane foam in every sofa. Each of those is a material in a
role, and the card says what the role asks of it.

`metal` began with the alloys an engineer specifies by number (Invar, Kovar, 7075, 316L, Inconel
718) and the ones that do something odd (Nitinol, Galinstan, Gum Metal, Terfenol-D). The second
round, on 2026-11-16, took the metals met as a job rather than a grade: gallium that melts in the
hand and eats aluminium, tin and the pest that turns it to powder, wootz and the vanadium it died
without, Kanthal that grows its own alumina skin, the zinc on galvanised steel and the zinc bolted
to a hull, the micron of tin on a can, the magnesium that rolls graphite into balls, the potassium
that keeps a lamp filament straight, and indium, the metal that wets glass.

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

`glue` is the newest workshop and the one the Bauhaus never had, because its glues were a pot of
hide glue and a jar of paste. The cards cover what holds the rest of the catalogue
together: the collagen glues (rabbit skin for the painter, bone for the bookbinder, isinglass for
the gilder and the brewer), the plant glues (wheat starch, gum arabic, wallpaper paste), the
rubbers (contact cement, rubber cement), the thermoplastics (hot-melt, birch bark tar, spinifex
resin: the oldest glue and the first Australian one), the synthetics that cure (anaerobic
threadlocker, silicone sealant, epoxy putty, superglue) and the ones that are a trick of form rather than
chemistry (the Post-it microspheres, the glue stick, acrylic foam tape). The hook of every card is
the same question: what makes it let go. Superglue moved here from plastics; epoxy and hot hide glue keep
their cards where they were, under plastics and the stage.

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

## The curriculum wheel

`bauhaus.html` draws Gropius's 1922 scheme of the course as rings that answer the pointer: the
preliminary course on the rim, the three years of workshop training with the five studies
beside it, the seven workshops by their material, and building at the centre. Every segment
carries what is known about it, who ran it and what became of it, the catalogue's own workshop
where it has one, and the texts in the library it leans on; a switch turns the words to the
German of the statutes, or to Russian in the vocabulary of VKhUTEMAS, the Moscow school of 1920
built on the same plan, since no Russian rendering from the school's own time could be found. The segments and their texts live in `wheel.js`, with the geometry, which is measured on the lithograph in the 1922 statutes: ring radii, the angles of every division, and the proportion of each ring's letters to its ring, the same in all three languages, with a word too long for its room condensed as the original's are, and only then set smaller;
the page's sources are listed at its foot. A switch of dates at the left of the figure redraws the course on the same rings as it stood in 1919, 1927, 1929 and 1930, from the programme of April 1919, the Dessau regulations of 1926, the chronology of Meyer's school and the statutes of October 1930; each date has its own panel of facts, its own time bar and its own segments. The wheel is also a shelf of its own on the main
page, *the wheel* in the collections row: one wide card with the rings, the panel a ring fills
where a plate's readout sits, and a link to the full page.

## Plates

A card is one material. A plate is a figure that explains several, the way the plates in the
Bauhaus books sat between the chapters: the iron–carbon diagram was the first, the Ashby chart
of stiffness against density the second. A plate is not
filed under a category, because it is not a material; it names the workshops it belongs to
(`cats`) and appears among their cards, twice as wide, with its own running number. It also
names the cards it explains, and those are links. A plate marked `wide` takes the whole row,
its figure on the left and its text beside it.

A plate carries either a credited image, through `tools/images.txt` like any card, or a
figure drawn from data. A drawn figure is one of two kinds. A **field diagram** is a set of
zones on two axes — polygons in axis units, each with a name, the phases, the crystal structure
and a note — and the readout under it names the field, the phases, the structure and the two
coordinates under the pointer. In a two-phase field it works the lever rule, naming the two
compositions the tie line meets and how much of each phase there is. A click pins a vertical
line, an alloy of that composition, and the readout lists every field it crosses on the way
down with the temperature at each crossing; the compositions worth knowing stand on the axis
as small triangles, each a pin, and the ones that are cards are named for them. A figure may
carry lettered `marks`, the textbook's named points, which read their notes under the
pointer, and `zooms`, windows on the same data with their own ticks and labels, which the
switches above the figure move between; and `styles`, each a convention for drawing the
same fields, with its own frame, ticks, second axes, lettered points, labels and field
names, which a second row of switches moves between. The iron–carbon diagram is one, with
a zoom on the steel corner and two styles: the western frame of Callister and the ASM
Handbook, 0 to 1600 °C with Fahrenheit on the right and atom per cent on top, and the
Soviet frame of Gulyaev, cut at 600 °C with per cent cementite on top, the points lettered
A to Q and the fields named by structure. The polygons are the same; only the frame, the
letters and the names change, and the readout says which numbers each tradition reads. A **scatter** is a layer of
`points` instead, each a material placed by two of its properties, and the readout names the
material, its family and where it sits; the Ashby chart is one, and its points carry the id of
a card, so a dot is a link. Either axis can be marked `log` for a quantity that runs over many
powers of ten. `figures.js` scales and draws it all in the page's own ink and paper, and touch
works the same way, by tapping. Nothing in the renderer knows about iron or about stiffness; the
next TTT curve or property chart is the same code with different data. The shape of the data is
documented at the top of `plates.js`, and `tools/check.js` refuses a zone or a point that is
incomplete or leaves the axes, or a point that links to a card that is not there.

Plates live in `plates.js`, go through `tools/added.py` for their date like the cards, and are
counted separately: the count line says `539 materials, 2 plates` when they are showing.

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
year, a workshop that is declared, or a card that does not exist, and `tools/papers.py` resolves
every DOI through Crossref and compares the title and year. The first 48 are half founding
papers (Kistler's aerogel, Duwez's metallic glass, Buehler's Nitinol, Kroto's C60, Novoselov's
graphene, Cantor's and Yeh's high-entropy alloys) and half from 2019 to 2024 (a two-dimensional
polymer, glassy gels, ultrawhite paint, a cooling metafabric, diamond grown at one atmosphere,
the paper that put LK-99 to rest), each hedged where the result is still a claim.

## The library

A text is the fourth kind of entry. The catalogue calls itself the preliminary course continued,
so the library is the course's own writing: the primary texts of the people who ran the Bauhaus and
taught its *Vorkurs* — Gropius's manifesto, the fourteen *Bauhausbücher*, Klee's *Pedagogical
Sketchbook*, Kandinsky's *Point and Line to Plane*, Moholy-Nagy's *Von Material zu Architektur* —
and of the students who stayed to teach it. A text carries its author and their place at the
Bauhaus, the title in its first language and in English, the year, and one sentence on what it is;
the year stands where the photograph would be, as on a paper.

The page hosts no text it has no licence to. Each entry links *out* — to a public-domain full copy
on the Internet Archive, Project Gutenberg, Wikisource or a museum library where the work is old
enough, and to the publisher where it is still in copyright — and says which with *public domain* or
*in copyright*. That is the same honesty the images keep about their licence and the papers about
their DOI.

Texts live in `library.js`; `tools/check.js` refuses one without a declared workshop, a bad year or
kind, a public-domain claim with no reading link, or a card that does not exist. They are counted
separately, like the plates and papers: *the library* in the row across the workshops shows them
alone. The principles these texts are the source of are written out in [`PRINCIPLES.md`](PRINCIPLES.md).

## The lattices

The fifth kind of entry is not a material but how a crystal repeats in space, on its own
shelf, *the lattices*. The shelf opens wide, with the system itself: the seven crystal systems
and the fourteen Bravais lattices laid out the way the MIT solid-state course draws them
(3.091, lecture notes 4), each system with its rule for the edges and angles and its lattices
beside it as wire cells with a sphere on every point, turned on its side so the table can sit
next to its paragraph. A key to the centring letters follows, P, C, I, F and R on one cube and
one rhombohedron. Each cell of the table is a link to its card. Then the fourteen one by one, cubic first, the
order the table reads. Each of those cards carries three drawn views in the same
reel a photograph gets, all from six numbers in `lattices.js` (`drawings.js` does the
projection: an orthographic view turned 35° and seen from 22° above). First the unit cell,
the three hidden edges dashed, the corner points in ink and the centring points in red, since
the centring is what the card is about, the hexagonal cell inside its faint prism. Then the
packing: two cells each way with a sphere on every point, each touching its nearest
neighbours and drawn back to front, which is where the close-packed cube earns its name, with
one unit cell, the one nearest the viewer, outlined over the spheres so the eye can find it.
Switches at the top of a drawn view add what it leaves out: on the unit cell a sphere on every
point at about a third of the touching size; on a packing a mark at the centre of every sphere, and a tie from
each centre to the ones it touches, with the spheres faded so the frame they sit on reads through.
Every drawn view carries a line of signs along its foot saying what its points, spheres and
edges stand for.
Then one point and every point at the nearest distance from it, counted. After the fourteen
come the three structures nearly every metal takes, face-centred cubic, body-centred cubic and
hexagonal close-packed, with the cell drawn in full-size touching spheres, the packing, the
neighbours and, for the two close-packed ones, the layers seen from above, ABCABC against ABAB;
hexagonal close-packed is a lattice with a two-atom basis, and the card says so. The shelf ends
with what a space group is, the 230 built from the fourteen lattices and the thirty-two point
groups plus the screw axis and the glide plane, drawn with the crystallographer's comma, and
the Hermann-Mauguin names of the half-dozen a reader will meet, without the list. The shelf
reads under four bands, the idea, the fourteen, the metals, the symmetry, so the order is the
argument. Every drawn cell, packing and neighbour view turns under the pointer, left and right
about the vertical and up and down to tip it, and swings back when the pointer leaves; the
drawing is made again at the new angles and swapped into the page. A view assembles when it
comes on, in the order a hand would draw it: edges from the origin, points back to front,
spheres from the back, bonds out from the centre, layers one after another, the hierarchy top
down, the commas in step; a turned drawing is redrawn still, and reduced-motion settings stop
all of it. The text says what the shape is, who lives in it and what that costs or gives:
why the body-centred metals go brittle in the cold, why the hexagonal ones are formed hot, why
martensite is a cube pulled out of true. Each names the materials that keep it, on the cards
and off them, and links to the system's article and to the AFLOW prototype encyclopedia.
`tools/check.js` insists on fourteen, three stats each, a cell with six positive numbers,
centring points inside the cell, and cards that exist.

## The classes

The sixth kind of entry is the handful of words the science sorts every material into, said
plainly: metal, ceramic, glass, polymer, elastomer, composite, semiconductor. The workshops of
this catalogue are organised by trade; the classes are organised by bond, and each card says
what holds the thing together, how to tell one in the hand, and how it fails, in sentences a
reader with no chemistry can follow. Where the photograph would be, each draws a sketch of what
its atoms are doing (`drawings.js`): ions in a sea of red electrons, two kinds of ion locked in
a grid, a network with the order shaken out of it, tangled chains with one of them red so it
can be followed, coiled chains tied at red knots, fibres with a crack that has to stop at each
one, two bands and the gap between them. Each card carries buttons onto the workshops where its
materials live and a few example cards, and links to the Wikipedia article and to a DoITPoMS
teaching page from Cambridge. They sit on their own shelf, *the classes*, first in the row,
because they are where a reader who wants to know why a plastic bends and a plate breaks
should start.

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
  hook: "Why it is interesting, in about 200 characters.",
  more: "The longer story, about 600 to 750 characters: who, where, when; the mechanism; what it replaced; what replaced it; the cost.",
  stats: [["Property", "value"], ["Property", "value"]],
  uses: "Where you meet it.",
  link: "https://en.wikipedia.org/wiki/...",
  src: ["Who says so", "https://..."],
  tags: ["warmth"]
}
```

`more` is optional and opens from the read-more button on the card. The glue cards carry it;
the older categories still have the long hook on the face and no `more`, and will move over
category by category.

`link` is the encyclopaedia entry; `src` is the second opinion — a maker's datasheet, a trade
body, a teaching page, a standards or conservation reference. Anything but Wikipedia, because one
source is not a source. Check it actually loads before committing it: manufacturers move pages
constantly, and a few answer 403 to a script while opening fine in a browser. `SOURCES.md` lists
every source already in the catalogue by site, the families that have held up and the ones that
refuse scripts; `python -I tools/sources.py --check` fetches them all and dates the failures.

69 of the 74 polymer and elastomer cards carry one, and the warmth and film cards carry one wherever a
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

All 584 entries carry an image, credited to where it came from — a photographer's Flickr
page, an agency, a museum, a maker, or Wikimedia Commons. Each remains under its own licence
(CC0, CC BY, CC BY-SA in several versions, FAL, GFDL, "Attribution" or public domain); the
photographer, licence and source page are recorded in `credits.js` and shown in the tooltip of
the picture and its badge on every card. If you redistribute this page, keep those credits. No two cards use the same
photograph. The typeface, Jost, is bundled under the SIL Open Font License; the licence text is
in `fonts/OFL.txt`.

280 are photographs of the material itself. 304 are not, and say so on a paper strip up the left edge of the image:

- **236 show something made from it** — Lego bricks for ABS, a track frog for manganese steel, a
  fuel rod for Zircaloy, climbing carabiners for 7075 aluminium, a gas turbine thrust bearing for
  Babbitt, the underside of a CD-RW for chalcogenide glass, a laser-sintered nylon bicycle for PA12
  powder, a printed RS-25 fuel injector for GRCop-42, a titanium hip prosthesis for Ti-6Al-4V, a
  chemical tanker for duplex stainless, and a 2 mm model of an 1871 microscope for the two-photon
  resist.
- **15 show a similar example** — the nearest comparable thing, where neither the material nor
  anything made from it has been photographed freely: a piezoelectric hydrophone for Terfenol-D, a
  Level IIIA vest for Zylon, a roll of Kapton tape for Torlon, activated carbon for MOF-5, a
  dye-laser mirror for hafnium oxide, a cast-iron surface plate for the granite one, a
  magnetorheological fluid for the electrorheological one, aramid filaments for M5, turnout gear for
  melamine fibre, and a hand-laid glass-reinforced body for sheet moulding compound. The caption
  always says what the picture actually is.
- **23 show a close relative** — Wood's metal for Field's metal, PFA tubing for FEP, fluorite for
  optical calcium fluoride, a superhydrophobic droplet for SLIPS, a printed sand mould for
  furan-bonded sand, a GAGG:Ce scintillator for GGG, and a cut-resistant glove for Vectran.
- **27 show how it is made** — melt spinning for Metglas, nanotube spinning for CNT yarn, catalyst
  spraying for Nafion, cold spray mid-deposition for cold-spray powder, hand needle felting for
  needle-punched felt, two Markforged X7 machines for continuous fibre printing, and the loom or
  knitting machine itself for Jacquard weave, warp knitting and whole-garment knitting.

No entry falls back to a drawn swatch, and none shows a molecular or crystal structure: where a
material itself has never been photographed freely, the card carries the closest real object
instead.

A few cards carry more than one view, paged on the card itself — 454 extra views so far: the raw material
beside the finished part (Nitinol wire and the cut spoons), the shell beside the inlay (nacre),
the harvest beside the bark (cork), the property beside the thing (a brick resting on a slab of
aerogel), the two unmixed sticks beside what a sculptor and a museum made of them (epoxy putty).
A card with more than one view counts them bottom-left, and two arrows on the picture slide
through them, round the end. Each extra view is a credit id of its own with its own line in `tools/images.txt`, so
it is sourced and licensed exactly like the rest; add one by listing its id in a material's
`extra` and running `tools/fetch_images.py`.

Three photographs are representative rather than exact and say so in their captions: the Vulkollan
card shows a cast polyurethane wheel of the same family, the AlON card shows transparent
spinel, the closely related ceramic, and the graphene card shows a commercial one-to-three-layer
sample rather than a single sheet.

Figures in the cards are typical published values for a common grade. They are for interest, not
for design work — use a real datasheet for that.
