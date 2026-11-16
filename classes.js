/* The classes: the sixth kind of entry. Not a material but the handful of words the
   science sorts every material into, each said in plain terms: what holds it together,
   how to tell one when it is in the hand, and how it fails. The workshops of this
   catalogue are organised by trade; these are organised by bond, and a reader who wants
   to know why a plastic bends and a plate breaks starts here. Fields:
     id        letters and digits
     name      the class
     sub       one line: what it is, physically
     hook      a paragraph in plain words, with the trade-off in it
     stats     three pairs: the bond or structure, the tell, how it fails
     cats      the workshops where its materials live (become filter buttons)
     cards     a few ids that show the class well (become links)
     sketch    which drawing drawings.js makes for it
     link      the English Wikipedia article
     src       a teaching page, not Wikipedia
   tools/check.js refuses a class with a missing field, an undeclared workshop, a card
   that does not exist or a double quote in its text. */

window.CLASSES = [
{
  id: "metal", name: "Metal",
  sub: "atoms in a sea of their own loose electrons",
  hook: "Atoms that have let go of their outer electrons, which pool between them as a sea that belongs to everyone. The sea carries heat and current, which is why a metal conducts, and it reflects light, which is why it shines. Because no atom is tied to a particular neighbour, whole planes of atoms can slide a step without the piece coming apart: a metal bends before it breaks, and can be rolled, drawn and hammered. The same freedom is the cost. A hot metal creeps under a steady load, a cold one may snap, and most of them would rather go back to being ore, which is rust.",
  stats: [["held by", "a shared sea of electrons"], ["the tell", "bends before it breaks, conducts, shines"], ["fails by", "rust, fatigue, creep when hot"]],
  cats: ["metal"], cards: ["wroughtiron", "al7075", "becu", "hadfield"], sketch: "metal",
  link: "https://en.wikipedia.org/wiki/Metal",
  src: ["DoITPoMS, Cambridge: metal forming", "https://www.doitpoms.ac.uk/tlplib/metal-forming-1/index.php"]
},
{
  id: "ceramic", name: "Ceramic",
  sub: "metal and non-metal atoms locked to fixed neighbours",
  hook: "Metal and non-metal atoms holding each other by charge or by shared pairs of electrons, each bound tightly to particular neighbours, nearly always in a crystal. Nothing can slide, so a ceramic is hard, stiff, keeps its shape when red hot and does not conduct; and for the same reason it cannot give, so a crack that starts runs straight through it. Strong when squeezed, weak when pulled, and brittle: a brick, a knife blade, a tooth. Most are oxides, carbides or nitrides, and they are made by pressing powder and firing it, because they melt too high to pour.",
  stats: [["held by", "ionic and covalent bonds, fixed neighbours"], ["the tell", "hard, stiff, insulating, brittle"], ["fails by", "one crack, all at once"]],
  cats: ["ceramic"], cards: ["alumina", "sic", "si3n4", "ytzp"], sketch: "ceramic",
  link: "https://en.wikipedia.org/wiki/Ceramic",
  src: ["DoITPoMS, Cambridge: ceramics", "https://www.doitpoms.ac.uk/tlplib/ceramics/index.php"]
},
{
  id: "glass", name: "Glass",
  sub: "a liquid that was cooled too fast to crystallise",
  hook: "A liquid that was cooled too fast to sort itself into a crystal, so its atoms froze where they stood, in a network with no repeat. Chemically most glass is a ceramic, silica with a little soda and lime, so it is hard, stiff, brittle and insulating. The missing order is what makes it clear, since there are no grain boundaries to scatter light, and what lets it soften over a range of temperature instead of melting at one, which is why glass can be blown and drawn. A metal or a plastic can be a glass too, if it is cooled fast enough or its molecules are too awkward to line up.",
  stats: [["structure", "no long-range order"], ["the tell", "clear, softens over a range"], ["fails by", "a scratch, then a crack"]],
  cats: ["ceramic"], cards: ["sodalime", "borosilicate", "gorilla", "bmg"], sketch: "glass",
  link: "https://en.wikipedia.org/wiki/Glass",
  src: ["DoITPoMS, Cambridge: the glass transition", "https://www.doitpoms.ac.uk/tlplib/glass-transition/index.php"]
},
{
  id: "polymer", name: "Polymer",
  sub: "very long chain molecules, tangled",
  hook: "Molecules thousands of atoms long, mostly carbon with hydrogen hanging off it, tangled like cooked spaghetti. Along a chain the bonds are as strong as diamond; between chains there is only a weak stickiness, so chains slide, stretch and untangle, which is why a plastic is light, flexible, tough and easy to shape when warm. Heat loosens the tangle: a thermoplastic softens and can be melted again, a thermoset has its chains tied to each other and chars instead. None of them likes a hot engine, and sunlight slowly cuts the chains, which is why an old bucket goes pale and cracks.",
  stats: [["held by", "strong bonds along the chain, weak ones between"], ["the tell", "light, flexible, softens when warm"], ["fails by", "heat, sunlight, solvents, slow creep"]],
  cats: ["polymer", "film", "glue"], cards: ["hdpe", "polystyrene", "nylon11", "pufoam"], sketch: "polymer",
  link: "https://en.wikipedia.org/wiki/Polymer",
  src: ["DoITPoMS, Cambridge: polymer basics", "https://www.doitpoms.ac.uk/tlplib/polymerbasics/index.php"]
},
{
  id: "elastomer", name: "Elastomer",
  sub: "a polymer whose coiled chains are tied together",
  hook: "A polymer whose chains are coiled up and tied to each other at a few points. Pull, and the coils straighten; let go, and the ties haul them back, so it stretches to several times its length and recovers. The ties are the whole trick: natural rubber without them is a sticky gum that flows in summer and cracks in winter, and Goodyear's sulphur was what first tied it. Because the chains must be free to wriggle, an elastomer is always above its glass temperature; cool one far enough and it turns into a brittle solid, which is what happened to the O-rings on Challenger.",
  stats: [["structure", "coiled chains, cross-linked"], ["the tell", "stretches and comes back"], ["fails by", "cold, ozone, oil, age"]],
  cats: ["polymer"], cards: ["natrubber", "silicone", "nbr", "butyl"], sketch: "elastomer",
  link: "https://en.wikipedia.org/wiki/Elastomer",
  src: ["DoITPoMS, Cambridge: the stiffness of rubber", "https://www.doitpoms.ac.uk/tlplib/stiffness-of-rubber/index.php"]
},
{
  id: "composite", name: "Composite",
  sub: "two materials kept distinct and used together",
  hook: "Two materials kept distinct and used together so that each covers the weakness of the other: usually strong fibres in a soft matrix that holds them in place and hands the load from one to the next. Glass or carbon in resin, steel in concrete, straw in mud, cellulose in lignin, which is wood. The fibres carry the load; the matrix keeps them apart, so a crack has to stop and start again at every one. The result is stiff and strong for its weight along the fibres and much weaker across them, and it is hard to inspect, repair or recycle, because the two can no longer be taken apart.",
  stats: [["structure", "fibres in a matrix"], ["the tell", "strong one way, weak across"], ["fails by", "layers parting, damage you cannot see"]],
  cats: ["composite"], cards: ["gfrp", "cfrp", "alhoneycomb", "tyre"], sketch: "composite",
  link: "https://en.wikipedia.org/wiki/Composite_material",
  src: ["DoITPoMS, Cambridge: fibre composites", "https://www.doitpoms.ac.uk/tlplib/fibre_composites/index.php"]
},
{
  id: "semiconductor", name: "Semiconductor",
  sub: "a crystal that conducts a little, and can be told how much",
  hook: "A crystal, usually silicon, that holds its electrons just tightly enough. At room temperature a few shake loose and it conducts a little, and a trace of the right impurity, one atom in a million, decides how much and whether the current is carried by electrons or by the holes they leave. Every transistor is two such regions meeting. The same property makes it swallow and give out light at one fixed colour, which is the solar cell and the LED. It has to be grown as a single crystal of absurd purity, it is brittle like any ceramic, and a few degrees of extra heat or a speck of the wrong dust undoes it.",
  stats: [["structure", "a covalent crystal with a small gap"], ["the tell", "conducts more when doped, warm or lit"], ["fails by", "heat, contamination, static"]],
  cats: ["electronic"], cards: ["silicon", "gaas", "gan", "germanium"], sketch: "semiconductor",
  link: "https://en.wikipedia.org/wiki/Semiconductor",
  src: ["DoITPoMS, Cambridge: semiconductors", "https://www.doitpoms.ac.uk/tlplib/semiconductors/index.php"]
}
];
