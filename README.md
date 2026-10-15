# Interesting Materials

A single-page field guide to 321 materials that exist because of one specific trick — a
polyurethane that carries tons without overheating, a ceramic that clamps its own cracks shut,
a wood that oils itself, a fuse that resets itself.

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
data.js        the catalogue — 321 entries, this is the file to edit
credits.js     generated: image filenames, photographers, licences, source links
images/        285 images, 900 px wide
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
| `composite` | Composites & structures | 37 |
| `fibre` | Ropes & woven materials | 43 |
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

`kind` is optional and defaults to `photo`. The other values — `structure`, `product`, `process`
and `related` — are for materials nobody has photographed: the card then shows a molecular
structure, something made from the material, how it is made, or a close relative, and labels the
image in the corner so it is never mistaken for the material itself.

If no free photograph exists, drop the `img` field and give the entry a `swatch` instead:

```js
swatch: { pattern: "brushed", colors: ["#434a52", "#98a3ad", "#2b3137"] }
```

Patterns available: `gloss`, `brushed`, `fiber`, `ribbon`, `laminate`, `grain`, `powder`,
`speckle`, `weave`, `honeycomb`. The three colours are mid, highlight and shadow.

Finding candidate images is the slow part. `tools/` has no search helper committed; the method
that works is a Commons `generator=search` query in the File namespace, filtered to bitmaps
wider than 640 px, then picking by eye from the top few results.

## Images and licensing

285 of the 321 entries carry an image from Wikimedia Commons. Each remains under its own licence
(CC0, CC BY, CC BY-SA in several versions, FAL, GFDL, "Attribution" or public domain); the
photographer, licence and source page are recorded in `credits.js` and shown on the card and in
the lightbox. If you redistribute this page, keep those credits.

194 are photographs of the material itself. 91 are not, and say so in the corner of the image:

- **75 show something made from it** — Lego bricks for ABS, a track frog for manganese steel, a
  golf ball for ionomer, a vacuum tube for the getter flashed onto its glass, a fuel rod for
  Zircaloy, a violin bow for horsehair.
- **8 show a molecular or crystal structure** — Zylon, Vectran, Torlon, parylene, PPS, graphene,
  MOF-5, hafnium oxide.
- **5 show a close relative** — Wood's metal for Field's metal, PFA tubing for FEP, fluorite for
  optical calcium fluoride, a superhydrophobic droplet for SLIPS, and Eusebio Sempere's rod
  sculpture for acoustic metamaterials.
- **3 show how it is made** — melt spinning for Metglas, nanotube spinning for CNT yarn, catalyst
  spraying for Nafion.

36 materials have no usable image at all and carry a drawn SVG swatch, generated in `app.js` and
labelled "illustration": it approximates the appearance and is not a photograph of a real sample.
They are Gum Metal, Terfenol-D, Macor, Nextel, Pebax, PEI, cellulose acetate, 7075 aluminium,
316L stainless, cupronickel, Babbitt, chalcogenide glass, ZBLAN, TiB₂, isostatic graphite,
fused-cast AZS, SMC, forged composite, PVC foam core, G10, functionally graded materials, printed
lattices, Nomex honeycomb, polypropylene rope, tubular webbing, monofilament, synthetic down,
conductive fabric, dielectric elastomer actuators, electrorheological fluid, strontium aluminate,
spruce tonewood, granite surface plate, GGG, BBO and gallium oxide.

Two photographs are representative rather than exact and say so in their captions: the Vulkollan
card shows a cast polyurethane wheel of the same family, and the AlON card shows transparent
spinel, the closely related ceramic.

Figures in the cards are typical published values for a common grade. They are for interest, not
for design work — use a real datasheet for that.
