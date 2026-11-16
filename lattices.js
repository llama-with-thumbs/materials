/* The lattices: the fifth kind of entry. Not a material but how a crystal repeats in space.
   The shelf opens with the system itself, Bravais's fourteen laid out the way the MIT solid
   state course draws them (3.091, lecture notes 4: the seven systems down the side, each
   with its rule, and its lattices across, wire cells with a sphere on every point), then the
   five ways a cell can be centred, then the fourteen one by one, then the three structures
   that nearly every metal takes, then what a space group is. Every card is drawn from the
   numbers here by drawings.js; there is no photograph on this shelf. Fields:
     kind      intro | key | lattice | structure | groups
     id        letters and digits
     symbol    what is stamped on the picture: the Pearson letters, fcc, 230...
     system    the crystal system                       (lattice)
     centring  primitive | base-centred | body-centred | face-centred | rhombohedral  (lattice)
     name      the card's name
     sub       one line under it
     hook      a paragraph: what the shape is, who lives in it, what it costs or gives
     stats     three pairs
     found     a sentence naming materials that keep it  (lattice, structure)
     cards     ids of cards whose material keeps it (become links)
     cell      { a, b, c, alpha, beta, gamma } in relative lengths and degrees  (lattice, structure)
     extra     fractional coordinates of the centring points, or of the basis, beyond the corners
     prism     true draws the hexagonal prism round the cell
     stacking  "abc" | "ab": the close-packed layers view  (structure)
     link      the English Wikipedia article
     src       a second source, not Wikipedia
   tools/check.js insists on fourteen of kind lattice, three stats on every card, a cell with
   six positive numbers where there is one, cards that exist, and no double quote. */

