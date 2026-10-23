/* Papers: the third kind of entry. Not a material and not a figure: the paper that introduced
   a material on a card, or a recent one whose result promises something. Fields:
     id        letters and digits, e.g. kistler1931
     kind      founding | recent
     material  what it is about, a few words; this is the card's heading
     title, authors, journal, year, doi   the citation; year is a number
     oa        a URL to a free full text, or null
     why       two or three sentences on what it showed; no hype
     implies   one sentence on what it implied or promises, hedged where unconfirmed
     cats      the workshops it belongs to; cards  the card ids it touches
   Verified against Crossref by tools/papers.py; check.js refuses a malformed DOI. */
window.PAPERS = [
{
  id: "kistler1931", kind: "founding", material: "Silica aerogel",
  title: "Coherent Expanded Aerogels and Jellies",
  authors: "Kistler", journal: "Nature", year: 1931, ref: "127, 741",
  doi: "10.1038/127741a0",
  oa: null,
  why: "Kistler replaced the liquid in a silica gel with a gas above its critical point, so no meniscus formed and the skeleton did not collapse. The result was a solid of about 95 percent air that kept the shape of the wet gel. The same trick worked for alumina, tungsten oxide, gelatin, rubber and egg albumin.",
  implies: "Supercritical drying is still the route to the lightest solid insulators, and the paper reads as a recipe eighty years ahead of its market.",
  cats: ["composite"], cards: ["aerogel"]
},
{
  id: "klement1960", kind: "founding", material: "Metallic glass (Au-Si)",
  title: "Non-crystalline Structure in Solidified Gold–Silicon Alloys",
  authors: "Klement, Willens and Duwez", journal: "Nature", year: 1960, ref: "187, 869-870",
  doi: "10.1038/187869b0",
  oa: null,
  why: "A gold-silicon eutectic was splat-quenched from the melt at roughly a million kelvin per second and gave an X-ray pattern with no sharp lines. The authors concluded the solid was non-crystalline, the first metallic glass. The sample crystallised within a day at room temperature.",
  implies: "It established that metals can be frozen as glasses if cooled fast enough, which led to Metglas ribbons and, after alloy design, to bulk metallic glasses.",
  cats: ["metal"], cards: ["bmg", "metglas"]
},
{
  id: "buehler1963", kind: "founding", material: "Nitinol (NiTi)",
  title: "Effect of Low-Temperature Phase Changes on the Mechanical Properties of Alloys near Composition TiNi",
  authors: "Buehler, Gilfrich and Wiley", journal: "Journal of Applied Physics", year: 1963, ref: "34, 1475-1477",
  doi: "10.1063/1.1729603",
  oa: null,
  why: "Near-equiatomic nickel-titanium alloys were found to change damping, modulus and hardness sharply across a low-temperature phase transition. The authors at the Naval Ordnance Laboratory reported that mechanical properties could be set by composition and temperature around this transition. The shape-memory effect itself was reported in the following years.",
  implies: "It is the origin of the NiTi system behind every superelastic stent and eyeglass frame, and the base alloy for elastocaloric cooling work today.",
  cats: ["metal"], cards: ["nitinol"]
},
{
  id: "garvie1975", kind: "founding", material: "Transformation-toughened zirconia",
  title: "Ceramic steel?",
  authors: "Garvie, Hannink and Pascoe", journal: "Nature", year: 1975, ref: "258, 703-704",
  doi: "10.1038/258703a0",
  oa: null,
  why: "Garvie, Hannink and Pascoe showed that metastable tetragonal zirconia particles transform to the monoclinic phase in the stress field of a crack, with a volume expansion that closes the crack. The fracture toughness roughly doubled. The title compares the mechanism to the martensitic transformation in steel.",
  implies: "It is the mechanism behind every tough zirconia part, from dental crowns to knife blades, with the known weakness of slow hydrothermal ageing.",
  cats: ["ceramic"], cards: ["ytzp", "zta"]
},
{
  id: "sagawa1984", kind: "founding", material: "Nd-Fe-B permanent magnet",
  title: "New material for permanent magnets on a base of Nd and Fe (invited)",
  authors: "Sagawa et al.", journal: "Journal of Applied Physics", year: 1984, ref: "55, 2083-2087",
  doi: "10.1063/1.333572",
  oa: null,
  why: "Sagawa and coworkers at Sumitomo reported sintered Nd-Fe-B magnets with an energy product of 36 megagauss-oersted, well above samarium-cobalt. The hard phase was later identified as Nd2Fe14B. Neodymium and iron are both cheaper and more abundant than samarium and cobalt.",
  implies: "It is the magnet in every hard drive, electric motor and earbud since, and the reason rare-earth supply is a strategic topic.",
  cats: ["metal"], cards: ["ndfeb"]
},
{
  id: "kroto1985", kind: "founding", material: "C60 buckminsterfullerene",
  title: "C60: Buckminsterfullerene",
  authors: "Kroto et al.", journal: "Nature", year: 1985, ref: "318, 162-163",
  doi: "10.1038/318162a0",
  oa: null,
  why: "Laser vaporisation of graphite into a helium pulse gave a mass spectrum with an outsized peak at 60 carbon atoms. The authors proposed a closed truncated icosahedron, a cage with 12 pentagons and 20 hexagons, and it was confirmed by bulk synthesis in 1990. The paper is two pages long.",
  implies: "It opened the family of closed carbon cages that nanotubes and graphene later joined, and gave chemistry a new soluble form of carbon.",
  cats: ["exotic"], cards: []
},
{
  id: "lakes1987", kind: "founding", material: "Auxetic foam",
  title: "Foam Structures with a Negative Poisson's Ratio",
  authors: "Lakes", journal: "Science", year: 1987, ref: "235, 1038-1040",
  doi: "10.1126/science.235.4792.1038",
  oa: null,
  why: "A polyester foam was compressed in three directions and heat-set, which buckled the cell ribs inward into a re-entrant geometry. The foam then had a Poisson's ratio of -0.7, so it got fatter when pulled. Classical elasticity allows this but no manufactured material had shown it.",
  implies: "It opened auxetic structures as a design space, since indentation resistance and curvature behaviour change sign along with Poisson's ratio.",
  cats: ["composite"], cards: ["auxetic"]
},
{
  id: "wu1987", kind: "founding", material: "YBCO superconductor",
  title: "Superconductivity at 93 K in a new mixed-phase Y-Ba-Cu-O compound system at ambient pressure",
  authors: "Wu et al.", journal: "Physical Review Letters", year: 1987, ref: "58, 908-910",
  doi: "10.1103/PhysRevLett.58.908",
  oa: null,
  why: "A yttrium-barium-copper oxide was found to superconduct at 93 K, the first material above the boiling point of liquid nitrogen. The paper came out weeks after the samples were made. Resistance dropped to zero and the Meissner effect was confirmed.",
  implies: "Liquid-nitrogen superconductivity made cables and magnets a cheap-cryogen problem, though the brittle ceramic took decades to turn into tape.",
  cats: ["exotic"], cards: ["ybco"]
},
{
  id: "jackson1988", kind: "founding", material: "Nacre (mother of pearl)",
  title: "The mechanical design of nacre",
  authors: "Jackson, Vincent and Turner", journal: "Proceedings of the Royal Society of London. Series B. Biological Sciences", year: 1988, ref: "234, 415-440",
  doi: "10.1098/rspb.1988.0056",
  oa: null,
  why: "Jackson, Vincent and Turner measured the stiffness, strength and work of fracture of nacre from Pinctada shells and modelled it as a brick-and-mortar composite of aragonite tablets and a thin protein-polysaccharide layer. The work of fracture was about 3000 times that of pure aragonite. Wet nacre was tougher than dry.",
  implies: "It is the quantitative basis for the brick-and-mortar design that bioinspired tough ceramics still copy.",
  cats: ["natural"], cards: ["nacre"]
},
{
  id: "iijima1991", kind: "founding", material: "Carbon nanotubes",
  title: "Helical microtubules of graphitic carbon",
  authors: "Iijima", journal: "Nature", year: 1991, ref: "354, 56-58",
  doi: "10.1038/354056a0",
  oa: null,
  why: "Iijima looked at the soot on a carbon arc electrode in a transmission electron microscope and found needles of two to fifty coaxial graphitic tubes, each with a helical pitch. The tubes were 4 to 30 nm across and up to a micron long. The arc conditions were those used for fullerene production.",
  implies: "This is the paper most cited as the start of nanotube research, and it still frames the problem of growing long, chirality-controlled tubes in quantity.",
  cats: ["exotic"], cards: ["cntyarn", "aerographite"]
},
{
  id: "barthlott1997", kind: "founding", material: "Lotus leaf surface",
  title: "Purity of the sacred lotus, or escape from contamination in biological surfaces",
  authors: "Barthlott and Neinhuis", journal: "Planta", year: 1997, ref: "202, 1-8",
  doi: "10.1007/s004250050096",
  oa: null,
  why: "Barthlott and Neinhuis measured contact angles and contamination on 340 plant species and showed that leaves with rough, waxy micro-structures stay clean because water beads up and rolls off carrying particles. Smooth leaves did not self-clean. They named it the lotus effect.",
  implies: "It gave a design rule for self-cleaning surfaces, micro-roughness plus low surface energy, that coatings, paints and fabrics have been chasing since.",
  cats: ["natural"], cards: ["dwrfinish", "slips"]
},
{
  id: "li1999", kind: "founding", material: "MOF-5 metal-organic framework",
  title: "Design and synthesis of an exceptionally stable and highly porous metal-organic framework",
  authors: "Li et al.", journal: "Nature", year: 1999, ref: "402, 276-279",
  doi: "10.1038/46248",
  oa: null,
  why: "Zinc clusters linked by terephthalate formed a cubic crystalline framework, MOF-5, that stayed porous after the solvent was removed and survived to 300 degrees C. Its surface area exceeded that of any zeolite. The authors argued the structure could be designed from the linker geometry.",
  implies: "It made porous solids a design problem in organic chemistry, which has since given frameworks for gas storage, water harvesting and carbon capture.",
  cats: ["exotic"], cards: ["mof", "zeolite"]
},
{
  id: "autumn2000", kind: "founding", material: "Gecko setae",
  title: "Adhesive force of a single gecko foot-hair",
  authors: "Autumn et al.", journal: "Nature", year: 2000, ref: "405, 681-685",
  doi: "10.1038/35015073",
  oa: null,
  why: "A single gecko foot-hair was mounted on a micro-electromechanical sensor and found to produce up to 200 micronewtons of adhesion, with the force depending on preload and sliding. The result was consistent with van der Waals contact from millions of spatulae. No glue or suction was involved.",
  implies: "It is the basis for dry adhesives that stick and release repeatedly, though synthetic versions still fall short of the animal on dirty or wet surfaces.",
  cats: ["natural"], cards: []
},
{
  id: "white2001", kind: "founding", material: "Self-healing epoxy with microcapsules",
  title: "Autonomic healing of polymer composites",
  authors: "White et al.", journal: "Nature", year: 2001, ref: "409, 794-797",
  doi: "10.1038/35057232",
  oa: null,
  why: "Microcapsules of dicyclopentadiene and particles of Grubbs catalyst were dispersed in an epoxy. A propagating crack broke the capsules, the monomer wicked into the crack plane, met the catalyst and polymerised. Healed samples recovered about 75 percent of their original fracture toughness.",
  implies: "It defined the capsule-based healing architecture that most later autonomic polymers and coatings use, with the known limit that each site heals once.",
  cats: ["exotic"], cards: ["selfhealpoly", "epoxy"]
},
{
  id: "lendlein2002", kind: "founding", material: "Shape-memory polymer",
  title: "Biodegradable, Elastic Shape-Memory Polymers for Potential Biomedical Applications",
  authors: "Lendlein and Langer", journal: "Science", year: 2002, ref: "296, 1673-1676",
  doi: "10.1126/science.1066102",
  oa: null,
  why: "A biodegradable polyurethane with oligo(epsilon-caprolactone) switching segments was programmed into a temporary shape and recovered its original form at body temperature. The example shown was a self-tightening suture knot. Recovery was driven by a thermal transition rather than a crystallographic one, as in metals.",
  implies: "It made shape memory a polymer design problem, which is why stimulus-responsive and 4D-printed polymers now use the same switching-segment logic.",
  cats: ["polymer"], cards: ["fourd", "tpu"]
},
{
  id: "cantor2004", kind: "founding", material: "Equiatomic multicomponent alloys",
  title: "Microstructural development in equiatomic multicomponent alloys",
  authors: "Cantor et al.", journal: "Materials Science and Engineering: A", year: 2004, ref: "375-377, 213-218",
  doi: "10.1016/j.msea.2003.10.257",
  oa: null,
  why: "Cantor and coworkers cast alloys with up to twenty elements in equal proportions and found that most were brittle and multiphase. The exception was Fe-Cr-Mn-Ni-Co, which solidified as a single face-centred cubic solid solution and could be worked. This is the Cantor alloy, the model system for the whole field.",
  implies: "The paper is independent of Yeh and reached the same place by brute force, which is why the Cantor alloy remains the reference high-entropy composition.",
  cats: ["metal"], cards: ["hea"]
},
{
  id: "novoselov2004", kind: "founding", material: "Graphene",
  title: "Electric Field Effect in Atomically Thin Carbon Films",
  authors: "Novoselov et al.", journal: "Science", year: 2004, ref: "306, 666-669",
  doi: "10.1126/science.1102896",
  oa: "https://arxiv.org/abs/cond-mat/0410550",
  why: "Monolayer and few-layer graphite were peeled from bulk crystal with adhesive tape, found on oxidised silicon by optical contrast, and wired into field-effect devices. Carrier type could be switched by gate voltage and mobilities reached 10000 square centimetres per volt second at room temperature. The films were stable in air.",
  implies: "It showed a strictly two-dimensional crystal was stable and electronically useful, which launched the whole family of exfoliated 2D materials.",
  cats: ["exotic"], cards: ["graphene"]
},
{
  id: "yeh2004", kind: "founding", material: "High-entropy alloys",
  title: "Nanostructured High-Entropy Alloys with Multiple Principal Elements: Novel Alloy Design Concepts and Outcomes",
  authors: "Yeh et al.", journal: "Advanced Engineering Materials", year: 2004, ref: "6, 299-303",
  doi: "10.1002/adem.200300567",
  oa: null,
  why: "Yeh and coworkers proposed alloys with five or more principal elements in near-equal amounts, arguing that high configurational entropy favours simple solid solutions over brittle intermetallics. They showed examples with high hardness, wear resistance and thermal stability. The paper gave the field its name and its design concept.",
  implies: "It opened an alloy space that is still mostly unexplored, with the honest caveat that entropy alone does not guarantee a single phase.",
  cats: ["metal"], cards: ["hea"]
},
{
  id: "kojima2009", kind: "founding", material: "Halide perovskite solar absorber",
  title: "Organometal Halide Perovskites as Visible-Light Sensitizers for Photovoltaic Cells",
  authors: "Kojima et al.", journal: "Journal of the American Chemical Society", year: 2009, ref: "131, 6050-6051",
  doi: "10.1021/ja809598r",
  oa: null,
  why: "Methylammonium lead iodide and bromide were used as sensitisers on titania in a liquid-electrolyte dye-cell configuration. The iodide cell gave 3.8 percent efficiency and the bromide cell a high open-circuit voltage. The cells degraded in minutes because the electrolyte dissolved the perovskite.",
  implies: "The modest numbers hid a material that passed 25 percent within a decade once solid hole conductors replaced the electrolyte.",
  cats: ["electronic"], cards: ["perovskitepv"]
},
{
  id: "naguib2011", kind: "founding", material: "MXene (Ti3C2)",
  title: "Two-Dimensional Nanocrystals Produced by Exfoliation of Ti3AlC2",
  authors: "Naguib et al.", journal: "Advanced Materials", year: 2011, ref: "23, 4248-4253",
  doi: "10.1002/adma.201102306",
  oa: null,
  why: "Etching the aluminium out of the layered carbide Ti3AlC2 with hydrofluoric acid left stacks of Ti3C2 sheets terminated with hydroxyl and fluorine. The sheets could be exfoliated like graphene and were conductive. The authors named the family MXenes by analogy.",
  implies: "It created a class of conductive 2D carbides and nitrides now numbering dozens, with uses in electromagnetic shielding and electrodes.",
  cats: ["exotic"], cards: ["mxene"]
},
{
  id: "sun2012", kind: "founding", material: "Tough double-network hydrogel",
  title: "Highly stretchable and tough hydrogels",
  authors: "Sun et al.", journal: "Nature", year: 2012, ref: "489, 133-136",
  doi: "10.1038/nature11409",
  oa: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3642868/",
  why: "An ionically crosslinked alginate network was interpenetrated with a covalently crosslinked polyacrylamide network. The ionic bonds unzip and dissipate energy while the covalent network holds the shape. The gel stretched to twenty times its length and reached a fracture energy near 9000 joules per square metre despite being 90 percent water.",
  implies: "It set the recipe, one sacrificial network plus one elastic one, that most tough hydrogels for soft robotics and tissue repair now follow.",
  cats: ["polymer"], cards: ["sap", "pva"]
},
{
  id: "haines2014", kind: "founding", material: "Twisted nylon fishing-line muscles",
  title: "Artificial Muscles from Fishing Line and Sewing Thread",
  authors: "Haines et al.", journal: "Science", year: 2014, ref: "343, 868-872",
  doi: "10.1126/science.1246906",
  oa: "https://figshare.com/articles/journal_contribution/Artificial_muscles_from_fishing_line_and_sewing_thread/27778575",
  why: "Nylon fishing line and sewing thread were twisted past the point of coiling and then heated. The coils contracted by up to 49 percent and lifted loads a hundred times heavier than a human muscle of the same size. The work came from the anisotropic thermal expansion of drawn polymer fibre.",
  implies: "It showed cheap commodity fibre can be an actuator, with the open question being efficiency, which is low because heating is wasteful.",
  cats: ["fibre"], cards: ["monofil", "braidedline", "nylon66"]
},
{
  id: "barber2015", kind: "founding", material: "Limpet tooth (goethite-chitin)",
  title: "Extreme strength observed in limpet teeth",
  authors: "Barber, Lu and Pugno", journal: "Journal of The Royal Society Interface", year: 2015, ref: "12, 20141326",
  doi: "10.1098/rsif.2014.1326",
  oa: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4387522/",
  why: "Micro-tensile tests on limpet teeth gave strengths up to 6.5 GPa, higher than spider silk, from goethite nanofibres bound in a chitin matrix. The strength did not fall with sample size, which the authors attributed to the fibres being below the critical flaw length.",
  implies: "It is a demonstration that nature can reach fibre-composite strengths with iron oxide and sugar, which is a design pointer for ceramic-polymer composites.",
  cats: ["natural"], cards: ["chitin", "toothenamel"]
},
{
  id: "li2016", kind: "founding", material: "Transparent wood",
  title: "Optically Transparent Wood from a Nanoporous Cellulosic Template: Combining Functional and Structural Performance",
  authors: "Li et al.", journal: "Biomacromolecules", year: 2016, ref: "17, 1358-1364",
  doi: "10.1021/acs.biomac.6b00145",
  oa: null,
  why: "Lignin was removed from balsa by a chlorite treatment, leaving a white nanoporous cellulose template, which was then infiltrated with index-matched PMMA. The composite transmitted about 85 percent of light at 1.2 mm thickness while keeping the fibre structure and a tensile strength around 90 MPa.",
  implies: "It suggested a structural, light-diffusing glazing material from a renewable feedstock; scale-up and the polymer fraction remain the limits.",
  cats: ["composite"], cards: ["twood"]
},
{
  id: "appels2019", kind: "recent", material: "Mycelium composite",
  title: "Fabrication factors influencing mechanical, moisture- and water-related properties of mycelium-based composites",
  authors: "Appels et al.", journal: "Materials & Design", year: 2019, ref: "161, 64-71",
  doi: "10.1016/j.matdes.2018.11.027",
  oa: "https://dspace.library.uu.nl/handle/1874/377889",
  why: "Two fungi, Trametes multicolor and Pleurotus ostreatus, were grown on rapeseed straw, beech sawdust and cotton, and the composites were tested for strength and water uptake. Heat pressing raised flexural strength about threefold and turned a foam into a cork- or wood-like board. Substrate and species mattered more than growth time.",
  implies: "It reads as the process-engineering base for mycelium board and packaging; the data show where the product sits, between foam and particleboard.",
  cats: ["composite"], cards: ["mycelium"]
},
{
  id: "christensen2019", kind: "recent", material: "Polydiketoenamine recyclable plastic",
  title: "Closed-loop recycling of plastics enabled by dynamic covalent diketoenamine bonds",
  authors: "Christensen et al.", journal: "Nature Chemistry", year: 2019, ref: "11, 442-448",
  doi: "10.1038/s41557-019-0249-2",
  oa: "https://www.osti.gov/servlets/purl/1596671",
  why: "Thermosets built on diketoenamine bonds depolymerised back to their monomers in strong acid at room temperature. The monomers were recovered from mixtures with fillers, dyes and other plastics and repolymerised to the same material. The networks are stiff and thermally stable in use.",
  implies: "It demonstrates closed-loop chemical recycling of a crosslinked plastic, which conventional thermosets cannot do; the economics of the acid step are unproven.",
  cats: ["polymer"], cards: ["epoxy", "pet"]
},
{
  id: "drozdov2019", kind: "recent", material: "Lanthanum hydride under pressure",
  title: "Superconductivity at 250 K in lanthanum hydride under high pressures",
  authors: "Drozdov et al.", journal: "Nature", year: 2019, ref: "569, 528-531",
  doi: "10.1038/s41586-019-1201-8",
  oa: "https://arxiv.org/abs/1812.01561",
  why: "Lanthanum hydride, LaH10, compressed to about 170 GPa in a diamond anvil cell showed a resistance drop at 250 K, with the transition shifting under magnetic field and with hydrogen isotope. The samples were microns across and the pressure is near that of the Earth's core.",
  implies: "It supports phonon-mediated superconductivity near room temperature in hydrides; note the separate 2020 and 2023 room-temperature claims by Dias and coworkers were retracted.",
  cats: ["exotic"], cards: ["ybco", "nbti", "metalhydride"]
},
{
  id: "hou2019", kind: "recent", material: "Elastocaloric NiTi by additive manufacturing",
  title: "Fatigue-resistant high-performance elastocaloric materials made by additive manufacturing",
  authors: "Hou et al.", journal: "Science", year: 2019, ref: "366, 1116-1121",
  doi: "10.1126/science.aax7616",
  oa: "https://arxiv.org/abs/1908.07900",
  why: "Laser powder-bed fusion of NiTi produced a nanocomposite of intermetallic precipitates in the shape-memory matrix. The material survived a million elastocaloric cycles with an adiabatic temperature change above 4 K and low hysteresis. Conventional NiTi fatigues in a few thousand cycles.",
  implies: "It makes solid-state elastocaloric cooling a plausible refrigerant technology, though system efficiency depends on the mechanical drive.",
  cats: ["metal"], cards: ["nitinol", "lattice"]
},
{
  id: "wat2019", kind: "recent", material: "Nacre-like alumina with metallic glass mortar",
  title: "Bioinspired nacre-like alumina with a bulk-metallic glass-forming alloy as a compliant phase",
  authors: "Wat et al.", journal: "Nature Communications", year: 2019, ref: "10, 961",
  doi: "10.1038/s41467-019-08753-6",
  oa: "https://www.nature.com/articles/s41467-019-08753-6",
  why: "Freeze-cast alumina scaffolds were pressed into brick-and-mortar layers and infiltrated with a zirconium-based glass-forming alloy as the compliant phase. The composite reached a fracture toughness above 25 MPa root metre with rising crack resistance, several times that of monolithic alumina. The glassy metal deformed plastically between bricks.",
  implies: "It shows the nacre design can be realised with a metal mortar at engineering scale, and points to hard, damage-tolerant ceramics for bearings and armour.",
  cats: ["ceramic"], cards: ["nacre", "alumina", "bmg"]
},
{
  id: "xu2019", kind: "recent", material: "Ceramic aerogel with double-negative index",
  title: "Double-negative-index ceramic aerogels for thermal superinsulation",
  authors: "Xu et al.", journal: "Science", year: 2019, ref: "363, 723-727",
  doi: "10.1126/science.aav7304",
  oa: null,
  why: "A hexagonal boron nitride aerogel was built with a hyperbolic cell geometry that gave it a negative Poisson's ratio and a negative thermal expansion. It survived sharp heating and cooling cycles between -198 and 900 degrees C and had a thermal conductivity below that of air. Density was about 0.1 mg per cubic centimetre.",
  implies: "It is a ceramic super-insulator that does not crack on thermal shock, which is the usual failure mode of ceramic aerogels.",
  cats: ["composite"], cards: ["aerogel", "hbn", "auxetic"]
},
{
  id: "zhang2019", kind: "recent", material: "Pyrolytic carbon nanolattice",
  title: "Lightweight, flaw-tolerant, and ultrastrong nanoarchitected carbon",
  authors: "Zhang et al.", journal: "Proceedings of the National Academy of Sciences", year: 2019, ref: "116, 6665-6672",
  doi: "10.1073/pnas.1817309116",
  oa: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6452738/",
  why: "Octet lattices were written by two-photon lithography and pyrolysed to shrink them into carbon struts a few hundred nanometres across. The lattices reached strengths close to the theoretical limit for carbon and deformed without catastrophic failure, at densities of a few hundred kg per cubic metre.",
  implies: "It is the strongest lightweight lattice reported, and a reminder that the pieces are microscopic and the process slow.",
  cats: ["additive"], cards: ["lattice", "twophoton", "glassycarbon"]
},
{
  id: "chen2020", kind: "recent", material: "Isotope-enriched cubic boron nitride",
  title: "Ultrahigh thermal conductivity in isotope-enriched cubic boron nitride",
  authors: "Chen et al.", journal: "Science", year: 2020, ref: "367, 555-559",
  doi: "10.1126/science.aaz6149",
  oa: "https://hdl.handle.net/1721.1/127819",
  why: "Cubic boron nitride crystals grown with boron enriched to a single isotope had a thermal conductivity of 1600 watts per metre kelvin, about 75 percent higher than natural cBN. The gain comes from removing isotope scattering of phonons. The value is second only to diamond.",
  implies: "It supports isotope engineering as a route to heat spreaders, and shows that cBN, unlike diamond, can also be doped both n- and p-type.",
  cats: ["ceramic"], cards: ["cbn", "hbn"]
},
{
  id: "guan2020", kind: "recent", material: "Bulk cellulose nanofibre structural material",
  title: "Lightweight, tough, and sustainable cellulose nanofiber-derived bulk structural materials with low thermal expansion coefficient",
  authors: "Guan et al.", journal: "Science Advances", year: 2020, ref: "6, eaaz1114",
  doi: "10.1126/sciadv.aaz1114",
  oa: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7195169/",
  why: "Cellulose nanofibre from wood was pressed into bulk sheets with a layered, densely hydrogen-bonded structure. The material had a specific strength and toughness above most metals and ceramics, a coefficient of thermal expansion near that of ceramics, and it is entirely from biomass.",
  implies: "It is a candidate structural plastic replacement from wood pulp; the limit is water sensitivity and the energy of making nanofibre.",
  cats: ["natural"], cards: ["nanocellulose", "lignostone"]
},
{
  id: "wang2020sh", kind: "recent", material: "Robust superhydrophobic surface",
  title: "Design of robust superhydrophobic surfaces",
  authors: "Wang et al.", journal: "Nature", year: 2020, ref: "582, 55-59",
  doi: "10.1038/s41586-020-2331-8",
  oa: "https://research.aalto.fi/en/publications/design-of-robust-superhydrophobic-surfaces/",
  why: "A fragile superhydrophobic nanostructure was placed inside the pockets of a microscale frame of inverted pyramids. The frame takes the mechanical load, so the surface survived 1000 abrasion cycles with sandpaper and a steel blade while keeping water-repellent properties. The frame geometry was chosen from a simple mechanical model.",
  implies: "It separates the wetting function from the load-bearing function, which is a general strategy for making surface coatings that survive handling.",
  cats: ["exotic"], cards: ["dwrfinish", "slips"]
},
{
  id: "yang2020", kind: "recent", material: "Cuttlebone",
  title: "Mechanical design of the highly porous cuttlebone: A bioceramic hard buoyancy tank for cuttlefish",
  authors: "Yang et al.", journal: "Proceedings of the National Academy of Sciences", year: 2020, ref: "117, 23450-23459",
  doi: "10.1073/pnas.2009531117",
  oa: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7519314/",
  why: "The cuttlebone of Sepia officinalis was characterised as a stack of chambers with corrugated aragonite walls, 93 percent porous, that resists hydrostatic pressure to about 100 m depth. Compression tests showed the chambers fail one layer at a time, which lets the structure absorb energy while keeping the rest intact.",
  implies: "The wall corrugation and graded design are a template for lightweight ceramic cellular materials with controlled, stepwise failure.",
  cats: ["natural"], cards: ["cuttlebone"]
},
{
  id: "li2021", kind: "recent", material: "Ultra-white barium sulfate paint",
  title: "Ultrawhite BaSO4 Paints and Films for Remarkable Daytime Subambient Radiative Cooling",
  authors: "Li et al.", journal: "ACS Applied Materials & Interfaces", year: 2021, ref: "13, 21733-21739",
  doi: "10.1021/acsami.1c02368",
  oa: "https://docs.lib.purdue.edu/coolingpubs/376/",
  why: "A paint filled 60 percent by volume with barium sulfate particles of mixed sizes reflected 98.1 percent of sunlight and emitted strongly in the atmospheric window. Outdoors it stayed about 4.5 degrees C below ambient at noon. The pigment is cheap and has no absorption in the visible.",
  implies: "It makes passive daytime cooling a commodity-coating problem; soiling and weathering set the useful life.",
  cats: ["ceramic"], cards: ["enamel"]
},
{
  id: "shang2021", kind: "recent", material: "Ultrahard amorphous carbon (AM-III)",
  title: "Ultrahard bulk amorphous carbon from collapsed fullerene",
  authors: "Shang et al.", journal: "Nature", year: 2021, ref: "599, 599-604",
  doi: "10.1038/s41586-021-03882-9",
  oa: null,
  why: "C60 was compressed at 27 GPa and 1000 degrees C to collapse the cages into a bulk amorphous carbon with mixed sp2 and sp3 bonding. The material had a Vickers hardness of 113 GPa, enough to scratch diamond, and a semiconducting band gap near 1.5 eV.",
  implies: "It is a glass harder than most crystals, which suggests amorphous carbon as an optical-grade superhard coating if the pressure route can be reduced.",
  cats: ["ceramic"], cards: ["glassycarbon", "cvddiamond"]
},
{
  id: "zeng2021", kind: "recent", material: "Radiative-cooling metafabric",
  title: "Hierarchical-morphology metafabric for scalable passive daytime radiative cooling",
  authors: "Zeng et al.", journal: "Science", year: 2021, ref: "373, 692-696",
  doi: "10.1126/science.abi5484",
  oa: null,
  why: "A woven fabric of polylactic acid fibres loaded with titania particles and laminated with PTFE reflected sunlight and emitted in the mid-infrared. Under direct sun a wearer was about 4.8 degrees C cooler than in cotton. The fabric was made on standard textile lines.",
  implies: "It shows radiative cooling can be woven into clothing with existing machinery; durability of the fibre and the laminate in wash cycles is still being tested.",
  cats: ["fabric"], cards: ["polyesterfab", "ptfethread"]
},
{
  id: "jun2022", kind: "recent", material: "Corner-sharing lithium superionic conductors",
  title: "Lithium superionic conductors with corner-sharing frameworks",
  authors: "Jun et al.", journal: "Nature Materials", year: 2022, ref: "21, 924-931",
  doi: "10.1038/s41563-022-01222-4",
  oa: "https://escholarship.org/content/qt7dt6x2vw/qt7dt6x2vw.pdf",
  why: "The authors identified a structural rule, corner-sharing anion polyhedra, that correlates with fast lithium conduction, and used it to screen candidates. They synthesised a new oxide family, LiTaSiO5-type, with conductivity above 1 mS per cm. The rule explains why known conductors such as LLZO work.",
  implies: "It gives a design principle for solid electrolytes rather than trial and error; the new conductors still need to prove interface stability with lithium.",
  cats: ["electronic"], cards: ["lfp"]
},
{
  id: "zeng2022", kind: "recent", material: "2D polyaramid sheet (2DPA-1)",
  title: "Irreversible synthesis of an ultrastrong two-dimensional polymeric material",
  authors: "Zeng et al.", journal: "Nature", year: 2022, ref: "602, 91-95",
  doi: "10.1038/s41586-021-04296-3",
  oa: null,
  why: "A trifunctional amine and a triacid chloride polymerised in solution into sheets a single molecule thick, with hydrogen bonds locking the layers flat. Films of 2DPA-1 had a yield strength about twice that of steel at one sixth the density and were impermeable to gas. Spin-coating gave continuous films.",
  implies: "It shows that 2D polymers can be made in bulk from solution, which if it scales would give a barrier and structural film without a crystal substrate.",
  cats: ["polymer"], cards: ["aramid", "kapton"]
},
{
  id: "chanut2023", kind: "recent", material: "Carbon-cement supercapacitor",
  title: "Carbon–cement supercapacitors as a scalable bulk energy storage solution",
  authors: "Chanut et al.", journal: "Proceedings of the National Academy of Sciences", year: 2023, ref: "120, e2304318120",
  doi: "10.1073/pnas.2304318120",
  oa: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10410735/",
  why: "Carbon black mixed into cement paste formed a percolating conductive network with high internal surface area. Two such electrodes with a potassium chloride electrolyte made a supercapacitor whose energy density scaled with the volume of material. The authors propose foundations and road beds that store energy.",
  implies: "It suggests cheap bulk energy storage from two commodity materials; power density and long-term durability are the open questions.",
  cats: ["composite"], cards: ["rcconcrete", "uhpc"]
},
{
  id: "puphal2023", kind: "recent", material: "LK-99 copper-doped lead apatite",
  title: "Single crystal synthesis, structure, and magnetism of Pb10-xCux(PO4)6O",
  authors: "Puphal et al.", journal: "APL Materials", year: 2023, ref: "11, 101128",
  doi: "10.1063/5.0172755",
  oa: "https://arxiv.org/abs/2308.06256",
  why: "Single crystals of the lead apatite claimed as a room-temperature superconductor, LK-99, were grown without the copper sulfide impurity. They were transparent insulators with no diamagnetism and no superconductivity. The behaviour reported in the original samples matched a copper sulfide transition.",
  implies: "It is the refutation of the LK-99 claim, and a case study in how an impurity phase can mimic a superconducting signature.",
  cats: ["exotic"], cards: ["ybco"]
},
{
  id: "seymour2023", kind: "recent", material: "Roman self-healing lime concrete",
  title: "Hot mixing: Mechanistic insights into the durability of ancient Roman concrete",
  authors: "Seymour et al.", journal: "Science Advances", year: 2023, ref: "9, eadd1602",
  doi: "10.1126/sciadv.add1602",
  oa: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9821858/",
  why: "Millimetre lime clasts in Roman concrete were shown by spectroscopy to come from hot-mixing quicklime rather than slaked lime. The clasts act as a calcium reservoir: a crack reaching one dissolves it, and the calcium recrystallises as calcite in the crack. Modern mortars made the same way closed cracks under flowing water within weeks.",
  implies: "It suggests a cheap passive healing mechanism for modern concrete based on a two-thousand-year-old process rather than bacteria or capsules.",
  cats: ["composite"], cards: ["selfhealconcrete", "rcconcrete"]
},
{
  id: "gong2024", kind: "recent", material: "Diamond grown at 1 atm in liquid metal",
  title: "Growth of diamond in liquid metal at 1 atm pressure",
  authors: "Gong et al.", journal: "Nature", year: 2024, ref: "629, 348-354",
  doi: "10.1038/s41586-024-07339-7",
  oa: null,
  why: "Diamond crystals nucleated and grew at atmospheric pressure in a liquid gallium-iron-nickel-silicon alloy exposed to methane and hydrogen at about 1025 degrees C. Growth needed no seed and no high pressure. Silicon in the melt seems to stabilise the carbon clusters.",
  implies: "If it scales, it is a third diamond synthesis route beside HPHT and CVD; the films so far are small and the mechanism is not fully settled.",
  cats: ["ceramic"], cards: ["cvddiamond", "galinstan"]
},
{
  id: "posnjak2024", kind: "recent", material: "DNA-origami diamond crystal",
  title: "Diamond-lattice photonic crystals assembled from DNA origami",
  authors: "Posnjak et al.", journal: "Science", year: 2024, ref: "384, 781-785",
  doi: "10.1126/science.adl2733",
  oa: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7616107/",
  why: "DNA origami tetrapods self-assembled into a cubic diamond lattice with a 170 nm unit cell, which is the geometry predicted to give a complete photonic band gap. The lattice was stabilised by silica coating and then made reflective with a titania layer. Optical measurements matched the photonic prediction.",
  implies: "It is a plausible route to visible-range photonic crystals by self-assembly; the lattices are still tiny and the band gap is not yet shown in use.",
  cats: ["exotic"], cards: ["metamaterial"]
},
{
  id: "wang2024", kind: "recent", material: "Glassy gels",
  title: "Glassy gels toughened by solvent",
  authors: "Wang et al.", journal: "Nature", year: 2024, ref: "631, 313-318",
  doi: "10.1038/s41586-024-07564-0",
  oa: null,
  why: "Ionic liquids were polymerised into glassy polymers at over 50 weight percent solvent. The resulting gels were as stiff as a glass but stretched several hundred percent, with high adhesion and shape memory. The solvent swells the network without plasticising it to a rubber.",
  implies: "The class suggests polymer glasses that are tough and extensible at once; the properties are so far shown only with ionic liquids as solvent.",
  cats: ["polymer"], cards: ["pdms", "pmma"]
},
{
  id: "zhao2024", kind: "recent", material: "Semiconducting epitaxial graphene on SiC",
  title: "Ultrahigh-mobility semiconducting epitaxial graphene on silicon carbide",
  authors: "Zhao et al.", journal: "Nature", year: 2024, ref: "625, 60-65",
  doi: "10.1038/s41586-023-06811-0",
  oa: null,
  why: "A buffer layer of graphene grown on the silicon face of silicon carbide, with the growth confined between wafers, was shown to be a semiconductor with a 0.6 eV gap and room-temperature mobilities around 5000 square centimetres per volt second. The gap comes from the bonding to the substrate.",
  implies: "It is the first graphene form with a usable band gap, which could make graphene electronics possible; wafer-scale uniformity is not yet shown.",
  cats: ["electronic"], cards: ["graphene", "sic", "silicon"]
},
{
  id: "zhou2024", kind: "recent", material: "COF-999 covalent organic framework",
  title: "Carbon dioxide capture from open air using covalent organic frameworks",
  authors: "Zhou et al.", journal: "Nature", year: 2024, ref: "635, 96-101",
  doi: "10.1038/s41586-024-08080-x",
  oa: null,
  why: "A covalent organic framework with polyamine-lined pores captured carbon dioxide from ambient air at 400 ppm, including humid air, and released it at 60 degrees C. It kept capacity over 100 cycles. The covalent backbone resists the hydrolysis that limits many amine MOFs.",
  implies: "It is a strong candidate sorbent for direct air capture; cost and lifetime at tonne scale are not yet shown.",
  cats: ["exotic"], cards: ["mof", "zeolite"]
}
];
