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

333 of the 402 entries carry an image from Wikimedia Commons. Each remains under its own licence
(CC0, CC BY, CC BY-SA in several versions, FAL, GFDL, "Attribution" or public domain); the
photographer, licence and source page are recorded in `credits.js` and shown on the card and in
the lightbox. If you redistribute this page, keep those credits.

218 are photographs of the material itself. 115 are not, and say so in the corner of the image:

- **92 show something made from it** — Lego bricks for ABS, a track frog for manganese steel, a
  fuel rod for Zircaloy, a violin bow for horsehair, a deployed curtain airbag for one-piece
  weaving, the Denver airport roof for PTFE-coated glass fabric, a zirconia bridge for ceramic vat
  printing, a titanium implant for electron beam melting.
- **9 show a close relative** — Wood's metal for Field's metal, PFA tubing for FEP, fluorite for
  optical calcium fluoride, a superhydrophobic droplet for SLIPS, Eusebio Sempere's rod sculpture
  for acoustic metamaterials, an ABS spool for ASA, a hand-carved wax model for castable resin, a
  machined copper nozzle for GRCop-42, ordinary printed supports for soluble ones.
- **8 show a molecular or crystal structure** — Zylon, Vectran, Torlon, parylene, PPS, graphene,
  MOF-5, hafnium oxide.
- **6 show how it is made** — melt spinning for Metglas, nanotube spinning for CNT yarn, catalyst
  spraying for Nafion, and the loom or knitting machine itself for Jacquard weave, warp knitting
  and whole-garment knitting.

69 materials have no usable image at all and carry a drawn SVG swatch, generated in `app.js` and
labelled "illustration": it approximates the appearance and is not a photograph of a real sample.
They are Pebax, PEI (Ultem), Cellulose acetate, Gum Metal, Terfenol-D, 7075 aluminium, 316L stainless,
Cupronickel, Babbitt metal, Macor, Chalcogenide glass, ZBLAN fluoride glass, Titanium diboride,
Isostatic graphite, Fused-cast AZS, Nextel ceramic fabric, Nomex honeycomb, Sheet moulding
compound, Forged composite, Structural PVC foam core, G10 / FR-4, Functionally graded material,
CLIP, Selective laser sintering, Multi Jet Fusion, Material jetting, Two-photon polymerisation,
Volumetric printing, Printed sand moulds, Continuous fibre printing, Sinter-based metal
printing, Carbon-filled filament, Photopolymer resin, AlSi10Mg, Scalmalloy, Printable silicone,
Printed lattice, Polypropylene rope, Tubular webbing, Nylon monofilament, Synthetic down,
Conductive fabric, Technora, M5 (PIPD), Melamine fibre, Oxidised PAN, High-silica fibre, PTFE
thread, PVA fibre, Rawhide, Three-strand laid rope, Double braid, Twelve-strand hollow braid,
Braided fishing line, Kinetic recovery rope, Triaxial weave, Needle-punched felt, Non-crimp
fabric, 3D woven preform, Three-layer laminate, E-textile, Dielectric elastomer actuator,
Electrorheological fluid, Strontium aluminate, Spruce tonewood, Granite surface plate,
Gadolinium gallium garnet, BBO crystal and Gallium oxide.

Two photographs are representative rather than exact and say so in their captions: the Vulkollan
card shows a cast polyurethane wheel of the same family, and the AlON card shows transparent
spinel, the closely related ceramic.

Figures in the cards are typical published values for a common grade. They are for interest, not
for design work — use a real datasheet for that.
