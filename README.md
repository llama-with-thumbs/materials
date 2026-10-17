# Interesting Materials

A single-page field guide to 402 materials that exist because of one specific trick — a
polyurethane that carries tons without overheating, a ceramic that clamps its own cracks shut,
a lashing that tightens itself as it dries, an airbag woven closed so it has no seam to burst.

Each card gives the material's name and chemistry, what makes it interesting, two or three
characteristic numbers, and where you actually run into it.

## Viewing it

Open `index.html` in a browser. No build step, no server, no dependencies — plain HTML, CSS and
one JS file, and it works straight off the filesystem.

## Layout

```
index.html     page shell
style.css      styling, dark by default with a light toggle
app.js         rendering, search, category filter, lightbox, swatch drawing
data.js        the catalogue — 402 entries, this is the file to edit
credits.js     generated: image filenames, photographers, licences, source links
images/        313 images, 900 px wide
tools/
  images.txt       id | Commons filename | caption | kind
  fetch_images.py  downloads the images and regenerates credits.js
```

## Categories

| `cat` | Shown as | Entries |
|---|---|---|
| `polymer` | Polymers & elastomers | 59 |
| `metal` | Metals & alloys | 44 |
| `ceramic` | Ceramics & glass | 49 |
| `electronic` | Semiconductors & optics | 28 |
| `composite` | Composites & structures | 36 |
| `additive` | 3D printing & additive | 35 |
| `fibre` | Ropes & woven materials | 64 |
| `fabric` | Fabrics & constructions | 26 |
| `natural` | Natural & biological | 29 |
| `exotic` | Active & exotic | 32 |

## Adding a material

Append an entry to `data.js`:

```js
{
  id: "shortname", cat: "ceramic", name: "Display name",
  sub: "chemistry or trade name", img: "shortname",
  hook: "Why it is interesting — the one thing it does that nothing else does.",
  stats: [["Property", "value"], ["Property", "value"]],
  uses: "Where you meet it.",
  link: "https://en.wikipedia.org/wiki/..."
}
```

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

Every entry currently carries an image, so no card falls back to a swatch — but the fallback is
still there. Drop the `img` field and give the entry a `swatch` instead:

```js
swatch: { pattern: "brushed", colors: ["#434a52", "#98a3ad", "#2b3137"] }
```

Patterns available: `gloss`, `brushed`, `fiber`, `ribbon`, `laminate`, `grain`, `powder`,
`speckle`, `weave`, `honeycomb`. The three colours are mid, highlight and shadow.

Finding candidate images is the slow part. `tools/` has no search helper committed; the method
that works is a Commons `generator=search` query in the File namespace, filtered to bitmaps
wider than 640 px, then picking by eye from the top few results.

## Images and licensing

All 402 entries carry an image from Wikimedia Commons. Each remains under its own licence
(CC0, CC BY, CC BY-SA in several versions, FAL, GFDL, "Attribution" or public domain); the
photographer, licence and source page are recorded in `credits.js` and shown on the card and in
the lightbox. If you redistribute this page, keep those credits.

226 are photographs of the material itself. 176 are not, and say so in the corner of the image:

- **119 show something made from it** — Lego bricks for ABS, a track frog for manganese steel, a
  fuel rod for Zircaloy, climbing carabiners for 7075 aluminium, a gas turbine thrust bearing for
  Babbitt, the underside of a CD-RW for chalcogenide glass, a laser-sintered nylon bicycle for SLS,
  a LEAP engine fan for 3D woven preforms, soft shackles for twelve-strand hollow braid, a PEI-coated
  printer build plate for polyetherimide, and a 2 mm model of an 1871 microscope for two-photon
  polymerisation.
- **24 show a similar example** — the nearest comparable thing, where neither the material nor
  anything made from it has been photographed freely: a piezoelectric hydrophone for Terfenol-D, a
  Level IIIA vest for Zylon, a machined Vespel part for Torlon, activated carbon for MOF-5, a
  dye-laser mirror for hafnium oxide, a cast-iron surface plate for the granite one, a
  magnetorheological fluid for the electrorheological one, aramid filaments for M5, a Nomex hood for
  melamine fibre, a hand-laid glass-reinforced body for sheet moulding compound, and an aluminium
  reduction cell hall for titanium diboride. The caption always says what the picture actually is.
- **22 show a close relative** — Wood's metal for Field's metal, PFA tubing for FEP, fluorite for
  optical calcium fluoride, a superhydrophobic droplet for SLIPS, metal injection moulded parts for
  sinter-based printing, a MiG-29 for Scalmalloy, a GAGG:Ce scintillator for GGG, and a
  cut-resistant glove for Vectran.
- **11 show how it is made** — melt spinning for Metglas, nanotube spinning for CNT yarn, catalyst
  spraying for Nafion, a laser powder bed machine mid-build for AlSi10Mg, hand needle felting for
  needle-punched felt, two Markforged X7 machines for continuous fibre printing, and the loom or
  knitting machine itself for Jacquard weave, warp knitting and whole-garment knitting.

No entry now falls back to a drawn swatch, and none shows only a molecular structure: the five that
did — Zylon, Torlon, PPS, MOF-5 and hafnium oxide — now show the closest real object instead,
badged "a similar example".

Three photographs are representative rather than exact and say so in their captions: the Vulkollan
card shows a cast polyurethane wheel of the same family, the AlON card shows transparent
spinel, the closely related ceramic, and the graphene card shows a commercial one-to-three-layer
sample rather than a single sheet.

Figures in the cards are typical published values for a common grade. They are for interest, not
for design work — use a real datasheet for that.
