# Interesting Materials

A single-page field guide to 55 materials that exist because of one specific trick — a
polyurethane that carries tons without overheating, a ceramic that clamps its own cracks shut,
a metal with no grains at all.

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
data.js        the catalogue — 55 entries, this is the file to edit
credits.js     generated: image filenames, photographers, licences, source links
images/        43 photographs, 900 px wide
tools/
  images.txt       id | Commons filename | caption
  fetch_images.py  downloads the images and regenerates credits.js
```

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

`cat` is one of `polymer`, `metal`, `ceramic`, `composite`, `exotic`.

For a photograph, add a line to `tools/images.txt` as `id|Commons File name.jpg|caption` and run:

```sh
python -I tools/fetch_images.py
```

That downloads anything missing into `images/` and rewrites `credits.js` with the photographer
and licence. It skips files already on disk and backs off when Commons rate-limits it.

If no free photograph exists, drop the `img` field and give the entry a `swatch` instead:

```js
swatch: { pattern: "brushed", colors: ["#434a52", "#98a3ad", "#2b3137"] }
```

Patterns available: `gloss`, `brushed`, `fiber`, `ribbon`, `laminate`, `grain`, `powder`,
`speckle`, `weave`, `honeycomb`. The three colours are mid, highlight and shadow.

## Images and licensing

43 of the 55 entries carry a real photograph from Wikimedia Commons. Each remains under its own
licence (CC0, CC BY, CC BY-SA, FAL or public domain); the photographer, licence and source page
are recorded in `credits.js` and shown on the card and in the lightbox. If you redistribute this
page, keep those credits.

The other 12 materials had no freely licensed photograph available. Those cards carry a drawn SVG
swatch, generated in `app.js`, labelled "illustration" — it approximates the real appearance and
is not a photograph of a specific sample.

Two photographs are representative rather than exact and say so in their captions: the Vulkollan
card shows a cast polyurethane wheel of the same family, and the AlON card shows transparent
spinel, the closely related ceramic.

Figures in the cards are typical published values for a common grade. They are for interest, not
for design work — use a real datasheet for that.
