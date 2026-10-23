/* The catalogue's vocabulary, in one place: categories, picture kinds and themes.
   The page reads it, and tools/check.js reads it to validate data.js — so a category
   or a theme that is not declared here is a hard error rather than a silent typo.
   Order matters: it is the order of the filter buttons and of the blocks in data.js.
   Labels are lowercase and named after the workshop a category descends from, in the
   Bauhaus manner; the keys are the stable names and never change. */

window.CATS = {
  polymer: "plastics",
  metal: "metal",
  ceramic: "clay and glass",
  electronic: "light and current",
  composite: "building",
  additive: "printing in three dimensions",
  fibre: "yarn and rope",
  fabric: "cloth",
  natural: "wood, bone and horn",
  exotic: "the preliminary course",
  music: "stage and sound",
  warmth: "warmth",
  film: "film and foil"
};

// The single word stamped on the corner of each photograph. Every category gets one,
// because the first word of a label like "the preliminary course" says nothing on its own.
window.CAT_TAGS = {
  polymer: "plastics",
  metal: "metal",
  ceramic: "clay",
  electronic: "light",
  composite: "building",
  additive: "printing",
  fibre: "rope",
  fabric: "cloth",
  natural: "grown",
  exotic: "vorkurs",
  music: "stage",
  warmth: "warmth",
  film: "film"
};

// What the picture actually shows, when it is not a photograph of the material itself.
// "plate" is the kind every plate's image has: a diagram, by definition not a photograph,
// and the card says so in its stamp rather than with a badge.
window.KINDS = {
  structure: "molecular structure",
  product: "something made from it",
  process: "how it is made",
  related: "a close relative",
  analog: "a similar example",
  plate: "a diagram"
};

// Themes cut across the categories. A card belongs to exactly one category, which is
// what it *is*; a theme is a job it happens to do, and it can hold several. Filtering
// on a theme shows its own category plus every card tagged with it, so merino wool
// stays filed under yarn and rope and still turns up under keeping warm.
window.THEMES = {
  warmth: "keeping warm",
  duvet: "inside a duvet"
};
