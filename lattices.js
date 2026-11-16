/* The lattices: the fifth kind of entry. Not a material but the fourteen ways a crystal can
   repeat in space, Bravais's list of 1848, in the order every textbook gives them, from the
   box with no symmetry to the close-packed cube. Each card draws its cell from the numbers
   here (drawings.js), says what rule the edges and angles obey, and names the materials on
   the cards that keep it. Fields:
     id        letters and digits
     symbol    the Pearson letters, e.g. cF
     system    the crystal system
     centring  primitive | base-centred | body-centred | face-centred | rhombohedral
     name      the lattice, as said aloud
     sub       the rule for the edges and angles
     hook      a paragraph: what the shape is, who lives in it, what it costs or gives
     stats     three pairs
     found     a sentence naming materials that keep it, inside the catalogue or not
     cards     ids of cards whose material keeps it (become links)
     cell      { a, b, c, alpha, beta, gamma } in relative lengths and degrees, for drawing
     extra     fractional coordinates of the centring points, beyond the corners
     link      the English Wikipedia article on the system
     src       a second source, not Wikipedia
   tools/check.js refuses a lattice with a missing field, a card that does not exist, or a
   double quote in its text. */

window.LATTICES = [
{
  id: "lap", symbol: "aP", system: "triclinic", centring: "primitive",
  name: "Triclinic",
  sub: "a ≠ b ≠ c, no angle 90°",
  hook: "No right angles and no two edges alike: a brick that has been squashed sideways and then leant on. The only symmetry left is a centre. Nothing forbids a crystal this shape, and the feldspars and clays mostly take it, because a large awkward molecule or a sheet of silica tetrahedra packs best in a box bent to fit it. The cost is that every property has a different value in every direction, and it takes six numbers to describe the cell where a cube needs one. The points sit at the corners only; a box with no symmetry cannot be centred.",
  stats: [["edges", "all different"], ["angles", "none a right angle"], ["points per cell", "1"]],
  found: "Kaolinite, the clay of porcelain; albite and the plagioclase feldspars; copper sulphate pentahydrate; turquoise.",
  cards: [],
  cell: { a: 1, b: 1.25, c: 0.9, alpha: 80, beta: 70, gamma: 105 }, extra: [],
  link: "https://en.wikipedia.org/wiki/Triclinic_crystal_system",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/triclinic_lattice.html"]
},
{
  id: "lmp", symbol: "mP", system: "monoclinic", centring: "primitive",
  name: "Monoclinic",
  sub: "a ≠ b ≠ c, one angle not 90°",
  hook: "Two right angles and one that leans: a brick pushed over sideways. It keeps one mirror plane and one twofold axis, and that is enough for most molecular crystals, which is why it is the commonest system of all among organic compounds: table sugar is monoclinic, and so is β-sulphur above 96 °C. In the workshop it matters most for zirconia, whose low-temperature form is this shape and a few per cent bigger than the tetragonal form above it; the yttria in Y-TZP exists to hold that change back, and to let it off on purpose at the tip of a crack.",
  stats: [["edges", "all different"], ["angles", "two right, one leaning"], ["points per cell", "1"]],
  found: "Sucrose; β-sulphur; polyvinyl alcohol; baddeleyite, the monoclinic form of zirconia.",
  cards: ["ytzp"],
  cell: { a: 1, b: 0.8, c: 1.2, alpha: 90, beta: 110, gamma: 90 }, extra: [],
  link: "https://en.wikipedia.org/wiki/Monoclinic_crystal_system",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/monoclinic_lattice.html"]
},
{
  id: "lmc", symbol: "mC", system: "monoclinic", centring: "base-centred",
  name: "Base-centred monoclinic",
  sub: "the leaning brick, a point on its top and bottom faces",
  hook: "The leaning brick with an extra point in the middle of its top face and its bottom one. The centring is a record of stacking: layers that repeat with a sideways shift of half a cell, which is what the sheet and chain silicates do. Gypsum, the plasterboard mineral, is here, with its water held between sheets; so are muscovite mica, which cleaves into transparent leaves along the same sheets, orthoclase feldspar and jadeite. It is the second commonest home of minerals after the primitive monoclinic cell.",
  stats: [["edges", "all different"], ["angles", "two right, one leaning"], ["points per cell", "2"]],
  found: "Gypsum; muscovite mica; orthoclase feldspar; jadeite; spodumene, the lithium ore.",
  cards: ["gypsum", "mica"],
  cell: { a: 1, b: 0.8, c: 1.2, alpha: 90, beta: 110, gamma: 90 }, extra: [[0.5, 0.5, 0], [0.5, 0.5, 1]],
  link: "https://en.wikipedia.org/wiki/Monoclinic_crystal_system",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/monoclinic_lattice.html"]
},
{
  id: "lop", symbol: "oP", system: "orthorhombic", centring: "primitive",
  name: "Orthorhombic",
  sub: "a ≠ b ≠ c, all angles 90°",
  hook: "Three right angles and three different edges: a matchbox. Each pair of faces is a mirror, and that is the whole of its symmetry. Cementite, the iron carbide that gives steel its hardness and cast iron its brittleness, is a matchbox cell of twelve iron atoms and four carbons; aragonite, the carbonate of a pearl and a mussel shell, is another, and olivine and topaz. Polyethylene crystallises in one too, the zigzag chains running along the short edge, which is why a drawn fibre of it is stiff along its length and soft across.",
  stats: [["edges", "all different"], ["angles", "all right"], ["points per cell", "1"]],
  found: "Cementite, Fe3C; aragonite; olivine; topaz; the crystals in polyethylene.",
  cards: ["hdpe", "greyiron"],
  cell: { a: 1, b: 1.3, c: 0.75, alpha: 90, beta: 90, gamma: 90 }, extra: [],
  link: "https://en.wikipedia.org/wiki/Orthorhombic_crystal_system",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/orthorhombic_lattice.html"]
},
{
  id: "loc", symbol: "oC", system: "orthorhombic", centring: "base-centred",
  name: "Base-centred orthorhombic",
  sub: "the matchbox, a point on its top and bottom faces",
  hook: "The matchbox with a point centred on its top and bottom faces. Its residents are elements that would rather be molecules: gallium, whose atoms come in pairs and which melts in the hand because of it; iodine, in pairs that make a layered grey crystal; black phosphorus, in puckered sheets that peel apart like graphite. Alpha uranium, the metal below 668 °C, is also here, with a cell so lopsided that a fuel rod grows in one direction and shrinks in another as it is cycled, which is one reason reactor fuel is the oxide and not the metal.",
  stats: [["edges", "all different"], ["angles", "all right"], ["points per cell", "2"]],
  found: "Gallium; iodine; black phosphorus; alpha uranium.",
  cards: [],
  cell: { a: 1, b: 1.3, c: 0.75, alpha: 90, beta: 90, gamma: 90 }, extra: [[0.5, 0.5, 0], [0.5, 0.5, 1]],
  link: "https://en.wikipedia.org/wiki/Orthorhombic_crystal_system",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/orthorhombic_lattice.html"]
},
{
  id: "loi", symbol: "oI", system: "orthorhombic", centring: "body-centred",
  name: "Body-centred orthorhombic",
  sub: "the matchbox, a point at its heart",
  hook: "The matchbox with a point at its centre. The rarest of the fourteen among things that can be picked up: no common mineral and no metal keeps it at ordinary pressure. Silicon squeezed past about 13 GPa passes through it on the way to becoming a metal, and a handful of intermetallic compounds stop here. It is on the list because the symmetry allows it, not because nature is fond of it, and it is worth a card for that reason: the fourteen are a mathematical fact first and a geological one second.",
  stats: [["edges", "all different"], ["angles", "all right"], ["points per cell", "2"]],
  found: "Silicon between about 13 and 16 GPa; a few intermetallics; nothing on a shelf.",
  cards: [],
  cell: { a: 1, b: 1.3, c: 0.75, alpha: 90, beta: 90, gamma: 90 }, extra: [[0.5, 0.5, 0.5]],
  link: "https://en.wikipedia.org/wiki/Orthorhombic_crystal_system",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/orthorhombic_lattice.html"]
},
{
  id: "lof", symbol: "oF", system: "orthorhombic", centring: "face-centred",
  name: "Face-centred orthorhombic",
  sub: "the matchbox, a point on each of its six faces",
  hook: "The matchbox with a point on every face. Alpha sulphur is the famous resident, the yellow crystals of match heads and of the vulcanising shop: its molecules are eight-atom crowns, and sixteen of them pack into one cell, 128 atoms, among the largest cells of any element. That awkward packing is why sulphur melts low, flows strangely and turns to a rubber when poured into water. Natrolite, a zeolite with channels wide enough to hold water, is the other well-known case.",
  stats: [["edges", "all different"], ["angles", "all right"], ["points per cell", "4"]],
  found: "Alpha sulphur, S8; natrolite; a few ordered alloys.",
  cards: ["natrubber"],
  cell: { a: 1, b: 1.3, c: 0.75, alpha: 90, beta: 90, gamma: 90 },
  extra: [[0.5, 0.5, 0], [0.5, 0.5, 1], [0.5, 0, 0.5], [0.5, 1, 0.5], [0, 0.5, 0.5], [1, 0.5, 0.5]],
  link: "https://en.wikipedia.org/wiki/Orthorhombic_crystal_system",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/orthorhombic_lattice.html"]
},
{
  id: "ltp", symbol: "tP", system: "tetragonal", centring: "primitive",
  name: "Tetragonal",
  sub: "a = b ≠ c, all angles 90°",
  hook: "A square base and a different height: a cube stretched or squashed along one axis, which gives it a fourfold axis and nothing finer. Rutile is the classic, the titanium dioxide of white paint, sunscreen and toothpaste, with a cell so dense that it bends light more than diamond does; cassiterite, the tin ore, has the same structure. The ordered copper-gold alloy CuAu is tetragonal because its layers of copper and gold are different sizes, and the cube can no longer be a cube.",
  stats: [["edges", "two equal, one different"], ["angles", "all right"], ["points per cell", "1"]],
  found: "Rutile and cassiterite; CuAu; lead titanate; many ferroelectric perovskites.",
  cards: ["batio3"],
  cell: { a: 1, b: 1, c: 1.3, alpha: 90, beta: 90, gamma: 90 }, extra: [],
  link: "https://en.wikipedia.org/wiki/Tetragonal_crystal_system",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/tetragonal_lattice.html"]
},
{
  id: "lti", symbol: "tI", system: "tetragonal", centring: "body-centred",
  name: "Body-centred tetragonal",
  sub: "the stretched cube, a point at its heart",
  hook: "The stretched cube with a point at its centre. White tin, the metal of solder and organ pipes, is here, and turns to grey powder below 13 °C by leaving for a cubic cell; zircon, anatase and indium are here too. Its most important resident is martensite, the hard phase of quenched steel: iron's body-centred cube, wrenched a few per cent taller by the carbon atoms trapped inside it when the quench gave them no time to leave. The whole of hardening a blade is one lattice pulled out of true.",
  stats: [["edges", "two equal, one different"], ["angles", "all right"], ["points per cell", "2"]],
  found: "White tin; martensite in quenched steel; zircon; anatase; indium; the room-temperature halide perovskite.",
  cards: ["pipemetal", "hss", "perovskitepv"],
  cell: { a: 1, b: 1, c: 1.3, alpha: 90, beta: 90, gamma: 90 }, extra: [[0.5, 0.5, 0.5]],
  link: "https://en.wikipedia.org/wiki/Tetragonal_crystal_system",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/tetragonal_lattice.html"]
},
{
  id: "lhp", symbol: "hP", system: "hexagonal", centring: "primitive",
  name: "Hexagonal",
  sub: "a = b ≠ c, γ = 120°, the others 90°",
  hook: "Two equal edges at 120° and an upright third: one third of a hexagonal prism, which is how it is usually drawn. Magnesium, zinc, titanium and cobalt pack this way, in close-packed layers that repeat ABAB; so do graphite and ice, quartz, which is a trigonal crystal on a hexagonal lattice, and the wurtzite of gallium nitride and zinc oxide. The hexagonal metals are the ones that are hard to form cold: there are few directions in which the layers can slide, so they twin, and then they crack, which is why magnesium is cast or formed hot.",
  stats: [["edges", "two equal, one different"], ["angles", "one of 120°"], ["points per cell", "1"]],
  found: "Magnesium, zinc, titanium, cobalt; graphite; ice; quartz; gallium nitride; zinc oxide.",
  cards: ["magnesium", "pyro", "quartzxtal", "gan", "mov"],
  cell: { a: 1, b: 1, c: 1.2, alpha: 90, beta: 90, gamma: 120 }, extra: [], prism: true,
  link: "https://en.wikipedia.org/wiki/Hexagonal_crystal_family",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/hexagonal_lattice.html"]
},
{
  id: "lhr", symbol: "hR", system: "trigonal", centring: "rhombohedral",
  name: "Rhombohedral",
  sub: "a = b = c, all angles equal, none 90°",
  hook: "A cube pulled or pushed along its body diagonal, so the three edges stay equal and the three angles stay equal but are no longer right. Calcite is here, which is why a clear piece of it shows two images; so are bismuth, antimony and arsenic, corundum, which is the alumina of grinding wheels and the sapphire of watch glasses, and hematite. The same lattice can be written as a hexagonal cell with two extra points inside it, which is why crystallographers file it under the hexagonal family and mineralogists call its crystals trigonal.",
  stats: [["edges", "all equal"], ["angles", "all equal, not right"], ["points per cell", "1, or 3 in the hexagonal cell"]],
  found: "Calcite; bismuth, antimony, arsenic; corundum, alumina and sapphire; hematite.",
  cards: ["calcite", "bismuth", "alumina", "sapphire"],
  cell: { a: 1, b: 1, c: 1, alpha: 75, beta: 75, gamma: 75 }, extra: [],
  link: "https://en.wikipedia.org/wiki/Hexagonal_crystal_family",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/rhombohedral_lattice/"]
},
{
  id: "lcp", symbol: "cP", system: "cubic", centring: "primitive",
  name: "Simple cubic",
  sub: "a = b = c, all angles 90°, corners only",
  hook: "The plain cube: a point at each corner and nothing else. It is the first cell anyone draws and almost no element uses it, because it leaves more than half the space empty; polonium is the only metal that bothers. As a lattice for compounds it is everywhere, one kind of atom at the corners and another in the middle: caesium chloride, the cubic perovskites such as strontium titanate and barium titanate above 120 °C, and the A15 cell of niobium-tin, the superconducting wire inside an MRI magnet.",
  stats: [["edges", "all equal"], ["angles", "all right"], ["points per cell", "1"]],
  found: "Polonium; caesium chloride; cubic perovskites; niobium-tin, Nb3Sn.",
  cards: ["batio3", "niobium"],
  cell: { a: 1, b: 1, c: 1, alpha: 90, beta: 90, gamma: 90 }, extra: [],
  link: "https://en.wikipedia.org/wiki/Cubic_crystal_system",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/cubic_lattice.html"]
},
{
  id: "lci", symbol: "cI", system: "cubic", centring: "body-centred",
  name: "Body-centred cubic",
  sub: "the cube, a point at its heart",
  hook: "The cube with a point at its centre, each atom touching eight neighbours along the diagonals. Iron below 912 °C is here, and chromium, tungsten, molybdenum, vanadium, niobium and the alkali metals. It is not close-packed, and the planes slide less easily as the temperature drops, so these are the metals that go brittle in the cold: the ductile-to-brittle transition that split Liberty ships at their moorings in a North Atlantic winter belongs to this lattice, and is why a pressure vessel steel is specified by its behaviour at a temperature, not a strength alone.",
  stats: [["edges", "all equal"], ["angles", "all right"], ["points per cell", "2"]],
  found: "Iron below 912 °C, ferrite; chromium, tungsten, molybdenum, vanadium, niobium; sodium and potassium.",
  cards: ["wroughtiron", "corten", "niobium", "wha"],
  cell: { a: 1, b: 1, c: 1, alpha: 90, beta: 90, gamma: 90 }, extra: [[0.5, 0.5, 0.5]],
  link: "https://en.wikipedia.org/wiki/Cubic_crystal_system",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/cubic_lattice.html"]
},
{
  id: "lcf", symbol: "cF", system: "cubic", centring: "face-centred",
  name: "Face-centred cubic",
  sub: "the cube, a point on each of its six faces",
  hook: "The cube with a point on every face: the close-packed cube, twelve neighbours each, layers repeating ABCABC. Aluminium, copper, nickel, silver, gold, lead and austenitic steel are here, and they stay ductile at any temperature because there are twelve ways for the layers to slide and none of them freezes out; it is why gold can be beaten to leaf and why a cryogenic tank is austenitic. The same lattice, with two or more atoms on each point, carries rock salt, diamond and silicon, gallium arsenide, magnesia and fluorite.",
  stats: [["edges", "all equal"], ["angles", "all right"], ["points per cell", "4"]],
  found: "Aluminium, copper, nickel, silver, gold, lead; austenite; rock salt; diamond and silicon; gallium arsenide.",
  cards: ["al7075", "alufoil", "goldleaf", "hadfield", "silicon", "gaas", "cvddiamond"],
  cell: { a: 1, b: 1, c: 1, alpha: 90, beta: 90, gamma: 90 },
  extra: [[0.5, 0.5, 0], [0.5, 0.5, 1], [0.5, 0, 0.5], [0.5, 1, 0.5], [0, 0.5, 0.5], [1, 0.5, 0.5]],
  link: "https://en.wikipedia.org/wiki/Cubic_crystal_system",
  src: ["AFLOW prototype encyclopedia", "https://aflow.org/p/cubic_lattice.html"]
}
];