window.LATTICES = [
{
  kind: "intro", id: "bravais", symbol: "14",
  name: "The Bravais lattices",
  sub: "seven shapes of box, fourteen ways to fill space with points",
  hook: "A lattice is an array of points in which every point sees exactly the same surroundings in the same directions. A crystal is a lattice with the same group of atoms, the basis, hung on every point: copper has one atom on each point, rock salt a sodium and a chlorine, a protein crystal some tens of thousands. In 1848 Auguste Bravais proved there are exactly fourteen such arrays in three dimensions, no more. They sort by the shape of the smallest box that repeats, the seven crystal systems from the cube down to the box with no right angle, and by whether extra points sit on the faces or at the centre of the box. The table reads the way MIT draws it: each system with its rule for the edges and angles, and its lattices across, the extra points in red. Blanks are not oversights: a face-centred tetragonal cell, say, is only a body-centred one turned 45°, so it is not counted twice.",
  stats: [["systems", "7"], ["lattices", "14"], ["a crystal", "a lattice with a basis on every point"]],
  cards: [],
  link: "https://en.wikipedia.org/wiki/Bravais_lattice",
  src: ["MIT OpenCourseWare, 3.091 lecture 15", "https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/pages/crystalline-materials/15-introduction-to-crystallography/"]
},
{
  kind: "key", id: "centring", symbol: "P C I F R",
  name: "Centring",
  sub: "where the extra points sit, and the letter for it",
  hook: "A primitive cell, P, has points at its eight corners and nowhere else; since each corner is shared by eight cells, that is one point per cell. Put a point in the middle of one pair of opposite faces and the cell is base-centred, C (or A or B, after which pair), two points per cell. One point at the very centre is body-centred, I, from the German innenzentriert, two per cell. A point on every face is face-centred, F, four per cell. R is the odd one: the rhombohedral lattice, a cube pulled along its diagonal, which is drawn either as that squashed cube or as a hexagonal cell with two points inside along the long diagonal, three per cell. Seven systems times five letters would be thirty-five; twenty-one of them repeat a smaller cell of another letter or break the symmetry of the system, and fourteen are left.",
  stats: [["letters", "P, A B C, I, F, R"], ["points per cell", "1, 2, 2, 4, 3"], ["why German", "innenzentriert, flächenzentriert"]],
  cards: [],
  link: "https://en.wikipedia.org/wiki/Bravais_lattice",
  src: ["DoITPoMS, Cambridge: lattice geometry", "https://www.doitpoms.ac.uk/tlplib/crystallography3/lattice.php"]
},
{
  kind: "lattice", id: "lap", symbol: "aP", system: "triclinic", centring: "primitive",
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
  kind: "lattice", id: "lmp", symbol: "mP", system: "monoclinic", centring: "primitive",
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
  kind: "lattice", id: "lmc", symbol: "mC", system: "monoclinic", centring: "base-centred",
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
  kind: "lattice", id: "lop", symbol: "oP", system: "orthorhombic", centring: "primitive",
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
  kind: "lattice", id: "loc", symbol: "oC", system: "orthorhombic", centring: "base-centred",
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
  kind: "lattice", id: "loi", symbol: "oI", system: "orthorhombic", centring: "body-centred",
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
  kind: "lattice", id: "lof", symbol: "oF", system: "orthorhombic", centring: "face-centred",
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
  kind: "lattice", id: "ltp", symbol: "tP", system: "tetragonal", centring: "primitive",
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
  kind: "lattice", id: "lti", symbol: "tI", system: "tetragonal", centring: "body-centred",
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
  kind: "lattice", id: "lhp", symbol: "hP", system: "hexagonal", centring: "primitive",
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
  kind: "lattice", id: "lhr", symbol: "hR", system: "trigonal", centring: "rhombohedral",
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
  kind: "lattice", id: "lcp", symbol: "cP", system: "cubic", centring: "primitive",
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
  kind: "lattice", id: "lci", symbol: "cI", system: "cubic", centring: "body-centred",
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
  kind: "lattice", id: "lcf", symbol: "cF", system: "cubic", centring: "face-centred",
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
},
{
  kind: "structure", id: "fcc", symbol: "fcc",
  name: "Face-centred cubic metals",
  sub: "one atom on every point of the cF lattice",
  hook: "Aluminium, copper, nickel, silver, gold, platinum, lead and iron between 912 and 1394 °C, which is the austenite a stainless steel keeps at room temperature. One atom sits on each point of the face-centred cube, four to the cell, and each touches twelve others: it is one of the two densest ways to pack equal spheres, 74 per cent of the space filled, with the close-packed layers stacked ABCABC. Those layers are the planes the metal slips on, in three directions each on four planes, twelve ways in all, and none of them stiffens as the metal cools. That is why these metals are the ductile ones at any temperature, why gold beats to leaf and copper draws to wire, and why a liquid-gas tank is austenitic. The atom radius is a√2/4.",
  stats: [["atoms per cell", "4"], ["neighbours", "12, 74 per cent packed"], ["slip", "12 systems, ductile cold"]],
  found: "Aluminium, copper, nickel, silver, gold, platinum, lead; austenite in stainless and Hadfield steel.",
  cards: ["al7075", "alufoil", "goldleaf", "hadfield", "grcop"],
  cell: { a: 1, b: 1, c: 1, alpha: 90, beta: 90, gamma: 90 },
  extra: [[0.5, 0.5, 0], [0.5, 0.5, 1], [0.5, 0, 0.5], [0.5, 1, 0.5], [0, 0.5, 0.5], [1, 0.5, 0.5]],
  stacking: "abc",
  link: "https://en.wikipedia.org/wiki/Cubic_crystal_system",
  src: ["DoITPoMS, Cambridge: close packing", "https://www.doitpoms.ac.uk/tlplib/crystallography3/packing.php"]
},
{
  kind: "structure", id: "bcc", symbol: "bcc",
  name: "Body-centred cubic metals",
  sub: "one atom on every point of the cI lattice",
  hook: "Iron below 912 °C, chromium, tungsten, molybdenum, vanadium, niobium, tantalum, and the soft alkali metals. One atom on each point of the body-centred cube, two to the cell, eight neighbours touching along the diagonals and six more only 15 per cent farther. It fills 68 per cent of space, not 74, and has no close-packed plane: slip runs along the cube diagonals on whichever plane is handy, and the stress it takes rises steeply as the temperature falls. So these metals are strong and stiff, and they turn brittle in the cold: ferritic steel has a transition temperature, austenitic steel does not. The holes between the atoms are small and squashed, which is why iron holds almost no carbon cold and why the carbon it is forced to hold wrenches the cube into martensite. The atom radius is a√3/4.",
  stats: [["atoms per cell", "2"], ["neighbours", "8, and 6 nearly as close; 68 per cent packed"], ["slip", "many systems, all stiffen in the cold"]],
  found: "Ferrite, the iron of mild and wrought steel; chromium, tungsten, molybdenum, vanadium, niobium, tantalum; sodium, potassium.",
  cards: ["wroughtiron", "corten", "wha", "niobium", "hss"],
  cell: { a: 1, b: 1, c: 1, alpha: 90, beta: 90, gamma: 90 },
  extra: [[0.5, 0.5, 0.5]],
  link: "https://en.wikipedia.org/wiki/Cubic_crystal_system",
  src: ["DoITPoMS, Cambridge: slip geometry", "https://www.doitpoms.ac.uk/tlplib/slip/slip_geometry.php"]
},
{
  kind: "structure", id: "hcp", symbol: "hcp",
  name: "Hexagonal close-packed metals",
  sub: "two atoms on every point of the hP lattice",
  hook: "Magnesium, zinc, titanium, zirconium, cobalt, cadmium, beryllium. The same close-packed layers as the face-centred cube, stacked ABAB instead of ABCABC: the third layer goes back over the first. It is not a Bravais lattice but a lattice with a basis, two atoms per point, the second one at a third, two thirds, one half, and that second atom, red in the drawings, is what makes it hexagonal rather than cubic. Same twelve neighbours, same 74 per cent, if the cell is 1.633 times as tall as it is wide; magnesium is 1.624, titanium 1.587, zinc 1.856 with its layers pushed apart. But only one close-packed plane, the base, so magnesium and zinc have three easy slip systems where copper has twelve: they twin, they tear, they are rolled hot, and a sheet of them keeps a strong grain. Titanium slips on its prism faces as well and does better.",
  stats: [["atoms per cell", "2, a lattice with a basis"], ["neighbours", "12, 74 per cent at c/a 1.633"], ["slip", "3 easy systems, so formed hot"]],
  found: "Magnesium, zinc, titanium, zirconium, cobalt, cadmium, beryllium; also graphite, ice and wurtzite, with other bases.",
  cards: ["magnesium", "ebm", "pyro"],
  cell: { a: 1, b: 1, c: 1.633, alpha: 90, beta: 90, gamma: 120 },
  extra: [[1 / 3, 2 / 3, 0.5]], prism: true,
  stacking: "ab",
  link: "https://en.wikipedia.org/wiki/Close-packing_of_equal_spheres",
  src: ["DoITPoMS, Cambridge: close packing", "https://www.doitpoms.ac.uk/tlplib/crystallography3/packing.php"]
},
{
  kind: "groups", id: "spacegroups", symbol: "230",
  name: "Space groups",
  sub: "every way a pattern can repeat and still look the same",
  hook: "A lattice says where the points are; a space group says every operation that carries the whole crystal onto itself: the translations of the lattice, the rotations, mirrors and inversions of the thirty-two point groups, and two operations only an endless pattern can have, the screw axis, which turns and climbs, and the glide plane, which reflects and slides, both drawn below with the crystallographer's comma. Combine them all and exactly 230 groups come out, listed in the International Tables and named in the Hermann-Mauguin way: the lattice letter, then the symmetry along the main directions. Copper and rock salt are Fm-3m, iron Im-3m, magnesium P6₃/mmc, diamond and silicon Fd-3m, quartz P3₂21; P2₁/c alone holds about a third of all known molecular crystals, and P1 has nothing but the lattice. The group settles what a crystal may do: one with a centre of symmetry cannot be piezoelectric, which is why quartz, which has none, drives a watch.",
  stats: [["space groups", "230"], ["point groups", "32, in 7 systems"], ["commonest", "P2₁/c, about a third of molecular crystals"]],
  cards: ["quartzxtal", "silicon", "cvddiamond"],
  link: "https://en.wikipedia.org/wiki/Space_group",
  src: ["DoITPoMS, Cambridge: combining symmetry", "https://www.doitpoms.ac.uk/tlplib/crystallography3/combining_symmetry.php"]
}
];
