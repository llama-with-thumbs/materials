/* The catalogue's vocabulary, in one place: categories, picture kinds and themes.
   The page reads it, and tools/check.js reads it to validate data.js — so a category
   or a theme that is not declared here is a hard error rather than a silent typo.
   Order matters: it is the order of the filter buttons and of the blocks in data.js. */

window.CATS = {
  polymer: "Polymers & elastomers",
  metal: "Metals & alloys",
  ceramic: "Ceramics & glass",
  electronic: "Semiconductors & optics",
  composite: "Composites & structures",
  additive: "3D printing & additive",
  fibre: "Ropes & woven materials",
  fabric: "Fabrics & constructions",
  natural: "Natural & biological",
  exotic: "Active & exotic",
  music: "Sound & music",
  warmth: "Warmth & insulation"
};

// The short word stamped on the corner of each photograph. Taken from the category
// name, except where the first word is uninformative on its own.
window.CAT_TAGS = {
  electronic: "Semiconductors",
  additive: "Additive",
  fibre: "Rope",
  warmth: "Warmth"
};

// What the picture actually shows, when it is not a photograph of the material itself.
window.KINDS = {
  structure: "molecular structure",
  product: "something made from it",
  process: "how it is made",
  related: "a close relative",
  analog: "a similar example"
};

// Themes cut across the categories. A card belongs to exactly one category, which is
// what it *is*; a theme is a job it happens to do, and it can hold several. Filtering
// on a theme shows its own category plus every card tagged with it, so merino wool
// stays filed under ropes and woven materials and still turns up under Keeping warm.
window.THEMES = {
  warmth: "Keeping warm"
};
