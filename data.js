// Material catalogue. `img` matches a key in credits.js (a real photograph);
// `swatch` is a drawn illustration, used only where no freely licensed photo exists.
window.MATERIALS = [

/* ---------- POLYMERS & ELASTOMERS ---------- */
{
  id: "vulkollan", cat: "polymer", name: "Vulkollan",
  sub: "NDI-based cast polyurethane", img: "vulkollan", extra: ["vulkollan2"],
  hook: "Bayer's cast polyurethane on naphthalene diisocyanate, the one forklift wheels are made of: it carries the weight of a loaded truck on a hand-sized tread and does not cook itself rolling.",
  more: "Otto Bayer's polyurethane chemistry of 1937 found its first elastomer in Vulkollan, cast at Leverkusen from a polyester polyol, 1,5-naphthalene diisocyanate and a glycol. The NDI gives stiff, crystalline hard segments, so the rubber springs back with little heat left behind: under a loaded truck wheel that is the difference between a tread that lasts years and one that melts from the inside in an afternoon. The price is the process. NDI is dear and the prepolymer sets in minutes, so it is cast hot by licensees only, then cured for a day; the polyester backbone hydrolyses in warm damp air, and above 80 °C the advantage fades. For a wheel in a dry warehouse there is still nothing better.",
  stats: [["Hardness", "~65–95 Shore A"], ["Rebound", "up to ~65%"], ["Trick", "low heat build-up"]],
  uses: "Forklift and AGV wheels, heavy press pads, die cushions.",
  link: "https://en.wikipedia.org/wiki/Polyurethane",
  src: ["Covestro", "https://solutions.covestro.com/en/brands/vulkollan"]
},
{
  id: "sorbothane", cat: "polymer", name: "Sorbothane",
  sub: "viscoelastic polyether polyurethane",
  img: "sorbothane",
  hook: "A urethane that behaves like meat: solid to the touch, liquid on the timescale of a blow. Rubber hands the energy back; Sorbothane keeps it as heat, which is why turntables and microscopes sit on it.",
  more: "Maurice Hiles, a British inventor, was trying to make a synthetic flesh when he arrived at a polyurethane whose two networks grew through each other, the first commercial interpenetrating network. The NRDC spent nearly ten thousand pounds getting it patented in 1982, and it has been made in Kent, Ohio since. Its relaxation time is about two seconds, which is the trick: a shock arrives faster than the chains can rearrange, so the work goes into shuffling them and comes out as warmth, with almost no bounce. Isolation feet, the camera mounts on the Shuttle launch pads, the carriage that moved the Liberty Bell. It only works loaded into its range, sags under a standing load, dislikes oil, and costs like a speciality, which it is.",
  stats: [["Durometer", "30–70 Shore 00"], ["Shock absorbed", "~90%+"], ["Rebound", "deliberately terrible"]],
  uses: "Microscope and turntable feet, machine isolation, insoles, speaker mounts.",
  src: ["Sorbothane, Inc.", "https://www.sorbothane.com/"]
},
{
  id: "d3o", cat: "polymer", name: "D3O",
  sub: "shear-thickening polymer", img: "d3o", extra: ["d3o2", "d3o3"],
  hook: "Orange putty that folds like dough and goes hard for the few milliseconds of a hit, then relaxes: the shear-thickening padding under ski racers, motorcyclists and the US Army's helmet liners.",
  more: "Richard Palmer and Philip Green, two materials scientists in Hatfield, spent 1999 playing with a dilatant fluid of the custard kind and filed a patent for a way to hold it inside a soft polyurethane. The molecules slide past each other when pushed slowly and lock when pushed fast, so a pad can be thin and floppy at rest and stiff across its whole area at the instant of impact. The US and Canadian ski teams wore it at the 2006 Winter Olympics; CE motorcycle armour followed in 2009, the American hand-impact standard it helped write in 2019, and the Army's helmet pads in 2020. It is licensed, not sold by the kilo, it stiffens in the cold on its own, and like every foam it ages: the orange does not tell you when.",
  stats: [["Behaviour", "rate-dependent"], ["Lock-up", "milliseconds"], ["At rest", "stays soft"]],
  uses: "Motorcycle and ski armour, military knee pads, phone cases.",
  link: "https://en.wikipedia.org/wiki/D3O",
  src: ["D3O", "https://www.d3o.com/technology/"]
},
{
  id: "uhmwpe", cat: "polymer", name: "UHMWPE / Dyneema",
  sub: "ultra-high-molecular-weight polyethylene", img: "uhmwpe", extra: ["uhmwpe2", "uhmwpe3"],
  hook: "Polyethylene with chains a hundred thousand units long, gel-spun so they lie straight: a rope eight times stronger than steel for its weight that floats, will not hold a knot, and stretches under a steady pull.",
  more: "Ruhrchemie made the first UHMWPE in the 1950s with Ziegler's catalysts, and John Charnley put it into a hip in 1962, where it has carried most artificial joints since. The fibre came later: at DSM in Heerlen the chains were dissolved, spun as a gel and drawn until they lay parallel, and Dyneema went on sale in 1990, with Honeywell's Spectra alongside it in America. At 0.97 g/cm³ it floats, and a strand takes about 2.4 GPa before it yields. But the chains hold each other by nothing stronger than van der Waals forces, so the rope creeps under constant load, softens by 90 °C, and is so slippery that knots slide: it is spliced instead. In the hip the wear debris loosened bones, which is why implants since 1998 are irradiated to cross-link the chains.",
  stats: [["Fibre tensile", "~2.4–3.6 GPa"], ["Density", "0.97 g/cm³"], ["Melting", "~135 °C"]],
  uses: "Winch and mooring line, soft body armour, hip liners, cut-resistant gloves.",
  link: "https://en.wikipedia.org/wiki/Ultra-high-molecular-weight_polyethylene",
  src: ["Avient, Dyneema", "https://www.dyneema.com/"]
},
{
  id: "peek", cat: "polymer", name: "PEEK",
  sub: "polyether ether ketone", img: "peek", extra: ["peek2"],
  hook: "The thermoplastic sent where metal was expected: 250 °C, steam, solvents and radiation, and still injection-moulded. Invented at ICI in 1978, sold at a price that keeps it for the parts that must not fail.",
  more: "ICI made the first polyether ether ketone in November 1978 by joining difluorobenzophenone to hydroquinone at 300 °C in molten diphenyl sulfone, and the division that sold it became Victrex. The chain is all aromatic rings and ketone links, so it melts at 343 °C, keeps its stiffness past its 143 °C glass transition, dissolves in little short of concentrated sulphuric acid and shrugs off gamma rays. That is why it holds pump wear rings in hot oil, wafer carriers in a fab, brackets in an airliner and, radiolucent and close to bone in stiffness at 3.6 GPa, cages between vertebrae. The cost is the whole story: it is moulded at near 400 °C into heated tools, its crystallinity depends on how it is cooled, and a kilogram costs what a sack of nylon does.",
  stats: [["Continuous use", "~250 °C"], ["Melt point", "343 °C"], ["Tensile", "~100 MPa"]],
  uses: "Pump wear rings, spinal cages, aerospace brackets, semiconductor handling.",
  link: "https://en.wikipedia.org/wiki/Polyether_ether_ketone",
  src: ["Boedeker: PEEK grades", "https://www.boedeker.com/Family/Peek"]
},
{
  id: "vespel", cat: "polymer", name: "Vespel",
  sub: "polyimide, SP-1", img: "vespel",
  hook: "DuPont's polyimide that has no melting point: pressed and sintered from powder like a metal, machined like one, and run dry in a vacuum from liquid helium to 300 °C. Sold by the inch of rod.",
  more: "DuPont brought Vespel out in 1965 from the same aromatic polyimide chemistry as Kapton film, but as a solid: the chains never flow, so the parts are made by pressing the powder in a die and sintering it, the way a tungsten carbide insert is made, then turned and milled. What comes out keeps its shape at 288 °C for years and at 480 °C for an afternoon, gives off almost nothing in a vacuum, and slides on itself without oil, which is why it sits in jet-engine bushings, cryogenic valve seats and the fixtures that carry hot silicon wafers. The bill is the chemistry again: it drinks water and swells a fraction of a per cent, strong alkali and steam hydrolyse the imide rings, and a blank the size of a thumb costs what a small engine part in steel would.",
  stats: [["Continuous", "300 °C"], ["Excursion", "~480 °C"], ["Melting point", "none — it chars"]],
  uses: "Jet engine seals, vacuum bushings, cryogenic bearings, semiconductor fixtures.",
  link: "https://en.wikipedia.org/wiki/Vespel",
  src: ["DuPont Vespel", "https://www.dupont.com/vespel.html"]
},
{
  id: "torlon", cat: "polymer", name: "Torlon",
  sub: "polyamide-imide (PAI)",
  img: "torlon",
  hook: "Polyamide-imide: about the highest compressive strength of any unfilled thermoplastic, and the only one that goes on curing after it is moulded, for up to a fortnight in an oven, getting tougher by the day.",
  more: "Amoco chemists made polyamide-imide in the early 1970s by putting an amide link beside every imide ring of a polyimide, which left the chain mobile enough to injection mould. Torlon went on sale in 1976 and belongs to Solvay now. The trick is what happens afterwards: the moulded part is not finished. It climbs in an oven over days to 260 °C while the last amide groups close into imide rings and water leaves, and only then does it reach its 275 °C glass transition and 220 MPa in compression, which is why it sits in thrust washers, compressor vanes, valve seats and downhole tools where PEEK softens. The cure takes up to seventeen days, a thick section can crack in it, the finished part still takes up moisture and grows, and it is priced accordingly.",
  stats: [["Glass transition", "~275 °C"], ["Compressive", "~220+ MPa"], ["Post-cure", "measured in days"]],
  uses: "Valve seats, thrust washers, compressor vanes, downhole tooling.",
  link: "https://en.wikipedia.org/wiki/Polyamide-imide",
  src: ["Boedeker: Torlon", "https://www.boedeker.com/Family/Torlon"]
},
{
  id: "ffkm", cat: "polymer", name: "FFKM",
  sub: "perfluoroelastomer — Kalrez, Chemraz", img: "ffkm",
  hook: "A rubber with PTFE's fully fluorinated backbone: it shrugs off nearly everything on the shelf and stays elastic above 300 °C. The O-rings are priced each, like small jewellery, and are worth it in a plasma chamber.",
  more: "DuPont made the first perfluoroelastomer in 1975 and called it Kalrez: tetrafluoroethylene copolymerised with a perfluorinated vinyl ether, so the chain is PTFE with side groups that stop it crystallising, plus a few cure sites to tie it into a rubber. There is no hydrogen on the backbone for an acid, a solvent or a plasma to pull off, which is why it seals etch chambers, reactors and fuel systems at up to 327 °C where fluorocarbon rubber hardens and dies. The costs are real. It is weak as rubbers go, takes a set when held hot, stiffens at modest cold, swells in some fluorinated solvents, and the gum is so dear that one O-ring costs what a box of Viton ones does. It is bought by the ring, for the seal that must not be why the line stopped.",
  stats: [["Service", "to ~327 °C"], ["Media resisted", "~1800+"], ["Cost", "$$$ per seal"]],
  uses: "Semiconductor plasma chambers, chemical reactors, aerospace fuel systems.",
  link: "https://en.wikipedia.org/wiki/Perfluoroelastomer",
  src: ["Kalrez", "https://www.qnityelectronics.com/kalrez.html"]
},
{
  id: "zylon", cat: "polymer", name: "Zylon (PBO)",
  sub: "poly(p-phenylene benzobisoxazole)",
  img: "zylon",
  hook: "The strongest fibre you can buy, stiffer than aramid, and the cautionary tale of the trade: it quietly loses strength to warmth and damp, which turned a generation of body armour into a recall.",
  more: "PBO came out of a US Air Force programme at SRI International in the 1980s, a rigid-rod polymer of benzoxazole rings that Toyobo learned to spin and sold as Zylon from 1998: 5.8 GPa tensile, 270 GPa modulus, no melting point, chars at 650 °C. Vest makers took it up at once, thin and light. Then in 2003 a Pennsylvania officer was shot through a Zylon vest a year old, and testing showed what the datasheet had not: damp and warmth hydrolyse the oxazole ring, and a vest on a warm body lost a third of its strength in a few years. It was pulled from vests in 2005 and the leading maker went under. It still does jobs where it is inspected and kept dry: the anti-intrusion panels of a Formula One cockpit, wheel tethers, racing sails.",
  stats: [["Tensile", "~5.8 GPa"], ["Modulus", "~270 GPa"], ["Weakness", "hydrolysis + UV"]],
  uses: "F1 cockpit anti-intrusion panels, tethers, formerly ballistic vests.",
  link: "https://en.wikipedia.org/wiki/Zylon",
  src: ["Toyobo", "https://en.toyobo-mc.jp/products/zylon/"]
},
{
  id: "lignostone", cat: "polymer", name: "Densified wood laminate",
  sub: "Lignostone, Permali",
  img: "lignostone", extra: ["lignostone2"],
  hook: "Beech veneer soaked in phenolic resin and pressed until it is denser than water. It carried Spitfire propellers in 1944 and it still beats the plastics on creep at liquid-gas temperature, so it never went away.",
  more: "Röchling began pressing resin-soaked beech veneers at Haren in the 1930s and called it Lignostone; Permali did the same in Gloucester from 1937, and the Jablo blades on wartime Rotol propellers were the same idea in birch, light enough to swing five on a Griffon Spitfire. The press takes the wood from 0.7 to 1.3 g/cm³, locks the cell walls in phenolic and leaves a board that machines and insulates like a hardwood and does not flow under a steady load the way a polymer does. That last point is why it is still bought: the blocks that hold a liquefied-gas tank off a ship's hull at minus 163 °C, the spacers and clamping beams in an oil-filled transformer. It is anisotropic, it takes up water at a cut edge, and it comes only in the sizes a press can make.",
  stats: [["Density", "~1.3 g/cm³"], ["Niche", "cryogenic + HV"], ["Age", "a century old"]],
  uses: "LNG tank supports, transformer spacers and clamping, cryostat structures.",
  src: ["Röchling", "https://www.roechling.com/industrial/materials/composites"]
},
{
  id: "ptfe", cat: "polymer", name: "PTFE",
  sub: "polytetrafluoroethylene, Teflon", img: "ptfe", extra: ["ptfe2"],
  hook: "Plunkett's accident of 1938: a cylinder of tetrafluoroethylene that had quietly turned to white powder. Nothing wets it and almost nothing sticks to it, which is also why it cannot be glued, painted or melt-moulded.",
  more: "Roy Plunkett sawed open a gas cylinder that had lost its pressure and found a waxy white solid: the monomer had polymerised on its own. The chain is carbon sheathed entirely in fluorine, bonds that nothing short of molten alkali metal will attack, so it went first into the valves and gaskets that handled uranium hexafluoride at Oak Ridge, then in 1954 onto Marc Grégoire's frying pan. It melts at 327 °C but is so viscous there that it never flows, so parts are pressed from powder and sintered like a ceramic, then machined. Loaded, it creeps, which is why a PTFE gasket needs re-tightening; it is soft, it wears, and a filler of glass or bronze is usually in it. The friction, 0.04 against steel, is still the lowest of any solid you can buy.",
  stats: [["Friction coefficient", "~0.04"], ["Service", "−200 to 260 °C"], ["Flaw", "cold flow under load"]],
  uses: "Seals and gaskets, thread tape, chemical lining, low-friction pads, cookware.",
  link: "https://en.wikipedia.org/wiki/Polytetrafluoroethylene",
  src: ["Boedeker: PTFE grades", "https://www.boedeker.com/Family/Ptfe"]
},
{
  id: "eptfe", cat: "polymer", name: "Expanded PTFE",
  sub: "ePTFE, Gore-Tex", img: "eptfe",
  hook: "In 1969 Bob Gore lost patience with a rod of PTFE and yanked it instead of stretching it slowly. It drew out tenfold into a web of nodes and fibrils with holes that let water vapour out and keep raindrops out.",
  more: "The slow stretch broke every time; the sudden one did not, and the result was a membrane of about 1.4 billion pores per square centimetre, too small for a raindrop and far too large for a water molecule. Gore-Tex went on sale in 1976 as a rain jacket that breathed, and the same film became vascular grafts, since the body tolerates PTFE and tissue grows into the pores, then sutures, dental floss and the coated guitar string. The weakness is the surface. Body oils and detergent wet the fibrils and the rain comes through, so the membrane is laminated to a polyurethane skin and the outer fabric needs a water-repellent finish, for decades a fluorinated one. Gore began replacing the PTFE membrane itself with expanded polyethylene in 2022.",
  stats: [["Pores", "~10⁹ per cm²"], ["Blocks", "liquid water"], ["Passes", "water vapour"]],
  uses: "Waterproof-breathable laminates, vascular grafts, vent plugs, filter media, sealing tape.",
  link: "https://en.wikipedia.org/wiki/Gore-Tex",
  src: ["Gore", "https://www.gore.com/categories/fabrics"]
},
{
  id: "aramid", cat: "polymer", name: "Aramid (Kevlar)",
  sub: "para-aramid fibre", img: "aramid", extra: ["aramid2"],
  hook: "Stephanie Kwolek's cloudy solution of 1965, which the spinner refused to run: rod-like chains that line up before they are spun. Five times steel by weight in tension, and it kinks like a straw in compression.",
  more: "Poly(paraphenylene terephthalamide) dissolves only in concentrated sulphuric acid, and there it forms a liquid crystal, so the chains come out of the spinneret already parallel and hydrogen-bond into sheets. DuPont sold it as Kevlar from 1971: 3.6 GPa tensile, no melting point, decomposes above 400 °C. It replaced steel in radial tyre belts, went into the vests that have stopped bullets since the mid-1970s, holds up the Breitling Orbiter gondola, and layered with ceramic cloth it shields spacecraft from debris at seven kilometres a second. The same chain buckles into kink bands at half a per cent of compression, so it is never a strut; sunlight yellows and weakens it, it drinks water, and it blunts every blade used to cut it.",
  stats: [["Tensile", "~3.6 GPa"], ["vs. steel by weight", "~5×"], ["In compression", "weak"]],
  uses: "Ballistic vests, cut-resistant gloves, ropes and cables, tyre belts, friction materials.",
  link: "https://en.wikipedia.org/wiki/Aramid",
  src: ["Macrogalleria: aramids", "https://pslc.ws/macrog/aramid.htm"]
},
{
  id: "fkm", cat: "polymer", name: "FKM (Viton)",
  sub: "fluoroelastomer", img: "fkm", extra: ["fkm2", "fkm3"],
  hook: "DuPont's fluorocarbon rubber of 1957, the default O-ring wherever there is fuel, hot oil or vacuum. Its one failing is cold: a Viton ring stiffened at a couple of degrees below freezing is why Challenger was lost.",
  more: "Vinylidene fluoride copolymerised with hexafluoropropylene gives a chain about two-thirds fluorine by weight, enough that petrol, engine oil and most acids leave it alone to 200 °C and briefly 300 °C, at a fraction of FFKM's price. So it seals fuel injectors, turbo hoses, vacuum flanges and chemical pumps, and it sealed the Shuttle booster joints, where on the morning of 28 January 1986 the O-rings were at about minus two degrees, too stiff to follow the gap as the casing flexed. Feynman showed the failure with a clamp and a glass of iced water. Standard grades go glassy around minus 20 °C and the arctic grades cost more; ketones, esters and amines swell or attack it, and hot steam hydrolyses it. In the warm, it is the ring to reach for first.",
  stats: [["Service", "−20 to ~230 °C"], ["Resists", "fuels, oils, vacuum"], ["Avoid", "ketones, amines, steam"]],
  uses: "Fuel system seals, vacuum feedthroughs, engine gaskets, chemical pump seals.",
  link: "https://en.wikipedia.org/wiki/FKM",
  src: ["ERIKS: FKM", "https://o-ring.info/en/materials/vitonr--fkm/"]
},
{
  id: "silicone", cat: "polymer", name: "Silicone rubber",
  sub: "VMQ, polysiloxane", img: "silicone", extra: ["silicone2", "silicone3"],
  hook: "A rubber whose backbone is sand's chemistry, silicon and oxygen, so it is still flexible at minus 60 °C and still rubber at 230 °C. It leaks gas like a sieve, which makes it a poor tyre and a good artificial lung.",
  more: "Frederic Kipping named the silicones at Nottingham and thought them useless; Dow Corning made them a business from 1943, for aircraft gaskets and ignition insulation that survived altitude. The Si-O bond is longer and freer to turn than C-C, so the chain stays mobile to minus 125 °C, and it is already oxidised, so heat and ozone have little to work on. The same open chain passes oxygen and carbon dioxide a hundred times faster than butyl, which Theodor Kolobow turned into the 1960s membrane oxygenator that breathes for a patient during heart surgery. It is weak unless filled with fumed silica, tears easily, swells in petrol, and costs several times a hydrocarbon rubber, so it is bought for the extremes: bakeware, implants, the seal on an oven door.",
  stats: [["Service", "−60 to 230 °C"], ["Gas permeability", "very high"], ["Strength", "modest"]],
  uses: "Seals and gaskets, medical tubing and implants, bakeware, keypads, encapsulants.",
  link: "https://en.wikipedia.org/wiki/Silicone_rubber",
  src: ["ERIKS: VMQ", "https://o-ring.info/en/materials/silicone-vmq/"]
},
{
  id: "natrubber", cat: "polymer", name: "Natural rubber",
  sub: "cis-1,4-polyisoprene", img: "natrubber", extra: ["natrubber2", "natrubber3"],
  hook: "Tree sap, and still unbeaten after a century of synthetics: pull it and the chains crystallise where the crack would start, so it outlasts anything from a reactor in tearing and fatigue. Every airliner lands on it.",
  more: "Hevea brasiliensis makes cis-1,4-polyisoprene so regular that at a few hundred per cent strain the chains pack into crystals, which melt again when the load comes off. That is why a tyre carcass flexes a hundred million times without failing, why aircraft tyres are nearly all natural rubber, and why a building can sit on rubber bearings and ride out an earthquake. Goodyear's sulphur cure of 1839 made it a material; Wickham's seeds of 1876, smuggled from Brazil to Kew and on to Malaya, made it a crop, and nine tenths still comes from Asian smallholders, because leaf blight keeps the tree out of plantations in its own continent. It swells in oil, cracks in ozone and sunlight, and the proteins in the latex can give the nurse who wears it an allergy.",
  stats: [["Elongation", "to ~700%"], ["Fatigue", "best in class"], ["Trick", "strain crystallisation"]],
  uses: "Aircraft and truck tyres, seismic base isolators, engine mounts, gloves.",
  link: "https://en.wikipedia.org/wiki/Natural_rubber",
  src: ["Macrogalleria: polyisoprene", "https://pslc.ws/macrog/isoprene.htm"]
},
{
  id: "butyl", cat: "polymer", name: "Butyl rubber",
  sub: "IIR, isobutylene-isoprene", img: "butyl", extra: ["butyl2"],
  hook: "Isobutylene polymerised at minus 100 °C with a little isoprene: a rubber packed so tight that air can hardly get through. Why a bicycle tyre holds air for weeks, not days, and the liner inside every tubeless one.",
  more: "Sparks and Thomas at Standard Oil found it in 1937, and the methyl groups crowding the chain that keep gas out also soak up vibration, so a butyl mount damps where a natural rubber one bounces. It has about a tenth the air permeability of natural rubber, which put it in inner tubes at once and, after the chlorinated and brominated grades of the 1950s and 60s solved the problem of curing it against other rubbers, in the liner of every tubeless tyre. The same tightness keeps solvent out of the gloves on a chemistry glovebox and oxygen out of a vial through the stopper. It is slow to cure, will not stick to much, is weak in tear, and its low resilience, the virtue in a mount, makes a dull tread. The gum, uncured, is the base of chewing gum.",
  stats: [["Gas permeability", "~10× lower than NR"], ["Damping", "high"], ["Rebound", "low"]],
  uses: "Tyre inner liners and tubes, glovebox gloves, pharmaceutical stoppers, vibration mounts.",
  link: "https://en.wikipedia.org/wiki/Butyl_rubber",
  src: ["HEXPOL: IIR", "https://www.hexpol.com/rubber/hexpol-rubber-compounding/advanced-rubber-compounds/polymers/iir-rubber-2/"]
},
{
  id: "pvdf", cat: "polymer", name: "PVDF",
  sub: "polyvinylidene fluoride", img: "pvdf",
  hook: "A fluoropolymer that is also a sensor: stretch the film, pole it in a field, and the C-F dipoles stay lined up, so it gives a voltage when flexed. A piezoelectric cut with scissors, and the paint on cladding.",
  more: "Pennwalt sold vinylidene fluoride polymer as Kynar from 1965, and the first market was architecture: fluorine makes it the paint on metal cladding that does not chalk or fade. Kawai found in 1969 that drawn, poled film is strongly piezoelectric, the beta crystal with its fluorines all on one side, and that gave the hydrophone, the keystroke and impact sensor, the ultrasonic transducer, each a bendable film under a hundred microns. Melt-processable, it is extruded into the piping of ultrapure water and acid lines, cast as microfiltration membrane, and dissolved in NMP as the binder that holds a lithium-ion electrode together. It costs several times PVC, softens by 150 °C, loses fluorine to strong alkali and amines, and gives off HF when it burns.",
  stats: [["Piezoelectric", "yes, when poled"], ["Form", "film down to µm"], ["Also", "ultrapure piping"]],
  uses: "Hydrophones, contact and impact sensors, ultrapure water piping, battery binders.",
  link: "https://en.wikipedia.org/wiki/Polyvinylidene_fluoride",
  src: ["Boedeker: Kynar", "https://www.boedeker.com/Family/Kynar"]
},
{
  id: "kapton", cat: "polymer", name: "Kapton",
  sub: "polyimide film", img: "kapton", extra: ["kapton2", "kapton3"],
  hook: "The amber film on every spacecraft: a polyimide that neither melts nor softens, and keeps its strength from liquid helium to 400 °C. Five layers of it, stretched tight, shade the Webb telescope from the Sun.",
  more: "DuPont made polyimide film in 1965 from pyromellitic dianhydride and an aromatic diamine, and the aromatic rings linked by imides give a chain so stiff that nothing happens to it until it chars. It is the substrate of the flexible circuit in every phone and camera, the tape that survives a reflow oven, the insulation on cryogenic wiring, and aluminised, the blankets that keep probes warm, from the gold of the Apollo lander to the thirty-metre sunshield on Webb. The failing is water and voltage together. Polyimide-insulated wiring on 1980s aircraft hydrolysed and carbon-tracked under arcing, and the US Navy stopped specifying it; atomic oxygen in low orbit erodes it, which is why the outer layer faces out coated. And it is dear by the square metre.",
  stats: [["Range", "−269 to 400 °C"], ["Thickness", "from 7.5 µm"], ["Colour", "unmistakably amber"]],
  uses: "Multi-layer insulation blankets, flexible circuits, 3D-printer bed tape, cryogenic wiring.",
  link: "https://en.wikipedia.org/wiki/Kapton",
  src: ["Kapton datasheet", "https://www.qnityelectronics.com/products/kapton-hpp-st-polyimide-film.html"]
},
{
  id: "parylene", cat: "polymer", name: "Parylene",
  sub: "poly(p-xylylene)",
  img: "parylene",
  hook: "A coating applied as a gas: the monomer drifts into a vacuum chamber and polymerises on every surface it reaches, so a chip's underside and a connector's bore get the same pinhole-free micron of film.",
  more: "Szwarc found poly(p-xylylene) in 1947 as a residue of pyrolysed xylene; Gorham at Union Carbide made it usable in 1965 by starting from the stable cyclic dimer, cracked at 680 °C. No solvent, no cure, no heat on the part, no meniscus at an edge, and the film is thin enough to coat a needle, a stent or a hearing-aid board without changing its fit, which is why parylene C is the standard skin on implanted electronics. The costs are the chamber: a batch process in a vacuum, hours per run, everything that must stay bare masked by hand, and the dimer priced like a pharmaceutical. The film oxidises above about 100 °C in air, yellows in sunlight, needs a silane primer or it peels, and once on, cannot be touched up or stripped without a plasma.",
  stats: [["Applied as", "a vapour"], ["Thickness", "~0.1–50 µm"], ["Coverage", "truly conformal"]],
  uses: "PCB conformal coating, implant and stent coatings, MEMS, museum conservation.",
  link: "https://en.wikipedia.org/wiki/Parylene",
  src: ["SCS Coatings", "https://scscoatings.com/parylene-coatings/"]
},
{
  id: "vectran", cat: "polymer", name: "Vectran",
  sub: "melt-spun liquid crystal polymer",
  img: "vectran", extra: ["vectran2"],
  hook: "A liquid-crystal polyester spun from the melt, as strong as aramid and with the one thing aramid and Dyneema lack: it does not creep. Load it for a year and it is where you left it. It bounced two rovers onto Mars.",
  more: "Celanese spun it in 1990 from the same rigid aromatic copolyester that is moulded as Vectra, and the chains line up in the melt, so there is no acid bath as there is for Kevlar. The fibre holds about 3 GPa, takes up no water, keeps its strength through flexing that would powder an aramid, and under steady load it stays put, which is why it was the airbag cloth that cushioned Pathfinder in 1997 and Spirit and Opportunity in 2004 through forty bounces each, the restraint layer of the inflatable module on the space station and the cut-resistant layer in a butcher's glove. Kuraray makes it now. It melts at 330 °C, it is poor in compression, sunlight degrades it fast enough that it is always covered, and it costs more than the aramid it replaces.",
  stats: [["Creep", "essentially none"], ["Moisture", "unaffected"], ["Cut resistance", "high"]],
  uses: "Mars lander airbags, inflatable habitats, sailcloth and lines, cut-resistant gloves.",
  link: "https://en.wikipedia.org/wiki/Vectran",
  src: ["Kuraray Vectran", "https://vectran.kuraray.com/en/"]
},
{
  id: "delrin", cat: "polymer", name: "Acetal (Delrin)",
  sub: "polyoxymethylene, POM", img: "delrin", extra: ["delrin2", "delrin3"],
  hook: "Polymerised formaldehyde, three-quarters crystalline, that barely drinks water and machines like brass: a part comes off the lathe at the size you asked for and stays there. The quiet default for small moving parts.",
  more: "DuPont sold the homopolymer as Delrin from 1960, with the chain ends capped so it does not unzip back to formaldehyde; Celanese answered with the copolymer Celcon, steadier in hot water. Either way the result is a stiff, slippery, fatigue-proof plastic that holds a tolerance, which is why it is the gear in a printer, the teeth of a zip, the click in an insulin pen and the plectrum in a guitarist's pocket. It has a short list of enemies and they are serious. Strong acids and chlorine attack the acetal link, and plumbing fittings moulded from it crumbled in chlorinated water in the 1980s, which ended in a class action; it burns readily, gives off formaldehyde if overheated in the barrel, and nothing glues or paints it without a surface treatment.",
  stats: [["Moisture uptake", "~0.2%"], ["Friction", "low, self-lubricating"], ["Weakness", "acids, chlorine"]],
  uses: "Gears and bushings, snap fits, fuel system parts, guitar picks, fittings.",
  link: "https://en.wikipedia.org/wiki/Polyoxymethylene",
  src: ["Delrin", "https://www.delrin.com/"]
},
{
  id: "pc", cat: "polymer", name: "Polycarbonate",
  sub: "PC", img: "pc", extra: ["pc2"],
  hook: "Transparent and nearly impossible to shatter: hit it and the chains yield and slide where glass would crack, so a visor stops a shotgun pellet. It scratches if you look at it, so most of it is sold hard-coated.",
  more: "Schnell at Bayer and Fox at General Electric made bisphenol A polycarbonate in the same year, 1953, and the bulky rings along the chain are what give it a glass transition near 150 °C and its toughness, about 250 times that of glass. It became the visor of the Apollo helmet, the canopy of the F-16, the riot shield, the bullet-resistant laminate behind a bank counter, the greenhouse roof and, from 1982, the compact disc, moulded to pits a fraction of a micron deep. The costs are real. Solvents and even some detergents craze it, a sharp notch lets a crack run through all that toughness, sunlight yellows it without a coating, and the bisphenol A it is made from leaches from the hot bottle, which is why baby bottles are no longer made of it.",
  stats: [["Impact", "~250× glass"], ["Transmission", "~88%"], ["Weakness", "scratches, solvents"]],
  uses: "Riot shields and visors, aircraft canopies, safety glazing, machine guards, lenses.",
  link: "https://en.wikipedia.org/wiki/Polycarbonate",
  src: ["Macrogalleria: polycarbonates", "https://pslc.ws/macrog/pc.htm"]
},
{
  id: "pmma", cat: "polymer", name: "PMMA",
  sub: "acrylic, Plexiglas, Perspex", img: "pmma", extra: ["pmma2"],
  hook: "Clearer than glass and indifferent to weather. Cast thick it stays perfect, which is how an aquarium holds back metres of water behind one wall, and how a surgeon learned it belongs in the eye.",
  more: "Röhm cast the first sheet in 1933 as Plexiglas and ICI followed with Perspex, and by 1940 it was every fighter's canopy. Harold Ridley, removing canopy splinters from pilots' eyes, noticed that they sat there inert, and in 1949 he made the first intraocular lens from the same material; it is still bone cement and denture base for the same reason. It passes 92 per cent of light, and sunlight that chalks other plastics leaves it alone for decades. Cast slowly in a block it is flawless at any thickness, so panels sixty centimetres thick hold back the tanks at Okinawa and Dubai. It is brittle, half as tough as polycarbonate, scratches, though a scratch polishes out, crazes in alcohol and petrol, softens at 100 °C and burns with enthusiasm.",
  stats: [["Transmission", "~92%"], ["UV stability", "excellent"], ["Thick sections", "stay clear"]],
  uses: "Aquarium and submersible windows, signage and lighting, dentures, optical fibre.",
  link: "https://en.wikipedia.org/wiki/Poly(methyl_methacrylate)",
  src: ["Boedeker: acrylic grades", "https://www.boedeker.com/Family/Acrylic"]
},
{
  id: "sap", cat: "polymer", name: "Superabsorbent polymer",
  sub: "sodium polyacrylate", img: "sap", extra: ["sap2"],
  hook: "A loosely cross-linked polyacrylate whose sodium ions suck water in by osmosis until the network can stretch no further: three hundred times its weight, and held under pressure. The white sand inside every nappy.",
  more: "The USDA grafted acrylonitrile onto starch in the 1960s and got a powder that swelled into a gel; Japanese and German chemists turned it into cross-linked sodium polyacrylate, and Unicharm put it into a nappy in 1983. Each grain is a single molecule, a net of chains with charged carboxylates along them, and water rushes in to dilute the ions until the net is taut. The catch is in the chemistry: salt in the water cancels the osmotic pull, so the three hundredfold figure is for distilled water and a nappy manages perhaps thirty in urine. It is also the gel that holds water in a planted bed through a dry week, blocks water in a fibre-optic cable, and fire crews spray on a house next to a wildfire. It does not biodegrade.",
  stats: [["Absorbs", "~300× its weight"], ["Mechanism", "osmotic swelling"], ["Releases", "reluctantly"]],
  uses: "Nappies and hygiene products, agricultural water retention, fire gels, cable water-blocking.",
  link: "https://en.wikipedia.org/wiki/Sodium_polyacrylate",
  src: ["BASF HySorb", "https://personal-care-hygiene.basf.com/global/en/hygiene/products/hysorb"]
},
{
  id: "polyurea", cat: "polymer", name: "Polyurea",
  sub: "sprayed elastomer", img: "polyurea", extra: ["polyurea2"],
  hook: "An isocyanate and an amine that react with each other, not with the air, so the mix gels in seconds and takes boots in minutes. Sprayed hot at high pressure it goes on overhead, in the cold, onto damp concrete.",
  more: "Texaco's amine-ended polyethers of the 1980s made it possible: an amine grabs an isocyanate so fast that water never gets a turn, so there is no foaming, as there is with a polyurethane on a damp day. The price of that speed is the equipment. The two sides are heated to about 70 °C, pumped at over a hundred bar and mixed by collision in the gun. What comes out is a tough, seamless rubber skin: the bed liner of a pickup, the lining of a tank or a tunnel, the waterproofing on a bridge deck, and, after tests showed it held a masonry wall together under blast, a retrofit on the inside of embassy walls. It still wants a clean, primed surface, the aromatic grades chalk and yellow in sunlight, and a recoat left past its window will not bond.",
  stats: [["Gel time", "~5 seconds"], ["Humidity", "does not care"], ["Thickness", "millimetres per pass"]],
  uses: "Truck bed liners, tank and tunnel linings, blast mitigation retrofits, bridge decks.",
  link: "https://en.wikipedia.org/wiki/Polyurea",
  src: ["Polyurea Development Association", "https://www.pda-online.org/"]
},
{
  id: "bakelite", cat: "polymer", name: "Bakelite",
  sub: "phenol formaldehyde resin", img: "bakelite", extra: ["bakelite2", "bakelite3"],
  hook: "The first wholly synthetic plastic, and the first thermoset: Baekeland's 1907 resin cures into one cross-linked molecule and will never melt again. That is why 1930s radios survive and 1990s plastics do not.",
  more: "Leo Baekeland heated phenol and formaldehyde under pressure in a vessel he called the Bakelizer and got the hard, dark resin others had thrown away as tar. Filled with wood flour and compression-moulded it became the telephone, the radio cabinet, the distributor cap, the saucepan handle and the light switch; cast without filler as Catalin it became bright bangles and radios in marbled colours. It does not conduct, soften in an engine bay or burn easily. The limits are built in. It is brittle, its wood flour makes everything brown or black, so the pastel kitchen went to urea-formaldehyde, it cannot be remelted or recycled, and it smells of phenol ninety years on. It is still the binder in brake pads and the base of cheap circuit boards.",
  stats: [["Invented", "1907"], ["Cure", "irreversible"], ["Legacy", "the first thermoset"]],
  uses: "Vintage housings and knobs, electrical insulators, brake pads, laboratory benchtops.",
  link: "https://en.wikipedia.org/wiki/Bakelite",
  src: ["Science History Institute", "https://www.sciencehistory.org/education/scientific-biographies/leo-hendrik-baekeland/"]
},
{
  id: "phenolic", cat: "polymer", name: "Phenolic laminate",
  sub: "Tufnol, Textolite, Micarta", img: "phenolic",
  hook: "Paper, cotton or linen soaked in phenolic resin and pressed hot into a hard board. Gears cut from it run quieter than steel and forgive grit, and a ship can turn its propeller shaft in it lubricated by seawater.",
  more: "Westinghouse laminated it as Micarta in 1910, Formica took its name from the mica it replaced in 1913, and Tufnol, Pertinax and Textolite followed in Britain, Germany and America. The resin alone is brittle; the cloth gives it toughness and a direction. Paper grades are the cheap electrical insulator and the brown circuit board of a transistor radio; fine cotton and linen carry the gears, bearing cages and camshaft timing wheels that run quietly because the material gives a little; coarse canvas is the stern-tube bearing and the rolling-mill bearing that lasts longer than bronze. It machines with carbide like hardwood, the dust is foul, it drinks water at a cut edge and swells, it goes no hotter than about 150 °C, and it comes in brown.",
  stats: [["Core", "cloth or paper"], ["Gears", "quiet, forgiving"], ["Machines", "like hard wood"]],
  uses: "Quiet gears, electrical standoffs, knife scales, bearing cages, switchgear panels.",
  link: "https://en.wikipedia.org/wiki/Phenol_formaldehyde_resin",
  src: ["Tufnol", "https://tufnol.com/"]
},
{
  id: "neoprene", cat: "polymer", name: "Neoprene",
  sub: "polychloroprene", img: "neoprene", extra: ["neoprene2", "neoprene3"],
  hook: "DuPont's rubber of 1931, chloroprene, a chlorine on every unit, still the all-rounder: it stands oil, ozone and weather at once, as natural rubber cannot. Foamed with nitrogen it became the wetsuit.",
  more: "Nieuwland, a priest and chemist at Notre Dame, showed DuPont his acetylene chemistry in 1925; Collins and Carothers turned it into chloroprene, and DuPrene went on sale in 1931. The chlorine on the chain makes it polar, so petrol and oil do not swell it much, ozone and sunlight do not crack it, and it chars rather than burns, which put it into gaskets, hose covers, cable jackets and the laminated bearings that let a bridge deck expand. Hugh Bradner foamed it with nitrogen in 1952, and the closed cells that hold the warmth are why every wetsuit since is neoprene. It is weaker than natural rubber, dearer than EPDM, stiffens when stored cold, and its fumes in a fire carry hydrogen chloride. It is also the sticky brown contact cement in the tin.",
  stats: [["Introduced", "1931"], ["Resists", "oil, ozone, weather"], ["Foamed", "it insulates"]],
  uses: "Wetsuits, gaskets and bellows, hose covers, laptop sleeves, bridge bearings.",
  link: "https://en.wikipedia.org/wiki/Neoprene",
  src: ["ERIKS: CR", "https://o-ring.info/en/materials/neoprene-cr/"]
},
{
  id: "epdm", cat: "polymer", name: "EPDM",
  sub: "ethylene propylene diene rubber", img: "epdm", extra: ["epdm2", "epdm3"],
  hook: "Ethylene and propylene with a little diene on the side for the cure, so the backbone has no double bonds for ozone to find. Thirty years on a roof and it still flexes. Oil swells it, so it stays out of engines.",
  more: "Ziegler-Natta catalysts made it possible in the early 1960s, and it has been the rubber of the outdoors since: the single-ply membrane rolled out over a flat roof in sheets fifteen metres wide, the weatherstrip around every car door and window, the radiator hose, the pond liner, the washing-machine door seal. It takes huge loadings of carbon black and oil without complaint, which keeps it cheap, and it tolerates steam and glycol, which makes it the one rubber for brake fluid and coolant. The same non-polar chain is the trouble. Petrol, mineral oil and grease swell it, nothing much sticks to it without a primer, and the wrong grease on a seal ruins it. From minus 50 to 150 °C, out in the weather, there is nothing cheaper that lasts.",
  stats: [["Ozone", "unaffected"], ["Service", "−50 to 150 °C"], ["Weakness", "oils and fuels"]],
  uses: "Roofing membrane, car door and window seals, radiator hose, pond liners, cable insulation.",
  link: "https://en.wikipedia.org/wiki/EPDM_rubber",
  src: ["ERIKS: EPDM", "https://o-ring.info/en/materials/epdm/"]
},
{
  id: "nbr", cat: "polymer", name: "Nitrile rubber",
  sub: "NBR, Buna-N", img: "nbr", extra: ["nbr2"],
  hook: "Butadiene with a dose of acrylonitrile, and the dose is a dial: more nitrile and oil cannot swell it, less and it still bends at minus 40. The default seal wherever there is oil, and the glove on every nurse.",
  more: "Konrad and Tschunkur at IG Farben made it in 1934 as Buna N, and the polar nitrile groups along the chain are the whole trick: petrol, oil and grease will not dissolve in them, so the rubber sits in a fuel tank for years without swelling. At 18 per cent acrylonitrile it is still supple at minus 40; at 50 it shrugs off aromatic fuel but stiffens below freezing. It is the cheap O-ring, the hydraulic seal, the fuel hose and, since the latex allergies of the 1990s, the blue examination glove. The double bonds left in the butadiene are its weakness: ozone and sunlight crack it in weeks, so it lives indoors or under oil; hydrogenating them away gives HNBR at several times the price. Ketones, esters and Skydrol swell it fast.",
  stats: [["Resists", "fuel, oil, grease"], ["Trade-off", "cold flexibility"], ["Service", "−30 to 120 °C"]],
  uses: "Fuel and hydraulic seals, O-rings, disposable gloves, conveyor belts, hoses.",
  link: "https://en.wikipedia.org/wiki/Nitrile_rubber",
  src: ["ERIKS: NBR", "https://o-ring.info/en/materials/nitrile--nbr/"]
},
{
  id: "br", cat: "polymer", name: "Polybutadiene",
  sub: "BR", img: "br", extra: ["br2"],
  hook: "Butadiene alone, on a Ziegler catalyst: the springiest rubber made. It loses almost nothing per bounce, so it is the core of the golf ball and the Super Ball. Too slippery wet to be a tread alone, so it is blended.",
  more: "Phillips and Goodyear made high-cis polybutadiene in 1956, the year after Ziegler's catalysts, and the chain is so regular and so free, glass transition near minus 100 °C, that it returns energy better than any other rubber. Seven tenths of it goes into tyres, blended with SBR or natural rubber: it cuts rolling resistance and tread wear, and flex cracks grow slower in it. The rest is the golf ball core, cured so it leaves the club at four fifths of the impact speed, the Super Ball of 1965, the rubber phase that stops high-impact polystyrene and ABS shattering, and, hydroxyl-terminated, the binder that holds the aluminium and oxidiser together in a solid rocket booster. Alone it is slippery on a wet road, tears easily and is miserable to mill.",
  stats: [["Rebound", "highest of the rubbers"], ["Glass transition", "~−100 °C"], ["Use", "usually blended"]],
  uses: "Tyre treads and sidewalls, golf ball cores, conveyor belts, impact modifier in plastics.",
  link: "https://en.wikipedia.org/wiki/Polybutadiene",
  src: ["UBE Elastomer", "https://www.ube.co.jp/elastomer/en/product/polybutadiene_rubber.html"]
},
{
  id: "tpu", cat: "polymer", name: "TPU",
  sub: "thermoplastic polyurethane", img: "tpu", extra: ["tpu2"],
  hook: "A polyurethane you can melt: hard urethane blocks cluster into domains that act as cross-links until the barrel heats them apart. Rubber from an injection moulder or a printer, and the most abrasion-proof plastic.",
  more: "Schollenberger at B.F. Goodrich sold the first as Estane in 1958. A diisocyanate and a short diol make the hard segments, a long polyester or polyether diol the soft ones; they separate at the nanometre scale and the hard domains hold the soft ones like a vulcanised net, but one that lets go near 200 °C and reforms on cooling. It is the ski boot shell, the stud plate of a football boot, the clear phone case, the bicycle inner tube at a third of the weight of butyl and the flexible filament in a printer. The costs: polyester grades hydrolyse in warm damp, polyether grades feed microbes, the aromatic ones yellow in sunlight, it creeps under a steady load, softens past 80 °C, and must be dried or it froths in the mould.",
  stats: [["Hardness", "60 Shore A to 70 Shore D"], ["Abrasion", "outstanding"], ["Processing", "melt, mould, reuse"]],
  uses: "Phone cases, shoe soles, cable jackets, 3D printing filament, caster wheels, films.",
  link: "https://en.wikipedia.org/wiki/Thermoplastic_polyurethane",
  src: ["BASF Elastollan", "https://plastics-rubber.basf.com/global/en/performance_polymers/products/elastollan"]
},
{
  id: "pps", cat: "polymer", name: "PPS",
  sub: "polyphenylene sulfide", img: "pps",
  hook: "Benzene rings strung on sulphur, Phillips' Ryton of 1973: nothing dissolves it below 200 °C, it will not burn unaided, and it holds a dimension in hot oil. The plastic that replaced metal in pumps.",
  more: "Edmonds and Hill made it from dichlorobenzene and sodium sulphide in 1967: a stiff semi-crystalline chain melting at 285 °C, inert to fuels, coolant, acids and every solvent short of hot chloronaphthalene, and flame-retardant on its own, with no additive to leach out. Nearly all of it is sold with 40 per cent glass in it, because unfilled it is brittle, and so it is the pump housing and impeller in a dishwasher and a chemical plant, the fuel-rail parts under a bonnet, the connector that goes through a reflow oven and, spun as a fibre, the bags that filter fly ash out of a power station flue at 190 °C. It needs a mould held at 140 °C to crystallise, the glass eats tooling, weld lines are weak, hot bleach attacks it, and it comes in tan or black.",
  stats: [["Continuous use", "~220 °C"], ["Solvents", "none below 200 °C"], ["Flammability", "inherently V-0"]],
  uses: "Pump housings and impellers, under-bonnet parts, connectors, filter fabric for flue gas.",
  link: "https://en.wikipedia.org/wiki/Polyphenylene_sulfide",
  src: ["Boedeker: Ryton", "https://www.boedeker.com/Family/Ryton"]
},
{
  id: "mylar", cat: "polymer", name: "BoPET (Mylar)",
  sub: "biaxially oriented polyester film", img: "mylar", extra: ["mylar2", "mylar3"],
  hook: "PET stretched four times in both directions while warm, so the crystals lie in the plane of the sheet: a film 12 microns thick that will neither stretch nor tear. Metallised, it is a mirror or a 30-metre satellite.",
  more: "DuPont sold it as Mylar in 1952 and ICI as Melinex, and the tenter frame that stretches the extruded sheet lengthways and then sideways turns a soft, cloudy polyester into a film stronger by weight than mild steel. It was the base of magnetic tape, floppy disks and X-ray film; with a vapour-deposited skim of aluminium it made Echo 1, the balloon satellite of 1960, the insulation blankets on every probe since, the crisp packet and the foil balloon. Half a micron thick it is the dielectric in a film capacitor. The flaws: a nick runs across it like a crack in glass, it will not heat-seal to itself without a coating, hot water hydrolyses it, and a loose foil balloon finds a power line, hundreds of outages a year in California alone.",
  stats: [["Thickness", "from 1.5 µm"], ["Strength", "high, in both directions"], ["Metallised", "near-total IR reflection"]],
  uses: "Space blankets and MLI, solar sails, food packaging, capacitor dielectric, balloons.",
  link: "https://en.wikipedia.org/wiki/BoPET",
  src: ["Mylar films", "https://mylar.com/"]
},
{
  id: "pp", cat: "polymer", name: "Polypropylene",
  sub: "PP", img: "pp", extra: ["pp2", "pp3"],
  hook: "Natta's isotactic chain of 1954, every methyl on the same side so it crystallises: a plastic light enough to float, with a living hinge that opens a million times. The Monobloc chair, the car bumper, the mask.",
  more: "Giulio Natta made it in 1954 with the catalyst Ziegler had just handed him; Montecatini sold it as Moplen in 1957 and it is now the second plastic on earth by tonnage. Flex a thin web of it once and the crystals line up across the fold, so the flip-top cap outlives the bottle. It is the Robin Day stacking chair of 1963 and the Monobloc garden chair pressed out by the billion, the bumper, the rope that floats, the autoclavable syringe, the meltblown web in an N95 mask. The costs: a homopolymer turns brittle near freezing, so cold parts get ethylene in the chain; the tertiary hydrogen on every unit invites oxygen and sunlight, so unstabilised rope powders in a season; and nothing glues or paints it without a flame or a corona first.",
  stats: [["Density", "0.90 g/cm³ — it floats"], ["Living hinge", "millions of cycles"], ["Melt point", "~160 °C"]],
  uses: "Flip-top caps and boxes, car bumpers and trim, rope, autoclavable labware, fibre.",
  link: "https://en.wikipedia.org/wiki/Polypropylene",
  src: ["Macrogalleria: polypropylene", "https://pslc.ws/macrog/pp.htm"]
},
{
  id: "memoryfoam", cat: "polymer", name: "Viscoelastic foam",
  sub: "memory foam", img: "memoryfoam", extra: ["memoryfoam2"],
  hook: "A polyurethane foam whose glass transition sits near skin temperature: the part you lie on warms, softens and takes your shape. It recovers slowly on purpose, as the air seeps back through the cells.",
  more: "Charles Yost made it for NASA Ames in 1966 as a crash cushion for aircraft seats, a slow-spring-back foam that spread the load, and Fagerdala in Sweden turned it into the Tempur mattress in 1991. Two things slow it down: the polymer, poised at its glass transition, and the open cells, which let air out and back only so fast. So it holds a hand print for seconds and a sleeper without pressure points, which is why it went into wheelchair cushions, prosthetic liners and the earplug that expands in the canal. It sleeps hot, because it closes around you and moves no air; it is a board in a cold bedroom and a sponge in a warm one; a new one off-gasses for days; and it softens for good where you lie, with no second side to flip to.",
  stats: [["Softens at", "~body temperature"], ["Recovery", "seconds, deliberately"], ["Origin", "NASA seat research, 1966"]],
  uses: "Mattresses and pillows, earplugs, prosthetic liners, wheelchair cushions, packaging.",
  link: "https://en.wikipedia.org/wiki/Memory_foam",
  src: ["NASA Spinoff", "https://spinoff.nasa.gov/Spinoff2005/ch_6.html"]
},
{
  id: "epoxy", cat: "polymer", name: "Epoxy",
  sub: "thermosetting resin", img: "epoxy", extra: ["epoxy2", "epoxy3"],
  hook: "Castan's dental resin of 1936: an epoxide at each end of a short chain, opened by an amine, so the cure adds and gives nothing off. Barely any shrinkage, sticks to nearly anything, holds most composites together.",
  more: "Castan made the bisphenol A diglycidyl ether in Zurich for dentures, Ciba sold it as Araldite from 1946, and the cure, each amine hydrogen opening an epoxide ring with no by-product, is why it shrinks one or two per cent where a polyester shrinks seven, and why the hydroxyls it grows along the way grip metal, glass and carbon. It is the matrix of the carbon wing, the wind-turbine blade and the racing bicycle, the structural adhesive that bonds aircraft skins, the glass-epoxy board under every circuit, the garage floor and the two-part syringe in the kitchen drawer. The costs: brittle unless toughened, chalked and yellowed by sunlight, softened by hot water, limited to about 180 °C, and the uncured hardener sensitises skin for life.",
  stats: [["Cure shrinkage", "~1–2%"], ["Adhesion", "to almost anything"], ["Service", "to ~180 °C"]],
  uses: "Composite matrix, structural adhesive, potting and encapsulation, coatings, PCB laminate.",
  link: "https://en.wikipedia.org/wiki/Epoxy",
  src: ["Macrogalleria: epoxies", "https://pslc.ws/macrog/epoxy.htm"]
},
{
  id: "eva", cat: "polymer", name: "EVA foam",
  sub: "ethylene-vinyl acetate", img: "eva", extra: ["eva2", "eva3"],
  hook: "Polyethylene with enough vinyl acetate in the chain to spoil the crystals, so it is soft and rubbery with no plasticiser to lose. Cross-linked and blown into closed cells it is the running shoe midsole and the Croc.",
  more: "Add 10 to 40 per cent vinyl acetate to ethylene and the acetate groups keep the chains from packing, so the copolymer is flexible and stays so, where plasticised PVC stiffens as its plasticiser leaves. Foamed with azodicarbonamide and cross-linked with peroxide it is light, closed-cell and springy: the midsole of the 1970s running boom, the flip-flop, the yoga mat, the playroom floor, the Croc and the float. Unfoamed it is the glue stick and the clear sheet that encapsulates solar cells. The costs: the midsole dies as its cells collapse after a few hundred kilometres; in a solar panel sunlight yellows it and frees acetic acid that corrodes the cell contacts; and the blowing agent residue got foam mats banned in Belgium and France in 2010.",
  stats: [["Plasticiser", "none needed"], ["Density", "typically 30–200 kg/m³"], ["Water", "closed cell, absorbs none"]],
  uses: "Shoe midsoles, mats and padding, solar panel encapsulant, hot-melt adhesive, buoyancy.",
  link: "https://en.wikipedia.org/wiki/Ethylene-vinyl_acetate",
  src: ["Zotefoams Evazote", "https://www.zotefoams.com/our-materials/azote/evazote/"]
},
{
  id: "abs", cat: "polymer", name: "ABS",
  sub: "acrylonitrile butadiene styrene", img: "abs", extra: ["abs2"],
  hook: "Three monomers, three jobs: styrene for stiffness, acrylonitrile for chemical resistance, rubber particles that stop cracks. It holds a hundredth of a millimetre, so a 1963 Lego brick still clutches a new one.",
  more: "Borg-Warner sold it as Cycolac in 1954, and the trick is that the rubber is not blended in but grafted on, so a polybutadiene particle a micron across sits bonded inside the glassy styrene-acrylonitrile and turns a crack into a million harmless crazes. Lego switched to it from cellulose acetate in 1963 for the tolerance, and it became the appliance housing, the car dashboard, the luggage shell, the plated tap and badge, the beige computer case and the printer filament that gave the Benchy its name. The costs: the butadiene that toughens it also yellows and embrittles in sunlight, so an old console goes the colour of tea; acetone dissolves it, which is why printers vapour-smooth it; it burns with black smoke; and the hot nozzle gives off styrene.",
  stats: [["Tg", "~105 °C"], ["Impact", "rubber-toughened"], ["Mould shrink", "~0.5%"]],
  uses: "Lego, appliance housings, automotive trim, 3D printing filament.",
  link: "https://en.wikipedia.org/wiki/Acrylonitrile_butadiene_styrene",
  src: ["Boedeker: ABS grades", "https://www.boedeker.com/Family/Abs"]
},
{
  id: "pet", cat: "polymer", name: "PET",
  sub: "polyethylene terephthalate", img: "pet", extra: ["pet2", "pet3"],
  hook: "Whinfield and Dickson's polyester of 1941, half the world's fibre and every fizzy-drink bottle. Blown warm from a thick tube, the chains crystallise so fine the wall stays clear: the shaping is the strengthening.",
  more: "Two chemists at the Calico Printers' Association made it, ICI sold it as Terylene and DuPont as Dacron, and for thirty years it was a fibre, the drip-dry shirt and the sail. Nathaniel Wyeth at DuPont made it a bottle in 1973: a quenched, glassy preform is reheated to about 100 °C and blown, stretching three times along and four times round, and the crystals that form are too small to scatter light and large enough to triple the strength. It is also the oven tray, the fleece made from the bottles, and the most recycled plastic there is. The costs: it must be dried to a few parts per million before melting or it hydrolyses in the barrel; it softens at 70 °C, so a bottle shrinks in a hot car; carbon dioxide still leaks, so small bottles go flat first.",
  stats: [["Wall", "~0.3 mm"], ["Preform", "~25 g"], ["Trick", "biaxial orientation"]],
  uses: "Drinks bottles, film, polyester fibre, oven-safe trays.",
  link: "https://en.wikipedia.org/wiki/Polyethylene_terephthalate",
  src: ["Macrogalleria: polyesters", "https://pslc.ws/macrog/pet.htm"]
},
{
  id: "pvc", cat: "polymer", name: "PVC",
  sub: "polyvinyl chloride", img: "pvc", extra: ["pvc2", "pvc3"],
  hook: "More than half chlorine by weight, from salt, so it is cheap and will not keep burning. Semon's plasticiser of 1926 slides the same polymer from drainpipe to inflatable boat, and the plasticiser is the trouble.",
  more: "Baumann left a flask of the monomer in the sun in 1872 and got a brittle solid that decomposed before it melted; it was useless until Waldo Semon at Goodrich dissolved it in tricresyl phosphate and found rubber. Rigid, it is the drainpipe and water main, the window frame and the credit card; plasticised with phthalates it is the cable jacket, the blood bag, the floor, the tarpaulin, the inflatable and, since the Columbia LP of 1948, the record. The chlorine is a mixed gift: it self-extinguishes, but in a fire it gives hydrochloric acid and dioxins, and the chain sheds HCl at moulding heat, so every grade carries a stabiliser, lead for decades. The plasticiser migrates out, the toy bans of 1999 followed, and old PVC goes stiff and yellow as it leaves.",
  stats: [["Chlorine", "~57% by mass"], ["Plasticiser", "0–50%"], ["LOI", "~45%"]],
  uses: "Pipe, window frames, cable sheathing, flooring, inflatables.",
  link: "https://en.wikipedia.org/wiki/Polyvinyl_chloride",
  src: ["Macrogalleria: PVC", "https://pslc.ws/macrog/pvc.htm"]
},
{
  id: "nylon66", cat: "polymer", name: "Nylon 6/6",
  sub: "polyhexamethylene adipamide", img: "nylon66", extra: ["nylon662", "nylon663"],
  hook: "Carothers' polymer of 1935, a diamine and a diacid of six carbons each, hydrogen-bonded chain to chain, the first synthetic fibre and still the default tough plastic. It drinks water, and is tougher for it.",
  more: "DuPont sold it first as toothbrush bristles in 1938, then as stockings on 15 May 1940, four million pairs in four days, and spent the war making parachutes of it instead of silk. The hydrogen bonds give it a melting point of 264 °C and they also pull in water: about 2.5 per cent at ordinary humidity, which swells a part slightly and turns it from brittle as moulded to the tough thing in the datasheet. It is the cable tie, the gear and bearing, the airbag, the carpet and the climbing rope that stretches to catch a fall. The costs: a dry part snaps, a wet one is oversize, sunlight chalks it, acids cut the chain, zinc chloride from a corroding fitting cracks a cable tie, and the granules must be dried before the moulder sees them.",
  stats: [["Melting", "255 °C"], ["Water uptake", "~2.5%"], ["Dry vs wet", "different material"]],
  uses: "Gears, cable ties, rope, bearings, toothbrush bristles.",
  link: "https://en.wikipedia.org/wiki/Nylon_66",
  src: ["Macrogalleria: nylon", "https://pslc.ws/macrog/nylon.htm"]
},
{
  id: "hdpe", cat: "polymer", name: "HDPE",
  sub: "high-density polyethylene", img: "hdpe", extra: ["hdpe2", "hdpe3"],
  hook: "Ziegler's low-pressure polyethylene of 1953: straight chains, no branches, so they pack into crystals and it is stiff where the old kind was limp. Nothing dissolves it cold, and it costs a dollar a kilo.",
  more: "Hogan and Banks at Phillips got there in 1951 with a chromium catalyst and sold it as Marlex in 1954, which nobody wanted until the hula hoop of 1958 ate the whole output. A chain with no side branches crystallises to three quarters, which gives a milk jug its stiffness and its bloom. It is the jerry can, the chemical drum, the cutting board, the landfill liner, Tyvek, and the yellow gas main, butt-fused in the trench, that rides out an earthquake where cast iron snaps. The costs: it creeps, so a pipe is rated by what it holds for fifty years, not a minute; detergent cracks a stressed bottle; sunlight embrittles it without carbon black; nothing glues it, so joints are welded; and it floats, and lasts, in the sea.",
  stats: [["Density", "0.94–0.97 g/cm³"], ["Chemical", "near-universal resistance"], ["Weakness", "creep"]],
  uses: "Jerry cans, gas pipe, cutting boards, chemical tanks, milk jugs.",
  link: "https://en.wikipedia.org/wiki/High-density_polyethylene",
  src: ["Macrogalleria: polyethylene", "https://pslc.ws/macrog/pe.htm"]
},
{
  id: "pex", cat: "polymer", name: "PEX",
  sub: "cross-linked polyethylene", img: "pex", extra: ["pex2", "pex3"],
  hook: "Polyethylene with its chains tied together, so above the crystal melt it is a rubber instead of a liquid. Stretch a pipe end cold over a fitting and it spends a minute shrinking back onto it.",
  more: "Thomas Engel cross-linked polyethylene with peroxide in 1968 and Wirsbo in Sweden ran it as underfloor heating pipe in 1972; from the 1990s it replaced copper in the American house, uncoiled through the joists and crimped or expanded onto brass. The cross-links are the point: no creep rupture at 95 °C, no slow crack growth, a kink that a heat gun heals, and a memory that makes the joint tighten itself. The costs: it is a thermoset now, so it cannot be remelted; sunlight ruins it in months; oxygen diffuses through the wall and rusts a boiler unless a barrier layer is added; chlorinated water slowly oxidises it from inside; rats chew it; and the dezincifying brass fittings of the 2000s ruined two makers.",
  stats: [["Cross-link", "70–89%"], ["Service", "95 °C at 6 bar"], ["Joint", "shrink-fit"]],
  uses: "Domestic hot and cold plumbing, underfloor heating loops.",
  link: "https://en.wikipedia.org/wiki/Cross-linked_polyethylene",
  src: ["Plastics Pipe Institute", "https://plasticpipe.org/"]
},
{
  id: "eps", cat: "polymer", name: "Expanded polystyrene",
  sub: "steam-expanded PS beads", img: "eps", extra: ["eps2", "eps3"],
  hook: "Polystyrene beads with a little pentane inside, puffed forty-fold in steam and fused in a mould: 98 per cent air in closed cells. It does not spring back, and that is the point of a helmet. It is not Styrofoam.",
  more: "Fritz Stastny at BASF made Styropor in 1949, and the process is still his: beads pre-expanded in steam, rested a day, then steamed again in a mould until they weld into a shape. It conducts heat about as badly as still air, floats a pontoon, keeps a fish box cold and cradles a television across an ocean. Under a blow it crushes at a nearly constant stress, cell by cell, which stretches a stop from microseconds to milliseconds; the Bell Biker of 1975 put that on a cyclist, and every helmet since is a one-use part. The costs: petrol and acetone dissolve it on contact, it burns with black smoke and drips, sunlight yellows it, it is too bulky to be worth recycling, and the beads it sheds float for ever. Styrofoam is Dow's extruded board, a cousin.",
  stats: [["Density", "15–30 kg/m³"], ["λ", "~0.035 W/m·K"], ["Rebound", "none, by design"]],
  uses: "Helmets, packaging, insulation board, void formers in concrete.",
  link: "https://en.wikipedia.org/wiki/Polystyrene",
  src: ["EPS Industry Alliance", "https://www.epsindustry.org/"],
  tags: ["warmth"]
},
{
  id: "pdms", cat: "polymer", name: "PDMS",
  sub: "polydimethylsiloxane (Sylgard 184)", img: "pdms", extra: ["pdms2"],
  hook: "Silicon and oxygen down the backbone, two methyls on every silicon: the clearest, softest, leakiest rubber. Pour it over a master, bake an hour, peel, and you have copied features finer than a wavelength of light.",
  more: "Dow Corning's Sylgard 184 is the grade that mattered: Whitesides' group at Harvard cast it over photoresist patterns in the 1990s, called it soft lithography, and microfluidics followed, channels the width of a hair bonded to glass with a minute of oxygen plasma. It is transparent to 300 nanometres, lets oxygen through so cells in a channel breathe, and the body tolerates it, which is why a lung-on-a-chip is a PDMS sandwich. The costs are the softness and the openness: channels bulge under pressure, small hydrophobic molecules, drugs included, vanish into the walls, solvents swell it, and nobody mass-produces it, so a product is moulded in polystyrene instead.",
  stats: [["Feature copy", "<100 nm"], ["Optical", "clear to 300 nm"], ["O₂", "permeable"]],
  uses: "Microfluidic chips, organ-on-chip, soft lithography, optical encapsulation.",
  link: "https://en.wikipedia.org/wiki/Polydimethylsiloxane",
  src: ["Gelest: silicones", "https://www.gelest.com/product-lines/silicones/"]
},
{
  id: "pebax", cat: "polymer", name: "Pebax",
  sub: "polyether block amide", img: "pebax", extra: ["pebax2"],
  hook: "Blocks of nylon 12 for strength and blocks of polyether for bounce, on one chain: an elastomer as stiff on a ski slope as in a kitchen. Foamed, it is the midsole under every marathon record since 2017.",
  more: "Arkema made the polyether block amide in 1981, and the ratio of the two blocks tunes a grade from a soft tube to a stiff shell. It took over the race ski boot from polyurethane because a PU shell goes rigid at minus 20 and a Pebax one does not; it is the soleplate of a football boot, the catheter whose shaft changes stiffness along its length by changing grade, and, blown into a foam with supercritical gas, the white midsole Nike called ZoomX in the Vaporfly of 2017, returning about 85 per cent of each stride against a carbon plate. The costs: it is several times the price of TPU, the polyamide half drinks water, the foam compresses and goes dead after a few hundred kilometres, sunlight yellows it, and glue barely holds it.",
  stats: [["Density, foamed", "~0.1 g/cm³"], ["Energy return", "~85%"], ["Cold", "flexible to −40 °C"]],
  uses: "Running shoe midsoles, ski boots, catheters, sports film.",
  link: "https://en.wikipedia.org/wiki/Polyether_block_amide",
  src: ["Arkema Pebax", "https://hpp.arkema.com/en/product-families/pebax-elastomer-family/"]
},
{
  id: "pei", cat: "polymer", name: "PEI (Ultem)",
  sub: "polyetherimide", img: "pei", extra: ["pei2"],
  hook: "Wirth's polyetherimide of 1982, GE's Ultem: an amber glass of a plastic, rigid to 200 °C, that chars instead of burning with no flame retardant added. It is the tray table on the seat in front of you.",
  more: "Joseph Wirth at General Electric strung imide rings on ether links and got an amorphous plastic that is transparent, stiff to 200 °C, and passes the cabin heat-release and smoke tests on its own chemistry, so it became the tray table, the window shade and the seat back of every airliner. Hospitals autoclave it a thousand times as the sterilisation tray. It is the headlamp lens holder, and as Ultem 9085 the filament that 3D prints ducts and brackets good enough to fly; a thin sheet of it is the build plate that grips a hot print and lets it go cold. The costs: it is dear, it melts above 350 °C and needs a hot tool, a sharp notch cracks it, methylene chloride and strong alkali attack it, and the amber tint rules out anything that must look white.",
  stats: [["Tg", "217 °C"], ["LOI", "47%"], ["Smoke", "very low"]],
  uses: "Aircraft interior panels, sterilisable medical trays, high-temp 3D printing.",
  link: "https://en.wikipedia.org/wiki/Polyetherimide",
  src: ["Boedeker: Ultem", "https://www.boedeker.com/Family/Ultem"]
},
{
  id: "fep", cat: "polymer", name: "FEP",
  sub: "fluorinated ethylene propylene", img: "fep",
  hook: "PTFE with a CF3 group here and there on the chain, enough to spoil the crystals so it melts: a fluoropolymer you can extrude as tubing, film and wire insulation. Clear, slippery, inert, 60 °C less heat-proof.",
  more: "DuPont copolymerised tetrafluoroethylene with hexafluoropropylene in 1960 and sold it as Teflon FEP, the first fluoroplastic that would go through an extruder, though the melt gives off enough HF to demand corrosion-proof tooling. Nothing sticks to it and almost nothing attacks it, so it is the release film on a composite layup, the lab tubing that carries aqua regia, the heat-shrink over a roller and the insulation on plenum cable, where its low smoke lets it run through air ducts. Silvered FEP film was the outer skin of the Hubble insulation, which cracked after seven years in orbit. The costs: 200 °C against PTFE's 260, softer, creeps more, wears faster, and it is a PFAS.",
  stats: [["Max service", "~200 °C"], ["Melt-processible", "yes, unlike PTFE"], ["Clarity", "transparent"]],
  uses: "Release film, lab tubing, wire insulation, solar module front sheets.",
  link: "https://en.wikipedia.org/wiki/Fluorinated_ethylene_propylene",
  src: ["Boedeker: FEP", "https://www.boedeker.com/Family/Fep"]
},
{
  id: "pvb", cat: "polymer", name: "PVB interlayer",
  sub: "polyvinyl butyral", img: "pvb", extra: ["pvb2"],
  hook: "Benedictus laminated glass with celluloid in 1909 and it yellowed; the butyral sheet of 1938 did not. A 0.76 mm film of it, cooked to the glass under pressure, holds every fragment of a windscreen in the frame.",
  more: "Polyvinyl alcohol reacted with butyraldehyde, plasticised to a limp, tacky sheet: two plies and the film go through rollers and an autoclave at 140 °C and 12 bar, and come out clear. The adhesion is tuned, not maximised, by the moisture in the sheet: if the film grips too hard the glass cannot pull away and stretch it, which is where the energy of a head or a brick goes. So the windscreen crazes into a web and stays put, a hurricane window takes a plank at 15 m/s. The costs: it drinks moisture, so an exposed edge hazes and lets go; it creeps warm, so a glass floor takes an ionomer sheet instead; and the 1.5 kg in every old windscreen is landfill unless the glass is stripped off it.",
  stats: [["Thickness", "0.38 / 0.76 mm"], ["Elongation", ">250%"], ["Invented", "1930s"]],
  uses: "Windscreens, laminated architectural glass, hurricane glazing, photovoltaic lamination.",
  link: "https://en.wikipedia.org/wiki/Polyvinyl_butyral",
  src: ["Trosifol", "https://www.trosifol.com/"]
},
{
  id: "surlyn", cat: "polymer", name: "Ionomer (Surlyn)",
  sub: "zinc/sodium-neutralised ethylene acrylic acid", img: "surlyn",
  hook: "Rees's resin of 1964: ethylene with a few acid groups on the chain, neutralised to sodium or zinc, and the ions cluster into cross-links that open hot and close cold. The golf ball cover that retired balata.",
  more: "Rees at DuPont copolymerised ethylene with methacrylic acid and neutralised part of it with sodium or zinc; the salt groups cluster into domains that hold the chains like cross-links and melt apart at processing heat, so it moulds like polyethylene and is tougher. Spalding put it on the two-piece Top-Flite in 1971 and the balata cover, which a thinned wedge sliced, retreated to the tour bag; most balls still wear it. It is the heavy clear perfume cap, the coating on a bowling pin and, stiffer, the glass interlayer that does not creep where PVB does. Shot through, a thin sheet closes behind the bullet, melted by friction and pulled shut. The costs: dearer than polyethylene, soft by 70 °C, and the sodium grades drink water and go hazy.",
  stats: [["Cross-links", "ionic, reversible"], ["Cut resistance", "very high"], ["Clarity", "glass-like"]],
  uses: "Golf ball covers, ski bases, bottle closures, food packaging film.",
  link: "https://en.wikipedia.org/wiki/Ionomer",
  src: ["Macrogalleria: ionomers", "https://pslc.ws/macrog/ionomer.htm"]
},
{
  id: "pla", cat: "polymer", name: "PLA",
  sub: "polylactic acid", img: "pla", extra: ["pla2", "pla3"],
  hook: "Fermented corn sugar, dimerised to lactide and ring-opened into a stiff, clear polyester that prints without warping and composts at 58 °C. In a garden heap, the sea or a hot car it is just another plastic.",
  more: "Carothers made it in 1932 and got nothing useful; the 1960s made it a resorbable suture and bone screw, dissolving to the lactic acid the body already runs on; Cargill made it a commodity in 2002. It is the default filament because it prints at 200 °C on a cold bed, barely shrinks and smells of pancakes, and the clear cold-drink cup because it looks like PET and can be called compostable. The claim holds only in an industrial composter held near 60 °C for twelve weeks; in soil or the sea it lasts years, and in the PET stream it is a contaminant that clouds the bale. Its glass transition is 60 °C, so a print on a dashboard droops, a cup cannot take coffee, and a part creeps under a steady load. It is brittle, and the spool wants a dry box.",
  stats: [["Feedstock", "corn, cane sugar"], ["Tg", "~60 °C"], ["Compost", "industrial only"]],
  uses: "3D printing filament, food service ware, resorbable sutures and screws.",
  link: "https://en.wikipedia.org/wiki/Polylactic_acid",
  src: ["NatureWorks", "https://natureworksllc.com/"]
},
{
  id: "cellacetate", cat: "polymer", name: "Cellulose acetate",
  sub: "acetylated cotton linter or wood pulp", img: "cellacetate", extra: ["cellacetate2", "cellacetate3"],
  hook: "Wood pulp cooked in acetic anhydride: the plastic that replaced nitrate film because it does not burn like it, and the one good spectacles are milled from, coloured through the block. Old film smells of vinegar.",
  more: "Schützenberger made it in 1865 and Kodak sold it as safety film from 1909, though triacetate did not push self-igniting nitrate out of the cinema until 1951. The frame trade starts with a slab: Mazzucchelli in Italy presses coloured flakes into blocks, so a tortoiseshell pattern runs right through and a scratch polishes out; the frame is milled from the sheet, tumbled in wood chips and fitted warm, since it softens at 70 °C and keeps the bend. It is also the cigarette filter, the most littered thing on earth. Its flaw is built in: the acetate groups hydrolyse back to acetic acid, the acid speeds the reaction, and a reel that smells of vinegar is already shrinking in its can. Frames go brittle in the cold and bloom white as plasticiser leaves.",
  stats: [["Base", "plant cellulose"], ["Colour", "through the block"], ["Repolish", "indefinitely"]],
  uses: "Spectacle frames, guitar picks, cigarette filters, photographic film base.",
  link: "https://en.wikipedia.org/wiki/Cellulose_acetate",
  src: ["Library of Congress: film care", "https://www.loc.gov/preservation/care/film.html"]
},
{
  id: "melaminefoam", cat: "polymer", name: "Melamine foam",
  sub: "melamine–formaldehyde resin foam", img: "melaminefoam", extra: ["melaminefoam2"],
  hook: "Melamine-formaldehyde resin foamed to nine kilos a cubic metre, the cell struts as hard as a picnic plate. Sold as a cleaning sponge, it is sandpaper that wears itself out instead of the wall, water only.",
  more: "BASF has foamed it as Basotect since the 1980s for what a polyurethane foam cannot do: it chars rather than burns with nothing added, sits at 200 °C and swallows sound, so it lines train ceilings, aircraft cabins and studio walls. The sponge came later. Japan sold cut blocks of it as a cleaner around 1999, Procter and Gamble boxed the Magic Eraser in 2003, and the mechanism is mechanical: wet, the brittle cell walls break into points finer than any abrasive paper and scour crayon off a wall and tea off a mug while crumbling away. It is also why it removes things you wanted: the sheen off a satin wall, the clearcoat off a car, the print off a dial, and skin if a child gets one. It drinks water and tears like bread, so a block lasts a few rooms.",
  stats: [["Density", "~9 kg/m³"], ["Mechanism", "micro-abrasion"], ["Also", "acoustic absorber"]],
  uses: "Magic-eraser sponges, studio acoustic foam, high-temperature insulation.",
  link: "https://en.wikipedia.org/wiki/Melamine_foam",
  src: ["BASF Basotect", "https://plastics-rubber.basf.com/global/en/performance_polymers/products/basotect"]
},
{
  id: "pva", cat: "polymer", name: "Polyvinyl alcohol",
  sub: "PVOH", img: "pva", extra: ["pva2"],
  hook: "Made from polyvinyl acetate because the alcohol monomer does not exist. A hydroxyl on every other carbon, so it dissolves in water, and how many acetates are left sets how cold: the pod skin goes in the cold fill.",
  more: "Herrmann and Haehnel made it in 1924 by saponifying polyvinyl acetate, and the acetates left behind are the dial: 12 per cent left and it goes in a cold wash, 1 per cent and it needs water near the boil, because the hydroxyls lock into crystals only heat breaks. Most of it sizes warp yarn and washes out after weaving. The rest is the film of the detergent pod and dishwasher tablet, the support a two-head printer dissolves off a PLA part, the laundry bag that opens in the hospital wash and, stretched and stained with iodine, the polariser in every LCD. Dry, nothing stops oxygen like it; damp, it swells and lets everything through. Whether the pod skin degrades in a sewer is argued, humid air makes it tacky, and its glycerol plasticiser sweats out.",
  stats: [["Solubility", "cold or hot grades"], ["Oxygen barrier", "excellent, when dry"], ["Residue", "dissolves away"]],
  uses: "Detergent pods, dissolvable 3D-print supports, embroidery backing, release film.",
  link: "https://en.wikipedia.org/wiki/Polyvinyl_alcohol",
  src: ["Kuraray Poval", "https://poval.kuraray.com/en/"]
},
{
  id: "nafion", cat: "polymer", name: "Nafion",
  sub: "sulfonated tetrafluoroethylene ionomer", img: "nafion", extra: ["nafion2"],
  hook: "Grot's membrane of 1966: a Teflon backbone with sulphonic acid tails that cluster into wet channels, passing protons and nothing else. It made the chlor-alkali cell mercury-free and the hydrogen fuel cell possible.",
  more: "Grot at DuPont copolymerised tetrafluoroethylene with a vinyl ether ending in a sulphonyl group, and the two halves of the chain refuse to mix: the fluorocarbon forms a tough, inert matrix and the acid groups gather into channels that fill with water. Protons hop through the water; chloride, hydroxide and gases barely cross. So it replaced mercury and asbestos in the chlorine cell, and it is the electrolyte of the PEM fuel cell, 330 of them in a Mirai stack, and of the green-hydrogen electrolyser. The costs: it works only wet, so a cell runs below 80 °C on humidified gas; it needs platinum on both faces; it costs hundreds of dollars a metre; it sheds fluoride with age; and it is a PFAS, made with the GenX surfactant that fouled the Cape Fear River.",
  stats: [["Conductivity", "~0.1 S/cm, hydrated"], ["Thickness", "25–180 µm"], ["Needs", "water to work"]],
  uses: "PEM fuel cells, chlor-alkali cells, electrolysers, flow batteries.",
  link: "https://en.wikipedia.org/wiki/Nafion",
  src: ["Nafion (Chemours)", "https://www.nafion.com/en/products/sulfonic-membranes"]
},
{
  id: "pbi", cat: "polymer", name: "PBI",
  sub: "polybenzimidazole", img: "pbi",
  hook: "Marvel's polymer of 1961, spun after the Apollo 1 fire: fused imidazole and benzene rings, no melting point, char at 500 °C. The firefighter's hood that holds in flashover, and the stiffest unfilled plastic sold.",
  more: "Marvel and Vogel made it at Illinois in 1961, and after Apollo 1 burned in 1967 the Air Force paid Celanese to spin it: a gold fibre that will not melt, drip or keep burning, with an oxygen index of 41 against 21 in air. Alone it is limp and wears badly, so it goes 40 per cent into a Kevlar blend, PBI Gold, the outer shell of a turnout coat and the knit hood under the helmet that holds in a flashover where aramid alone shrinks and cracks. The same rings, hot-pressed because nothing melts them, are Celazole, the stiffest and strongest unfilled plastic sold, machined into seals that sit at 300 °C. The costs: several times the price of aramid, it drinks 15 per cent water, sunlight weakens it, and the resin is sintered and machined, never moulded.",
  stats: [["Tg", "427 °C"], ["Melting", "none"], ["LOI", ">41%"]],
  uses: "Firefighter hoods and turnout gear, high-temp seals and bushings, glove liners.",
  link: "https://en.wikipedia.org/wiki/Polybenzimidazole_fiber",
  src: ["Boedeker: Celazole", "https://www.boedeker.com/Family/Celazole"]
},
{
  id: "galalith", cat: "polymer", name: "Galalith",
  sub: "casein formaldehyde, milk-protein plastic", img: "galalith", extra: ["galalith2"],
  hook: "Spitteler and Krische's milk-stone of 1897: skimmed-milk curd pressed into sheet and left in formaldehyde until it sets hard as horn. It took the button and the comb from ivory, and lost them to the washing machine.",
  more: "A litre of skimmed milk gives 30 g of casein; pressed warm into sheet and rod, it goes into formaldehyde that cross-links the protein from the outside in, a millimetre a day, so a thick rod took months. Out of the bath it is dense, takes any dye, marbled to pass for horn, tortoiseshell or ivory, and it polishes beautifully, so it was the button of every coat from 1900 to the 1960s, the comb, the pen barrel and, from the Bengel works in Idar-Oberstein, the Art Deco necklace Chanel sold. The cure is one-way, so it is cut, never moulded, and it is still a protein. It swells and warps in water, so the button cracked in the twin-tub, it dulls when dry, it will not take a hot iron, and the polyester button of the 1950s finished it, bar one Italian maker.",
  stats: [["From", "skim-milk casein"], ["Set by", "formaldehyde soak"], ["Weakness", "swells in water"]],
  uses: "Buttons, combs, knitting needles, fountain-pen trim, Art Deco jewellery.",
  link: "https://en.wikipedia.org/wiki/Galalith"
},
{
  id: "celluloid", cat: "polymer", name: "Celluloid",
  sub: "cellulose nitrate, camphor-plasticised", img: "celluloid", extra: ["celluloid2", "celluloid3"],
  hook: "Hyatt's horn of 1869: cotton nitrated, kneaded with camphor and pressed, the first plastic moulded hot, cut cold. It gave the world the comb, the movie and the ping-pong ball, and it brings its own oxygen to a fire.",
  more: "Parkes showed it in 1862 and went bankrupt on it; Hyatt, chasing a prize for an ivory substitute, found in 1869 that camphor turns cellulose nitrate into a solid that softens at 90 °C and can be rolled, pressed and blown, sliced into sheet for combs that passed for tortoiseshell, dolls, dice and, from 1889, the film that made cinema possible. The nitrate groups are the problem: it burns at fifteen times the rate of wood and keeps burning under water, having its own oxygen, and as it ages it gives off nitric acid that eats the image, glues the reel into a puck and lowers the ignition point to 40 °C. Seventy-one children died at the Glen Cinema, Paisley, in 1929. It survives where feel matters: the guitar pick and the table tennis ball until 2014.",
  stats: [["First thermoplastic", "1860s"], ["Plasticiser", "camphor"], ["Flaw", "burns fiercely"]],
  uses: "Vintage combs and spectacle frames, dice, guitar picks, table-tennis balls, early cine film.",
  link: "https://en.wikipedia.org/wiki/Celluloid"
},
{
  id: "melamine", cat: "polymer", name: "Melamine resin",
  sub: "melamine formaldehyde thermoset", img: "melamine", extra: ["melamine2", "melamine3"],
  hook: "Liebig's melamine of 1834 cured with formaldehyde: an aminoplast hard enough to take a knife and pale enough to carry a print under a clear skin. The picnic plate, the worktop, the whiteboard; never the microwave.",
  more: "American Cyanamid moulded it as Melmac from 1938, and Formica put a melamine-soaked decor paper on its phenolic board the same year, which is why a worktop can have a pattern: the phenolic core is brown, the melamine skin is water-clear and harder than the urea resin it replaced, and the print sits between them. Filled with cellulose and compression-moulded it is the plate that bounced off the canteen floor and the knob on the cooker; as a thin skin it is the whiteboard, the laminate floor and the face of every flat-pack chipboard. The costs: a thermoset, so it chips and never remelts; a knife scores the surface and tea stains the scores; a microwave heats the resin itself, which crazes and sheds formaldehyde.",
  stats: [["Cure", "irreversible thermoset"], ["Surface", "hard, scratch-proof"], ["Never", "microwave it"]],
  uses: "Unbreakable tableware, laminate worktops (Formica), whiteboards, moulded handles and knobs.",
  link: "https://en.wikipedia.org/wiki/Melamine_resin"
},
{
  id: "urearesin", cat: "polymer", name: "Urea-formaldehyde",
  sub: "urea formaldehyde, Beetleware", img: "urearesin", extra: ["urearesin2", "urearesin3"],
  hook: "Pollak's Pollopas of 1924, Beetle in Britain: urea and formaldehyde set to a pale thermoset that took the pastels Bakelite could not. Still the glue in every sheet of chipboard, and the formaldehyde comes back out.",
  more: "Pollak in Vienna sold the clear resin as Pollopas in 1924; the British Cyanides Company filled it with cellulose and moulded it as Beetle from 1928, and Bandalasta picnic sets in mottled pink and green sold to a public tired of brown. It took the white light switch, the toilet seat and the bottle cap, and lost the table to melamine because hot tea crazed it. Its real career is invisible: it is the cheapest wood glue there is, the binder in chipboard, MDF and indoor plywood, set in a hot press in a minute. The bond hydrolyses in the damp, so the board swells and the glue gives, and the resin keeps shedding formaldehyde for years; the cavity-wall foam of the 1970s was banned for it, and the E1 class limits every board sold.",
  stats: [["Cure", "irreversible thermoset"], ["Over Bakelite", "takes pale colours"], ["Flaw", "crazes, off-gasses"]],
  uses: "1920s-30s mottled tableware, bottle caps, electrical fittings, cavity-wall foam, wood glue.",
  link: "https://en.wikipedia.org/wiki/Urea-formaldehyde"
},
{
  id: "pcl", cat: "polymer", name: "Polycaprolactone",
  sub: "PCL, low-melt biodegradable polyester", img: "pcl",
  hook: "A polyester from a seven-membered ring that melts at 60 °C: a handful of pellets goes clear in a mug of hot water and sets hard in your hand. The body takes two or three years to dissolve it, right for an implant.",
  more: "Ring-open caprolactone and you get five methylenes between each ester, a chain flexible enough to melt in hot tap water, with a glass transition of minus 60 so it never goes brittle. Sold as Polymorph and InstaMorph it is the repair you mould by thumb, the dental splint shaped in the mouth and the low-heat 3D print. Implanted, water cuts the esters slowly, two to four years against months for a glycolide, so it is a quarter of the Monocryl suture, the slow-release implant, and the scaffold that cells colonise before it leaves. It also makes the polyols for the toughest polyurethanes. The costs: at 60 °C a part slumps, in a hot car or dishwasher; it is weak, about 20 MPa; it creeps; and it degrades only with water and time, not in a garden heap.",
  stats: [["Melts", "~60 °C"], ["Mouldable", "in hot water"], ["Limit", "creeps when warm"]],
  uses: "Hand-mouldable hobby plastic, 3D-printing supports, drug-release implants, resorbable sutures.",
  link: "https://en.wikipedia.org/wiki/Polycaprolactone"
},
{
  id: "psu", cat: "polymer", name: "Polysulfone",
  sub: "PSU, Udel, transparent high-temp amber", img: "psu",
  hook: "Union Carbide's Udel of 1965: bisphenol A and diphenyl sulphone, rings all along the chain, an amber glass that holds its shape to 170 °C in steam. The hot-food pan, the autoclave tray, the fibre in most dialysers.",
  more: "The sulphone is the stiffest link a chain can carry and the ether beside it lets it move enough to be tough: amorphous, transparent, glassy to 185 °C, so a part keeps its size in boiling water and comes out of a thousand autoclave cycles clear. It is the hot-food pan under a heat lamp, the coffee-machine boiler, the medical tray and, cast from solution into a skin with nanometre pores, the ultrafiltration membrane and the hollow fibre of the dialyser, Fresenius first in 1983 and most since. The costs: a stressed corner cracks when ketones, esters or chlorinated solvents touch it; sunlight yellows it; it must be dried before moulding; it costs several times polycarbonate; and where it is not stiff or clean enough its cousins PES and PPSU take over.",
  stats: [["Service", "-40 to 190 °C"], ["Steam", "autoclavable"], ["Colour", "natural amber"]],
  uses: "Autoclavable medical ware, hot-food pans, membrane supports, former baby bottles.",
  link: "https://en.wikipedia.org/wiki/Polysulfone",
  src: ["Boedeker: polysulfone", "https://www.boedeker.com/Family/Polysulfone"]
},
{
  id: "polystyrene", cat: "polymer", name: "Polystyrene",
  sub: "general-purpose and high-impact grades, the glassy one and the opaque one", img: "polystyrene", extra: ["polystyrene2", "polystyrene3"],
  hook: "The brittle clear plastic of the CD case and, with a little rubber stirred in, the model kit on its sprue. Cheap, glassy, easy to mould, and it cracks rather than bends.",
  more: "Eduard Simon distilled it from storax resin in Berlin in 1839 and set it aside as a curiosity; IG Farben made it in bulk from 1931 and Dow followed. Pure polystyrene is a glass at room temperature, clear, stiff and brittle, with a glass transition near 100 °C, which is why a cup lid comes out of the dishwasher a different shape. Grafting a few per cent of polybutadiene rubber into it gives high-impact polystyrene, opaque and tough enough for a yoghurt pot or a model kit, at the cost of the clarity. It took the radio cabinet from Bakelite and the cheap tumbler from glass. Its weakness is slow: it crazes under a steady load and dissolves in orange peel oil. Polypropylene and PET have most of the packaging now; the CD case and the kit sprue remain.",
  stats: [["Glass transition", "about 100 °C"], ["Clear grade", "stiff, brittle, 2 to 3 per cent strain to break"], ["Ruined by", "orange peel oil, steady load"]],
  uses: "Model kits, CD cases, yoghurt pots, cup lids, lab disposables, the foam of the other card.",
  link: "https://en.wikipedia.org/wiki/Polystyrene",
  src: ["Macrogalleria", "https://www.pslc.ws/macrog/styrene.htm"]
},
{
  id: "catalin", cat: "polymer", name: "Catalin",
  sub: "cast phenolic resin, unfilled, poured into lead moulds", img: "catalin",
  hook: "Bakelite without the filler: phenolic resin poured clear into lead moulds, cured for days, then carved and polished into radios the colour of butterscotch. It shrinks, darkens and keeps selling at auction.",
  more: "The American Catalin Corporation took up the phenolic patents when they ran out in 1927 and left out the wood flour. Without the filler the resin stayed translucent and took dye, so it was cast in lead moulds, cured in ovens for days, then cut, drilled and polished by hand like a stone. Radios, bangles and cutlery handles came out in marbled blues and greens that no moulded Bakelite could manage. The chemistry never quite finishes: the resin keeps condensing, so every Catalin radio has shrunk a few per cent, cracked around its screws and turned from cream to butterscotch. Injection-moulded polystyrene undercut it by 1950. A Fada Bullet cost about forty dollars new; a blue one now fetches several thousand, cracks included.",
  stats: [["Made", "1927 to about 1950"], ["Cure", "days in an oven, then hand finishing"], ["Ages by", "shrinking, cracking, going amber"]],
  uses: "Table radios, jewellery, cutlery handles, chess sets, the collector trade.",
  link: "https://en.wikipedia.org/wiki/Catalin",
  src: ["Plastics Historical Society", "https://plastiquarian.com/?page_id=14317"]
},
{
  id: "boisdurci", cat: "polymer", name: "Bois Durci",
  sub: "sawdust and blood albumen, hot-pressed, 1855", img: "boisdurci",
  hook: "Fine sawdust bound with blood albumen from the Paris slaughterhouses, pressed hot in a steel die into inkstands and portrait medallions. One of the first mouldable plastics; warm, it smells faintly of the abattoir.",
  more: "Francois Charles Lepage patented it in Paris in 1855: rosewood or ebony sawdust mixed with albumen, which was blood from the slaughterhouses or egg white for the pale grades, dried to a powder, then pressed in a heated steel die and left to cool under load. The protein sets and the result is a dense, jet-black moulding with a polish like ebony that takes the finest detail of the die. Medallions of emperors and popes, inkstands and frames came out until production stopped in 1875. It wanted nothing but heat and pressure, forty years before Bakelite, and it has the fault of any protein: damp swells it. Celluloid and then phenolic resin took the trade, and the medallions survive mostly because nobody wanted them enough to throw them away.",
  stats: [["Binder", "blood albumen, or egg white for pale grades"], ["Pressed", "hot steel die, cooled under load"], ["Ruined by", "damp, as any protein is"]],
  uses: "Portrait medallions, inkstands, frames, mourning jewellery; museum cases now.",
  link: "https://www.modip.ac.uk/projects/curators-guide/plastics-materials/bois-durci",
  src: ["Plastics Historical Society", "https://plastiquarian.com/?page_id=14216"]
},
{
  id: "phema", cat: "polymer", name: "Hydrogel (pHEMA)",
  sub: "poly(2-hydroxyethyl methacrylate), two-fifths water", img: "phema", extra: ["phema2"],
  hook: "A plastic that is nearly two-fifths water and holds its shape: the soft contact lens. Dry it is a brittle button; wet it is a clear jelly that lets oxygen through to the cornea.",
  more: "Otto Wichterle made it in Prague in 1961, on a spinning mould built from a child's construction set and driven by a bicycle dynamo. The polymer is a methacrylate with a hydroxyl on every unit, lightly cross-linked, so it swells in water to about 38 per cent and stops there. Dry it is a hard button that can be lathed; soaked it is soft, clear, and passes enough oxygen for a day's wear. Bausch and Lomb licensed it in 1965, and the hard PMMA lens, which passed no oxygen at all, was gone within a decade. The water is also the limit: oxygen travels only through it, so more means thinner or wetter, and both tear. Silicone hydrogels, from 1999, carry the oxygen through the silicone instead, and are what most people now wear.",
  stats: [["Water", "about 38 per cent, swollen"], ["Dry", "hard enough to lathe"], ["Limit", "oxygen only travels through the water"]],
  uses: "Soft contact lenses, wound dressings, drug-release implants, the first artificial corneas.",
  link: "https://en.wikipedia.org/wiki/Polyhydroxyethylmethacrylate",
  src: ["American Academy of Ophthalmology", "https://www.aao.org/eye-health/glasses-contacts/contact-lens-102"]
},
{
  id: "pga", cat: "polymer", name: "Polyglycolic acid",
  sub: "PGA, the first synthetic absorbable suture, 1970", img: "pga", extra: ["pga2"],
  hook: "A polyester the body takes apart on its own schedule: water cuts the chain, the pieces are glycolic acid, and the thread is gone in three months. The first synthetic stitch that did not have to be pulled out.",
  more: "Davis and Geck sold it as Dexon in 1970, after catgut had held the job for two thousand years. Glycolide is ring-opened into a stiff, highly crystalline polyester that melts near 225 °C spun and braided into a thread stronger than silk. Water gets in slowly, hydrolysis cuts the ester links, and the fragments are glycolic acid, which the body already knows how to burn. The schedule is set by the chemistry, not the patient: about half the strength is gone at three weeks and the thread has vanished by ninety days. Catgut, which was sheep intestine and dissolved whenever the enzymes felt like it, lost the market within a decade. The lactide copolymer, Vicryl, braids softer and holds longer; the same chemistry makes screws that leave the bone on their own.",
  stats: [["Strength", "half gone at 3 weeks"], ["Gone", "about 90 days"], ["Ends as", "glycolic acid, burnt by the body"]],
  uses: "Absorbable sutures, bone screws and plates, surgical mesh, drug depots.",
  link: "https://en.wikipedia.org/wiki/Polyglycolide",
  src: ["StatPearls, Suture Materials", "https://www.ncbi.nlm.nih.gov/books/NBK539891/"]
},
{
  id: "nylon11", cat: "polymer", name: "Nylon 11 (Rilsan)",
  sub: "polyamide 11, from castor oil", img: "nylon11",
  hook: "A nylon grown in a field: the monomer comes from castor beans, not oil. It takes up little water and shrugs off fuel and cold, so it makes the broom bristle, the air-brake line and the gas main.",
  more: "Joseph Zeltner at Organico had the route in 1944 and the Rilsan plant at Marseille started in 1955. Castor oil is cracked to 11-aminoundecanoic acid, which polymerises to a nylon with eleven carbons between amides, nearly twice the spacing of nylon 6/6, and far fewer places to hold water. Under 2 per cent water at saturation, where 6/6 takes 8, so it keeps its size in the damp and stays tough in the dry. It is tough at minus 40 °C and indifferent to petrol. Hence the yellow gas pipe, the truck's air-brake tubing, the flagged broom filament and the coated supermarket trolley. The cost is the crop: India grows most of the castor, and the price follows the monsoon. Nylon 12, from butadiene, does nearly the same job, and the two have argued over it since.",
  stats: [["Water uptake", "under 2 per cent, nylon 6/6 takes 8"], ["Cold", "tough at minus 40 °C"], ["Price follows", "the Indian castor crop"]],
  uses: "Gas distribution pipe, air-brake tubing, broom and brush filament, powder coatings, fuel lines.",
  link: "https://en.wikipedia.org/wiki/Nylon_11",
  src: ["Arkema, Rilsan", "https://hpp.arkema.com/en/product-families/rilsan-polyamide-11-resins/"]
},
{
  id: "tps", cat: "polymer", name: "Thermoplastic starch",
  sub: "starch plasticised with water and glycerol, foamed", img: "tps",
  hook: "Packing chips made of corn starch: the same foam shape as polystyrene, but they dissolve on the tongue and go down the drain. Starch melts into a plastic if it is given enough water and glycerol.",
  more: "Native starch does not melt; it chars. Cook it in an extruder with a little water and glycerol and the granules come apart into a thermoplastic that flows and can be foamed or blown into film. Novamont's Mater-Bi, from 1990, blends it with a biodegradable polyester to get something a bag can be made of; the loose-fill chip needs no blending, only the extruder and a drying oven. The chip weighs about the same as the polystyrene one, cushions nearly as well, and is gone in a bucket of water in a minute. The virtue is the limit: it is hygroscopic, goes soft in a humid warehouse, and tastes faintly of popcorn, and the mice agree. It has taken most of the loose-fill trade from expanded polystyrene; for films it needs the polyester, and the price of that.",
  stats: [["Plasticiser", "water and glycerol"], ["Dissolves", "in water, in about a minute"], ["Ruined by", "a humid warehouse, and mice"]],
  uses: "Loose-fill packing, compostable bags with a polyester blend, water-soluble film, edible packaging.",
  link: "https://en.wikipedia.org/wiki/Bioplastic",
  src: ["European Bioplastics", "https://www.european-bioplastics.org/bioplastics/materials/"]
},
{
  id: "corian", cat: "polymer", name: "Solid surface (Corian)",
  sub: "PMMA filled two-thirds with alumina trihydrate", img: "corian",
  hook: "A worktop that is a filled acrylic: two parts of alumina trihydrate in one of PMMA. It joins with no visible seam, sands out its own scratches, and scorches under a hot pan.",
  more: "Donald Slocum at DuPont, 1967, chasing an ivory for sinks. Methyl methacrylate is poured with about 65 per cent of alumina trihydrate and cured in sheets 12 mm thick. The filler gives it the weight and the feel of stone; the acrylic gives it the workability of a dense hardwood: it cuts, routs and thermoforms, and two pieces joined with the same resin and sanded show no seam, so a sink can be part of the counter. A scratch or a cigarette burn is sanded out, which no laminate allows. It is not stone: it softens near 150 °C, so a pan straight off the hob leaves a mark, and it costs about what granite does. Quartz composite, the same idea with polyester and crushed quartz, has the top of the market now.",
  stats: [["Filler", "about 65 per cent alumina trihydrate"], ["Repair", "sand it out"], ["Softens", "near 150 °C, a hot pan marks it"]],
  uses: "Kitchen and lab worktops, integral sinks, hospital surfaces, thermoformed reception desks.",
  link: "https://en.wikipedia.org/wiki/Corian",
  src: ["Corian Design", "https://www.corian.com/"]
},
{
  id: "plastisol", cat: "polymer", name: "PVC plastisol",
  sub: "PVC powder dispersed in plasticiser, fused by heat", img: "plastisol",
  hook: "A liquid that becomes a rubbery solid with nothing but heat: PVC particles suspended in plasticiser, which they drink when warmed to 180 °C. Dip a pair of pliers in it and the handle is made.",
  more: "A plastisol is emulsion-grade PVC, particles about a micron across, stirred into enough phthalate or adipate plasticiser to make a cream. At room temperature the two ignore each other and the mix keeps for months. Past about 160 °C the PVC swallows the plasticiser, the particles fuse, and on cooling there is a soft, tough rubber with nothing lost: no solvent, no water, no curing agent. Hence the dip-coated tool handle and dish rack, the rotationally moulded doll, the raised ink on a printed T-shirt, the soft fishing lure, the seal inside a jar lid. The plasticiser is the whole argument: it migrates, so old plastisol goes stiff and greasy, and the phthalates that did the job best are the ones now restricted.",
  stats: [["Particles", "about 1 micron, emulsion PVC"], ["Fuses", "160 to 180 °C"], ["Ages by", "plasticiser migrating out"]],
  uses: "Dip-coated tool handles, dish racks, soft lures, jar-lid seals, screen-print ink, slush-moulded dolls.",
  link: "https://en.wikipedia.org/wiki/Plastisol",
  src: ["Macrogalleria, dip and slush moulding", "https://pslc.ws/macrog/mpm/composit/fiber/process/sipslush.htm"]
},
{
  id: "pufoam", cat: "polymer", name: "Flexible polyurethane foam",
  sub: "open-cell polyether urethane, 20 to 50 kg per cubic metre", img: "pufoam",
  hook: "The foam in every sofa, mattress and car seat: a polyol and an isocyanate that blow themselves up with the carbon dioxide they make while they set. Ninety-seven per cent air; after a few decades it yellows and crumbles.",
  more: "Otto Bayer's group had the urethane chemistry by 1937; the foam came from a batch that frothed when water got into it, and Bayer sold it from 1952. A polyether polyol and toluene diisocyanate are mixed with a little water and a tin catalyst; water and isocyanate give carbon dioxide, which blows the mass while the rest cross-links into rubber. Ninety seconds later there is a slab of open cells, 97 per cent air, that springs back from a thumb and from a decade of sitting. Within fifteen years it had replaced horsehair and springs in upholstery; it is the most made polymer foam by weight. Its failure is slow and well known: light and oxygen cut the chains, the foam yellows, then crumbles, and the flame retardants added since the 1970s are the dust in the house.",
  stats: [["Density", "20 to 50 kg per cubic metre"], ["Blown by", "its own carbon dioxide"], ["Ages by", "yellowing, then crumbling"]],
  uses: "Mattresses, sofa cushions, car seats, carpet underlay, sponges, packaging.",
  link: "https://en.wikipedia.org/wiki/Polyurethane_foam",
  src: ["Polyurethane Foam Association", "https://pfa.org/what-is-polyurethane-foam/"]
},

/* ---------- METALS & ALLOYS ---------- */
{
  id: "nitinol", cat: "metal", name: "Nitinol",
  sub: "NiTi shape-memory alloy", img: "nitinol", extra: ["nitinol2", "nitinol3"],
  hook: "Buehler's alloy of 1959, nickel and titanium one to one: cool, it folds into a soft crystal; warm, it snaps back to the hard one and its old shape. A tenth of a per cent of nickel moves the switch 10 °C.",
  more: "Buehler at the Naval Ordnance Laboratory wanted a nose-cone alloy; a colleague warmed a folded strip with his pipe lighter and it sprang flat. Cool, it is martensite, which bends 8 per cent by shuffling twins; warm, the austenite re-forms and the shape with it. Set the transition below body heat and the shuffle happens under load and undoes itself after: superelasticity, ten times the stretch of steel, which is the archwire that pulls teeth gently for months, the glasses you sit on, the guidewire that will not kink and the stent crushed into a catheter that opens itself in the artery. The costs: dear, hard on tools, unweldable to steel, nickel leaches from a bad surface, and every melt is a lottery of a tenth of a per cent.",
  stats: [["Recoverable strain", "~8%"], ["Transition", "−20 to 110 °C"], ["Mix", "~55% Ni, 45% Ti"]],
  uses: "Self-expanding stents, eyeglass frames, actuators, orthodontic wire.",
  link: "https://en.wikipedia.org/wiki/Nickel_titanium"
},
{
  id: "invar", cat: "metal", name: "Invar 36",
  sub: "Fe–36Ni", img: "invar", extra: ["invar2", "invar3"],
  hook: "Guillaume's accident of 1896: at 36 per cent nickel the iron shrinks as it loses its magnetism at the rate heat expands it, and the metre bar stops breathing. A Nobel in 1920, and the shadow mask in every colour TV.",
  more: "Guillaume was hunting a cheap substitute for platinum-iridium metre bars when a nickel steel refused to expand: the alloy is magnetic, the magnetism shrinks it, and warming it loses the magnetism at just the rate ordinary expansion grows, so to 100 °C it moves a tenth as much as steel. It became the pendulum rod of the Riefler and Shortt clocks that kept a second a year, the surveyor's tape, the shadow mask behind every colour television, the 0.7 mm membrane of an LNG tank at minus 163 °C, and the mould a carbon wing is cured on, so it comes out the size drawn. The costs: it is soft, weak and heavy; it rusts; it creeps a few parts per million a year unless stabilised; the trick fails above 230 °C; and a point of carbon or a cold bend spoils it.",
  stats: [["CTE", "~1.2 ppm/K"], ["Steel", "~12 ppm/K"], ["Found", "1896, Guillaume"]],
  uses: "Metrology frames, telescope structures, LNG membrane tanks, composite moulds.",
  link: "https://en.wikipedia.org/wiki/Invar"
},
{
  id: "kovar", cat: "metal", name: "Kovar",
  sub: "Fe–29Ni–17Co", img: "kovar", extra: ["kovar2", "kovar3"],
  hook: "Scott's alloy at Westinghouse, 1936: iron with 29 nickel and 17 cobalt, its expansion curve lying on top of borosilicate glass's the whole way. Oxidise it, fuse glass on, and the seal holds vacuum for decades.",
  more: "A glass-to-metal seal cools from 500 °C, and whichever shrinks more cracks it; Howard Scott tuned the nickel and cobalt until the alloy's curve, kinked by its loss of magnetism at 435 °C, followed Corning 7052 down. The metal is oxidised to a film thin enough to show straw colours, because glass wets the oxide and not the bare alloy, then the glass is melted on: the pin header of every valve and transistor can, the window on a laser and an X-ray tube, the feedthrough in a pacemaker, the lid frame of a chip package. The costs: it is magnetic, it conducts heat and current badly so leads are plated gold over nickel, it rusts, cobalt makes it dear, it does not match soda-lime glass, and an oxide a shade too thick peels the seal.",
  stats: [["CTE", "~5 ppm/K"], ["Matched to", "borosilicate"], ["Seal", "hermetic glass-to-metal"]],
  uses: "Vacuum tube and IC packages, laser windows, hermetic feedthroughs.",
  link: "https://en.wikipedia.org/wiki/Kovar"
},
{
  id: "gummetal", cat: "metal", name: "Gum Metal",
  sub: "Ti–Nb–Ta–Zr–O",
  img: "gummetal",
  hook: "Saito's titanium of 2003, Toyota: niobium, tantalum, zirconium and a trace of oxygen, rolled nine tenths flat. It springs 2.5 per cent, has half titanium's stiffness, barely expands hot and will not work-harden.",
  more: "The recipe came from electron counting, 4.24 per atom, numbers the team called magic, and the result sits where the body-centred lattice is about to collapse. Deform it and it does not slip and pile up dislocations as metals do; it shears in broad faults, so it takes 90 per cent cold work without hardening, stretches 2.5 per cent against 0.5 for steel, and its stiffness and size barely change from minus 200 to 250 °C. It went into spectacle frames and precision screws, and into trials as a hip stem soft enough not to waste the bone around it. The costs: tantalum and niobium make it dear, the oxygen must be held to a tenth of a per cent, one anneal undoes the magic, it is no stronger than Ti-6-4, and the mechanism is still argued.",
  stats: [["Elastic strain", "~2.5%"], ["Modulus", "~55–65 GPa"], ["Cold work", "90%+"]],
  uses: "Watch springs, eyeglass frames, medical devices, research curiosities.",
  link: "https://en.wikipedia.org/wiki/Gum_metal"
},
{
  id: "bmg", cat: "metal", name: "Bulk metallic glass",
  sub: "Vitreloy, Liquidmetal", img: "bmg", extra: ["bmg2", "bmg3"],
  hook: "Johnson and Peker's Vitreloy of 1993: five metals so badly matched the melt cannot find a lattice, so at a degree a second it freezes as a glass centimetres thick. Twice titanium's strength, and it snaps like glass.",
  more: "Duwez splat-cooled the first in 1960, and for thirty years metallic glass was a ribbon, the transformer core that cut losses two thirds. Caltech's zirconium, titanium, copper, nickel and beryllium crowd each other so badly that a casting centimetres across stays amorphous: no grains, no dislocations, so it holds 1.9 GPa, bends 2 per cent and gives the energy back, hence the first product, a golf club face. Above its glass transition it softens like a thermoplastic and blow-moulds thin; Liquidmetal cased a flash drive, Apple a SIM tool, and NASA cut gears that run dry at minus 200 °C. The costs: no ductility, one shear band and it is in two pieces; poor fatigue; a few centimetres at most; beryllium; and held hot it crystallises back into a metal.",
  stats: [["Elastic limit", "~2%"], ["Strength", "~1.9 GPa"], ["Structure", "amorphous"]],
  uses: "Phone hinges and SIM tools, watch cases, golf heads, surgical blades.",
  link: "https://en.wikipedia.org/wiki/Amorphous_metal"
},
{
  id: "greyiron", cat: "metal", name: "Grey cast iron",
  sub: "flake-graphite iron", img: "greyiron", extra: ["greyiron2", "greyiron3"],
  hook: "Iron with three per cent carbon that freezes as graphite flakes: the oldest cast metal, fluid enough to fill a lathe bed in one pour and full of cracks that turn vibration into heat. Weak pulled, immortal pushed.",
  more: "Carbon above two per cent will not stay in solution, and with a little silicon it freezes out as graphite flakes threading the iron like cracked mica. The flakes are voids, so it tears at 150 to 400 MPa and never bends, yet carries three times that in compression, and they soak up vibration ten times better than steel, so a lathe bed and a piano frame are cast, not fabricated. The graphite also lubricates the tool and breaks the chip, cools a brake disc, and makes the melt fluid and almost shrink-free, so a skillet and an engine block pour cheap. The costs: brittle, a weld cracks beside the bead, it rusts and cannot be forged; the magnesium treatment of 1943 rolled the flakes into spheres and made ductile iron, for the jobs that had to bend.",
  stats: [["Damping", "~10–20× steel"], ["Tensile", "150–400 MPa"], ["Cost", "cheap"]],
  uses: "Machine tool beds, engine blocks, brake discs, stationary bases.",
  link: "https://en.wikipedia.org/wiki/Gray_iron"
},
{
  id: "becu", cat: "metal", name: "Beryllium copper",
  sub: "C17200", img: "becu", extra: ["becu2"],
  hook: "Copper with two per cent beryllium, aged at 315 °C to the strength of a spring steel while it stays conductive, non-magnetic and spark-shy. The refinery wrench and the connector spring; its dust scars lungs.",
  more: "Beryllium dissolves in hot copper and falls out of it cold, so it is quenched soft, formed, and aged at 315 °C while a fog of precipitates locks the lattice: 1,300 MPa from a metal that started at 500, with a fifth of copper's conductivity left. Struck on steel it throws almost no spark, so it is the wrench in a refinery and the tool that defuses a mine; and it is the Belleville washer, the connector spring in every phone and the mould insert that pulls heat out of a plastic part. The costs: beryllium is dear, and its dust and fume cause berylliosis, a scarring of the lungs with no cure, so it is machined wet and never ground dry; it is stubborn to form once aged; and it is hard to recycle apart from plain copper.",
  stats: [["UTS", "~1300 MPa"], ["Conductivity", "~22% IACS"], ["Sparks", "none"]],
  uses: "Non-sparking tools, springs and contacts, mould inserts, EOD tooling.",
  link: "https://en.wikipedia.org/wiki/Beryllium_copper"
},
{
  id: "mumetal", cat: "metal", name: "Mu-metal",
  sub: "Ni–Fe–Cu–Cr", img: "mumetal", extra: ["mumetal2"],
  hook: "Smith's alloy of 1923: nickel with iron, copper and chromium, annealed until a field finds it 100,000 times easier to cross than air. It does not block a field, it swallows it. Drop a shield and it stops working.",
  more: "It was meant as a tape to load a submarine cable with inductance, and turned out the softest magnetic alloy there was: near-zero magnetostriction and anisotropy, so domain walls move at a whisper. A can of it round a photomultiplier or a SQUID offers the Earth's field a path a hundred thousand times easier than the space inside, and the field goes round; three nested cans with air between take a brain-scanning room down to a nanotesla. The catches are built into the softness: it saturates at 0.8 tesla, so a steel outer shell takes the first bite of a strong field; every bend, cut or drop strains the lattice and the permeability collapses until the part is annealed again at 1,100 °C in hydrogen; and it is mostly nickel, priced like it.",
  stats: [["Rel. permeability", "to ~400,000"], ["Catch", "anneal after forming"], ["Saturates", "early, by design"]],
  uses: "Magnetometer and SQUID shielding, photomultiplier cans, MRI rooms.",
  link: "https://en.wikipedia.org/wiki/Mu-metal"
},
{
  id: "metglas", cat: "metal", name: "Metglas",
  sub: "amorphous Fe–Si–B ribbon",
  img: "metglas", extra: ["metglas2", "metglas3"],
  hook: "Iron, boron and silicon squirted onto a spinning copper wheel: it freezes a million degrees a second as a ribbon 25 microns thick with no crystals. A transformer core that wastes a quarter of what steel did.",
  more: "Allied Chemical made it by the kilometre in the 1970s, pouring the melt through a slot onto the rim of a chilled wheel, and ribbon is still the only form it comes in. With no lattice there is nothing to pin a domain wall, so the hysteresis loop is a sliver and a distribution transformer wound from it loses 70 per cent less at idle, which across a million poles is a power station. The same ribbon, cut to a strip ringing at 58 kilohertz, is the anti-theft tag inside a book, and it cores current sensors and pulse transformers. The costs: it is thin, so a core runs bigger; it saturates at 1.56 tesla against steel's 2; it is brittle once annealed; its magnetostriction hums; and it costs more than the steel it replaces.",
  stats: [["Thickness", "~25 µm"], ["Core loss", "~70–80% below Si steel"], ["Quench", "~10⁶ K/s"]],
  uses: "Distribution transformer cores, current sensors, anti-theft tags.",
  link: "https://en.wikipedia.org/wiki/Amorphous_metal"
},
{
  id: "terfenol", cat: "metal", name: "Terfenol-D",
  sub: "Tb–Dy–Fe",
  img: "terfenol", extra: ["terfenol2"],
  hook: "Clark's alloy, 1971: terbium, dysprosium and iron that grow a fifth of a per cent in a magnetic field, pushing with kilonewtons in microseconds. The Navy wanted louder sonar; it got an actuator with no moving parts.",
  more: "Terbium and dysprosium stretch enormously when magnetised, but only near absolute zero; Clark at the Naval Ordnance Laboratory alloyed both with iron, seven dysprosium to three terbium so their anisotropies cancel, and kept the effect at room temperature: 1,000 to 2,000 parts per million, fifty times nickel, ten times the energy density of a piezoelectric. A rod of it in a coil is a sonar projector, a stack that trims a mirror by a micron and the puck that turns a window pane into a loudspeaker. The costs: a brittle intermetallic that must be kept in compression and biased with a magnet to work at all; rare earths, priced like them; eddy currents heat it above a few kilohertz; and it hystereses, so a position is never quite where it was.",
  stats: [["Strain", "~1000–2000 ppm"], ["Response", "microseconds"], ["Downside", "brittle, costly"]],
  uses: "Sonar projectors, precision positioning, ultrasonic machining, active damping.",
  link: "https://en.wikipedia.org/wiki/Terfenol-D"
},
{
  id: "stellite", cat: "metal", name: "Stellite",
  sub: "cobalt–chromium–tungsten", img: "stellite", extra: ["stellite2", "stellite3"],
  hook: "Haynes's cobalt-chromium of 1907 with tungsten carbides: hard at red heat, it will not gall on itself and does not rust. Too dear and brittle for a whole part, so it is welded onto steel wherever steel would wear.",
  more: "Haynes wanted tarnish-free cutlery and found an alloy that held an edge at red heat; with tungsten and carbon it outran high-speed steel in 1910, and carbides in a cobalt matrix that work-hardens under a blow is still the recipe. Cobalt stays strong where nickel and iron soften, so Stellite 6 is the face of an exhaust valve, the leading edge of a steam-turbine blade, the flight of an extruder screw and the tip on a saw, nearly always a few millimetres of weld on a cheaper body. Vitallium, a cousin, is the denture frame and the hip stem. The costs: cobalt is dear and comes from Congo, the deposit cracks on cooling unless preheated, it can only be ground, the dust is toxic, and in a reactor it turns to cobalt-60, so nuclear plants pay to be rid of it.",
  stats: [["Hardness", "~40–60 HRC"], ["Hot hardness", "holds to red heat"], ["Form", "usually hardfacing"]],
  uses: "Valve seats, extruder screws, turbine erosion shields, cast dental frameworks.",
  link: "https://en.wikipedia.org/wiki/Stellite"
},
{
  id: "wha", cat: "metal", name: "Tungsten heavy alloy",
  sub: "90–97% W, Ni–Fe binder", img: "wha", extra: ["wha2", "wha3"],
  hook: "Tungsten powder with a little nickel and iron, sintered until the binder melts and glues the grains: half again as dense as lead, and it turns on a lathe. Racing-car ballast, the dart barrel, the syringe shield.",
  more: "Pure tungsten is brittle below 400 °C, so for anything that just wants weight the trade packs tungsten powder with 3 to 10 per cent nickel, iron or copper and sinters above the binder's melting point: the liquid wets the grains, pulls them together and freezes into a ductile matrix round the spheres. It machines like a tough steel at 17 to 18.5 grams a cubic centimetre and goes wherever mass must fit a small space: the aileron balance weight, the ballast under a racing car, the dart barrel that lets 26 grams be slim, the syringe shield that replaced lead, and the rod inside an armour-piercing round. The costs: tungsten is dear and mostly Chinese; the nickel-iron grades are magnetic; it will not weld; and a penetrator mushrooms where uranium sharpens.",
  stats: [["Density", "17–18.5 g/cm³"], ["Lead", "11.3 g/cm³"], ["Machinable", "yes"]],
  uses: "Balance weights, radiation collimators, damped boring bars, darts.",
  link: "https://en.wikipedia.org/wiki/Tungsten"
},
{
  id: "superalloy", cat: "metal", name: "Single-crystal superalloy",
  sub: "CMSX-4, René N5", img: "superalloy", extra: ["superalloy2", "superalloy3"],
  hook: "A turbine blade cast as one crystal, grown up a spiral that lets only one grain through: no grain boundaries, so nothing to slide at 1,100 °C. It runs in gas hotter than its own melting point, cooled from inside.",
  more: "Creep is grain boundaries sliding, so Pratt and Whitney removed them: the mould is drawn slowly from the furnace, the grains race upward, and a pigtail spiral lets one through to fill the whole blade. Without boundaries the carbon and boron that pinned them can go, and the alloy is packed to 70 per cent gamma prime, Ni3Al cubes that strengthen as they heat; CMSX-4 adds rhenium to slow diffusion. The blade still sits in gas above its own melting point, so it is cast hollow, bled with cooling air through hundreds of holes and coated in ceramic, while pulling ten tonnes. The costs: rhenium is rarer than gold and engines take most of it; a dent recrystallises into a grain boundary and scraps it; and over thousands of hours the cubes raft into plates.",
  stats: [["Grain boundaries", "zero"], ["Gas path", "above its melting point"], ["Casting", "one seed crystal"]],
  uses: "High-pressure turbine blades and vanes in jet and industrial gas turbines.",
  link: "https://en.wikipedia.org/wiki/Superalloy"
},
{
  id: "maraging", cat: "metal", name: "Maraging steel",
  sub: "18Ni(250), 18Ni(300)",
  img: "maraging",
  hook: "Bieber's steel, 1958: carbon out, 18 per cent nickel in, so it quenches soft enough to machine, then ages at 480 °C and gains a gigapascal without moving. The rocket case, the épée, the rotor nobody may ship.",
  more: "Ordinary steel hardens by trapping carbon in a quench, which warps it; this one has none, so its martensite is soft, and the strength comes later from nickel-molybdenum and nickel-titanium precipitates formed at 480 °C, shrinking it five hundredths of a per cent. So a die is machined finished and then hardened, a motor case is welded and aged whole, and Grade 300 carries 2,000 MPa and stays tough. It is the Minuteman motor case, the uranium-centrifuge rotor, export-controlled to the kilo, and, since a broken blade killed a fencer in 1982, the épée that bends without snapping. The costs: 18 per cent nickel and 8 cobalt is a dear steel; it rusts and must be plated; hydrogen embrittles it; and the strongest grade is brittle at a notch.",
  stats: [["UTS", "1700–2400 MPa"], ["Aging", "~480 °C"], ["Distortion", "minimal"]],
  uses: "Rocket motor cases, tooling and dies, fencing blades, centrifuge rotors.",
  link: "https://en.wikipedia.org/wiki/Maraging_steel"
},
{
  id: "galinstan", cat: "metal", name: "Galinstan",
  sub: "Ga–In–Sn eutectic", img: "galinstan", extra: ["galinstan2"],
  hook: "Gallium, indium and tin, liquid to minus 19 °C: mercury's job without the poison. It wets glass, so the thermometer bore needs a coating, and it eats aluminium, so keep it off the heatsink it was sold for.",
  more: "Gallium melts in the hand; add indium and tin and the melting point drops below a winter night, with no vapour and a third of copper's conductance. Geratherm put it in a glass thermometer in the 1990s as mercury was banned, the bore coated so the metal would not cling; overclockers squeeze it between a processor and its cooler, where it beats any paste; and soft-robotics labs run it through silicone channels as a wire that stretches double and still conducts. The habits are the catch. In air it grows an oxide skin in a millisecond, so a drop sits like a slug and smears grey on everything; it soaks into aluminium along the grain boundaries until the metal crumbles like biscuit, so one drop on a heatsink is the end of it; and indium is dear.",
  stats: [["Melting point", "≈ −19 °C"], ["Density", "6.4 g/cm³"], ["Caution", "destroys aluminium"]],
  uses: "Mercury-free thermometers, liquid metal cooling, stretchable circuitry.",
  link: "https://en.wikipedia.org/wiki/Galinstan"
},
{
  id: "fields", cat: "metal", name: "Field's metal",
  sub: "Bi–In–Sn eutectic",
  img: "fields", extra: ["fields2"],
  hook: "Bismuth, indium and tin: a metal that melts at 62 °C, in a mug of tea, and poisons nobody. It does what Wood's metal did, casting in silicone and letting go at a known temperature, without the cadmium and lead.",
  more: "Wood's metal of 1860 melted at 70 °C and held the sprinkler and the radiotherapy shield for a century, but it is half lead and an eighth cadmium; Simon Field, a science writer, swapped both for indium, and his metal turns up in school labs and kitchens, poured from a cup of hot water into silicone. Bismuth expands as it freezes, so a casting fills every corner and comes out crisp; the same metal fills a thin tube before bending, holds a lens for grinding, and solders to parts that cannot take heat. A link of it parts at a temperature you can trust to a degree, the family's job in a fusible plug. The costs: indium is half the weight and most of the price, a dollar a gram; it is soft; a part left in a sunny car slumps; and it melts in the dishwasher.",
  stats: [["Melting point", "62 °C"], ["Toxicity", "no lead or cadmium"], ["Mix", "Bi 32.5 / In 51 / Sn 16.5"]],
  uses: "Low-temperature casting, prototyping, fusible safety links, demonstrations.",
  link: "https://en.wikipedia.org/wiki/Field%27s_metal"
},
{
  id: "rhenium", cat: "metal", name: "Rhenium",
  sub: "element 75", img: "rhenium",
  hook: "The last stable element found, in 1925, and one of the scarcest: fifty tonnes a year, scrubbed from molybdenum roaster gas. Three per cent in a turbine blade slows creep, so jet engines take most of it.",
  more: "A byproduct of a byproduct: it follows molybdenum through copper ore and leaves the roaster as a volatile oxide that Chile, Kazakhstan and a Polish smelter catch. It melts at 3,186 °C, second only to tungsten, and unlike tungsten it stays ductile cold. In a nickel superalloy it diffuses slower than anything else in the lattice, so 3 per cent, then 6, held the gamma prime cubes in shape for thousands more hours, and when the price touched 10,000 dollars a kilo in 2008 GE designed a blade alloy to use less. The rest is the reforming catalyst behind high-octane petrol, the thermocouple that reads 2,300 °C and the satellite thruster. The costs: tenfold price swings, three supplier countries, and scrapped blades worth more than silver.",
  stats: [["Melting point", "3186 °C"], ["Density", "21.0 g/cm³"], ["In blades", "~3–6%"]],
  uses: "Superalloy blades, rocket thrusters, high-temperature thermocouples, catalysts.",
  link: "https://en.wikipedia.org/wiki/Rhenium"
},
{
  id: "albemet", cat: "metal", name: "AlBeMet",
  sub: "62% Be / 38% Al", img: "albemet", extra: ["albemet2"],
  hook: "Beryllium is the stiffest light metal and nearly unworkable; mixed with 38 per cent aluminium as powder, it machines like aluminium at three times the stiffness. The gimbal, the satellite frame; dust is the price.",
  more: "The metals barely dissolve in each other, so the billet is a mix: beryllium particles for stiffness, aluminium round them for ductility, pressed from powder and extruded. A modulus of 193 GPa at 2.07 grams a cubic centimetre is three and a half times the specific stiffness of aluminium, titanium or steel, and it holds its shape when the temperature swings, so it carries the gyros of an inertial platform, the mirrors of an airborne sight and the avionics of a fighter. Pure beryllium does the same where money is no object: the gilded hexagons of the Webb telescope. The costs: the dust causes an incurable lung disease, so it is machined wet under licence; it stretches 2 per cent and hates a notch; it will not fusion-weld; and it comes from one company.",
  stats: [["Modulus", "~193 GPa"], ["Density", "2.07 g/cm³"], ["Specific stiffness", "~3× aluminium"]],
  uses: "Optical benches, inertial guidance platforms, satellite structures.",
  link: "https://en.wikipedia.org/wiki/Beryllium"
},
{
  id: "ti64", cat: "metal", name: "Ti-6Al-4V",
  sub: "titanium grade 5", img: "ti64", extra: ["ti642", "ti643"],
  hook: "Half of all titanium: six aluminium, four vanadium, steel's strength at half the weight. Its oxide heals itself in a scratch, in seawater and in a femur, where bone grows onto it. It fights the lathe.",
  more: "Aluminium stiffens the hexagonal alpha phase and vanadium holds a little cubic beta between the grains, and the mix forges into the fan blade, the compressor disc, the landing-gear beam and most of the bolts on an airliner, a seventh of a 787. The oxide that forms in milliseconds is what the body sees: no ions, no reaction, and bone cells build on it, so the hip stem, the dental screw and the printed skull patch are this alloy in its low-oxygen grade. The costs: the Kroll sponge is energy-hungry and the metal costs ten times steel; it machines at a crawl, holding heat in the tool and welding to it; it must be welded under argon; it is five times stiffer than bone, which wastes beside it; and a rubbing blade in an engine can catch fire.",
  stats: [["Tensile", "~950 MPa"], ["Density", "4.43 g/cm³"], ["Share", "~half of all Ti used"]],
  uses: "Airframe and engine parts, implants, fasteners, bike frames.",
  link: "https://en.wikipedia.org/wiki/Ti-6Al-4V"
},
{
  id: "al7075", cat: "metal", name: "7075 aluminium",
  sub: "Al–Zn–Mg–Cu, T6 temper", img: "al7075", extra: ["al70752"],
  hook: "Igarashi's Extra Super Duralumin of 1936, flown in the Zero and copied by Alcoa as 7075: aluminium with zinc, magnesium and copper, aged to the strength of mild steel. It will not weld and cracks in salt under load.",
  more: "Quench and age at 120 °C for a day: MgZn2 particles a few nanometres across pin every dislocation, and the T6 temper reaches 570 MPa at a third of steel's weight. Sumitomo got there first for a fighter that had to cross the Pacific; Alcoa's version became the upper wing skin of most aircraft since, the AR-15 receiver, the carabiner, the bicycle stem, the mould plate and the hang-glider tube. The costs are the zinc: the alloy cracks when fusion-welded, so it is riveted or friction-stir joined; in the T6 temper it cracks slowly across the grain under load in salt air, so aircraft moved to the weaker T73; it corrodes faster than any other aluminium and is sold clad in pure metal; and above 120 °C the precipitates coarsen and the strength goes.",
  stats: [["Tensile, T6", "~570 MPa"], ["Density", "2.81 g/cm³"], ["Welding", "essentially not"]],
  uses: "Aircraft spars, rifle receivers, climbing hardware, mould plate.",
  link: "https://en.wikipedia.org/wiki/7075_aluminium_alloy"
},
{
  id: "magnesium", cat: "metal", name: "Magnesium alloy",
  sub: "AZ91 / AZ31", img: "magnesium", extra: ["magnesium2", "magnesium3"],
  hook: "Two thirds the weight of aluminium and the best damper among metals: it die-casts into a laptop lid a millimetre thick in seconds. Chips burn; the casting does not. It rots in salt, and China makes nearly all of it.",
  more: "Magnesium with 9 per cent aluminium, AZ91, is the die-caster's metal: it flows into thin ribs and does not weld to the steel die as aluminium does, so the die lasts and the cycle is seconds, and the part weighs 1.8 grams a cubic centimetre. That is the camera chassis, the laptop case, the steering-wheel armature, the gearbox case and, in the Beetle, 20 kilos of crankcase. It damps vibration ten times better than aluminium. The costs: a steel bolt eats it galvanically, so every part is coated; above 120 °C it creeps unless rare earths are added; chips and powder burn white-hot and water feeds the fire; the melt is blanketed with sulphur hexafluoride, a fierce greenhouse gas; and nine tenths of it comes from Chinese coal-fired retorts.",
  stats: [["Density", "1.74 g/cm³"], ["Damping", "best of structural metals"], ["Casting", "thin walls, fast cycles"]],
  uses: "Laptop and camera bodies, gearbox housings, steering-wheel armatures, drone frames.",
  link: "https://en.wikipedia.org/wiki/Magnesium_alloy"
},
{
  id: "damascus", cat: "metal", name: "Pattern-welded steel",
  sub: "folded laminate, 'Damascus'", img: "damascus", extra: ["damascus2", "damascus3"],
  hook: "Two steels folded and forge-welded into a few hundred layers, then etched so one darkens: the pattern is proof of the weld, not a sharper edge. The old wootz was another thing, one crucible steel with carbide bands.",
  more: "Modern Damascus is pattern welding: a billet of two steels, one with nickel so it stays bright in acid, is drawn out, cut, stacked and welded again until the layers run to hundreds, then twisted or ground so they surface as a figure. The edge is only as good as the harder steel, which is why the serious knife carries a plain high-carbon core and wears the pattern as cladding. The wootz of the Indian swords was a single crucible steel whose carbides gathered into bands as it cooled slowly, and the trick was lost around 1800 when the ore ran out. The costs: a flaw in one of three hundred welds is a crack waiting; the etch is cosmetic and polishes off on the cutting board; and the name sells more steel than the metallurgy earns.",
  stats: [["Layers", "100s–1000s"], ["Pattern", "revealed by acid etch"], ["Original", "wootz, ~300 BC"]],
  uses: "Knives, jewellery, watch cases, gun barrels historically.",
  link: "https://en.wikipedia.org/wiki/Pattern_welding"
},
{
  id: "hadfield", cat: "metal", name: "Hadfield manganese steel",
  sub: "~12% Mn austenitic steel", img: "hadfield", extra: ["hadfield2", "hadfield3"],
  hook: "Hadfield's steel of 1882: 13 per cent manganese, so soft from the quench that no tool cuts it, yet every blow hardens the skin to three times its start while the core stays tough. The crossing nose, the crusher jaw.",
  more: "Quench it from 1,000 °C and the manganese keeps the carbon in austenite, a soft lattice at 200 Brinell that stretches 40 per cent before it breaks. Hit it and the lattice twins and tangles faster than any other steel, so the skin climbs past 500 Brinell while the metal a millimetre down is still soft, and a crack cannot run. That is the railway crossing nose cast in one piece, the jaw plate and cone liner of a rock crusher, the digger tooth and the prison bar that eats the hacksaw. The costs: it cannot be machined, only cast to shape and ground; a part that is never hammered stays soft and wears; and heat it past 300 °C and carbides creep out along the grain boundaries and it goes brittle, so it is welded cold and never flame-cut near an edge.",
  stats: [["Manganese", "11–14%"], ["As-cast", "~200 HB"], ["Worked surface", "~550 HB"]],
  uses: "Railway crossings, rock crusher jaws, excavator teeth, prison bars.",
  link: "https://en.wikipedia.org/wiki/Mangalloy"
},
{
  id: "duplex", cat: "metal", name: "Duplex stainless 2205",
  sub: "half ferrite, half austenite", img: "duplex", extra: ["duplex2", "duplex3"],
  hook: "Half ferrite, half austenite, and the mix beats both parents: twice the yield strength of 316 and far harder to crack in chloride, so a tank wall is half as thick. Weld it too hot and a third phase embrittles it.",
  more: "2205 holds 22 per cent chromium, 5 nickel, 3 molybdenum and a little nitrogen, so it freezes as ferrite and half turns to austenite on cooling. Ferrite brings the yield strength, 450 MPa against 200, and shrugs off stress-corrosion cracking; austenite brings toughness and weldability; and the fine two-phase grain stops a pit from growing. So the chemical tanker's cargo tanks, the platform pipework, the desalination plant and the 650 tonnes of Singapore's Helix Bridge are duplex, thinner and cheaper per year than 316. The costs: between 700 and 950 °C the sigma phase forms in minutes and kills toughness, so weld heat is metered to the kilojoule; below minus 50 °C the ferrite goes brittle; and it work-hardens, so it fights the bender and the drill.",
  stats: [["Yield", "~450 MPa"], ["Phases", "~50/50 α + γ"], ["PREN", "~35"]],
  uses: "Offshore piping, desalination plant, chemical tankers, bridge rebar.",
  link: "https://en.wikipedia.org/wiki/Duplex_stainless_steel"
},
{
  id: "ss316l", cat: "metal", name: "316L stainless",
  sub: "Fe–18Cr–10Ni–2Mo, low carbon", img: "ss316l", extra: ["ss316l2"],
  hook: "The 2 per cent molybdenum buys chloride resistance; the L buys a weld that stays stainless: under 0.03 per cent carbon, so no carbides form by the bead. The default for anything clean, welded and left alone.",
  more: "Hold 316 between 500 and 800 °C, as every weld does beside the bead, and carbon pulls chromium into grain-boundary carbides, leaving a starved band that rusts first: weld decay. Cut the carbon to 0.03 per cent and there is not enough to matter, so the low-carbon grade is welded without an anneal and the molybdenum keeps the pits away in brine and brewery acid. It is the pharma vessel, the orbital-welded gas line in a chip fab, the dairy pipe, the piercing stud and the bone plate, and its atomised powder is the most printed steel. The costs: it is not immune, and in warm chloride under stress it still cracks; it is dearer and softer than 304; it galls, so a stainless bolt seizes in a stainless nut; and a magnet tells it from steel but not from 304.",
  stats: [["Molybdenum", "2–3%"], ["Carbon", "<0.03%"], ["Magnetic", "no, until cold-worked"]],
  uses: "Food and pharma plant, marine fittings, surgical instruments, exhausts.",
  link: "https://en.wikipedia.org/wiki/SAE_316L_stainless_steel"
},
{
  id: "hss", cat: "metal", name: "High-speed steel",
  sub: "M2 / T1 tool steel", img: "hss", extra: ["hss2", "hss3"],
  hook: "Taylor and White's steel of 1900: quenched from a yellow heat, its carbides hold an edge at a dull red, so the lathe ran three times faster. Carbide took the high end; HSS still wins where the tool has to flex.",
  more: "At the 1900 Paris Exposition a Bethlehem lathe cut steel with a tool glowing red, and shop output doubled in a decade. The trick is secondary hardening: 18 per cent tungsten, or the 6 tungsten and 5 molybdenum of the M2 that replaced it, dissolves at 1,250 °C, and a temper at 550 °C precipitates carbides fine enough to hold 65 Rockwell up to 600 °C. It is the twist drill, the tap, the die, the gear hob, the bandsaw tooth and the planer blade. Cemented carbide is twice as hard and cuts five times faster, but it shatters at a shock or a flex, so HSS keeps the long, thin and hand-held tools. The costs: tungsten and cobalt prices; a hardening at 1,250 °C that wants a salt bath or a vacuum furnace; and it is blunt at 700 °C where carbide is still cutting.",
  stats: [["Red hardness", "to ~600 °C"], ["Hardness", "62–67 HRC"], ["Beats carbide at", "toughness"]],
  uses: "Drill bits, taps, milling cutters, hacksaw and bandsaw blades.",
  link: "https://en.wikipedia.org/wiki/High-speed_steel"
},
{
  id: "phosbronze", cat: "metal", name: "Phosphor bronze",
  sub: "Cu–Sn with ~0.2% P", img: "phosbronze", extra: ["phosbronze2", "phosbronze3"],
  hook: "Copper with 5 to 8 per cent tin and a trace of phosphorus to scrub the oxygen out: a spring that does not tire, a bush that does not seize on steel. The relay contact, the guitar string, the bellows.",
  more: "Tin stiffens copper and the phosphorus, added as a deoxidiser, leaves a little hard copper phosphide behind, so the alloy work-hardens into a spring that outlasts brass by far and slides on steel without picking up. The 5 per cent grade is the spring and the contact in every relay, switch and connector; the 8 per cent, wound round steel, is the acoustic guitar string and the antenna wire that carries current and its own weight; the 10 per cent casting is the bearing, the worm wheel and the wartime propeller. The costs: tin is dear and the conductivity drops to 15 per cent of copper; it will not hot-work; it seizes against itself, so the shaft must be steel; and a gear cut from it wears faster than the aluminium bronze that replaced it.",
  stats: [["Tin", "4–10%"], ["Fatigue", "excellent in spring temper"], ["Friction", "low against steel"]],
  uses: "Electrical contacts and connectors, plain bearings, ship propellers, bass strings.",
  link: "https://en.wikipedia.org/wiki/Phosphor_bronze"
},
{
  id: "monel", cat: "metal", name: "Monel 400",
  sub: "~67% Ni, 30% Cu", img: "monel", extra: ["monel2", "monel3"],
  hook: "Two thirds nickel, one third copper, and in 1901 it came out of the Sudbury ore in that ratio. It holds in hydrofluoric acid and in fast seawater, and it does not spark. Dear, gummy on the lathe, faintly magnetic.",
  more: "Monell's metal was an accident of geology: the Sudbury matte smelted to 67 nickel, 30 copper, and the mix stands where neither parent would, in flowing seawater that erodes copper alloys and in hydrofluoric acid that eats stainless. So it is the valve trim, the pump shaft and the strainer of a seawater system, the alkylation unit of a refinery, the roof of the old Pennsylvania Station, the Art Deco screens of the 1920s and, age-hardened as K-500, the drill collar. The costs: nickel makes it five times the price of stainless; in still seawater it pits under a barnacle; sulphur in a flue gas eats it hot; its Curie point sits near room temperature, so a magnet reads it one way in summer and another in winter; and it machines like chewing gum.",
  stats: [["Nickel", "63–70%"], ["Seawater", "resists erosion-corrosion"], ["HF acid", "one of the few"]],
  uses: "Marine shafting and pumps, HF service, cryogenic parts, saxophone necks.",
  link: "https://en.wikipedia.org/wiki/Monel"
},
{
  id: "hastelloy", cat: "metal", name: "Hastelloy C-276",
  sub: "Ni–Mo–Cr superalloy", img: "hastelloy", extra: ["hastelloy2"],
  hook: "Nickel with 16 per cent molybdenum and 15 chromium: molybdenum fights the reducing acids, chromium the oxidising ones, so one vessel holds wet chlorine, hot hydrochloric and sulphuric. Priced like it; worn as skin.",
  more: "Most alloys pick a side. Chromium builds the oxide that survives nitric acid and bleach; molybdenum and tungsten keep the metal whole in hydrochloric acid and chlorides, where chromium loses. C-276 carries both at once, with carbon and silicon kept so low that a weld needs no anneal to stay honest. That is the scrubber of a coal-fired power station, the reactor of a chemical works, the pulp bleach plant and the incinerator liner. Its cousin INOR-8, later Hastelloy-N, held molten fluoride salt in the Oak Ridge reactor. The costs: ten times the price of 316, so a vessel is steel clad with a few millimetres of it; it machines slowly; the filler must match or the weld is the weak spot; and hot hydrofluoric acid still beats it.",
  stats: [["Molybdenum", "~16%"], ["Resists", "oxidising and reducing"], ["Weld", "no post-weld anneal needed"]],
  uses: "Chemical reactors, flue gas scrubbers, pollution control, nuclear reprocessing.",
  link: "https://en.wikipedia.org/wiki/Hastelloy"
},
{
  id: "zamak", cat: "metal", name: "Zamak",
  sub: "Zn–Al–Mg–Cu die casting alloy", img: "zamak", extra: ["zamak2", "zamak3"],
  hook: "Zinc with 4 per cent aluminium, melting at 385 °C, shot from a hot-chamber machine into a steel die that lasts a million cycles. Thread, lettering and a plated finish out of the tool. Keep it cool and pure.",
  more: "The aluminium makes the melt fluid and stops it eating the iron pot, so a steel gooseneck injects it hundreds of times an hour, and the casting comes out in half-millimetre walls with detail no other metal holds. That is the carburettor body, the door handle, the zip pull, the model car, the padlock, the key and the tap under its chrome. The name is the recipe, Zink Aluminium Magnesium Kupfer, and purity is the cure: a trace of lead, tin or cadmium in 1920s zinc let corrosion creep down the grain boundaries until the part swelled and crumbled, and pre-war toys still fall apart in the box. The costs: it creeps above 80 °C; it is heavy for what it carries; it shrinks for years after casting; and a cheap feel follows the name around.",
  stats: [["Melting", "~385 °C"], ["Die life", "~1,000,000 shots"], ["Detail", "as-cast threads"]],
  uses: "Carburettors, locks and keys, model cars, zips, bathroom fittings.",
  link: "https://en.wikipedia.org/wiki/Zamak"
},
{
  id: "sac305", cat: "metal", name: "SAC305 solder",
  sub: "Sn–3.0Ag–0.5Cu", img: "sac305", extra: ["sac3052", "sac3053"],
  hook: "Tin, 3 per cent silver, half a per cent copper: the lead-free solder the whole industry chose in 2006. It melts 34 °C hotter, wets worse, looks dull when it is sound, and without lead the tin whiskers come back.",
  more: "Tin-lead melted at 183 °C and flowed like water; the RoHS ban left tin with silver and copper, melting at 217 °C, so every oven runs at 245 °C and the parts and the board have to take it. The joint freezes grainy and matte, and inspectors had to unlearn shiny as the test of good. The lead did one more job: a few per cent of it stopped pure tin growing whiskers, hair-thin crystals that push out of a tin finish over years and short the next pin, which is why satellites and pacemakers kept their exemption. The costs: silver at 3 per cent is most of the price; the hard intermetallics crack at a drop, so phones use a 1 per cent silver grade; molten tin eats the copper off pads and out of the wave pot; and the extra heat warps a thin board.",
  stats: [["Melting", "217–220 °C"], ["vs Sn63Pb37", "+34 °C"], ["Known issue", "tin whiskers"]],
  uses: "Essentially all consumer electronics assembly since RoHS in 2006.",
  link: "https://en.wikipedia.org/wiki/Solder"
},
{
  id: "tantalum", cat: "metal", name: "Tantalum",
  sub: "Ta, refractory metal", img: "tantalum", extra: ["tantalum2", "tantalum3"],
  hook: "Its oxide grows so thin and even that a sintered speck of powder becomes a capacitor, and so inert that bone grows into it. It melts at 3,017 °C and shrugs off every acid but one. Much of it came out of a war.",
  more: "Anodise tantalum and the oxide stops itself at a few nanometres a volt, a dielectric with no pinholes; sinter the powder into a porous pellet, grow that film over every grain, fill the pores with manganese dioxide, and the capacitor packs more microfarads into a millimetre than anything else, which is why phones and pacemakers are full of them. The same inertness makes it the lining of a hydrochloric acid heat exchanger, the surgical clip and the porous hip cup that bone threads through. The costs: a tantalum capacitor fails short and burns if run near its rated voltage, so it is derated by half; the ore, coltan, funded a war in the Congo and now carries a paper trail; hydrofluoric acid dissolves it; and it is heavy and dear.",
  stats: [["Melting", "3017 °C"], ["Oxide", "Ta₂O₅, self-healing"], ["Body response", "inert"]],
  uses: "Capacitors in every phone, cranial plates, acid-plant heat exchangers, crucibles.",
  link: "https://en.wikipedia.org/wiki/Tantalum"
},
{
  id: "niobium", cat: "metal", name: "Niobium",
  sub: "Nb, superconducting below 9.2 K", img: "niobium", extra: ["niobium2", "niobium3"],
  hook: "At 2 K a niobium cavity carries a radio-frequency field with almost no loss, so accelerators are made of it. Anodised, it shows colours with no dye, from the thickness of its oxide. Nine tenths goes into steel.",
  more: "It has the highest critical temperature of any element, 9.2 K, so a pure niobium cavity in superfluid helium holds a microwave field for a billion cycles and pushes a beam with watts where copper would need megawatts: Jefferson Lab, the European XFEL and the LHC run on it. The oxide is the other trick: a few volts grow a transparent film a few hundred atoms thick, and the colour is interference, so a jeweller dials blue or gold with a power supply. Most niobium sees neither job; a tenth of a per cent in pipeline steel pins the grain and doubles the strength. The costs: a cavity wants metal of absurd purity, then electropolishing and a bake to drive out hydrogen; the helium plant costs more than the cavities; and Brazil mines most of it.",
  stats: [["Tc", "9.2 K"], ["Cavity Q", ">10¹⁰"], ["Anodising", "colour by film thickness"]],
  uses: "Accelerator cavities, MRI magnet wire (as Nb-Ti), HSLA steel, body jewellery.",
  link: "https://en.wikipedia.org/wiki/Niobium"
},
{
  id: "nbti", cat: "metal", name: "Nb-Ti superconductor",
  sub: "niobium–titanium filaments in copper", img: "nbti", extra: ["nbti2", "nbti3"],
  hook: "Niobium with 47 per cent titanium, drawn into thousands of filaments finer than a hair inside copper and twisted. Below 9 K the filaments carry the current; the copper is for the millisecond one of them warms up.",
  more: "Found in 1961 and still the only superconductor ductile enough to draw: a billet of alloy rods in a copper can is extruded and pulled to a wire of six thousand filaments six microns across, then heat-treated so titanium precipitates pin the flux. Every MRI magnet is a few hundred kilometres of it; the LHC used 1,200 tonnes for 8.3 tesla at 1.9 K. The copper is the insurance: when a filament flickers normal, the current steps into the copper and the magnet dumps its energy into a resistor instead of a hole. The costs: liquid helium and a vacuum vessel round each coil; a quench that boils off the helium in seconds; a ceiling near 10 tesla, above which the brittle niobium-tin takes over; and a joint that must be superconducting too, or the field decays.",
  stats: [["Tc", "9.2 K"], ["Field", "to ~10 T"], ["Filaments", "<10 µm each"]],
  uses: "Every MRI scanner, the LHC dipoles, research magnets.",
  link: "https://en.wikipedia.org/wiki/Niobium%E2%80%93titanium"
},
{
  id: "bismuth", cat: "metal", name: "Bismuth",
  sub: "Bi, the benign heavy metal", img: "bismuth", extra: ["bismuth2", "bismuth3"],
  hook: "Heavy as lead and harmless enough to swallow, so it has quietly replaced lead in shot, solder and taps. It expands as it freezes, like water, and grows stepped hopper crystals under a rainbow of oxide. Brittle.",
  more: "It is a by-product of lead and copper refining, mostly in China; its first job is the stomach medicine, and the rest replaces lead wherever lead is banned. Shot for waterfowl since the 1990s, the 138 °C tin-bismuth solder for a board that hates heat, the free-machining brass of a tap and the sprinkler link. Freezing, it grows 3 per cent, so a bismuth alloy casting fills every corner, and a slow-cooled melt throws the hollow stepped crystals collectors buy, their colours an oxide film a few hundred atoms thick. It is the most diamagnetic metal; a chip floats over a magnet. The costs: it is brittle and breaks like glass; it conducts heat worse than any metal but mercury; its supply rides on lead smelting; and it melts at 271 °C, so nothing structural.",
  stats: [["Density", "9.8 g/cm³"], ["On freezing", "expands ~3%"], ["Diamagnetism", "strongest of all metals"]],
  uses: "Lead-free solder and brass, fusible alloys, pigments, Pepto-Bismol.",
  link: "https://en.wikipedia.org/wiki/Bismuth"
},
{
  id: "inconel718", cat: "metal", name: "Inconel 718",
  sub: "Ni–Cr–Nb–Mo age-hardening superalloy", img: "inconel718", extra: ["inconel7182", "inconel7183"],
  hook: "Eiselstein's nickel alloy of 1962: the niobium phase that hardens it forms so slowly that a weld cools before it cracks. That made it the default for the rocket engine and the turbine disc, and now for 3D printing.",
  more: "Most nickel superalloys harden with aluminium and titanium, and the gamma prime forms so fast that the heat of a weld or the strain of an age cracks them. This one carries 5 per cent niobium instead, and its gamma double prime takes hours to appear, so the part is welded or printed soft and aged afterwards to 1,200 MPa, good to 650 °C. That is half the weight of a jet engine, discs, shafts, casings and bolts, the Shuttle main engine's powerhead, the printed SuperDraco thruster and the first wholly printed rocket chambers. The costs: it kills carbide tooling, work-hardening under the cutter and holding the heat in the edge; above 650 °C the double prime slumps into a useless delta phase; and the age is a two-step cycle of eighteen hours per batch.",
  stats: [["Service", "to ~700 °C"], ["Tensile", "~1375 MPa aged"], ["Weldable", "unusually, yes"]],
  uses: "Rocket turbopumps, turbine casings, downhole tools, additive-manufactured parts.",
  link: "https://en.wikipedia.org/wiki/Inconel"
},
{
  id: "cupronickel", cat: "metal", name: "Cupronickel",
  sub: "Cu–10Ni or Cu–30Ni", img: "cupronickel", extra: ["cupronickel2", "cupronickel3"],
  hook: "Copper with 10 or 30 per cent nickel: copper ions leaching from the surface keep barnacles and weed from settling, so a hull or seawater pipe stays clean without paint. Also why most silver coins are not silver.",
  more: "Nickel dissolves in copper without limit, so the alloy is one phase, soft, ductile and weldable, and the nickel with a touch of iron grows a film that seawater does not strip, while enough copper bleeds through to poison anything trying to settle. The 90-10 grade is the seawater pipework of every navy, the condenser tube and the desalination plant; 70-30 goes where the flow is faster. The coin is the same metal because it takes a strike, wears white and does not tarnish in a pocket. The costs: a speed limit, since fast water or sand strips the film and erosion eats the pipe at every bend; a sulphide-polluted harbour ruins the film before it forms; nickel is dear; and bolted to steel it is the noble one, so the steel corrodes for both of them.",
  stats: [["Nickel", "10–30%"], ["Biofouling", "self-resisting"], ["Seawater", "decades of service"]],
  uses: "Ship hull cladding, condenser tubing, seawater piping, coinage.",
  link: "https://en.wikipedia.org/wiki/Cupronickel"
},
{
  id: "ndfeb", cat: "metal", name: "Neodymium magnet",
  sub: "Nd₂Fe₁₄B sintered", img: "ndfeb", extra: ["ndfeb2", "ndfeb3"],
  hook: "Sagawa's 1982 compound, sintered: the strongest permanent magnet made, and why motors, headphones and hard drives shrank. It rusts where the plating chips, fades above 80 °C and shatters when two meet.",
  more: "Neodymium, iron and boron crystallise in a cell that wants its moment along one axis and resists turning it, so a sintered block aligned in a field holds five times the energy of ferrite. That is the hard-drive actuator, the earbud driver, the wind turbine with no gearbox and most electric cars; a thumb-sized block lifts a hundred times its weight. The costs: the bare alloy corrodes along its grain boundaries and crumbles, so every magnet wears nickel or epoxy and dies where the coat chips; the cheap grades lose their field above 80 °C, and holding it to 200 takes dysprosium, which is scarcer still; it is brittle and chips when two slam together, fingers between or not; and nine tenths of it comes from China.",
  stats: [["Energy product", "to 52 MGOe"], ["Max temp", "80–200 °C by grade"], ["Discovered", "1982"]],
  uses: "EV and wind turbine motors, hard drives, speakers, MRI, magnetic couplings.",
  link: "https://en.wikipedia.org/wiki/Neodymium_magnet"
},
{
  id: "alnico", cat: "metal", name: "Alnico",
  sub: "Al–Ni–Co–Fe cast magnet", img: "alnico", extra: ["alnico2", "alnico3"],
  hook: "Iron with aluminium, nickel and cobalt, cast since 1931 and the best magnet until ferrite. Weaker than neodymium but it holds its field to 500 °C, and a pickup still wants it for the gentle way it saturates.",
  more: "Mishima's alloy hardens magnetically by splitting as it cools: held in a field, it separates into iron-cobalt needles in a nickel-aluminium matrix, each needle a tiny bar magnet pointing one way. Cast or sintered, it is hard, brittle and shaped only by grinding, so it comes as the forms it was poured in: the horseshoe, the cow magnet, the magnetron bar, the pickup slug. A Curie point near 800 °C and a field that barely drifts make it the magnet of the sensor, the meter and the travelling-wave tube. The costs: coercivity is low, so a strong external field or a hard knock demagnetises it, and two stored pole to pole weaken each other; cobalt is dear and its price swings; and for force per gram, ferrite is cheaper and neodymium ten times stronger.",
  stats: [["Curie point", "~800 °C"], ["Working temp", "to 500 °C"], ["Coercivity", "low — easily demagnetised"]],
  uses: "Guitar pickups, sensors and magnetrons, hot-environment holding magnets.",
  link: "https://en.wikipedia.org/wiki/Alnico"
},
{
  id: "babbitt", cat: "metal", name: "Babbitt metal",
  sub: "tin or lead matrix with hard crystals", img: "babbitt", extra: ["babbitt2", "babbitt3"],
  hook: "Babbitt's bearing metal of 1839: hard tin-antimony cubes sit in a soft tin matrix that wears away around them, leaving channels for oil and letting grit bury itself. The lining is sacrificed, not the shaft.",
  more: "The structure is the whole idea. Cast against a steel or bronze shell, the alloy freezes as hard antimony-tin cuboids and copper-tin needles in a matrix soft enough to dent with a nail. The soft phase conforms to a shaft that is never quite round, swallows grit before it can score, and if the oil fails it smears and melts at 240 °C instead of seizing; the hard phase carries the load and holds the film. That is the turbine journal and thrust pad, the ship's line shaft, an old engine's big end, and the lining poured and scraped in on site. The costs: it is weak, so it works only as a millimetre on a backing and creeps above 130 °C; it carries almost nothing dry, so it lives or dies with the oil; and the lead grades are poison, so the tin grades won.",
  stats: [["Hardness", "~20–30 HB"], ["Structure", "hard phase in soft matrix"], ["Role", "the sacrificial part"]],
  uses: "Steam and gas turbine journal bearings, large engines, machine tool ways.",
  link: "https://en.wikipedia.org/wiki/Babbitt_(alloy)"
},
{
  id: "corten", cat: "metal", name: "Weathering steel",
  sub: "Cor-Ten, Cu–Cr–Ni–P steel", img: "corten", extra: ["corten2", "corten3"],
  hook: "A steel that rusts on purpose, then stops. Copper and phosphorus make the first rust dense and clinging, not flaky, so it seals the surface and corrosion crawls. No paint, ever. Keep it wet and the trick fails.",
  more: "US Steel sold it in 1933 for coal hoppers, and the trick is in the rust itself: on plain steel the oxide is porous and spalls, baring fresh metal every winter; with half a per cent of copper and a little chromium and phosphorus the inner layer grows tight and amorphous, and after a few years of wetting and drying the loss drops to microns a decade. Hence bridges with no paint budget, Gormley's Angel of the North, the Chicago Picasso, shipping containers and planters. The costs: the patina must dry out, so a sheltered or wet detail, a crevice or a salted road keeps rusting through; for the first years it bleeds orange onto the concrete below; a bolted joint packs rust and jacks itself apart; and sea air salts it and eats it like any other steel.",
  stats: [["Patina", "stable in 2–6 years"], ["Paint", "none required"], ["Fails if", "constantly wet or salted"]],
  uses: "Bridges, sculpture, building façades, shipping containers, planters.",
  link: "https://en.wikipedia.org/wiki/Weathering_steel"
},
{
  id: "zircaloy", cat: "metal", name: "Zircaloy",
  sub: "zirconium–tin cladding alloy", img: "zircaloy", extra: ["zircaloy2", "zircaloy3"],
  hook: "Zirconium with a little tin, chosen because neutrons pass through it, so a fuel rod can be wrapped in metal without poisoning the reaction. Lose the coolant and hot zirconium strips steam and makes hydrogen.",
  more: "Hafnium-free zirconium has a neutron cross-section fifteen times smaller than steel's, so a tube half a millimetre thick holds the uranium pellets and their fission gas for five years at 350 °C in water without stealing the neutrons that pay for it. The tin, iron and chromium are there for creep and corrosion; a fuel assembly is a few hundred such tubes in a zirconium grid, and every water-cooled reactor is full of them. The costs: above 1,200 °C the metal takes oxygen off steam faster than anything can cool it, and the hydrogen it gives off is what blew the roofs off Fukushima; it drinks hydrogen as it corrodes and grows brittle hydride plates; it creeps and bows under irradiation; and getting the hafnium out of the ore is the dear part.",
  stats: [["Neutron capture", "very low"], ["Service", "~350 °C in water"], ["Steam above 1200 °C", "makes H₂"]],
  uses: "Fuel rod cladding and channel boxes in essentially every water-cooled reactor.",
  link: "https://en.wikipedia.org/wiki/Zircaloy"
},
{
  id: "hafnium", cat: "metal", name: "Hafnium",
  sub: "Hf, zirconium's chemical twin", img: "hafnium", extra: ["hafnium2", "hafnium3"],
  hook: "Zirconium's twin, in the same ore and so alike it hid until 1923. It swallows neutrons 600 times more greedily, so the two are painstakingly split: zirconium wraps the fuel, hafnium makes the rods that stop it.",
  more: "The lanthanide contraction leaves hafnium the same size as zirconium, so every zircon crystal carries a few per cent of it and no chemistry tells them apart; the split takes solvent extraction or hundreds of distillation stages, and nuclear zirconium is defined by the hafnium it lacks. The hafnium left over is the control rod of a submarine reactor, strong, corrosion-proof in hot water and good for a decade without swelling. Out of the reactor it is the tip of a plasma cutter electrode, whose oxide emits electrons where copper melts; a per cent in the turbine blade alloy; and as the oxide, the gate dielectric in every chip since 2007. The costs: it is priced like silver, the supply is a by-product of the zirconium trade, and the powder burns.",
  stats: [["Neutron capture", "~600× zirconium"], ["Melting", "2233 °C"], ["Separation", "the hard part"]],
  uses: "Reactor control rods, plasma cutting electrodes, superalloy additive, high-k gate oxide.",
  link: "https://en.wikipedia.org/wiki/Hafnium"
},
{
  id: "hea", cat: "metal", name: "High-entropy alloy",
  sub: "CrMnFeCoNi (Cantor alloy)", img: "hea", extra: ["hea2", "hea3"],
  hook: "Five metals in equal measure and no host element, the opposite of how alloys are designed. Cantor's chromium-manganese-iron-cobalt-nickel gets tougher as it gets colder, which almost no other metal does.",
  more: "Cantor and Yeh's idea of 2004: mixing five elements raises the entropy enough to hold one solid solution where a textbook predicts brittle compounds. It half works: the Cantor alloy is one face-centred cubic phase, and at 77 K it twins under strain instead of cracking, so its toughness climbs past 200 MPa root-metre, better than any cryogenic steel. Every sample is an arc-melted button of a few grams, and the field is a search: refractory ones for turbines, cobalt-free ones for reactors, coatings that resist wear. The costs: cobalt and nickel make it dearer than the steel it would replace; its strength at room temperature is only ordinary; many of the mixtures segregate after all if held hot; and nothing is yet made of it beyond a test bar.",
  stats: [["Elements", "5, near-equiatomic"], ["Toughness at 77 K", "~200 MPa·m½"], ["First reported", "2004"]],
  uses: "Cryogenic structures, research into radiation-tolerant and wear-resistant alloys.",
  link: "https://en.wikipedia.org/wiki/High-entropy_alloy"
},
{
  id: "nb3sn", cat: "metal", name: "Nb3Sn superconductor",
  sub: "A15 intermetallic, reacted after winding", img: "nb3sn", extra: ["nb3sn2", "nb3sn3"],
  hook: "Niobium and tin in the A15 structure stay superconducting past 20 tesla, where Nb-Ti gave up at 10. The catch: the compound is a ceramic in all but name, so the magnet is wound soft and baked into existence.",
  more: "Bend a finished strand and the filaments crack, so the wire is drawn as niobium rods in bronze or tin-cored copper, still ductile, and wound into the coil; then the whole coil sits in a furnace at 650 °C for days while the tin diffuses into the niobium and the superconductor forms in place. After that it is handled like glass: potted in epoxy, never flexed, every joint made before the bake. That is the 900 MHz NMR magnet, ITER's central solenoid and toroidal coils, and the quadrupoles of the high-luminosity LHC near 12 tesla. The costs: the strain sensitivity, since a few tenths of a per cent of stretch kills the current; the heat treatment, which rules out most insulation; a price ten times Nb-Ti; and 18 K still needs liquid helium.",
  stats: [["Critical temperature", "about 18 K"], ["Useful past", "20 T, where Nb-Ti stops"], ["Formed", "after winding, near 650 °C"]],
  uses: "ITER and fusion magnets, high-luminosity LHC quadrupoles, high-field NMR and research magnets.",
  link: "https://en.wikipedia.org/wiki/Niobium%E2%80%93tin"
},
{
  id: "wroughtiron", cat: "metal", name: "Wrought iron",
  sub: "iron with its slag rolled into fibres", img: "wroughtiron", extra: ["wroughtiron2", "wroughtiron3"],
  hook: "Neither steel nor cast iron: near-pure iron with a per cent or two of smelting slag left in and rolled into fibres, so the metal has a grain and tears along it like timber. Not made at scale since the 1970s.",
  more: "The puddler stirred molten pig iron until the carbon burned out and a pasty ball of iron and slag could be lifted, hammered and rolled; the slag never left, it only stretched, so a bar is iron laced with glassy threads. The grain is why it forge-welds so willingly, why old chain and railing bend, not snap, and why a crack runs along a bar before it runs across. Low carbon and a trace of phosphorus are why some of it corrodes so slowly: the Delhi pillar has stood in the rain for sixteen centuries. It built the Menai chains, the Eiffel Tower and every anchor until Bessemer steel undercut it. The costs: weak along the fibre and weaker across it; a quality that varied with the puddler; and now only reclaimed stock, so restoration runs on salvage.",
  stats: [["Carbon", "under 0.1 percent"], ["Slag", "1–2 percent, drawn into fibres"], ["Supply", "reclaimed — no longer made at scale"]],
  uses: "Historic chain, gates and railings; blacksmithing; conservation and restoration work.",
  link: "https://en.wikipedia.org/wiki/Wrought_iron"
},
{
  id: "gallium", cat: "metal", name: "Gallium",
  sub: "Ga, the metal that melts in the hand", img: "gallium", extra: ["gallium2"],
  hook: "Solid on the shelf, liquid in a closed hand: it melts at 29.8 °C, and like water it expands when it freezes. A drop of it left on aluminium runs along the grain boundaries and the aluminium falls apart.",
  more: "Lecoq de Boisbaudran found it in 1875 by two violet lines in a spectrum, and Mendeleev had already written down its density. It is one of the few metals that expand on freezing, by about 3 per cent, so it ships in plastic and not glass, and it supercools so readily that a melted sample sits liquid for days unless seeded. Its own uses are small: the low-melting liquid alloys, galinstan among them, and the gallium arsenide and gallium nitride of the electronic cards, where nearly all of it goes. The thing to know is what it does to aluminium. Liquid gallium wets the grain boundaries and runs along them within minutes, and a solid bar can be crumbled by hand afterwards, which is why airlines will not carry it.",
  stats: [["Melting point", "29.8 °C"], ["On freezing", "expands about 3 per cent"], ["Never near", "aluminium"]],
  uses: "GaAs and GaN wafers, low-melting alloys, high-temperature thermometers, the classroom spoon.",
  link: "https://en.wikipedia.org/wiki/Gallium",
  src: ["WebElements", "https://www.webelements.com/gallium/"]
},
{
  id: "tin", cat: "metal", name: "Tin",
  sub: "Sn, white tin, and the grey powder it becomes in the cold", img: "tin", extra: ["tin2"],
  hook: "Below 13 °C white tin slowly becomes grey tin, a brittle non-metal a fifth less dense, and a pure tin object turns to powder from one spot outward. It cries when bent and does not rust, which is why the can.",
  more: "Bend a bar of pure tin near the ear and it creaks: the crystals twinning, the tin cry. Below 13.2 °C the metallic white form is unstable against grey tin, a non-metal with the diamond structure of silicon, and once a grain nucleates the change spreads as warts and then as dust, fastest around minus 30 °C. Organ pipes in unheated churches have crumbled this way, and it has been blamed, probably wrongly, for Napoleon's buttons and Scott's fuel cans. Lead, antimony or bismuth in the alloy stop it, which is why pewter and old solder never caught it, and why the lead-free solders of the last twenty years had to be checked for it again. Tin itself is soft, low-melting and harmless, and most of it goes into solder and the coating on steel cans.",
  stats: [["Melting point", "232 °C"], ["Tin pest", "below 13 °C, fastest near −30 °C"], ["Stopped by", "a little lead, antimony or bismuth"]],
  uses: "Solder, tinplate, pewter and bronze, the bath that float glass is made on, organ pipes.",
  link: "https://en.wikipedia.org/wiki/Tin_pest",
  src: ["WebElements", "https://www.webelements.com/tin/"]
},
{
  id: "wootz", cat: "metal", name: "Wootz",
  sub: "crucible steel from southern India, the metal of Damascus blades", img: "wootz", extra: ["wootz2"],
  hook: "Steel melted in a sealed crucible, 1.5 per cent carbon, forged slow into a blade with a watered pattern. Nobody made it after 1900: the pattern needed a trace of vanadium nobody knew was in the ore.",
  more: "Indian smiths had it by the first centuries AD: wrought iron, charcoal and plant matter sealed in a crucible and held molten for a day, then cooled slow to a cake. Forged at a dull red and never hotter, the cementite that a steel so rich in carbon throws out gathers into bands, and when the blade is etched the bands show as the watered pattern Europeans named for Damascus. Pattern-welded steel imitates it by folding; wootz is one melt. The art died with the ore. Verhoeven and Pendray showed in 1998 that the banding needs a few hundredths of a per cent of vanadium or molybdenum to form on, and the ore that had it ran out; smiths who bought other iron lost the pattern and did not know why. It is made again now, with the impurity put in on purpose.",
  stats: [["Carbon", "1.5 to 2 per cent"], ["Forged at", "under about 850 °C, or the pattern goes"], ["Needs", "a trace of vanadium in the ore"]],
  uses: "Swords and daggers from Persia to Spain; now reproductions by a handful of smiths.",
  link: "https://en.wikipedia.org/wiki/Wootz_steel",
  src: ["Verhoeven, Pendray and Dauksch, JOM 1998", "https://doi.org/10.1007/s11837-998-0419-y"]
},
{
  id: "kanthal", cat: "metal", name: "Kanthal",
  sub: "iron-chromium-aluminium resistance wire", img: "kanthal",
  hook: "The wire in a toaster or a kiln: iron with 22 per cent chromium and 5 aluminium that grows its own skin of alumina when hot, and so runs red for years in air. It is brittle after its first heating.",
  more: "Hans von Kantzow in Hallstahammar patented it in 1931 as a cheaper rival to nichrome, and it turned out to go hotter: nichrome protects itself with a chromia scale good to about 1200 °C, FeCrAl with an alumina scale good to 1400, and alumina neither evaporates nor grows as fast. It is ferritic, magnetic, and resistive enough that a short coil does the job. Its vice is that the first heating coarsens the grains, and the wire that was ductile off the spool is glass-brittle ever after, so an element is formed once and left alone, and a kiln element that has been knocked is dead. The alumina scale also takes the aluminium out of the wire, a little each time it spalls and regrows; an element dies when there is none left to make skin with.",
  stats: [["Service", "to about 1400 °C in air"], ["Resistivity", "1.45 µΩ·m"], ["After first heating", "brittle, do not bend"]],
  uses: "Toasters, hair dryers, pottery kilns, furnace elements, the coils in e-cigarettes.",
  link: "https://en.wikipedia.org/wiki/Kanthal_(alloy)",
  src: ["Kanthal A-1 datasheet", "https://www.kanthal.com/en/products/material-datasheets/wire/resistance-heating-wire-and-resistance-wire/kanthal-a-1/"]
},
{
  id: "galvanised", cat: "metal", name: "Galvanised steel",
  sub: "steel dipped in molten zinc, which then rusts in its place", img: "galvanised", extra: ["galvanised2"],
  hook: "Steel pulled through zinc at 450 °C comes out with a coat that corrodes instead of the steel, even at a scratch, and the crystals of it show as spangle. It lasts about as many years as the coat is micrometres thick.",
  more: "The name honours Galvani; the thing is Sorel's patent of 1837: clean the steel in acid, flux it, dip it, and the zinc alloys with the iron at the interface in layers harder than the steel, with pure zinc on top. Zinc is more active than iron, so wherever both meet water the zinc dissolves first and the steel is a cathode, which is why a cut edge or a scratch stays sound for years. The flat spangle crystals are zinc that froze slowly on the way out of the bath; modern strip lines quench it to a fine grain that takes paint. The coating goes at about a micrometre a year in clean country air and several times that beside the sea, and nothing happens to the steel until it is gone. Welding burns it off, and the zinc fume gives the welder a day of fever.",
  stats: [["Bath", "about 450 °C"], ["Coating", "45 to 100 µm hot dip, 7 to 25 µm on strip"], ["Lasts", "roughly 1 µm a year in clean air"]],
  uses: "Guard rails, pylons, roofing, nails and bolts, car body strip, buckets.",
  link: "https://en.wikipedia.org/wiki/Hot-dip_galvanization",
  src: ["American Galvanizers Association", "https://galvanizeit.org/hot-dip-galvanizing/what-is-hot-dip-galvanizing-hdg/hdg-process"]
},
{
  id: "tinplate", cat: "metal", name: "Tinplate",
  sub: "steel sheet under a micron of tin, the can", img: "tinplate",
  hook: "A quarter-millimetre of steel under 0.1 to 1.5 micrometres of tin a side, electroplated, and the can is lacquered inside anyway. The tin is for solder and shine; the steel is the can.",
  more: "Dipped tinplate came out of Bohemia in the 1600s and Wales made most of the world's by 1890; the electrolytic lines of the 1930s cut the tin to a tenth and made the modern can possible. Tin is not sacrificial to steel in air, so a scratch rusts, and a coat that thin has pores; the can is protected by its lacquer and by the fact that inside a sealed can, with fruit acid and no oxygen, the polarity reverses and the tin becomes the anode and dissolves slowly instead of the steel. That is why a can of tomatoes has a shelf life rather than a hole. Tinplate solders and welds well, takes print, and is drawn and ironed into a two-piece can at hundreds a minute. It is also the most recycled packaging there is, because a magnet pulls it out of anything.",
  stats: [["Steel", "0.15 to 0.5 mm"], ["Tin", "0.1 to 1.5 µm a side, electroplated"], ["Inside", "lacquer, or the tin goes"]],
  uses: "Food cans, paint tins, aerosol cans, bottle caps, toy trains.",
  link: "https://en.wikipedia.org/wiki/Tinplate",
  src: ["ArcelorMittal Packaging", "https://packaging.arcelormittal.com/"]
},
{
  id: "ductileiron", cat: "metal", name: "Ductile iron",
  sub: "cast iron with its graphite rolled into balls", img: "ductileiron", extra: ["ductileiron2", "ductileiron3"],
  hook: "Grey iron with a pinch of magnesium in the ladle: the graphite freezes as spheres instead of the flakes that made cast iron snap, and the casting stretches 18 per cent before it breaks. Every manhole cover since 1950.",
  more: "Keith Millis at INCO found it in 1943 looking for a wartime substitute for chromium, and it was on sale by 1949. Flake graphite in grey iron is a network of internal cracks, which is why that iron is strong in compression and brittle in everything else. Add about 0.04 per cent magnesium just before pouring, and the graphite grows as nodules in a matrix of ferrite or pearlite; the matrix carries the load and the nodules stop nothing. It casts as easily as grey iron, machines nearly as well, and has the strength and ductility of mild steel at a fraction of the price of a steel casting. The magnesium boils off violently and fades in minutes, so the pour cannot wait. A pipe of it survives falling off the lorry; grey iron does not.",
  stats: [["Elongation", "up to 18 per cent; grey iron under 1"], ["Magnesium", "about 0.04 per cent, added at the ladle"], ["Fades", "in about ten minutes"]],
  uses: "Water mains, manhole covers, crankshafts, wind turbine hubs, pump housings.",
  link: "https://en.wikipedia.org/wiki/Ductile_iron",
  src: ["Ductile Iron Pipe Research Association", "https://www.dipra.org/ductile-iron-pipe-resources/technical-publications"]
},
{
  id: "tungsten", cat: "metal", name: "Tungsten filament",
  sub: "drawn tungsten wire, coiled twice, in the lamp", img: "tungsten", extra: ["tungsten2"],
  hook: "A wire of the metal with the highest melting point, 3422 °C, run at 2700 and thinner than a hair, coiled and coiled again. It was made ductile in 1909 by a trick with potassium, and it evaporates until it breaks.",
  more: "No furnace melts it; it is pressed from powder, sintered by current through the bar, then swaged and drawn hot until it will draw cold. Coolidge got that far in 1909; the next problem was sag: a pure wire run white-hot recrystallises, the grains slide and the coil droops. The cure, found by accident, was a trace of potassium in the powder, which ends up as rows of bubbles that pin the grain boundaries so the grains grow long and interlocking. A 60-watt filament is 46 micrometres across and half a metre long, coiled into a coiled coil 2 centimetres long, in argon to slow the evaporation; the halogen lamp puts the tungsten back by a chemical cycle and runs hotter. The thin spot that evaporates fastest gets hotter still, and that is where it breaks.",
  stats: [["Melting point", "3422 °C"], ["Runs at", "about 2700 °C, 2 per cent of the power as light"], ["Dies by", "evaporation, at the thinnest point"]],
  uses: "Incandescent and halogen lamps, electron-gun cathodes, vacuum furnace elements, TIG electrodes.",
  link: "https://en.wikipedia.org/wiki/Incandescent_light_bulb",
  src: ["Edison Tech Center", "https://edisontechcenter.org/incandescent.html"]
},
{
  id: "zincanode", cat: "metal", name: "Zinc anode",
  sub: "a lump of zinc bolted on to corrode instead of the hull", img: "zincanode", extra: ["zincanode2"],
  hook: "A block of zinc bolted to the shaft or hull dissolves in the seawater so that the steel and bronze do not. Replaced when half gone; if it looks new after a season, something is wrong with the wiring.",
  more: "Davy proposed it for the copper sheathing of Navy ships in 1824 and it worked too well: the protected copper fouled with weed, since copper only stays clean by poisoning what lands on it. Zinc sits below steel, bronze and aluminium in the galvanic series, so when all are wet and connected the zinc is the anode and the rest cathodes, and the current, a few milliamps per square metre of steel, is the corrosion of the zinc and nothing else. The alloy matters: a few thousandths of a per cent of iron make the zinc passivate under its own white crust and stop working, so anode zinc is held purer than that, with a little aluminium and cadmium to keep it active. Aluminium anodes give more amp-hours a kilo; magnesium is for fresh water, where zinc goes to sleep.",
  stats: [["Potential", "about −1.05 V against Ag/AgCl in seawater"], ["Capacity", "about 780 Ah per kg"], ["Iron", "a few thousandths of a per cent at most, or it passivates"]],
  uses: "Boat hulls and shafts, outboard legs, pipelines, pier piles, water heater tanks.",
  link: "https://en.wikipedia.org/wiki/Galvanic_anode",
  src: ["AMPP", "https://www.ampp.org/technical-research/what-is-corrosion/cathodic-protection"]
},
{
  id: "indium", cat: "metal", name: "Indium",
  sub: "In, the metal that wets glass", img: "indium", extra: ["indium2", "indium3"],
  hook: "Dents under a fingernail and wets glass, which no other metal does: a wire of it crushed between two flanges seals a vacuum at liquid helium temperature. Most of it goes into the clear electrode of every screen.",
  more: "Reich and Richter found it in zinc ore in 1863 by an indigo spectral line. It melts at 157 °C, stays ductile down to absolute zero, and cold-welds to itself under finger pressure, so a seal is made by laying a wire in a groove, bolting down, and not minding the squeeze. Where rubber goes glassy and metal gaskets need tonnes, an indium wire takes a few hundred kilograms of force and seals helium at 4 K; it is also the solder for things that cannot stand heat, joining gold without dissolving it and glass without flux. There is no indium mine. It comes as a by-product of zinc refining, about 900 tonnes a year, and most of it is sputtered as indium tin oxide onto glass for displays and touch screens, and lost when the screen is. It too cries when bent.",
  stats: [["Melting point", "157 °C"], ["Hardness", "about 1 on Mohs, cut with a knife"], ["Supply", "a by-product of zinc, no mine of its own"]],
  uses: "Vacuum and cryogenic seals, low-temperature solder, ITO on every screen, bearings in aero engines.",
  link: "https://en.wikipedia.org/wiki/Indium",
  src: ["Chemicool", "https://www.chemicool.com/elements/indium.html"]
},

/* ---------- CERAMICS & GLASS ---------- */
{
  id: "ytzp", cat: "ceramic", name: "Zirconia (Y-TZP)",
  sub: "yttria-stabilised ZrO₂", img: "ytzp", extra: ["ytzp2", "ytzp3"],
  hook: "Zirconia with 3 per cent yttria, a ceramic that fights back: the stress at a crack tip flips the grains into a bulkier phase, and the swelling clamps the crack shut. The 1975 paper on it was titled Ceramic steel?",
  more: "Pure zirconia changes structure on cooling and shatters itself; a little yttria freezes the fine grains in the hot tetragonal form, poised but unable to change. A crack's tip lets them go: each grain swells 4 per cent as it turns monoclinic, and the crowd of swollen grains squeezes the crack closed. Hence a ceramic with the toughness of cast iron, white and polishable: the bearing ball, the dental crown milled from a block and sintered, the knife that holds an edge for years, the lambda sensor in the exhaust, where the same oxide conducts oxygen ions. The costs: steam at 150 to 300 °C triggers the transformation slowly from the surface, so a hip ball can crumble in the body; it is heavy for a ceramic; and a knife of it chips if dropped.",
  stats: [["Flexural strength", "900–1200 MPa"], ["Toughness", "5–10 MPa·m½"], ["Mechanism", "transformation toughening"]],
  uses: "Bearing balls, knives and scissors, dental crowns, oxygen sensors.",
  link: "https://en.wikipedia.org/wiki/Yttria-stabilized_zirconia"
},
{
  id: "cbn", cat: "ceramic", name: "Cubic boron nitride",
  sub: "cBN, borazon", img: "cbn", extra: ["cbn2", "cbn3"],
  hook: "Boron nitride pressed into the diamond lattice: second only to diamond in hardness, and better for the job that matters. Carbon dissolves into hot steel; boron nitride does not. So it cuts hardened steel.",
  more: "Wentorf made it at General Electric in 1957, two years after the first synthetic diamond, by the same press-and-catalyst trick with hexagonal boron nitride for graphite. A diamond tool on steel above 700 °C dissolves, its carbon diffusing into the iron; cubic boron nitride holds to 1,300 °C and stays inert, so a tip of it brazed on a carbide insert turns a hardened gear or bearing race at 60 Rockwell to a finish that used to need grinding. The grinding wheel is the other half of the trade: grit in a metal or resin bond, outlasting alumina a hundredfold on tool steel. The costs: a tip the size of a rice grain costs more than the insert under it; it is brittle, so an interrupted cut chips it; and below 45 Rockwell, carbide is cheaper and just as good.",
  stats: [["Hardness", "~45 GPa"], ["Stable in steel to", "~1300 °C"], ["Diamond in steel", "chemically fails"]],
  uses: "Hard-turning inserts, grinding wheels, finishing hardened gears and bearings.",
  link: "https://en.wikipedia.org/wiki/Boron_nitride"
},
{
  id: "b4c", cat: "ceramic", name: "Boron carbide",
  sub: "B₄C", img: "b4c", extra: ["b4c2", "b4c3"],
  hook: "The third-hardest material known, lighter than aluminium, and boron-10 swallows neutrons, so the same black powder turns up in rifle plates and control rods. Hit it hard enough and it goes soft; that is the catch.",
  more: "It leaves the electric furnace as a black boule, crushed to grit or pressed into tiles, and at 2.5 grams a cubic centimetre it is the lightest thing that stops a bullet: a hot-pressed plate on a fibre backing shatters the round and spreads the load, which is why body armour left steel for this. The boron-10 isotope has a cross-section of 3,800 barns, so the pellets in a control rod or the sheet round a neutron experiment are the same stuff by another route. The costs: above a threshold near 20 GPa the crystal collapses into amorphous bands and the plate goes soft, so armour-piercing rounds get through where slower ones do not; it is hard to sinter, so dense tiles need pressing at 2,100 °C; and it is dearer than silicon carbide, its rival in armour.",
  stats: [["Hardness", "~30 GPa"], ["Density", "2.52 g/cm³"], ["Bonus", "neutron absorber"]],
  uses: "Armour plate, blast nozzles, control rods, lapping abrasive.",
  link: "https://en.wikipedia.org/wiki/Boron_carbide"
},
{
  id: "sic", cat: "ceramic", name: "Silicon carbide",
  sub: "SiC", img: "sic", extra: ["sic2", "sic3"],
  hook: "Acheson's accident of 1891: coke and sand fused into crystals that grind anything short of diamond. Hard, stiff, inert, and carries heat. It polishes to a mirror, outlasts a brake disc and switches power in cars.",
  more: "Carbon and silicon bond like diamond, so the solid is hard, light and stiff, and unlike most ceramics it carries heat, so a mirror of it holds its figure and a seal face does not crack. It is also a wide-gap semiconductor, so a transistor of it switches a thousand volts and runs hot, and an electric car's inverter lost half its losses moving to it from silicon. The grit is in sandpaper and the brake disc, the sintered body in the pump seal, the kiln furniture and the Gaia and ELT mirrors; carborundum built Acheson's fortune. The costs: a crystal grows from vapour at 2,400 °C over weeks, so a wafer costs tens of times silicon; it is brittle and hard to machine, so the shape is made before sintering; and it burns slowly in air above 1,000 °C to silica.",
  stats: [["Conductivity", "120–270 W/m·K"], ["Hardness", "~25 GPa"], ["Sublimes", "~2700 °C"]],
  uses: "Telescope mirrors, carbon-ceramic brakes, mechanical seals, power semiconductors.",
  link: "https://en.wikipedia.org/wiki/Silicon_carbide"
},
{
  id: "zerodur", cat: "ceramic", name: "Zerodur",
  sub: "lithium-aluminosilicate glass-ceramic", img: "zerodur", extra: ["zerodur2", "zerodur3"],
  hook: "A glass seeded with crystals that shrink as the glass round them expands. The two cancel, leaving a size that ignores temperature, the only way a four-metre mirror holds its figure. Cast by Schott since 1968.",
  more: "Melt a lithium aluminosilicate glass, cast a block, then heat it for months at 800 °C while titania seeds nucleate crystals a tenth of a micron across, until three quarters of the block is crystal that shrinks on heating and the rest glass that grows. Tuned, the two cancel to a few parts per billion per kelvin from 0 to 50 °C, so the mirror keeps its figure as the night cools, polishes to a nanometre and never creeps. That is the VLT's four 8.2-metre mirrors, the ELT's 798 segments, the ring laser gyro and the lithography stage. The costs: a four-metre blank takes a year to anneal and a lorry to move; it is brittle glass, dropped it is gone; the expansion is zero only at the temperature it was tuned for; and it is dearer per kilo than most metals.",
  stats: [["CTE", "≈ 0 ± 0.02 ppm/K"], ["Polish", "sub-nanometre"], ["Blanks", "4 m+"]],
  uses: "Telescope mirror blanks, lithography stages, gyroscope and metrology bodies.",
  link: "https://en.wikipedia.org/wiki/Zerodur"
},
{
  id: "macor", cat: "ceramic", name: "Macor",
  sub: "machinable glass-ceramic",
  img: "macor",
  hook: "Corning's glass-ceramic of 1972: mica flakes grown in a glass, interlocked so a crack dies at every flake. It drills, taps and turns on an ordinary mill, then runs at 800 °C in a vacuum.",
  more: "Most ceramics are shaped soft and fired, shrinking a fifth on the way, so a precise part means diamond grinding afterwards. Macor is fired first: a fluorine-mica glass is cast, then heat-treated until half of it is tiny interlocking mica plates. A cutting edge splits a plate along its cleavage and the crack dies at the next, so the material comes away as dust like a soft stone, with carbide tooling and no coolant. It holds vacuum, insulates to 40 kilovolts a millimetre, takes a thread and does not outgas. That is the one-off fixture in the vacuum chamber, the laser spacer, the insulator with an odd hole pattern due tomorrow. The costs: a third the strength of alumina; it conducts heat badly; it is dear per block; and above 800 °C the mica lets go.",
  stats: [["Continuous use", "800 °C"], ["Porosity", "zero"], ["Tooling", "standard metalworking"]],
  uses: "Vacuum feedthroughs, laser and plasma fixtures, precision insulators.",
  link: "https://en.wikipedia.org/wiki/Macor"
},
{
  id: "aln", cat: "ceramic", name: "Aluminium nitride",
  sub: "AlN, Shapal", img: "aln", extra: ["aln2"],
  hook: "An insulator that moves heat almost like aluminium: 180 watts a metre-kelvin against 30 for alumina. Under the chips of a power module it drains the watts and holds off the volts. Water turns it back to alumina.",
  more: "The lattice is light and stiff with strong bonds, so phonons run through it almost unhindered: a pure crystal carries 320 watts a metre-kelvin, a sintered tile with its oxygen 170, within a factor of two of aluminium, while a 6 electron-volt band gap keeps it an insulator. That is the tile between a traction inverter's silicon carbide dies and their copper, the chuck that holds a wafer at an even 600 °C, the package under a radio-frequency transistor and, with boron nitride added, the machinable Shapal. The costs: it is sintered at 1,800 °C with yttria to pull the oxygen out, and every tenth of a per cent left halves the conductivity; it hydrolyses, so a wet tile smells of ammonia and grows an alumina skin; and it costs ten times alumina.",
  stats: [["Conductivity", "90–180 W/m·K"], ["Electrically", "insulating"], ["Shapal", "machinable grade"]],
  uses: "Power electronics substrates, heater chucks, RF packages, heat spreaders.",
  link: "https://en.wikipedia.org/wiki/Aluminium_nitride"
},
{
  id: "cordierite", cat: "ceramic", name: "Cordierite",
  sub: "2MgO·2Al₂O₃·5SiO₂",
  img: "cordierite", extra: ["cordierite2", "cordierite3"],
  hook: "Magnesium aluminosilicate that barely expands when heated, so it goes cold to glowing without cracking. Extruded into a honeycomb of 400 cells to the inch, it is the brick inside almost every catalytic converter.",
  more: "The crystal expands along two axes and shrinks along the third, so a body of random grains barely moves: 1 part per million per kelvin, a tenth of steel. Corning worked out in 1973 how to extrude a paste of talc, clay and alumina into a honeycomb with walls a tenth of a millimetre, fire it and coat it with the platinum washcoat: kilometres of channel in a brick the size of a tin, where the exhaust goes from 20 °C to 900 in a minute, forty thousand times. The same body is the diesel filter, with alternate channels plugged, the kiln shelf, the pizza stone and the stove baffle. The costs: it melts at 1,460 °C, so a filter burn-off that runs away slumps it; it is porous and weak, so the brick lives wrapped in a mat; and sulphur and alkali attack it.",
  stats: [["CTE", "~1–2 ppm/K"], ["Thermal shock", "excellent"], ["Form", "extruded honeycomb"]],
  uses: "Catalytic converter and diesel filter substrates, kiln furniture, heat shields.",
  link: "https://en.wikipedia.org/wiki/Cordierite"
},
{
  id: "alon", cat: "ceramic", name: "AlON & transparent spinel",
  sub: "“transparent aluminium”", img: "alon", extra: ["alon3"],
  hook: "Transparent aluminium is real: aluminium oxynitride, cubic grains and no glass between, so light passes as through one crystal. Four times harder than glass, it stops a round that pierces laminate twice as thick.",
  more: "Alumina is hexagonal, so every grain boundary bends the light and a sintered body is white; add nitrogen and the lattice turns cubic, the same to light in every direction, and with the pores pressed out the polycrystal is as clear as sapphire from ultraviolet to 5 microns. Spinel, magnesium aluminate, does the trick a little cheaper. Hardness near sapphire means a laminate of it on a polycarbonate back stops a 0.50 round at half the thickness and weight of glass, and a dome of it lets an infrared seeker see out at Mach 3 without sandblasting away. The costs: a panel is hot-pressed, then ground and polished for weeks, so it costs more per square foot than any window; sizes stop below a metre; and it is still a ceramic, so a scratch is a crack waiting.",
  stats: [["Hardness", "~80% of sapphire"], ["Transmits", "~0.2–5 µm"], ["vs. laminated glass", "thinner, lighter"]],
  uses: "Transparent armour, IR missile domes, scratch-proof windows, scanner platens.",
  link: "https://en.wikipedia.org/wiki/Aluminium_oxynitride"
},
{
  id: "pyro", cat: "ceramic", name: "Pyrolytic graphite",
  sub: "oriented CVD carbon", img: "pyro", extra: ["pyro2"],
  hook: "Carbon laid down layer by layer from hot methane, so the sheets lie flat: a hundred times more conductive along the sheet than through it, and the most diamagnetic solid known. It floats over desk magnets.",
  more: "At 2,000 °C the gas cracks on a graphite mandrel and the carbon lands as graphene layers parallel to the surface, stacked but skewed; anneal under pressure at 3,000 °C and they line up into highly oriented pyrolytic graphite, near a single crystal in the sheet. Along the sheet it carries heat better than copper, across it worse than steel, and electrons circling in the plane repel any magnet, so a square of it hovers over a grid of neodymium cubes on a desk. It is the heat spreader in a laptop, the crucible for a melt that must stay clean, the X-ray and neutron monochromator, and the coating on a mechanical heart valve. The costs: it grows at microns an hour; it cleaves with a thumbnail; and across the sheet it insulates the heat you wanted out.",
  stats: [["In-plane", "~1700 W/m·K"], ["Through-plane", "~100× lower"], ["Levitates", "at room temperature"]],
  uses: "Heat spreaders, crucibles, X-ray optics, neutron monochromators, desk toys.",
  link: "https://en.wikipedia.org/wiki/Pyrolytic_carbon"
},
{
  id: "alumina", cat: "ceramic", name: "Alumina",
  sub: "Al₂O₃, 96–99.8%", img: "alumina", extra: ["alumina2", "alumina3"],
  hook: "White powder, pressed and fired: the workhorse ceramic, the one in every spark plug. Hard, stiff, inert, an insulator at red heat, and cheap enough to throw at problems finer ceramics solve more elegantly.",
  more: "The Bayer process makes a hundred million tonnes of alumina a year, nearly all smelted into aluminium; the few per cent sintered instead become the hardest common ceramic, 96 per cent grade with a glassy binder for the spark plug and the substrate, 99.8 for the pump seal and the hip ball. It is harder than hardened steel, insulates at a thousand volts a millimetre while the plug glows, and shrugs off acids, alkalis and molten metal; it is also the core of a dental crown and the tile in an armour vest. The costs: a fracture toughness a tenth of steel's, so a part is designed never to see tension; a fifth shrinkage on firing, so precision means diamond grinding; and middling conduction, so a thermal shock cracks it where silicon carbide survives.",
  stats: [["Hardness", "~15 GPa"], ["Max use", "~1700 °C"], ["Cost", "the cheap option"]],
  uses: "Spark plug insulators, circuit substrates, wear liners, pump seals, armour plate.",
  link: "https://en.wikipedia.org/wiki/Aluminium_oxide"
},
{
  id: "sapphire", cat: "ceramic", name: "Sapphire",
  sub: "single-crystal Al₂O₃", img: "sapphire", extra: ["sapphire2", "sapphire3"],
  hook: "Alumina grown as one crystal instead of sintered powder, and everything changes: clear from ultraviolet to infrared, second in hardness only to diamond. Iron and titanium make it blue; pure, it is water-clear.",
  more: "Verneuil dripped alumina powder through a flame in 1902 and built a boule drop by drop; Kyropoulos pulled one slowly from a melt and got 300 kilograms of flawless crystal, which is how it is done now. The crystal is hexagonal, so it is cut by the wafer-load for the LED, where gallium nitride grows on its face and lights every white bulb; for the watch glass that cannot be scratched; the checkout scanner window; the window of a diamond anvil cell and the dome of a missile seeker. The costs: it is brittle, so a thin phone screen of it shatters where strengthened glass flexes, which is why that plan died in 2014; it is cut and polished with diamond only, so a part is dear; and it is birefringent, so an optical window must be cut on the right axis.",
  stats: [["Hardness", "9 Mohs"], ["Transmits", "0.15–5.5 µm"], ["Grown as", "boules up to ~200 kg"]],
  uses: "Watch crystals, scanner windows, LED substrates, high-pressure cell windows, endoscopes.",
  link: "https://en.wikipedia.org/wiki/Sapphire"
},
{
  id: "fusedsilica", cat: "ceramic", name: "Fused silica",
  sub: "amorphous SiO₂", img: "fusedsilica", extra: ["fusedsilica2", "fusedsilica3"],
  hook: "Glass with everything else taken out. Pure silica barely expands, passes deep ultraviolet, and loses so little light that a signal survives a hundred kilometres of it, which is the basis of the internet.",
  more: "Melt quartz, or better burn silicon tetrachloride in a flame and collect the soot: a glass of one oxide, no sodium to soak up ultraviolet, no boron to creep, a network so tight it expands a twentieth as much as window glass. A rod with a germanium-doped core, drawn at 2,000 °C into a fibre finer than a hair, loses a fifth of a decibel a kilometre, so an undersea cable needs an amplifier every hundred kilometres; the semiconductor furnace tube, the lithography lens and the telescope mirror blank are the same glass, as were the Gravity Probe B gyroscope rotors, round to forty atoms. The costs: it is soft for a glass and scratches; it has to be worked at 2,000 °C in an oxy-hydrogen flame; and it is dear, because purity costs more than any additive.",
  stats: [["CTE", "~0.55 ppm/K"], ["Optical loss", "~0.2 dB/km"], ["Purity", "parts per billion"]],
  uses: "Optical fibre, UV optics, semiconductor process ware, gyroscope rotors, mirror substrates.",
  link: "https://en.wikipedia.org/wiki/Fused_quartz"
},
{
  id: "gorilla", cat: "ceramic", name: "Chemically strengthened glass",
  sub: "Gorilla Glass and relatives", img: "gorilla", extra: ["gorilla2"],
  hook: "Soak glass in molten potassium salt and fat potassium ions take sodium's places, wedging it into compression. A crack cannot open in a skin squeezed shut: the phone survives the table and dies on the kerb.",
  more: "Corning sold it as Chemcor in 1962 and nobody wanted it, until a phone needed a thin hard face in 2007. The aluminosilicate sheet goes into a potassium salt bath at 400 °C for hours; each potassium ion is a third bigger than the sodium it replaces, so the outer 50 microns end up under 800 megapascals of compression and the core in tension to balance. A flaw in the skin stays shut until the load beats the squeeze, so the sheet bends further and takes a harder knock than glass ten times as thick. The costs: the skin is thin, so a sharp grain on a kerb gets under it and the stored tension does the rest, all at once, across the whole screen; it still scratches, since sand is harder; and cut or ground after the bath, it loses the stress at the edge.",
  stats: [["Compression depth", "~30–100 µm"], ["Surface stress", "up to ~1 GPa"], ["Method", "ion exchange"]],
  uses: "Phone and watch cover glass, laptop screens, vehicle glazing, appliance fronts.",
  link: "https://en.wikipedia.org/wiki/Gorilla_Glass"
},
{
  id: "borosilicate", cat: "ceramic", name: "Borosilicate glass",
  sub: "Pyrex, Duran", img: "borosilicate", extra: ["borosilicate2", "borosilicate3"],
  hook: "Boron oxide loosens the silica network enough to cut its expansion by two thirds, so it goes from a flame into water without splitting. Schott made it in 1893 for the lab; Corning cast the Palomar mirror in 1934.",
  more: "Soda-lime glass expands nine parts per million per kelvin, so the hot face of a beaker tries to grow while the cold back holds it, and it cracks; with 13 per cent boron oxide and little soda the number falls to three, and the beaker survives a 160-degree shock. That made it the glass of the lab, the oven dish, the thermometer, the halogen bulb and the vaccine vial, which it suits twice over, since it sheds no sodium into the drug; the 20-ton Palomar disc took a year to cool. The costs: it melts hotter, so it costs more to make and blow; it tempers badly, so American kitchen Pyrex since the 1990s is tempered soda-lime instead, and shatters on a wet counter where the old dishes did not; and boron is a toxic emission at the furnace.",
  stats: [["CTE", "~3.3 ppm/K"], ["Soda-lime", "~9 ppm/K"], ["Thermal shock", "~160 K"]],
  uses: "Laboratory glassware, cookware, lighting, telescope mirror blanks, sight glasses.",
  link: "https://en.wikipedia.org/wiki/Borosilicate_glass"
},
{
  id: "si3n4", cat: "ceramic", name: "Silicon nitride",
  sub: "Si₃N₄", img: "si3n4", extra: ["si3n42", "si3n43"],
  hook: "Sintered into a felt of interlocking needle grains: the toughest ceramic, light, and barely expands with heat. A ball of it weighs 40 per cent of steel, runs faster in a steel race and never welds to it.",
  more: "Fired hot enough, the powder dissolves and regrows as long beta needles that lock together, so a crack must wind round every grain; the result is the ceramic that takes a hammer blow and a 1,000 °C shock. The bearing ball is the big job: at 3.2 grams a cubic centimetre it has half the centrifugal load of steel, so a spindle runs faster, cooler, and ceramic on steel cannot micro-weld, so the hybrid bearing survives lost oil. It is also the turbo rotor that spools in half the time, the glow plug that heats in two seconds, the welding nozzle and the insert that turns cast iron dry. The costs: it is sintered under nitrogen with a glassy additive at 1,800 °C, so a part is dear; it is still brittle; and grinding a bearing finish costs more than the ball.",
  stats: [["Density", "3.2 g/cm³"], ["Thermal shock", "excellent"], ["Bearings", "run dry, faster"]],
  uses: "Hybrid and ceramic bearings, turbocharger rotors, glow plugs, cutting tools, weld nozzles.",
  link: "https://en.wikipedia.org/wiki/Silicon_nitride"
},
{
  id: "hbn", cat: "ceramic", name: "Hexagonal boron nitride",
  sub: "hBN, “white graphite”", img: "hbn",
  hook: "Graphite with every other atom swapped for boron or nitrogen: soft, slippery and white. It machines, lubricates at 900 °C, insulates and carries heat. Pressed at 60,000 atmospheres, it is the second-hardest solid.",
  more: "The sheets are held together by almost nothing, so they slide, which is the lubricant and the machinability; unlike graphite the electrons stay in the boron-nitrogen bonds, so the sheet insulates with a 6 electron-volt gap, and it needs no oxygen to stay slippery. Hot-pressed into a block it is the crucible that molten aluminium and glass will not wet, the setter under a sintering run, the insulator in a plasma chamber; as a powder it is the mould release, the dry-film spray and the glide in a face powder. The costs: a hot-pressed block is soft and porous and soaks up water, which blows it apart when heated fast; it oxidises above 900 °C in air; the sheet grades are anisotropic, strong one way; and the powder is dear for a lubricant.",
  stats: [["Hardness", "soft — it is a lubricant"], ["Electrically", "insulating"], ["Lubricates to", "~900 °C"]],
  uses: "Crucibles and setters, mould release, high-temperature lubricant, plasma chamber parts.",
  link: "https://en.wikipedia.org/wiki/Boron_nitride"
},
{
  id: "pzt", cat: "ceramic", name: "PZT",
  sub: "lead zirconate titanate", img: "pzt", extra: ["pzt2", "pzt3"],
  hook: "A lead perovskite that is not quite symmetric, poled once: squeeze it and it makes a voltage, feed it a voltage and it moves nanometres, forever. Every ultrasound scan, fuel injector and parking sensor has a piece.",
  more: "Jaffe's 1954 find: at 52 per cent zirconium the crystal sits between two distorted forms and cannot decide, so a field tips it easily and the response is three times barium titanate's. Fire the disc, silver it, pole it at 150 °C in a kilovolt a millimetre so the domains line up, and it stays so: a buzzer and a lighter spark, a sonar array and a 128-element medical probe, a hundred-layer stack that opens a diesel injector in 100 microseconds, and the microscope stage that moves a hundredth of a nanometre. The costs: it is 60 per cent lead oxide and exempt from the lead bans only because nothing lead-free matches it; it depoles above 350 °C or in a strong reverse field; and the strain is a tenth of a per cent, so a big move needs a lever.",
  stats: [["Strain", "~0.1%, sub-nm resolution"], ["Response", "microseconds"], ["Force", "very high"]],
  uses: "Ultrasound transducers, fuel injectors, nanopositioners, sonar, buzzers, igniters.",
  link: "https://en.wikipedia.org/wiki/Lead_zirconate_titanate"
},
{
  id: "batio3", cat: "ceramic", name: "Barium titanate",
  sub: "BaTiO₃", img: "batio3", extra: ["batio32", "batio33"],
  hook: "A perovskite with its titanium off centre, polarised with no field, a dielectric constant in the thousands where glass manages five. Stacked in hundreds of layers, it is the commonest component on earth.",
  more: "Below 120 °C the cubic cell stretches a per cent and the titanium shifts toward one oxygen, so each cell is a dipole and the grain polarises easily, which is what a capacitor wants. Tape-cast a micron thick, printed with nickel, stacked five hundred high, cut and fired, it is the multilayer ceramic capacitor: three trillion a year, a thousand in a phone, microfarads in a grain of rice. Doped with lanthanum it conducts until its Curie point, then its resistance jumps a thousandfold: the self-regulating heater and the resettable fuse. The costs: the dielectric constant falls with temperature, voltage and age, so the label value is the best case; it is piezoelectric, so a board full of them sings; and a bent board cracks one and shorts the rail.",
  stats: [["Dielectric constant", "~1000–7000"], ["Layer thickness", "<1 µm"], ["Made", "trillions per year"]],
  uses: "Multilayer ceramic capacitors, PTC thermistors, transducers, non-volatile memory.",
  link: "https://en.wikipedia.org/wiki/Barium_titanate"
},
{
  id: "wc", cat: "ceramic", name: "Cemented carbide",
  sub: "WC–Co hardmetal", img: "wc", extra: ["wc2", "wc3"],
  hook: "Tungsten carbide grains glued with cobalt: a ceramic with a metal binder, nearly as hard as a ceramic but does not shatter like one, and twice as stiff as steel. Made in 1923 for the dies that draw lamp filament.",
  more: "Mix micron carbide powder with 6 to 15 per cent cobalt, press it and sinter at 1,400 °C: the cobalt melts, wets every grain and pulls the compact dense, a skeleton of carbide in a thin ductile web. Harder than any steel at 1,600 Vickers, three times as stiff, and the cobalt lets it take a shock that would split a pure ceramic: the insert in every lathe and mill, the masonry drill tip, the wire-drawing die it was invented for, the rock-bit button, the ballpoint ball and the ring that cannot be cut off a finger. The costs: cobalt is dear, toxic as dust and, like tungsten, comes mostly from one or two countries; more cobalt means tougher and softer; it weighs 15 grams a cubic centimetre; and it is shaped only by diamond grinding or spark erosion.",
  stats: [["Hardness", "~1600 HV"], ["Stiffness", "~2× steel"], ["Binder", "6–15% cobalt"]],
  uses: "Cutting inserts and drills, drawing dies, rock bits, wear parts, anti-vibration bars.",
  link: "https://en.wikipedia.org/wiki/Tungsten_carbide"
},
{
  id: "uhtc", cat: "ceramic", name: "Ultra-high-temperature ceramics",
  sub: "ZrB₂, HfB₂, HfC", img: "uhtc", extra: ["uhtc2", "uhtc3"],
  hook: "Zirconium and hafnium borides and carbides melt near 3,900 °C, as high as anything, and keep their strength there. They are what you use when a leading edge at Mach 8 must stay sharp instead of rounded to survive.",
  more: "Above Mach 5 a sharp nose cannot shed its heat, so the Shuttle and every capsule flew blunt and pushed the shock out in front; a sharp edge flies further and turns tighter but its tip runs past 2,000 °C, where no metal and no ordinary ceramic lasts. The diborides, hot-pressed with 20 per cent silicon carbide, do: the boride carries the heat away, the carbide grows a silica skin that slows oxidation, and a strake came back from a Mach 7 test with its edge. The same powders are the throat insert of a solid rocket and the electrode of a plasma torch. The costs: they are dense and brittle, and a thermal shock cracks them; the skin fails above 1,700 °C as the boria boils off; sintering needs 2,000 °C and a press; and nothing of this is cheap or large.",
  stats: [["Melting", "~3200–3900 °C"], ["HfC", "~3950 °C"], ["Enables", "sharp hypersonic edges"]],
  uses: "Hypersonic leading edges, rocket nozzle inserts, plasma electrodes, reactor components.",
  link: "https://en.wikipedia.org/wiki/Ultra-high-temperature_ceramics"
},
{
  id: "li900", cat: "ceramic", name: "LI-900 silica tile",
  sub: "Shuttle thermal protection", img: "li900", extra: ["li9002", "li9003"],
  hook: "Silica fibres sintered where they cross into a block that is 94 per cent air. Heat finds no path through it, hence the famous photograph of a technician holding a tile by its edges while the middle still glows.",
  more: "Lockheed made it from pure silica fibres a few microns across, slurried, pressed and fired until they fused where they touched; it weighs 144 kilograms a cubic metre, a ninth of water, and conducts heat like still air. Glazed black to radiate, 20,000 of them covered the Shuttle's belly, each cut to its own numbered shape, and a tile took 1,260 °C on its face while the aluminium under it stayed below 175. The costs: it is as fragile as meringue, so a tile is glued to a felt pad to let the airframe flex under it, and a dropped tool or a lump of foam gouges it; it drinks water and was waterproofed after every flight; each tile was fitted by hand; and a lost tile over a hot spot was the difference between landing and not.",
  stats: [["Density", "144 kg/m³"], ["Air", "~94%"], ["Surface", "~1260 °C in use"]],
  uses: "Orbiter thermal protection, furnace insulation, high-temperature standoffs.",
  link: "https://en.wikipedia.org/wiki/Space_Shuttle_thermal_protection_system"
},
{
  id: "tbc", cat: "ceramic", name: "Thermal barrier coating",
  sub: "plasma-sprayed YSZ", img: "tbc", extra: ["tbc2", "tbc3"],
  hook: "A porous, cracked zirconia layer a quarter-millimetre thick on a turbine blade, on purpose: the gaps let it stretch, and it drops the metal under it by 150 °C. Every jet engine runs hotter than its blades can stand.",
  more: "Yttria-stabilised zirconia conducts heat a tenth as well as the superalloy under it and expands almost as much, as no other ceramic does. Plasma-sprayed, it lands as splats with cracks and pores between; evaporated on, it grows as columns, and either way the gaps let the layer breathe when the blade goes from cold to 1,400 °C in seconds. Under it an aluminium-rich bond coat grows a slow alumina scale that glues the ceramic on. With cooling air through the blade too, the gas runs 200 °C above the metal's melting point. The costs: the scale thickens every hour until the coating pops off, so a blade has a life; molten sand from a volcano or a desert runway soaks into the pores and shatters it on cooling; and the layer is thin, so a nick is bare metal.",
  stats: [["Thickness", "~0.1–0.5 mm"], ["Metal temperature", "−100 to −150 °C"], ["Structure", "porous by design"]],
  uses: "Turbine blades and vanes, combustors, exhaust components, diesel piston crowns.",
  link: "https://en.wikipedia.org/wiki/Thermal_barrier_coating"
},
{
  id: "cvddiamond", cat: "ceramic", name: "CVD diamond",
  sub: "grown from methane plasma", img: "cvddiamond", extra: ["cvddiamond2", "cvddiamond3"],
  hook: "Diamond grown atom by atom from a glowing methane plasma, in plates, not gems. It conducts heat better than anything known, five times copper, insulates electrically and passes light from ultraviolet to radar.",
  more: "At a few tens of millibar a microwave plasma splits hydrogen and a per cent of methane, and on a hot seed carbon lands as diamond, since atomic hydrogen eats graphite faster than diamond; a polycrystalline plate grows at microns an hour, a single crystal on a diamond seed ten times faster. A disc of it is the window of a gyrotron that heats a fusion plasma with a megawatt of microwaves, the heat spreader under a radar transistor or a laser diode, the exit window of a synchrotron beamline, the scalpel honed to an atom, and now the gem in the ring at a tenth the mined price. The costs: a plate takes days and tens of kilowatts; it is still brittle; the polycrystalline grades are opaque until polished for weeks; and above 700 °C in air it burns.",
  stats: [["Thermal conductivity", "~2000 W/m·K"], ["Copper", "~400 W/m·K"], ["Electrically", "insulating"]],
  uses: "Laser and X-ray windows, heat spreaders for power devices, anvils, surgical blades.",
  link: "https://en.wikipedia.org/wiki/Synthetic_diamond"
},
{
  id: "quartzxtal", cat: "ceramic", name: "Quartz crystal",
  sub: "piezoelectric SiO₂", img: "quartzxtal", extra: ["quartzxtal2", "quartzxtal3"],
  hook: "Cut right, a sliver of quartz rings at a pitch that barely drifts with heat. Etched into a fork at 32,768 hertz, two to the fifteenth, it halves down to one tick a second. Every clock and computer counts on one.",
  more: "Quartz is piezoelectric, so a plated wafer driven at resonance rings with a quality factor in the hundreds of thousands, and Cady showed in 1921 that it holds an oscillator to parts per million. The AT cut, 35 degrees off the axis, has a frequency curve flat at room temperature; the fork, at 32 kilohertz, fits a watch and draws nanoamps. The crystal is grown in an autoclave at 350 °C and a thousand atmospheres onto a seed plate, a millimetre a day, since natural quartz has too many twins. The costs: it drifts 20 parts a million over a year as it ages, so a watch gains or loses a minute; it is temperature sensitive away from its turnover point, so a precision oscillator lives in an oven; and a dropped crystal cracks.",
  stats: [["Watch fork", "32,768 Hz"], ["Stability", "~±20 ppm"], ["Drift", "seconds per month"]],
  uses: "Every quartz watch and clock, oscillators in nearly all digital electronics, mass sensors.",
  link: "https://en.wikipedia.org/wiki/Crystal_oscillator"
},
{
  id: "yag", cat: "ceramic", name: "Nd:YAG",
  sub: "neodymium-doped yttrium aluminium garnet", img: "yag", extra: ["yag2", "yag3"],
  hook: "A synthetic garnet with no natural twin, pulled from a melt and seeded with neodymium that stores pump light and lets it go in step. It made the laser a factory tool: 1,064 nanometres, invisible, through steel.",
  more: "Geusic made it lase at Bell Labs in 1964; the garnet is hard, conducts heat well enough to take kilowatts of pump light, and holds its neodymium in a site that gives sharp lines and almost no loss. Flash-lamps once pumped it; now diode bars do, and the rod has become a slab or a thin disc. That is the laser that cuts and welds steel, marks every serial number, drills turbine-blade cooling holes, ranges the target, removes the tattoo and, doubled to green, points at the stars for adaptive optics. With cerium instead, it is the yellow phosphor in every white LED. The costs: a boule is pulled over weeks at 1,970 °C from an iridium crucible; it lenses as it heats, so beam quality falls with power; and fibre lasers took the big cutting jobs.",
  stats: [["Wavelength", "1064 nm"], ["Form", "grown rod or disc"], ["Host for", "Nd, Yb, Er, Ce"]],
  uses: "Industrial cutting and welding lasers, rangefinders, surgery, LED phosphor (Ce:YAG).",
  link: "https://en.wikipedia.org/wiki/Yttrium_aluminium_garnet"
},
{
  id: "sodalime", cat: "ceramic", name: "Soda-lime glass",
  sub: "SiO₂–Na₂O–CaO", img: "sodalime", extra: ["sodalime2", "sodalime3"],
  hook: "Nine tenths of all glass. Soda drops the melting point of silica by 700 °C; lime stops the result dissolving, which is what soda alone makes: water glass. Window, bottle, jar and bulb, for three thousand years.",
  more: "Silica melts at 1,700 °C, beyond any ancient furnace, and plant ash brought it down to what charcoal could reach; the sodium breaks the network, and the glass flows at 1,000 °C. Soda glass alone dissolves in rain, so 10 per cent lime stiffens the network again. Pilkington floated it on molten tin in 1959 and gave every window the same flat face; a bottle machine presses and blows one a second. It is cheap because sand, soda and limestone are, and it recycles for ever, since cullet melts easier than raw batch. The costs: it expands nine parts per million per kelvin, so a hot dish shatters in the sink; it breaks into daggers unless toughened; it blocks the ultraviolet a greenhouse wants; and the furnace burns gas night and day for fifteen years.",
  stats: [["Melt", "~1500 °C"], ["Expansion", "9 × 10⁻⁶ /K"], ["Share of all glass", "~90%"]],
  uses: "Windows, bottles, jars, light bulbs, everyday tableware.",
  link: "https://en.wikipedia.org/wiki/Soda%E2%80%93lime_glass"
},
{
  id: "leadcrystal", cat: "ceramic", name: "Lead crystal",
  sub: "potash–lead silicate glass", img: "leadcrystal", extra: ["leadcrystal2", "leadcrystal3"],
  hook: "Ravenscroft's 1676 glass: a third lead oxide, which bends light harder and spreads the colours, so a facet throws rainbows. It softens the glass to cut deep, and it rings, a long note, not a thud. And it leaches.",
  more: "Lead oxide joins the network as a heavy, polarisable modifier, so the glass bends light harder and disperses it more, like a diamond; it also lowers the working temperature and widens the range in which the glass stays soft, so it can be blown thick and cut on a wheel without cracking. Low internal friction gives the ring. Hence the Georgian decanter, the Waterford goblet, the chandelier drop and, uncut, the hot-cell window and the television tube face, where the lead stopped the X-rays. The costs: an acidic drink left in it, port in a decanter, picks up lead within hours, so the trade has quietly moved to lead-free crystal with barium and zinc; it is soft and scratches; it is heavy; and the old television tubes are a landfill problem.",
  stats: [["PbO", "24–33%"], ["Refractive index", "1.55–1.6"], ["Ring", "seconds, not a thud"]],
  uses: "Cut glassware and chandeliers; historically radiation shielding windows and CRT faces.",
  link: "https://en.wikipedia.org/wiki/Lead_glass"
},
{
  id: "ceran", cat: "ceramic", name: "Glass-ceramic cooktop",
  sub: "lithium aluminosilicate, Ceran", img: "ceran", extra: ["ceran2", "ceran3"],
  hook: "Glass baked until tiny crystals grow in it, crystals that shrink as the glass round them expands. They cancel, so a ring glows red under one spot while the plate an inch away stays cool. The hob since 1971.",
  more: "Stookey at Corning found it by accident in 1953, a glass left in a hot furnace that came out white and unbreakable; Schott made it a hob in 1971. A lithium aluminosilicate glass is melted, rolled to a plate, then baked for hours while titania seeds nucleate crystals a tenth of a micron across, too small to scatter light, so the plate stays translucent. The crystal shrinks on heating, the glass grows, and the mix is tuned to near zero; the plate also passes the infrared from the element below while staying cool to touch at the edge. The costs: it is a glass and shatters on a dropped pan corner; sugar burnt onto it pits the surface as it cools; it scratches under a dragged cast-iron pot; and a crack from an impact grows across the whole hob.",
  stats: [["Expansion", "≈0 × 10⁻⁶ /K"], ["Spot heating", "no thermal shock"], ["Crystals", "grown in place"]],
  uses: "Hob panels, wood stove windows, telescope mirror blanks, cookware.",
  link: "https://en.wikipedia.org/wiki/Glass-ceramic"
},
{
  id: "chalcogenide", cat: "ceramic", name: "Chalcogenide glass",
  sub: "Ge–As–Se / As₂S₃", img: "chalcogenide", extra: ["chalcogenide3"],
  hook: "Sulphur, selenium or tellurium with germanium, melted into a black-mirror glass, opaque to the eye, yet thermal infrared passes straight through. It moulds like plastic, so a thermal camera clips onto a phone.",
  more: "Heavy atoms and weak bonds put the lattice vibrations far out in the infrared, so the glass is clear from 1 to 12 microns, where warm bodies glow; the same looseness softens it near 300 °C, so a lens is moulded in minutes instead of diamond-turned from germanium. That is the lens in the firefighter's camera, the night sight and the phone clip-on, and the fibre that pipes a surgical laser. The same glasses switch: a pulse of heat flips a germanium-antimony-tellurium film between glass and crystal, read back as reflectivity or resistance: the CD-RW and the phase-change memory chip. The costs: arsenic and selenium are poisons; it is soft and scratches; it is blind in the visible, so the camera needs a second eye; and a hot day shifts its focus.",
  stats: [["Transmits", "8–12 µm"], ["Visible", "opaque"], ["Forming", "precision moulded"]],
  uses: "Thermal imaging lenses, IR fibre, rewritable optical disc layers, phase-change memory.",
  link: "https://en.wikipedia.org/wiki/Chalcogenide_glass"
},
{
  id: "zblan", cat: "ceramic", name: "ZBLAN fluoride glass",
  sub: "ZrF₄–BaF₂–LaF₃–AlF₃–NaF", img: "zblan", extra: ["zblan2", "zblan3"],
  hook: "Five fluorides melted into a glass clear from the ultraviolet to 5 microns. In theory it carries light a hundred times further than silica; in practice crystals form as it cools, so it is now drawn in orbit.",
  more: "Poulain found it by chance in 1974, hunting a laser crystal and getting a glass. Fluorides scatter less than oxides and absorb further into the infrared, so the loss at 2.5 microns could be a thousandth of a decibel a kilometre, a fifth for the best silica. The catch: the melt wants to crystallise, and on the ground convection and settling seed tiny crystals that scatter light back to where silica started. In orbit the melt sits still, and fibre drawn on the space station since 2017 comes out clear, so companies now plan to make it there. Meanwhile it earns its keep as the 2.8-micron fibre laser and the amplifier. The costs: it is soft, weak and water-soluble, so the fibre is sealed; it crystallises if reheated; and the fluorides are dear and toxic.",
  stats: [["Theoretical loss", "~0.001 dB/km"], ["Problem", "crystallises on cooling"], ["Drawn on", "the ISS, since 2017"]],
  uses: "Mid-IR fibre lasers, fibre amplifiers, proposed ultra-long-haul links.",
  link: "https://en.wikipedia.org/wiki/ZBLAN"
},
{
  id: "porcelain", cat: "ceramic", name: "Electrical porcelain",
  sub: "kaolin–feldspar–quartz, vitrified", img: "porcelain", extra: ["porcelain2", "porcelain3"],
  hook: "Kaolin, feldspar and quartz fired until the glass closes every pore, so rain cannot get in and nothing tracks the glaze. A grid insulator has held a hundred kilovolts outdoors for a century, unmaintained.",
  more: "At 1,300 °C the feldspar melts into a glass that dissolves the quartz and binds the mullite needles growing from the clay; cooled, it has no open pore, which an outdoor insulator needs, since a pore fills with water and water conducts. The glaze sheds rain and dirt, the ribbed sheds stretch the path so a wet film cannot bridge it, and the body stands 20 kilovolts a millimetre. Pin insulators carried the first telegraphs, cap-and-pin strings carry the 400-kilovolt line, and every transformer bushing is the same body. The costs: it is heavy, so a string is a quarter of a tonne; a chipped glaze lets water in and the ice splits it; a gunshot or a flashover cracks it; and silicone composites have taken the salt-fog coast, where porcelain flashes over.",
  stats: [["Dielectric strength", "~20 kV/mm"], ["Porosity", "zero"], ["Fired at", "1200–1400 °C"]],
  uses: "Power line and substation insulators, fuse bodies, spark plug cores, lab ware.",
  link: "https://en.wikipedia.org/wiki/Porcelain"
},
{
  id: "steatite", cat: "ceramic", name: "Steatite",
  sub: "fired talc–clay (soapstone)", img: "steatite", extra: ["steatite2", "steatite3"],
  hook: "Talc and clay, shaped soft, then fired into a hard magnesium silicate with almost no loss. Machine green, fire hard: that made it the body of electrical parts before plastics, and it still holds the heater coil.",
  more: "Soapstone has been carved since the Stone Age because it cuts with a fingernail, and fired it turns hard, so Indus seals are still sharp. The ceramic is 90 per cent talc with a little clay and feldspar, pressed from granulate into formers, bushings and terminal blocks, then fired at 1,350 °C, when it shrinks a tenth and becomes enstatite in a glass. The loss tangent is a tenth of porcelain's, so it was the insulator of every radio coil and valve base until polymers came, and it is still the former in a toaster, the bead on a thermocouple and the block in an oven. The costs: a narrow firing window, since a few degrees over and the batch slumps; it is weak and chips at an edge; it cannot take a thermal shock; and nobody machines it after firing.",
  stats: [["Green state", "machinable"], ["Loss tangent", "very low"], ["Max use", "~1000 °C"]],
  uses: "Heater element formers, terminal blocks, RF insulators, aquarium heaters.",
  link: "https://en.wikipedia.org/wiki/Steatite"
},
{
  id: "mullite", cat: "ceramic", name: "Mullite",
  sub: "3Al₂O₃·2SiO₂", img: "mullite", extra: ["mullite2", "mullite3"],
  hook: "Rare in nature, named after a Scottish island where lava baked clay, yet it forms in nearly every fired clay body and holds it together. Needles of it lock a porcelain; a block of it barely creeps at 1,500 °C.",
  more: "Heat clay past 1,000 °C and the kaolinite breaks down and regrows as mullite, three alumina to two silica, in interlocking needles; the more needles, the stronger the ware, which is why a hard-fired porcelain outlasts an earthenware. Made on purpose from bauxite and clay, or fused in an arc furnace, it is the kiln shelf and prop that carry every load through a firing, the furnace lining, the crucible, the hot-face brick in a glass tank; low expansion gives it the shock resistance, and near-zero creep keeps a shelf flat for years at 1,500 °C. The costs: it is weak beside the engineering ceramics, as strong as a good brick; molten alkali and iron slag eat it slowly; the fused grades are dear; and above 1,800 °C it falls apart into corundum and glass.",
  stats: [["Stable to", "~1800 °C"], ["Creep", "very low"], ["Expansion", "5 × 10⁻⁶ /K"]],
  uses: "Kiln furniture, furnace linings, foundry crucibles, IR-transparent windows.",
  link: "https://en.wikipedia.org/wiki/Mullite"
},
{
  id: "tib2", cat: "ceramic", name: "Titanium diboride",
  sub: "TiB₂", img: "tib2", extra: ["tib22"],
  hook: "A ceramic that conducts better than titanium metal and is nearly as hard as boron carbide. So it spark-erodes to shape, which no other ceramic allows, and molten aluminium wets it, as no other cathode does.",
  more: "Titanium and boron bond in a hexagonal lattice with electrons to spare, so a block of it conducts like a poor metal, melts at 3,230 °C, and stands up to molten aluminium, which dissolves most things. In the Hall-Héroult cell the aluminium should wet the carbon cathode and does not, so it pools in a thick layer stirred by the magnetic field; a coat of titanium diboride is wetted, so the pool can be thin and the anode closer, and a smelter saves a tenth of its power. It is also the evaporation boat that holds molten aluminium in a metalliser and a tile in heavy armour. The costs: it oxidises above 1,000 °C in air; full density needs 2,000 °C and pressure; it is brittle, so the cathode coat cracks as the cell heats; and the powder is dear.",
  stats: [["Hardness", "~25 GPa"], ["Resistivity", "~15 µΩ·cm"], ["Melting", "3230 °C"]],
  uses: "Aluminium smelter cathodes, crucibles for molten metal, armour, cutting tools.",
  link: "https://en.wikipedia.org/wiki/Titanium_diboride"
},
{
  id: "isographite", cat: "ceramic", name: "Isostatic graphite",
  sub: "isotropically pressed fine-grain carbon", img: "isographite", extra: ["isographite2", "isographite3"],
  hook: "Coke flour and pitch pressed from every side, then graphitised: a fine carbon with no grain. Alone among structural materials it strengthens as it heats, to 2,500 °C. It machines like chalk and conducts like metal.",
  more: "Extruded graphite has a grain and a weak direction; pressing the powder in a rubber bag under oil gives a block the same every way, grains under 10 microns, no pore an electrode would print into the die. So it is milled with ordinary tools, which it coats in black dust, into the electrode that spark-erodes a mould cavity into hardened steel, the die a caster pulls copper bar through, the silicon crucible and the vacuum-furnace heater. At 2,000 °C its strength is still rising while every metal is a puddle, and no melt wets it. The costs: it burns in air above 450 °C, so the furnace runs in vacuum or argon; it is weak in tension and chips at an edge; the dust shorts electronics and gets everywhere; and a fine block takes months from pitch to kiln.",
  stats: [["Strength peak", "~2500 °C"], ["Grain", "<10 µm"], ["Machining", "like dense chalk"]],
  uses: "EDM electrodes, continuous casting dies, crucibles, rocket nozzle throats.",
  link: "https://en.wikipedia.org/wiki/Graphite"
},
{
  id: "glassycarbon", cat: "ceramic", name: "Glassy carbon",
  sub: "vitreous carbon", img: "glassycarbon", extra: ["glassycarbon2", "glassycarbon3"],
  hook: "Resin baked slowly to 3,000 °C, so the carbon left is neither graphite nor diamond but a tangle of ribbons with no connected pore. Gas cannot get through, acid cannot touch it, and it keeps a mirror polish.",
  more: "Graphite flakes slide and soak up liquid; this does neither, because the polymer chains carbonise in place into curved ribbons knotted like a bird's nest, so it fractures like glass and rings when tapped. Hard for a carbon, gas-tight, inert to acid and alkali, stable in vacuum to 3,000 °C and conductive, it is the electrochemist's working electrode, polished to a mirror and reused for years; the crucible for a melt that must stay pure, the X-ray cell window and, as a foam, the filter for molten aluminium. The costs: the resin loses half its mass as gas on the way, so a thick piece cracks and parts stay a few millimetres thick; after firing it is shaped only by grinding; and a block takes weeks in the furnace, so by volume it costs more than platinum.",
  stats: [["Permeability", "gas-tight"], ["Use temp", "to 3000 °C, inert"], ["Density", "1.5 g/cm³"]],
  uses: "Electrochemistry electrodes, crucibles for ultra-pure melts, AFM calibration standards.",
  link: "https://en.wikipedia.org/wiki/Glassy_carbon"
},
{
  id: "emax", cat: "ceramic", name: "Lithium disilicate",
  sub: "Li₂Si₂O₅ dental glass-ceramic", img: "emax", extra: ["emax2", "emax3"],
  hook: "Milled from a soft blue block in twenty minutes, then fired, and in the firing the crystals grow, the colour turns to tooth and the strength triples. Machined while weak, on purpose. A crown in one visit.",
  more: "The glass-ceramic trick again: the glass is cast with its crystals half grown, as lithium metasilicate, soft enough for the dentist's mill to carve a crown in minutes without eating the burs. Twenty minutes at 850 °C finishes it: the metasilicate dissolves and lithium disilicate needles grow through the glass, interlocking, and the bend strength goes from 130 to 400 megapascals while the blue burns off and the piece turns translucent, close enough to enamel to glaze in place. It bonds to the tooth with resin, so a veneer half a millimetre thick holds. The costs: it is weaker than zirconia, so a molar crown is made thick and a long bridge not at all; it needs a dry field to bond; unpolished, it wears the opposing teeth; and the blocks are dear.",
  stats: [["Milled strength", "~130 MPa"], ["Fired strength", "~400 MPa"], ["Chairside", "under an hour"]],
  uses: "Crowns, veneers and inlays made in the dentist's own milling machine.",
  link: "https://en.wikipedia.org/wiki/Glass-ceramic"
},
{
  id: "zta", cat: "ceramic", name: "Zirconia-toughened alumina",
  sub: "ZTA, Al₂O₃ + 10–20% ZrO₂", img: "zta", extra: ["zta2"],
  hook: "Zirconia grains sit in the alumina like loaded springs. A crack sets them off, they swell, and it is clamped shut behind the tip. Alumina's hardness, most of zirconia's toughness, and it does not age in the body.",
  more: "Alumina is hard but brittle, and a few early hip balls shattered in the patient; zirconia is tough but ages in warm body fluid and roughens. Mix 15 per cent of fine zirconia into alumina and each grain is held compressed by the stiffer matrix, unable to transform until a crack tip frees it, when it swells 4 per cent and shuts the crack; the alumina round it stops the ageing. Toughness doubles, hardness barely drops, and the pink ball on a hip stem fractures once in a hundred thousand. It is also the cyclone wear tile and the insert that turns cast iron. The costs: a ball is pressed, sintered and ground to a tenth of a micron, so it costs hundreds; a ceramic still, so one dropped in theatre goes in the bin; and a scratched one wears the socket.",
  stats: [["Toughness", "~6 MPa·m½"], ["Hardness", "~1700 HV"], ["Mechanism", "transformation toughening"]],
  uses: "Hip replacement heads, wear tiles, cutting inserts, ballistic plates.",
  link: "https://en.wikipedia.org/wiki/Zirconium_dioxide"
},
{
  id: "mnznferrite", cat: "ceramic", name: "MnZn ferrite",
  sub: "soft ferrite core material", img: "mnznferrite", extra: ["mnznferrite2", "mnznferrite3"],
  hook: "Iron oxide with manganese and zinc, fired into a magnet that insulates, so eddy currents cannot flow. That alone is why a switching supply runs at a hundred kilohertz and fits in a plug.",
  more: "Snoek worked it out at Philips in the 1940s: in the spinel lattice the iron sits on two kinds of site with opposed moments, so the ceramic is magnetic, and manganese and zinc tune it to a permeability of ten thousand. Sintered at 1,300 °C into toroids, E-cores and pot cores, it is the transformer in every charger and laptop brick, the inductor on the motherboard, the radio's rod aerial and the lump on a USB cable that soaks up noise. The costs: it saturates at a third of iron's flux, so a core is bigger for the same power; its permeability wanders with temperature and falls off a cliff at the Curie point near 200 °C; above a megahertz the losses climb and nickel-zinc takes over; it is brittle; and a gapped core sings.",
  stats: [["Permeability", "2000–15000"], ["Resistivity", "~1 Ω·m"], ["Useful to", "~1 MHz"]],
  uses: "SMPS transformers, inductors, the lump on every USB cable, antenna rods.",
  link: "https://en.wikipedia.org/wiki/Ferrite_(magnet)"
},
{
  id: "azs", cat: "ceramic", name: "Fused-cast AZS",
  sub: "alumina–zirconia–silica refractory", img: "azs", extra: ["azs2"],
  hook: "Alumina, zirconia and silica melted at 2,000 °C and cast like metal, not pressed and fired. A block stands in molten glass for fifteen years. The furnace is rebuilt around its AZS, not the other way round.",
  more: "A pressed brick is grains with pores between, and molten glass creeps in and lifts the grains out one by one. Fuse the oxides and pour them into a sand mould and the block freezes as interlocking corundum and zirconia crystals, no open pore, nothing for the glass to grip. The zirconia is what will not dissolve, so the throat and the sidewall at the glass line, where the attack is worst, get 41 per cent; the crown gets by on 33. Corning cast the first in 1925; every float line and bottle tank since is lined with it. The costs: a block weighs tonnes and takes weeks to cast and anneal, so a rebuild costs millions and is planned a decade ahead; the glassy phase sweats into the melt as stones at first; and each block's shrinkage cavity must be cut away.",
  stats: [["Cast at", ">2000 °C"], ["Campaign life", "10–15 years"], ["ZrO₂", "33–41%"]],
  uses: "Glass melting furnace linings, throats and feeders.",
  link: "https://en.wikipedia.org/wiki/Refractory"
},
{
  id: "ifb", cat: "ceramic", name: "Insulating firebrick",
  sub: "porous alumina-silicate refractory", img: "ifb", extra: ["ifb2", "ifb3"],
  hook: "Sawdust or foam beads in the clay, burned out in the kiln, leaving a brick that is mostly sealed air. Hold one corner while the other glows at 1,200 °C; cut it with a wood saw. Every pottery kiln is lined with it.",
  more: "A dense firebrick carries heat away almost as fast as it stops the fire, and a furnace lined with it spends most of its fuel on its own walls. Foam the slip, or load it with combustibles, and after firing the body is 70 per cent closed pores: a tenth the conductivity, half a gram a cubic centimetre, and a kiln that heats in hours and is cool enough to open next morning. It is graded by the temperature it holds its shape at, 1,260 for a pottery kiln, 1,650 behind a steel furnace, and shaped with a hand saw, a rasp and a drill. The costs: it crumbles under a knock, so where the work touches it takes a dense brick; it soaks up glaze drips and salt vapour and spalls; it carries no load; and the dust is silica, so you cut it wet or masked.",
  stats: [["Density", "0.5–0.8 g/cm³"], ["Rating", "1260–1650 °C"], ["Cutting", "ordinary wood saw"]],
  uses: "Kiln and furnace linings, forge interiors, back-up insulation.",
  link: "https://en.wikipedia.org/wiki/Fire_brick"
},
{
  id: "sialon", cat: "ceramic", name: "Sialon",
  sub: "Si–Al–O–N solid solution", img: "sialon", extra: ["sialon2"],
  hook: "Silicon nitride with aluminium and oxygen swapped into the lattice, so it sinters without the glassy film that softens at heat. Molten aluminium will not wet it, so it lives in a melt that eats steel in a shift.",
  more: "Jack found in 1971 that alumina dissolves into silicon nitride, atom for atom, and the solution densifies with less additive and holds its strength past 1,300 °C, where the parent creeps. Harder, as shock-proof, with a surface molten aluminium slides off, it is the thermocouple sheath that stands in a holding furnace for months, the riser tube of a casting machine, the welding nozzle spatter will not stick to, and the insert that turns a nickel superalloy faster than carbide can. A cousin with europium in it is the red phosphor in a warm white LED. The costs: it is sintered at 1,800 °C under nitrogen, so parts are dear and small; the alpha grades are brittle; molten iron and hot steam attack it; and the insert chips on an interrupted cut.",
  stats: [["Hardness", "~1600 HV"], ["Thermal shock", "excellent"], ["Molten Al", "non-wetting"]],
  uses: "Welding nozzles, thermocouple sheaths in aluminium melts, cutting inserts for nickel alloys.",
  link: "https://en.wikipedia.org/wiki/Sialon"
},
{
  id: "beo", cat: "ceramic", name: "Beryllia",
  sub: "BeO, beryllium oxide", img: "beo", extra: ["beo2", "beo3"],
  hook: "An insulator that conducts heat better than aluminium; only diamond and a few nitrides beat it. Sintered, it is safe to hold; the dust gives an incurable disease, so aluminium nitride replaced it.",
  more: "The lattice is light, stiff and simple, the recipe that makes diamond conduct, so a tile carries 285 watts a metre-kelvin while standing off kilovolts, with almost no loss at microwave. That made it the base under every radio-frequency power transistor, the insulator in a klystron and a magnetron, the bore of a carbon dioxide laser, the washer under a military MOSFET. Fired, it is inert and harmless to touch. The costs: grind, drill, sandblast or burn it and the dust causes berylliosis, a lung disease that appears years later in people merely sensitised, so every part is labelled, a factory needs an extraction room and disposal is hazardous waste; the powder is dear; and aluminium nitride, at two thirds the conductivity, took the market.",
  stats: [["Thermal conductivity", "~285 W/m·K"], ["Dielectric", "insulator"], ["Hazard", "dust only, chronic"]],
  uses: "Legacy RF power transistor and klystron packages, laser tubes, specialist heat spreaders.",
  link: "https://en.wikipedia.org/wiki/Beryllium_oxide"
},
{
  id: "uraniumglass", cat: "ceramic", name: "Uranium glass",
  sub: "uranium-doped soda-lime glass", img: "uraniumglass", extra: ["uraniumglass2", "uraniumglass3"],
  hook: "A per cent or two of uranium oxide turns glass yellow-green and makes it blaze under ultraviolet. Ordinary tableware from the 1830s; the radioactivity is real and trivial, less than the bananas in the bowl.",
  more: "Riedel sold it as Annagrün from 1834, and for a century uranium was a colourant and a glaze before anyone wanted it for anything else. The uranyl ion in the glass absorbs blue and fluoresces green, so a piece that is pale yellow in daylight lights up like a tube under a black light, which is how collectors find it. Depression glass, pressed by the tonne, carries a tenth of a per cent; old Vaseline glass up to 2. The costs: the US seized the uranium in 1943 and production stopped until the 1950s; a Geiger counter clicks at a piece but the dose at arm's length is below background; the hazard, such as it is, is drinking daily from a scratched cup; and nobody makes it in quantity now, so the price is a collector's.",
  stats: [["Uranium", "~0.1–2%"], ["Under UV", "bright green"], ["Dose", "negligible"]],
  uses: "Collectable glassware, Depression-era pressed glass, historical lab ware.",
  link: "https://en.wikipedia.org/wiki/Uranium_glass"
},
{
  id: "dichroic", cat: "ceramic", name: "Dichroic glass",
  sub: "glass with a vapour-deposited oxide stack", img: "dichroic", extra: ["dichroic2", "dichroic3"],
  hook: "Thirty to fifty oxide layers, each thinner than a wavelength, evaporated onto glass in a vacuum. No dye: the colour is interference, so it reflects one colour, passes the complement, and both shift as you tilt it.",
  more: "Alternate titania and silica, each a quarter wave thick, and the reflections from every boundary add up for one band and cancel for the rest. Nothing is absorbed, so nothing fades or heats: the filter in front of a kilowatt stage lamp lasts where a gel burns through in a night, and a projector's colour wheel spins the same six segments for ten thousand hours. The same stacks make the laser mirror and the microscope's filter cube; NASA bought them for spacecraft and the glass artists took the rejects. The costs: a vacuum run is dear and no two match, so you buy by the batch; the stack is a few hundred nanometres and scratches, so art glass caps it under clear; and the colour moves with angle, the charm in a pendant and a nuisance in a window.",
  stats: [["Layers", "30–50, nanometre scale"], ["Colour source", "interference, not dye"], ["Origin", "NASA optical filters"]],
  uses: "Art glass and jewellery, stage lighting filters, laser mirrors, architectural glazing.",
  link: "https://en.wikipedia.org/wiki/Dichroic_glass"
},
{
  id: "photochromic", cat: "ceramic", name: "Photochromic glass",
  sub: "silver halide microcrystals in glass", img: "photochromic", extra: ["photochromic2", "photochromic3"],
  hook: "Silver chloride crystals a few nanometres across, grown in the glass. Sunlight splits them to silver, which is dark; the glass holds the chlorine next door, so in shade they go back. Corning sold it from 1964.",
  more: "Armistead and Stookey melted a borosilicate with silver halide and a trace of copper, then heat-treated it until crystals of 10 to 20 nanometres grew, too small to scatter light. Ultraviolet knocks an electron over, silver forms and the lens goes grey in a minute; film does the same, but there the halogen escapes and the image is fixed, while here nothing can leave the glass, so warmth drives it back in minutes, for the life of the lens. The costs: it is glass, heavy and breakable; a strong lens is thick in the middle and darkens unevenly; it stays pale in a hot car and idles behind a windscreen, which stops the ultraviolet; and plastic lenses with organic dyes took the market in the 1990s, though the dyes tire in a few years and the glass does not.",
  stats: [["Darkening", "under 60 s"], ["Clearing", "a few minutes"], ["Cycles", "effectively unlimited"]],
  uses: "Sunglass and spectacle lenses, aircraft and architectural glazing.",
  link: "https://en.wikipedia.org/wiki/Photochromic_lens"
},
{
  id: "bonechina", cat: "ceramic", name: "Bone china",
  sub: "~50% calcined bone ash", img: "bonechina", extra: ["bonechina2", "bonechina3"],
  hook: "Half the body is calcined ox bone. Spode fixed the recipe in 1800 because England had no kaolin, and got a china whiter, clearer and tougher than the porcelain it copied. Fired hot first, glazed cool after.",
  more: "Bone ash is calcium phosphate, and at 1,250 °C it reacts with the clay and Cornish stone into phosphate and anorthite crystals in a glass that scatters so little light you can see a hand through a cup. It also doubles the strength of hard porcelain, which is why a wall a millimetre and a half thick survives a hotel dishwasher. The biscuit firing does the work and the glaze goes on at 1,100 after, a soft glaze on a hard body. The costs: at the top of the biscuit firing the body is a few degrees from slumping, so every piece is fired propped in alumina sand or on its own setter, and some still warp; it shrinks 20 per cent; the soft glaze takes grey cutlery marks; and most of it is now made in China, so the Stoke name on the base is a licence.",
  stats: [["Bone ash", "~50%"], ["Translucency", "you can see a hand through it"], ["Firing", "biscuit high, glaze low"]],
  uses: "Fine tableware, teacups, figurines.",
  link: "https://en.wikipedia.org/wiki/Bone_china"
},
{
  id: "enamel", cat: "ceramic", name: "Vitreous enamel",
  sub: "glass fused to steel or cast iron", img: "enamel", extra: ["enamel2", "enamel3"],
  hook: "Powdered glass dusted onto steel and fired at 800 °C, so the two cool as one and expand together ever after. It will not fade, stain or burn; the Underground's signs are a century old. Chip it and the steel rusts.",
  more: "The steel is pickled, a ground coat with cobalt oxide in it is fired on at 850 °C so the iron oxide dissolves into the glass and keys it, then the colour coats are fired on over it, a tenth of a millimetre each. The glass is made to expand a little less than the steel, so on cooling it ends in compression and cannot craze, so a 1930 bath still shines and a glass-lined reactor holds acid for decades. The costs: a knock at an edge flakes a chip, the bare steel rusts and there is no repair but paint; hydrogen in the steel blows fish-scale blisters months later, so the sheet is a special decarburised grade; every hole and bend is made before the firing, none after; it is heavy; and powder coat, which does none of this, took the washing machines.",
  stats: [["Fired at", "750–850 °C"], ["Hardness", "~6 Mohs"], ["Weakness", "chips if struck"]],
  uses: "Cookware and sinks, cast iron baths, road and transit signs, cloisonné jewellery.",
  link: "https://en.wikipedia.org/wiki/Vitreous_enamel"
},
{
  id: "tincoat", cat: "ceramic", name: "Titanium nitride coating",
  sub: "a few micrometres, struck on by arc", img: "tincoat", extra: ["tincoat2", "tincoat3"],
  hook: "Two microns struck onto a finished tool by an arc on a titanium cathode in nitrogen, hot enough to bond, not to draw the temper. Three times the hardness of the steel; the gold is a side effect, and sells the drill.",
  more: "The arc boils titanium off the cathode as ions, a bias on the tool pulls them in, nitrogen meets them on the surface and a columnar film grows at 450 °C, where the chemical route needs 1,000 and softens any high-speed steel. At 2,300 Vickers it slides on steel chips with half the friction and will not weld to them, so a drill lasts three times as long, or runs faster, and a worn one is stripped and coated again. The costs: it is line of sight, so a deep hole is bare; the cathode spits droplets that roughen it; above 550 °C it oxidises and the edge is gone, so hot dry cutting moved to the aluminium nitrides, which grow their own alumina skin; and the gold on a cheap drill set is a few hundred nanometres of show, gone after one hole in steel.",
  stats: [["Thickness", "2–4 µm"], ["Hardness", "around 2000–2400 HV"], ["Gold colour", "a side effect, not a plating"]],
  uses: "Drills, taps, punches and cutters; injection moulds, medical implants, decorative trim.",
  link: "https://en.wikipedia.org/wiki/Titanium_nitride"
},

/* ---------- COMPOSITES & STRUCTURES ---------- */
{
  id: "cc", cat: "composite", name: "Carbon–carbon",
  sub: "carbon fibre in a carbon matrix", img: "cc", extra: ["cc2", "cc3"],
  hook: "Carbon fibre in a carbon matrix: nothing softer to fail first. It gets stronger to 2,000 °C and shrugs off thermal shock, so it stops a 747 and faced the Shuttle's wing. In air above 500 °C it quietly burns away.",
  more: "A woven carbon preform is soaked in pitch or resin, charred, and soaked again, six or eight times over months, until the pores are carbon too. An aircraft brake stack of it swallows a rejected take-off, glowing, at half the weight of steel; a racing disc runs at 1,000 °C lap after lap; a rocket throat holds its shape where graphite erodes; and the Shuttle's nose and leading edges were 44 panels of it, faced with silicon carbide against the air. The costs: it is a fuel, so every use in air needs a coating, and coatings crack; densifying takes months and the price is thousands a kilogram; the brakes bite poorly cold, which is why racing drivers weave; and it is brittle to a blow, which is how a block of foam killed Columbia.",
  stats: [["Usable to", ">2000 °C inert"], ["Weakness", "oxidises in air"], ["Density", "~1.8 g/cm³"]],
  uses: "Aircraft and F1 brakes, rocket nozzle throats, re-entry leading edges, furnace fixtures.",
  link: "https://en.wikipedia.org/wiki/Reinforced_carbon%E2%80%93carbon"
},
{
  id: "cmc", cat: "composite", name: "SiC/SiC composite",
  sub: "ceramic matrix composite", img: "cmc", extra: ["cmc2", "cmc3"],
  hook: "Carbide fibre in a carbide matrix, with a whisper of boron nitride between so the two never bond. A crack meets a fibre and is turned aside, so a ceramic that should shatter frays instead. In jet engines since 2016.",
  more: "The fibre is woven, coated from vapour with boron nitride a fraction of a micron thick, then the matrix is grown through the cloth from gas and the last pores filled with molten silicon. The weak film is the trick: a crack cannot cross it, the fibres pull out one by one, and the part takes ten times the strain of solid carbide. At a third the density of a superalloy it runs at 1,300 °C with no cooling air, so the turbine shroud and combustor liner are made of it and the engine keeps its cooling air. The costs: the fibre is thousands a kilogram and a part spends weeks in the furnace; steam in the exhaust eats carbide away, so every part wears a rare-earth silicate coat that can spall; and the free silicon melts at 1,414 °C, which is the ceiling.",
  stats: [["Service", "1200–1300 °C"], ["Density", "~⅓ of superalloy"], ["Failure", "pseudo-ductile"]],
  uses: "Turbine shrouds and combustor liners, exhaust nozzles, hot structures.",
  link: "https://en.wikipedia.org/wiki/Ceramic_matrix_composite"
},
{
  id: "cf", cat: "composite", name: "Pitch-based carbon fibre",
  sub: "K13D and relatives", img: "cf", extra: ["cf2"],
  hook: "Carbon fibre spun from pitch instead of acrylic, so the graphite planes line up along the fibre. Four times as stiff as steel, it carries heat better than copper and shrinks when warmed. Satellites are made of it.",
  more: "Acrylic-based fibre is a jumble of graphite: strong, but a modulus near 250. Mesophase pitch is a liquid crystal of flat molecules; drawn through a spinneret they line up, and after a bake at 3,000 °C the fibre is nearly a single crystal along its length: 900 gigapascals, 800 watts a metre-kelvin against copper's 400, and a thermal expansion slightly negative. So an optical bench is laid up to zero expansion over 300 degrees, and a strap of it carries heat from a box to the radiator at a fraction of aluminium's weight. The costs: half the strength of the acrylic kind and a third of a per cent strain, so it snaps where that would bend and breaks on the loom; it is hundreds a kilogram; and it conducts, so an aluminium fitting against it corrodes.",
  stats: [["Modulus", "to ~935 GPa"], ["Conductivity", "~800 W/m·K"], ["Axial CTE", "negative"]],
  uses: "Satellite structures and optical benches, thermal doublers, stiff robot arms.",
  link: "https://en.wikipedia.org/wiki/Carbon_fibers"
},
{
  id: "nextel", cat: "composite", name: "Nextel ceramic fabric",
  sub: "alumina–boria–silica fibre",
  img: "nextel", extra: ["nextel2"],
  hook: "Alumina, boria and silica spun into a fibre fine enough to weave, sew and knot. Hold a 1,200 °C flame on the cloth and nothing happens. It wraps the Space Station against debris and hangs in furnaces as a curtain.",
  more: "3M spins a syrup of aluminium salts into 10-micron filaments and fires them to mullite, or to pure alumina for the composite grade; hundreds make a yarn, woven on a textile loom into cloth, tape and sleeving. Glass fibre melts at 800 °C and silica cloth sags at 1,000; this holds at 1,200. So it is the outer layer of the Station's debris shield, where it bursts a fragment into a cloud for the Kevlar behind to catch, the kiln thermocouple's sleeve, and the fibre in an oxide composite: furnace doors that sit in the fire for years. The costs: tens of dollars a metre; the filaments are ceramic and break when flexed, so it is never worn; above 1,100 °C the grains grow and the strength drains away; and the dust is a respirable fibre, so it is cut masked.",
  stats: [["Continuous use", "1200–1400 °C"], ["Form", "cloth, sleeve, tape"], ["Handling", "like fabric"]],
  uses: "Thermal protection blankets, furnace curtains, CMC preforms, flame barriers."
},
{
  id: "syntactic", cat: "composite", name: "Syntactic foam",
  sub: "glass microballoons in resin", img: "syntactic", extra: ["syntactic2", "syntactic3"],
  hook: "Hollow glass spheres a tenth of a millimetre across, packed in epoxy. A foam with no void for pressure to squeeze shut, so it floats at full ocean depth and comes back. Before it, Trieste hung from a tank of petrol.",
  more: "The spheres are borosilicate bubbles 20 to 100 microns across with a wall a micron thick that crush at over a hundred megapascals; stirred 60 per cent by volume into epoxy, they make a solid of 0.5 to 0.7 grams a cubic centimetre the sea cannot compress. A block for 6,000 metres gives half a kilogram of lift a litre; for the Challenger Deep it is denser and gives a third. Alvin floats on it, every working ROV wears it as the yellow top, and Deepsea Challenger was 70 per cent foam by volume. The costs: deeper means denser foam, so the lift fades where it is needed most; the spheres crack a few at a time, the foam drinks water and the vehicle gains weight yearly; the dust is glass; and the cheapest block is ten times the price of a polyurethane foam.",
  stats: [["Density", "0.3–0.7 g/cm³"], ["Depth", "to 11,000 m"], ["Water uptake", "negligible"]],
  uses: "Submersible and ROV buoyancy, riser modules, sandwich cores.",
  link: "https://en.wikipedia.org/wiki/Syntactic_foam"
},
{
  id: "aerogel", cat: "composite", name: "Silica aerogel",
  sub: "“frozen smoke”", img: "aerogel", extra: ["aerogel2", "aerogel3", "aerogel4"],
  hook: "A gel dried so the liquid leaves and the skeleton stays: a silica lattice 99.8 per cent air, in pores too small for air to carry heat across. Kistler made it in 1931 on a bet; NASA caught comet dust in it at 6 km/s.",
  more: "A silicate gel has its water swapped for alcohol and the alcohol taken out above its critical point, so no meniscus ever forms to pull the pores shut. What is left is silica strands round pores of 20 nanometres, shorter than an air molecule's free path, so the gas inside cannot carry heat: 0.015 watts a metre-kelvin, and a flower sits unharmed on a slab over a Bunsen flame. It scatters blue like the sky. Stardust flew a tray of it to a comet, where grains at 6 kilometres a second dug carrot-shaped tracks and stopped whole; the Mars rovers kept warm in it; and a felt of it wraps subsea pipelines. The costs: a block crushes under a thumb and sheds dust; untreated, it drinks water and collapses; the drying is slow and dear; and the blanket itches.",
  stats: [["Density", "from 0.001 g/cm³"], ["Conductivity", "0.012–0.02 W/m·K"], ["Air", "~99.8%"]],
  uses: "Spacecraft and pipeline insulation, comet dust capture, insulating blankets.",
  link: "https://en.wikipedia.org/wiki/Aerogel",
  tags: ["warmth"]
},
{
  id: "metalfoam", cat: "composite", name: "Metal foam",
  sub: "closed-cell aluminium", img: "metalfoam", extra: ["metalfoam2", "metalfoam3"],
  hook: "Aluminium melt thickened with calcium and blown with titanium hydride, so it rises like bread and sets as it stands. It crushes at a steady stress for most of its length, the curve a crash box wants; and it floats.",
  more: "Calcium thickens the melt, the hydride gives off hydrogen, and the loaf sets as cells 2 to 10 millimetres across at a tenth of solid density; the German route presses the hydride into aluminium powder and foams the slug in a mould, or between two sheets that come out as a sandwich. Squeeze a cube and the cell walls buckle a layer at a time at a stress that barely rises until the foam is packed solid, so a crash box soaks up a steel one's energy at half the weight. It damps vibration and does not burn. The costs: no two cells match, so the properties scatter and a design uses the worst; it cannot be welded without collapsing, so it is glued or bolted through inserts; it costs several times an extrusion; and a cut face is torn cells that catch dirt.",
  stats: [["Relative density", "5–25%"], ["Crush", "constant plateau"], ["Bonus", "stiff and quiet"]],
  uses: "Crash boxes, sandwich panel cores, heat exchangers, acoustic panels.",
  link: "https://en.wikipedia.org/wiki/Metal_foam"
},
{
  id: "auxetic", cat: "composite", name: "Auxetic structures",
  sub: "negative Poisson's ratio", img: "auxetic", extra: ["auxetic2"],
  hook: "Pull it and it gets fatter; squeeze it, thinner. Not a chemistry but a geometry, a honeycomb with its walls folded inward, cut into any material. Under a blow it gathers under the point instead of squirting away.",
  more: "Lakes made the first in 1987 by crushing a polyurethane foam in a mould and heat-setting it so every cell rib buckled inward; pull such a cell and the ribs unfold, widening it. The same happens in expanded PTFE, which is why Gore-Tex is auxetic without anyone meaning it. The payoff: a punch meets material flowing toward it, so it resists denting; a sheet bends into a dome instead of a saddle, so a curved panel forms without wrinkles; and a filter opens its pores when stretched. It is in a running-shoe sole, a stent, and a blast curtain. The costs: it is mostly holes, so stiffness is given away to get it; the effect is large only at small strains and in chosen directions; the hinges fatigue; and most of the uses are still papers.",
  stats: [["Poisson's ratio", "negative"], ["Source", "geometry"], ["Impact", "densifies"]],
  uses: "Protective padding, stents, filters, conformable panels, shoe soles.",
  link: "https://en.wikipedia.org/wiki/Auxetics"
},
{
  id: "bioglass", cat: "composite", name: "Bioglass 45S5",
  sub: "bioactive glass", img: "bioglass",
  hook: "A soda-lime phosphate glass the body attacks on purpose. In an hour the surface is a silica gel, in a day it is hydroxyapatite, in a month bone has grown onto it. Hench made it in 1969 to answer a wounded colonel.",
  more: "The colonel asked why nothing could be made that the body would not reject; the answer was a glass of 45 per cent silica, low enough to dissolve. In body fluid sodium leaves, the surface turns to silica gel, calcium and phosphate crowd onto it and crystallise as bone's own apatite, and bone cells, finding their own mineral, build onto it with no fibrous wall. The silicon and calcium it sheds switch on bone-making genes. Middle-ear bones of it went in from 1985, then granules for bone defects, and the powder in sensitivity toothpaste. The costs: it is a glass, weak and brittle, so it is filler, never structure; it crystallises if sintered, so it is hard to make porous; in some sites it dissolves faster than bone fills in; and it is dear by the gram.",
  stats: [["Silica", "45%"], ["Reaction", "grows apatite"], ["Bond", "direct to bone"]],
  uses: "Bone graft granules, dental repair, sensitivity toothpaste, scaffolds.",
  link: "https://en.wikipedia.org/wiki/Bioglass_45S5"
},
{
  id: "hap", cat: "composite", name: "Hydroxyapatite",
  sub: "Ca₅(PO₄)₃(OH)", img: "hap", extra: ["hap2", "hap3"],
  hook: "The mineral of bone and teeth, which also grows as a rock in a pegmatite. Sprayed onto a titanium stem it fools bone into growing onto metal; shed into a tendon, it is the chalk that makes a shoulder scream.",
  more: "Bone is two thirds of it by weight, as platelets 50 nanometres long stacked in collagen, and enamel is nearly all of it; the body's version is badly crystalline, so it can be dissolved and rebuilt. Since the 1980s a hip stem or a dental screw has carried 50 microns of it, plasma-sprayed on, so bone grows onto the coating in weeks where it would have walled off bare metal. Granules of it, synthetic or burnt out of coral and cow bone, fill the socket after a tooth comes out. The costs: the coating can flake off and the loose grains grind the joint; it is brittle and carries no load; sintered grains barely resorb and sit there for years; the spray leaves a glassy fraction that dissolves too fast; and in a tendon or a kidney the crystal is a disease.",
  stats: [["Of bone mineral", "~60–70%"], ["Role", "osteoconductive"], ["Also", "a natural mineral"]],
  uses: "Implant coatings, bone void filler, chromatography media, enamel repair.",
  link: "https://en.wikipedia.org/wiki/Hydroxyapatite"
},
{
  id: "mycelium", cat: "composite", name: "Mycelium composite",
  sub: "fungal biocomposite", img: "mycelium", extra: ["mycelium2", "mycelium3"],
  hook: "Grown, not made: fungal threads eat through hemp hurd in a mould for five days, knitting it into a block, then an oven kills the fungus. Dell shipped servers in it; it composts in a month; it chars, not burns.",
  more: "Two Rensselaer students worked it out in 2007: pasteurise farm waste, seed it with a bracket fungus, pack it in a tray in the dark, and the hyphae grow through every particle and glue them solid; an oven stops it. Out comes a foam of 60 to 300 kilos a cubic metre that cushions like polystyrene, insulates nearly as well, self-extinguishes, and composts with the peelings. It has shipped wine and computers, filled acoustic panels, and stood as a tower of ten thousand bricks in New York; grown alone on a sheet, it is sold as leather. The costs: it crumbles at an edge and will not take a pull; every batch is a culture, and cultures spoil; it drinks water and softens; it smells of mushroom; and a week in a clean room will never match polystyrene's price.",
  stats: [["Growth", "days, room temp"], ["Feedstock", "crop waste"], ["End of life", "compostable"]],
  uses: "Protective packaging, acoustic and insulation panels, furniture, leather substitute.",
  link: "https://en.wikipedia.org/wiki/Mycelium-based_materials"
},
{
  id: "twood", cat: "composite", name: "Transparent wood",
  sub: "delignified wood + polymer", img: "twood", extra: ["twood2", "twood3"],
  hook: "Bleach the lignin out of a slice of birch, leaving a white cellulose skeleton, and fill the pores with a resin of the same refractive index. The grain stays as a ghost, 85 per cent of the light gets through.",
  more: "Lignin absorbs the light, so peroxide takes it out and leaves cellulose cell walls, white because every wall scatters where it meets air. Fill the air with a resin of the wall's own index and the scattering stops; a microscopist did it to balsa in 1992, and KTH and Maryland made it a material in 2016. The sheet passes 85 per cent of the light but scatters most of it, so a room behind it is bright and private; it conducts heat at a fifth the rate of glass, keeps the wood's strength along the grain, and bends before it breaks. The costs: by weight it is mostly plastic, so the green story is thin; a few millimetres is the limit, thicker goes cloudy; you cannot see through it; sun yellows it; the cellulose swells in damp; and nobody sells it by the pane.",
  stats: [["Transmittance", "~85–90%"], ["vs. glass", "tougher, warmer"], ["Keeps", "the grain"]],
  uses: "Experimental glazing, diffusing light panels, structural windows.",
  link: "https://en.wikipedia.org/wiki/Transparent_wood_composite"
},
{
  id: "gfrp", cat: "composite", name: "Glass-fibre laminate",
  sub: "GFRP / fibreglass", img: "gfrp", extra: ["gfrp2"],
  hook: "Glass breaks at the scratches on its skin; drawn to a 10-micron filament and coated at once, it has none and beats steel wire. The resin only holds the fibres apart and passes the load. Every small boat since 1950.",
  more: "E-glass runs out of a platinum bushing at 1,200 °C as two thousand filaments at once, sized with a silane so resin will wet it, and is wound as roving, chopped into mat or woven into cloth. Wetted out with polyester by hand, or sucked full of resin under a vacuum bag, it sets into a laminate that is 30 to 60 per cent glass in the shape of any mould you can build: hulls, baths, the 1953 Corvette, a turbine blade a hundred metres long, the board under every circuit, ladders and rebar. The costs: the fibre is stiff but the laminate is not, a third of aluminium, so parts are thick; styrene fumes; water through the gelcoat blisters a hull; sun chalks it; the dust itches; and nothing recycles it, so old blades are buried or, once, made into a footbridge.",
  stats: [["Fibre tensile", "~3.4 GPa"], ["Fibre fraction", "30–60%"], ["Resin's job", "load transfer"]],
  uses: "Boat hulls, wind turbine blades, bath tubs, circuit boards, ladders.",
  link: "https://en.wikipedia.org/wiki/Fiberglass"
},
{
  id: "cfrp", cat: "composite", name: "CFRP prepreg laminate",
  sub: "carbon fibre pre-impregnated with epoxy", img: "cfrp", extra: ["cfrp2", "cfrp3"],
  hook: "Cloth that arrives soaked with the measured resin, half-cured and kept frozen. Lay it up, bag it, bake it under seven atmospheres, and the part has the fibre fraction the engineer drew, not what a wet brush gave.",
  more: "A film of epoxy is pressed into the cloth and advanced just far enough to be tacky, then stored at minus 18 °C, where it keeps a year; on the bench it has weeks. It sticks to the tool, so plies go down by hand or off a placement head at a metre a second; a vacuum bag and an autoclave at 180 °C and 7 bar squeeze the voids below one per cent and the fibre to 60. A 787 is half of it by weight; the 1981 McLaren was the first racing car with a tub of it, and every one since has one. The costs: a freezer and a clock on every roll, and a stale roll is waste; the autoclave is a pressure vessel the size of the part; nesting wastes a third of the roll; voids hide inside, so every part is scanned; and lightning needs a copper mesh in the skin.",
  stats: [["Fibre fraction", "~60%, controlled"], ["Shelf life", "months at −18 °C"], ["Cure", "120–180 °C in autoclave"]],
  uses: "Airframes, F1 monocoques, bicycle frames, satellite structures.",
  link: "https://en.wikipedia.org/wiki/Pre-preg"
},
{
  id: "alhoneycomb", cat: "composite", name: "Aluminium honeycomb",
  sub: "expanded foil core sandwich", img: "alhoneycomb", extra: ["alhoneycomb2", "alhoneycomb3"],
  hook: "Foil 50 microns thick glued in stripes and pulled open into hexagons, then faced with two thin skins. An inch of near-nothing between them makes the panel a hundred times stiffer for a few per cent more weight.",
  more: "Foil is printed with lines of adhesive, stacked, cured, sliced, and the slice pulled open into cells 3 to 6 millimetres across, at 30 to 130 kilos a cubic metre. The skins carry the bending like flanges and the core the shear like a web, so a floor panel a centimetre thick holds a person at a kilo a square metre. It is in aircraft floors and rudders, nearly every satellite and every flight case; crushed on purpose it is a one-shot shock absorber, and a cartridge in each leg took the Apollo landers' touchdown. The costs: water gets in at a puncture, freezes and corrodes the core from inside; a dent buckles the core unseen, so panels are tap-tested; every bolt hole is potted first; it will not bend after bonding; and it is dear by the square metre.",
  stats: [["Foil", "~25 µm"], ["Density", "~50 kg/m³"], ["Stiffness gain", "~100×"]],
  uses: "Aircraft floors and control surfaces, satellite panels, race car floors, flight cases.",
  link: "https://en.wikipedia.org/wiki/Honeycomb_structure"
},
{
  id: "nomexcore", cat: "composite", name: "Nomex honeycomb",
  sub: "phenolic-dipped aramid paper core", img: "nomexcore",
  hook: "Aramid paper glued in stripes, pulled open into cells and dipped in phenolic until it stands up. Lighter than the aluminium kind, it does not corrode or conduct, and it springs back from a knock that creases metal.",
  more: "The paper is the meta-aramid sheet that insulates a transformer; a stack is printed with lines of adhesive, pulled open into hexagons, then dipped in phenolic and cured until the walls are stiff, at 30 to 140 kilos a cubic metre. Faced with prepreg in a press it is the floor you stand on in an airliner, the sidewall and the overhead bin, the flap and the rudder, a radome, since radar passes through it, the core of a helicopter blade and the inside of a ski. It passes the cabin fire tests, and a dropped tool leaves no mark. The costs: it is paper, so a cracked skin lets water in and the cells wick it; it carries less shear than metal core at the same weight; it machines slowly and crushes at a cut edge; and it costs more than the metal it replaces.",
  stats: [["Density", "29–130 kg/m³"], ["Dent", "recovers"], ["Flame", "self-extinguishing"]],
  uses: "Aircraft interior panels, radomes, racing bodywork, skis and snowboards.",
  link: "https://en.wikipedia.org/wiki/Honeycomb_structure"
},
{
  id: "glare", cat: "composite", name: "GLARE",
  sub: "glass-fibre / aluminium laminate", img: "glare", extra: ["glare2"],
  hook: "Aluminium sheets alternating with glass prepreg, bonded in an autoclave. A fatigue crack runs through one metal layer and stops, the fibres behind it bridging the gap, so cracks grow ten to a hundred times slower.",
  more: "Delft worked it out in the 1980s: 0.4-millimetre alloy sheets with a quarter-millimetre of glass prepreg between, two to six layers, cured at 120 °C. Where a crack opens in one sheet the fibres across it are whole and hold it shut, and the sheets either side are untouched, so a skin goes far longer between inspections. It is lighter than the alloy, and in a fire the glass layers part and insulate, so it holds a flame out for minutes where aluminium melts through in seconds. The A380 carried 470 square metres of it and saved a tonne and a half. The costs: it comes as autoclave panels, so a fuselage needs splices; it is many times the price of sheet; it is less stiff than the alloy; it cannot be formed after cure; and no airliner since has used it.",
  stats: [["Crack growth", "10–100× slower"], ["Weight saving", "~10% vs alloy"], ["Flies on", "the A380 upper fuselage"]],
  uses: "Airbus A380 fuselage panels, cargo liners, blast-resistant containers.",
  link: "https://en.wikipedia.org/wiki/GLARE"
},
{
  id: "plywood", cat: "composite", name: "Plywood",
  sub: "cross-laminated wood veneer", img: "plywood", extra: ["plywood2", "plywood3"],
  hook: "Wood is thirty times stiffer along the grain than across. Peel a log into veneer, glue every sheet at right angles to the next, and the weakness cancels sheet by sheet: strong both ways, and it will not split.",
  more: "A steamed log spins against a knife and comes off as a ribbon a few millimetres thick, dried, glued, laid up in an odd number of plies so the faces match and the sheet stays flat, and hot-pressed. Every ply stops the next from shrinking across its grain, so the sheet holds its size through the seasons, a screw bites anywhere, and a crack cannot follow the grain, which turns every millimetre. It sheathes houses, forms concrete, planks boats, and in 1941 made the fastest aircraft in the world, built by furniture makers. The costs: an edge drinks water and the plies part; cheap grades hide voids in the core; interior glue breathes formaldehyde for years; a saw tears the face ply; and tropical plywood is logged from forests that do not grow back.",
  stats: [["Plies", "odd number, always"], ["Grain", "alternating 90°"], ["Splitting", "designed out"]],
  uses: "Construction sheathing, furniture, boat hulls, concrete formwork, aircraft (Mosquito).",
  link: "https://en.wikipedia.org/wiki/Plywood"
},
{
  id: "clt", cat: "composite", name: "Cross-laminated timber",
  sub: "CLT mass timber panel", img: "clt", extra: ["clt2", "clt3"],
  hook: "Plywood's logic at building scale: boards laid crosswise, three to nine layers, glued into a slab the size of a wall. It carries like concrete at a fifth the weight and chars at a rate you can calculate.",
  more: "Austrian sawmills began it in the 1990s as a use for side boards: spruce finger-jointed, laid in layers at right angles and glued into panels 16 metres long and 300 thick, routed with every window already in. A panel is wall, floor and bracing at once, spans six metres and arrives numbered, so a storey goes up in a day, dry. Fire chars 0.65 millimetres a minute and the char insulates what is behind, so a slab is rated by thickness; Mjøstårnet in Norway stands eighteen storeys on it. The costs: it is dear per cubic metre; it must be kept dry on site or it swells; a light floor drums underfoot and needs a screed; glue lines can let go in a long fire and expose fresh wood; the steel connectors are the weak point then; and the codes still argue.",
  stats: [["Char rate", "~0.65 mm/min"], ["vs concrete", "~1/5 the weight"], ["Tallest so far", "~25 storeys"]],
  uses: "Mid-rise apartment and office buildings, floor and roof slabs, shear walls.",
  link: "https://en.wikipedia.org/wiki/Cross-laminated_timber"
},
{
  id: "rcconcrete", cat: "composite", name: "Reinforced concrete",
  sub: "concrete with embedded steel", img: "rcconcrete", extra: ["rcconcrete2", "rcconcrete3"],
  hook: "Concrete carries squeezing and cracks under a pull; steel carries the pull. They expand at the same rate, so no season parts them, and the concrete's alkali keeps the steel bright. Most of what was built since 1900.",
  more: "Monier patented it for flowerpots in 1867 and Hennebique built with it from 1892: ribbed bars placed where the tension will be, the bottom of a beam, the top over a support, and the concrete poured round. The concrete cracks, hairline and by design, and the steel takes over; between them they do everything a frame, a slab or a dam asks. The cement's lime holds the pore water at a pH of 12.5, which films the steel against rust. The costs: carbon dioxide works in a millimetre a year, salt faster, and when either reaches the bar the film fails, the rust takes six times the steel's volume and the cover bursts off, which is eating every 1960s car park; it is heavy; the cement is eight per cent of the world's carbon dioxide; and nothing inside can be seen.",
  stats: [["Compression", "concrete, 20–50 MPa"], ["Tension", "steel, ~500 MPa"], ["Expansion", "near-identical, by luck"]],
  uses: "Essentially all modern construction — frames, slabs, dams, foundations.",
  link: "https://en.wikipedia.org/wiki/Reinforced_concrete"
},
{
  id: "uhpc", cat: "composite", name: "Ultra-high-performance concrete",
  sub: "UHPC with steel microfibres", img: "uhpc", extra: ["uhpc2", "uhpc3"],
  hook: "Concrete with the holes designed out: grains graded from a millimetre down to silica fume, water barely enough to wet them, two per cent steel fibre. It bends before it breaks, which no concrete did before.",
  more: "Richard and Cheyrezy published it at Bouygues in 1995 as reactive powder concrete; Lafarge sells it as Ductal. The recipe is a packing problem: cement, silica fume, quartz flour and fine sand sized so each fills the gaps of the last, water to binder near 0.2 kept workable by superplasticiser, and 13 millimetre steel fibres at two per cent by volume. Compressive strength lands at 150 to 200 megapascals, flexural at 20 to 40 as the fibres pull out. The first footbridge went up at Sherbrooke in 1997. The costs: ten to twenty times the price of ready-mix, a mix weighed like a pharmacy, a 90 degree steam cure for the top numbers, and fibres that line up with the flow of the pour, so a badly filled mould is weak where the drawing says it is strong.",
  stats: [["Compressive", "150–200 MPa"], ["Water/binder", "~0.2"], ["Price", "10–20× ready-mix"]],
  uses: "Thin-shell footbridges and lattice façades, bridge deck joints, machine beds, security bollards.",
  link: "https://en.wikipedia.org/wiki/Types_of_concrete#Ultra-high-performance_concrete"
},
{
  id: "selfhealconcrete", cat: "composite", name: "Self-healing concrete",
  sub: "bacterial or capsule-healed concrete", img: "selfhealconcrete",
  hook: "Bacillus spores and their calcium lactate lunch go into the pour and sleep for decades. Water finds a crack, the spores wake, eat, and leave limestone until the crack is plugged. It works only on thin cracks.",
  more: "Henk Jonkers at Delft put alkali-tolerant Bacillus spores into clay pellets or coated granules with calcium lactate, and mixed them in at a few kilograms a cubic metre. Dormant in the alkaline matrix, they wait out the design life. When a crack lets water and oxygen in, they turn the lactate to calcium carbonate at the crack face, and a half-millimetre crack seals in weeks, watertight long before it is strong. Basilisk sells it as an admixture, a mortar and a liquid for standing structures. The costs: cracks over a millimetre stay open, a dry crack never heals, the first clay pellets cost a tenth of the strength, the dose adds tens of euros to a cubic metre that cost a hundred, and nobody has watched a batch for the decades the claims rest on.",
  stats: [["Healed crack", "to ~0.8 mm"], ["Trigger", "water in the crack"], ["Dose", "a few kg/m³"]],
  uses: "Tunnel linings, marine structures, basement walls, anywhere repair access is dearer than the concrete.",
  link: "https://en.wikipedia.org/wiki/Self-healing_material"
},
{
  id: "fibrecement", cat: "composite", name: "Fibre cement",
  sub: "cellulose-reinforced cement board", img: "fibrecement", extra: ["fibrecement2", "fibrecement3"],
  hook: "Asbestos cement with the asbestos taken out: wood pulp bridges the cracks in a thin cement sheet instead. It does not burn, rot or feed termites, holds paint for fifteen years, and cuts in a cloud of silica dust.",
  more: "Ludwig Hatschek patented the asbestos version in 1901 and called it Eternit; his drum machine still makes nearly all of it. The fibre changed in the 1980s when the lungs caught up with the asbestos: now 8 to 10 per cent wood pulp, with some polyvinyl alcohol fibre where the sheet must hold a nail. Autoclaving at 180 degrees turns the lime into tobermorite and halves the moisture movement, which is why siding planked 16 inches apart does not cup, and why the paint lasts. The costs: brittle, so a dropped plank snaps; 11 kilograms a square metre at 8 millimetres; cut under a shroud or score and snap, since the dust is crystalline silica; and the sheets on the roof next door are still the asbestos kind, and look identical.",
  stats: [["Fibre", "8–10% cellulose"], ["Fire", "non-combustible"], ["Weakness", "brittle; silica dust"]],
  uses: "Cladding and siding, soffits, tile backer board, roof slates and corrugated sheet.",
  link: "https://en.wikipedia.org/wiki/Fibre_cement"
},
{
  id: "smc", cat: "composite", name: "Sheet moulding compound",
  sub: "SMC, chopped glass in thickened polyester", img: "smc", extra: ["smc2"],
  hook: "A sheet of polyester, chalk and inch-long chopped glass, ripened a few days until leathery, then pressed in a hot steel die for two minutes. Body panels at car-plant rate; the price is 1.9 grams a cubic centimetre.",
  more: "The sheet is made on a line: resin paste doctored onto a carrier film, glass roving chopped to 25 millimetres rained onto it, a second film on top. Magnesium oxide thickens it over two or three days from syrup to a leather to stack in a 150 degree mould, where 50 to 100 bar and a peroxide set it in one to three minutes. Glass runs 25 to 30 per cent, filler 40, the rest unsaturated polyester with a low-profile thermoplastic that swells as the polyester shrinks, so the panel comes out flat enough to paint. Corvette bodies have been it since 1973. The costs: twice the density of nylon, a shelf life of weeks, fibres that line up where the charge flows and leave it weak across them, paint pops from trapped air, and no recycling but grinding into filler.",
  stats: [["Cycle", "1–3 min at ~150 °C"], ["Glass", "25–30%, 25 mm"], ["Density", "1.8–2.0 g/cm³"]],
  uses: "Car and truck body panels, lorry cabs, tractor hoods, electrical enclosures, bathroom units.",
  link: "https://en.wikipedia.org/wiki/Sheet_moulding_compound"
},
{
  id: "forgedcomposite", cat: "composite", name: "Forged composite",
  sub: "chopped-tow compression moulded CFRP", img: "forgedcomposite", extra: ["forgedcomposite2", "forgedcomposite3"],
  hook: "Carbon tow chopped to an inch, dumped in a die and squeezed: no weave, no layup, fibres pointing wherever they fell. Ribs, bosses and thick walls in one three-minute shot, with a marbled face nobody can order twice.",
  more: "Lamborghini and Callaway Golf announced it in 2010; the Sesto Elemento got the first car tub made of it. The stock is carbon sheet moulding compound: 50 per cent fibre by volume in toughened epoxy, chips 25 to 50 millimetres, pressed at a few hundred tonnes and 150 degrees. Because the chips flow, the part can have what a laminate cannot: a boss with an insert, a wall that goes from two millimetres to twenty, an edge with no plies to peel. Stiffness is about 40 gigapascals, below aluminium, though at half the weight it wins on the scale. The costs: strength a third to a half of woven cloth and scattered by the random chips, so every part carries a wide margin; the flow starves thin sections; and the chips are still carbon at carbon prices.",
  stats: [["Chip", "25–50 mm, ~50 vol%"], ["Cycle", "~3 min in the press"], ["Strength", "⅓–½ of woven cloth"]],
  uses: "Supercar tubs and covers, golf club crowns, watch cases, bicycle cranks, tool bodies.",
  link: "https://en.wikipedia.org/wiki/Forged_composite"
},
{
  id: "alsic", cat: "composite", name: "Al-SiC metal matrix",
  sub: "aluminium with 40–70% SiC particles", img: "alsic", extra: ["alsic2"],
  hook: "Aluminium with half its volume silicon carbide grit. The metal still carries the heat; the ceramic holds the expansion down to a chip's, so a power module can cycle cold to hot for years without the solder shearing.",
  more: "Made by squeezing molten aluminium into a packed bed of SiC particles. At 60 to 70 per cent ceramic the expansion drops from aluminium's 23 to 7 or 8 parts per million a kelvin, next to alumina and silicon, while conductivity stays near 180 watts per metre kelvin, ten times a Kovar plate. Stiffness triples, density stays near 3, and a baseplate cast net to shape needs none. It went into IGBT modules for traction and wind inverters, avionics chassis, and for a while the brake discs of the Lotus Elise. The costs: it cuts with nothing softer than diamond, cannot be welded or bent, chips at an edge like a tile, corrodes where aluminium meets carbide in salt, and every grade is a compromise between heat and expansion that the next chip may not want.",
  stats: [["Expansion", "7–9 × 10⁻⁶/K at 65 vol%"], ["Conductivity", "~180 W/m·K"], ["Machining", "diamond only"]],
  uses: "Power module baseplates, IGBT substrates, avionics packaging, brake discs.",
  link: "https://en.wikipedia.org/wiki/Metal_matrix_composite"
},
{
  id: "tyre", cat: "composite", name: "Steel-belted radial tyre",
  sub: "rubber, steel cord, textile plies", img: "tyre", extra: ["tyre2"],
  hook: "The most complex thing you own: twenty rubber compounds, brass-plated steel cord bonded to sulphur, plies run radially and steel belts across them. It flexes fifty million times and is expected to need nothing.",
  more: "Michelin patented the radial in 1946 and sold it as the X in 1949: carcass cords running bead to bead at 90 degrees, so the sidewall bends freely, and a stiff belt of steel cord under the tread, so the footprint stays flat. The bias tyre it replaced had crossed plies that scrubbed the tread as they flexed; the radial ran cooler, lasted twice as long and cut rolling resistance by a fifth. The steel cord is brass-plated because the copper sulphide grown in the cure is the only thing that holds rubber to steel; the inner liner is halobutyl because it holds air. The costs: a harder ride, a sidewall a kerb can split, a belt that rusts through a cut, nothing in it that separates for recycling, and the wear particles that now outweigh the exhaust.",
  stats: [["Patented", "Michelin, 1946"], ["Materials", "~20 compounds, steel, textile"], ["Cord bond", "brass → copper sulphide"]],
  uses: "Every road vehicle built since the 1970s.",
  link: "https://en.wikipedia.org/wiki/Radial_tire"
},
{
  id: "transparentarmour", cat: "composite", name: "Transparent armour",
  sub: "glass / polycarbonate / ceramic laminate", img: "transparentarmour", extra: ["transparentarmour2", "transparentarmour3"],
  hook: "A stack with a job for every layer: a hard face to break the bullet, thick glass to spread the blow, polycarbonate at the back to catch it all without spitting splinters inward. Fifty millimetres for a rifle.",
  more: "Against a handgun, 20 to 30 millimetres of laminated glass will do, and shop windows carry it. Against a 7.62 round the stack grows to 50 to 80 millimetres and 100 to 160 kilograms a square metre. The face, glass or increasingly a ceramic such as aluminium oxynitride or spinel, erodes the core; the glass behind spreads the load in a wide cone; the polycarbonate backing stretches instead of breaking and stops the spall. The rating names the round and the count, since the second hit lands on broken glass. The costs: weight above all, a tint and a double image that grow with thickness, delamination at the edges after a few years of sun, polycarbonate that scratches and yellows, and a price per square metre in the thousands.",
  stats: [["Handgun", "20–30 mm"], ["Rifle", "50–80 mm, 100–160 kg/m²"], ["Back layer", "polycarbonate, anti-spall"]],
  uses: "Armoured vehicle and bank glazing, cockpit windscreens, riot shields.",
  link: "https://en.wikipedia.org/wiki/Bulletproof_glass"
},
{
  id: "dyneemahb", cat: "composite", name: "UHMWPE armour laminate",
  sub: "cross-plied Dyneema HB", img: "dyneemahb",
  hook: "Sheets of polyethylene fibre, every strand parallel, cross-plied at ninety degrees and pressed with a fifth of their weight in resin. It stops a rifle round lighter than any other armour, floats, and ignores water.",
  more: "DSM spins ultra-high molecular weight polyethylene from a gel so the chains line up: a fibre fifteen times the strength of steel by weight, 0.97 grams a cubic centimetre. For armour it is not woven but laid unidirectional, cross-plied 0 and 90, and pressed at 130 degrees and a few hundred bar into a hard plate. Hit, the plies stretch and the back bulges, spreading the blow over a palm; no ceramic, no fragments. The US Enhanced Combat Helmet is a pressed shell of it, a third more stopping power than the aramid helmet at the same weight. The costs: it creeps under steady load, softens by 100 degrees and melts at 150, so a plate left in a hot car loses its rating; and the bulge that saves the fibre bruises the ribs.",
  stats: [["Fibre density", "0.97 g/cm³, floats"], ["Resin", "~20%"], ["Weakness", "softens by 100 °C, creeps"]],
  uses: "Helmets, vehicle and ship armour, ballistic plates, blast containment.",
  link: "https://en.wikipedia.org/wiki/Ultra-high-molecular-weight_polyethylene"
},
{
  id: "pvcfoam", cat: "composite", name: "Structural PVC foam core",
  sub: "cross-linked PVC, Divinycell type", img: "pvcfoam",
  hook: "A rigid closed-cell foam that is not there to insulate: in a sandwich panel the skins take tension and compression, and the core keeps them apart and stops them sliding. No water in it if the skin is holed.",
  more: "Cross-linked PVC foam, Divinycell or Airex, is polyvinyl chloride blown with a polyurea network through it, 40 to 250 kilograms a cubic metre. A hull of two 2 millimetre glass skins on a 20 millimetre core is stiffer than a 10 millimetre solid laminate at half the weight, because stiffness goes with the cube of the depth. Against balsa it drinks no water and rots nowhere; against polyurethane foam it keeps its shear strength. The costs: shear strength of a megapascal or two, so it fails first at a bulkhead or a fitting; it softens above 60 degrees and outgasses at cure, so a dark deck in the tropics prints the core through the gelcoat; a crushed cell stays crushed; and it is PVC, with the fire smoke and the recycling that implies.",
  stats: [["Density", "40–250 kg/m³"], ["Shear strength", "~1–3 MPa"], ["Heat", "softens above ~60 °C"]],
  uses: "Boat hulls and decks, wind turbine blade shells, rail car panels.",
  link: "https://en.wikipedia.org/wiki/Sandwich-structured_composite"
},
{
  id: "gypsum", cat: "composite", name: "Gypsum board",
  sub: "CaSO₄·2H₂O between paper facings", img: "gypsum", extra: ["gypsum2"],
  hook: "A fifth of the board is water, locked in the crystal. In a fire it boils off and holds the far side at 100 degrees until the sheet is dry: 16 millimetres buys an hour. One hole for a pipe gives the hour away.",
  more: "Patented by Augustine Sackett in 1894, a continuous line at USG by 1917: slurry poured between two papers, set in minutes, dried in a kiln. Calcined gypsum takes back its water as it sets, so the core is calcium sulphate dihydrate, 21 per cent water by mass. Fire turns it back: calcination eats heat at 100 to 150 degrees and the cold face stays below boiling until the front has moved through the thickness, 15 millimetres in roughly an hour. Type X adds glass fibre so the dried core stays in the wall. The costs: it has no strength to speak of, a shelf bracket pulls out of it, and paper that stays wet grows mould; and the rating belongs to the assembly, so the plumber's hole, the unfilled joint and the missing tape bring the hour down to minutes.",
  stats: [["Bound water", "~21% by mass"], ["Rating", "~60 min at 16 mm, Type X"], ["Undone by", "one unsealed hole"]],
  uses: "Interior walls and ceilings, fire separations, shaft linings.",
  link: "https://en.wikipedia.org/wiki/Drywall"
},
{
  id: "g10", cat: "composite", name: "G10 / FR-4",
  sub: "woven glass cloth in epoxy", img: "g10", extra: ["g10b"],
  hook: "Woven glass cloth in epoxy, pressed hot: the board every circuit lives on, and a structural material besides. An insulator to 20 kilovolts a millimetre, unmoved by water. FR-4 adds bromine so it puts itself out.",
  more: "NEMA grade G10 is E-glass cloth in a bisphenol epoxy, pressed at 170 degrees into sheets from a quarter millimetre to two inches; FR-4 is the same with tetrabromobisphenol A in the resin, which snuffs a flame, and is nearly all of what is made. Tensile strength near 300 megapascals along the weave, and it keeps its stiffness at liquid helium, so it holds superconducting magnets apart. For a circuit board the sheet comes clad in copper foil, etched, drilled and plated through. The costs: the glass eats carbide drills and the dust is a fibre you must not breathe; the epoxy softens at 130 to 180 degrees, and a lead-free solder reflow sits at the edge of that; a drilled hole can delaminate the layers; and FR-4 in a fire gives off brominated smoke.",
  stats: [["Dielectric strength", "~20 kV/mm"], ["Tg", "130–180 °C"], ["Hazard", "glass dust; brominated smoke"]],
  uses: "Printed circuit boards, knife scales, transformer spacers, cryogenic supports.",
  link: "https://en.wikipedia.org/wiki/FR-4"
},
{
  id: "copv", cat: "composite", name: "COPV",
  sub: "composite overwrapped pressure vessel", img: "copv", extra: ["copv2", "copv3"],
  hook: "A liner that only keeps the gas in, wound with carbon fibre that does all the holding, laid at the angles the stress asks for, so the tank weighs a third of steel. A dropped one may look fine and not be.",
  more: "Type III has an aluminium liner, Type IV a plastic one; both are wrapped on a filament winder with carbon tow in epoxy, hoop wraps on the cylinder and helical wraps over the domes near 55 degrees, where the fibre balances the two stresses. Working pressure is 350 to 700 bar, the burst margin 2.25, and the Mirai carries five kilograms of hydrogen in tanks that weigh 90. The costs: the fibre is 60 per cent of the price; an impact breaks fibres under an unmarked skin, so a dropped cylinder is condemned on sight; stress rupture, fibres failing one at a time under steady load, sets the life at 15 years; a plastic liner seeps hydrogen and can collapse off the wall on a fast vent; and Falcon 9 lost a rocket in 2016 to a COPV in liquid oxygen.",
  stats: [["Pressure", "350–700 bar, burst ×2.25"], ["vs steel", "~⅓ the weight"], ["Life", "15 years; scrap if dropped"]],
  uses: "Hydrogen and CNG vehicle tanks, breathing-apparatus cylinders, spacecraft helium and xenon tanks.",
  link: "https://en.wikipedia.org/wiki/Composite_overwrapped_pressure_vessel"
},
{
  id: "pykrete", cat: "composite", name: "Pykrete",
  sub: "14% wood pulp frozen into water", img: "pykrete", extra: ["pykrete2", "pykrete3"],
  hook: "Ice with sawdust in it. The fibres stop a crack running, so it is three times as strong as ice and melts far slower; a block takes a saw and a bullet. Britain planned an aircraft carrier of it in 1943.",
  more: "Geoffrey Pyke proposed the carrier, Max Perutz did the physics under Smithfield market, and a block went to Quebec, where it was shot at. 14 per cent wood pulp by weight, frozen: crush strength near 7 megapascals against ice at 2, and the pulp insulates its own surface, so the outside melts into a wet felt and the inside stays frozen. Habakkuk was to be 600 metres long and two million tonnes; a 1,000 tonne trial hull on Patricia Lake lasted the summer of 1943. It died on arithmetic: the pulp alone was 300,000 tonnes of paper, and the Azores bases closed the Atlantic gap first. The costs: it creeps, so a hull sags under its own weight unless kept below minus 15; it needs cold plant for its whole life; and no use has been found for it since.",
  stats: [["Pulp", "~14% by mass"], ["Crush strength", "~7 MPa, ice ~2"], ["Project", "Habakkuk, 1943; 1,000 t trial hull"]],
  uses: "None in service; a wartime proposal, winter domes and vaults built for the record, and a durable demonstration piece.",
  link: "https://en.wikipedia.org/wiki/Pykrete"
},
{
  id: "hempcrete", cat: "composite", name: "Hempcrete",
  sub: "hemp shiv bound with lime", img: "hempcrete", extra: ["hempcrete2", "hempcrete3"],
  hook: "Not structural: hemp shiv in lime, tamped round a timber frame, is insulation to plaster. The lime takes back the CO₂ it lost in the kiln, the plant took its share growing, and a wall can end carbon-negative.",
  more: "The shiv is the hurd, the woody core left when the fibre is stripped, chopped to a centimetre or two; mixed with hydrated lime, a little hydraulic lime to set it, and water, and tamped between shuttering round a post-and-beam frame 300 millimetres thick, or sprayed, or pressed into blocks. It sets by carbonation over months: 275 kilograms a cubic metre, conductivity 0.06 to 0.07, a wall that stores heat and takes up and gives back moisture, so the house runs even. The costs: it carries nothing, so the frame does all the work; it must dry for weeks before plaster, and wet shiv rots in the wall; it insulates half as well as mineral wool for the thickness; it cannot sit on a damp floor; and the lime burns skin and takes months to reach its strength.",
  stats: [["Density", "~275 kg/m³"], ["λ", "0.06–0.07 W/m·K"], ["Carbon", "net negative, over a life"]],
  uses: "Infill walls and insulating renders in low-energy and heritage building.",
  link: "https://en.wikipedia.org/wiki/Hempcrete"
},
{
  id: "fgm", cat: "composite", name: "Functionally graded material",
  sub: "FGM, continuously varying composition", img: "fgm",
  hook: "Instead of gluing ceramic to metal and living with the stress where they meet, the mix is swept from one to the other across a few millimetres. No interface, nothing to peel. Japanese spaceplane work, 1984.",
  more: "Niino, Hirai and Watanabe proposed it at Sendai in 1984 for a skin at 2,000 kelvin outside and a thousand less inside: ceramic at the hot face, metal at the cool one, and between them powder mixes sintered together, so the expansion changes by steps too small to crack. It is made by layering powders, by plasma spray with two feeders, and by directed energy deposition, where the feed ratio changes on the fly and a steel part grades into Inconel in one build. The costs: every gradient is a new material with no fatigue data; the middle mixes form brittle phases the ends never do; residual stress moves rather than vanishes; and parts come one at a time, which is why the two-layer thermal barrier coating still wins.",
  stats: [["Interface", "none; a gradient"], ["Made by", "powder layers, plasma spray, DED"], ["Origin", "Sendai, 1984"]],
  uses: "Thermal barrier layers, rocket nozzles, cutting tools, graded bone implants, and research.",
  link: "https://en.wikipedia.org/wiki/Functionally_graded_material"
},
{
  id: "lattice", cat: "additive", name: "Printed lattice",
  sub: "a solid whose stiffness is geometry", img: "lattice", extra: ["lattice2"],
  hook: "Properties from the drawing, not the chemistry. Density sets the stiffness and the cell sets how it falls: a truss loses stiffness in step with density, a foam with its square. Printing made the inside a design.",
  more: "Maxwell wrote the rule in 1864: a frame with enough struts carries load in pure tension and compression, and one without bends at the nodes. The octet truss, the stretch-dominated cell, became the thing to print. Its stiffness goes as density, a foam's as the square, so at ten per cent density the truss is ten times stiffer. Powder-bed printers make it in titanium and nylon at cells of one to ten millimetres: heat exchangers, helmet liners, the porous skins of hip cups that bone grows into. The costs: every strut is a notch, so fatigue life is a fraction of the solid; powder trapped inside cannot all be shaken out; low-angle struts print rough and thin; the inside needs a CT scan; and saving 60 per cent of the mass costs several times the solid part.",
  stats: [["Mass saving", "50–80%"], ["Octet truss", "stiffness ∝ density"], ["Foam", "stiffness ∝ density²"]],
  uses: "Aerospace brackets, heat exchangers, bone-ingrowth implants, impact liners.",
  link: "https://en.wikipedia.org/wiki/Mechanical_metamaterial"
},

/* ---------- 3D PRINTING & ADDITIVE ---------- */
{
  id: "fff", cat: "additive", name: "Printer filament",
  sub: "1.75 mm spooled thermoplastic", img: "fff", extra: ["fff2", "fff3"],
  hook: "A monofilament on a spool, held to ±0.02 mm, because the extruder meters by length and a fat spot becomes a blob. The machine only melts and places it, so a part is a stack of welds, the weld its weakest thing.",
  more: "Pellets melt in a screw extruder, pass a die, and are pulled through a water bath at the speed that sets the diameter, laser-gauged and wound. PLA prints at 200 degrees and warps little; PETG at 240 is tougher and drinks water; ABS at 250 shrinks and wants a warm box; nylon and the carbon-filled grades need a hardened nozzle and a drying oven. A layer bonds to the one below across a weld cooler than the melt that lasts a fraction of a second, so strength across the layers is 20 to 70 per cent of strength along them. The costs: a spool crossed under itself snaps the strand mid-print; moist filament pops and leaves voids; the layer lines are stress raisers and leak paths; and plastic at 2 euros a kilogram as pellets is 20 as filament.",
  stats: [["Diameter", "1.75 mm, ±0.02 mm"], ["Z strength", "20–70% of XY"], ["Ruined by", "moisture; a crossed spool"]],
  uses: "Prototyping, jigs and fixtures, end-use brackets, the whole desktop printer market.",
  link: "https://en.wikipedia.org/wiki/3D_printing_filament"
},
{
  id: "ebm", cat: "additive", name: "Electron-beam titanium",
  sub: "Ti-6Al-4V built hot, in vacuum", img: "ebm", extra: ["ebm2"],
  hook: "Titanium grown in a powder bed at 700 degrees anneals itself as it goes, so it comes out lamellar and nearly free of the stress a laser leaves. The skin is rough powder, and surgeons want it so: bone grows into it.",
  more: "An electron gun of a few kilowatts, steered by magnets at kilometres a second, first sinters each new layer lightly so it holds its charge, then melts the part, in the vacuum titanium needs anyway. Because the bed sits at 650 to 750 degrees the part is stress-relieved as it builds, needs few supports, and comes out as fine lamellar alpha-beta titanium close to the wrought alloy. Hip cups have been built this way since 2007, the solid shell and its trabecular skin in one piece. The costs: the surface is rough, 25 to 35 microns, so mating faces are machined; the beam is wide, so a feature under half a millimetre is lost; the hot cake of powder is blasted off with more of the same powder; and the gun needs a vacuum and a new filament every build.",
  stats: [["Bed", "650–750 °C, self-annealed"], ["Structure", "lamellar α+β"], ["Surface", "Ra 25–35 µm; bone grows in"]],
  uses: "Acetabular cups and spinal cages, patient-specific implants, turbine blades, refractory alloys.",
  link: "https://en.wikipedia.org/wiki/Electron-beam_additive_manufacturing"
},
{
  id: "waam", cat: "additive", name: "Welding wire feedstock",
  sub: "ER70S, 5356 and titanium wire", img: "waam", extra: ["waam2"],
  hook: "Welding wire off a spool, laid down by the kilogram an hour instead of the gram. What you get is weld metal, sound once machined, and the build volume is the reach of the robot, so a propeller can be printed.",
  more: "A MIG or plasma torch on a robot, the wire a welder buys, and a path that lays bead on bead until a wall stands up: one to ten kilograms an hour against the grams of a powder bed, in steel, aluminium 5356, Inconel and titanium, at a welder's feedstock cost. Damen and RAMLAB printed a 400 kilogram ship's propeller in 2017 and had it classed; MX3D put a stainless footbridge over an Amsterdam canal in 2021. The costs: the metal is a casting of weld beads, with the big grains and the anisotropy that implies, so parts are designed on weld-metal numbers and machined all over; heat builds up and the geometry drifts unless the robot waits between layers; a wall thinner than the bead cannot be made; and titanium needs a tent of argon round the whole robot.",
  stats: [["Rate", "1–10 kg/h"], ["Build volume", "the robot's reach"], ["Finish", "weld beads; machine after"]],
  uses: "Rocket tanks, ship propellers, large brackets, repair and feature addition on big castings.",
  link: "https://en.wikipedia.org/wiki/3D_printing_processes"
},
{
  id: "coldspray", cat: "additive", name: "Cold-spray powder",
  sub: "ductile metal, bonded by impact", img: "coldspray", extra: ["coldspray2", "coldspray3"],
  hook: "Metal powder fired at a surface at twice the speed of sound in warm gas. Nothing melts: particle and surface deform past their oxide skins and weld cold. So the powder must be ductile; a hard one bounces off.",
  more: "Found by accident in Novosibirsk in the 1980s, when particles meant to erode a wind-tunnel model stuck to it. Helium or nitrogen at 30 bar runs through a de Laval nozzle to 500 to 1,200 metres a second; a particle of 5 to 45 microns arrives above its critical velocity and splats, its skin jetting out as it shears, and the fresh metal under the oxide bonds as in an explosive weld. Copper, aluminium, nickel and tantalum work; the deposit is dense and free of oxide, and builds up by the millimetre onto a finished part, which is why air forces repair magnesium gearboxes with it. The costs: the hard, brittle metals do not stick; the deposit is brittle until annealed; helium costs more than the powder; and a spray that misses the part is a sandblast.",
  stats: [["Particle speed", "500–1,200 m/s"], ["Needs", "ductile powder, 5–45 µm"], ["Heat", "none; no oxide, no distortion"]],
  uses: "Repairing worn or corroded castings, adding features to finished parts, coating, field repair of aircraft and boat motors.",
  link: "https://en.wikipedia.org/wiki/Cold_spraying"
},
{
  id: "twophoton", cat: "additive", name: "Two-photon resist",
  sub: "acrylate resist cured only at the focus", img: "twophoton", extra: ["twophoton2", "twophoton3"],
  hook: "A resist that cures only where two infrared photons arrive in the same instant, which happens inside the focal spot and nowhere else. So light writes smaller than itself: 100 nanometre struts, anywhere in the drop.",
  more: "A femtosecond laser at 780 nanometres is focused into a drop of acrylate resist with a photoinitiator that absorbs at 390; one photon does nothing, two together do, and the chance of two goes with the square of intensity, so only the centre of the focus sets. The stage moves the focus in three dimensions, the uncured resist is washed away, and a castle stands on a pencil lead. Nanoscribe's machines write at a few hundred nanometres; a cubic millimetre is a day. The costs: speed, since every tiny voxel is written in turn; shrinkage of a few per cent as the acrylate cures, which bends anything slender; the resist is a soft polymer, so a metal or ceramic part needs a second step; and the structure is invisible without an electron microscope.",
  stats: [["Feature size", "~100–200 nm"], ["Mechanism", "two-photon absorption"], ["Rate", "a cubic millimetre a day"]],
  uses: "Microlenses printed on fibre tips, microfluidic parts, mechanical metamaterials, micro-robots, cell scaffolds.",
  link: "https://en.wikipedia.org/wiki/Multiphoton_lithography"
},
{
  id: "concreteprint", cat: "additive", name: "Printable mortar",
  sub: "thixotropic fine-aggregate mix", img: "concreteprint", extra: ["concreteprint2", "concreteprint3"],
  hook: "A mix that must contradict itself: fluid enough to pump down a hose, stiff enough a minute later to carry the bead stacked on it, before any of it has cured. Nobody has solved the steel.",
  more: "Cement, sand under 4 millimetres, a modifier that lets it flow when sheared and stand when still, and at the nozzle an accelerator that sets the open time to minutes. The bead is 30 to 50 millimetres wide and 10 to 20 high, and a wall is two beads with a cavity between; a gantry lays a storey in a day or two. The first printed bridge, at Gemert in 2017, was printed in slices and post-tensioned: that is how the steel got in. The costs: each layer is a cold joint, weaker and more permeable than the mass, so a wall is strong along the bead and weak across it; no rebar goes in as the head runs, so printed walls carry little or are prestressed after; the mix is cement-rich and the carbon with it; and the ribbed surface is the look or a rendering bill.",
  stats: [["Aggregate", "under ~4 mm"], ["Bead", "30–50 mm wide, 10–20 high"], ["Open problem", "reinforcement"]],
  uses: "House shells and walls, bridges, street furniture, formwork for conventional concrete.",
  link: "https://en.wikipedia.org/wiki/Construction_3D_printing"
},
{
  id: "sandprint", cat: "additive", name: "Furan-bonded sand",
  sub: "foundry sand, printed into moulds", img: "sandprint", extra: ["sandprint2"],
  hook: "Silica sand with an acid catalyst in it, spread in layers, and furan resin jetted where the mould should be. It sets where the head passed; the rest pours away. The casting that follows is three thousand years old.",
  more: "A binder-jet printer spreads sand of a tenth to a third of a millimetre in layers of 0.3, and an inkjet head lays furfuryl alcohol resin on the slice; the acid in the sand cures it in minutes, and the loose sand is vacuumed off a mould ready to pour. No pattern was carved and no core had to be drawn out of a box, so a cooling passage can loop through a cylinder head any way the heat wants, and a one-off block costs no tooling. A mould for a two-tonne casting prints overnight. The costs: the mould is used once and goes to landfill with the furan in it; the sand grain is coarser than a good hand mould, so the finish is rougher; the furan fumes are regulated; and a printed core is weaker than a shell core, so a long thin one bends in the pour.",
  stats: [["Sand", "silica, 0.1–0.3 mm"], ["Binder", "furan resin, acid cured"], ["Tooling", "none; the mould is the print"]],
  uses: "Engine blocks and heads, pump and valve bodies, art casting, foundry prototyping.",
  link: "https://en.wikipedia.org/wiki/Powder_bed_and_inkjet_head_3D_printing"
},
{
  id: "contfibre", cat: "additive", name: "Printed continuous tow",
  sub: "unbroken carbon or glass in a printed shell", img: "contfibre",
  hook: "A single unbroken tow, fed by a second nozzle along the load path while the plastic shell prints round it. Chopped fibre stiffens a filament; a continuous one changes what the part is. A tow will not turn a corner.",
  more: "Markforged sold the first machine in 2014: a nylon extruder for the shell and a second head that lays a pre-impregnated tow of carbon, glass or Kevlar and cuts it. The slicer decides where the fibre goes, rings round holes and edges, or rasters across a load, and stiffness along the fibre reaches 50 gigapascals, aluminium's, at a third of the weight. A fixture comes off the bed overnight. The costs: the fibre lies only in the plane of the layer, so the part is stiff in two directions and plastic in the third; a tow cannot turn tighter than a few millimetres, so small holes go unreinforced; voids where tow meets shell start the fatigue cracks; the fibre is a fifth of the volume, a laminate's half; and the printer costs ten times the desktop kind.",
  stats: [["Fibre", "continuous, path-placed"], ["Stiffness", "to ~50 GPa along the fibre"], ["Limit", "in-plane only; no sharp turns"]],
  uses: "Tooling and fixtures, drone and robot structures, replacement brackets, low-volume load-bearing parts.",
  link: "https://en.wikipedia.org/wiki/Fibre-reinforced_plastic"
},
{
  id: "boundmetal", cat: "additive", name: "Bound metal filament",
  sub: "metal powder in wax and polymer", img: "boundmetal", extra: ["boundmetal2", "boundmetal3"],
  hook: "Injection-moulding feedstock pulled into a filament: steel powder in wax and polymer, printed on a plastic machine. Solvent and furnace then take the binder, and a fifth of the size with it.",
  more: "Metal injection moulding has run since the 1980s on the same recipe: 60 per cent powder by volume in wax and polymer, debound, then sintered. BASF put that feedstock on a spool in 2018 as Ultrafuse 316L. It prints like a stiff, heavy PLA, goes into a solvent bath that takes the wax and leaves a sponge, then into a furnace at 1,380 degrees where the polymer burns off and the powder necks together, shrinking 16 to 20 per cent in every direction by an amount the slicer scales up for. The costs: the shrinking part sags under its own weight, so the furnace is where it fails; density is 96 to 99 per cent and fatigue strength a sintered part's; a section over a centimetre cannot be debound; and the furnace costs more than the printer.",
  stats: [["Solids", "~55–60% powder by volume"], ["Shrinkage", "16–20% on sintering"], ["Density", "96–99% after sinter"]],
  uses: "Tooling, fixtures and soft jaws, spare parts, low-volume stainless and tool steel components.",
  link: "https://en.wikipedia.org/wiki/Metal_injection_molding"
},
{
  id: "lcmceramic", cat: "additive", name: "Ceramic slurry resin",
  sub: "alumina or zirconia in photopolymer", img: "lcmceramic", extra: ["lcmceramic2"],
  hook: "Ceramic powder, half the volume, stirred into photopolymer that is matched to its refractive index, or the paste scatters the light meant to cure it. Fired, the polymer leaves and 99 per cent dense zirconia stays.",
  more: "Lithoz in Vienna sold the first machines in 2011: a projector cures the slurry layer by layer from below through a clear vat, the green part is a plastic full of ceramic, and then the real work starts. Debinding takes days, the temperature raised by fractions of a degree a minute so the polymer gas gets out without cracking the body; sintering at 1,450 to 1,600 degrees shrinks it 20 to 25 per cent. What comes out is alumina or zirconia at 99.4 per cent density, as strong as a pressed ceramic, with walls of 0.1 millimetre no press could form. The costs: a build is small and slow; solids stop near 55 per cent, and dark powders such as silicon carbide barely cure; a thick section cracks in debinding; and every new shape is calibrated by firing one.",
  stats: [["Solids loading", "40–55% by volume"], ["After firing", ">99% dense"], ["Shrinkage", "~20–25%"]],
  uses: "Dental crowns and bridges, surgical tools, microreactors, high-temperature cores.",
  link: "https://en.wikipedia.org/wiki/Ceramic_engineering"
},
{
  id: "soluble", cat: "additive", name: "Soluble support",
  sub: "PVA, BVOH and HIPS", img: "soluble", extra: ["soluble2"],
  hook: "Scaffolding that leaves by a chemical door, not a mechanical one: PVA and BVOH wash out in water, HIPS in limonene. Once support need not be broken off, a sealed cavity or a meshed gear train is just printed.",
  more: "A second nozzle lays the support in a plastic that sticks to the part well enough to hold it and dissolves out afterwards. Polyvinyl alcohol is the usual one, printed at 200 degrees under PLA and PETG and gone after a few hours in water; BVOH is its less thirsty cousin; HIPS goes under ABS and dissolves in limonene overnight. Stratasys has sold an alkaline-soluble support with its industrial machines since the 1990s; the idea came from there. The costs: PVA drinks water from the air and prints as foam after a week on the shelf, so it lives in a dry box; it chars in a hot nozzle and clogs it; a spool costs three times the part plastic and most of it goes down the drain; and a two-head printer purges and oozes, so the print takes twice as long.",
  stats: [["PVA", "dissolves in water"], ["HIPS", "dissolves in limonene"], ["Needs", "a second extruder"]],
  uses: "Enclosed voids, printed-in-place mechanisms, fine overhangs, clean surfaces where supports touched.",
  link: "https://en.wikipedia.org/wiki/Polyvinyl_alcohol"
},
{
  id: "slaresin", cat: "additive", name: "Photopolymer resin",
  sub: "acrylate oligomers and a photoinitiator", img: "slaresin", extra: ["slaresin2", "slaresin3"],
  hook: "Oligomers, a diluent and an initiator that fires under violet light. Each layer cross-links into the last instead of welding to it, so no weak direction. It leaves the vat half-cured; the liquid sensitises skin.",
  more: "Charles Hull patented it in 1986 with a laser drawing in a bath of acrylate; machines now set a whole layer at once through an LCD mask. The resin is a syrup of acrylate oligomers, a monomer to thin it, a photoinitiator that splits into radicals under the light, and a dye that keeps the cure from running deeper than the layer. The radical chain runs down into the layer below, which is why the part is one network rather than a stack of welds. The costs: the green part is 60 to 80 per cent cured and must be washed in alcohol and finished under a lamp; standard resins are brittle and yellow in sunlight; the liquid is a skin sensitiser and the wash is flammable; and the tough grades borrow from urethanes and pay in creep.",
  stats: [["Cure", "UV, 385 or 405 nm"], ["Anisotropy", "essentially none"], ["Handling", "sensitiser, wear gloves"]],
  uses: "Every vat process: laser, DLP, masked LCD and continuous printing; dental, jewellery, models, engineering parts.",
  link: "https://en.wikipedia.org/wiki/Photopolymer"
},
{
  id: "pa12powder", cat: "additive", name: "PA12 powder",
  sub: "nylon 12 for powder bed fusion", img: "pa12powder", extra: ["pa12powder2", "pa12powder3"],
  hook: "Nylon 12 is chosen for a quirk: it melts at 185 degrees and recrystallises near 140, so a fused layer stays liquid while the next joins it. The grains never fully melt, so it has pores; the powder ages in the bed.",
  more: "A laser, or an infrared lamp over a printed absorber, fuses powder of 50 microns in a bed held a few degrees under the melting point. The 40-degree gap between melting and freezing is the whole trick: the part stays molten through many layers and the bed does not, so the unfused powder is the support and nothing else is needed. Parts come out matt, slightly porous, tough and a little flexible, and take dye to the core. The costs: powder that sat hot has grown in molecular weight and gives an orange-peel skin, so each build is 30 to 50 per cent fresh and the rest is thrown away; the pores make parts absorbent and a leak path unless sealed; a build cools for as long as it printed; and the cake is dug out and blasted by hand.",
  stats: [["Particle size", "~45–60 µm"], ["Refresh", "30–50% virgin per build"], ["Porosity", "~2–4%"]],
  uses: "Laser-sintered and agent-jetted parts, ducting, housings, orthotics, living hinges.",
  link: "https://en.wikipedia.org/wiki/Nylon_12"
},
{
  id: "metalpowder", cat: "additive", name: "Gas-atomised powder",
  sub: "spherical metal feedstock", img: "metalpowder", extra: ["metalpowder2"],
  hook: "Molten metal blown apart by an argon jet freezes into spheres before it lands. Roundness is the whole specification: only spheres flow and pack under a recoater blade, and a satellite on a sphere streaks a layer.",
  more: "A stream of melt falls through a ring of gas nozzles under a tundish; the jet tears it into droplets, and surface tension rounds each one in the milliseconds before it freezes. The yield in the 15 to 45 micron cut a laser bed wants is a third at best; the rest is sieved out for coarser processes. Argon, because nitrogen dissolves in titanium and steel. The costs: a satellite, a small drop frozen onto a large one, spoils the flow and seeds a pore; a hollow sphere with argon inside is a pore nothing can close; oxygen is counted in parts per million, since every pass through a hot bed adds some, and titanium powder is retired after a dozen builds; and the fine fraction is a dust that burns and goes to the lungs.",
  stats: [["Size cut", "15–45 µm for laser beds"], ["Shape", "spherical, satellite-free"], ["Oxygen", "tracked, ppm level"]],
  uses: "Feedstock for every powder bed and blown powder process; also metal injection moulding and thermal spray.",
  link: "https://en.wikipedia.org/wiki/Powder_metallurgy"
},
{
  id: "alsi10mg", cat: "additive", name: "AlSi10Mg",
  sub: "printable aluminium casting alloy", img: "alsi10mg",
  hook: "A casting alloy that suits lasers: silicon near the eutectic gives a narrow freezing range, so the melt pool solidifies without tearing itself apart. Cooling is steep enough that the print beats the casting.",
  more: "AlSi10Mg is what die-casters pour for gearbox housings, and the first aluminium that printed cleanly, around 2010: at 10 per cent silicon the alloy freezes over a few degrees rather than fifty, so the shrinking pool does not pull itself open behind the laser. The pool cools at a million degrees a second, and the silicon that forms coarse plates in a casting stays as a fine network round cells a micron across; the as-built part reaches 450 megapascals where the casting manages 300. The costs: aluminium reflects the laser and conducts the heat away, so it wants twice the power of steel and spatters anyway; hydrogen leaves pores as the pool freezes; the fine network coarsens at 160 degrees, so the strength goes in the first heat treatment.",
  stats: [["Tensile", "~450 MPa as built"], ["Why it works", "near-eutectic, no hot tearing"], ["Versus cast", "finer grain, stronger"]],
  uses: "Heat exchangers and cold plates, motorsport brackets, drone and robot structures.",
  link: "https://en.wikipedia.org/wiki/Aluminium%E2%80%93silicon_alloys"
},
{
  id: "grcop", cat: "additive", name: "GRCop-42",
  sub: "Cu-Cr-Nb rocket chamber alloy", img: "grcop", extra: ["grcop2"],
  hook: "Copper carries heat better than almost anything and softens if you look at it hot. Cr₂Nb particles pin its grains at 800 degrees while the copper keeps conducting. Printed, since the channels cannot be drilled.",
  more: "Glenn developed GRCop in the 1980s for the Shuttle main engine liner: copper with 4 per cent chromium and 2 of niobium, which form Cr₂Nb and stay as particles a tenth of a micron across that pin grain boundaries up to 800 degrees. Cast, it had to be forged and machined, the channels milled into a liner and closed with an electroformed jacket, months of work. Printed in a laser bed since 2014, the chamber comes out with its channels inside the wall; the first GRCop-42 chambers were fired at Marshall in 2018 and flew on Terran 1 in 2023. The costs: copper reflects the infrared laser, so it wants a hot bed or a green one; the powder oxidises and lives under argon; and conductivity is 80 per cent of pure copper, paid for in wall temperature.",
  stats: [["Conductivity", "~80% of pure copper"], ["Hot strength", "holds to ~800 °C"], ["Built by", "laser powder bed fusion"]],
  uses: "Regeneratively cooled rocket combustion chambers, nozzle liners and injectors.",
  link: "https://en.wikipedia.org/wiki/Regenerative_cooling_(rocketry)"
},
{
  id: "bioink", cat: "additive", name: "Bioink",
  sub: "cell-laden hydrogel", img: "bioink", extra: ["bioink2", "bioink3"],
  hook: "Three demands that pull against each other: runny enough to pass a nozzle, stiff enough to hold shape, gentle enough that the cells survive the shear. The number that matters is how many cells are still alive.",
  more: "Alginate sets in a bath of calcium ions; gelatin methacrylate, GelMA, sets under blue light with a photoinitiator; collagen and fibrin set with warmth and enzymes; Pluronic is printed as a gel and washed out cold, a sacrificial ink. The syringe pushes at a shear that would kill the cells in a plain liquid, so the ink is made shear-thinning: a gel at rest, a liquid in the needle, a gel again on the plate. The costs: a strut that holds its shape is stiffer than tissue, and the cells inside behave as if cast in rubber; anything thicker than a millimetre starves in the middle without printed vessels; 90 per cent viability on the day says nothing about the week after; and every lab tunes its own recipe, so no two papers print the same material.",
  stats: [["Base", "GelMA, alginate, collagen"], ["Cell viability", "the figure of merit"], ["Gelling", "temperature, ions or UV"]],
  uses: "Tissue and tumour models, skin and cartilage constructs, organ-on-a-chip, drug screening.",
  link: "https://en.wikipedia.org/wiki/Bio-ink"
},
{
  id: "fourd", cat: "additive", name: "Printed shape-memory polymer",
  sub: "the fold programmed by the toolpath", img: "fourd", extra: ["fourd2", "fourd3"],
  hook: "A polymer that holds a bent shape until heat lets its network pull back to the one it was printed in, so the print is the program. Lay fibres one way, or print a bilayer that swells unevenly, and it folds itself.",
  more: "A shape-memory polymer has two things in it: cross-links that remember the printed shape, and a transition, glass or melting, that lets the chains move above it and freezes them below. Warm the part, bend it, cool it, and it stays bent; warm it again and the network pulls it back. Printing adds a second trick: the toolpath builds in the stress or the grain the recovery follows, so a flat sheet printed with fibres crossing at an angle rolls into a tube. The Wyss lab printed cellulose hydrogels that curl like a seed pod in water. The costs: the recovery force is small, grams not newtons; a part that must work at the transition cannot also be triggered there; each cycle loses a little; and the trigger is slow, minutes of soaking, not a snap.",
  stats: [["Trigger", "heat, water, light or field"], ["Recovery", "to the as-printed shape"], ["Cycles", "tens to hundreds"]],
  uses: "Self-folding structures, deployable space hardware, adaptive textiles, soft actuators, stents.",
  link: "https://en.wikipedia.org/wiki/Shape-memory_polymer"
},
{
  id: "printsilicone", cat: "additive", name: "Printable silicone",
  sub: "thixotropic liquid silicone rubber", img: "printsilicone",
  hook: "Silicone will not hold a shape on its own, so it is made thixotropic, stiff until the nozzle shears it, stiff again when it lands, or printed into a gel that holds it while it cures. Soft parts stop needing a mould.",
  more: "Liquid silicone rubber is two parts that cure on platinum; for printing, fumed silica turns it into a paste that flows at the nozzle and stands in the bead, or an ultraviolet-curing grade sets under a lamp on every layer. The other route, from the Lewis lab at Harvard in 2014, writes the uncured silicone into a vat of granular gel that parts round the needle and closes behind it, so a gripper with air channels is drawn in free space and cured in place. The costs: layers bond worse than a cast block, so the part tears along them; a bead a quarter of a millimetre wide is as fine as it gets; the platinum cure dies on sulphur or tin, so the bed must be clean; and a thickened silicone is weaker than the same rubber poured.",
  stats: [["Shore", "00–30 to A-60"], ["Rheology", "shear-thinning, recovers fast"], ["Cure", "platinum or UV"]],
  uses: "Soft robot actuators, custom seals and gaskets, prosthetic liners, wearables, anatomical models.",
  link: "https://en.wikipedia.org/wiki/Silicone"
},

/* ---------- ROPES & WOVEN MATERIALS ---------- */
{
  id: "manila", cat: "fibre", name: "Manila (abacá)",
  sub: "Musa textilis leaf fibre", img: "manila", extra: ["manila2", "manila3"],
  hook: "Not hemp at all but a banana relative, and for a century the rope every other was measured against. It holds up in salt water where most plant fibres rot, and is stiff enough to hold a coil.",
  more: "The fibre runs the length of the leaf sheath, two or three metres, and is stripped by drawing the sheath under a knife by hand; a tonne of stalks gives 15 kilograms. It is cellulose with the lignin left in, which is why it stands salt water that would rot cotton, and why it is harsh and stiff. Manila rope went round the world on whalers and clippers, and the US Navy specified it until nylon arrived in the 1940s; it keeps most of its strength wet, where hemp loses more and rots besides. The costs: it shrinks when wet and locks a knot; it is coarse and splintery in the hand; the stripping is hand labour and the price follows typhoons in Bicol; and the same fibre now goes mostly into teabags and banknotes, where the wet strength is the point.",
  stats: [["Wet", "tolerates salt water"], ["Historic role", "the benchmark rope"], ["Stretch", "low for a natural fibre"]],
  uses: "Marine and towing rope, heavy twine, teabags and currency paper, Manila folders.",
  link: "https://en.wikipedia.org/wiki/Abac%C3%A1"
},
{
  id: "hemprope", cat: "fibre", name: "Hemp",
  sub: "Cannabis sativa bast fibre", img: "hemprope", extra: ["hemprope2", "hemprope3"],
  hook: "The rope that rigged the age of sail. Strong, and it grips well, but it rots from the inside once damp, which is why standing rigging was tarred and why the smell of tar is the smell of an old ship.",
  more: "Hemp is a bast fibre, the long strands under the bark of the stalk, freed by retting: the cut stems lie in a field or a pond until bacteria eat the pectin that glues the fibre to the wood. A first-rate ship carried 30 miles of it, and the Royal Navy bought Riga hemp by the thousand tons, one reason the Baltic mattered to Napoleon. Standing rigging was soaked in Stockholm tar, which kept the water out and gave the smell; running rigging, which had to render through blocks, was left white and replaced often. The costs: wet, it shrinks and swells, so the rigging was set up again after rain; untreated it rots inside the lay where no one can see; it is weaker than manila for the weight; and tarred rope is stiff and black on the hands.",
  stats: [["Strength", "high for a bast fibre"], ["Wet", "rots untreated"], ["Traditional fix", "tar"]],
  uses: "Traditional rigging and cordage, twine, canvas, decorative and theatre rope.",
  link: "https://en.wikipedia.org/wiki/Hemp"
},
{
  id: "sisal", cat: "fibre", name: "Sisal",
  sub: "Agave sisalana leaf fibre", img: "sisal", extra: ["sisal2", "sisal3"],
  hook: "Coarse, cheap and sharply textured, so knots in it stay tied and cats sharpen their claws on it. It has almost no elasticity and little tolerance for damp, so it lives a short hard life on purpose.",
  more: "The leaf of an agave is crushed and scraped, the pulp washed off and the fibre dried in the sun in hanks a metre long, 4 per cent of the leaf by weight. Yucatán grew it as henequen for the binder twine that fed the McCormick reaper, and the fortune built Mérida. The fibre is stiff, strong in a straight pull and rough enough that a knot holds without a locking turn, which is what a baler needs. The costs: it stretches only 3 per cent and snaps rather than gives; wet, it swells, weakens and rots, so it is never a marine rope; the fibres are short and the rope sheds them; and polypropylene twine did to sisal in the 1960s what nylon did to manila, so the crop that built a city is now carpet backing, scratching posts and polishing wheels.",
  stats: [["Texture", "deliberately rough"], ["Stretch", "minimal"], ["Wet", "weakens and rots"]],
  uses: "Baler and agricultural twine, scratching posts, buffing wheels, carpet backing, matting.",
  link: "https://en.wikipedia.org/wiki/Sisal"
},
{
  id: "coir", cat: "fibre", name: "Coir",
  sub: "coconut husk fibre", img: "coir", extra: ["coir2", "coir3"],
  hook: "Weak by any engineering measure, but it floats, stretches a third of its length before failing, and salt water barely touches it. For a mooring line that must surge and never sink, those are the right properties.",
  more: "The husk of a coconut is retted in brackish water for months, then beaten to free the fibre; brown coir comes from ripe nuts. It is 45 per cent lignin, which is what shrugs off salt water and rot, and what makes the fibre coarse and the rope hairy. Spun on the beach by hand in Kerala and Sri Lanka, it was the rope of the Indian Ocean dhow, which was sewn together with it rather than nailed. The costs: a quarter of the strength of manila, so the rope is thick for its load; the stretch that makes a mooring line forgiving makes a halyard useless; it drinks water and is heavy wet; and the retting lagoons stink and foul the backwaters, which is why the fibre now goes more into doormats, mattresses and erosion matting than rope.",
  stats: [["Elongation", "~30%"], ["Buoyancy", "floats"], ["Salt water", "highly resistant"]],
  uses: "Mooring and towing lines, doormats and matting, erosion blankets, growing medium, brushes.",
  link: "https://en.wikipedia.org/wiki/Coir"
},
{
  id: "jute", cat: "fibre", name: "Jute",
  sub: "Corchorus bast fibre, “golden fibre”", img: "jute", extra: ["jute2", "jute3"],
  hook: "The cheapest usable fibre there is, grown in volume second only to cotton. It is not strong, it hates water and sunlight rots it, and none of that matters to a sack that makes one trip and goes on the compost.",
  more: "A bast fibre like flax, but the stalk is four metres tall and the fibre a fifth lignin, which is why it is cheap: it grows on the Ganges delta in three months on nothing but the monsoon. The stalks are retted in standing water for a fortnight, then men waist deep strip the fibre off the stick by hand; the delta still does this a million tonnes a year. Spun coarse on machines built in Dundee, it was the sack of the empire, grain, coffee, sandbags, and the backing of every carpet. The costs: the fibre is brittle, with 1 or 2 per cent stretch; it loses strength wet and goes brown in sunlight; it sheds, and smells of the oil that softens it for spinning; and polypropylene took the sack trade in the 1970s, so the price has been a famine price since.",
  stats: [["Cost", "the cheapest"], ["Lifetime", "short, by design"], ["End of life", "biodegrades"]],
  uses: "Sacking and hessian, carpet backing, rope and twine, geotextiles, packaging.",
  link: "https://en.wikipedia.org/wiki/Jute"
},
{
  id: "cottonduck", cat: "fibre", name: "Cotton duck",
  sub: "tightly woven cotton canvas", img: "cottonduck", extra: ["cottonduck2"],
  hook: "A plain weave packed so tight that the yarns swell when wet and close the gaps. The cloth seals itself against rain and still breathes, with no coating at all; waxed, it was the tarpaulin before plastic.",
  more: "Duck is from doek, Dutch for cloth, and has nothing to do with birds. Two-ply yarns are beaten into a plain weave that leaves no visible hole, and the numbering runs backwards: number 1 is the heaviest, 18 ounces to the square yard, number 12 the lightest. Dry, air passes through; wet, the cotton swells a third in diameter, the weave closes, and water beads on the outside while the inside stays dry. It was the army tent, the coasting sail, the wagon cover, the fire hose jacket and the painter's canvas. The costs: heavy, and heavier wet; it mildews if rolled damp and rots in a season on the ground; it shrinks on the first wetting, so a tent is cut oversize; and it seals only under tension, which is why a slack tent drips wherever a hand touches it.",
  stats: [["Weave", "plain, very dense"], ["Wet", "swells and seals"], ["Coating", "none required"]],
  uses: "Tents and awnings, workwear and aprons, sneakers, artist canvas, sandbags, tarpaulins.",
  link: "https://en.wikipedia.org/wiki/Cotton_duck"
},
{
  id: "linen", cat: "fibre", name: "Linen (flax)",
  sub: "Linum usitatissimum bast fibre", img: "linen", extra: ["linen2", "linen3"],
  hook: "One of the few fibres stronger wet than dry, and among the oldest in use: there is linen in Egyptian tombs still recognisable as cloth. It barely stretches, which is why it is crisp and why it creases when you sit.",
  more: "Flax is pulled, not cut, to keep the fibre whole, then retted in dew or a pond, broken, scutched to knock the woody shive off, and hackled through nails into a sliver half a metre long. The fibre is near-pure cellulose, crystalline and lined up along its length, which is where the strength and the stiffness come from; water pulls the fibrils closer, so it gains a fifth in strength wet, the opposite of wool. It was the sailcloth of every navy before cotton duck, and the first aeroplane skin. The costs: the fibre is stiff, so the yarn is slubby and the cloth wrinkles instead of recovering; it has no elastic give, so it wears through at the crease; retting is a smelly fortnight that fouls rivers; and all that handling is why it costs three times cotton.",
  stats: [["Wet strength", "~20% higher than dry"], ["Stretch", "very low"], ["Age of use", "~30,000 years"]],
  uses: "Cloth and sailcloth, fire hose liners, bookbinding and paper, composite reinforcement.",
  link: "https://en.wikipedia.org/wiki/Linen"
},
{
  id: "silk", cat: "fibre", name: "Silk",
  sub: "Bombyx mori filament", img: "silk", extra: ["silk2", "silk3"],
  hook: "A single filament, up to a kilometre and a half of it, unwound from one cocoon; no other natural fibre comes in that length. Strong, tough and smooth enough to pack a parachute, and killed by the sun it shines in.",
  more: "The caterpillar spins two strands of fibroin glued with sericin, a triangular cross-section that throws the light back and is why silk shines. The cocoon is baked before the moth can chew out, softened in hot water, and the ends of five or eight cocoons reeled together into one raw thread; a kilogram of silk is five thousand cocoons and a tonne of mulberry leaf. Degummed, it is a protein fibre as strong as nylon for its weight and tougher, which is why it was the parachute canopy until 1942 and is still a suture. The costs: wet, it loses a fifth of its strength; ultraviolet yellows and rots it, so a silk curtain dies at the window; sweat and alkali degrade it; moths eat it; and it is all hand labour, so it has been a luxury for four thousand years.",
  stats: [["Filament length", "up to ~1500 m"], ["Tensile", "~0.5 GPa"], ["Diameter", "~10–15 µm"]],
  uses: "Textiles, parachutes and balloon cloth historically, surgical suture, insulation in fine wire.",
  link: "https://en.wikipedia.org/wiki/Silk"
},
{
  id: "spidersilk", cat: "fibre", name: "Spider silk",
  sub: "dragline silk and its recombinant copies", img: "spidersilk", extra: ["spidersilk2", "spidersilk3"],
  hook: "Not the strongest fibre, but the toughest: it stretches far while resisting hard, so it takes more energy to break than steel or aramid. Spiders eat each other, so it cannot be farmed; it has to be milked or brewed.",
  more: "Dragline silk, the thread the spider hangs on, is crystalline alanine blocks between stretchy glycine-rich chains; the crystals carry the load and the chains unfold to take the energy, so it stretches a third of its length and still pulls at a gigapascal. The cape at the Victoria and Albert Museum took a million orb-weavers in Madagascar, milked a few metres at a time over four years, the only large cloth of it ever made. The recombinant route puts the gene into bacteria, goats or silkworms and spins the protein. The costs: the spider spins at a rate and a pH no machine matches, so the copy is weaker; a fermenter yields grams; the protein sticks to itself and falls out of solution; and after thirty years the product on sale is a shoe upper and a tie.",
  stats: [["Toughness", "~3× aramid"], ["Extension", "~30–40%"], ["Production", "recombinant, not farmed"]],
  uses: "Experimental textiles and composites, sutures and scaffolds, research into tough fibres.",
  link: "https://en.wikipedia.org/wiki/Spider_silk"
},
{
  id: "felt", cat: "fibre", name: "Wool felt",
  sub: "non-woven matted fibre", img: "felt", extra: ["felt2", "felt3"],
  hook: "Fabric with no weave at all. Wool scales ratchet past each other under heat, soap and pressure and cannot slide back, so the fleece locks into a sheet. No grain, so it never frays and cuts clean in any direction.",
  more: "Each wool fibre is covered in scales pointing to the tip, so it moves root-first through its neighbours and jams going back; roll a wet, soapy mat of fibres for an hour and they tangle ever tighter. That is the whole process, and it is older than spinning: the Tarim mummies wore felt hats 3,800 years ago, and a yurt is still a frame wrapped in it. Dense, it damps vibration, seals a joint, holds oil and takes a polish, which is why a piano is full of it and so is a machine shop. The costs: it has no yarn to carry tension, so it tears, stretches out of shape and sags on a wall; it pills and thins where rubbed; moths eat it and damp rots it; and thick grades are hard to make even, so a piano hammer is still voiced by hand with a needle.",
  stats: [["Structure", "no weave, no grain"], ["Edges", "never fray"], ["Age", "oldest known fabric"]],
  uses: "Piano hammers and dampers, gaskets and washers, polishing wheels, yurts, hats, acoustic panels.",
  link: "https://en.wikipedia.org/wiki/Felt",
  tags: ["warmth"]
},
{
  id: "paracord", cat: "fibre", name: "Paracord 550",
  sub: "nylon kernmantle cord", img: "paracord", extra: ["paracord2", "paracord3"],
  hook: "A braided nylon sheath over seven twisted yarns, each a usable cord on its own. Nylon stretches a third of its length before it breaks, which is exactly what a parachute canopy wants and a winch does not.",
  more: "MIL-C-5040 Type III: a 32-strand nylon sheath over seven two-ply core yarns, rated at 550 pounds, hence the name. The military cord carries a marker yarn naming the maker; most of what is sold as paracord is a looser copy with no rating. Nylon was chosen in 1942 because silk lines were snapping under the opening shock: nylon stretches 30 per cent and gives the shock back slowly. Cut, the sheath is sealed with a lighter and the core pulled out for fishing line, thread or a snare. The costs: the stretch that saves a parachutist makes it useless for a guy line or a bowstring; it is slippery, so knots slide unless locked; it loses a tenth of its strength wet and a third to a season of sun; and 550 is a new, dry, unknotted figure, which a knot halves.",
  stats: [["Breaking strength", "550 lb / 2.5 kN"], ["Stretch", "~30%"], ["Core", "7–9 separate yarns"]],
  uses: "Parachute suspension lines, general lashing, repairs, bracelets, improvised shelter.",
  link: "https://en.wikipedia.org/wiki/Parachute_cord"
},
{
  id: "polyesterfab", cat: "fibre", name: "Polyester (Dacron)",
  sub: "PET fibre", img: "polyesterfab", extra: ["polyesterfab2", "polyesterfab3"],
  hook: "Nylon's quieter rival, and why natural rope vanished from working boats. It barely creeps under a standing load, ignores water and shrugs off sunlight better than nylon, so a halyard holds its tension for a season.",
  more: "Polyethylene terephthalate, spun into filament in 1941 by Whinfield and Dickson and sold as Terylene, then as Dacron by DuPont. The chain is stiff with benzene rings, which is why it takes a set at 70 degrees and holds a crease forever, why it absorbs almost no water, 0.4 per cent against nylon's 4, and why it creeps so little that a sail keeps its shape. About as strong as nylon and half as stretchy, which makes it the halyard, the sheet, the webbing sling and most sailcloth. The costs: that stiffness means it will not absorb a shock, so a polyester anchor line snatches where nylon gives; it holds oil stains and smells, since nothing washes out of a fibre that takes up no water; it pills; and polyester fleece sheds microfibres with every wash.",
  stats: [["Creep", "very low"], ["Wet strength", "unchanged"], ["UV", "good resistance"]],
  uses: "Halyards and standing rigging, sailcloth, webbing and slings, clothing, tyre cord.",
  link: "https://en.wikipedia.org/wiki/Polyester"
},
{
  id: "wirerope", cat: "fibre", name: "Wire rope",
  sub: "laid steel strand", img: "wirerope", extra: ["wirerope2", "wirerope3"],
  hook: "A solid bar of the same section cannot bend round a sheave; a few hundred thin wires can, each flexing only a little. Lay the strands against the twist of their wires and the rope resists unwinding under load.",
  more: "Wilhelm Albert twisted the first in 1834 for the Clausthal mines, where hemp rotted and chain broke without warning; wire rope breaks one wire at a time. A 6×19 rope is six strands of 19 wires round a core of fibre or more steel; ordinary lay twists wires and strands opposite ways, so the rope will not spin under load, while Lang's lay twists them the same way and wears better. The strength is in the drawn wire, 1,800 megapascals of pearlitic steel. The costs: it is as stiff as it is strong, so a sheave must be 20 to 40 rope diameters or the outer wires fatigue; it rusts from the core where no one sees; a kink is permanent and halves the strength; and a rope is condemned by counting broken wires in one lay length, before it fails.",
  stats: [["Construction", "e.g. 6×19, 6×36"], ["Why it bends", "thin wires, low strain"], ["Invented", "1830s, mining"]],
  uses: "Cranes and lifts, cable cars and bridges, winches, rigging, control cables.",
  link: "https://en.wikipedia.org/wiki/Wire_rope"
},
{
  id: "glassfibre", cat: "fibre", name: "Glass fibre",
  sub: "E-glass and S-glass", img: "glassfibre", extra: ["glassfibre2"],
  hook: "Bulk glass is brittle because of the flaws on its surface; drawn to a filament ten microns across, there is hardly any surface left to flaw. The stuff that shatters as a pane becomes a fibre you can tie in a knot.",
  more: "Molten glass runs through a platinum bushing with a few thousand holes and is pulled away at 60 metres a second, which draws each stream to a filament and freezes it before a crack can start, at scale since 1938. E-glass, the electrical grade, is the cheap one and most of the market; S-glass has more alumina and a third more strength. The fibre is only as good as its surface, so a size of silane and starch goes on before it touches anything. The costs: it is heavy and a third as stiff as carbon; bare fibre abrades itself to dust in a bundle; water attacks the surface and takes a quarter of a wet laminate's strength; it is a skin and lung irritant to cut; and the matrix fails long before the fibre, so a GRP hull is a story about resin, not glass.",
  stats: [["Modulus", "~72 GPa (E-glass)"], ["Diameter", "~5–20 µm"], ["Weakness", "abrasion, moisture"]],
  uses: "GRP hulls and panels, circuit board laminate, insulation, pressure vessels, ducting.",
  link: "https://en.wikipedia.org/wiki/Glass_fiber"
},
{
  id: "basalt", cat: "fibre", name: "Basalt fibre",
  sub: "melt-spun volcanic rock", img: "basalt",
  hook: "Crushed basalt melted at 1,450 degrees and drawn straight into filament: one raw material, no additives. It beats E-glass on heat and on alkali, which is what matters inside concrete, and costs twice as much.",
  more: "Glass fibre is a recipe, a dozen oxides batched and melted; basalt fibre is a quarry. The rock is crushed, melted at 1,450 degrees and drawn through a bushing like glass, but the melt is black and opaque, so the furnace is slow and hard to run. The fibre comes out 10 to 20 per cent stiffer than E-glass, as strong, and able to sit at 700 degrees where glass has softened. It shrugs off the alkali of wet cement, so basalt rebar neither rusts nor rots in a bridge deck the way glass does. The costs: the ore varies from quarry to quarry, and so does the fibre; the opaque melt makes it twice the price of glass; most production was in Ukraine and Russia; and it is a third as stiff as carbon, so it competes on cost, which it loses to glass.",
  stats: [["Service", "−260 to 700 °C"], ["Input", "rock, nothing else"], ["vs. E-glass", "stiffer, more alkali-proof"]],
  uses: "Concrete reinforcement, fire barriers, pipe wrap, automotive composites, insulation.",
  link: "https://en.wikipedia.org/wiki/Basalt_fiber"
},
{
  id: "nomex", cat: "fibre", name: "Nomex",
  sub: "meta-aramid", img: "nomex", extra: ["nomex2"],
  hook: "Kevlar's sibling with the bonds in the meta position, which trades strength for heat. It does not melt or drip; it thickens and chars, and the char keeps the flame off the skin for the few seconds that count.",
  more: "DuPont sold it in 1967, five years before Kevlar: the same aramid chemistry, but the rings link at the meta position, so the chain kinks and never packs into Kevlar's stiff crystal. What it keeps is the aromatic backbone, which does not soften below 370 degrees and does not burn in air. In a flash fire the fibre swells, the weave closes and the surface chars into a crust, so the suit buys two or three seconds in a fuel fire, which is the time to get out of a car. As paper it insulates transformers; dipped in phenolic, it is honeycomb. The costs: a third the strength of Kevlar and no better than nylon; it dyes badly; sunlight degrades it; it stops flame, not heat; and it costs ten times cotton, which is why only people who may catch fire wear it.",
  stats: [["Behaviour in fire", "chars, never melts"], ["Continuous use", "~200 °C"], ["Also made as", "honeycomb core"]],
  uses: "Firefighting and racing suits, flight gloves, electrical insulation paper, honeycomb cores.",
  link: "https://en.wikipedia.org/wiki/Nomex"
},
{
  id: "ripstop", cat: "fibre", name: "Ripstop",
  sub: "a weave, not a material", img: "ripstop", extra: ["ripstop2", "ripstop3"],
  hook: "The one entry here that is pure geometry. Thicker yarns woven in every few millimetres do nothing until something tears; then the tear runs to the next grid line and stops, so a hole stays a hole.",
  more: "A tear runs because the whole load lands on the one yarn at its tip, which breaks, and then the next. Every 5 to 8 millimetres ripstop doubles the yarn or puts in a heavier one; the tear arrives, the stress spreads across twice the strength, and it stops. The grid weighs nothing, which is why it went into the wartime parachute and every tent, sail, kite and balloon since. It works in any fibre, cotton and nylon for uniforms, Dyneema for the lightest packs; the pattern is the material. The costs: it stops a tear running and does nothing against a puncture or abrasion; the heavy yarns let water through a coating and give the fabric a line to crease along; it is stiffer and noisier than plain cloth; and a slit that keeps pulling simply follows the grid.",
  stats: [["Grid spacing", "~5–8 mm"], ["Weight cost", "almost none"], ["Effect", "arrests tear propagation"]],
  uses: "Parachutes and paragliders, tents and sails, hot air balloons, outdoor clothing, flags.",
  link: "https://en.wikipedia.org/wiki/Ripstop"
},
{
  id: "sailcloth", cat: "fibre", name: "Laminate sailcloth",
  sub: "scrim between films", img: "sailcloth", extra: ["sailcloth2"],
  hook: "A racing sail fails by stretching, not tearing, so the cloth is a sandwich: aramid, carbon or Dyneema yarns laid along the load paths between polyester films. It holds its shape for a season, then it is a tarpaulin.",
  more: "Woven cloth stretches on the bias however tight the weave, and a sail that stretches loses its shape and its drive. Laminate cloth stops pretending: a scrim of high-modulus yarn is laid between two films of Mylar, which take the shear and keep the air out, and the yarns do all the pulling. Since the 1990s the yarns go only where the loads go, radiating from the corners; North Sails now moulds the whole sail in one piece. The costs: Mylar cracks where it is folded and delaminates where it flexes, so the sail is dead in two or three seasons where Dacron lasts ten; sunlight kills aramid in a year; repairs are sticky-back patches; it costs three to five times the woven sail; and it goes to landfill, since film, glue and three fibres cannot be separated.",
  stats: [["Design driver", "stretch, not strength"], ["Yarns", "aligned to load paths"], ["Build", "film–scrim–film"]],
  uses: "Racing sails, kites and wings, lightweight packs, inflatable structures.",
  link: "https://en.wikipedia.org/wiki/Sailcloth"
},
{
  id: "nylonrope", cat: "fibre", name: "Nylon double braid",
  sub: "polyamide rope", img: "nylonrope", extra: ["nylonrope2", "nylonrope3"],
  hook: "Chosen for the opposite of what a rope is usually judged on: it stretches. Up to 30 per cent before it breaks, which turns a snatch into a long pull, and makes a parted line a whip when the energy comes back.",
  more: "Double braid is a braided core inside a braided cover, each carrying half the load: a rope that is round, soft in the hand and splices without a tool. Nylon stretches because its chains are coiled and straighten under load; a mooring line pays out a metre and takes it back, and the boat never feels the snatch. That is why it holds out against polyester as anchor rode, towline and climbing rope, where the stretch saves the climber. The costs: wet, it loses 10 to 15 per cent of its strength and shrinks; sunlight goes through it in a few years; it heats inside where the yarns rub, and a nylon rope working over a sheave can melt its own core; and the stored energy is why a tow is watched from behind a bulkhead: a parted nylon line has cut men in half.",
  stats: [["Stretch at break", "~25–30%"], ["Wet strength", "−10 to −15%"], ["Danger", "stored energy on failure"]],
  uses: "Anchor and mooring rode, tow and recovery straps, climbing slings, winch snatch lines.",
  link: "https://en.wikipedia.org/wiki/Rope"
},
{
  id: "pprope", cat: "fibre", name: "Polypropylene rope",
  sub: "PP monofilament or split film", img: "pprope", extra: ["pprope2", "pprope3"],
  hook: "The only common rope that floats, which is why a throwline is always garish yellow. The price is sunlight: a few seasons and it powders in the hand, and it melts at a heat a hand-over-hand descent can reach.",
  more: "Polypropylene is lighter than water, 0.91 against 1, so the rope sits on the surface where a swimmer can grab it and a propeller cannot. It is also the cheapest fibre there is, extruded as monofilament or as film slit into tape and twisted, which is baler twine and the blue rope on every farm gate. It takes up no water, so it weighs the same wet and does not rot. The costs: half the strength of nylon, and it stretches without recovering, so a stretched rope stays long; a tertiary carbon on every chain unit is where ultraviolet attacks, so a plain rope dies in one summer and a black one in three; it melts at 165 degrees, which a fast rope through a descender can reach; it is slippery and knots creep; and it is stiff and hard in the hand when cold.",
  stats: [["Density", "0.91 g/cm³ — floats"], ["UV life", "1–3 seasons"], ["Melts", "~165 °C"]],
  uses: "Rescue throwlines, water-ski ropes, barrier rope, agriculture and baling.",
  link: "https://en.wikipedia.org/wiki/Polypropylene"
},
{
  id: "bungee", cat: "fibre", name: "Shock cord",
  sub: "rubber strands in a braided sleeve", img: "bungee", extra: ["bungee2", "bungee3"],
  hook: "Natural rubber threads inside a woven jacket that sets how far it can go. The jacket takes the abrasion and the stretch limit; the rubber supplies the force. Jump off a bridge on one and it slows you at under 3 g.",
  more: "A few hundred threads of natural rubber lie parallel in a braided nylon or polyester sleeve; the sleeve is braided on under tension, so the cord cannot stretch past the point where the braid locks, usually double its length. Rubber stores energy by uncoiling its chains and gives most of it back, which makes a jump a long slow bounce instead of a jolt; the cord for a jumper is sized to the body weight on the day. The costs: the rubber ages in ozone and sunlight and the first sign is the sleeve going slack; a snapped hook is the commonest eye injury from a hardware shop; the stored energy comes back at the user, which is why it never lifts anything; and the sleeve hides the rubber, so a cord that looks fine can have half its threads broken.",
  stats: [["Stretch", "100–200%"], ["Core", "natural rubber"], ["Peak load", "~2–3 g on a jump"]],
  uses: "Bungee jumping, cargo nets and tie-downs, tent poles, kayak deck rigging.",
  link: "https://en.wikipedia.org/wiki/Bungee_cord"
},
{
  id: "kernmantle", cat: "fibre", name: "Kernmantle rope",
  sub: "twisted nylon core in a woven sheath", img: "kernmantle", extra: ["kernmantle2", "kernmantle3"],
  hook: "Two ropes in one: a core that carries nearly all the load and a sheath that only protects it. A dynamic rope is rated not by strength but by how many standard falls it survives; it is a consumable energy absorber.",
  more: "Edelrid wove the first in 1953: twisted nylon yarns, some S and some Z so the rope does not spin, inside a braided sheath that takes the rock, the grit and the sun; a laid rope kinked and spun a hanging climber. A dynamic rope stretches a third of its length under a falling climber, so the force on climber and anchor stays under 12 kilonewtons; the standard test drops 80 kilograms on it until it breaks. A static rope for caving is the same build with almost no stretch. The costs: the sheath can slip on the core and bunch at the end; a core shot, where the sheath is cut through, cannot be repaired; a rope that has held a hard fall has spent some of its stretch and is retired; grit and sunlight shorten its life; and it costs three times a laid rope.",
  stats: [["Core carries", "~70% of load"], ["Impact force", "<9 kN by standard"], ["Rated in", "UIAA falls held"]],
  uses: "Climbing and caving, rope access, rescue, arborist work.",
  link: "https://en.wikipedia.org/wiki/Kernmantle_rope"
},
{
  id: "webbing", cat: "fibre", name: "Tubular webbing",
  sub: "flat-woven nylon tube", img: "webbing", extra: ["webbing2", "webbing3"],
  hook: "Woven as a continuous tube on a shuttle loom rather than a strip folded over. There is no seam to abrade, it drapes flat over an edge instead of rolling onto a corner, and a hitch tied in it does not want to slip.",
  more: "A needle loom makes flat webbing fast and cheap; a shuttle loom carries the weft round and round, so the webbing comes off as a tube, slower and dearer, which is what climbers buy. The tube flattens to a double thickness with no edge inside, so it slides round a tree or a rock horn unharmed, and it knots: the water knot, a rethreaded overhand, is the one trusted in tape, and the tails creep. Nylon 25 millimetres wide holds about 18 kilonewtons; the same width in Dyneema is stronger and lighter but will not hold a knot, so it is sewn into slings. The costs: a knot takes a third of the strength; nylon tape stretches and drinks water; the tube can hide a cut; and sunlight bleaches and weakens it in a season, so faded anchor tat is cut off and replaced.",
  stats: [["Strength", "~18 kN in 25 mm"], ["Weave", "seamless tube"], ["Edge load", "spread flat"]],
  uses: "Climbing anchors and slings, rescue harnesses, slacklines, load restraint.",
  link: "https://en.wikipedia.org/wiki/Webbing"
},
{
  id: "seatbelt", cat: "fibre", name: "Seat-belt webbing",
  sub: "polyester, engineered to elongate", img: "seatbelt", extra: ["seatbelt2", "seatbelt3"],
  hook: "A belt that did not stretch would break ribs. This one gives 8 to 14 per cent at full load, a few centimetres more stopping distance at the moment they matter; polyester, because polyester does not change when damp.",
  more: "Nils Bohlin at Volvo put the three-point belt in the Amazon in 1959 and the patent was given away; the webbing is 300 polyester yarns in a dense twill, and it is the stretch that is specified, not the strength. At 50 kilometres an hour the body stops in a few hundredths of a second; the belt's give stretches that out and halves the peak force on the chest. A pretensioner fires first to take the slack out; a load limiter then lets the spool pay out at about 4 kilonewtons. The costs: a belt that has held a crash has stretched past its elastic limit and must be replaced; the webbing frays on a cut edge of trim and loses strength invisibly; sunlight through a rear window weakens it over decades; and a twisted belt loads a line instead of a band.",
  stats: [["Elongation", "8–14% at rated load"], ["Strength", ">26 kN"], ["Fibre", "polyester, not nylon"]],
  uses: "Vehicle and aircraft restraints, child seats, racing harnesses.",
  link: "https://en.wikipedia.org/wiki/Seat_belt"
},
{
  id: "velcro", cat: "fibre", name: "Hook-and-loop",
  sub: "Velcro, nylon hooks and loops", img: "velcro", extra: ["velcro2", "velcro3"],
  hook: "Copied from the burdock burrs de Mestral picked off his dog in 1941. Thousands of nylon hooks catch a felt of loops; each bond is nothing, the sum holds in shear and gives in peel, so you open it from a corner.",
  more: "The hooks are woven as loops of stiff nylon monofilament and sliced open on one side; the loop side is a soft nylon pile. Press them together and the hooks snag loops at random, so a strip holds a curtain of weight in shear while a child can peel it off. It took de Mestral ten years to make it by machine. Nothing else closes blind, one-handed, in a glove, which is why it went to the Moon on Apollo and holds every pen and spoon to the walls of the space station. The costs: the loops stretch and the hooks straighten, so it is tired after a few thousand cycles; it fills with lint and fur and stops gripping; the hooks pull threads out of any knit they touch; it is loud; and it is ugly, which is why no tailor has ever liked it.",
  stats: [["Shear strength", "~100 kN/m²"], ["Peel", "weak, by design"], ["Cycles", "~10,000"]],
  uses: "Clothing and shoes, cable management, medical braces, spacecraft interiors.",
  link: "https://en.wikipedia.org/wiki/Hook-and-loop_fastener"
},
{
  id: "denim", cat: "fibre", name: "Denim",
  sub: "indigo-dyed cotton twill", img: "denim", extra: ["denim2", "denim3"],
  hook: "Indigo will not go into cotton; it sits in a ring on the yarn's surface. Every crease wears the ring away and bares the white core, so the cloth records how its owner moved. The twill is why it fades in diagonals.",
  more: "The warp is dyed in a dozen dips in an indigo vat, each followed by an airing while the dye oxidises blue on the surface; the weft is left white. Woven 3×1 twill, the blue warp covers the face and the white weft the back, so jeans are blue outside and pale inside. Wear scuffs the dye off the ridges first, so the creases behind the knee and across the lap turn white in a pattern particular to one body; raw denim is sold unwashed so that happens in use. The costs: the dye keeps coming off, onto sofas and shoes; a yard of indigo cotton takes thousands of litres of water and a vat of hydrosulphite; it is stiff and heavy wet and slow to dry; and the pretend fades on a stonewashed pair are sandblasted on, which gave the sandblasters silicosis.",
  stats: [["Weave", "3×1 right-hand twill"], ["Dye", "ring, not through"], ["Weight", "10–21 oz/yd²"]],
  uses: "Jeans and workwear, upholstery, jackets.",
  link: "https://en.wikipedia.org/wiki/Denim"
},
{
  id: "cordura", cat: "fibre", name: "Cordura",
  sub: "high-tenacity air-jet textured nylon 6,6", img: "cordura", extra: ["cordura2"],
  hook: "Thick nylon 6,6 blown through an air jet that tangles the filaments. Abrasion resistance is in the yarn, not the weave: a snagged filament drags its neighbours instead of pulling out, four times plain nylon's life.",
  more: "DuPont registered Cordura in 1929 for a rayon used in tyre cord; the name moved to nylon in the 1960s and the air-jet texturing came in the late 1970s, for army packs that wore through at the corners. The jet loops and tangles the filaments so the yarn feels like cotton and holds together under a rubbing stone. Woven at 500 or 1,000 denier and coated with polyurethane on the back, it is the fabric of every serious pack, motorcycle suit and boot upper. The costs: it is heavy for a nylon; the texturing makes it rough and it needs the coating to shed water; it drinks water like all nylon and fades in the sun; the 1,000 denier grade is stiff as board; and it is a brand, so a licence fee is in the price and the label may be most of what you paid for.",
  stats: [["Denier", "500–1000 typical"], ["Abrasion", "~4× standard nylon"], ["Introduced", "1929, as rayon"]],
  uses: "Backpacks and luggage, motorcycle gear, military packs, boot panels.",
  link: "https://en.wikipedia.org/wiki/Cordura"
},
{
  id: "monofil", cat: "fibre", name: "Nylon monofilament",
  sub: "single-strand extruded line", img: "monofil", extra: ["monofil2", "monofil3"],
  hook: "One extruded strand instead of a twisted bundle. Smooth, so a knot bites into itself; a refractive index near water, so a fish barely sees it; and a quarter of stretch, which forgives a strike and hides the bottom.",
  more: "Nylon is extruded through a single hole and drawn to four times its length, which lines up the chains and gives a line that is round, clear and strong for its thickness, a 0.25 millimetre line holding 5 kilograms. DuPont sold the first in 1939; it was too stiff to catch on until 1958. Because the strand is one piece there is no fibre to fray, so it also runs through a trimmer head, holds a hem invisibly and closes a wound as a suture that bacteria cannot climb. The costs: it takes up water and loses strength and stretch overnight in the lake; a season of sun makes it brittle; a knot is where it breaks, at half the rated strength, and the spool figure is dry and unknotted; and lost line strangles birds for decades, since nothing in the sea eats it.",
  stats: [["Stretch", "~20–30%"], ["Refractive index", "close to water"], ["Weakness", "UV, ~1 season"]],
  uses: "Fishing line, string trimmers, surgical suture, brush bristles, netting.",
  link: "https://en.wikipedia.org/wiki/Monofilament_fishing_line"
},
{
  id: "viscose", cat: "fibre", name: "Viscose rayon",
  sub: "regenerated cellulose", img: "viscose", extra: ["viscose2", "viscose3"],
  hook: "Wood pulp dissolved to an orange syrup and squirted back out as fibre: what comes out is the same cellulose that went in, which is why it drapes like silk. Neither natural nor synthetic; artificial silk from 1905.",
  more: "Cross, Bevan and Beadle patented it in 1892: pulp is steeped in caustic soda, treated with carbon disulphide to make the orange xanthate, dissolved to a viscous syrup, and pumped through a spinneret into a bath of sulphuric acid that turns it back into cellulose as a thread. The result is cotton's chemistry with silk's lustre and drape; Courtaulds made a fortune on it between the wars, and most of the world's tyres ran on rayon cord until polyester. The costs: it loses half its strength wet and is weaker than cotton dry, so it sags in the wash and shrinks in the dryer; it creases; the carbon disulphide poisoned the workers who made it for a century and still does where it is made cheaply; and the pulp is cheap because somebody's forest was.",
  stats: [["Source", "wood pulp"], ["Wet strength", "loses ~50%"], ["Since", "1905"]],
  uses: "Linings and dress fabric, tyre cord historically, wipes, cigarette filters.",
  link: "https://en.wikipedia.org/wiki/Viscose"
},
{
  id: "lyocell", cat: "fibre", name: "Lyocell",
  sub: "solvent-spun cellulose, Tencel", img: "lyocell", extra: ["lyocell2"],
  hook: "Viscose with the chemistry fixed. The pulp dissolves into an amine oxide, no xanthate and no carbon disulphide, and the solvent is caught and reused at better than 99 per cent. Stronger than viscose wet or dry.",
  more: "Courtaulds worked it out in Grimsby in the 1980s and sold it as Tencel from 1992; Lenzing owns it now and spins it from eucalyptus. N-methylmorpholine N-oxide dissolves cellulose directly, so there is no derivative to make and unmake, and the spent solvent is distilled back into the loop. Because the chains are drawn straight through an air gap, the fibre is 85 per cent as strong wet as dry, where viscose keeps half; it takes up more water than cotton and feels cool and heavy in the hand, hence the bedding. The costs: the surface fibrillates when rubbed wet, so it pills and goes peach-skinned unless enzyme-washed; the amine oxide can run away exothermically and needs stabilisers; it creases; and it costs more than viscose and far more than cotton.",
  stats: [["Solvent recovery", ">99%"], ["Wet strength", "~85% of dry"], ["Moisture", "absorbs 50% more than cotton"]],
  uses: "Shirting and bedding, denim blends, wipes, medical textiles.",
  link: "https://en.wikipedia.org/wiki/Lyocell",
  tags: ["duvet"]
},
{
  id: "acrylicfibre", cat: "fibre", name: "Acrylic fibre",
  sub: "polyacrylonitrile", img: "acrylicfibre", extra: ["acrylicfibre2", "acrylicfibre3"],
  hook: "Dyed before it is a fibre: pigment goes into the spinning solution, so the colour is in the polymer, and an awning holds its colour for a decade where dyed cloth fades in two seasons. Carbon fibre is made from it.",
  more: "DuPont sold it as Orlon in 1950 as the washable wool. Polyacrylonitrile will not melt, so it is dissolved in dimethylformamide and spun wet or dry; the fibre is crimped and cut to staple, and the bulk and the warmth are wool's at a third of the weight and none of the moths. Pigmented in the dope it is the fibre of boat covers and garden furniture, and heated in air and then without it, it is nine tenths of the carbon fibre made. The costs: it pills worse than anything, because the fibre is strong and the pills will not break off; it holds static and feels clammy, taking up almost no water; it softens at 95 degrees, so a hot wash stretches a jumper for good; it burns with black smoke and sticky drips; and it sheds microfibres.",
  stats: [["UV life", "10+ years solution-dyed"], ["Warmth", "wool-like, lighter"], ["Also", "precursor to carbon fibre"]],
  uses: "Awnings and marine canvas, knitwear, outdoor upholstery, fake fur.",
  link: "https://en.wikipedia.org/wiki/Acrylic_fiber"
},
{
  id: "merino", cat: "fibre", name: "Merino wool",
  sub: "fine crimped keratin fibre", img: "merino", extra: ["merino2", "merino3"],
  hook: "A fibre fine enough to bend instead of prickle: under 19 microns, skin cannot feel the ends. It is crimped, so it traps air wet or dry, and it binds the ammonia of sweat, which is why a base layer can go a week.",
  more: "Spain kept the breed to itself for three centuries, until the flocks were sold off in the 1700s; John Macarthur took a few to New South Wales in 1797 and Australia has grown most of the fine wool since. The scale on a fibre makes it felt and makes it ratchet; the crimp, a dozen waves a centimetre, is what gives a jumper its loft. Wool holds a third of its weight in water vapour without feeling wet and warms as it absorbs it, which is the trick of a wet merino sock. The costs: it is weak, so socks need nylon in the heel; it shrinks and felts in a hot wash unless the scales are stripped with chlorine and coated in resin; moths eat it; it dries slowly; mulesing is how the flystrike is kept off the sheep; and the fine grades cost ten times coarse wool.",
  stats: [["Diameter", "15–24 µm"], ["Moisture held", "~30% of its weight"], ["Odour", "naturally resisted"]],
  uses: "Base layers and socks, suiting, insulation, mattress fill.",
  link: "https://en.wikipedia.org/wiki/Merino",
  tags: ["warmth", "duvet"]
},
{
  id: "mohair", cat: "fibre", name: "Mohair",
  sub: "angora goat hair", img: "mohair", extra: ["mohair2", "mohair3"],
  hook: "Goat hair with almost no crimp and scales that lie flat, so it shines like silk and dye comes up in a brilliance wool never reaches. And springy: the pile stands back up, hence cinema seats and teddy bears.",
  more: "The Angora goat is from Ankara and the Ottomans kept it to themselves until the 1830s; South Africa and Texas took it over and still shear most of it. The fibre is a hollow-ish keratin like wool but smooth, so it does not felt, does not hold dirt and sheds a crease, and it is the strongest of the animal fibres for its diameter. Kid mohair from the first two shearings is 24 microns and goes into knitwear; adult hair at 40 is for upholstery, suiting and the mohair suit. The costs: the smooth fibre is slippery to spin and is nearly always blended with wool to hold the yarn together; it sheds, and the coarse grades itch; the goat is delicate and dies in cold rain after shearing; and the price swings with fashion, which has twice collapsed it.",
  stats: [["Diameter", "25–45 µm"], ["Lustre", "silk-like"], ["Resilience", "pile recovers"]],
  uses: "Suiting and upholstery, doll and teddy plush, ski climbing skins, violin bow hair substitute.",
  link: "https://en.wikipedia.org/wiki/Mohair",
  tags: ["warmth"]
},
{
  id: "ramie", cat: "fibre", name: "Ramie",
  sub: "Boehmeria nivea bast fibre", img: "ramie", extra: ["ramie2", "ramie3"],
  hook: "A nettle whose stem fibre is the longest and strongest of the bast fibres, and gets stronger wet. It wrapped mummies and holds where cotton rots; it is also stiff and brittle, so it is nearly always blended.",
  more: "China grass: a nettle without the sting, cut three to six times a year, which no other fibre crop manages. The fibre is bound into the stem by a quarter of its weight in gums, so it cannot be retted like flax; it is scraped out as ribbons and boiled in caustic soda, dearer to prepare than to grow. What comes out is a lustrous fibre with a tenacity above flax that rises by a tenth when wet, so it was fishing net, fire hose and canvas before nylon, and is still the Korean mosi and Japanese jofu summer cloth. The costs: it has almost no stretch and breaks where it is folded, so a crease is a cut waiting to happen; it is stiff and hairy and will not take a twist well; the degumming is a chemical process with an effluent; and it fades in the sun.",
  stats: [["Wet strength", "increases"], ["Rot resistance", "very high"], ["Flaw", "brittle, low elasticity"]],
  uses: "Blended shirting, canvas and fire hose historically, upholstery, paper.",
  link: "https://en.wikipedia.org/wiki/Ramie"
},
{
  id: "kapok", cat: "fibre", name: "Kapok",
  sub: "hollow seed floss from Ceiba pentandra", img: "kapok", extra: ["kapok2", "kapok3"],
  hook: "One sealed, air-filled cell per fibre, waxed, so it will not wet and holds thirty times its weight out of the water. It filled every life jacket until foam. It cannot be spun: too short, too smooth, too brittle.",
  more: "The pods of the silk-cotton tree split and let out a floss that is nine tenths air; the Dutch planted Java with it and shipped the fibre to Europe for mattresses and the lifebelts on every liner. Water runs off it because of the wax, and oil does not, so a kilogram of loose kapok soaks up forty of spilt oil and floats while it does. In a pillow it is light, cool and does not harbour mites as feathers do, hence the zafu cushion. The costs: the fibres are two centimetres long and have no crimp or scale, so no yarn can be made of them; they break to dust that is fierce in the lungs; it burns readily; it packs down and clumps after a few years in a mattress; and polyurethane foam took the life jacket in the 1950s and never gave it back.",
  stats: [["Buoyancy", "~5× cork by volume"], ["Density", "~0.03 g/cm³"], ["Spinnable", "no"]],
  uses: "Life jackets historically, pillow and mattress fill, zafu cushions, oil-spill absorbent.",
  link: "https://en.wikipedia.org/wiki/Kapok_fibre",
  tags: ["warmth", "duvet"]
},
{
  id: "rockwool", cat: "fibre", name: "Mineral wool",
  sub: "spun basalt and slag fibre", img: "rockwool", extra: ["rockwool2", "rockwool3"],
  hook: "Molten rock flung off spinning wheels as fibre, candy floss from a furnace. It insulates, soaks up sound and will not burn: it holds together at 1,000 degrees, so it is the insulation that stops a fire.",
  more: "Pele's hair blows off Hawaiian lava; the first factory copied it in Germany in 1871. Basalt and blast-furnace slag melt at 1,500 degrees and run onto a set of spinning wheels; droplets fly off, draw into fibres a few microns across and are caught on a belt, sprayed with phenolic resin and oil, and cured into a mat. The tangle holds still air, which is the insulation, and the rock does not care about heat, which is the firestop. The costs: the fibres itch and the dust is unpleasant to breathe, though modern grades dissolve in the lung; it is twice the weight of glass wool for the same warmth; the binder smokes off at 250 degrees; wet, it sags and stays wet; and it is the hardest insulation to get rid of, which is why it is found dumped in woods.",
  stats: [["Melting", ">1000 °C"], ["λ", "~0.035 W/m·K"], ["Also", "acoustic absorber"]],
  uses: "Building and pipe insulation, fire stopping, acoustic panels, hydroponic growing media.",
  link: "https://en.wikipedia.org/wiki/Mineral_wool",
  tags: ["warmth"]
},
{
  id: "wiremesh", cat: "fibre", name: "Woven wire cloth",
  sub: "Dutch-weave stainless mesh", img: "wiremesh", extra: ["wiremesh2", "wiremesh3"],
  hook: "A plain square weave filters to 25 microns and stops. Dutch weave runs coarse wires one way and fine wires packed tight the other, so the holes become slanted slots: 2 microns, in a cloth you can wash and use again.",
  more: "Wire cloth is woven on a loom like linen, in stainless, brass or bronze, and sold by mesh count and wire diameter; the square aperture is what is left. In Dutch weave the warp is heavy and the weft is as fine as can be drawn and beaten tight, so there is no straight hole through the cloth at all; a particle must turn a corner, and the mesh is rated by the largest glass bead that gets through. The costs: it blinds, since the slots fill with the particles they were built to catch and a backflush does not clear them all; the pressure drop is steep; the fine weft fatigues and breaks under pulsing flow, opening a hole you cannot see; the rating is nominal, not absolute; and a fine Dutch weave costs more than the fabric of a good suit.",
  stats: [["Plain weave", "to ~25 µm"], ["Dutch weave", "to ~2 µm"], ["Reusable", "backflush and reuse"]],
  uses: "Hydraulic and polymer melt filters, sieve analysis, EMI screening, security grilles.",
  link: "https://en.wikipedia.org/wiki/Mesh"
},
{
  id: "geotextile", cat: "fibre", name: "Geotextile",
  sub: "needle-punched or woven polypropylene", img: "geotextile", extra: ["geotextile2", "geotextile3"],
  hook: "Buried cloth that keeps two soils from mixing and lets the water through. A road on soft ground needs a third less stone, since the aggregate stops sinking into the mud; the fabric is cheaper than the rock it saves.",
  more: "Polypropylene staple needle-punched into a felt, or slit film woven into a sacking, laid under the first stone. It does four jobs and is sold for whichever one matters: separation, so the clay does not pump up into the ballast; filtration, letting water out of a drain while holding the fines; drainage along its own plane; and reinforcement, where a woven grade takes tension the soil cannot. The costs: polypropylene dies in sunlight, so a roll left open on site for a fortnight is already losing strength and the spec says cover it in days; a stone dropped from a loader punctures it; fines clog a filter in a few years in the wrong soil; it creeps under a standing load; and the hundred-year design life is an extrapolation, since the oldest is sixty.",
  stats: [["Permittivity", "water through, soil not"], ["Aggregate saved", "~30%"], ["Design life", "100 years buried"]],
  uses: "Road and rail subgrade, landfill liners, erosion control, drainage, French drains.",
  link: "https://en.wikipedia.org/wiki/Geotextile"
},
{
  id: "down", cat: "fibre", name: "Goose down",
  sub: "three-dimensional plumule clusters", img: "down", extra: ["down2", "down3"],
  hook: "Not a fibre but a cluster with no quill: barbs radiate from a point and branch, so a gram holds more still air than anything man-made. The best insulation by weight, and wet it collapses, which nothing has fixed.",
  more: "Under a goose's feathers is a layer of plumules, each a tuft of soft barbs with tiny hooks and nodes that stop them settling into each other; a handful lofts to a litre and springs back after a year compressed. Fill power, the cubic inches an ounce fills, runs from 550 for cheap duck to 900 for mature Hungarian goose; eider, gathered from the nests, is the best and is sold by the gram. The costs: wet, the barbs stick together and the loft is gone, and a hydrophobic coating only buys an hour; it must be sewn into a downproof fabric or it leaks through the weave; it clumps when washed; it costs several times a synthetic of the same warmth; and some of it is plucked from live birds, which is what the Responsible Down Standard was written against.",
  stats: [["Fill power", "550–900 in³/oz"], ["Warmth/weight", "unbeaten"], ["Wet", "collapses"]],
  uses: "Sleeping bags, duvets, expedition clothing.",
  link: "https://en.wikipedia.org/wiki/Down_feather",
  tags: ["warmth", "duvet"]
},
{
  id: "primaloft", cat: "fibre", name: "Synthetic down",
  sub: "fine crimped polyester microfibre", img: "primaloft", extra: ["primaloft2"],
  hook: "Built for the US Army, which wanted down that worked wet. Microfibres finer than a hair, crimped and siliconised: 70 per cent of down's warmth per gram, and most of it kept when wet, since polyester holds no water.",
  more: "Albany International made it to an army brief in 1983: filaments under a denier, hollow or solid, crimped, siliconised so they slide and loft, and blown into a batt held by a scrim or a light bonding. Thinsulate from 3M came first and Polarguard was a continuous filament; the trick in all of them is a fibre fine enough to trap air in the gaps a down barb would. It dries in hours, it is cheap, it can be cut and sewn as a sheet, and it does not leak through the shell. The costs: it never matches down, and the gap widens with every stuffing, since the fibres crease and do not spring back; a two-season jacket is visibly thinner; it packs to twice the volume for the same warmth; it melts at a spark and smoulders; and every wash sheds microfibres.",
  stats: [["vs down", "~70% warmth/weight"], ["Wet", "retains most loft"], ["Dries", "hours, not days"]],
  uses: "Insulated jackets and sleeping bags, work wear, marine clothing.",
  link: "https://en.wikipedia.org/wiki/Synthetic_fiber",
  tags: ["warmth"]
},
{
  id: "emifabric", cat: "fibre", name: "Conductive fabric",
  sub: "silver- or nickel-plated nylon ripstop", img: "emifabric", extra: ["emifabric2"],
  hook: "A Faraday cage you can sew. Ripstop is plated with silver, nickel or copper and the cloth drapes like taffeta while stopping 50 to 80 decibels of radio. Silver also kills foot bacteria, hence socks.",
  more: "The fabric goes through a bath that deposits a few hundred nanometres of metal on each fibre, so the weave stays open and soft but conducts at under a tenth of an ohm per square. A phone zipped into a bag of it cannot be rung, tracked or wiped, which is why the police evidence bag is made of it; a tent of it is a quiet room for a hospital MRI or a government office; a strip of it with foam inside is the gasket round a server door. The costs: the shield is only as good as its seams, and a seam sewn with ordinary thread is a slot antenna; silver tarnishes and nickel cracks where the cloth is folded, so the attenuation falls with every crease; washing finishes it; nickel on skin is an allergen; and a metre costs what a metre of silk does.",
  stats: [["Shielding", "50–80 dB"], ["Surface resistance", "<0.1 Ω/sq"], ["Plating", "Ag, Ni or Cu"]],
  uses: "EMI gaskets and shielding bags, ESD garments, touchscreen gloves, medical electrodes.",
  link: "https://en.wikipedia.org/wiki/Electromagnetic_shielding"
},
{
  id: "horsehair", cat: "fibre", name: "Horsehair",
  sub: "tail hair, woven or in hanks", img: "horsehair", extra: ["horsehair3"],
  hook: "A long, springy, scaled hair two trades never replaced. Woven as the weft of a canvas it holds a jacket's chest where no synthetic will; drawn across a string, its scales hold rosin and make the string speak.",
  more: "Tail hair is the length, up to a metre; mane hair is softer and goes to brushes and plaster. A violin bow carries 150 to 200 white hairs from a cold-country stallion, because mares wet their tails and the hair goes brittle; the scales catch the rosin and the rosin catches the string, and a rehair is due when the scales have worn smooth. Haircloth is a cotton warp with a single hair as each weft pick, which is why it is never wider than a tail is long; it is the stiff, springy canvas inside a tailored coat. The costs: it comes from the slaughterhouse, mostly from Mongolia and Argentina; white hair for bows is scarce and the rest is bleached; it breaks at the frog; and a weft end working through a jacket lining is a needle in the chest.",
  stats: [["Length", "to ~1 m"], ["Surface", "scaled, grips rosin"], ["Replacement", "none accepted"]],
  uses: "Violin and cello bows, bespoke tailoring canvas, upholstery stuffing, plaster reinforcement.",
  link: "https://en.wikipedia.org/wiki/Horsehair"
},
{
  id: "catgut", cat: "fibre", name: "Catgut",
  sub: "twisted serosa from sheep intestine", img: "catgut", extra: ["catgut2", "catgut3"],
  hook: "Not from cats. The outer layer of a sheep's gut, split into ribbons, twisted and dried, makes a string with a warmth steel never quite matched and a suture the body dissolves, the first stitch that took itself out.",
  more: "The intestine is scraped down to the serosa, slit into ribbons, and a handful of them twisted wet and left to dry under tension; three ribbons for a violin E, dozens for a bass. The string is collagen, so it is elastic and damps in a way steel does not, which is the roundness in a baroque viol; it was also the only strong thread the body could absorb, so for a century it closed every wound inside the skin, plain gut going in a week, chromed gut in three. The costs: gut drinks moisture, so the pitch wanders with the weather and a wet night breaks strings; it frays under the finger and goes false; the suture sets off more inflammation than a synthetic, and the EU and Japan withdrew it after BSE; and a set of gut strings costs several steel ones.",
  stats: [["Source", "sheep or goat serosa"], ["Suture", "absorbed in 60–90 days"], ["Humidity", "tunes with the weather"]],
  uses: "Baroque and classical instrument strings, racquets historically, absorbable sutures.",
  link: "https://en.wikipedia.org/wiki/Catgut"
},
{
  id: "technora", cat: "fibre", name: "Technora",
  sub: "para-aramid copolymer", img: "technora",
  hook: "An aramid built to survive what eats aramids. Teijin put an ether link into the backbone, so the chain flexes and it shrugs off the steam, acid and seawater that hydrolyse Kevlar and keeps most of the strength.",
  more: "Teijin, 1987. Kevlar is spun from a liquid crystal in sulphuric acid; Technora copolymerises the same unit with a bent diamine joined through an oxygen, is spun from an ordinary solution and drawn hot tenfold, which is where the strength comes from. The result is 3.4 gigapascals, a little under Kevlar, with a chain that water and alkali cannot get a grip on: after weeks in boiling water it keeps the strength a standard aramid has half lost. It is the cord inside a brake hose and a timing belt, the strength member of an optical cable, and the wet yacht halyard. The costs: it costs more than Kevlar; sunlight eats it like every aramid, so it is covered; it is weak in compression and in a knot; and its modulus is below Kevlar 49, so it stretches more.",
  stats: [["Tensile", "~3.4 GPa"], ["Modulus", "~70 GPa"], ["Hot water", "far better than standard aramid"]],
  uses: "Brake and hydraulic hose reinforcement, timing belt cord, optical cable strength members, racing yacht lines.",
  link: "https://en.wikipedia.org/wiki/Technora"
},
{
  id: "m5fibre", cat: "fibre", name: "M5 (PIPD)",
  sub: "poly(pyridobisimidazole)", img: "m5fibre",
  hook: "The one rigid-rod fibre built to hold hydrogen bonds sideways, so it resists being squashed as well as pulled; the others buckle at a tenth of that. On paper it beat everything. It never left the pilot plant.",
  more: "Doetze Sikkema at Akzo Nobel designed it in the 1990s: a ladder-stiff backbone like Zylon's, with hydroxyl groups and imidazole nitrogens placed so that each chain bonds to its neighbours in two directions. Kevlar and Zylon fail in compression because their chains slide and kink; the sideways bonds in M5 lock them, and the measured compressive strength came out at three or four times an aramid's, with a modulus over 300 gigapascals and a tenacity above Kevlar's. The costs: the monomer, a tetraaminopyridine, is a multi-step synthesis nobody has made cheaply; the fibre is spun from polyphosphoric acid like PBO; Magellan ran a pilot line in Virginia on army money and closed it; and it remains the benchmark everyone cites and nobody can buy.",
  stats: [["Predicted modulus", "300–450 GPa"], ["Compression", "best of the rigid rods"], ["Status", "never commercialised"]],
  uses: "Armour and cable prototypes only; the benchmark everyone cites and nobody can buy.",
  link: "https://en.wikipedia.org/wiki/M5_fiber"
},
{
  id: "basofil", cat: "fibre", name: "Melamine fibre",
  sub: "melamine-formaldehyde, Basofil", img: "basofil",
  hook: "A thermoset spun as a fibre, so no melting point to reach: it chars, holds its shape and keeps heat off the skin for a fraction of aramid's price. Too weak to be the strength, it is always the filling in a blend.",
  more: "BASF worked out in the 1990s how to spin a melamine-formaldehyde resin before it set, then cure the filament into a crosslinked, infusible fibre; made at Enka in North Carolina as Basofil. The polymer is the one in unbreakable plates and worktop laminate, and it behaves the same as a fibre: it will not melt or drip, it needs 32 per cent oxygen to keep burning, it chars to a crust at 370 degrees and the crust insulates. It is also a poor conductor of heat, the job in a hood. The costs: the tenacity is a quarter of an aramid's, so it goes in at 40 to 60 per cent with aramid or FR viscose and never alone; it is brittle and dusty; it comes pink and dyes badly; it can give off traces of formaldehyde; and it is a felt or a knit, never a woven outer shell.",
  stats: [["Limiting oxygen index", "~32%"], ["Continuous use", "190–200 °C"], ["Tenacity", "low, always blended"]],
  uses: "Firefighter hoods and liners, aircraft seat fire blocking, hot gas filter felts, mattress barriers.",
  link: "https://en.wikipedia.org/wiki/Melamine_resin"
},
{
  id: "preoxpan", cat: "fibre", name: "Oxidised PAN",
  sub: "stabilised polyacrylonitrile, Panox", img: "preoxpan",
  hook: "Carbon fibre stopped halfway. Heat acrylic in air and it cyclises into a black, infusible ladder polymer, 62 per cent carbon; carry on at 1,500 and it is carbon fibre. Stop here: a textile that will not burn.",
  more: "Every carbon-fibre plant has this stage: acrylic tow drawn slowly through ovens at 200 to 300 degrees in air, under tension so it does not shrink, while the nitriles close into rings. Sold as Panox or Pyron, it is black, limp, crimped and cut to staple like wool, and it will not catch: it needs 45 to 55 per cent oxygen to burn, does not melt or drip, and shrinks almost nothing in a flame. Needle-punched to felt, it goes under aircraft seats as the fire-blocking layer and into welding blankets. The costs: it is weak, about a third of a polyester, and wears through fast; it comes in one colour, black, and sheds a fine dust; it costs several times glass; and it is really a stage in someone else's process, priced accordingly.",
  stats: [["Carbon", "~62%"], ["Limiting oxygen index", "~45%"], ["Shrinkage in flame", "almost none"]],
  uses: "Fire blankets, flame barriers under aircraft and vehicle seats, firefighter underlayers, friction material preforms.",
  link: "https://en.wikipedia.org/wiki/Polyacrylonitrile"
},
{
  id: "silicafibre", cat: "fibre", name: "High-silica fibre",
  sub: "acid-leached glass fibre, 96–99% SiO₂", img: "silicafibre", extra: ["silicafibre2"],
  hook: "Glass cloth soaked in hot acid until everything but the silica is washed out. It behaves like quartz and drapes like cloth: it takes a welding spark or a rocket exhaust and stays a cloth where glass goes soft.",
  more: "A glass is a mixture of oxides, and most of them, the soda, the boron, the alumina, dissolve in hot hydrochloric acid; the silica does not. Leach a woven glass cloth for a day, rinse it, heat it to close the pores, and it is 96 to 99 per cent silica, with a softening point near 1,600 degrees instead of 700. Beta cloth, woven silica coated in PTFE, is what NASA dressed the Apollo spacecraft in after the fire of 1967. Fused-quartz fibre costs ten times as much. The costs: the leaching leaves the fibre porous and takes most of its strength, so the cloth tears and frays at an edge and is often coated with vermiculite to hold it; it abrades to a dust that itches; it cannot carry load hot, only heat; and it shrinks a little the first time it is fired.",
  stats: [["Silica", "96–99%"], ["Continuous use", "~1000 °C"], ["Short excursions", "~1600 °C"]],
  uses: "Welding blankets and curtains, furnace gaskets, ablative liners, exhaust wrap.",
  link: "https://en.wikipedia.org/wiki/Glass_fiber"
},
{
  id: "ptfethread", cat: "fibre", name: "PTFE thread",
  sub: "expanded PTFE sewing thread, Tenara", img: "ptfethread",
  hook: "Awnings used to fail at the stitching, not the cloth: polyester thread sits proud and takes the whole dose of sun. This thread does not know the sun is there, or chlorine or salt, so the seam outlives the fabric.",
  more: "Gore makes it from the same expanded PTFE as its rain jackets, stretched into a filament and twisted; nothing in sunlight, seawater, pool chlorine or bird droppings reacts with it, and it is the same at minus 70 as at 250 degrees. A seam in polyester thread on a boat cover is tired in three years and gone in five; one in this thread is guaranteed for the life of the fabric, which is why membrane roofs and marine canvas shops sew with it. The costs: it is several times the price of polyester and weaker, size for size, so it is sewn heavier; it is slippery, so the machine is retuned and a knot creeps; it has no stretch and no bite, so a badly set seam puckers; it will not take a dye and comes in a few pigmented colours; and it is a fluoropolymer.",
  stats: [["UV life", "effectively unlimited"], ["Strength", "below polyester"], ["Handling", "slippery, needs tension tuning"]],
  uses: "Marine canvas, awnings, tensile structures, pool covers, outdoor furniture.",
  link: "https://en.wikipedia.org/wiki/Polytetrafluoroethylene"
},
{
  id: "kuralon", cat: "fibre", name: "PVA fibre",
  sub: "polyvinyl alcohol, Kuralon, vinylon", img: "kuralon",
  hook: "The fibre made to dissolve on purpose. One grade vanishes in warm water, so lace is stitched onto it and the ground washed away; another grade replaced asbestos in cement board and is the fibre in bendable concrete.",
  more: "Polyvinyl alcohol dissolves in water. Ichiro Sakurada got round it in 1939 by spinning the solution and then treating the fibre with formaldehyde, which ties up enough hydroxyls to survive the wash; Kuraray sold it as vinylon from 1950, and North Korea built a whole industry on it from coal and limestone. Skip the formaldehyde and tune the hydrolysis instead and the fibre dissolves at a temperature of your choosing: that grade is the sacrificial ground of guipure lace. The formalised grade is stiff, strong and indifferent to alkali, so when asbestos left fibre cement in the 1980s this fed the Hatschek machines. The costs: it dyes badly, creases, and is no pleasure to wear; the soluble grade must be kept from steam until you want it gone.",
  stats: [["Dissolving grades", "tuned 20–90 °C"], ["Tenacity", "up to ~1.6 GPa"], ["Alkali", "stable in cement"]],
  uses: "Sacrificial yarn in embroidery and knitting, fibre cement sheet, bendable concrete, water-soluble packaging, North Korean uniforms.",
  link: "https://en.wikipedia.org/wiki/Polyvinyl_alcohol"
},
{
  id: "cashmere", cat: "fibre", name: "Cashmere",
  sub: "goat undercoat down", img: "cashmere", extra: ["cashmere2", "cashmere3"],
  hook: "Not the goat's hair but the down beneath it, grown for a Mongolian winter and combed out in spring. At 14 to 19 microns it bends under its own weight, so it feels like nothing, and a goat makes a scarf, not a coat.",
  more: "A cashmere goat is a two-layer animal: coarse guard hair outside, a fine crimped down beneath that it grows in autumn and casts in spring. Herders comb it out before it falls and a dehairing machine sorts the two by stiffness, which is where the cost sits: a goat gives one or two hundred grams. The American rule is a mean under 19 microns with almost nothing over 30, and anything coarser is legally goat hair. The scales are the same as wool's, so it spins, felts and dyes the same way, only softer and about three times as warm for the weight. The costs: the fibres are short, so cheap cashmere pills in a season; moths adore it; and the boom put more goats on the steppe than there is grass, and the fibre coarsens as the herds grow.",
  stats: [["Diameter", "14–19 µm"], ["Yield", "100–200 g per goat per year"], ["Warmth", "~3× wool by weight"]],
  uses: "Knitwear, shawls, scarves, blended suiting, and the overgrazing problem on the Mongolian steppe.",
  link: "https://en.wikipedia.org/wiki/Cashmere_wool",
  tags: ["warmth"]
},
{
  id: "qiviut", cat: "fibre", name: "Qiviut",
  sub: "muskox down", img: "qiviut", extra: ["qiviut2", "qiviut3"],
  hook: "The warmest animal fibre harvested, and nobody shears it: a muskox sheds it in sheets each spring and it is combed off, or picked off the scrub where the animal left it. It has almost no scales, so it cannot felt.",
  more: "A muskox grows an undercoat finer than cashmere under its skirt of guard hair and lets go of it in May all at once, and that is the harvest: farmed animals are combed in a chute, wild ones leave it on every bush. Dehaired, it is eleven to thirteen microns, light brown and said to be eight times as warm as wool, a figure nobody has tested very hard. The scales that felt wool are nearly absent, so it washes hot and will not mat. Most of the Alaskan crop goes through Oomingmak, a co-operative of village knitters, each village with its own lace pattern; that is where the hats priced like coats come from. The costs: a couple of kilos a year from a few thousand animals; no elasticity, so it sags; and it is softer than it is hard-wearing.",
  stats: [["Diameter", "11–13 µm"], ["Warmth", "~8× wool by weight"], ["Yield", "~2.5 kg per animal, shed"]],
  uses: "Arctic knitwear, the Alaskan and Canadian co-operative cottage industry, very expensive hats.",
  link: "https://en.wikipedia.org/wiki/Qiviut",
  tags: ["warmth"]
},
{
  id: "sinew", cat: "fibre", name: "Sinew",
  sub: "dried collagen tendon", img: "sinew", extra: ["sinew2"],
  hook: "Shred a dried tendon and you have thread that shrinks as it dries. Lash a joint with it wet and it pulls itself tight; boil the scraps and you have the glue to bed it in. The oldest self-tightening fastener.",
  more: "A tendon is collagen laid up as a rope, and dried it splits along the grain as fine as your patience. The long ones along a deer's back are the prize: soaked or chewed soft, twisted to thread or laid in hide glue, the same collagen in another form, so glue and fibre cure into one piece. On the back of a bow the sinew shrinks as it dries and pulls the stave into reflex, storing energy before it is strung; Plains and Inuit bows and the Turkish composite live on this. As thread it swells wet, so a skin-boat seam seals its own needle holes. The costs: a sinew-backed bow takes a season to cure and a wet day undoes it, since damp sinew goes soft and the bow follows the string; mould and moth love it; and one failed glue line takes the backing with it.",
  stats: [["Shrinkage on drying", "~10%"], ["Strength", "~100 MPa dry"], ["Wet", "goes soft, re-sets on drying"]],
  uses: "Bowstrings and sinew-backed bows, hafting stone points and fletching, skin-boat and moccasin seams, drum lacing.",
  link: "https://en.wikipedia.org/wiki/Tendon"
},
{
  id: "rawhide", cat: "fibre", name: "Rawhide",
  sub: "untanned dehaired hide", img: "rawhide", extra: ["rawhide2", "rawhide3"],
  hook: "Leather never tanned: dehaired and dried hard under tension. Lace a frame with it wet and the drying shrink locks the joint with no knot or fastener; the material is the clamp. Soak it and the joint comes apart.",
  more: "Tanning stops a skin behaving like a skin. Skip it, scrape off hair and flesh, stretch the hide to dry, and you have a sheet of collagen that is horn-hard dry, limp as a towel soaked, and swaps between the two as often as you like. Every use is a trick played on that cycle: snowshoe webbing and chair seats woven wet to shrink drum-tight; drum heads that tune themselves to the weather; saddle trees and lacrosse sticks wrapped wet so the hide grips the wood; parfleches folded wet into boxes. A rawhide mallet hits as hard as wood and marks nothing. The costs: a wet day loosens everything, so it lives indoors or under varnish; mice, beetles and dogs eat it; and a frame laced too wet or too tight can be crushed by its own webbing as it dries.",
  stats: [["Shrink", "tightens as it dries"], ["Dry state", "rigid, almost horn-like"], ["Weakness", "water undoes it"]],
  uses: "Snowshoes, drum heads, chair seats, lacrosse sticks, saddle trees, mallet faces, laminated armour, dog chews.",
  link: "https://en.wikipedia.org/wiki/Rawhide_(material)"
},
{
  id: "harakeke", cat: "fibre", name: "Harakeke (New Zealand flax)",
  sub: "Phormium tenax leaf fibre, muka", img: "harakeke", extra: ["harakeke2", "harakeke3"],
  hook: "Not a flax at all. The fibre is scraped out of the leaf with the edge of a mussel shell, which strips the green away without cutting the strands; the tool is the technique, and why muka comes out silky, not hairy.",
  more: "Phormium is a lily relative with two-metre leaves; the fibre runs their full length under green pulp. The Maori method is haro: score the leaf with a mussel shell and draw it under the edge so the pulp peels away, then soak, beat with a stone patu muka and roll into thread: long, lustrous and strong. The colonial mills skipped all that with a drum stripper that beat the leaf against a bar and sold the coarse result as New Zealand hemp for rope; the trade peaked around 1916 in the swamps near Foxton and died with yellow-leaf disease and cheap manila. The costs: the machine fibre was bruised and rotted fast in salt water; the hand fibre takes a day for a handful; and each use wants its own cultivar, so a pa harakeke is a collection, not a hedge.",
  stats: [["Wet strength", "holds up in water"], ["Extraction", "scraped, not retted"], ["Fineness", "spinnable by hand"]],
  uses: "Maori weaving: korowai cloaks, kete baskets, nets and cordage; a 19th-century export rope trade.",
  link: "https://en.wikipedia.org/wiki/Phormium_tenax"
},
{
  id: "esparto", cat: "fibre", name: "Esparto grass",
  sub: "Stipa tenacissima", img: "esparto", extra: ["esparto2", "esparto3"],
  hook: "A desert grass tough enough to be rope and short enough to be paper. Victorian Britain printed on it by the shipload: a bulky, opaque sheet from a plant nobody farmed, on ground that grows nothing else.",
  more: "Esparto is pulled, not cut, by hand off the dry hills of Spain and the Maghreb, where it is alfa. Raw it is wiry and brittle; soaked a month and sun-bleached it is esparto cocido, pale and pliable, and beaten it braids. Pleita, a flat braid sewn edge to edge, makes everything from baskets to espadrille soles, and twisted esparto was the Mediterranean's cheap rope. The second life came in 1856 when Thomas Routledge pulped it: fibres a millimetre or two long make a smooth, opaque, stable sheet that takes print well, and Scottish mills ate hundreds of thousands of tons a year until wood pulp undercut it. The costs: hot, prickly hand harvesting; it rots in damp, so esparto soles live in dry climates; and pulping it burns soda for a low yield.",
  stats: [["Fibre length", "~1.5 mm, short"], ["Paper", "bulky and opaque"], ["Habitat", "semi-arid, unirrigated"]],
  uses: "Cordage and mats, espadrille soles, baskets, pleita, book and printing papers.",
  link: "https://en.wikipedia.org/wiki/Esparto"
},
{
  id: "raffia", cat: "fibre", name: "Raffia",
  sub: "Raphia palm leaf epidermis", img: "raffia", extra: ["raffia2", "raffia3"],
  hook: "A flat fibre in a world of round ones. It is peeled off the leaf as a ribbon, so it lies down, grips itself and ties without cutting into what it holds, exactly what a grafted stem or a hat brim needs.",
  more: "Raffia is the skin of a palm leaflet, stripped from the young frond; Raphia palms have the longest leaves of any plant, so a strand runs to a metre and a half. The strip is thin, flat and soft and hardly moves with the weather, which is why a nurseryman ties a graft with it: it holds the scion without girdling the stem, and rots away about when it is no longer needed. Madagascar supplies most of it. In central Africa the strands are woven into Kuba cloth and cut-pile embroidery, and elsewhere into hats, mats and bags. The costs: it is brittle dry and must be dampened before it bends without cracking; strands are short, so everything is joined; and it fades and frays, so the florist's raffia is now mostly polypropylene tape pretending.",
  stats: [["Section", "flat ribbon, not round"], ["Length", "up to ~1.5 m"], ["Wet", "pliable, dries firm"]],
  uses: "Garden and grafting ties, hats and baskets, Kuba cloth, millinery, florist work.",
  link: "https://en.wikipedia.org/wiki/Raffia_palm"
},
{
  id: "pina", cat: "fibre", name: "Piña",
  sub: "pineapple leaf fibre", img: "pina", extra: ["pina2", "pina3"],
  hook: "Scraped out of pineapple leaves by hand, then knotted end to end, every filament, into a continuous thread. The cloth is stiff, sheer and faintly glassy, and the labour in a metre of it is why it stayed ceremonial.",
  more: "The leaves are the long spiny ones of the Red Spanish pineapple, grown in Aklan for the leaf. A broken plate scrapes off the pulp and gives two grades: coarse bastos on the outside and fine liniwan beneath, the one that matters. The fibres are washed, dried and tied one to the next by hand into a thread long enough to warp a loom, which takes weeks before a pick is thrown. The result is a crisp, ivory cloth that takes embroidery like paper, which is why 19th-century European courts wore it and the barong tagalog still does; UNESCO listed Aklan weaving in 2023. The costs: the price; it creases, dislikes water and is washed by hand; and because the real thing is so dear, most of what is sold as pina is piña-seda or jusi, silk or abaca doing the work.",
  stats: [["Preparation", "hand-scraped, hand-knotted"], ["Handle", "stiff and translucent"], ["Source", "a by-product of fruit"]],
  uses: "Barong tagalog and formal Philippine dress, embroidery grounds, ecclesiastical cloth.",
  link: "https://en.wikipedia.org/wiki/Pi%C3%B1a"
},
{
  id: "laidrope", cat: "fibre", name: "Three-strand laid rope",
  sub: "twisted construction", img: "laidrope", extra: ["laidrope2", "laidrope3"],
  hook: "Nothing holds this rope together but opposing twist: fibres spun one way, yarns laid the other, strands the first way again, each trying to unwind the next, and the standoff is the rope. Unbalance it and it knots.",
  more: "The build is older than writing: fibre spun right-handed into yarn, yarns twisted left-handed into strands, three strands laid right-handed into hawser, three hawsers laid left-handed into cable. Each twist is held by the next, so a cut end unlays in the hand unless whipped, and a splice is only strands tucked back against the lay. Every strand is as long as the rope, so it was made in a ropewalk: Chatham's is 346 metres. Natural fibre rope stretches, shrinks when wet, and coils clockwise or kinks. The costs: it spins under load, so a single line turns the weight it hoists; a sudden release kinks it into hockles that never quite come out; it is stiffer and weaker for its size than a braid; and chafe takes the outer strands, where the load sits.",
  stats: [["Lay", "right-hand by convention"], ["Splice", "strands tucked, no tools"], ["Vice", "torque, twist and hockling"]],
  uses: "Mooring and anchor lines, traditional rigging, hauling rope: the rope every knot book assumes.",
  link: "https://en.wikipedia.org/wiki/Rope"
},
{
  id: "doublebraid", cat: "fibre", name: "Double braid",
  sub: "braided core inside a braided cover", img: "doublebraid", extra: ["doublebraid2", "doublebraid3"],
  hook: "Two ropes sharing one job, each taking about half the load, and neither twisting. The clever part is the splice: the core is buried in its own cover, so pulling harder only locks it tighter, which beats any knot.",
  more: "Braid on braid came out of the American yacht trade in the 1950s, for nylon and the winch. A braided core carries half the load, a braided cover the other half, and since the strands run both ways round the axis there is no twist to unwind: it coils flat and runs through a block. The splice is the trick: cover tucked into core and core back into cover, and under load the two grip like a finger trap, so a good splice tests at nearly the rope's strength and a knot at half. The racing version puts Dyneema in the core and leaves the cover only the clutch and the sun. The costs: a knot throws away what the splice keeps; the cover can milk along the core and bunch; nylon drinks water; and a cut end is two ropes' worth of mess until it is whipped.",
  stats: [["Load split", "~50/50 core and cover"], ["Splice strength", "95–100% of rope"], ["Torque", "balanced, none"]],
  uses: "Yacht sheets and halyards, arborist climbing lines, winch and rescue rope, dock lines.",
  link: "https://en.wikipedia.org/wiki/Rope_splicing"
},
{
  id: "twelvestrand", cat: "fibre", name: "Twelve-strand hollow braid",
  sub: "single-braid construction", img: "twelvestrand", extra: ["twelvestrand2"],
  hook: "A rope with nothing inside it, which is the point: the splice goes down the middle of the rope itself. Hence the soft shackle: a loop of cord stronger than the steel it replaces, that dents no deck when it lets go.",
  more: "Twelve carriers braided round an empty middle give a flat, hollow tube of rope, and in Dyneema it is eight times as strong as steel wire for its weight. It is made for the splice: a fid pushes the tail into the hollow for seventy diameters, locked where it enters, and the braid grips the buried tail harder the harder you pull. A soft shackle is that splice closed on itself with a stopper knot: a lashing rated in tonnes that weighs grams, floats and bounces off a hull. The costs: Dyneema is slippery, so a knot holds half the rope's strength at best and the bury must be long; it creeps under a load left on it; it melts at 150 degrees, so a line running fast glazes on a winch; and the hollow flattens and chafes, so the ends wear a sleeve.",
  stats: [["Carriers", "12, no core"], ["Splice", "buried in its own braid"], ["Soft shackle", "beats steel per gram"]],
  uses: "Soft shackles and lashings, winch lines, arborist rigging, rope-to-rope connections, dinghy and racing control lines.",
  link: "https://en.wikipedia.org/wiki/Soft_shackle"
},
{
  id: "braidedline", cat: "fibre", name: "Braided fishing line",
  sub: "gel-spun UHMWPE, 4–8 carriers", img: "braidedline", extra: ["braidedline2", "braidedline3"],
  hook: "No stretch changes what fishing feels like: a fish mouthing the bait forty metres out arrives in your fingertips. It also means nothing absorbs a shock, so the rod and the knot must, and the line saws the guides.",
  more: "Four or eight strands of gel-spun polyethylene, Spectra or Dyneema, braided tight as thread; Japanese makers made it a product in the 1990s and it has taken over since. For a given breaking strain it is a third the diameter of nylon mono, so a reel holds three times the line and a lure casts further, and it stretches a few per cent where mono gives a quarter, which is why a bite and the bottom feel so close. It does not kink or remember the spool, and ignores the sun. The costs: no give, so a hard strike on a stiff rod breaks hooks and knots; slippery, so ordinary knots slide and the good ones are a lesson; opaque, so a fluorocarbon leader goes between it and the fish; it digs into itself on the spool; and it cuts fingers and guide rings alike.",
  stats: [["Stretch", "~3% or less"], ["Diameter", "about a third of mono"], ["Knots", "slips unless tied for it"]],
  uses: "Spinning and baitcasting mainline, jigging, kite and drone line, cut-resistant cord.",
  link: "https://en.wikipedia.org/wiki/Fishing_line"
},
{
  id: "kineticrope", cat: "fibre", name: "Kinetic recovery rope",
  sub: "double-braid nylon, high stretch", img: "kineticrope", extra: ["kineticrope2"],
  hook: "A rope made to stretch, the opposite of every other rope. The recovery vehicle takes a run-up, the rope stores the energy and hands it back, and a stuck truck floats out where a cable would tear the bumper off.",
  more: "Nylon stretches more than any rope fibre, a double braid of it most of all: a fifth to a third of its length under load, and back. Hitch it to a stuck vehicle, drive off at walking pace, and the rope takes the mover's energy over two or three metres of stretch and feeds it to the stuck one as a steady, rising pull; the truck comes out of the mud as if lifted. A chain or a cable has no such reserve, so it breaks what it is tied to. The costs: what makes it work makes it dangerous, because a rope holding a few hundred kilojoules that lets go, or pulls a tow ball off, fires it through a windscreen; so the anchors are rated, the shackles soft or fused to break first, a blanket over it; nylon is a tenth weaker wet; and every hard pull leaves it longer.",
  stats: [["Stretch", "20–30% working"], ["Energy", "stores it, returns it"], ["Failure", "recoils: the dangerous part"]],
  uses: "Off-road and farm vehicle recovery, military towing; the successor to the snatch strap and the steel cable.",
  link: "https://en.wikipedia.org/wiki/Snatch_strap"
},
{
  id: "pianowire", cat: "fibre", name: "Music wire",
  sub: "cold-drawn high-carbon steel", img: "pianowire", extra: ["pianowire2", "pianowire3"],
  hook: "The strongest steel sold by the kilometre, made so by being pulled through holes. Each die draws the pearlite plates thinner and straighter until the wire is a composite of itself: drawing, not heat treatment.",
  more: "Plain carbon steel, eight or nine parts in a thousand, nothing exotic. The trick is the sequence: the rod is patented, heated and quenched in a lead bath so it sets as fine pearlite, then drawn cold through die after die until nine-tenths of its section is gone and the cementite plates are ribbons nanometres apart along the wire. That is the strength, 2,000 megapascals thick and 3,000 fine, and why music wire is never hardened and tempered: drawing has done more than a quench could. A grand piano holds twenty tonnes of it, hence the cast-iron plate, and every spring that must last is the same stuff. The costs: heat it and the strength is gone, so no welding, brazing or hot forming; it rusts; a sharp bend cracks it; and a snapped string whips.",
  stats: [["Tensile", "2300–3000 MPa in fine sizes"], ["Carbon", "0.7–1.0%"], ["Route", "cold drawing, no quench"]],
  uses: "Piano and instrument strings, springs, cheese cutters, control cables, lock picks, model aircraft undercarriages.",
  link: "https://en.wikipedia.org/wiki/Piano_wire"
},
{
  id: "rattan", cat: "fibre", name: "Rattan cane",
  sub: "split peel and core of a climbing palm", img: "rattan", extra: ["rattan2", "rattan3"],
  hook: "A palm that climbs instead of standing, so its stem is solid, even in girth and a hundred metres long: long weaving stock that no saw made. The glossy peel takes the tension, the soft core takes the bend.",
  more: "Rattan is six hundred species of hooked climbing palm in the South-East Asian forest, nearly all still cut wild, cured in hot diesel or smoke against the beetle, and dried on racks. The skin is glossy and hard with silica; split into strips it is the cane of a caned chair, woven by hand or by machine, and the binding that lashes a frame. The core is pith, takes a tight bend and no load: round reed, the stuff of wicker. Whole poles steam-bend into furniture frames. All of it is worked wet and sets as it dries, so a caned seat tightens on itself. The costs: it leaves the forest faster than it grows back; it fades, dries brittle, sags in a humid summer; the beetle still gets it; and a split in the peel runs the length of the strip.",
  stats: [["Peel", "strong, glossy, takes the tension"], ["Core", "soft reed, bends but carries little"], ["Set", "woven wet, tightens as it dries"]],
  uses: "Caned chair seats and backs, baskets, furniture frames, walking sticks, bindings, polo mallets.",
  link: "https://en.wikipedia.org/wiki/Rattan"
},
{
  id: "willow", cat: "fibre", name: "Willow (osier)",
  sub: "one season of growth, cut in winter", img: "willow", extra: ["willow2", "willow3"],
  hook: "Basketry willow is never timber: a single year of growth, cut from a stooled bed in winter and sorted to the millimetre, because taper is everything in a weave. Dry it snaps; soaked, it bends as no sawn wood will.",
  more: "A willow bed is cut to the ground every winter and the stools throw up rods a metre or two long by the next, straight and unbranched. The rods are graded by length and come three ways: bark on, brown; stood in water till the sap rises in spring and stripped, white; boiled a day in the bark so the tannin stains it, then stripped, buff, the usual colour. All are soaked again before weaving, a day or so a foot, and used within hours. The weave is pulled tight wet and the rods shrink as they dry, so a basket is stiffer a week on than the day it was made. The costs: a bed takes three years to bear and wants cutting every year after; stripping is most of the labour; the willow beetle eats the leaf; and a basket left in the rain rots from the base up.",
  stats: [["Stock", "one season of growth, winter cut"], ["Soaked", "days before weaving, or it snaps"], ["Shrinks", "tighter than it was woven"]],
  uses: "Baskets, hurdles and fencing, living willow structures, coffins, balloon baskets, fish traps.",
  link: "https://en.wikipedia.org/wiki/Salix_viminalis"
},
{
  id: "tatami", cat: "fibre", name: "Tatami rush (igusa)",
  sub: "soft rush woven over a pressed core", img: "tatami", extra: ["tatami2", "tatami3"],
  hook: "A tatami is two materials: a pressed core of straw or board, and a facing of soft rush woven over it. The rush is a tube of pith, so the mat is springy, warm and breathes with the seasons, and smells of hay a year.",
  more: "Igusa is a soft rush grown in paddies, most of it in Kumamoto; cut in July, dipped in clay slurry to even the colour, dried, and woven at some five thousand stems a mat. That facing is stitched over a core that was forty centimetres of rice straw pressed to five and is now as often fibreboard and foam, then edged with tape. The pith is what the floor feels like: it gives underfoot, holds warmth, drinks the summer damp and gives it back in winter. A mat is also a measure; rooms are counted in it. A worn face is turned, after seven or eight years replaced on the same core, and binned at twenty. The costs: mould and mites in a damp room; sun turns the green to straw in a season; a chair leg dents it for good; and a real straw core weighs thirty kilos.",
  stats: [["Facing", "igusa rush over straw or board"], ["Doubles as", "the unit a room is measured in"], ["Worn out", "flipped, then re-faced, not binned"]],
  uses: "Japanese flooring, tea rooms, judo and kendo halls, zabuton and futon bases.",
  link: "https://en.wikipedia.org/wiki/Tatami"
},
{
  id: "toquilla", cat: "fibre", name: "Toquilla straw",
  sub: "split palm shoot, boiled and sun-dried", img: "toquilla", extra: ["toquilla2", "toquilla3"],
  hook: "The straw of the Panama hat, which is Ecuadorian: split by fingernail from an unopened shoot, boiled, sun-dried and woven damp, since dry straw breaks and wet stretches. A fine hat is months of one pair of hands.",
  more: "Carludovica palmata looks like a palm and is not; the straw is the young shoot, cut before it opens, split into strands with a needle or a nail, boiled, dried and bleached in sulphur smoke. The weaver starts a rosette at the crown and works out and down in the damp hours of the morning, since the straw is supple only wet, and the hat comes off as one seamless fabric, to be blocked and ironed. The grade is the count: a working hat has ten strands to the inch, a Montecristi superfino forty, and the finest take the weavers of Pile months each. The costs: the thousand-dollar hat earns its weaver a fraction; dry straw cracks, so the rolled-up Panama is a story about cheap ones; sweat and sun yellow it; and the name went to the canal and never came back.",
  stats: [["Split", "by fingernail from the leaf shoot"], ["Woven", "damp, in the cool of the morning"], ["Fine grades", "months of work, one weaver"]],
  uses: "Panama hats, fans and baskets, fine Ecuadorian and Peruvian weaving.",
  link: "https://en.wikipedia.org/wiki/Carludovica_palmata"
},
{
  id: "worsted", cat: "fibre", name: "Worsted yarn",
  sub: "combed, parallel, long staple only", img: "worsted", extra: ["worsted2", "worsted3"],
  hook: "Worsted and woollen are not two sheep but two ways with one fleece. Combing lays the long fibres parallel and drops the short; spun tight, that is a smooth, dense yarn, and cloth that holds a crease and shines.",
  more: "The name is a Norfolk village, Worstead; the trade moved to Bradford, where the stove-heated hand combs became the Noble comb of 1853, a ring of pins that leaves the long fibres side by side as top and drops the short as noil. Top is drawn out and spun with a short draft and a hard twist, so the yarn holds little air and has a clean, lustrous face. Its cloth, gabardine, serge, the suit length, drapes and holds a crease. Woollen is the opposite choice: carded, fibres every way, spun soft and airy, which is why tweed is warm and fuzzy and worsted is not. The costs: the comb drops a tenth to a third of the fleece, and only long wool combs, so it is the dear yarn; it is cool for its weight; and the face that takes a crease goes shiny at the elbows.",
  stats: [["Combed", "fibres parallel, shorts removed"], ["Loses", "a tenth to a third of the fleece as noil"], ["Cloth", "smooth, dense, holds a crease"]],
  uses: "Suiting and tailoring cloth, gabardine and serge, fine knitting yarn, upholstery, billiard cloth.",
  link: "https://en.wikipedia.org/wiki/Worsted"
},

/* ---------- FABRICS & CONSTRUCTIONS ---------- */
{
  id: "jacquard", cat: "fabric", name: "Jacquard weave",
  sub: "punched-card warp selection", img: "jacquard", extra: ["jacquard2", "jacquard3"],
  hook: "Every warp thread gets its own hook, and a punched card decides which ones lift. That turned pattern into data in 1804, freed the weaver from the repeat, and gave Babbage and Hollerith the punched card.",
  more: "Before 1804 a figured cloth needed a draw-boy on the loom pulling cords in order, and the pattern was his reach. Jacquard's head puts a needle against every hook; a card pressed on them passes only the hooks that meet a hole, those lift, and the next card comes round on a chain. The pattern is the chain, as long as you like and copied by punching another. Lyon broke the first machines, then bought thousands; Babbage planned his engine round the chain; Hollerith counted a census with the card. Since the 1980s the needles are solenoids and the chain a file, but head and cloth are still called jacquard. The costs: a head of ten thousand hooks is dear and slow; a big figure means long floats that snag; and the chains weighed more than the loom.",
  stats: [["Control", "one card row per pick"], ["Repeat", "effectively unlimited"], ["Legacy", "the first stored program"]],
  uses: "Figured upholstery and damask, labels and ribbons, one-piece woven airbags, carbon fibre preforms.",
  link: "https://en.wikipedia.org/wiki/Jacquard_machine"
},
{
  id: "leno", cat: "fabric", name: "Leno weave",
  sub: "crossed-warp gauze", img: "leno", extra: ["leno2"],
  hook: "Paired warp threads cross over each other between every pick, so each weft yarn is trapped in a twist rather than resting in a gap. That is how a fabric can be mostly holes and still not slide out of shape.",
  more: "In a plain open weave only friction holds a thread, so cheesecloth drifts out of square in the hand. Leno fixes that with a second heddle, the doup, that carries one end of each warp pair across its neighbour and back, so the pair twists round every pick and locks it. The cloth can then be as open as a net and the holes stay put: shade cloth and insect screen, plaster scrim, the orange mesh bag onions come in, marquisette curtain net, geogrid under a road, and once every bandage. Japan's silk summer gauzes, ro and sha, are the same crossing done fine. The costs: the doup runs at a fraction of plain-weave speed; the twist wears the yarn; an open cloth has no cover, so it shades and screens and keeps nothing warm; and a snag pulls a whole crossed pair.",
  stats: [["Openness", "mostly air"], ["Slippage", "locked by the twist"], ["Cost", "slower than plain weave"]],
  uses: "Shade cloth and insect screen, plaster scrim, produce bags, marquisette, geogrid, surgical gauze.",
  link: "https://en.wikipedia.org/wiki/Leno_weave"
},
{
  id: "triaxial", cat: "fabric", name: "Triaxial weave",
  sub: "three yarn sets at 60°", img: "triaxial",
  hook: "Ordinary cloth has two thread directions and no resistance to racking: pull it on the diagonal and the square goes to a parallelogram. Add a third set at sixty degrees and the shear has nowhere to go.",
  more: "Basket makers always knew: hexagonal bamboo weave runs three sets of strips at sixty degrees, and the mesh is stiff where a square plait collapses. A loom for it came in 1969, when Norris Dow fed two warps across each other through a weft and sold the cloth as Doweave. The basic weave leaves small hexagonal holes, the yarns locked at every crossing; a tighter one closes them. The result is a thin cloth nearly the same in every direction, hard to tear because a tear must cut three yarns, and stiff on the bias, which is what sails, kites, balloons and composite skins want. The costs: the loom is rare and slow; three yarn sets give less cover for more yarn than two; the holes are there whether you want them or not; and almost nobody weaves it.",
  stats: [["Yarn directions", "3 at 60°"], ["Shear stiffness", "far above biaxial"], ["Isotropy", "near-equal in plane"]],
  uses: "Sailcloth and kite skins, filter and screen fabric, balloon envelopes, composite reinforcement.",
  link: "https://en.wikipedia.org/wiki/Weaving"
},
{
  id: "doublecloth", cat: "fabric", name: "Double cloth",
  sub: "two fabrics woven at once", img: "doublecloth", extra: ["doublecloth2", "doublecloth3"],
  hook: "One loom, two complete cloths, stitched together wherever the weaver swaps a thread from the top layer to the bottom. Stop swapping and the layers part: the pocket, the tube and the closed bag are woven, not sewn.",
  more: "Two warps and two wefts weave an upper cloth and a lower one at once, and at every point the weaver decides whether they change places. Swap them wherever the colour should change and you have a reversible figured cloth, each face the negative of the other: Peru two thousand years ago, the Welsh tapestry blanket, the American Jacquard coverlet. Stitch the layers at the edges only and the middle is a pocket; stitch along two lines and it comes off the loom as a tube, which is how a fire hose is woven and an airbag made in one piece with no seam to burst. Double-faced coat cloth is the same idea in plain wool. The costs: twice the yarn, twice the weight, half the speed; the stitching points dimple a plain face; and badly stitched layers bag and slide.",
  stats: [["Layers", "2 or more, simultaneous"], ["Join", "by thread exchange"], ["Reversible", "a different face each side"]],
  uses: "Reversible coats and blankets, Welsh and Jacquard tapestry, woven tubes, one-piece airbags, ducting and hose.",
  link: "https://en.wikipedia.org/wiki/Double_cloth"
},
{
  id: "terrypile", cat: "fabric", name: "Pile weave",
  sub: "terry and velvet construction", img: "terrypile", extra: ["terrypile2", "terrypile3"],
  hook: "A second warp fed in slack, so the fabric grows a third dimension off a flat loom. Leave the loops whole and it is a towel, where surface area is the point. Shear them and it is velvet, where the cut ends are.",
  more: "A towel loom carries two warps, one tight, one slack. The reed leaves two picks short, then drives the third home with them, and the slack warp buckles into loops on both faces; the loops are what dry you, many times the cloth's area, and what makes a towel heavy and slow to dry. Velvet is the slack warp lifted over wires and cut, or two cloths woven face to face with the pile between them and a knife splitting them off the loom, the usual way since the 1800s. Velveteen and corduroy are the cheap kind, a weft pile cut after weaving; the wales are where the knife ran. The costs: a loop snags and pulls a row; cut pile crushes under a hand or a chair and shades two ways, so a garment is cut nap one way; and a pile loom is slow and eats twice the yarn.",
  stats: [["Warps", "2, one slack"], ["Loops uncut", "towel, high absorbency"], ["Loops cut", "velvet and velour"]],
  uses: "Towels and robes, velvet and corduroy, upholstery plush, cleaning cloth.",
  link: "https://en.wikipedia.org/wiki/Pile_(textile)"
},
{
  id: "warpknit", cat: "fabric", name: "Warp knitting",
  sub: "tricot and raschel", img: "warpknit", extra: ["warpknit2", "warpknit3"],
  hook: "Every warp end has its own needle and the loops interlock sideways along the row, not in one running chain. Cut it and nothing unravels, which is why a ladder in tricot stays a hole instead of racing to the hem.",
  more: "A weft knit is one yarn chasing itself across the cloth; a warp knit is a beam of yarns, one to a needle, each looping into its neighbour as the whole bar knits at once. Guide bars swing the yarns between needles, and the path they lap is the structure: tricot, fine and diagonal-faced, from the 1770s; raschel, coarser, named after an actress, for lace, net and mesh. Since the loops run sideways the cloth does not ladder and cuts without hemming, and with every needle working together it is the fastest cloth-maker, thousands of courses a minute. The costs: every yarn is wound onto a beam first, so short runs are dear; the cloth gives little along its length, so stretch is elastane knitted in; and a new pattern means re-threading a thousand guides.",
  stats: [["Yarns", "one per needle"], ["Run resistance", "high, does not ladder"], ["Speed", "very fast, wide fabric"]],
  uses: "Lingerie and swimwear, powernet and mesh, mosquito and sports netting, car headliners, geogrid, fruit bags.",
  link: "https://en.wikipedia.org/wiki/Warp_knitting"
},
{
  id: "jersey", cat: "fabric", name: "Weft-knit jersey",
  sub: "single-bed loop structure", img: "jersey", extra: ["jersey2", "jersey3"],
  hook: "A single yarn looped through itself in rows. It stretches a third again with no elastic in it, because the loops straighten, so a knitted shirt fits where a woven one is tailored. Cut a loop and the row runs.",
  more: "It is the structure a hand knitter calls stocking stitch: a yarn drawn in a loop through the loop below, course after course, so the face shows columns of Vs and the back rows of ridges. Each loop is a little spring of slack; pulling the cloth straightens them, which is the stretch, and why it comes back. William Lee's stocking frame of 1589 did it with hooked needles; a circular machine does it with a few thousand latch needles in a ring, knitting a tube a metre wide at a rate that keeps the world in T-shirts. The costs: the edges curl, so every one is hemmed; a broken loop lets the column above it run; the spiral path of the yarn twists the tube, so side seams creep round the body; it bags at elbows and knees; and it snags on anything.",
  stats: [["Stretch", "30–50% with no elastane"], ["Edges", "curl, need hemming"], ["Failure", "one broken loop runs"]],
  uses: "T-shirts and underwear, sweatshirting, sportswear, medical tubular bandage.",
  link: "https://en.wikipedia.org/wiki/Jersey_(fabric)"
},
{
  id: "seamlessknit", cat: "fabric", name: "Whole-garment knitting",
  sub: "3D knitted to shape", img: "seamlessknit", extra: ["seamlessknit2", "seamlessknit3"],
  hook: "The machine knits a finished garment, sleeves, body and neck, in one piece: no cut panels, no seams to sew. Cutting flat cloth throws away 15 to 20 per cent of it; this throws away nothing, the real argument.",
  more: "The sock got there first: a circular machine has turned a heel and closed a toe since the 1860s, and the seamless underwear of the 1980s is the same tube knitted body-sized. The sweater took until the 1990s, when Shima Seiki and Stoll built flat machines with four needle beds that knit body and sleeves as three tubes, join them at the armholes, shape the shoulders stitch by stitch and cast off a collar, so the garment comes off ready to wear. Knitted shoe uppers are the same idea laid flat, each zone of the foot its own stitch. The costs: a machine costs as much as a house and takes up to an hour a sweater; every size is its own programme, and programming is a trade; a snapped end stops the whole garment; and a seamless garment cannot be let out.",
  stats: [["Seams", "none"], ["Cutting waste", "~0 vs 15–20%"], ["Shaping", "stitch by stitch in software"]],
  uses: "Seamless knitwear and hosiery, knitted shoe uppers, compression garments, medical sleeves.",
  link: "https://en.wikipedia.org/wiki/Knitting_machine"
},
{
  id: "spacerfabric", cat: "fabric", name: "Spacer fabric",
  sub: "3D knit with monofilament pile", img: "spacerfabric", extra: ["spacerfabric2", "spacerfabric3"],
  hook: "Two knitted faces made at once and held apart by monofilaments standing between them. It cushions like foam but is open to air and water, springs back instead of denting, and goes through a washing machine.",
  more: "A raschel machine with two needle bars knits two cloths a set distance apart, and a stiff polyester monofilament is lapped back and forth between them, so the cloth comes off as a sandwich with thousands of tiny columns. Press it and the columns buckle; let go and they stand up again, which old foam does not. The faces can be anything the machine knits, closed one side and mesh the other, so air and water pass straight through, and the whole thing is one polymer, so a car seat made of it recycles where foam and fabric cannot. The costs: it is dear next to foam; it cannot be moulded, and is never thicker than it was knitted, a few millimetres to two centimetres; a cut edge bristles; and it supports firmly, with none of the soft sink of a cushion.",
  stats: [["Thickness", "2–20 mm knitted in"], ["Recovery", "no permanent set"], ["Airflow", "open through the core"]],
  uses: "Mattress and car-seat tops, backpack straps, shoe uppers, orthopaedic padding, pressure-sore mattresses, bra cups.",
  link: "https://en.wikipedia.org/wiki/Warp_knitting"
},
{
  id: "fleece", cat: "fabric", name: "Polar fleece",
  sub: "napped double-knit polyester", img: "fleece", extra: ["fleece2"],
  hook: "A polyester knit brushed until the fibre ends stand up, then shorn level: mostly trapped air. Left unpatented in 1979, it barely absorbs water, is often spun from drinks bottles, and sheds plastic in every wash.",
  more: "Malden Mills made it in 1979 by running a polyester knit under wire brushes until the face was a fur of broken fibre ends, then shearing it; Patagonia put it in a jacket, the mill declined to patent it, and every outdoor brand copied it. The warmth is the air in the nap, as in wool, but the fibre is polyester, which takes up one per cent of its weight in water, so a wet fleece is wrung out and worn, dries in an hour and weighs less than wool; by 1993 the polyester came from bottles. The costs: it is a sieve to wind, so it wants a shell; it pills, and the anti-pill finishes wear off; a spark melts a hole in it; it stinks sooner than wool; and every wash sends thousands of plastic fibres down the drain, where the microfibre problem was first counted.",
  stats: [["Weight", "100–300 g/m²"], ["Water uptake", "~1% of its weight"], ["Problem", "microfibre shedding"]],
  uses: "Midlayers and jackets, blankets, pet bedding, linings, hats and gloves.",
  link: "https://en.wikipedia.org/wiki/Polar_fleece",
  tags: ["warmth"]
},
{
  id: "nonwoven", cat: "fabric", name: "Spunbond-meltblown nonwoven",
  sub: "SMS web, no yarn at all", img: "nonwoven", extra: ["nonwoven2", "nonwoven3"],
  hook: "Fabric with no spinning and no weaving: melt to web in one go, bonded where the fibres touch. The meltblown middle is fibres a few microns across, fine enough to catch what no weave could: the filter in a mask.",
  more: "A spunbond line pushes molten polypropylene through thousands of holes, draws the filaments with air, drops them on a belt and welds the web at a pattern of points; a meltblown head blasts the melt with hot air, so the filaments shatter to a hundredth of the width and land as a weak, very fine web. Meltblown between two spunbonds is SMS, the cloth of the gown and the mask: the outer layers give the strength, the inner the pore size, and a static charge makes the fibres grab particles smaller than the holes. It comes off at hundreds of metres a minute, for pennies. The costs: no drape, no stretch, and a tear, once started, runs; it is made to be thrown away, by the billion; the meltblown head is the bottleneck, as 2020 showed; and a spark melts it.",
  stats: [["Meltblown fibre", "1–5 µm"], ["Spunbond fibre", "15–35 µm"], ["Route", "melt to fabric in one line"]],
  uses: "Surgical gowns and masks, nappies and wipes, housewrap, crop covers, geotextile, teabags.",
  link: "https://en.wikipedia.org/wiki/Nonwoven_fabric"
},
{
  id: "needlepunch", cat: "fabric", name: "Needle-punched felt",
  sub: "mechanically entangled web", img: "needlepunch", extra: ["needlepunch2", "needlepunch3"],
  hook: "Thousands of barbed needles stab a loose web tens of times a second, dragging fibres down through it. Nothing is spun, knitted, glued or melted: friction between tangled fibres holds the fabric, and nothing else.",
  more: "A needle loom is a board the width of the web set with thousands of needles, each a notched blade, driven up and down a thousand times a minute while the carded web crawls through below. Going down, each barb catches a few fibres and carries them through; coming up it lets go, and the fibres stay put, knotted round their neighbours. Enough passes and a fleece two fingers thick is a dense felt that holds a cut edge, made from anything that cards, old clothes and factory offcuts included, which is why a car boot and a carpet underlay are made of it. The costs: it is heavy for its strength, weaker than a woven cloth of the same weight; the needles break fibres and leave a pattern of holes; it sheds lint; and only crimped staple will felt.",
  stats: [["Punches", "up to ~2000 per cm²"], ["Binder", "none, friction only"], ["Thickness", "1–20 mm"]],
  uses: "Car boot and underbody linings, carpet underlay, filter felt, geotextile, papermaker felts, craft felt.",
  link: "https://en.wikipedia.org/wiki/Needle_felting"
},
{
  id: "electrospun", cat: "fabric", name: "Electrospun nanofibre mat",
  sub: "polymer drawn by a high-voltage field", img: "electrospun", extra: ["electrospun2", "electrospun3"],
  hook: "A drop of polymer at twenty kilovolts tears into a whipping jet and lands as fibres a hundred times finer than any spinneret makes. No textile route makes pores like it, and it comes off the rig by the gram.",
  more: "Hang a drop of polymer solution from a needle at twenty thousand volts above a plate, and it pulls into a cone and throws a jet from the tip. The jet runs straight a centimetre, then its own charge whips it into loops that stretch it thousands of times as the solvent goes, and what lands is a tangle of dry fibres hundreds of nanometres thick. Formhals patented it in 1934, Taylor explained the cone in 1964, and the 1990s rediscovered it for filters, battery separators and cell scaffolds, where collagen-sized fibres are the point. The costs: a needle makes a gram an hour, so industrial rigs spin from a wire, and count in kilograms; the mat is fragile and needs a carrier; there is solvent to recover; and humidity changes the fibre day to day.",
  stats: [["Fibre diameter", "50–500 nm"], ["Voltage", "10–30 kV"], ["Limit", "production rate"]],
  uses: "Wound dressings and scaffolds, high-efficiency air filtration, battery separators, sensor membranes.",
  link: "https://en.wikipedia.org/wiki/Electrospinning"
},
{
  id: "tyvek", cat: "fabric", name: "Tyvek",
  sub: "flash-spun high-density polyethylene", img: "tyvek", extra: ["tyvek2", "tyvek3"],
  hook: "Polyethylene in solvent under pressure, let go, so the solvent flashes off and leaves a cloud of fibres pressed to a sheet. It looks like paper, tears like cloth, passes vapour, stops water, and takes no pencil.",
  more: "A DuPont researcher saw fluff blowing from a leaking pipe in 1955; by 1967 it was a product. Polyethylene is dissolved in a solvent held under pressure above its boiling point and let out through a nozzle; the solvent flashes and the polymer freezes as a web of ribbon fibres, laid down and pressed hot to bond where they touch. Nothing is woven, so a sheet has no grain and resists tearing every way, as a courier envelope wants; the pores pass vapour and stop a drop, as a house wrap wants; and they stop bacteria and pass steam, so sterile instruments come sealed in it. The costs: it melts at 135 degrees, so no ironing; sun breaks it down in months, so a wrapped house wants cladding soon; it is noisy, slippery, takes ink badly; and a pencil slides.",
  stats: [["Fibre diameter", "0.5–10 µm"], ["Water", "liquid out, vapour through"], ["Tear", "very high for paper"]],
  uses: "Housewrap, courier envelopes, sterile medical packaging, protective coveralls, wristbands, maps.",
  link: "https://en.wikipedia.org/wiki/Tyvek"
},
{
  id: "stitchbond", cat: "fabric", name: "Non-crimp fabric",
  sub: "stitched multiaxial reinforcement", img: "stitchbond", extra: ["stitchbond2", "stitchbond3"],
  hook: "Weaving sends every fibre over and under, and a bent fibre is weaker. Here the layers lie dead straight at the angles the part needs, held by a light stitching yarn, so the laminate is as strong as the fibre.",
  more: "In a woven reinforcement every yarn climbs over and dives under; under load the crimps straighten, costing stiffness, and the fibre breaks at the bend. A multiaxial machine lays sheets of parallel tow one over another, each at its angle, 0, 90, plus and minus 45, and needles chain-stitch the stack with fine polyester. The yarns never bend, so the laminate is stiffer and stronger than a woven one of the same weight, most in compression and fatigue, and a turbine blade goes up in a few thick layers instead of dozens of thin. The idea is East German stitch-bonding, borrowed. The costs: the stitches part the tows and leave resin-rich channels where cracks start; it drapes badly; a cut edge frays into loose tows; and thick layers hide dry spots.",
  stats: [["Crimp", "none"], ["Strength gain", "~10–15% over woven"], ["Angles", "0/90/±45 as laid"]],
  uses: "Wind turbine blades, boat hulls, automotive and rail composite panels.",
  link: "https://en.wikipedia.org/wiki/Fibre-reinforced_plastic"
},
{
  id: "woven3d", cat: "fabric", name: "3D woven preform",
  sub: "through-thickness yarn architecture", img: "woven3d", extra: ["woven3d2", "woven3d3"],
  hook: "A stack of flat plies delaminates because only resin holds one ply to the next. Weave yarns through the thickness and there is no plane to split along: the part leaves the loom as a shape, the resin is only filler.",
  more: "A laminate's weakness is the glue between its plies: hit it and they part inside, unseen. A 3D loom runs a third set of yarns up and down through the stack, binding every layer to the next, so a crack must cut fibre to grow and a blow leaves a dent, not a hidden split. The weave can be shaped as it goes, thicker here, forked there, so a fan blade leaves the loom as a preform wanting only resin. That is the LEAP engine's fan: eighteen woven carbon blades with titanium noses, half the weight of metal and tough enough to take a bird, where the generation before laid blades up ply by ply. The costs: the through-thickness yarns crimp the in-plane ones and cost stiffness; the looms are few and slow; a thick preform fills badly; and the design tools lag.",
  stats: [["Yarn directions", "3, including Z"], ["Delamination", "designed out"], ["Form", "near-net shape off the loom"]],
  uses: "Jet engine fan blades and cases, rocket nozzles, stiffened panels, I-beam and joint preforms.",
  link: "https://en.wikipedia.org/wiki/Woven_fabric"
},
{
  id: "opwairbag", cat: "fabric", name: "One-piece woven airbag",
  sub: "bag woven closed on a Jacquard loom", img: "opwairbag", extra: ["opwairbag2"],
  hook: "A curtain airbag must hold air for seconds through a rollover, and a sewn seam is a row of holes. So the bag is woven as a bag: two layers merging into one wherever an edge should be. Nothing is stitched or cut.",
  more: "A front airbag is a cushion for thirty milliseconds; a sewn coated bag does that well. A curtain bag is another job: it drops from the roof rail in a side impact and must stay up five seconds while the car rolls, and every stitch of a sewn seam is a leak. One-piece weaving is double cloth at work: a Jacquard loom weaves two layers of nylon at once and, along the lines the designer draws, interlaces them into one, so chambers and tethers are woven in and the bag leaves the loom finished, wanting only silicone and an inflator. The costs: a Jacquard head of thousands of hooks is slow and dear for a part that is scrap if a thread is wrong; the coating adds bulk where a roof rail has no room; and a woven edge is thinner than the cloth either side.",
  stats: [["Seams", "woven, not sewn"], ["Hold time", "seconds, not milliseconds"], ["Loom", "Jacquard, double cloth"]],
  uses: "Side curtain airbags, inflatable slides and rafts, high-pressure inflatable structures.",
  link: "https://en.wikipedia.org/wiki/Airbag"
},
{
  id: "ptfeglass", cat: "fabric", name: "PTFE-coated glass fabric",
  sub: "woven glass fibre in fluoropolymer", img: "ptfeglass", extra: ["ptfeglass2", "ptfeglass3"],
  hook: "A roof you can see daylight through that will not burn or rot and washes itself in the rain. Glass takes the tension, PTFE the weather, and together they roof a building with a membrane on cables, not beams.",
  more: "Fine glass cloth is dipped in PTFE dispersion and sintered, over and over, until the glass is sealed in fluoropolymer under a millimetre thick. Glass does not stretch or creep, so a membrane pulled taut over cables stays taut for decades; PTFE takes neither dirt, sun nor fire, so the roof stays white and the fire officer calm. It went over a California college in 1973, then the Hajj Terminal at Jeddah, Denver airport's peaks, the Millennium Dome and Dresden station, where the platforms sit in daylight under a tent. The costs: glass cracks where it folds, so the membrane is handled like a window; one skin insulates like a tent and drips in winter; it is dear; and it stands only on tension or air, which is how the Metrodome fell under the snow of 2010.",
  stats: [["Light transmission", "~10–15%"], ["Service life", "30 years plus"], ["Fire", "non-combustible"]],
  uses: "Stadium and terminal roofs, the Hajj Terminal and Millennium Dome, conveyor belts, release sheets.",
  link: "https://en.wikipedia.org/wiki/Tensile_structure"
},
{
  id: "etfefoil", cat: "fabric", name: "ETFE cushion",
  sub: "inflated multi-layer fluoropolymer foil", img: "etfefoil", extra: ["etfefoil2", "etfefoil3"],
  hook: "Two or three films welded to a pillow, kept blown up at a few hundred pascals. It weighs a hundredth of the glass it replaces, passes the ultraviolet plants need, and printed dots shade it on command, by pressure.",
  more: "ETFE is a fluoropolymer film a tenth of a millimetre thick, clear as glass; weld two or three into a cushion, clamp it in a frame, keep it blown up with a fan, and it is a roof. The air is the structure, so the cushions span metres on almost no frame and weigh a hundredth of the glazing they replace, which is how Eden roofed a quarry in eleven-metre hexagons and the Water Cube wrapped a stadium in three thousand bubbles. Light passes almost whole, ultraviolet included, so plants grow under it; rain washes it. The costs: the fans never stop, and when the power goes the roof sags; rain drums on it, sound goes through, it insulates poorly; hail punctures it, though a patch mends it; and it melts rather than burns, which fire engineers call a feature.",
  stats: [["Weight", "~1% of glazing"], ["Pressure", "200–800 Pa"], ["UV", "passes it, unlike glass"]],
  uses: "Eden Project, Allianz Arena, Beijing Water Cube; atria, greenhouses, stadium facades.",
  link: "https://en.wikipedia.org/wiki/ETFE"
},
{
  id: "laminateshell", cat: "fabric", name: "Three-layer laminate",
  sub: "face fabric, membrane, knit backer", img: "laminateshell", extra: ["laminateshell2", "laminateshell3"],
  hook: "The membrane is the point of the jacket and cannot be either surface: abrasion kills it outside, skin oil blocks it inside. So it is buried between a face cloth and a scrim. The sandwich is the invention.",
  more: "Gore's porous PTFE film of 1969 went into jackets in 1976, which leaked in a season: the pores that pass vapour and stop rain wet through once sweat got into them. The fix was to laminate the membrane under a nylon face, which takes the scuffing and carries a repellent so rain beads off, and over a light knit that keeps skin off it; later a thin polyurethane coat went on too. Every seam is sewn, then taped: a needle hole leaks. Rain stays out while much of the sweat gets out, as no coating managed. The costs: once the face wets out, breathing stops and the jacket is a raincoat, and the repellent wears off, and was lately a fluorocarbon; polyurethane slows vapour; three layers and tape are stiff and loud; and when they part there is no mending it.",
  stats: [["Layers", "3, bonded"], ["Membrane", "buried, never exposed"], ["Seams", "taped, not just sewn"]],
  uses: "Hardshell jackets and gloves, drysuits, surgical drapes, tent flys.",
  link: "https://en.wikipedia.org/wiki/Waterproof_fabric"
},
{
  id: "mercerised", cat: "fabric", name: "Mercerised cotton",
  sub: "caustic treatment under tension", img: "mercerised", extra: ["mercerised2"],
  hook: "Cotton is a flat twisted ribbon. Hold it taut in caustic soda and it swells to a round rod and recrystallises, so it shines, dyes deeper, strengthens and stops shrinking. Mercer found it in 1844, Lowe the tension.",
  more: "Mercer, a Lancashire calico printer, found in 1844 that caustic soda made cotton swell, strengthen and drink up dye, and sold it to nobody: the cloth came out a quarter shorter. Lowe found the missing step in 1889: hold the yarn stretched through lye and rinse, and the fibre cannot shrink, so the ribbon fills out into a smooth cylinder. A round, smooth fibre reflects light like silk, the sheen on a polo shirt and a reel of thread; the cellulose has changed its crystal form, so dye goes deeper from the same bath; and the fibre is a fifth stronger and has done its shrinking. The costs: a bath of cold caustic, to be recovered, and the cloth neutralised; some softness goes; only cotton and linen take it; and the gloss wears dull at the cuff.",
  stats: [["Strength", "+20–30%"], ["Dye uptake", "much higher"], ["Shrinkage", "largely stabilised"]],
  uses: "Sewing and embroidery thread, shirting and polo knits, quilting cotton, lace, crochet cotton.",
  link: "https://en.wikipedia.org/wiki/Mercerised_cotton"
},
{
  id: "dwrfinish", cat: "fabric", name: "Durable water repellent",
  sub: "low-surface-energy surface finish", img: "dwrfinish", extra: ["dwrfinish2", "dwrfinish3"],
  hook: "A coating nanometres thick that blocks nothing: it lowers the surface energy so water beads and rolls while the weave stays open. C8 fluorochemistry did it almost for ever, and stays in the environment as long.",
  more: "Water beads on a surface or wets it according to which is lower in energy, and a fluorocarbon chain has the lowest of all, below oil. Pad a cloth through a bath of fluorinated acrylic and cure it, and every fibre wears a layer of chains standing on end, tails out, so rain draws into drops and rolls off before it wets the yarn, while the pores stay open and the shell keeps breathing. Durable means it survives washing, more or less; heat stands the chains back up. The costs: the eight-carbon chain that worked best breaks down to PFOA, now in every river and most blood, so it went in 2015, and the six-carbon after, and the wax and silicone that replace it shed water but not oil, so sunscreen beats them; and all abrade off at the shoulders in a season.",
  stats: [["Thickness", "nanometres"], ["Old chemistry", "C8, now phased out"], ["Upkeep", "wears off, heat reactivates"]],
  uses: "Shell jackets and softshells, tents, umbrellas, upholstery stain finishes, workwear.",
  link: "https://en.wikipedia.org/wiki/Durable_water_repellent"
},
{
  id: "ringmesh", cat: "fabric", name: "Ring mesh",
  sub: "riveted or welded steel rings", img: "ringmesh", extra: ["ringmesh2", "ringmesh3"],
  hook: "Small steel rings, each riveted or welded shut, linked to four neighbours. A blade cannot part one ring without loading the rest, so a cut is a push. Fifteen centuries as armour, now a butcher's glove.",
  more: "Mail is the oldest metal cloth: iron rings, each through four others and closed, so it drapes like cloth and stops an edge like plate. The Celts had it by 300 BC and Europe wore it fifteen centuries, forty thousand rings a shirt, each riveted by hand, since a butted ring springs open under a point. A knife meets the same arithmetic: to cut one ring it must pull four, then sixteen, so the blade stops and the hand is shoved. The modern glove is stainless rings millimetres across, welded shut by machine, worn by butchers, oyster shuckers and shark divers on the hand that holds what is being cut. The costs: it stops a cut, not a blow, and a fine point can still find a ring; a shirt is ten kilos; it rusted till stainless; and meat gets into every ring.",
  stats: [["Pattern", "4-in-1 is standard"], ["Ring", "riveted or welded closed"], ["Cut", "stopped, not slowed"]],
  uses: "Butchers and oyster gloves, shark suits, abrasive blast curtains, chef aprons, reproduction mail.",
  link: "https://en.wikipedia.org/wiki/Mail_(armour)"
},
{
  id: "weldedseam", cat: "fabric", name: "Welded seam",
  sub: "ultrasonic and RF bonding", img: "weldedseam", extra: ["weldedseam2", "weldedseam3"],
  hook: "A stitch is a neat row of holes through a waterproof layer, so it has to be taped. A weld melts the two layers into each other instead: no needle, no thread, no holes, and a joint thinner than the stitched one.",
  more: "If both sides of a seam are thermoplastic nothing need go through them: heat, press, and they melt into one, three ways. A radio-frequency press heats PVC and polyurethane from inside, which makes an inflatable boat, a blood bag and a tarpaulin stitchless. An ultrasonic horn rubs the layers forty thousand times a second till friction melts them, which joins a mask or a gown at a seam a second with no thread to shed. A hot wedge or a jet of hot air runs between two sheets ahead of a roller, which closes roof membranes, drysuits and jacket seam tape. The costs: only thermoplastics weld, so cotton and wool are sewn; a weld peels where a seam holds, so the two often go together; heat stiffens the cloth beside it; and a failed weld cannot be unpicked.",
  stats: [["Holes", "none"], ["Ultrasonic", "20–40 kHz"], ["Limit", "thermoplastics only"]],
  uses: "Drysuits and waders, inflatable boats, medical disposables, taped shell jackets, filter bags, tarpaulins.",
  link: "https://en.wikipedia.org/wiki/Ultrasonic_welding"
},
{
  id: "tufted", cat: "fabric", name: "Tufting",
  sub: "yarn needled into a backing", img: "tufted", extra: ["tufted2", "tufted3"],
  hook: "Hundreds of needles punch yarn through a backing cloth and hooks hold the loops as the needles withdraw. A carpet a weaver took months over comes off in minutes, the reason fitted carpet stopped being a luxury.",
  more: "It began in Dalton, Georgia, where women tufted bedspreads by hand about 1900; a mechanic put the needle on a machine, then a row, and by the 1950s a machine four metres wide punched a thousand yarns at once through a woven backing. Each needle takes its yarn through the backing, a looper holds the loop as the needle rises, a knife cuts it for cut pile; the back is coated with latex to hold the tufts and a second backing glued on for stiffness. Nine carpets in ten are made so; a hand tufting gun does it a row at a time for rugs and art. The costs: glue holds the tuft, not weave, so a snag pulls a row; the backing parts with age; pattern was long what a needle row could do; and the sandwich is three plastics glued together, so old carpet is landfill.",
  stats: [["Share of carpet", "over 90%"], ["Speed", "minutes, not months"], ["Backing", "woven or nonwoven, added"]],
  uses: "Carpet and rugs, automotive floor mats, artificial turf, upholstery, tufted art.",
  link: "https://en.wikipedia.org/wiki/Tufting"
},
{
  id: "etextile", cat: "fabric", name: "E-textile",
  sub: "conductive yarn knitted as circuit", img: "etextile", extra: ["etextile2", "etextile3"],
  hook: "Spin a conductor into the yarn and the fabric is the sensor: a knitted stripe reads stretch, a woven grid reads touch, an embroidered line is the wire. The physics is easy; forty washes are the research problem.",
  more: "The conductor is a yarn already: silver-plated nylon, polyester spun with a little stainless steel, or fine enamelled copper wrapped round a core. Knit it in and a stripe changes resistance as the loops open, a stretch sensor round a chest; weave it as a grid and a finger changes the capacitance under it, how a cuff answered a phone in 2017; embroider it and it is a wire that bends with the arm. The LilyPad Arduino of 2007, a washable chip with sewable pads, put it in any hand with a needle. The costs: sweat corrodes silver and washing cracks every joint between yarn and chip, so most garments die at the joint; a stretched knit drifts, so the signal needs recalibrating; the battery is a lump; and a shirt with metal in it recycles as neither.",
  stats: [["Conductors", "silver, steel, copper yarn"], ["Sensing", "stretch, touch, ECG"], ["Hard part", "laundering durability"]],
  uses: "Touch-sensitive garments and bags, heated seats and clothing, ECG and respiration shirts, soft robotics.",
  link: "https://en.wikipedia.org/wiki/E-textiles"
},
{
  id: "byborre", cat: "fabric", name: "Byborre engineered knit",
  sub: "layered double-knit, specified per zone", img: "byborre", extra: ["byborre2"],
  hook: "An Amsterdam studio that treats the knit itself as the design. Two faces knitted at once, a third yarn trapped between them, so weight, stretch and texture change zone by zone in one piece, no seam, no panel to cut.",
  more: "Borre Akkersdijk started with mattress ticking, knitted on circular machines as two faces with a filler between, and saw the machine could be told, stitch by stitch, where the filler goes and how the faces tie. The cloth is thin and open here, quilted and warm there, ribbed or blistered elsewhere, in one run, so a jacket or a chair needs no panels cut and sewn. Since 2019 it sells the method, not the cloth: a designer specifies structure and yarn online, the knit is made to order, and each run carries a passport of what went into it, rarer in cloth than it sounds. The costs: a bespoke knit is dear and slow next to cloth off a roll; the yarn is mostly polyester; three layers are heavy to wear; and the designer must think in stitches, which few do.",
  stats: [["Structure", "two faces, knitted as one"], ["Specified", "per zone, not per panel"], ["Made", "to order, not from stock"]],
  uses: "Upholstery and interiors, footwear and apparel panels, acoustic and insulating textiles.",
  link: "https://byborre.com/"
},
{
  id: "dcf", cat: "fabric", name: "Dyneema composite fabric",
  sub: "UHMWPE scrim laminated between films", img: "dcf",
  hook: "Not woven at all. UHMWPE filaments laid in a thin crossed grid between polyester films, so every fibre carries load in a straight line with no crimp. It barely stretches, takes no water, and creases, not drapes.",
  more: "America³, Cubed, won the 1992 America's Cup under it, and the cloth was Cuben Fiber after the boat. Strands of Dyneema are laid flat at right angles, or along the loads, and glued between two thin polyester films. The fibre, the strongest for its weight there is, works in pure tension with no crimp to straighten, so the cloth barely gives, and the films make it waterproof. DSM bought the maker in 2015 and renamed it; hikers found it next, and a tarp of it weighs less than its guy lines. The costs: it costs more than almost any cloth; a crease cracks the film, so it is rolled, not folded; a stitch is a hole, so seams are taped; it punctures and abrades before it tears; sun gets at the polyethylene in years; and it is translucent, which a tent minds.",
  stats: [["Construction", "laid and laminated, no weave"], ["Stretch", "very low, no crimp"], ["Water", "the films stop it entirely"]],
  uses: "Racing sails, ultralight packs and shelters, kites, protective covers.",
  link: "https://en.wikipedia.org/wiki/Ultra-high-molecular-weight_polyethylene"
},
{
  id: "seersucker", cat: "fabric", name: "Seersucker",
  sub: "slack-tension stripe weave", img: "seersucker", extra: ["seersucker2", "seersucker3"],
  hook: "Two warps at two tensions on one loom, so off it the slack stripes bunch into puckers for good. The ridges hold it off the skin so air moves beneath, and it never needs an iron: the wrinkles are the construction.",
  more: "The name is Persian, shir o shakar, milk and sugar, for the smooth and rough stripes, and it came west by India. It is woven from two beams, one tight, one slack, in bands, so the slack threads crinkle the moment the tension comes off; nothing is pressed in, nothing washes out. The crinkle is the point in heat: it touches skin on the ridges only and air moves in the channels, and a suit is wrung out, dried and worn unironed, which is why a New Orleans tailor cut it into suits in 1909 and the South has worn it since. The costs: it looks rumpled because it is; it is light, wears through and shows a shirt; the stripes shrink differently and a cheap cut twists; and much sold as seersucker is plain cloth puckered with printed caustic, which washes flat.",
  stats: [["Made by", "two warp tensions at once"], ["Pucker", "permanent, woven in"], ["Why", "it stands off the skin"]],
  uses: "Summer suits and shirting, children's clothes, bedding, curtains.",
  link: "https://en.wikipedia.org/wiki/Seersucker",
  tags: ["duvet"]
},
{
  id: "flyknit", cat: "fabric", name: "Engineered knit upper",
  sub: "one piece, structure changed mid-knit", img: "flyknit", extra: ["flyknit2", "flyknit3"],
  hook: "An upper knitted as one piece, the stitch changing as it goes: open where the foot needs air, tight where it needs hold, fused yarn along the load lines. No panels cut and stitched, and most of the waste with them.",
  more: "A running shoe upper was a dozen pieces of mesh, leather and foam, cut and stitched, a third of it binned. Nike spent four years teaching a flat machine to knit it in one piece and showed it at the 2012 Olympics: polyester knitted as a sock, switched row by row, open where the foot sweats, dense at the heel, and a thermoplastic-skinned yarn along the lace line, melted afterwards so it stiffens. The sock is lasted and glued to a sole; nothing inside rubs. Adidas had Primeknit out the same year, and lawyers. The costs: a knit is a sock, so it stretches where leather holds and wears out at the toe; it drinks water; every size is its own programme, and knitting is slower than cutting; and the fused zones are the stiff part of a shoe sold as soft.",
  stats: [["Pieces", "one, knitted to shape"], ["Zones", "structure changes mid-knit"], ["Waste", "far below cut-and-sew"]],
  uses: "Running and lifestyle shoe uppers, seamless garments, orthopaedic braces.",
  link: "https://en.wikipedia.org/wiki/Knitted_fabric"
},
{
  id: "surgmesh", cat: "fabric", name: "Surgical mesh",
  sub: "knitted polypropylene, pore size tuned", img: "surgmesh", extra: ["surgmesh2", "surgmesh3"],
  hook: "A warp-knitted polypropylene net whose specification is its holes. Large pores let tissue grow through and leave it supple; small ones give a stiff patch the body walls off. Knitted, so a cut edge cannot run.",
  more: "Usher sewed the first polypropylene net into a hernia in 1958; since the 1980s it has gone into most of the twenty million hernias a year. The mesh is scaffold, not wall: cells climb it and lay collagen through the holes, and in months the patch is scar round plastic. The holes decide the scar: pores over a millimetre grow a loose web that moves with the belly; smaller ones fill with a plate the body walls off, stiff and infection-prone, as bacteria fit where white cells do not. So the trend is lighter and more open, a hundred grams a square metre down to thirty. The costs: the scar shrinks the patch by a fifth; one in ten has lasting pain; it sticks to bowel without a barrier; and the same net for prolapse eroded into enough women to be banned.",
  stats: [["Pore size", "the design variable"], ["Knit", "cut edges do not unravel"], ["Trend", "lighter, larger-pore"]],
  uses: "Hernia repair, pelvic floor reconstruction, chest wall and soft tissue support.",
  link: "https://en.wikipedia.org/wiki/Surgical_mesh"
},
{
  id: "pinatex", cat: "fabric", name: "Piñatex",
  sub: "pineapple-leaf fibre nonwoven", img: "pinatex", extra: ["pinatex2", "pinatex3"],
  hook: "Leaves left after the pineapple harvest, stripped to fibre, dried and needle-punched into a web, then coated till it acts like light leather. Nothing is planted: the fibre is a by-product of a crop grown for fruit.",
  more: "Carmen Hijosa, a leather consultant who had seen what tanneries do to rivers, started with the leaf the Philippines burns by the million tonne each harvest. Farmers run leaves through a decorticator, wash and dry the fibre and sell it; the pulp goes back to the field. The fibre, with a little PLA, is needle-punched to a felt, coated with polyurethane and printed, so the sheet cuts, stitches and wears like soft leather at a fraction of the weight. Sixteen plants make a square metre, and farmers are paid for waste. The costs: the coating is plastic, so it is not the compostable thing it sounds; it is thinner than hide, scuffs sooner, cut edges drink water; it has no stretch, so a shoe will not break in; and it is felt, not skin, as the hand knows.",
  stats: [["Fibre", "pineapple leaf, a by-product"], ["Web", "needle-punched nonwoven"], ["Finish", "resin coated"]],
  uses: "Shoes and bags, upholstery, watch straps, accessories.",
  link: "https://en.wikipedia.org/wiki/Pi%C3%B1atex"
},
{
  id: "waffle", cat: "fabric", name: "Waffle weave",
  sub: "honeycomb float structure", img: "waffle", extra: ["waffle2"],
  hook: "Long floats on both faces step down into a grid, so the cloth is all ridges and hollows. The hollows hold still air, which insulates, and the ridges give a towel far more surface and grip on water than a flat weave.",
  more: "It is a dobby weave: the floats on the face lengthen toward the middle of each square, those on the back do the opposite, and off the loom the long floats pucker and the short ones sink, so each square becomes a cell with raised walls and a hollow floor. A yard of it has nearly twice the surface of a flat yard and a layer of still air on both faces. As a towel it is thin, dries fast and wipes rather than mops, which is why a Japanese bath towel and a cook's cloth are waffle; the same cells knitted are the thermal vest, where the air does the work and the cotton only holds it. The costs: a float is a snag waiting for a ring; the cells take up cloth, so it shrinks hard in the first wash; crumbs live in the cells; and it looks threadbare before it is.",
  stats: [["Structure", "floats stepping into cells"], ["Insulates", "by trapping air"], ["Absorbs", "more than a flat weave"]],
  uses: "Towels and bathrobes, thermal underwear, blankets, kitchen cloths.",
  link: "https://en.wikipedia.org/wiki/Waffle_fabric",
  tags: ["warmth"]
},
{
  id: "twill", cat: "fabric", name: "Broken twill",
  sub: "twill with the diagonal reversed", img: "twill", extra: ["twill2", "twill3"],
  hook: "A twill's diagonal is floats all stepping the same way, and the same floats spiral a jeans leg in the wash. Reverse the step every few ends and the diagonal breaks into an invisible zigzag, and the twist is gone.",
  more: "In plain weave the weft goes over one warp, under the next; in twill over two or three and under one, each row shifted one, so the floats line up as the diagonal of denim, gabardine, chino and serge. Fewer crossings make a softer, heavier cloth that drapes and hides dirt, hence two centuries of twill workwear. The diagonal has a vice: the floats all pull one way, and a trouser leg creeps round the shin as the cloth relaxes in the wash. Wrangler's answer in 1964: reverse the twill every two ends, so the diagonals cancel below what the eye sees; herringbone does it in visible bands. The costs: a float snags where plain weave does not; a broken twill loses the clean diagonal; the cloth skews and wants straightening; and herringbone must match at seams.",
  stats: [["Twill", "diagonal float, usually 3/1"], ["Broken", "step reverses across the warp"], ["Fixes", "leg twist after washing"]],
  uses: "Jeans and workwear, shirting, upholstery, uniform cloth.",
  link: "https://en.wikipedia.org/wiki/Twill"
},
{
  id: "tweed", cat: "fabric", name: "Harris Tweed",
  sub: "handwoven in the Outer Hebrides, by statute", img: "tweed", extra: ["tweed2", "tweed3"],
  hook: "The one cloth with its own Act of Parliament: Harris Tweed is virgin wool dyed and spun in the Outer Hebrides and handwoven at the weaver's home. Dyed before spinning, so a plain brown is eight colours under a lens.",
  more: "Crofters wove it for centuries; Lady Dunmore sold it to London in the 1840s, the Orb mark of 1910 kept imitations out, and the 1993 Act made the rules law. The wool is dyed as fleece, so colours blend before carding and one yarn carries a dozen shades; it is woollen-spun at three island mills and sent out to some hundred and fifty weavers, who pedal it through looms in sheds by their houses, no motor, and send it back to be finished. It is thick, warm, near windproof and holds no crease, the woollen opposite of worsted, and a jacket outlives you. The costs: it is heavy and scratchy until worn in; it is dear, since an island wage and a pedalled loom are in every metre; moths love it; and the trade rests on three mills that have nearly closed before.",
  stats: [["Dyed", "in the wool, before spinning"], ["Woven", "at home, on a treadle loom"], ["Protected", "by the Harris Tweed Act 1993"]],
  uses: "Jackets and coats, caps, upholstery, bags and shoes.",
  link: "https://en.wikipedia.org/wiki/Harris_Tweed",
  tags: ["warmth"]
},
{
  id: "satin", cat: "fabric", name: "Satin weave",
  sub: "long floats, as few crossings as possible", img: "satin", extra: ["satin2", "satin3"],
  hook: "The weave that avoids crossings: each warp floats over four wefts and tucks under one, no two tucks touching. The face is unbroken float, reflecting light instead of scattering it: the shine is geometry, not fibre.",
  more: "Plain weave crosses at every thread, twill every few, satin as seldom as it can: in five-end satin each warp floats over four wefts and dips under one, and the dip moves along each row so no two tucks touch. The face is then all warp, flat and parallel, and if the warp is a smooth filament light comes off it as a sheet, which is the lustre; the back, all tucks, is dull. Weft-faced in cotton it is sateen, the smooth bedsheet. The floats also mean little friction between threads, so satin pours over a shape, slides as a lining, wraps a pointe shoe. The costs: nothing pins the floats, so a ring or a cat pulls a thread a yard long; seams slip; water spots it, every needle hole stays; and cheap polyester satin crackles and shines like a bin bag.",
  stats: [["Float", "over four or more, under one"], ["Shine", "from the weave, not the fibre"], ["Weakness", "snags: nothing pins the floats"]],
  uses: "Linings and eveningwear, ribbon, bedding, pointe shoes, academic hoods.",
  link: "https://en.wikipedia.org/wiki/Satin",
  tags: ["duvet"]
},
{
  id: "carbonfab", cat: "fabric", name: "Woven carbon reinforcement",
  sub: "3K tow, plain or 2x2 twill", img: "carbonfab", extra: ["carbonfab2", "carbonfab3"],
  hook: "Carbon tow is a flat ribbon of filaments; weaving it is a chosen loss: every crossing bends fibre, and bent fibre carries less. The weave buys handling: cloth that drapes over a mould and holds still under resin.",
  more: "The yarn is tow, 3,000 filaments of seven microns, woven flat and untwisted, since twist bends fibres before the loom does. Plain weave crosses at every tow and lies flattest; 2x2 twill crosses half as often, bends the fibres less and follows a double curve where plain weave wrinkles, which is why a bike frame wears the twill diagonal; harness satin crosses least and flies. The weave is only a way of getting straight fibres to the mould in one piece; once the resin sets, the fibres do the work. The costs: every crimp costs stiffness and strength next to straight tows, a tenth or more; the cloth frays at the scissors and shifts under the hand; resin pools at every crossing; the dust conducts and itches; and a square metre costs ten of glass cloth.",
  stats: [["3K tow", "3000 filaments laid flat"], ["Areal weight", "around 200 g/m² for 3K twill"], ["Crimp", "costs stiffness, buys drape"]],
  uses: "Wet lay-up and prepreg laminates, bike frames, car panels, repairs, cosmetic twill skins.",
  link: "https://en.wikipedia.org/wiki/Carbon_fibers"
},
{
  id: "fibc", cat: "fabric", name: "Bulk bag fabric",
  sub: "flat polypropylene tape, woven both ways", img: "fibc", extra: ["fibc2", "fibc3"],
  hook: "A one-tonne bag is not spun yarn: polypropylene film slit into tapes and stretched sixfold, which lines the molecules up along the tape and strengthens it many times, then woven into cloth that barely gives.",
  more: "Polypropylene film is slit into tapes and drawn hot to six times their length, lining the chains up; a circular loom crosses tape with tape into a tube of cloth that stretches a few per cent at two hundred grams a square metre. Flat tape packs edge to edge, so the weave holds sand without a liner, and a bag of it with four loops at the corners carries a tonne, which is why since the 1960s grain moves as one bag on a forklift, not fifty on a back. The costs: ultraviolet ends it, a stabiliser buys a season outdoors before the tape goes chalky and tears, which is why a five-to-one bag is used once and thrown away; damp gets through; powder running out can charge the bag enough to spark, hence four electrostatic classes; and the empties pile up.",
  stats: [["Tape", "slit film, drawn to orient it"], ["Safety factor", "5:1 single trip, 6:1 reusable"], ["Killed by", "UV: months, not years"]],
  uses: "FIBC big bags for sand, fertiliser and grain, woven sacks, ground sheets, tarpaulins.",
  link: "https://en.wikipedia.org/wiki/Flexible_intermediate_bulk_container"
},
{
  id: "machinelace", cat: "fabric", name: "Machine lace",
  sub: "threads twisted round each other, not interlaced", img: "machinelace", extra: ["machinelace2", "machinelace3"],
  hook: "Lace is not a weave. Each thread is twisted round its neighbours by a brass bobbin swung through the warp, so the net does not ravel when cut, and lace can be a shaped piece. The machines left are a century old.",
  more: "Heathcoat made bobbin-lace net by machine in 1808: thousands of flat brass bobbins, each a thin disc of thread, swing through the warp and back, the warp shifting a space between, and each thread twists round a warp and moves on: the net. Leavers put the warp in a comb in 1813, and a Jacquard head on top in the 1830s put pattern anywhere in the net: Nottingham lace, and Calais lace once machines were smuggled over. A Leavers machine is ten metres and ten tonnes, makes a few metres an hour; the last was built in the 1950s. The costs: a tulliste takes years to train and weeks to set up; the thread must be fine and even or it breaks mid-swing; the world's cheap lace is knitted on raschels, which imitate; and a dead Leavers machine is not replaced.",
  stats: [["Threads", "twisted, never interlaced"], ["Cut edge", "does not ravel"], ["Bobbinet ground", "patented 1808, still the base"]],
  uses: "Lace trim and curtains, bridal and lingerie fabric, hosiery panels, millinery veiling.",
  link: "https://en.wikipedia.org/wiki/Bobbinet"
},
{
  id: "firehose", cat: "fabric", name: "Fire hose jacket",
  sub: "circular-woven polyester over a rubber liner", img: "firehose", extra: ["firehose2", "firehose3"],
  hook: "Two materials, a job each: a thin rubber liner holds the water and no load, a woven seamless jacket takes the pressure. Woven, not moulded, it lies flat empty, which is why a hundred metres fits on a truck.",
  more: "Until the 1960s a hose was unlined linen that wept until its fibres swelled shut and rotted if rolled away damp, hence the tower by every old fire station. The modern hose is polyester woven as a seamless tube on a circular loom, with a rubber liner bonded inside; the liner is watertight and would burst at a few bar, the jacket strong and leaky, and together they hold twenty bar and fold. Flat, it is a strip a finger thick; charged, it is round and stiff as a log. A second jacket or a rubber coat is what an attack line gets for the kerbs. The costs: a kink halves the flow; charged, it weighs a kilo a metre and fights you; a burst at twenty bar is a whip; and almost no hose dies of pressure, it dies of concrete, so it is condemned for scuffs.",
  stats: [["Jacket", "circular-woven, no seam"], ["Burst", "around 3x working pressure"], ["Fails by", "abrasion, not pressure"]],
  uses: "Fire service attack and supply lines, industrial washdown, irrigation, layflat transfer hose.",
  link: "https://en.wikipedia.org/wiki/Fire_hose"
},
{
  id: "wiltoncarpet", cat: "fabric", name: "Woven carpet",
  sub: "pile tied in by the weave itself", img: "wiltoncarpet", extra: ["wiltoncarpet2", "wiltoncarpet3"],
  hook: "Tufted carpet is needled into a backing and glued; woven carpet makes both in one pass, each tuft locked under a warp. A Wilton raises the pile over wires in a few colours; an Axminster puts any colour anywhere.",
  more: "A Wilton loom lifts the pile warp over a steel wire across the cloth, weaves the ground and draws the wire out, leaving a row of loops that a blade on the wire cuts to velvet or leaves as Brussels loop. The colours ride in the back as frames of yarn, five at most, lifted to the face where wanted and buried where not, so a five-frame Wilton is heavy with unseen yarn. Axminster is the other way: the Spool loom of 1876 and the Gripper of the 1890s pick one tuft of the right colour, fold it under a weft and bind it in, so any colour goes anywhere. The costs: a woven carpet comes off at metres an hour against a tufter's hundreds; it is dear; a Wilton's buried yarn is paid for and never trodden; and a woven width is a loom width, so big rooms get seams.",
  stats: [["Pile", "locked by the weave, not glued"], ["Wilton", "loops raised over wires, then cut"], ["Axminster", "any colour, tuft by tuft"]],
  uses: "Hotel, theatre and ship carpet, stair runners, patterned domestic carpet.",
  link: "https://en.wikipedia.org/wiki/Carpet"
},
{
  id: "fulledwool", cat: "fabric", name: "Fulled wool",
  sub: "cloth shrunk on purpose until it felts", img: "fulledwool", extra: ["fulledwool2", "fulledwool3"],
  hook: "Weave it loose, then beat it in hot soapy water till the scales lock and the cloth shrinks by a third. The weave vanishes into a dense mat that sheds rain, holds air and can be cut and left raw: nothing unravels.",
  more: "Wool fibres are scaled like roof tiles and creep one way worked wet and warm, so a loose woollen cloth pounded in soapy water for hours draws in a quarter to a third each way, until the threads vanish into felt with a weave buried in it. It was done by foot in a trough, then by water hammers in fulling mills, medieval Europe's first factories. The cloth is thick, windproof and shower-proof with nothing added, holds the air a coat needs, and can be cut and left, since no thread is loose to fray. Loden, melton, baize and boiled wool are the same trick at different severities. The costs: it is warm because it is heavy, no other way; it dries slowly once soaked; moths find it; and once fulled it cannot be let out, the seam allowance having felted too.",
  stats: [["Shrinks", "a quarter to a third in the fulling"], ["Cut edge", "does not fray, so no hem"], ["Weatherproofing", "mechanical, no coating involved"]],
  uses: "Loden coats and capes, melton jackets and uniform cloth, billiard cloth, blankets, boiled-wool slippers.",
  link: "https://en.wikipedia.org/wiki/Fulling",
  tags: ["warmth"]
},
{
  id: "waxcotton", cat: "fabric", name: "Waxed cotton",
  sub: "tight cotton loaded with paraffin", img: "waxcotton", extra: ["waxcotton2", "waxcotton3"],
  hook: "Dense cotton with wax in every gap between the yarns, so water cannot wick through but the cloth is no plastic bag. A crease closes under a warm thumb, and the coat is re-waxed every year or two, not replaced.",
  more: "Sailors oiled canvas with linseed, which worked till it yellowed and cracked; Scottish mills swapped it for paraffin wax in the 1930s, and sailcloth went into coats. The base is tight cotton, the wax driven in hot so it fills the pores between yarns rather than lying on top; water cannot pass the waxed gaps, but the cloth still breathes and bends. Wear scratches the wax and a fold cracks it, and the cure is heat: a thumb over the crease, or a tin of dressing worked in every year or two, hence forty-year-old waxed jackets, and no forty-year-old nylon. The costs: it weighs a kilo more than it looks; it stiffens in cold, goes tacky in heat; it waxes car seats and smells of paraffin; and it is never washed, only wiped: soap takes the wax with the dirt.",
  stats: [["Wax", "fills the weave, it is not a film"], ["Maintenance", "re-waxed yearly, not replaced"], ["Repairs", "by rubbing the crease warm"]],
  uses: "Field and motorcycle jackets, bags and tool rolls, shooting coats, historically sails and covers.",
  link: "https://en.wikipedia.org/wiki/Waxed_cotton"
},
{
  id: "crepe", cat: "fabric", name: "Crêpe",
  sub: "yarn twisted until the cloth crinkles", img: "crepe", extra: ["crepe2", "crepe3"],
  hook: "Crêpe's pucker is stored energy: yarn with several times the twist it needs, right and left by turns; wet the cloth and every yarn tries to untwist at once, shoving it into a crinkle that cancels across the piece.",
  more: "A plain yarn has a few hundred turns a metre, a crêpe yarn thousands, so many it kinks if let go, and is woven stiffened. The yarns alternate, two twisted one way and two the other, and the cloth washed: the size goes, the yarns writhe, and since neighbours writhe opposite ways the cloth puckers evenly, into a grain no iron removes. That grain scatters light, so crêpe is matte; it hides creases, being creased already; it gives a little every way without elastic; and hangs like water. Crêpe de Chine twists only the weft, georgette both and sheer, and Victorian mourning crape made Courtaulds rich. The costs: it shrinks again whenever wet; it shifts under the scissors; it wears shiny where it rubs; a snag pulls a loop; and polyester crêpe adds static.",
  stats: [["Twist", "thousands of turns per metre"], ["Balance", "S-twist and Z-twist yarns alternated"], ["Gives", "stretch and a matte face, with no elastane"]],
  uses: "Dresses and blouses, georgette and chiffon, mourning crêpe, crêpe bandage.",
  link: "https://en.wikipedia.org/wiki/Cr%C3%AApe_(textile)"
},
{
  id: "knitmesh", cat: "fabric", name: "Knitted wire mesh",
  sub: "one continuous wire, looped not woven", img: "knitmesh",
  hook: "Knit a wire instead of weaving it and the loops can move: the mesh stretches, springs back and swallows vibration where a weave tears. One continuous wire, knitted loose and pressed to the density the job wants.",
  more: "A circular knitting machine takes a quarter-millimetre stainless wire as readily as yarn, and off it comes a tube of loops, nearly all air. Flatten the tube, crimp it, fold it into a pad: a demister. Gas threads through, the droplets it carries cannot turn the corners, hit wire, run together and drain back, a trick sold to refineries in 1947. Pressed harder, the loops are a spring in every direction: the ring that holds a catalytic converter's brick through heat and shock, the exhaust hanger, the gasket on a radio room, the filter cooling an airbag's gas. The costs: a demister fouls and is washed or binned; push the gas too fast and the drops tear off and go up; thin wire corrodes where plate would not; and a pad is only as even as its press.",
  stats: [["Made from", "one continuous wire, knitted"], ["Loops", "stretch and spring back"], ["Density", "set by how hard the pad is pressed"]],
  uses: "Demister and coalescer pads, exhaust and vibration mounts, EMI gaskets, filters and flame arrestors, airbag inflator filters.",
  link: "https://en.wikipedia.org/wiki/Mesh"
},
{
  id: "barkcloth", cat: "fabric", name: "Barkcloth (tapa)",
  sub: "inner bark beaten into a sheet", img: "barkcloth", extra: ["barkcloth2", "barkcloth3"],
  hook: "No spinning and no loom: inner bark of paper mulberry, soaked and beaten with a grooved mallet until the fibres spread and felt, widening with every blow. Strips beaten together wet make a sheet the size of a room.",
  more: "The bast comes off the sapling in a ribbon a few centimetres wide; soaked and laid on a wooden anvil, it is beaten with a four-sided mallet, each face grooved finer, until the ribbon is a sheet a hand wide and thin enough to read through. Edges beaten together wet fuse, so Tongan ngatu runs to fifty metres, made by a line of women to a rhythm the village can hear. It is stamped and painted with earth and soot, the beating mark in it like a watermark. Dry, it is stiff as paper and cracks on a fold; damp, it is soft enough to wear. The costs: it does not wash; it tears along the beating lines; rain finishes a cape; a sheet is days of beating; and where cotton arrived it became ceremony, not clothing, inside a generation.",
  stats: [["Made without", "yarn, loom or needle"], ["Joined", "by beating edges together wet"], ["Dry", "stiff as paper; soft again when damp"]],
  uses: "Fijian masi, Tongan ngatu and Hawaiian kapa; ceremonial dress, gifts, wall hangings; Ugandan bark cloth from fig.",
  link: "https://en.wikipedia.org/wiki/Barkcloth"
},
{
  id: "flock", cat: "fabric", name: "Flocked fabric",
  sub: "short fibres stood on end by a field", img: "flock", extra: ["flock2", "flock3"],
  hook: "Chopped fibre a millimetre long drops through a high-voltage field, which stands each piece on end and fires it into wet glue. What sets is velvet with no weaving in it: a forest of fibre ends, soft, matte, quiet.",
  more: "The fibre is nylon or rayon cut to 0.3 to 3 millimetres and treated to take a charge; it falls through tens of kilovolts onto an earthed, glued surface, lines up with the field and lands point first, a hundred million to the square metre. The glue cures with the fibres upright, which is the whole trick: a pile at the cost of a coating. It goes on anything the glue sticks to, and printed through a stencil of glue so only the pattern is velvet, which is how flock wallpaper has been made since the 1600s. Car makers line glove boxes and window channels with it against rattle. The costs: it wears by shedding and bald patches do not grow back; dust sits in it and it cannot be brushed hard; solvents lift the glue; and it is cheap enough to read as cheap.",
  stats: [["Fibre", "0.3 to 3 mm, stood up by the field"], ["Density", "around 100 million fibres per square metre"], ["Wears by", "shedding fibre, not thinning"]],
  uses: "Flock wallpaper and T-shirt prints, jewellery boxes and packaging inserts, glove boxes and window channels, model railway grass.",
  link: "https://en.wikipedia.org/wiki/Flocking_(texture)"
},
{
  id: "aluminised", cat: "fabric", name: "Aluminised fabric",
  sub: "glass or aramid under a vapour-deposited mirror", img: "aluminised", extra: ["aluminised2", "aluminised3"],
  hook: "Near a big fire most heat arrives as radiation, and radiation can be turned back rather than soaked up, so a proximity suit is shiny, not thick. Aluminium film on glass or aramid cloth sends most of it away again.",
  more: "Aluminium is evaporated in a vacuum onto polyester film, and the film laminated to a cloth that will not burn: glass or aramid. The mirror turns back around ninety percent of the radiant heat, so the cloth beneath never receives it, and the wearer can stand at a burning aircraft or tap a ladle where plain turnout gear would blister in seconds. A vapour barrier and a felt liner under it take what still comes through. The costs: a mirror has to stay a mirror, and soot, scratches and worn elbows turn reflection into absorption, so suits are wiped, inspected and retired early; the film does not breathe, so the wearer cooks slowly from inside; it is stiff; and it is no help against conducted heat, which is why nobody picks anything up in one.",
  stats: [["Reflects", "around 90 percent of radiant heat"], ["Works only", "while clean and unscratched"], ["No help against", "conducted heat; the liner does that"]],
  uses: "Aircraft rescue and furnace entry suits, foundry aprons, gloves and spats, fire shelters, pipe and engine heat shields.",
  link: "https://en.wikipedia.org/wiki/Fire_proximity_suit"
},
{
  id: "ikat", cat: "fabric", name: "Ikat",
  sub: "the pattern dyed into the yarn before weaving", img: "ikat", extra: ["ikat2", "ikat3"],
  hook: "In most patterned cloth the design goes on after the fabric. In ikat it comes first: yarn bound wherever dye must not reach, dyed, re-bound, dyed again, then put on the loom, where the picture builds pick by pick.",
  more: "Bundles of stretched warp are wrapped with palm leaf or plastic strip where the pattern wants undyed yarn; the bundle goes in the vat, the wraps come off, new wraps go on for the next colour, and only when the yarn carries the whole design is it wound onto the loom. Dye creeps under each wrap and threads shift on the beam, so every motif feathers at the edge, and that blur is how ikat is known across a room. Warp ikat is the common kind, Sumba to Uzbekistan; double ikat, both dyed to meet, is the patola of Gujarat, months of binding before the first pick. The costs: the pattern is fixed before weaving; every colour is another round of binding; a tying mistake is in every repeat; and the blur that makes it is a defect to anyone wanting a sharp line.",
  stats: [["Dyed", "as yarn, bound where the dye must not reach"], ["Signature", "feathered edges, never sharp"], ["Double ikat", "warp and weft dyed to meet each other"]],
  uses: "Patola and geringsing, Sumba hinggi, Uzbek adras and atlas, Japanese kasuri, Odisha bandha, furnishing fabric.",
  link: "https://en.wikipedia.org/wiki/Ikat"
},
{
  id: "pvctarp", cat: "fabric", name: "Coated tarpaulin",
  sub: "open polyester scrim under PVC", img: "pvctarp", extra: ["pvctarp2", "pvctarp3"],
  hook: "A truck curtain is two materials with a job each. An open polyester scrim takes the load; PVC over both faces and through the gaps takes rain, sun and scuffing. Thermoplastic, so the panels are welded, never sewn.",
  more: "The scrim is polyester woven at a few threads to the centimetre, so the two coats of plasticised PVC meet through the holes and lock to each other, not to the yarn. The coating carries the colour and a lacquer against dirt; the scrim carries everything else, and the sheet is sold by weight, 500 to 900 grams the square metre. Seams are hot-air or high-frequency welded, two coatings melted into one, so there is no stitch hole for water and the seam is as strong as the sheet. The costs: the plasticiser migrates out over the years and the coating stiffens, chalks and cracks, after which the scrim wicks water along every yarn and the sheet is done; it is heavy; it burns to hydrogen chloride; and a tear is patched, since the scrim holds no stitch.",
  stats: [["Scrim", "takes the load; coating takes the weather"], ["Weight", "about 500 to 900 g per square metre for curtains"], ["Joined", "by hot-air or high-frequency welding"]],
  uses: "Curtainsiders and lorry sheets, marquees and tents, tensile roofs, boat and machine covers, inflatables, banners.",
  link: "https://en.wikipedia.org/wiki/Tarpaulin"
},
{
  id: "pleat", cat: "fabric", name: "Permanent pleating",
  sub: "setting the cloth instead of pressing it", img: "pleat", extra: ["pleat2", "pleat3"],
  hook: "A pressed crease is cloth squashed; the first shower takes it out. A permanent one is a change in the fibre: wool with its sulphur bonds broken and re-formed folded, or polyester heated till it flows, cooled folded.",
  more: "Wool keratin is held in shape by sulphur bridges between its chains; the Siroset process of 1957 sprays on a reducing agent that breaks them, presses the pleat and lets them re-form in the fold under steam, so the fold is where the fibre now returns after every wetting. Polyester needs no chemistry: above its glass transition the chains slip, fold it hot, cool it, and the fold is locked until something hotter arrives. A Fortuny Delphos of silk was re-pleated after each wearing; a Miyake of polyester comes out of the wash as it went in. The costs: a heat-set pleat is undone by the iron meant to help it; a Siroset crease lasts as long as the fibre, and the knees go first; cotton and linen hold neither way; and a set fold cannot be let out.",
  stats: [["Wool", "disulphide bonds broken, re-formed folded"], ["Polyester", "heat-set above its glass transition"], ["Undone by", "more heat than it was set with"]],
  uses: "Pleated skirts and trousers, uniform creases, kilts, heat-pleated polyester garments and lampshades.",
  link: "https://en.wikipedia.org/wiki/Wrinkle-resistant_fabric"
},
{
  id: "chambray", cat: "fabric", name: "Chambray",
  sub: "plain weave, coloured warp and white weft", img: "chambray", extra: ["chambray2", "chambray3"],
  hook: "Every second yarn is white, and that is the whole trick. A dyed warp crosses an undyed weft in plain weave: faded blue from arm's length, a chequerboard under a loupe. Looks like denim, behaves nothing like it.",
  more: "The name is from Cambrai, where fine linen was woven; the cloth now is a light cotton, about eighty ends by seventy-six picks to the inch, one over one, warp dyed and weft left white. The white is on the face as much as the colour, so the blue is half-faded on day one and fades evenly after, there being nowhere for the dye to hide; denim, a heavy twill with the blue warp riding the face, fades where it creases, which is why a denim shirt tells a story and a chambray one does not. It is cool, soft and alike on both sides, so a collar can be turned. The costs: it is thin and goes at collar and cuffs in a few years; it creases like any plain cotton; dark shades crock until washed; and it has none of the armour that makes denim a work cloth.",
  stats: [["Weave", "plain, one over one"], ["Count", "about 80 by 76 per inch"], ["Mistaken for", "denim, which is a twill"]],
  uses: "Work shirts and summer shirting, dresses, heavier grades for uniforms and chore coats.",
  link: "https://en.wikipedia.org/wiki/Cambric",
  src: ["Textile School, chambray", "https://www.textileschool.com/452/chambray-fabric-the-plain-weave-denim-look-alike/"]
},
{
  id: "oxfordcloth", cat: "fabric", name: "Oxford cloth",
  sub: "two-over-one modified basket weave", img: "oxfordcloth", extra: ["oxfordcloth2"],
  hook: "Two warp ends lift together against one thick weft: a basket weave coarse enough to see, soft enough to wear off the loom. The doubled ends give air and forgive a bad iron; they also slip and fray.",
  more: "A Scottish mill of the 1800s named four shirtings after universities; only Oxford survived. The weave takes two fine warp ends as one and crosses them with a single soft weft of twice the weight, so the face is a grid of baskets, and a dyed warp on a white weft gives the chalky mix of chambray, one step heavier. The floats are short but doubled, so the cloth is loose, breathes and comes off the loom soft without finishing; it also hides a crease, which is the whole case for the button-down. Pinpoint is the same weave in finer yarn, royal oxford finer still. The costs: paired ends slip, so oxford shrinks more than a plain weave; the thick weft pills; cuff edge and collar fold fray where they rub; and it is too heavy and too casual for a suit.",
  stats: [["Weave", "2 by 1 modified basket"], ["Gains", "softness and air, no finishing needed"], ["Costs", "yarn slippage and shrinkage"]],
  uses: "Button-down shirts, pyjamas, light jackets; pinpoint and royal oxford in formal shirting.",
  link: "https://en.wikipedia.org/wiki/Oxford_(cloth)",
  src: ["Textile School, weave patterns", "https://www.textileschool.com/270/major-fabric-weaving-patterns/"]
},
{
  id: "gingham", cat: "fabric", name: "Gingham",
  sub: "yarn-dyed check in plain weave", img: "gingham", extra: ["gingham2", "gingham3"],
  hook: "The check is not printed on the cloth, it is the cloth. Dyed and white yarns alternate in blocks along warp and weft: colour over colour makes the solid squares, colour over white the pale ones. No wrong side.",
  more: "The word came from Malay and meant a stripe; the check is a Manchester idea of the 1700s, striping warp and weft alike to get three tones from two yarns. It is a plain weave, usually cotton, the warp wound in bands of a dyed yarn and a white one, the weft thrown in the same bands, so the pattern is as deep as the cloth and the back is the front. That is why it survives school and kitchen: no face to wear off, it boils, and it hangs square because the two systems balance. Vichy is the French name. The costs: every stripe must be counted into the warp and the weft beaten to the same pitch, or the squares go oblong; uneven shrinkage spoils the square too; the plain weave creases; and it is forever a summer frock and a tablecloth.",
  stats: [["Colour", "in the yarn, not on the surface"], ["Sides", "two, identical"], ["Costs", "a warp and weft counted block by block"]],
  uses: "Shirting and summer dresses, school uniforms, tablecloths and tea towels, picnic cloth.",
  link: "https://en.wikipedia.org/wiki/Gingham",
  src: ["Textile School, fabric types", "https://www.textileschool.com/171/textile-fabric-types-comprehensive-list-of-textile-fabrics/"]
},

/* ---------- ACTIVE & EXOTIC ---------- */
{
  id: "mrf", cat: "exotic", name: "Magnetorheological fluid",
  sub: "iron particles in carrier oil", img: "mrf", extra: ["mrf2", "mrf3"],
  hook: "Oil, until a coil is energised: the iron particles chain up along the field lines and the liquid stiffens to a paste in milliseconds. Current off, and it is oil again. A damper set by a current, not a valve.",
  more: "The fluid is carbonyl iron, spheres a few micrometres across, a third by volume in oil. With no field it flows like heavy oil; in a field each sphere is a small magnet, they link pole to pole into columns across the gap, and a shear must break the columns before the fluid moves: a yield stress of fifty to a hundred kilopascals, rising with the current and gone when it stops. Response is a few milliseconds, fast enough to change a car's damping between one bump and the next, as MagneRide has since 2002, or a prosthetic knee between heel strike and swing. The costs: the iron settles in a parked car; the spheres abrade seals; it needs a coil, a current and a controller where a valve needed nothing; and it is heavy, being a third iron.",
  stats: [["Response", "around 5 to 10 ms"], ["Yield stress", "50 to 100 kPa in the field"], ["Control", "continuously variable with current"]],
  uses: "Adaptive dampers and seat suspensions, prosthetic knees, clutches and brakes, haptic devices, polishing optics.",
  link: "https://en.wikipedia.org/wiki/Magnetorheological_fluid"
},
{
  id: "ferrofluid", cat: "exotic", name: "Ferrofluid",
  sub: "colloidal magnetite", img: "ferrofluid", extra: ["ferrofluid2", "ferrofluid3"],
  hook: "A liquid magnet: magnetite ground to ten nanometres, each grain coated in soap so they never clump, in oil. A magnet under it raises spikes along the field lines, since that costs less energy than lying flat.",
  more: "NASA made it in 1963 to pump fuel in free fall, and the trick is the size: a ten-nanometre grain of magnetite is a single magnetic domain, small enough that thermal jostling keeps it suspended for ever, and a surfactant skin keeps it off its neighbours, so it stays fluid where iron filings would be a brick. It is pulled toward the strongest part of the field, and above a threshold the surface buckles into the hedgehog of spikes, the Rosensweig instability, each spike a truce between surface tension pulling flat and the field pulling up. The costs: it stains skin and cloth black for days; the grains oxidise and the fluid thickens over years; it is weakly magnetic, nothing you could lift with; and the spikes that make it famous do no work at all.",
  stats: [["Particle size", "about 10 nm, one domain each"], ["Invented", "NASA, 1963"], ["Spikes", "the Rosensweig instability"]],
  uses: "Rotary seals on hard drives and vacuum shafts, loudspeaker voice-coil cooling, dampers, sensors, art.",
  link: "https://en.wikipedia.org/wiki/Ferrofluid"
},
{
  id: "vantablack", cat: "exotic", name: "Vantablack",
  sub: "vertically aligned nanotube array", img: "vantablack", extra: ["vantablack2", "vantablack3"],
  hook: "A forest of carbon nanotubes that light enters and does not leave. Crumple the foil under it and the surface still reads as a flat void, since the eye gets no shading back. Not a paint: it is grown on the part.",
  more: "The name is an acronym, vertically aligned nanotube array: nanotubes grown on a heated part, standing like grass, a few micrometres tall and spaced so a photon slipping between them bounces wall to wall until it is absorbed as heat. Less than a thousandth comes back, so the surface shows no folds and no depth, which is wanted wherever stray light spoils a measurement: telescope baffles, star trackers, spectrometers. One sculptor bought the exclusive art licence in 2014, which caused more argument than the material did. The costs: it is grown in a reactor, so it coats only what fits in one; a fingertip flattens the forest to ordinary black; it cannot be cleaned or repaired; and the sprayable versions since are paints with nanotubes in them.",
  stats: [["Absorbs", "about 99.96 percent of visible light"], ["Structure", "a nanotube forest, grown not painted"], ["Looks like", "a hole"]],
  uses: "Stray-light baffles in telescopes and sensors, calibration targets, a few art pieces and one show car.",
  link: "https://en.wikipedia.org/wiki/Vantablack"
},
{
  id: "mxene", cat: "exotic", name: "MXenes",
  sub: "Ti₃C₂Tx and family", img: "mxene", extra: ["mxene2", "mxene3"],
  hook: "Two-dimensional metal carbides, etched from a layered parent crystal a sheet at a time. They conduct like metal, disperse in water like clay, and a film a hair thick blocks radio better than copper of that weight.",
  more: "The parents are the MAX phases, ceramics such as Ti3AlC2 in which titanium carbide sheets alternate with planes of aluminium; hydrofluoric acid takes the aluminium and leaves carbide sheets a nanometre thick that peel apart in water to a black ink. Drexel found the first in 2011; there are now dozens. Each sheet is metal with a skin of oxygen and fluorine, so it conducts, wets, and dries to a film; the film shields radio by reflecting between its layers, stores charge between them, and prints. The costs: hydrofluoric acid is the etch, and nobody enjoys it; the sheets oxidise over weeks, so the ink is used fresh or kept cold; the properties depend on which terminations the etch left, which nobody fully controls; and nothing is made in tonnes.",
  stats: [["Found", "2011, at Drexel"], ["Conductivity", "about 10,000 S per cm"], ["Shielding", "over 90 dB at 45 µm"]],
  uses: "EMI shielding films, supercapacitor electrodes, sensors and antennas, conductive inks, membranes.",
  link: "https://en.wikipedia.org/wiki/MXenes"
},
{
  id: "starlite", cat: "exotic", name: "Starlite",
  sub: "lost ablative compound", img: "starlite", extra: ["starlite2"],
  hook: "A hairdresser mixed it in his kitchen and showed it on television in 1990: a raw egg coated in it, five minutes under a blowtorch, cracked open raw. He never disclosed the recipe and died with it in 2011.",
  more: "Maurice Ward of Yorkshire, hairdresser with a plastics side line, set out after a 1985 air crash to make something that would not burn. By his vague account it was a putty of polymers and borates that charred under flame into insulating foam. After the egg came tests at the Atomic Weapons Establishment, where it reportedly took a simulated nuclear flash, and at ICI, Boeing and NASA, never with a sample kept. Ward wanted most of any profit and trusted nobody with the formula, so no deal was done; his family has since licensed a product under the name. The costs: it never existed as a product; it proved that a secret with no patent and no partner dies with its keeper; and intumescent coatings have done much the same job on steelwork for decades.",
  stats: [["Shown", "1990, on television"], ["Formula", "never disclosed"], ["Status", "lost; a cautionary tale"]],
  uses: "None. It survives as the standard story about trade secrets kept too well.",
  link: "https://en.wikipedia.org/wiki/Starlite"
},
{
  id: "graphene", cat: "exotic", name: "Graphene",
  sub: "single-atom carbon sheet", img: "graphene", extra: ["graphene2", "graphene3"],
  hook: "One atom thick, first isolated in 2004 with sticky tape and a flake of graphite, strong enough that an elephant on a pencil would not push through a sheet. Making it by the square metre is still the problem.",
  more: "Graphite is graphene stacked, and comes apart so easily that a pencil mark is graphene in slivers; Geim and Novoselov folded tape over a flake, pulled, and repeated until single layers lay on a silicon wafer, visible by their faint colour; the Nobel came in 2010. One hexagonal layer of carbon is the stiffest and strongest material measured, carries electrons faster than silicon, conducts heat better than copper, and is tight to helium. The costs: the tape method makes flakes; vapour deposition on copper makes film, but peeling it off costs; what sells by the tonne as graphene is mostly graphite dust; it has no band gap, so it will not switch off and has not replaced silicon; and its mass market, two decades on, is an additive to batteries.",
  stats: [["Thickness", "0.335 nm"], ["Tensile strength", "130 GPa, measured on a flake"], ["Isolated", "2004, with tape"]],
  uses: "Conductive additives in batteries, paints and concrete, transparent electrodes, sensors, membranes, composites.",
  link: "https://en.wikipedia.org/wiki/Graphene"
},
{
  id: "cntyarn", cat: "exotic", name: "Carbon nanotube yarn",
  sub: "spun from a nanotube forest", img: "cntyarn", extra: ["cntyarn2", "cntyarn3"],
  hook: "Drawn out of a nanotube forest like candy floss off a drum and twisted into thread. It conducts like metal, shrugs off heat that melts copper, and is the only route found so far to a nanotube object you can hold.",
  more: "Grow nanotubes upright on a wafer, dense enough to lean on each other, and pull at the edge: tubes come away end to end in a ribbon, each dragging the next by van der Waals attraction alone, and a twist makes the ribbon a yarn of hundreds of thousands of tubes in cross section. Nothing is dissolved or glued. The yarn carries current and heat nearly as a metal does, is stable past a thousand degrees in vacuum, and can be knitted. The costs: a single tube is a hundred times stronger than steel and the yarn is not, since the tubes slide past each other, so it comes out at one to three gigapascals, fibre-grade, not miraculous; forests are grown a few square centimetres at a time; and kilometre lengths come from a few firms at a price nobody quotes.",
  stats: [["Strength", "1 to 3 GPa as yarn; tubes slide"], ["Conductivity", "metallic, along the yarn"], ["Spun from", "a grown forest, dry"]],
  uses: "Lightweight wiring and coaxial shields, heaters, artificial muscles, sensors, EMI shielding, antennas.",
  link: "https://en.wikipedia.org/wiki/Carbon_nanotube"
},
{
  id: "aerographite", cat: "exotic", name: "Aerographite",
  sub: "hollow carbon tube network", img: "aerographite", extra: ["aerographite2", "aerographite3"],
  hook: "A sponge of hollow carbon tubes grown over a zinc oxide scaffold that is then boiled away. At 0.18 milligrams a cubic centimetre it is a sixth the density of air, and it springs back from a squash to a twentieth.",
  more: "Kiel and Hamburg made it in 2012 by growing a network of zinc oxide tetrapods, four-armed crystals that pile into open foam, then coating it with carbon in a furnace as hydrogen carried the zinc off, leaving a replica in graphitic carbon with walls a few nanometres thick and nothing inside. It is black, conducts, and is almost all void: a cubic centimetre weighs under two tenths of a milligram, lighter than the aerogels that held the record. Hollow tubes and carbon joints bend rather than snap, so it recovers from 95 percent compression and stiffens under tension. The costs: it is made a few cubic centimetres at a time in a furnace and nowhere else; a breath moves it; and a decade on it remains a laboratory material with papers rather than products.",
  stats: [["Density", "0.18 mg per cubic centimetre"], ["Compressible", "to 5 percent and back"], ["Reported", "2012, Kiel and Hamburg"]],
  uses: "Research: electrodes, sensors, lightweight shielding, water purification, nothing on sale.",
  link: "https://en.wikipedia.org/wiki/Aerographite"
},
{
  id: "ybco", cat: "exotic", name: "YBCO",
  sub: "YBa₂Cu₃O₇, high-Tc superconductor", img: "ybco", extra: ["ybco2", "ybco3"],
  hook: "The first superconductor that works in liquid nitrogen, not helium: 92 kelvin, which turned a cryogenics lab into a thermos. It also pins magnetic flux, so it does not just float above a magnet, it hangs under one.",
  more: "Found in 1987, it is a black ceramic of copper oxide planes between yttrium and barium; short of oxygen it insulates, full it superconducts at 92 kelvin, and liquid nitrogen is 77. A pressed pellet is the demonstration material; the engineering form is a tape, a micrometre of YBCO grown on a textured buffer on a nickel strip, a kilometre long and wound into coils that reach past thirty tesla. Flux pinning is the party piece: defects trap the field lines, so a cooled tile locks above or below a track and will not slide. The costs: a wire must be a tape grown layer by layer at a price per metre that makes copper look cheap; grain boundaries kill the current, hence the texturing; it carries far less in a field; and warm, it is a brittle black rock.",
  stats: [["Tc", "92 K, above liquid nitrogen at 77"], ["Form", "pressed pellet, or epitaxial tape"], ["Trick", "flux pinning: it locks, not floats"]],
  uses: "Maglev demonstrators and classroom levitation, fault current limiters, research and fusion magnets as tape, SQUID sensors.",
  link: "https://en.wikipedia.org/wiki/Yttrium_barium_copper_oxide"
},
{
  id: "electrochromic", cat: "exotic", name: "Electrochromic glass",
  sub: "tungsten oxide ion-insertion stack", img: "electrochromic", extra: ["electrochromic2", "electrochromic3"],
  hook: "Three volts push lithium ions into a tungsten oxide film and the glass goes blue; reverse the polarity and they come out. It draws power only while changing, so a window holds its tint on nothing at all.",
  more: "The stack is five films on glass: a transparent conductor, tungsten oxide, an ion conductor, a counter-electrode that holds the ions when they are out, and a second conductor. Tungsten oxide is clear; push lithium in and each tungsten takes an electron, the oxide turns deep blue, and stays so until the ions are pulled back. The same chemistry dims a car mirror in a second, a 787 window in a minute or two, a façade pane in ten, since the current must spread a metre from the edge. The costs: it goes blue, not grey, and nobody has fixed that; it is slow at building scale; the edge darkens before the middle; the films fade over thousands of cycles; every pane needs wiring; and full tint still passes a few percent: shade, not blackout.",
  stats: [["Drive", "about 3 V"], ["Switch time", "seconds in a mirror, minutes in a window"], ["Holding power", "zero"]],
  uses: "Airliner cabin windows, auto-dimming mirrors, building façades, sunroofs, goggles.",
  link: "https://en.wikipedia.org/wiki/Electrochromic_device"
},
{
  id: "vo2", cat: "exotic", name: "Vanadium dioxide",
  sub: "VO₂, thermochromic switch", img: "vo2", extra: ["vo22", "vo23"],
  hook: "At 68 degrees it rearranges its crystal in under a picosecond and flips from insulator to metal, from infrared-clear to infrared-reflecting. A window coated with it turns away the sun on hot days only, unswitched.",
  more: "Below the transition the vanadium atoms sit in pairs with the shared electrons locked in them, so the oxide is a semiconductor that passes near-infrared; past 68 degrees the pairs break, the electrons are free, and the film reflects infrared as a metal would while staying about as clear to the eye. The resistance drops ten thousand fold across a few degrees, which is why thermal cameras use vanadium oxide bolometers, where a hair of warmth gives a large resistance change. The costs: 68 degrees is far above any window, and the tungsten doping that lowers it also weakens it; the film is yellow-brown; it oxidises in air and must be capped; it passes only about forty percent of visible light; and after two decades the smart window is mostly a paper.",
  stats: [["Transition", "68 °C, lower with tungsten doping"], ["Resistance change", "about 10,000 fold"], ["Speed", "sub-picosecond in a film"]],
  uses: "Smart window coatings in trials, uncooled infrared bolometers, optical and RF switches, thermal camouflage.",
  link: "https://en.wikipedia.org/wiki/Vanadium(IV)_oxide"
},
{
  id: "qdot", cat: "exotic", name: "Quantum dots",
  sub: "CdSe / InP nanocrystals", img: "qdot", extra: ["qdot2", "qdot3"],
  hook: "Same chemistry, different colour: the light a quantum dot gives off is set by how big the crystal is, since the electron sits in a box and the box sets the energy. Cadmium selenide at 2 nanometres is blue, at 6 red.",
  more: "A semiconductor crystal smaller than the natural orbit of its own electron and hole forces them together, and the closer they are the more energy it takes to part them and the more comes back when they meet, so the band gap becomes a dial turned by size. The dots are grown in hot oil and the cook time sets the diameter, so one flask gives any colour from blue to red, purer than any phosphor. A film of them under a blue LED makes the greens and reds of a quantum dot television; a dot bonded to an antibody lights one protein in a cell. The costs: cadmium is cadmium, and the indium phosphide dots that replace it are dimmer; they bleach under hard light and oxidise unshelled; the colour is only as pure as the size distribution; and a single dot blinks.",
  stats: [["Size", "2 to 10 nm"], ["Emission width", "about 25 nm"], ["Colour set by", "diameter alone"]],
  uses: "Television and monitor colour films, LED phosphors, biological tagging, solar cells, single-photon sources.",
  link: "https://en.wikipedia.org/wiki/Quantum_dot"
},
{
  id: "metamaterial", cat: "exotic", name: "Electromagnetic metamaterial",
  sub: "split-ring resonator arrays", img: "metamaterial", extra: ["metamaterial2", "metamaterial3"],
  hook: "A material whose behaviour comes from its geometry, not its chemistry. Pattern copper rings smaller than the wavelength and the array can show a negative refractive index: the wave bends the wrong way.",
  more: "A wave much longer than the pattern sees only an average, and the average can be whatever the rings are tuned to give. A split ring is a tiny LC circuit that near resonance answers a magnetic field backwards, with negative permeability; thin wires add negative permittivity, and together they give a negative index, which Veselago predicted in 1968 and Smith built in copper and fibreglass in 2000. Since then: flat lenses, antennas a tenth of their size, radar absorbers, cloaks that steer a wave round a cylinder. The costs: a resonance is narrow, so each structure works at one band; it is lossy there, resonance being absorption; optical versions need nanometre fabrication; and every cloak so far has hidden a small object from one frequency in one plane.",
  stats: [["Refractive index", "can be negative near resonance"], ["Feature size", "below the wavelength"], ["First shown", "2000, at microwave"]],
  uses: "Flat lenses and metalenses, miniaturised antennas, radar absorbers, tunable filters, cloaking demonstrations.",
  link: "https://en.wikipedia.org/wiki/Metamaterial"
},
{
  id: "acousticmeta", cat: "exotic", name: "Acoustic metamaterial",
  sub: "sub-wavelength resonator lattice", img: "acousticmeta", extra: ["acousticmeta2"],
  hook: "Blocking low frequencies normally means mass: a wall. A lattice of tuned resonators can stop a band of sound in a panel a hundredth of a wavelength thick, and some designs let air through while the noise stays out.",
  more: "A sculpture of steel rods in Madrid was measured in 1995 and found to carry a stop band, the scattered waves cancelling in step, which made Eusebio Sempere the accidental author of the first sonic crystal. The metamaterial proper came in 2000: lead balls coated in silicone, set in a grid, each a mass on a spring; near resonance the balls move against the wave, the slab acts as if its mass were negative, stopping a two-metre wavelength in two centimetres. Later designs use membranes and coiled channels; the open ones leave a hole for air, so a fan duct is silenced unblocked. The costs: a resonator stops one band, so broadband needs many sizes; it is a stiff structure, not a blanket; and the panels on sale are still the perforated and membrane kinds.",
  stats: [["Thickness", "about a hundredth of a wavelength"], ["Attenuation", "over 20 dB in band"], ["Open versions", "sound stopped, air through"]],
  uses: "Ventilation and fan silencers, machine enclosures, aircraft cabin panels, vibration isolation, laboratory curiosities.",
  link: "https://en.wikipedia.org/wiki/Acoustic_metamaterial"
},
{
  id: "selfhealpoly", cat: "exotic", name: "Self-healing polymer",
  sub: "Diels–Alder and capsule systems", img: "selfhealpoly", extra: ["selfhealpoly2"],
  hook: "Two tricks. One buries capsules of liquid monomer that break when a crack passes and set in it; the other builds the polymer from bonds that unzip with heat or re-form on contact, so a cut heals again and again.",
  more: "The capsule version came from Illinois in 2001: microspheres of monomer in an epoxy with grains of catalyst, so a crack tears the spheres open, the liquid wicks in, meets the catalyst and sets, and the part recovers most of its strength unnoticed. The reversible version has no capsules: its bonds come apart and go back, adducts that open at 120 degrees and close on cooling, or hydrogen bonds in a rubber that can be cut, pressed together and pulled again an hour later. The costs: a capsule heals a spot once, and a second crack there finds nothing left; the capsules weaken the resin; the reversible kinds creep, since bonds that open on purpose also open under load; healing takes hours and often heat; and no coating heals a scratch while you watch.",
  stats: [["Strength recovered", "70 to 100 percent, once"], ["Capsule type", "one shot per site"], ["Reversible type", "repeatable, but soft"]],
  uses: "Self-healing coatings and clearcoats, phone screen films, aerospace sealants, soft robotics, concrete with bacteria as the capsule.",
  link: "https://en.wikipedia.org/wiki/Self-healing_material"
},
{
  id: "dea", cat: "exotic", name: "Dielectric elastomer actuator",
  sub: "compliant electrodes on acrylic film", img: "dea", extra: ["dea2", "dea3"],
  hook: "A rubber film with stretchy electrodes on both faces. A few kilovolts across it and the electrostatic pull squeezes it thinner, so it spreads wider: over 100 percent strain, faster and more efficient than muscle.",
  more: "Take a sheet of acrylic or silicone tens of micrometres thick, paint both sides with carbon grease, apply a voltage: the electrodes attract, the film thins, and since rubber keeps its volume it grows in area, by a third in silicone and more than double in prestretched acrylic. Remove the voltage and it pulls back; cycle it and it is a muscle, with efficiency up to eighty percent and almost no current, being a capacitor. Stack films for force, roll them for a linear actuator, or run it backwards as a generator. The costs: kilovolts, which need a converter and sit badly on a body; a pinhole or a dust grain breaks down the film; acrylic creeps and silicone moves less; the force per layer is small; and the prestretch needs a frame heavier than the film.",
  stats: [["Strain", "over 100 percent, prestretched acrylic"], ["Drive", "1 to 5 kV"], ["Efficiency", "up to about 80 percent"]],
  uses: "Soft robotics and grippers, haptic feedback, tunable lenses, loudspeakers, wave energy harvesters.",
  link: "https://en.wikipedia.org/wiki/Electroactive_polymers"
},
{
  id: "lce", cat: "exotic", name: "Liquid crystal elastomer",
  sub: "LCE, programmable-shape rubber", img: "lce", extra: ["lce2"],
  hook: "A rubber whose molecules line up like a liquid crystal. Heat it and the alignment collapses, so the strip shortens along one axis by up to 40 percent and lengthens again on cooling, the direction set in the mould.",
  more: "Hang liquid crystal molecules off a silicone backbone, crosslink it lightly while the rods are aligned, and the rubber remembers the direction. Below the clearing temperature the rods lie parallel and the chains are stretched along them; heat past it and the rods tumble, the chains curl up, and the piece contracts along the old axis while swelling across it, with a force per area near muscle. Cool it and it lengthens. Pattern the alignment and a flat sheet folds itself into a gripper; add a dye and a lamp drives it. The costs: the trigger is tens of degrees, so it is slow and wastes most of the heat; the force is small in absolute terms; alignment through anything thicker than a film is hard; and after thirty years there is no product to buy.",
  stats: [["Contraction", "up to 40 percent along the director"], ["Trigger", "heat, or light through a dye"], ["Shape", "programmed in the mould"]],
  uses: "Artificial muscle research, micro-grippers, morphing optics and haptics, self-folding sheets, 4D printing.",
  link: "https://en.wikipedia.org/wiki/Liquid_crystalline_elastomer"
},
{
  id: "erf", cat: "exotic", name: "Electrorheological fluid",
  sub: "polarisable particles in oil", img: "erf",
  hook: "Magnetorheological fluid's electrical cousin: kilovolts across a millimetre and the suspended particles chain into columns, turning the oil to paste in a millisecond. Faster than MR fluid, but it needs high voltage.",
  more: "Winslow described it in 1947, a decade before the magnetic version: starch or polymer grains in an insulating oil between two electrodes. Apply a field and each grain polarises and they snap into chains from plate to plate that a shear must break before the fluid flows, so the yield stress rises with the square of the field, to a few kilopascals. Switch off and it relaxes in a millisecond. A clutch or a damper with no moving parts, driven by a voltage rather than a coil. The costs: the yield stress is a tenth of the magnetic fluid, which is why MR won; the field is kilovolts per millimetre, with the insulation that brings; water made the early fluids work and then ruined them; the grains settle; and it works in a narrow band of temperature.",
  stats: [["Response", "about 1 ms"], ["Field", "1 to 5 kV per mm"], ["Yield stress", "about 5 kPa; MR fluid manages ten times that"]],
  uses: "Fast clutches and valves, haptic devices, vibration dampers, research actuators; mostly outlived by its magnetic cousin.",
  link: "https://en.wikipedia.org/wiki/Electrorheological_fluid"
},
{
  id: "oobleck", cat: "exotic", name: "Shear-thickening suspension",
  sub: "cornstarch in water", img: "oobleck", extra: ["oobleck2", "oobleck3"],
  hook: "Pour it and it flows; punch it and for an instant it is a solid, because the grains jam into a load-bearing network faster than the water can get out of the way. The kitchen version of the fluid in soft armour.",
  more: "Stir cornstarch into water at about equal volumes and the grains sit so close that any quick shear forces them against each other before the water between them can drain; they lock into chains that carry the load to the bottom of the bowl, and the harder the hit the stiffer the answer. Move slowly and the water has time, the grains slide apart, and it pours. A person can run across a pool of it and sinks on stopping. The same physics, in silica soaked into Kevlar, makes a fabric limp until a knife arrives. The costs: it is a demonstration, not a material, since it dries, ferments and settles; the stiffening lasts only while the load does; the armour version adds weight and stiffness that marketing left out; and a pump asked to move it would seize.",
  stats: [["Solids", "about 55 percent by volume"], ["Trigger", "shear rate, not shear"], ["Recovery", "instant, once the load is gone"]],
  uses: "Demonstrations and science fairs; the same physics in impact-hardening armour, sports padding and speed bumps.",
  link: "https://en.wikipedia.org/wiki/Dilatant"
},
{
  id: "thermoelectric", cat: "exotic", name: "Bismuth telluride",
  sub: "Bi₂Te₃ thermoelectric", img: "thermoelectric", extra: ["thermoelectric2", "thermoelectric3"],
  hook: "Run a current through it and one face goes cold while the other goes hot: no compressor, no gas, no moving parts; reversing the current swaps them. Run heat through it and it makes current. The catch: efficiency.",
  more: "Electrons carry heat as well as charge, so a current pushed across a junction of two conductors drags heat with it, cooling one side. In metals the effect is tiny; in a doped semiconductor with low thermal conductivity it is not, and bismuth telluride is the best near room temperature by a margin unbeaten in sixty years. A module is n and p pillars wired in series between two ceramic plates; a few amps hold seventy degrees across it, and in reverse a hot side powers a sensor or, with plutonium, a spacecraft for decades. The costs: it moves heat at a few percent of Carnot, so it cools a wine fridge or a laser diode, not a kitchen; the heat it pumps must still be shed, so the heatsink dwarfs the module; and above picnic size a compressor is cheaper.",
  stats: [["Temperature difference", "up to about 70 K in one stage"], ["Efficiency", "5 to 8 percent of Carnot"], ["Moving parts", "none"]],
  uses: "Peltier coolers for lasers, cameras and wine fridges, dehumidifiers, waste-heat and body-heat generators, radioisotope generators on spacecraft.",
  link: "https://en.wikipedia.org/wiki/Bismuth_telluride"
},
{
  id: "magnetocaloric", cat: "exotic", name: "Magnetocaloric material",
  sub: "Gd and Gd₅(Si,Ge)₄", img: "magnetocaloric", extra: ["magnetocaloric2", "magnetocaloric3"],
  hook: "Put gadolinium in a magnetic field and it warms; take the field away and it cools. A fridge built on that needs no refrigerant gas, is quiet, and could beat a compressor by a third, if anyone can make it cheaply.",
  more: "A magnetic field lines up the spins in a ferromagnet, which lowers their entropy, and the entropy must go somewhere, so it goes into the lattice as heat; remove the field and the spins scramble and take it back. The effect peaks at the Curie point, and gadolinium's is 20 degrees, which is why it is the reference, warming three degrees in two tesla; the alloy Gd5Si2Ge2, found in 1997, doubles that. A refrigerator cycles a bed of the metal through a permanent magnet while fluid carries the heat away. The costs: three degrees a cycle means many cycles; the magnet is neodymium by the kilogram, which is where the cost sits; gadolinium is a rare earth; pumps and valves eat much of the gain; and the prototypes have come and mostly gone.",
  stats: [["Temperature change per cycle", "2 to 5 K"], ["Refrigerant", "none; the metal is it"], ["Efficiency", "about 30 percent better, on paper"]],
  uses: "Prototype refrigerators and wine coolers, gas liquefaction, sub-kelvin cooling for physics by adiabatic demagnetisation.",
  link: "https://en.wikipedia.org/wiki/Magnetic_refrigeration"
},
{
  id: "zeolite", cat: "exotic", name: "Zeolite",
  sub: "crystalline aluminosilicate molecular sieve", img: "zeolite", extra: ["zeolite2", "zeolite3"],
  hook: "A crystal full of pores all exactly one size, to a fraction of an ångström. It sorts molecules by shape: a 3A sieve pulls water out of ethanol and leaves the ethanol, as no filter can, and gives it back when heated.",
  more: "Silicon and aluminium tetrahedra linked corner to corner build cages and channels of a fixed size, and since every aluminium brings a charge that a loose ion must balance, it is a sieve and an ion exchanger at once. Natural ones grow in volcanic rock; synthetic ones are made to order, A for drying, X and Y for cracking oil. Water in the pores is driven off by heat and taken up again, which is why a sachet of beads dries a double-glazing unit for twenty years and a bed of it strips nitrogen from air in an oxygen concentrator. The costs: coke blocks a cracking catalyst in seconds, so refineries burn it clean continuously; the crystals are powders that must be bound into pellets; acid and steam attack them; and regeneration costs the heat it saves.",
  stats: [["Pore size", "0.3 to 1 nm, exact"], ["Surface area", "about 600 square metres a gram"], ["Regenerated", "by heating"]],
  uses: "Oil cracking catalysts, oxygen concentrators, drying glazing units and gas lines, detergent water softeners, cat litter.",
  link: "https://en.wikipedia.org/wiki/Zeolite"
},
{
  id: "mof", cat: "exotic", name: "Metal-organic framework",
  sub: "MOF, metal nodes and organic linkers", img: "mof", extra: ["mof2", "mof3"],
  hook: "A crystal that is mostly empty space: metal ions as the corners, organic struts as the edges, pores where the walls would be. One gram has the surface area of a football pitch; a longer strut makes a bigger pore.",
  more: "A zeolite's framework is fixed; a MOF's is designed. Take a zinc or copper cluster that bonds in six directions, give it a rigid organic strut, and they crystallise into a scaffold with pores as long as the strut. Yaghi made MOF-5 in 1999; there are now thousands. A gram has several thousand square metres inside, against six hundred for a zeolite, and the walls can carry chemistry, so one grabs carbon dioxide from flue gas, one pulls water from desert air, one stores methane at a fifth of the usual pressure. The costs: most collapse in water, steam or acid, and the useful ones were found by trying thousands; the linkers are dear; the powder must be pelleted, which costs surface; and pores that hold a gas so well give it back only for heat.",
  stats: [["Surface area", "to over 7,000 square metres a gram"], ["Void fraction", "up to 90 percent"], ["Design", "pore size set by the linker"]],
  uses: "Gas storage and separation, carbon capture, water harvesting from desert air, catalysis, drug carriers, a few in production.",
  link: "https://en.wikipedia.org/wiki/Metal%E2%80%93organic_framework"
},
{
  id: "metalhydride", cat: "exotic", name: "Metal hydride",
  sub: "LaNi₅ and related storage alloys", img: "metalhydride", extra: ["metalhydride2", "metalhydride3"],
  hook: "Hydrogen soaks into the metal and sits between the atoms, so the alloy holds more hydrogen per litre than the liquid, at room temperature and a few bar. The catch is the other number: by weight, one percent or two.",
  more: "Lanthanum pentanickel does it best at room temperature: hydrogen molecules split on the surface, the atoms diffuse into holes in the lattice, and the metal swells a quarter and gives off heat as it fills, taking it back as it empties, so a canister warms on charge and chills on draw. The filling pressure is set by the alloy, a few bar for LaNi5, so a bottle of the powder holds hydrogen as densely as a cryogenic tank without the cold, which is why submarines carry it and every NiMH cell has a few grams as the negative electrode. The costs: the metal weighs fifty times what it holds; the swelling cracks it to dust; every fill needs cooling and every draw needs heat; impurities poison the surface; and the alloy costs more than the hydrogen ever will.",
  stats: [["Density", "more hydrogen per litre than the liquid"], ["Pressure", "a few bar at room temperature"], ["Penalty", "about 1.5 percent hydrogen by weight"]],
  uses: "NiMH battery electrodes, hydrogen storage for forklifts and submarines, laboratory hydrogen supply, heat pumps.",
  link: "https://en.wikipedia.org/wiki/Metal_hydride"
},
{
  id: "pcm", cat: "exotic", name: "Phase change material",
  sub: "paraffin and salt hydrates", img: "pcm", extra: ["pcm2", "pcm3"],
  hook: "Stores heat by melting instead of warming, so it takes energy in at one fixed temperature and gives it back at the same one. A centimetre of the right paraffin in a wall holds as much heat as a brick a foot thick.",
  more: "Melting ice takes as much heat as warming the water to eighty degrees, and every solid has its version: paraffins melt from 18 to 60 degrees by chain length, sodium acetate trihydrate at 58, each storing one to two hundred kilojoules a kilogram at a temperature you choose. Put a wax that melts at 23 in a plasterboard and the room cannot pass 23 until the wax has gone, which takes all afternoon; put one that melts at 5 in a box and vaccines ride for three days. The costs: a paraffin is flammable and must be encapsulated; a salt hydrate separates after a few hundred cycles; the heat comes and goes at one temperature only, so a 23-degree board does nothing in a 30-degree summer; and wax conducts so badly it melts from the outside in.",
  stats: [["Latent heat", "150 to 250 kJ per kg"], ["Against warming up", "about ten times the heat per kilogram"], ["Temperature", "fixed by the material"]],
  uses: "Building temperature buffering, cold-chain shippers, hand warmers, electronics and spacecraft thermal control, ice packs.",
  link: "https://en.wikipedia.org/wiki/Phase-change_material",
  tags: ["warmth"]
},
{
  id: "vip", cat: "exotic", name: "Vacuum insulation panel",
  sub: "fumed silica core in a barrier envelope", img: "vip", extra: ["vip2", "vip3"],
  hook: "Remove the air and you remove the main way heat crosses an insulator. A 20 mm panel does the work of 200 mm of foam, and if a nail goes through the envelope it is, that instant, a 20 mm panel of chalk dust.",
  more: "Air in a foam carries heat from cell to cell; pump it out and only the skeleton and radiation remain. The core is fumed silica pressed into a board, chosen because its pores are smaller than the distance an air molecule flies between collisions, so a poor vacuum is enough; carbon black stops the radiation. Wrapped in metallised film, evacuated and sealed, it comes out at four thousandths of a watt per metre kelvin, a tenth of mineral wool. The costs: it cannot be cut, drilled or nailed, since one hole ends it, so every panel is made to size; the seams leak heat round the edge; gas creeps in over decades; and it costs ten times the foam it replaces, so it goes only where thickness is not to be had at any price.",
  stats: [["Conductivity", "about 0.004 W per metre kelvin"], ["Against foam", "about eight times better"], ["Failure", "one puncture ends it"]],
  uses: "Fridge and freezer walls, vaccine and specimen shippers, retrofit insulation where thickness is fixed, hot water tanks.",
  link: "https://en.wikipedia.org/wiki/Vacuum_insulated_panel",
  tags: ["warmth"]
},
{
  id: "getter", cat: "exotic", name: "Getter material",
  sub: "barium or zirconium alloy film", img: "getter", extra: ["getter2", "getter3"],
  hook: "A pump with no moving parts that keeps working after the thing is sealed. A reactive metal is flashed onto the inside of the glass and swallows the stray gas molecules that go on leaking out of the walls for years.",
  more: "No pump reaches a perfect vacuum and no seal keeps one, since every surface slowly gives up absorbed gas; the getter is a pump that stays inside. In a valve it is a ring of barium alloy heated by induction after sealing, so the barium evaporates and condenses on the glass as the familiar silver mirror; from then on any oxygen or water that reaches it is chemisorbed on the spot. Let air in and the mirror turns white, which is how a dead tube is spotted. The non-evaporable kind, zirconium alloy in a strip, goes on pumping inside beam pipes, X-ray tubes, vacuum flasks and sealed MEMS cavities. The costs: it pumps only what reacts, so argon and methane pass it by; it has a finite capacity and a saturated getter is just a mirror; and one leak poisons it.",
  stats: [["Vacuum held", "below a billionth of a bar"], ["Mechanism", "chemisorption, no moving parts"], ["The silver patch", "in every old valve"]],
  uses: "Vacuum tubes and CRTs, X-ray tubes, vacuum flasks and panels, MEMS packages, accelerator beam pipes.",
  link: "https://en.wikipedia.org/wiki/Getter"
},
{
  id: "strontiumal", cat: "exotic", name: "Strontium aluminate",
  sub: "SrAl₂O₄:Eu,Dy phosphor", img: "strontiumal", extra: ["strontiumal2", "strontiumal3"],
  hook: "The glow-in-the-dark pigment that actually works. It stores the energy of light in crystal defects and leaks it back slowly: ten times brighter than the zinc sulphide of old toys, still visible after twelve hours.",
  more: "Strontium aluminate doped with europium and dysprosium was found in Japan in 1993 and replaced zinc sulphide within a decade. Light lifts electrons in the europium; the dysprosium provides traps at a depth that room temperature can just empty, so the electrons trickle back over hours, each giving a green photon on the way. Nothing in it is radioactive or consumed, so a stair nosing or an exit sign charges from room light and glows all night, brightest in the first hour and readable at dawn. The costs: it is a hard, coarse powder that must be coated, since water decomposes it; the colours are green and blue, red still weak; the glow falls off steeply, a tenth as bright after an hour; and it is dear enough that cheap toys are still zinc sulphide.",
  stats: [["Against zinc sulphide", "about ten times brighter"], ["Afterglow", "visible past twelve hours"], ["Radioactive", "no"]],
  uses: "Emergency exit marking and stair nosings, watch dials, safety signage, paints, toys and jewellery.",
  link: "https://en.wikipedia.org/wiki/Strontium_aluminate"
},
{
  id: "tritium", cat: "exotic", name: "Tritium gas light",
  sub: "GTLS, tritium in a phosphor-lined tube", img: "tritium", extra: ["tritium2", "tritium3"],
  hook: "A sealed glass capillary of tritium gas, lined with phosphor. Betas hit the coating and it glows for a decade or two, with no battery and no charging. The betas cannot get through the glass, so it is safe unbroken.",
  more: "Tritium decays to helium with a half-life of 12.3 years, throwing out an electron so feeble it travels a few millimetres in air, and a zinc sulphide phosphor turns those electrons into light as it did in a radium dial, except that nothing leaks. A glass tube a millimetre across is filled, sealed by laser and set into a watch hand, a gunsight or an exit sign, where it gives a dim, steady light, enough in the dark, nothing by day. The light halves every twelve years with the gas, so a watch is good for twenty. The costs: it is a radioactive source, licensed, labelled, not to be binned, and a broken tube makes people nervous; the phosphor browns faster than the gas decays; it cannot be switched off, which a soldier notices; and it is dim.",
  stats: [["Half-life", "12.3 years"], ["Power", "none required"], ["Beta range", "a few millimetres of air"]],
  uses: "Watch hands and gun sights, emergency exit signs, key fobs, compass dials, instrument markings.",
  link: "https://en.wikipedia.org/wiki/Tritium_radioluminescence"
},
{
  id: "slips", cat: "exotic", name: "Liquid-infused surface",
  sub: "SLIPS, lubricant locked in a nanotexture", img: "slips", extra: ["slips2", "slips3"],
  hook: "Copied from the pitcher plant: a porous surface holds a film of lubricant by capillary force, so a droplet touches liquid, not solid. Nothing sticks, not blood, ice or ketchup, and a scratch heals as oil flows back.",
  more: "The rim of a Nepenthes pitcher has microscopic ridges that wick rain into a film; an ant stepping onto it stands on water and slides into the pot. Harvard copied it in 2011 with a fluorinated oil held in a Teflon mat, and it beats the lotus leaf: a lotus surface holds air in its texture, and oil or pressure drives the air out; a liquid film has none to lose. Water, oil, blood and crude slide off at a few degrees of tilt, ice cannot anchor, bacteria cannot settle, and the last of the mayonnaise leaves the jar. The costs: the oil evaporates, shears away and leaves with every drop, so the surface lives for weeks; the lubricant must not dissolve what it meets; the oils that work are the ones being banned; and nobody yet makes it by the square metre.",
  stats: [["Contact angle hysteresis", "under 2.5 degrees"], ["Repels", "water, oil, blood, ice"], ["Self-healing", "the liquid reflows"]],
  uses: "Anti-fouling and anti-icing coatings, catheters and medical tubing, condenser surfaces, bottles and containers that empty.",
  link: "https://en.wikipedia.org/wiki/Liquid-impregnated_surface"
},
{
  id: "tio2photo", cat: "exotic", name: "Photocatalytic titania",
  sub: "anatase TiO₂ coating", img: "tio2photo", extra: ["tio2photo2", "tio2photo3"],
  hook: "Ultraviolet knocks electrons loose in the coating and they tear apart any organic molecule on it. The same light makes the surface wet perfectly, so rain sheets across instead of beading and takes the dirt away.",
  more: "Anatase, one crystal form of the white pigment, is a semiconductor whose band gap matches the near ultraviolet: a photon under 390 nanometres frees an electron and leaves a hole, the hole makes a hydroxyl radical from water, and the radical eats whatever organic film lies on the surface: grease, soot, algae. Pilkington put a fifteen-nanometre layer on glass in 2001; the same stuff is in the cement of a church in Rome that has stayed white for twenty years. The costs: it needs ultraviolet, so it does nothing indoors or on a north wall in winter; it eats slowly, and a bird dropping sits there until the rain; it eats paint binders too, so it must sit on something mineral; and air-cleaning paving removes a few percent of the nitrogen oxide passing it.",
  stats: [["Activated by", "ultraviolet under 390 nm"], ["Contact angle", "near zero under light"], ["Breaks down", "organic films and nitrogen oxides"]],
  uses: "Self-cleaning glass and façades, anti-fog mirrors, air-cleaning paving and paint, hospital tiles, water treatment.",
  link: "https://en.wikipedia.org/wiki/Titanium_dioxide"
},
{
  id: "electret", cat: "exotic", name: "Electret",
  sub: "permanently charged fluoropolymer film", img: "electret", extra: ["electret2", "electret3"],
  hook: "The electrostatic twin of a permanent magnet: charge frozen into a polymer film for decades. Nearly every microphone of the last fifty years is one, and the same charge lets a mask catch what it cannot sieve.",
  more: "Heat a film of Teflon or polypropylene, spray it with ions, and cool it; the charge is trapped and leaks away so slowly that the half-life runs to centuries. Bell Labs put such a film over a backplate in 1962 and had a condenser microphone with no polarising voltage, pea-sized for pennies, hence one in every phone. Blown into fibres, the same charged polymer makes a filter that pulls a particle onto a fibre it would have slipped past, so an N95 breathes easily and still stops 95 percent at the worst size. The costs: heat, solvent and slowly humidity kill the charge, which is why a mask is single-use and a microphone drifts after a decade in a hot car; a charged surface attracts dust; and MEMS microphones are replacing the capsule.",
  stats: [["Charge life", "decades, centuries by extrapolation"], ["Bias supply", "none needed"], ["Filter gain", "about ten times at 0.3 µm"]],
  uses: "Microphones in phones, laptops and hearing aids, N95 and HEPA filter media, air ionisers, energy harvesters.",
  link: "https://en.wikipedia.org/wiki/Electret"
},

/* ---------- NATURAL & BIOLOGICAL ---------- */
{
  id: "nacre", cat: "natural", name: "Nacre",
  sub: "mother of pearl, aragonite and conchiolin", img: "nacre", extra: ["nacre2", "nacre3"],
  hook: "Ninety-five percent chalk, three thousand times tougher than chalk. Aragonite tiles half a micrometre thick are laid like brickwork in protein mortar; a crack must go round every tile and runs out of energy trying.",
  more: "A mollusc lays its shell lining down a layer at a time, hexagonal aragonite platelets in a scaffold of chitin and protein, each half a micrometre thick and ten wide, staggered against the course below. The mineral is brittle, the protein soft; together they are neither. A crack has to turn at every tile, the protein stretches and tears a little as the tiles slide, and each small event eats energy, so the shell takes a blow that would shatter the same chalk in one sheet. The iridescence is a by-product of tiles a wavelength of light thick. The costs: it grows a fraction of a millimetre a year, only inside a living shell; a knife scratches it; it cannot be moulded, only cut; and synthetic versions reach a fraction of its toughness after thirty years.",
  stats: [["Mineral", "about 95 percent aragonite"], ["Toughness", "about 3,000 times the mineral alone"], ["Tile", "about 0.5 µm thick"]],
  uses: "Inlay, buttons and jewellery, pearls; the structural template for a generation of tough layered composites.",
  link: "https://en.wikipedia.org/wiki/Nacre"
},
{
  id: "bamboo", cat: "natural", name: "Bamboo",
  sub: "graded fibre-reinforced grass", img: "bamboo", extra: ["bamboo2", "bamboo3"],
  hook: "A grass, not a tree, and a composite with the fibres densest at the outside, where the bending stress is. Full height in a season, and along the grain it out-pulls mild steel for its weight. Across it, it splits.",
  more: "A culm is a hollow tube of soft tissue threaded with fibre bundles that crowd toward the skin, so a cross-section shows a dense rind grading to a spongy core, where an engineer would put the material too. Nodes, solid diaphragms every few decimetres, stop it buckling. Moso grows a metre a day in spring, is cut at three to five years and dries to several hundred megapascals along the grain at a soft wood's density, which is why Hong Kong still scaffolds its towers in it. The costs: it is strong only along the grain and splits along it at a touch; beetles and fungus take it unless it is treated; it cracks at the nodes as it dries; a round culm cannot be bolted like a timber, so joints are the whole craft; and bamboo textile is viscose made from bamboo.",
  stats: [["Tensile", "about 400 to 800 MPa along the grain"], ["Growth", "up to a metre a day"], ["Fibres", "graded densest at the outside"]],
  uses: "Scaffolding and housing, flooring and laminated panels, bicycle frames, furniture, paper and viscose, reinforcement research.",
  link: "https://en.wikipedia.org/wiki/Bamboo"
},
{
  id: "balsa", cat: "natural", name: "Balsa",
  sub: "Ochroma pyramidale", img: "balsa", extra: ["balsa2", "balsa3"],
  hook: "A hardwood lighter than cork, because it is mostly air held in cells with thin but stiff walls. Cut across the cells, end-grain balsa carries compression like a honeycomb, which is why it cores most turbine blades.",
  more: "The tree is an Ecuadorian weed that grows twenty metres in six years and is felled before the wood hardens; what is sawn from it is a lattice of long thin-walled cells, a tenth to a fifth the density of water. The cell walls are ordinary wood, so the stiffness per weight matches spruce and the end-grain crush strength is remarkable, which is what a sandwich core needs: thin skins carry the bending, the core holds them apart and takes the shear. The costs: it drinks resin, so a balsa core weighs more laminated than dry; it rots if water gets in, and water gets in; the density varies threefold from tree to tree; the supply is one country and a few years of weather; and PET and PVC foams are taking the blade market as the trees run short.",
  stats: [["Density", "100 to 200 kg per cubic metre"], ["Air", "about 60 percent of the volume"], ["End grain", "crushes like a honeycomb"]],
  uses: "Wind turbine blade and boat hull cores, model aircraft and bridges, surfboards, packaging, rafts.",
  link: "https://en.wikipedia.org/wiki/Ochroma"
},
{
  id: "lignumvitae", cat: "natural", name: "Lignum vitae",
  sub: "Guaiacum, self-lubricating hardwood", img: "lignumvitae", extra: ["lignumvitae2", "lignumvitae3"],
  hook: "The densest wood in trade, so dense it sinks, and a quarter of its weight is resin, so it oils itself. Ship propeller shafts ran in bearings of it into the nuclear age, lubricated by resin and seawater alone.",
  more: "A slow Caribbean tree with an interlocked grain, a green-brown heartwood at 1.2 times the density of water, and guaiac resin filling its pores. Rubbed, the resin comes up as a waxy film; wetted, it takes on a slickness no other timber has, so a bearing of it runs quiet and cool against a steel shaft with water as the only coolant. Mill wheels ran on it, and USS Nautilus went to sea in 1954 with it in her stern tube. The costs: the trees grow a few millimetres a year and were cut for three centuries for bearings and for a syphilis cure that did not work, so the species is on the CITES list and the wood comes as old stock or Argentine substitutes; the grain that will not split will not plane cleanly either; and a cutting edge lasts minutes in it.",
  stats: [["Density", "about 1.23 g per cubic centimetre; it sinks"], ["Resin", "about 25 percent by weight"], ["Lubrication", "its own, with water"]],
  uses: "Propeller shaft and water turbine bearings, mallet heads and mortars, pulley sheaves, bowls, clock gears.",
  link: "https://en.wikipedia.org/wiki/Lignum_vitae"
},
{
  id: "whiteoak", cat: "natural", name: "White oak",
  sub: "Quercus alba, tylosis-plugged pores", img: "whiteoak", extra: ["whiteoak2", "whiteoak3"],
  hook: "As heartwood forms, the tree plugs its own vessels with balloon-like growths called tyloses. Red oak does not, and a red oak barrel leaks like a straw. That habit is why every whisky and wine barrel is white oak.",
  more: "Oak is ring-porous: each spring it lays down a row of wide vessels, open pipes the length of the trunk. In the white oaks the cells beside each vessel balloon into it as sapwood turns to heartwood, and the pipes fill until the wood is tight to liquid, so a cask holds wine for decades while breathing enough oxygen to age it. The staves are split along the rays so the vessels run with the stave, and bent over fire, whose charring gives bourbon its vanilla. The costs: a barrel is a hundred and fifty years of tree and a day of skilled cooperage, so it costs more than its first wine; it moves with humidity and the hoops must be driven; a cask gives up its flavour in a few fills; and the forests are planted on a timescale nobody alive will see out.",
  stats: [["Pores", "plugged by tyloses"], ["Watertight", "yes; red oak is not"], ["Rot resistance", "high, hence ships and sills"]],
  uses: "Wine and whisky barrels, boat planking and timber framing, flooring and furniture, railway sleepers.",
  link: "https://en.wikipedia.org/wiki/Quercus_alba"
},
{
  id: "spruce", cat: "natural", name: "Spruce tonewood",
  sub: "Picea, quartersawn soundboard stock", img: "spruce", extra: ["spruce2", "spruce3"],
  hook: "Chosen for one number: stiffness along the grain divided by density, where spruce beats every other wood. A soundboard must be as light and as stiff as possible at once, and slow cold-grown trees do it best.",
  more: "A string moves almost no air; the soundboard it drives must, and to follow the string it must be light, and to carry its pull, stiff. Spruce is long straight thin-walled cells, so it is light, with the cellulose running nearly parallel to the trunk, so it is stiff that way; the ratio beats any hardwood or metal. The board is quartersawn so the rings stand on edge, fifteen to the inch, from trees felled in winter and dried for years; the same ratio put it in the spars of wooden aircraft. The costs: it dents under a fingernail; it splits along the grain as easily as it is stiff along it; it cracks in a dry winter house; the slow mountain trees are dwindling; and its edge over carbon fibre is now tradition and tone, not numbers.",
  stats: [["Stiffness over density", "the highest of any wood"], ["Ring spacing", "one to two millimetres prized"], ["Cut", "quartersawn, rings on edge"]],
  uses: "Guitar, violin and piano soundboards, historically aircraft spars and masts, ladders, light framing.",
  link: "https://en.wikipedia.org/wiki/Tonewood"
},
{
  id: "cork", cat: "natural", name: "Cork",
  sub: "suberised bark of Quercus suber", img: "cork", extra: ["cork2", "cork3"],
  hook: "Fourteen-sided closed cells full of air, and almost alone among materials a Poisson ratio of zero: squeeze it and it does not bulge sideways. That is why a cork fits a neck at all. The tree is peeled, not felled.",
  more: "The cork oak grows a bark of dead cells, each a tiny box of suberin, a waxy polymer that water and gas cross only slowly, stacked in radial rows like a honeycomb. Forty million cells to the cubic centimetre, nine tenths air, float, insulate and spring back from a crush; Hooke, looking at a sliver in 1665, coined the word cell. The walls fold like a concertina rather than spreading, so a squeezed cork keeps its width and presses on the glass for decades. The bark is stripped from the living tree every nine years. The costs: one stopper in a hundred carries the mould taint TCA, which is why screwcaps exist; it is slow, twenty-five years to the first good harvest; the trade is one corner of Iberia; and plastic imitations have most of the volume.",
  stats: [["Poisson ratio", "about zero"], ["Cells", "about 40 million per cubic centimetre"], ["Harvest", "every nine years; the tree lives on"]],
  uses: "Wine closures, flooring and underlay, gaskets, cricket and baseball cores, bulletin boards, spacecraft ablative layers.",
  link: "https://en.wikipedia.org/wiki/Cork_(material)"
},
{
  id: "vegleather", cat: "natural", name: "Vegetable-tanned leather",
  sub: "collagen cross-linked with plant tannins", img: "vegleather", extra: ["vegleather2", "vegleather3"],
  hook: "Tannins from oak or chestnut bark lock the collagen fibres so the hide stops rotting, over weeks in a pit, not hours in a drum. The leather moulds wet, holds its shape dry, and darkens with age instead of wearing.",
  more: "A hide is a felt of collagen fibres, and raw it putrefies; tanning ties the fibres together against bacteria. The old way soaks the dehaired hide in pits of ground bark and water, moving it up stronger liquors over a month or a year while the big tannin molecules bond across the collagen. What comes out is firm, dense, pale tan and heavy, takes a cut edge and a burnish, and can be soaked, formed and dried into a holster; it holds a stamp, which is why saddles are tooled. The costs: a month against a day for chrome, which took nine tenths of the trade; it is stiff and heavy, so it is soles and straps, not jackets; it stains with iron, scorches past sixty degrees and goes brittle dry; and the spent liquors were as foul as any chrome bath, just older.",
  stats: [["Tanning", "30 to 60 days, up to a year"], ["Mouldable", "wet-formed and left to dry"], ["Ages by", "darkening, not failing"]],
  uses: "Saddlery, bridles and belts, shoe soles and welts, bookbinding, holsters, sheaths and tooled work.",
  link: "https://en.wikipedia.org/wiki/Vegetable_tanning"
},
{
  id: "bone", cat: "natural", name: "Bone",
  sub: "collagen with hydroxyapatite mineral", img: "bone", extra: ["bone2", "bone3"],
  hook: "A composite of a brittle mineral and a stretchy protein, in the one ratio that is tough rather than merely hard. The only structural material that rebuilds itself to match its loads: unload it and it dissolves.",
  more: "Collagen fibrils with mineral plates inside them, wound into lamellae, the lamellae wrapped round vessels into osteons, packed into the shell of a long bone and opened into struts at the ends. Each level turns a crack: the mineral gives stiffness, the collagen stretches, the interfaces slide, and the whole takes a blow that would shatter the mineral alone. It is alive, too. Cells dissolve and relay a tenth of the skeleton a year along the lines of stress, so an astronaut loses bone and a tennis player's serving arm gains. The costs: outside the body it is the dried, dead version buttons were made of; it splits along the grain; healing takes weeks and needs the load back; and the self-repair that keeps it tough is what osteoporosis switches off.",
  stats: [["Mineral", "about 60 to 70 percent by weight"], ["Toughness", "about 5 kJ per square metre"], ["Remodels", "about a tenth a year"]],
  uses: "Living skeletons; dried, in buttons, knife handles, needles and dice, bone china and glue; the model for tough composites.",
  link: "https://en.wikipedia.org/wiki/Bone"
},
{
  id: "antler", cat: "natural", name: "Antler",
  sub: "high-collagen bone, shed annually", img: "antler", extra: ["antler2", "antler3"],
  hook: "Bone tuned for impact rather than stiffness: less mineral, more collagen, so it soaks up several times the energy of a leg bone before it breaks. The fastest-growing tissue of any mammal, shed and regrown each year.",
  more: "A stag grows a kilogram of it in a summer, two centimetres a day, drawing calcium from its own skeleton, then sheds the lot after the rut. The tissue is bone with the recipe shifted: about half mineral instead of two thirds, the rest collagen, so it is less stiff than a femur and far harder to snap, as a thing built for crashing into another stag should be. A dense shell wraps a spongy core, grown under velvet. Shed, it was the free material of prehistory: picks that dug the flint mines and Stonehenge, combs, handles, the workshops of Viking York. The costs: it is as hard on tools as bone and splits along its grain; the core is spongy and the wall thin, so pieces are small; it warps drying; and the supply is what the deer left in the wood.",
  stats: [["Work to fracture", "about six times a leg bone"], ["Growth", "up to two centimetres a day"], ["Regrown", "every year, shed after the rut"]],
  uses: "Tool handles and knife scales, buttons and combs, carving, dog chews, prehistoric picks and pressure flakers.",
  link: "https://en.wikipedia.org/wiki/Antler"
},
{
  id: "horn", cat: "natural", name: "Horn",
  sub: "keratin, a natural thermoplastic", img: "horn", extra: ["horn2", "horn3"],
  hook: "Heat it in water and it softens, press it and it holds the new shape, and it welds to itself with heat and pressure alone. Horn was the thermoplastic of the pre-plastic world: lantern panes, windows, spoons, combs.",
  more: "A cow's horn is a sheath of keratin, the protein of hoof and fingernail, grown over a bony core and hollow once the core is out. Boiled it goes leathery, and a horner would split the cone, open it flat between hot iron plates and cut combs and spoons from the sheet, or shave it thin enough to see through for a lantern; two warm pieces pressed together fuse. Dry, it is tough and springy and will not shatter, which is why it was the compression side of the Turkish bow. The costs: it is only as big as the animal, so a sheet is the size of a hand; a comb left on a radiator curls; moth and beetle eat it; it scorches and stinks if the heat is wrong; and celluloid was invented to imitate it and finished the trade in a generation.",
  stats: [["Softens", "in boiling water or steam"], ["Welds", "to itself, heat and pressure"], ["Translucent", "when shaved thin"]],
  uses: "Combs, buttons and spoons, drinking vessels and powder horns, composite bow bellies, lantern panes and windows historically.",
  link: "https://en.wikipedia.org/wiki/Horn_(anatomy)"
},
{
  id: "baleen", cat: "natural", name: "Baleen",
  sub: "keratin plates from filter-feeding whales", img: "baleen", extra: ["baleen2", "baleen3"],
  hook: "Springy, mouldable with heat, splittable into long strips: the stiffening in corsets, umbrella ribs and whips for two centuries. Whalers chased it as hard as oil; spring steel and then plastic made it worthless.",
  more: "A baleen whale has no teeth; from its upper jaw hang a few hundred keratin plates, up to three metres long, fringed into bristles that strain krill from the sea. The plate is keratin tubes in a keratin matrix, so it bends without kinking, springs back, and splits cleanly into strips; steamed, it takes a set. That is spring steel's job done by a material you could cut with a knife, and before steel strip it was worth more than the oil: corset stays, hoop skirts, umbrella ribs, whips, brushes, carriage springs. The costs: a right whale was killed for it, and the right whales were, nearly all of them; it was dear even then, so the hoop skirt went to steel in the 1850s; it absorbs water and warps; it goes brittle with age; and the trade is banned.",
  stats: [["Material", "keratin, like fingernail"], ["Formed", "by steam and pressure"], ["Replaced by", "spring steel, then plastic"]],
  uses: "Historical: corset stays, umbrella ribs, hoop skirts, whips, brushes, carriage springs; now Inuit basketry and museums.",
  link: "https://en.wikipedia.org/wiki/Baleen"
},
{
  id: "amber", cat: "natural", name: "Amber",
  sub: "fossilised tree resin", img: "amber", extra: ["amber2", "amber3"],
  hook: "Tree resin that lost its volatiles and polymerised over tens of millions of years into a true solid. Warm to the touch, it floats in brine and charges when rubbed; its Greek name, elektron, named electricity.",
  more: "A conifer bleeds resin to seal a wound; most rots, but a little, buried without oxygen, slowly loses its oils and cross-links into a hard polymer no solvent touches, and anything caught in it, an ant, a feather, is sealed as it was. The Baltic deposits are forty million years old and have washed onto the beaches since the Stone Age, which is why amber beads turn up in Mycenaean graves. It floats in brine, carves with a knife, polishes to a glow and rubs up a charge that lifts chaff. The costs: it scratches, cracks and darkens in sunlight; it burns; copal, a young resin, is sold as amber and tests only with a hot needle; the inclusions that make a piece valuable are the ones most faked; and the Russian mine that supplies most of it is an open pit.",
  stats: [["Age", "20 to 300 million years"], ["Hardness", "2 to 2.5 Mohs, a fingernail scratches it"], ["Gave us", "the word electron"]],
  uses: "Jewellery and beads, varnish and incense historically, palaeontology through its inclusions.",
  link: "https://en.wikipedia.org/wiki/Amber"
},
{
  id: "shellac", cat: "natural", name: "Shellac",
  sub: "resin secreted by the lac insect", img: "shellac", extra: ["shellac2", "shellac3"],
  hook: "Scraped off twigs and dissolved in alcohol, it dries in minutes to a gloss the next coat melts into. It is edible, blocks odours and stains nothing else will, and it was the first material of the record industry.",
  more: "A scale insect in India sucks sap and sweats out a resin that crusts the twig; the twigs are cut, the crust scraped, melted and stretched into sheets that break into flakes, a kilogram of which is a quarter of a million insects. Dissolved in alcohol it is the French polish of a piano, built up in hundreds of thin coats until the surface is a mirror; it seals knots under paint, coats an apple and a pill, and pressed with slate dust into a disc held the music of half a century. The costs: it is soft and marks under a wet glass; alcohol dissolves it, so spilled gin takes the polish off the table; it goes off in the tin within a year; it is brittle, so a dropped 78 shatters; and a supply that hangs on an insect and a monsoon was why vinyl was welcomed.",
  stats: [["Dries", "in minutes, by evaporation"], ["Recoat", "melts into the layer below"], ["Food safe", "yes, E904"]],
  uses: "French polish and sealing primer, pill and sweet coating, hat stiffener, 78 rpm records historically.",
  link: "https://en.wikipedia.org/wiki/Shellac"
},
{
  id: "guttapercha", cat: "natural", name: "Gutta-percha",
  sub: "trans-polyisoprene from Palaquium sap", img: "guttapercha", extra: ["guttapercha2", "guttapercha3"],
  hook: "Natural rubber's mirror image: the same molecule with one bond flipped, which makes it hard and thermoplastic, not elastic. It insulated the Atlantic telegraph, the one stuff that stayed waterproof under the sea.",
  more: "The latex of a Malayan tree sets to a tough leathery solid that softens in hot water, moulds like clay and hardens again cold; it is polyisoprene, as rubber is, but in the trans form, so it crystallises and will not stretch. Samples reached London in 1843, and within a decade it was golf balls, speaking tubes and, decisively, the wrapping on the copper core of the submarine cables, because it alone shrugged off seawater and pressure for decades. Its last trade is the dentist's: warmed points pressed into a cleaned root canal. The costs: it oxidises in air and light and goes brittle, so the golf balls cracked; the trees were felled to bleed them and forests of Borneo went into cables; it softens at sixty degrees; and polyethylene took over in 1933.",
  stats: [["Isomer", "trans; rubber is cis"], ["Softens", "about 60 degrees"], ["Undersea life", "a century, kept wet"]],
  uses: "Root canal filling points today; submarine cable insulation, golf balls, mouldings and picture cases historically.",
  link: "https://en.wikipedia.org/wiki/Gutta-percha"
},
{
  id: "diatomite", cat: "natural", name: "Diatomaceous earth",
  sub: "fossil diatom silica skeletons", img: "diatomite", extra: ["diatomite2", "diatomite3"],
  hook: "A soft white powder that is billions of glass skeletons, each a sieve. It filters beer, soaks up three times its weight in liquid, and kills insects by scratching through their wax: physics, not poison.",
  more: "A diatom is a single-celled alga with a shell of opal pierced with pores finer than any sieve a machine can make, and when it dies the shell sinks; where they sank for a few million years the bed is a chalk-white rock so light it floats until it wets. Milled, it is a powder that is mostly hole: a gram has twenty square metres of surface, and a packed bed passes water while holding back yeast, which is why it clarifies beer and pools. Its first industrial use was soaking up nitroglycerine: dynamite. The costs: the calcined grades are crystalline silica, which scars lungs; a filter bed is used once and landfilled wet; it is abrasive, cleaning teeth and wearing pumps; and the beds are where the diatoms happened to settle, mostly California and Denmark.",
  stats: [["Porosity", "80 to 90 percent"], ["Surface area", "about 20 square metres a gram"], ["Insecticide", "mechanical: it abrades the wax"]],
  uses: "Beer, wine and pool filtration, absorbent granules and cat litter, mild abrasive in toothpaste, insect powder, dynamite originally.",
  link: "https://en.wikipedia.org/wiki/Diatomaceous_earth"
},
{
  id: "chitin", cat: "natural", name: "Chitin & chitosan",
  sub: "poly-N-acetylglucosamine", img: "chitin", extra: ["chitin2", "chitin3"],
  hook: "The second most abundant polymer on Earth after cellulose, the stuff of every insect shell and crab leg. Strip its acetyl groups and it is chitosan, positively charged, which clumps bacteria and clots blood.",
  more: "Chitin is cellulose with one group swapped on every sugar, which lets the chains bond into stiffer fibres; an insect lays them in sheets, each turned a few degrees from the last like twisted plywood, in a protein matrix it tans hard, and a crab adds chalk. Boiled in alkali it is chitosan, which dissolves in weak acid and carries a positive charge, so it grabs the negative surfaces of bacteria and blood cells: in a gauze it stops arterial bleeding in a minute, in dirty water it drags the particles down. The costs: the raw material is crab and shrimp shell, seasonal and stinking; getting it out takes acid, alkali and heat; the deacetylation varies and so does everything downstream; shellfish allergy extends to the dressing; and it is still a niche.",
  stats: [["Abundance", "second after cellulose"], ["Chitosan", "binds blood cells, clots in a minute"], ["Source", "shellfish waste"]],
  uses: "Haemostatic dressings, wound healing, water treatment flocculant, edible fruit coatings, seed treatment.",
  link: "https://en.wikipedia.org/wiki/Chitin"
},
{
  id: "byssus", cat: "natural", name: "Byssus",
  sub: "mussel threads and their DOPA adhesive", img: "byssus", extra: ["byssus2", "byssus3"],
  hook: "A mussel glues itself to a wet, salted, slimed rock in minutes and stays on through a storm. The trick is an amino acid, DOPA, that shoves water aside; the thread behind it is stiff at the rock, soft at the shell.",
  more: "The foot presses a groove to the rock and fills it with liquid protein that sets in a minute into a thread with a plaque at the end; a few dozen hold it through surf. The plaque proteins are stuffed with DOPA, which bonds to wet mineral where every man-made glue needs the surface dry, and iron ions cross-link the thread's skin into a coat that is hard yet stretches double. The thread is collagen graded along its length, five times softer at the shell than at the rock; the Pinna's threads are fine enough to spin into sea silk. The costs: the glue is a protein a mussel makes milligrams of, so every synthetic is a DOPA-decorated polymer, not quite as good; a thread cannot be re-stuck; the same trick fouls ships; and the Pinna is dying of a parasite.",
  stats: [["Bond", "sets under water, on wet rock"], ["Thread", "graded stiff to soft along its length"], ["Key molecule", "DOPA, iron-cross-linked"]],
  uses: "Model for surgical and marine adhesives and wet-setting coatings; historically spun into sea silk.",
  link: "https://en.wikipedia.org/wiki/Byssus"
},
{
  id: "toothenamel", cat: "natural", name: "Tooth enamel",
  sub: "96% hydroxyapatite prisms", img: "toothenamel", extra: ["toothenamel2", "toothenamel3"],
  hook: "The hardest substance the body makes: almost pure mineral, laid in prisms that run from the inside out and cross so a crack cannot follow one. No living cells, so it never repairs; a scratch is for life.",
  more: "Before the tooth erupts, a sheet of cells lays down hydroxyapatite in rods a few micrometres across, running from the dentine to the surface and weaving in bands; then the cells die and are shed. What remains is 96 percent mineral, harder than steel on the Mohs scale and good for eighty years of chewing, because the rods and the sheaths between them turn cracks aside and the softer dentine beneath takes the shock. It is the most durable thing a body leaves; palaeontology is mostly teeth. The costs: no cells means no repair, only a slow exchange with saliva that fluoride tips the right way; acid dissolves it, which is what plaque and cola do, and a cavity is a hole for ever; it chips rather than dents; and a filling is a patch, not a regrowth.",
  stats: [["Mineral", "96 percent by weight"], ["Hardness", "about 5 Mohs"], ["Repair", "none; no cells"]],
  uses: "Chewing, for about eighty years without maintenance; the fossil record, mostly.",
  link: "https://en.wikipedia.org/wiki/Tooth_enamel"
},
{
  id: "pumice", cat: "natural", name: "Pumice",
  sub: "gas-frothed volcanic glass", img: "pumice", extra: ["pumice2", "pumice3"],
  hook: "Lava so full of dissolved gas that it foams as the pressure drops and freezes mid-bubble. The only common rock that floats, and rafts of it have crossed oceans after eruptions, carrying barnacles to new coasts.",
  more: "A sticky silica-rich magma holds gas in solution under the weight of the mountain; when the vent opens it comes out all at once, as from a shaken bottle, and the melt froths and is quenched before the bubbles escape, so the rock is nine tenths void with glass walls thinner than paper. It floats until the pores waterlog, which can take years, and the walls are sharp enough to cut skin and denim: jeans were stonewashed with it, heels are. Ground, it set Roman concrete and fills the lightweight blocks of Italy. The costs: it is weak, crushing under a boot; it drinks water and freezes apart; the glass abrades everything, pumps included; the quarries on Lipari are hills visibly going; and a raft of it chokes every intake pipe in the harbour it reaches.",
  stats: [["Porosity", "about 90 percent"], ["Floats", "for months to years, until waterlogged"], ["Hardness", "about 6 Mohs, abrasive"]],
  uses: "Lightweight blocks and aggregate, abrasive stones and stonewashing, horticultural grit, filter beds, pozzolan.",
  link: "https://en.wikipedia.org/wiki/Pumice"
},
{
  id: "mica", cat: "natural", name: "Mica",
  sub: "muscovite and phlogopite sheet silicate", img: "mica", extra: ["mica2", "mica3"],
  hook: "Splits into sheets a few microns thick, flat to the atom, transparent, insulating to 500 degrees. Before glass came large and flat it was the window in every stove door and lamp; it is still under power transistors.",
  more: "The crystal is a stack of silicate sheets held together by a single layer of potassium ions, and a fingernail parts them: a book of it peels into leaves thinner than paper, clear, flexible, inert, a better insulator than almost anything, and unbothered by heat that chars every plastic. Russians glazed windows with it, stoves had panes, and the electrical age ran on it: radio capacitors, the washer that passes a transistor's heat to its sink while holding off the volts, the wall of every toaster element. The costs: the big clear books come from a few pegmatites in India and Brazil, split by hand, so sheet mica is dear; it scratches; its edges flake to dust; it will not bend far; and polymer films have taken most of its jobs, leaving it the hot ones.",
  stats: [["Cleavage", "to sheets about a micrometre thick"], ["Dielectric strength", "about 100 kV per mm"], ["Service temperature", "to about 500 degrees"]],
  uses: "Capacitors and transistor washers, heater element insulation, furnace and stove windows, AFM substrates, pearlescent pigments.",
  link: "https://en.wikipedia.org/wiki/Mica"
},
{
  id: "asbestos", cat: "natural", name: "Asbestos",
  sub: "chrysotile and amphibole silicate fibres", img: "asbestos", extra: ["asbestos2", "asbestos3"],
  hook: "A rock that comes out of the ground as a soft spinnable fibre, does not burn and shrugs off acid: a real miracle material, used everywhere for a century. The same fibres lodge in the lung for life.",
  more: "Chrysotile is a serpentine whose sheets roll into tubes a few tens of nanometres across, bundled into veins of silky fibre that can be spun like cotton; the amphibole kinds, blue and brown, are straight needles. Woven, it made gloves and brake linings; in cement it roofed the world; sprayed, it fireproofed every steel frame of the mid-century, and lagged every pipe. The costs: a fibre thin enough to float and too long for the lung's cleaning cells stays there, and thirty years later it is asbestosis, lung cancer or mesothelioma, a tumour almost nothing else causes; the amphiboles are the worst; it is banned in seventy countries and still mined in Russia; and what is in buildings is safest sealed and left, so the trade now is in not touching it.",
  stats: [["Melting", "above 1,000 degrees"], ["Fibre", "0.1 to 10 µm, respirable"], ["Status", "banned in some 70 countries"]],
  uses: "None permitted in most countries. Historically: sprayed fireproofing, pipe lagging, cement sheet and pipe, brake linings, gloves and cloth.",
  link: "https://en.wikipedia.org/wiki/Asbestos"
},
{
  id: "nephrite", cat: "natural", name: "Nephrite jade",
  sub: "felted tremolite–actinolite amphibole", img: "nephrite", extra: ["nephrite2", "nephrite3"],
  hook: "Not especially hard, a steel knife nearly scratches it, but the toughest natural stone there is, because its crystals grow as a matted felt of interlocking fibres. Neolithic adzes of it outcut bronze.",
  more: "Tremolite and actinolite normally grow as needles; squeezed in a serpentine belt they grow as a tangle of fibres a micrometre across, so a crack starting in one bundle meets the next at an angle and stops. The result has the hardness of window glass, a toughness several times any other mineral, and polishes to a wet look. It was worked by grinding with sand and water, slowly, and the people who had it, in China, New Zealand and the Alps, made of it the axes that mattered and then the objects that mattered more: the cong, the adze, the hei-tiki. The costs: it cannot be flaked or cast, so every piece is weeks of abrasion; most of a boulder is waste; it is confused with jadeite and serpentine, and sold as them; and the New Zealand fields are protected.",
  stats: [["Hardness", "6 to 6.5 Mohs"], ["Toughness", "the highest of any natural stone"], ["Structure", "felted fibres"]],
  uses: "Carving and jewellery, ceremonial and heirloom objects, prehistoric axe and adze blades, mortars.",
  link: "https://en.wikipedia.org/wiki/Nephrite"
},
{
  id: "granite", cat: "natural", name: "Granite surface plate",
  sub: "lapped black diabase or granite", img: "granite", extra: ["granite2", "granite3"],
  hook: "The reference flat of the machine shop, and it beats cast iron on every count: it does not rust, a knock raises no burr, it damps vibration, it barely moves with heat. Grade AA is flat to two microns over a metre.",
  more: "A slab of fine black igneous rock, lapped with ever finer abrasive until a gauge dragged across it reads flat to a few millionths, and set on three points so the floor cannot twist it; every height gauge in the shop starts from it. Iron was the material until the war took the iron and quarry offcuts proved better: the stone wears slowly and evenly; it is non-magnetic, so swarf does not cling; a dropped part leaves a chip below the surface, not a burr above it; it absorbs vibration iron would ring with; and it expands a third as much per degree. The costs: it is heavy, a tonne for a metre square; it drinks oil and water, and a wet patch swells for an hour; a scratch cannot be scraped back as iron can, only relapped; and it chips at the edges.",
  stats: [["Flatness", "about 2 µm per metre, grade AA"], ["Damage mode", "chips, never burrs"], ["Damping", "far better than iron"]],
  uses: "Metrology surface plates and inspection tables, CMM bases, machine tool beds, optical benches.",
  link: "https://en.wikipedia.org/wiki/Surface_plate"
},
{
  id: "washi", cat: "natural", name: "Washi",
  sub: "long-fibre kozo bark paper", img: "washi", extra: ["washi2", "washi3"],
  hook: "Made from the inner bark of mulberry, whose fibres are ten times longer than wood pulp's, so the sheet is strong enough to be a wall and thin enough to be a window. Conservators mend ancient documents with it.",
  more: "The bast of kozo, the paper mulberry, is steamed off the branch, cooked in lye, picked clean by hand and beaten, not ground, so the fibres stay a centimetre long; a root mucilage keeps them from clumping in the vat, and the sheet is formed by throwing the slurry across a bamboo screen in waves, layer over layer, then brushed onto a board to dry. No lignin, no acid, no filler: the fibres tangle into a sheet that tears like cloth, folds without cracking, glows evenly and is still white after a millennium. The costs: a sheet is hand work, so it costs what cloth costs; it is soft and fuzzes under an eraser; it drinks ink unless sized; the kozo is a crop a handful of villages still grow; and machine-made washi is wood pulp with a little bark in it.",
  stats: [["Fibre length", "about 10 mm"], ["Chemistry", "neutral, no lignin"], ["Life", "over a thousand years"]],
  uses: "Shoji screens and lampshades, art conservation and repair tissue, printmaking, calligraphy, banknote stock.",
  link: "https://en.wikipedia.org/wiki/Washi"
},
{
  id: "vellum", cat: "natural", name: "Parchment & vellum",
  sub: "limed, stretched and scraped animal skin", img: "vellum", extra: ["vellum2", "vellum3"],
  hook: "Not tanned: a skin soaked in lime, stretched wet on a frame and scraped until the collagen dries flat and under tension. It lasts a thousand years, can be scraped and rewritten, and it cockles with the weather.",
  more: "A calf, goat or sheep skin is soaked in lime until the hair slips, scraped, laced into a frame and dried under tension while a parchmenter thins it with a curved knife; chalk and pumice finish it. Leather is collagen cross-linked by tannin; parchment is the same collagen dried stretched, so it stays a living thing that swells when the air is damp and tightens when it is dry. That is why a book of it has clasps, why it can be erased with a blade and reused, and why British Acts of Parliament were written on it until 2017. The costs: a skin is one animal and a big Bible is a herd; it cockles and stiffens with every change of humidity; damp lets mould in, after which it is glue; insects eat it; and it costs a hundred times paper, which is why paper won.",
  stats: [["Survival", "over a thousand years, kept dry"], ["Erasable", "scrape and rewrite"], ["Source", "calf, goat, sheep; one skin a leaf or two"]],
  uses: "Manuscripts, charters and legal documents, drumheads and banjo heads, bookbinding, calligraphy, lampshades.",
  link: "https://en.wikipedia.org/wiki/Parchment"
},
{
  id: "beeswax", cat: "natural", name: "Beeswax",
  sub: "long-chain ester and hydrocarbon wax", img: "beeswax", extra: ["beeswax2", "beeswax3"],
  hook: "Secreted by bees to a recipe unchanged in millions of years, melting just above body heat. It takes a mould impression perfectly and burns away without a trace, which is why bronze casting began with it.",
  more: "Young worker bees sweat it from the abdomen as flakes the size of a pinhead and build the comb from them, at eight kilograms of honey per kilogram of wax; the beekeeper melts cappings and old comb into blocks. It is a mix of long esters and hydrocarbons so consistent that a Pharaoh's sample matches a modern hive; it softens in the hand, melts at 63 degrees, repels water and never goes rancid. Warm, it is modelled, invested in clay and burned out to leave the cavity the bronze fills, which is how every statue from the Bronze Age to Rodin was cast; it also waxes thread and polishes wood. The costs: it is soft and takes every fingerprint; it sags in a hot room; it is dear, since the bees have other work; and nearly every job it had has gone to paraffin.",
  stats: [["Melting", "62 to 64 degrees"], ["Composition", "unchanged for millennia"], ["Burns out", "no residue"]],
  uses: "Lost-wax casting patterns, candles, wood polish and waxed thread, cosmetics, food wraps, comb foundation.",
  link: "https://en.wikipedia.org/wiki/Beeswax"
},
{
  id: "cuttlebone", cat: "natural", name: "Cuttlebone",
  sub: "aragonite chambered buoyancy structure", img: "cuttlebone", extra: ["cuttlebone2", "cuttlebone3"],
  hook: "A buoyancy tank of stacked chambers braced by pillars: ninety percent empty space that still takes the pressure at 200 metres. Jewellers saw one in half, press a model into the soft face and pour silver straight in.",
  more: "The cuttlefish is a squid with an internal shell, a stack of aragonite floors a few tenths of a millimetre apart held up by wavy pillars under a hard plate; the animal pumps liquid in and out of the chambers to trim its depth, so the stack must stay rigid under pressures that crush a can and weigh almost nothing. It washes up by the thousand, and since the chambered side cuts like cheese and takes a thousand degrees, a silversmith can press a pattern into it, cut a sprue, bind the halves and pour, the layers printing as a signature. The costs: a mould is good for one pour; the detail is coarser than lost wax; the chambers collapse below a few hundred metres; it crumbles; and as a calcium block for a budgie it is cheaper than as anything else.",
  stats: [["Porosity", "about 90 percent"], ["Crush depth", "about 200 metres"], ["Casting", "one pour per mould"]],
  uses: "One-off silver and pewter casting, calcium for caged birds, polishing powder and toothpaste historically, a pencil for tailors.",
  link: "https://en.wikipedia.org/wiki/Cuttlebone"
},
{
  id: "nanocellulose", cat: "natural", name: "Nanocellulose",
  sub: "cellulose nanofibrils and nanocrystals", img: "nanocellulose", extra: ["nanocellulose2", "nanocellulose3"],
  hook: "Wood pulp taken apart to the crystalline fibrils that make the fibre. At that scale cellulose is stiffer than Kevlar, transparent, and grows on trees: films, aerogels and reinforcements from what used to be paper.",
  more: "A paper fibre is a bundle of fibrils a few nanometres wide, and it can be opened: grind the pulp through a homogeniser and it comes out as a clear gel of fibrils, mostly water; boil it in acid instead and the soft parts dissolve, leaving rod crystals that dry into films coloured like a beetle's wing. The crystal is nearly as stiff as steel at a fifth the density, so a sheet of dried fibrils is a clear paper stronger than most plastics, a little gel makes paint hold its shape, and freeze-dried it is an aerogel. The costs: it is 98 percent water, and drying it without the fibrils gluing together is the whole problem; the homogeniser eats energy; the films soften in moist air; and after twenty years the market is a few thousand tonnes of thickener.",
  stats: [["Tensile modulus", "about 140 GPa for the crystal"], ["Width", "3 to 20 nm"], ["Feedstock", "wood pulp, cotton, bacteria"]],
  uses: "Thickeners for paints, foods and drilling mud, composite reinforcement, transparent films and barrier coatings, aerogels, wound dressings.",
  link: "https://en.wikipedia.org/wiki/Nanocellulose"
},

/* ---------- SEMICONDUCTORS & OPTICS ---------- */
{
  id: "silicon", cat: "electronic", name: "Monocrystalline silicon",
  sub: "Czochralski-grown Si boule", img: "silicon", extra: ["silicon2", "silicon3"],
  hook: "A single crystal 300 mm across and two metres long, pulled from a melt on one seed, an atom in a billion wrong. Not the best semiconductor, but it grows a perfect insulating oxide on itself; that decided the age.",
  more: "Quartz sand is reduced to silicon in an arc furnace, distilled as a gas to parts per trillion and deposited back as polysilicon; that is melted, a seed is dipped in and drawn upward, turning, a few millimetres a minute, and the melt freezes onto it in the seed's own lattice. The boule is ground round, sawn with diamond wire into wafers and polished flatter than any other object its size. Heated in oxygen it grows a glass skin that insulates and seals the surface, which germanium could not do and is why every transistor since the 1960s is silicon. The costs: a fab is the dearest building humans put up; the band gap is indirect, so it will not make light; a dropped wafer is dust; and at 450 mm the boules grew too heavy to pull.",
  stats: [["Purity", "eleven nines"], ["Wafer", "300 mm; 450 stalled"], ["Band gap", "1.12 eV, indirect"]],
  uses: "Every integrated circuit, most solar cells, MEMS sensors, wafer-scale optics.",
  link: "https://en.wikipedia.org/wiki/Monocrystalline_silicon"
},
{
  id: "gaas", cat: "electronic", name: "Gallium arsenide",
  sub: "GaAs, direct bandgap III-V", img: "gaas", extra: ["gaas2", "gaas3"],
  hook: "Electrons move five times faster through it than through silicon, and unlike silicon it can emit light, since its band gap is direct. Brittle, dear and arsenic-bearing, it goes only where silicon cannot.",
  more: "Gallium and arsenic in equal parts make a crystal with silicon's structure and a band gap of 1.42 electron volts that an electron can drop straight across, giving off a photon, where in silicon the drop needs a lattice vibration and the energy goes to heat. So it makes the infrared LED in every remote, the laser in every fibre link and the fast transistors in every phone's radio; in layers on germanium it is the solar cell on every satellite. The costs: it has no native oxide worth the name, so it never got cheap logic; the wafers are small, brittle and ten times the price; arsenic is arsenic, so the waste and the dust are poison; it conducts heat a third as well as silicon; and on Earth only a thousand suns of concentration make its solar cells pay.",
  stats: [["Electron mobility", "about five times silicon"], ["Band gap", "1.42 eV, direct"], ["Solar record", "about 29 percent single junction"]],
  uses: "Phone radio front ends, laser diodes and infrared LEDs, satellite and concentrator solar cells, microwave circuits.",
  link: "https://en.wikipedia.org/wiki/Gallium_arsenide"
},
{
  id: "gan", cat: "electronic", name: "Gallium nitride",
  sub: "GaN, wide bandgap III-V", img: "gan", extra: ["gan2", "gan3"],
  hook: "Two Nobel-winning decades went into making it emit blue, which gave us white LEDs. The same wide band gap lets it switch hundreds of volts at megahertz with little loss, so a laptop charger is now matchbox-sized.",
  more: "Nobody could grow it clean or dope it p-type until Akasaki, Amano and Nakamura did both in the late 1980s, and the blue LED that followed, under a yellow phosphor, is the white light in every bulb since. The 3.4 electron volt gap that makes the blue photon also lets the crystal stand ten times the field silicon takes, so a GaN transistor can be small and fast, switching at frequencies where a power supply's transformer shrinks to almost nothing, and quick enough to amplify radar and 5G. The costs: there is no cheap GaN wafer, so it is grown as a film on sapphire or silicon, full of defects; the power devices are young; gallium supply is China's; and it costs several times silicon per watt, so the charger has it and the washing machine does not.",
  stats: [["Band gap", "3.4 eV"], ["Breakdown field", "about ten times silicon"], ["Blue LED", "Nobel Prize 2014"]],
  uses: "White and blue LEDs, Blu-ray lasers, fast chargers and power supplies, EV inverters, radar and 5G amplifiers.",
  link: "https://en.wikipedia.org/wiki/Gallium_nitride"
},
{
  id: "germanium", cat: "electronic", name: "Germanium",
  sub: "Ge, the first transistor material", img: "germanium", extra: ["germanium2", "germanium3"],
  hook: "The first transistors were germanium; silicon pushed it out because germanium's oxide dissolves in water. It came back anyway: it is transparent to thermal infrared, so nearly every thermal camera looks through it.",
  more: "The transistors of 1947 and the 1950s were germanium, because it could be purified first; but its band gap is small, so a device leaks above seventy degrees, and its oxide washes off, so the surface could never be sealed, and by 1965 silicon had the market. The metal is opaque to the eye and clear from two to fourteen micrometres, so a disc of it is the lens of every thermal imager, and grown ultra-pure and cooled it is the detector for gamma-ray spectroscopy. The costs: it is scarce, a by-product of zinc at a few hundred tonnes a year, and the price follows China's export mood; the lens must be coated or it reflects half the light; it goes opaque when hot; and a germanium transistor in a vintage amp drifts with the room, which guitarists call tone.",
  stats: [["Band gap", "0.67 eV"], ["Infrared window", "2 to 14 µm"], ["Oxide", "water-soluble, its downfall"]],
  uses: "Thermal imaging lenses and windows, gamma-ray detectors, SiGe high-speed transistors, fibre-optic core dopant, solar cell substrates.",
  link: "https://en.wikipedia.org/wiki/Germanium"
},
{
  id: "hgcdte", cat: "electronic", name: "Mercury cadmium telluride",
  sub: "HgCdTe, tunable IR detector", img: "hgcdte", extra: ["hgcdte2", "hgcdte3"],
  hook: "Change the mercury to cadmium ratio and the band gap sweeps from zero to 1.5 electron volts, so a detector can be tuned to any infrared band. Nothing else does that, which is why it is in the best imagers and Webb.",
  more: "Mercury telluride has no band gap and cadmium telluride a wide one; alloy them and the gap lands wherever the recipe puts it, so one crystal can be grown to see starlight, a hot engine or a warm body. An array of such diodes bonded pixel by pixel to a silicon readout is the focal plane of a thermal sight, a weather satellite or Webb's NIRCam, whose purple sensors are four megapixels of it. The costs: a small band gap means thermal noise, so the array lives at 77 kelvin on a cooler, which is weight, power and a short life; mercury is volatile and poisonous, so the crystal is grown slowly on cadmium zinc telluride substrates that cost more than most finished chips; the composition drifts across a wafer, so yields are poor; and export is controlled.",
  stats: [["Cutoff", "tunable from 1 to 30 µm"], ["Operating temperature", "usually 77 K"], ["Alloy", "Hg₁₋ₓCdₓTe"]],
  uses: "Military and astronomical infrared arrays, Webb and Euclid detectors, weather satellites, gas spectroscopy.",
  link: "https://en.wikipedia.org/wiki/Mercury_cadmium_telluride"
},
{
  id: "perovskitepv", cat: "electronic", name: "Halide perovskite",
  sub: "CH₃NH₃PbI₃ and relatives", img: "perovskitepv", extra: ["perovskitepv2", "perovskitepv3"],
  hook: "Solar cell efficiency went from 3 percent to 27 in a decade, with a crystal printed from solution at the heat of a cup of coffee. It still dies in damp heat, and that alone keeps it from the market.",
  more: "Dissolve lead iodide and methylammonium iodide, spin the solution onto glass and warm it, and they crystallise into the perovskite lattice, lead and iodine cages with a small organic ion rattling inside, which absorbs sunlight in a film half a micrometre thick. It was found in a dye-cell lab in 2009 at 3.8 percent and chased by a thousand groups to 27, and since the band gap tunes by swapping the halide, a perovskite layer on a silicon cell catches the blue light silicon wastes: the pair has passed 34 percent. The costs: the crystal dissolves in water, loses iodine in heat and ultraviolet, so a module meant to last twenty-five years has lasted a few; the lead is lead, soluble, in a panel rained on; and scaling spoils the film.",
  stats: [["Efficiency", "3.8 percent in 2009, 27 now; 34 in tandem"], ["Processing", "from solution, under 150 degrees"], ["Weakness", "moisture, heat, light"]],
  uses: "Tandem cells on silicon, flexible and indoor photovoltaics, X-ray detectors, LEDs; first commercial modules shipping.",
  link: "https://en.wikipedia.org/wiki/Perovskite_solar_cell"
},
{
  id: "ito", cat: "electronic", name: "Indium tin oxide",
  sub: "ITO transparent conductor", img: "ito", extra: ["ito2", "ito3"],
  hook: "A material that should not exist: metals conduct and block light, insulators pass light and block current. Doped indium oxide has its plasma edge beyond red, so it passes 90 percent of daylight and still conducts.",
  more: "Indium oxide is a wide-gap insulator; dope a tenth of the indium with tin and each tin atom donates an electron, so the film has free carriers like a metal, but few enough that their plasma frequency falls in the infrared, and visible light passes over their heads while a current flows through them. Sputtered a hundred nanometres thick onto glass it is the invisible electrode on both plates of every LCD, the sensing grid of every touchscreen, the top contact of most thin-film solar cells. The costs: indium is a by-product of zinc at a few hundred tonnes a year and the price has swung tenfold; the film is a ceramic that cracks when bent; and it is sputtered in vacuum, slow and dear for a tenth of a micrometre.",
  stats: [["Transmission", "about 90 percent"], ["Sheet resistance", "10 to 100 ohms per square"], ["Problem", "indium is scarce; the film is brittle"]],
  uses: "Touchscreens, LCD and OLED electrodes, thin-film solar cells, heated and low-emissivity glazing, EMI-shielding windows.",
  link: "https://en.wikipedia.org/wiki/Indium_tin_oxide"
},
{
  id: "linbo3", cat: "electronic", name: "Lithium niobate",
  sub: "LiNbO₃, the silicon of photonics", img: "linbo3", extra: ["linbo32", "linbo33"],
  hook: "Piezoelectric, pyroelectric, electro-optic and nonlinear in one crystal. Put a voltage across it and its refractive index shifts, which stamps data onto a laser beam at a hundred gigabits a second.",
  more: "Grown by the same Czochralski pull as silicon, it is sliced on whichever cut the job wants: an electro-optic cut for modulators, where a waveguide splits in two, a voltage on one arm slows its light, and the recombined beam is bright or dark with the data, faster than electronics can switch a laser; a piezoelectric cut for the surface acoustic wave filters that pick a phone's band out of the air. The costs: the index change per volt is small, so a modulator is centimetres long and needs several volts; it is soft, cleaves and etches badly, so waveguides were diffused rather than cut for forty years; its pyroelectricity charges and cracks it when the temperature changes; and it is lithium, which the batteries want too.",
  stats: [["Modulation", "over 100 GHz"], ["Also", "piezo, pyro, nonlinear"], ["Grown by", "Czochralski, like silicon"]],
  uses: "Fibre-optic modulators, SAW filters in every phone, frequency doublers for green lasers, Q-switches, optical isolators.",
  link: "https://en.wikipedia.org/wiki/Lithium_niobate"
},
{
  id: "yig", cat: "electronic", name: "Yttrium iron garnet",
  sub: "YIG, Y₃Fe₅O₁₂", img: "yig", extra: ["yig2", "yig3"],
  hook: "A magnetic insulator with the narrowest ferromagnetic resonance, so a polished sphere of it a millimetre across is a microwave filter with a Q in the thousands, tuned by the current in the magnet round it.",
  more: "Iron oxide in a garnet lattice with yttrium holding it apart: the irons sit on two kinds of site with moments opposed, leaving a net magnetisation, and the oxygen between them makes the crystal an insulator, so a microwave field drives the spins round without the eddy currents that damp a metal. The spins precess at a frequency set by the field, in step to a fraction of an oersted, so a sphere between two loops passes only that frequency; sweep the electromagnet and the filter walks from one to forty gigahertz. The costs: the sphere is polished to a fraction of a micrometre and oriented by hand, which is why a YIG filter costs what it costs; the resonance drifts with temperature; and the magnet is heavy and hungry.",
  stats: [["Line width", "under half an oersted"], ["Q", "over 10,000"], ["Tuning", "by magnetic field, 1 to 40 GHz"]],
  uses: "Tunable microwave filters and oscillators, spectrum analysers, optical isolators, magnonics research.",
  link: "https://en.wikipedia.org/wiki/Yttrium_iron_garnet"
},
{
  id: "ggg", cat: "electronic", name: "Gadolinium gallium garnet",
  sub: "GGG substrate crystal", img: "ggg", extra: ["ggg2", "ggg3"],
  hook: "Grown entirely to be a floor for something else: its lattice matches the magnetic garnets to a fraction of a percent. It carried bubble memory, carries optical isolators now, and made a convincing fake diamond.",
  more: "Gadolinium gallium garnet is YIG's structure with gallium for iron and gadolinium for yttrium, which makes it colourless, non-magnetic and 12.383 ångströms across the unit cell where the iron garnets are within a hundredth of that. Dip a polished wafer of it into a molten flux of magnetic garnet and a film grows on it in its own lattice, which bubble memory needed in 1975 and Faraday rotators need today. The bubbles lost to the hard disk, but the isolator in every laser transmitter keeps the crystal in production, and the boule cut on the brilliant sold as diamond until cubic zirconia undercut it. The costs: it is a substrate, so its value is whatever grows on it; gadolinium and gallium are neither cheap nor common; and it darkens under ultraviolet.",
  stats: [["Lattice match", "under 0.1 percent to the iron garnets"], ["Role", "substrate, not device"], ["Also", "a 1970s diamond simulant"]],
  uses: "Substrates for magnetic garnet films, Faraday rotators and optical isolators, laser host crystals, cryogenic cooling salts.",
  link: "https://en.wikipedia.org/wiki/Gadolinium_gallium_garnet"
},
{
  id: "tisapphire", cat: "electronic", name: "Ti:sapphire",
  sub: "titanium-doped Al₂O₃ laser crystal", img: "tisapphire", extra: ["tisapphire2", "tisapphire3"],
  hook: "The widest gain band of any laser crystal: it lases from 650 to 1100 nm. A wide spectrum permits a short pulse, so this is the crystal of femtosecond light, bursts shorter than a molecule takes to vibrate.",
  more: "Sapphire with a few hundredths of a percent of titanium in place of aluminium, cut into a slab a few millimetres long with its ends at Brewster's angle. Pumped with green light the titanium ions emit red and near-infrared across a band so broad that a cavity can be tuned over it like a radio, or, with every colour locked in step, fire a pulse of a few femtosecond, and a chain of them gives the petawatt bursts that got Strickland and Mourou their Nobel. The costs: the pump must itself be a laser, green and watts strong; the crystal wants hard cooling or the beam lenses itself in the heat; a femtosecond system costs as much as a house; and cheaper fibre lasers have taken every job that does not need tuning.",
  stats: [["Tuning", "650 to 1100 nm"], ["Pulse", "under 10 femtoseconds"], ["Pumped by", "a green laser, 532 nm"]],
  uses: "Femtosecond and tunable lasers, two-photon microscopy, LASIK flap cutting, attosecond and high-field physics, frequency combs.",
  link: "https://en.wikipedia.org/wiki/Ti-sapphire_laser"
},
{
  id: "bbo", cat: "electronic", name: "BBO crystal",
  sub: "β-barium borate, nonlinear optic", img: "bbo", extra: ["bbo2", "bbo3"],
  hook: "Light goes in at one colour and comes out at twice the frequency, because the crystal's response to a strong field is not quite linear. Run it backwards and one violet photon becomes two entangled ones.",
  more: "A crystal with no centre of symmetry, so a strong light field pushes its electrons further one way than the other and the distorted wave carries a harmonic. Cut at the right angle the two colours travel at the same speed and build on each other, so green comes out of infrared, ultraviolet out of green; it is clear to 190 nanometres and survives fields that crater most crystals, so it is the doubler on big pulsed lasers. The reverse, a pump photon splitting into two born at the same instant, is the source of entangled pairs in most quantum optics experiments. The costs: conversion is a few tens of percent at best; it is soft and fogs in damp air, so it lives sealed or coated; and walk-off between the beams limits how long a crystal can be.",
  stats: [["Transparent", "190 to 3500 nm"], ["Damage threshold", "among the highest"], ["Does", "doubling, tripling, photon pairs"]],
  uses: "Frequency doubling and tripling, optical parametric oscillators, entangled photon sources, Pockels cells, autocorrelators.",
  link: "https://en.wikipedia.org/wiki/Barium_borate"
},
{
  id: "calcite", cat: "electronic", name: "Calcite",
  sub: "CaCO₃, optical-grade Iceland spar", img: "calcite", extra: ["calcite2", "calcite3"],
  hook: "Put a clear rhomb on a page and read two lines, because the crystal bends the two polarisations of light differently and splits a beam in two. Huygens puzzled over it in 1690; every polariser descends from it.",
  more: "Its carbonate groups all lie flat in one plane, so light polarised along it sees a different electron density from light polarised across it: an index of 1.658 one way and 1.486 the other, the largest of any common mineral. The clear rhombs came from one mine at Helgustadir in east Iceland, which named it and supplied the world's Nicol prisms, two wedges cemented with balsam so that one ray is thrown out sideways and only polarised light passes, the heart of the petrographic microscope. The costs: the Icelandic mine is worked out and the clean pieces now come smaller, from Mexico, China and Brazil; it is soft, cleaves at a knock and dissolves in weak acid; and for most jobs a sheet of Polaroid film does what the prism did.",
  stats: [["Birefringence", "0.172, the largest common"], ["Splits", "into two polarised rays"], ["Source", "Iceland spar, now Mexico and China"]],
  uses: "Polarising prisms (Nicol, Glan-Thompson, Wollaston), optical isolators, polarimeters, petrographic microscopy.",
  link: "https://en.wikipedia.org/wiki/Iceland_spar"
},
{
  id: "caf2", cat: "electronic", name: "Calcium fluoride",
  sub: "CaF₂, deep-UV optical crystal", img: "caf2", extra: ["caf22", "caf23"],
  hook: "Clear from 130 nm in the vacuum ultraviolet out to 10 micrometres in the infrared, a wider window than any glass. It also barely disperses, so a lens of it corrects the colour fringing that glass alone cannot.",
  more: "Calcium and fluorine bond so strongly that the electrons need deep ultraviolet to stir and the light, stiff ions do not absorb until far into the infrared: a window seven octaves wide. Within it the index changes little with colour, an Abbe number near 95 to glass's 60, and oddly enough that a fluorite element paired with glass brings three colours to one focus: the apochromatic telescope, the telephoto with the pale ring. Grown pure and large it is the lens of the 193 nanometre chip steppers. The costs: it is soft and cleaves on an octahedron; it expands three times as fast as glass and cracks under thermal shock; it is birefringent under stress, which plagued lithography; and a clean boule costs enough that Canon learned to grow its own.",
  stats: [["Range", "0.13 to 10 micrometres"], ["Abbe number", "95, very low dispersion"], ["Soft", "Mohs 4, cleaves"]],
  uses: "Apochromatic camera, telescope and microscope lenses, deep-UV lithography optics, FTIR windows, excimer laser optics.",
  link: "https://en.wikipedia.org/wiki/Calcium_fluoride"
},
{
  id: "znse", cat: "electronic", name: "Zinc selenide",
  sub: "CVD-grown ZnSe", img: "znse", extra: ["znse2", "znse3"],
  hook: "An orange-yellow glass to the eye, and the standard lens for a CO₂ laser at 10.6 micrometres because it absorbs almost nothing there. A lens passing four kilowatts must not warm, or it bends the beam it focuses.",
  more: "It is grown as a thick plate by chemical vapour deposition over days, a polycrystalline slab without a melt-grown crystal's inclusions. Its band gap sits in the blue, so it is yellow, and its lattice vibrations lie beyond 20 micrometres, so it is clear through the whole thermal infrared and the visible too, so a red aiming beam can share the cutting beam's path. Its absorption at 10.6 micrometres is a few parts in ten thousand per centimetre, so the focusing lens of a cutter, the output window of the tube and the spectrometer window are all made of it. The costs: it is soft and scratches; the dust from machining it is toxic; it is dear; and one speck of spatter on it absorbs, heats and cracks it, which is why cutter lenses are a consumable.",
  stats: [["Transmits", "0.6 to 21 micrometres"], ["Absorption", "under 0.0005 per cm at 10.6 micrometres"], ["Soft", "Knoop 120, scratches"]],
  uses: "CO₂ laser lenses, windows and mirrors, thermal imaging optics, infrared spectrometer windows, blue-green laser diode substrates.",
  link: "https://en.wikipedia.org/wiki/Zinc_selenide"
},
{
  id: "yagce", cat: "electronic", name: "YAG:Ce phosphor",
  sub: "cerium-doped yttrium aluminium garnet", img: "yagce", extra: ["yagce2", "yagce3"],
  hook: "The yellow powder that makes a blue LED look white. It swallows part of the blue and gives back broad yellow; leftover blue plus yellow reads as white. Nearly every white LED is a blue chip under a dot of this.",
  more: "The garnet with a few percent of its yttrium swapped for cerium: the crystal field around the cerium ion makes it absorb at 450 nanometres, where a gallium nitride chip emits, and give back a broad band peaking in the yellow-green. Nichia put the two together in 1996, phosphor stirred into silicone over the blue die, and that device has replaced the incandescent bulb; the garnet is stable to several hundred degrees and converts nine photons in ten, so the recipe has barely changed. The costs: the yellow alone makes a cold white with no red in it, so warm bulbs need a second phosphor; the silicone around it yellows and cracks first; and the colour scatters from batch to batch, so LEDs are sorted into bins after the fact.",
  stats: [["Absorbs", "about 450 nm blue"], ["Emits", "a broad band near 550 nm"], ["Quantum yield", "over 90 percent"]],
  uses: "White LEDs, laser headlamps and projectors, scintillator screens, electron microscope phosphors.",
  link: "https://en.wikipedia.org/wiki/Yttrium_aluminium_garnet"
},
{
  id: "scintillator", cat: "electronic", name: "Scintillator crystal",
  sub: "NaI:Tl, LYSO, BGO", img: "scintillator", extra: ["scintillator2", "scintillator3"],
  hook: "One gamma ray in, a flash of a few thousand visible photons out, so an invisible particle becomes a count on a photodetector. Density decides how often the crystal catches the gamma, so PET scanners use heavy ones.",
  more: "A gamma ray knocks electrons loose; a dopant, thallium in sodium iodide, cerium in the silicates, turns the energy into light, tens of thousands of photons per million electron volts. Glue it to a photomultiplier and each flash is a pulse whose height is the gamma's energy, so one device counts and identifies: the survey meter, the airport portal, the tracer camera. Sodium iodide has been the standard since 1948; bismuth germanate and lutetium silicate are thrice as dense and stop PET's photons in a centimetre. The costs: sodium iodide dissolves in damp air and lives sealed in a can; the heavy crystals are slow, dim or faintly radioactive; resolution is poor beside a germanium diode; and a big clear crystal grows over weeks and costs accordingly.",
  stats: [["Light yield", "38,000 photons per MeV in NaI:Tl"], ["Decay", "40 to 300 nanoseconds"], ["NaI", "hygroscopic, kept sealed"]],
  uses: "PET and SPECT scanners, radiation survey meters, airport portal monitors, well logging, particle physics calorimeters.",
  link: "https://en.wikipedia.org/wiki/Scintillator"
},
{
  id: "hfo2", cat: "electronic", name: "Hafnium oxide",
  sub: "HfO₂ high-k gate dielectric", img: "hfo2", extra: ["hfo22", "hfo23"],
  hook: "By 2007 the oxide under a transistor gate was five atoms thick and electrons tunnelled through it. Hafnium oxide holds charge four times as well, so the layer could be four times thicker. It kept Moore's law going.",
  more: "A gate works by capacitance, which wants the insulator thin; silicon dioxide had been thinned for forty years until the leakage heated chips as much as the switching did. A higher dielectric constant gives the same capacitance from a thicker film, and hafnium oxide won: a constant near 25, stable on silicon, and laid down an atomic layer at a time from pulses of a hafnium compound and water. Intel shipped it at 45 nanometres in 2007; every advanced chip has it. The costs: it traps charge and the threshold drifts; it crystallises on annealing and leaks along grain boundaries; it still needs a thin silicon dioxide layer under it; it forced a metal gate, a second problem; and hafnium is a by-product of zirconium, so nobody mines it on purpose.",
  stats: [["k", "about 25 against 3.9 for silica"], ["Introduced", "45 nm node, 2007"], ["Deposited by", "atomic layer deposition"]],
  uses: "Gate dielectrics in every modern processor, DRAM capacitors, ferroelectric memory, laser mirror coatings.",
  link: "https://en.wikipedia.org/wiki/Hafnium_dioxide"
},
{
  id: "opticalfibre", cat: "electronic", name: "Optical fibre",
  sub: "ultra-pure silica core and cladding", img: "opticalfibre", extra: ["opticalfibre2", "opticalfibre3"],
  hook: "So clear that a window twenty kilometres thick would still show the view. Getting from 1000 decibels per kilometre to 0.2 took a decade of removing water and metals; the glass was never the problem, the dirt was.",
  more: "Kao argued in 1966 that the loss was iron, copper and hydroxyl, not the glass, and Corning proved it in 1970 by building glass from vapour: silicon tetrachloride burned to soot, laid down with a little germanium to raise the core index, sintered into a preform, then drawn into a hair of 125 micrometres with a nine micrometre core that holds one mode of light. Today a signal crosses an ocean with an amplifier every eighty kilometres. The costs: a flaw a micrometre deep breaks it, so it is coated within a second of drawing and never touched bare; the ends are joined by melting them together; a bend tighter than a few centimetres leaks light; and the fibre is now cents a metre while the trench to bury it costs what it always did.",
  stats: [["Loss", "0.15 to 0.2 dB per km"], ["Core", "9 micrometres, single mode"], ["Strength", "higher than steel wire by weight"]],
  uses: "Nearly all long-haul, subsea and metro data traffic, fibre to the home, sensors, endoscopes, fibre lasers.",
  link: "https://en.wikipedia.org/wiki/Optical_fiber"
},
{
  id: "pcf", cat: "electronic", name: "Photonic crystal fibre",
  sub: "microstructured air-hole fibre", img: "pcf", extra: ["pcf2", "pcf3"],
  hook: "A fibre with a lattice of air holes running its whole length. The guiding depends on the geometry, not the glass, and some versions guide light down a hollow core, so the beam travels in air with glass as a cage.",
  more: "Stack a few hundred silica capillaries into a hexagonal bundle, fuse and draw, and the holes come down with it for kilometres. Around a solid core the holes lower the cladding's index in a way that depends on wavelength, and with a small enough core a laser pulse comes out as white light, the supercontinuum source on every optics bench. Around a hollow core the lattice is a photonic band gap, a mirror on all sides, and the light travels in air: lower latency, no nonlinearity, pulses that would wreck solid glass. The costs: keeping the holes round through drawing is an art; it costs tens of dollars a metre; splicing it to ordinary fibre collapses the holes; dust enters the open ends; and hollow-core loss took until 2024 to beat solid silica's.",
  stats: [["Holes", "run the full length"], ["Hollow core", "light travels in air"], ["Also", "supercontinuum generation"]],
  uses: "Supercontinuum white-light lasers, high-power pulse delivery, gas sensing, low-latency trading links, fibre gyroscopes.",
  link: "https://en.wikipedia.org/wiki/Photonic-crystal_fiber"
},
{
  id: "oled", cat: "electronic", name: "OLED emitter stack",
  sub: "organic small-molecule thin films", img: "oled", extra: ["oled2", "oled3"],
  hook: "Layers of organic molecules a hundred nanometres thick, each with one job: inject, carry, block, emit. Each pixel makes its own light, so a black pixel is off, and the contrast is not high but infinite.",
  more: "A current pushed through a stack of carbon-based films, hole transporter on one side, electron transporter on the other, meets in an emitter layer whose molecule gives up the energy as a photon of whichever colour the chemist built it to make. Kodak showed it in 1987; the small molecules are evaporated in vacuum through fine metal masks onto a glass or plastic backplane, so the panel can be thin, curved or folded. The costs: the blue emitter dies in a few thousand hours while red and green outlast it, so colours drift and a logo burns in; water and oxygen kill the organics; the masks limit pixel density and yield; and the peak brightness is a fraction of a backlit LCD's, so phones get it first and sunlit screens last.",
  stats: [["Stack", "100 to 200 nm in total"], ["Black level", "zero"], ["Weak point", "the blue emitter"]],
  uses: "Phone, watch and TV displays, laptop panels, automotive lighting, flexible and transparent screens.",
  link: "https://en.wikipedia.org/wiki/OLED"
},
{
  id: "eink", cat: "electronic", name: "Electrophoretic ink",
  sub: "E Ink microcapsules", img: "eink", extra: ["eink2", "eink3"],
  hook: "Capsules the width of a hair, each holding white and black pigment, oppositely charged, in clear oil. A voltage pulls one colour to the top, then the power is cut and the image stays, held by nothing, for years.",
  more: "Titanium dioxide charged one way and carbon black the other, in clear fluid inside a gelatin capsule forty micrometres across, millions of them coated onto a film over a transistor backplane: a few volts drives the white up and the black down or the reverse, and when the field stops the particles stay put, so the page reflects light as paper does and draws nothing until the next turn. Out of the MIT Media Lab in 1996, it is the screen of every e-reader and the supermarket shelf label. The costs: it refreshes in a few hundred milliseconds and ghosts, so page turns flash; the contrast is grey on lighter grey; colour comes out muted; and the capsules dislike heat and cold, so the datasheet stops at fifty degrees.",
  stats: [["Capsule", "about 40 micrometres"], ["Power to hold image", "zero"], ["Refresh", "a few hundred milliseconds"]],
  uses: "E-readers, electronic shelf labels, bus-stop and timetable signs, watch faces, colour-changing car wraps.",
  link: "https://en.wikipedia.org/wiki/E_Ink"
},
{
  id: "nematiclc", cat: "electronic", name: "Nematic liquid crystal",
  sub: "rod-shaped molecules, 5CB and mixtures", img: "nematiclc", extra: ["nematiclc2", "nematiclc3"],
  hook: "Flows like a liquid while its molecules point one way like a crystal. A field re-points them, which twists polarised light, which an LCD turns into a pixel. Found in 1888 by a botanist melting carrot cholesterol.",
  more: "Rod-shaped molecules that above their melting point line up but take no fixed positions, so the fluid pours yet is birefringent. Between two plates rubbed at right angles the director twists ninety degrees, polarised light follows the twist and passes a crossed polariser; a few volts stands the molecules up, the light is blocked, and that is one pixel of every LCD since the 1970s, drawing microwatts because the field moves molecules, not current. The costs: switching takes milliseconds and smears motion; the colour shifts with viewing angle, which took thirty years to fix; one compound's nematic range is narrow, so every display fluid is a mixture of a dozen; and it is a passive shutter, so a black pixel still leaks.",
  stats: [["State", "liquid positions, crystal orientation"], ["Switch", "milliseconds at a few volts"], ["Discovered", "1888, Reinitzer"]],
  uses: "Every LCD panel, liquid crystal thermometers, spatial light modulators, tunable lenses, smart windows.",
  link: "https://en.wikipedia.org/wiki/Liquid_crystal"
},
{
  id: "ga2o3", cat: "electronic", name: "Gallium oxide",
  sub: "β-Ga₂O₃, ultra-wide bandgap", img: "ga2o3", extra: ["ga2o32", "ga2o33"],
  hook: "A 4.8 electron volt band gap, wider than GaN or SiC, so it holds off voltage in a thinner layer, and unlike them it grows from a melt, so wafers are cheap. It barely conducts heat, which is what stands in its way.",
  more: "The beta form melts at 1800 degrees without decomposing, so a boule can be pulled from an iridium crucible, and six-inch wafers exist where silicon carbide took thirty years and gallium nitride still cannot be grown in bulk. The wide gap means a breakdown field of eight megavolts per centimetre, so a device blocking kilovolts can be thinner and lower in resistance than any before; it is also blind to all but deep ultraviolet, a flame detector that ignores the sun. The costs: it conducts heat a tenth as well as silicon carbide, so a device cooks itself unless bonded to something that does; nobody has made it p-type, so no bipolar devices; iridium crucibles cost a fortune; and the devices are still mostly in laboratories.",
  stats: [["Band gap", "4.8 eV"], ["Breakdown field", "8 MV per cm"], ["Problem", "thermal conductivity near 11 W per m K"]],
  uses: "Emerging high-voltage power transistors and diodes, solar-blind ultraviolet detectors, transparent conductive films.",
  link: "https://en.wikipedia.org/wiki/Gallium(III)_oxide"
},
{
  id: "mov", cat: "electronic", name: "ZnO varistor",
  sub: "metal oxide varistor ceramic", img: "mov", extra: ["mov2", "mov3"],
  hook: "Insulator up to a set voltage, conductor above it, because every grain boundary is a pair of back-to-back diodes. A surge arrives, the disc turns on in nanoseconds, shunts it to earth, then goes back to blocking.",
  more: "Zinc oxide sintered with a little bismuth oxide: the grains conduct, but the bismuth-rich layer between them stands about three volts per boundary, so a disc of a thousand grains blocks a few hundred volts, and above that every boundary breaks down at once and the current climbs a thousandfold. Matsushita found it in 1968; the blue discs went into every surge strip and the stacked columns into every substation in place of spark gaps. The costs: each surge degrades a few boundaries, so the leakage creeps up until the disc runs warm, then splits or burns, hence the thermal fuse in a surge strip; it takes pulses, not a sustained overvoltage; the clamp lets a few hundred volts through; and a strip whose light has gone out is a plain extension lead.",
  stats: [["Response", "under 25 nanoseconds"], ["Surge", "up to 70 kA in the big ones"], ["Wears out", "a little with every hit"]],
  uses: "Surge protector strips, mains and telecom line protection, motor and relay snubbers, substation and transmission arresters.",
  link: "https://en.wikipedia.org/wiki/Varistor"
},
{
  id: "ptcpoly", cat: "electronic", name: "Polymer PTC fuse",
  sub: "carbon-filled polyethylene resettable fuse", img: "ptcpoly", extra: ["ptcpoly2", "ptcpoly3"],
  hook: "Carbon particles touching through a plastic. Too much current heats the plastic, it expands, the chains of contact break and the resistance jumps a thousandfold; on cooling they re-form. A fuse that resets itself.",
  more: "Polyethylene loaded with enough carbon black that the grains touch and it conducts; a fault current heats the polymer to its melting point, it swells a few percent, the grains lose contact and the device goes from conductor to insulator in under a second. It stays tripped, warm, drawing a few milliamps, until the fault clears and it cools. Raychem sold the first in the 1980s; now there is one behind every USB port and in every laptop battery. The costs: the cold resistance is far from zero and rises after every trip; it is slow beside a real fuse and leaks while tripped; it cannot break a serious short, only hold it; a hot board trips at a lower current; and it is a safety part that is never quite off.",
  stats: [["Resistance jump", "about a thousandfold"], ["Trip", "under a second"], ["Resets", "on cooling, by itself"]],
  uses: "USB port and battery protection, motor overload, telephone and network lines, lithium-ion packs, toys.",
  link: "https://en.wikipedia.org/wiki/Resettable_fuse"
},
{
  id: "etchedfoil", cat: "electronic", name: "Etched anode foil",
  sub: "aluminium electrolytic capacitor foil", img: "etchedfoil", extra: ["etchedfoil2", "etchedfoil3"],
  hook: "Aluminium foil eaten electrochemically into tunnels, a hundred times its flat area, then anodised to grow an oxide nanometres thick. Huge area and a near-zero gap make a capacitor big, in a thumb-sized can.",
  more: "Pure foil a tenth of a millimetre thick runs through a chloride bath with a current on it, and the metal dissolves in tunnels a micrometre wide that bore straight down the grains; a second bath forms the oxide on every tunnel wall at 1.4 nanometres per volt of rating. Wound with a paper spacer soaked in electrolyte, the true cathode since only a liquid reaches into the tunnels, it gives farads where a film capacitor gives microfarads. The costs: the oxide is a diode, so the part is polar and explodes if reversed; the electrolyte dries out through the seal over the years, the reason old electronics dies; the tunnels and the liquid add resistance that limits it to low frequencies; and the etching eats half the foil to gain the area.",
  stats: [["Area gain", "up to a hundredfold"], ["Oxide", "about 1.4 nm per volt"], ["Electrolyte", "the real cathode"]],
  uses: "Smoothing and bulk capacitors in nearly every mains-powered power supply, motor-start capacitors, audio coupling.",
  link: "https://en.wikipedia.org/wiki/Aluminum_electrolytic_capacitor"
},
{
  id: "tim", cat: "electronic", name: "Thermal interface material",
  sub: "filled greases, pads and liquid metal", img: "tim", extra: ["tim2", "tim3"],
  hook: "Two polished faces touch on two percent of their area; the rest is air, which insulates. The paste only fills that gap: far worse than metal, far better than air, and the thinnest layer that fills the voids wins.",
  more: "Silicone oil loaded as full as it will go with zinc oxide, alumina or silver flake, until it conducts a few watts per metre kelvin, a hundred times air; squeezed to tens of micrometres between a chip lid and a heatsink it carries a hundred watts with a few degrees lost. A pad is the same filler in a soft sheet for wide gaps; liquid metal, a gallium alloy, is ten times better and wets both faces. The costs: a thick smear or a warped lid wastes most of the benefit; the oil pumps out as the parts cycle hot and cold, so the paste dries and the chip runs hotter every year; silver pastes conduct, and a stray smear shorts a board; liquid metal eats aluminium; and the best paste beats a cheap one by a few degrees, whatever the marketing says.",
  stats: [["Real contact", "1 to 2 percent of the area"], ["Grease", "3 to 8 W per m K"], ["Liquid metal", "about 70 W per m K"]],
  uses: "CPU and GPU coolers, LED and power module mounting, automotive and telecom electronics, battery packs.",
  link: "https://en.wikipedia.org/wiki/Thermal_interface_material"
},
{
  id: "lfp", cat: "electronic", name: "Lithium iron phosphate",
  sub: "LiFePO4 olivine cathode", img: "lfp", extra: ["lfp2", "lfp3"],
  hook: "A cathode that trades energy for peace of mind. Its phosphate groups hold their oxygen tight, so an overheated cell has nothing of its own to burn, where a nickel-cobalt cathode feeds oxygen to its own fire.",
  more: "Lithium sits in channels in a lattice of iron and phosphate tetrahedra and comes out at a flat 3.2 volts from full to empty; Goodenough found it in 1996; a carbon coat on nano-sized particles cured its poor conductivity. It is iron and phosphorus, not cobalt and nickel, it takes several thousand cycles, and in a nail test it warms where a nickel cell burns, so it won the standard-range car, the bus and the house battery. The costs: it holds two thirds the energy per kilogram of a nickel-rich cell, so the car is heavier or shorter-legged; the flat voltage is also its nuisance, since the gauge cannot read the charge from it; it charges poorly below freezing; and cheap ingredients make a cell worth little when recycled.",
  stats: [["Cell voltage", "about 3.2 V, very flat"], ["Cycles", "several thousand"], ["Contains", "no cobalt, no nickel"]],
  uses: "Standard-range electric cars, home and grid storage, buses, boats, solar systems, power tools.",
  link: "https://en.wikipedia.org/wiki/Lithium_iron_phosphate_battery"
},
{
  id: "bellbronze", cat: "music", name: "Bell bronze",
  sub: "copper with about a fifth tin", img: "bellbronze", extra: ["bellbronze2", "bellbronze3"],
  hook: "A fifth tin makes a bronze no engineer would use: hard and brittle. A bell wants exactly that, since metal that deforms swallows the vibration, and it must still sound half a minute after the clapper.",
  more: "At 22 percent tin the alloy freezes with a hard delta phase between the grains, which is why it rings: nothing in the metal soaks up the strain of a vibration, so a struck bell loses its energy slowly, as sound. It is cast in one pour into a loam mould whose profile was worked out over centuries to put the partials, hum, prime, tierce, quint and nominal, near a chord, then tuned on a lathe by cutting metal from the inside, each cut lowering one partial more than the others; none can be put back. The costs: a casting flaw or a hard winter cracks it, and a cracked bell is dull until welded or recast; tin is the dear half of the alloy; and the sound owes as much to geometry as to metal, so a bad profile in good bronze is still a bad bell.",
  stats: [["Alloy", "roughly 78 copper, 22 tin"], ["Damping", "low; rings for tens of seconds"], ["Tuned by", "cutting metal from the inside"]],
  uses: "Church and tower bells, carillons, orchestral tubular bells, gongs and cymbals.",
  link: "https://en.wikipedia.org/wiki/Bell_metal"
},
{
  id: "singingbowl", cat: "music", name: "Singing bowl bronze",
  sub: "hammered copper-tin, Himalayan", img: "singingbowl", extra: ["singingbowl2", "singingbowl3"],
  hook: "Bell bronze, hammered thin while hot rather than cast, so the wall varies round the rim. It is never quite round, so its ring exists twice at slightly different pitches, and the slow warble is the two beating.",
  more: "A disc of bronze is raised over a stake by a team with hammers, turned between blows until it is a bowl with a wall a millimetre or two thick; every hammer mark is a different thickness, and the metal is left soft. Struck, it rings in a bending mode of the wall, four nodes round the rim; rubbed with a leather mallet it is a bowed string in the round, the mallet gripping and slipping until the whole bowl sings. The costs: a hammered bowl is never symmetric, so the mode splits and beats, which is the charm, and no two bowls match; the soft metal dents and detunes; the Himalayan workshops cannot make enough, so most bowls sold are cast from scrap; and much of what is said about their healing is said by people selling them.",
  stats: [["Alloy", "copper and tin, often with traces of more"], ["Formed by", "hot hammering, not casting"], ["Warble", "two split modes, beating"]],
  uses: "Meditation and sound therapy, Buddhist temple ritual, percussion and film scoring.",
  link: "https://en.wikipedia.org/wiki/Standing_bell"
},
{
  id: "pipemetal", cat: "music", name: "Organ pipe metal",
  sub: "tin and lead, cast as sheet", img: "pipemetal", extra: ["pipemetal2", "pipemetal3"],
  hook: "Tin and lead poured along a table, planed to a millimetre. The mix is chosen stop by stop: high tin stiff and bright, lead soft and slow to speak. Near half and half it freezes mottled like hide: spotted metal.",
  more: "The alloy is run out of a box dragged along a bench, freezing in seconds, then planed, rolled round a mandrel and soldered down the seam; the voicer then cuts and nicks the mouth until the pipe speaks as wanted. Pure tin is the facade metal, bright, stiff and dear; a lead-rich alloy makes the quieter inner flutes; near equal parts it freezes into tin-rich and lead-rich grains and comes out dappled, which builders charge more for, though the tone depends on the wall's stiffness, not the pattern. The costs: lead creeps, so a tall pipe slowly sags and its mouth closes; tin pest crumbles high-tin pipes in a cold church; a careless hand dents the soft mouth and spoils the speech; and lead dust from scraping is a hazard the trade learned late.",
  stats: [["Alloy", "tin with lead, 25 to 90 percent tin"], ["Spotted metal", "two-phase freezing, near 50/50"], ["Chosen per", "stop, not per organ"]],
  uses: "Flue and reed pipes in organs, facade ranks, restoration of historical instruments.",
  link: "https://en.wikipedia.org/wiki/Organ_pipe"
},
{
  id: "pernambuco", cat: "music", name: "Pernambuco",
  sub: "Paubrasilia echinata, bow wood", img: "pernambuco", extra: ["pernambuco2", "pernambuco3"],
  hook: "Nearly every serious violin bow since 1800 has come from one tree on one Brazilian coast. Dense, very stiff along the grain, damped just enough not to ring under the hand, and it holds a camber bent in over a flame.",
  more: "The heartwood is orange-red and barely floats, with long straight fibres and an unusual stiffness for its weight, so a stick seven millimetres thick at the frog and five at the tip holds the hair tension; its damping sits where the stick neither buzzes nor feels dead, which is what players mean by feel. Tourte settled the modern bow in it around 1785; the camber goes in dry over a flame and stays for a century. The tree was Brazil's first export, as a red dye, and its forest is nearly gone. The costs: the species has been CITES-listed since 2007, so most sticks come from blanks cut decades ago; only a fraction of any log is straight and dense enough; and carbon fibre bows are stiffer, stronger and cheaper and still lose on feel.",
  stats: [["Density", "about 0.9 to 1.1 g per cm3"], ["Stiff along", "the grain, with internal damping"], ["Supply", "CITES-listed, old stock"]],
  uses: "Violin, viola, cello and bass bows; historically a red dye; inlay and marquetry.",
  link: "https://en.wikipedia.org/wiki/Paubrasilia"
},
{
  id: "ebony", cat: "music", name: "Ebony",
  sub: "Diospyros, fingerboard wood", img: "ebony", extra: ["ebony2", "ebony3"],
  hook: "A wood dense enough to sink, with pores so fine that a planed face polishes bare. On a fingerboard that counts twice: no coating to wear through, and a surface that stops the note where the finger puts it.",
  more: "The heartwood of a few slow-growing Diospyros species, Gabon and Ceylon above all, so dense the cells are nearly solid and so even it machines like a plastic; the black is a pigment in the cell walls, so most ebony is streaked brown and the jet-black boards are priced apart. On a violin or guitar the fingerboard is a cap of it glued to a lighter neck, the hardest-wearing surface a luthier can offer; it also makes pegs, piano sharps and clarinet bodies. The costs: it splits along the grain if a peg hole is forced; it moves with humidity and can pull a neck into a bow in a dry winter; the trees take a century to make a log, so Gabon ebony is CITES-listed and much of what is sold is dyed or smuggled; and the dust is a sensitiser.",
  stats: [["Density", "about 0.9 to 1.2 g per cm3"], ["Finish", "none, polished bare"], ["Used as", "a thin cap, not a whole neck"]],
  uses: "Fingerboards, pegs and tailpieces, piano sharps, clarinet and oboe bodies, knife handles, chess pieces.",
  link: "https://en.wikipedia.org/wiki/Ebony"
},
{
  id: "rosin", cat: "music", name: "Rosin",
  sub: "distilled pine resin", img: "rosin", extra: ["rosin2", "rosin3"],
  hook: "Pine resin boiled free of turpentine, leaving a glass that cracks like toffee and softens at fingertip heat. A bow does not rub a string, it grabs and lets go hundreds of times a second, and rosin makes the grab.",
  more: "Resin bled from a cut pine is distilled: the turpentine comes over and what stays is a brittle amber glass of abietic acid, softening near seventy degrees and tacky well below. Drawn across the hair it leaves grains that friction heat softens at the instant of contact, so the hair sticks, drags the string until its tension wins and it snaps back, hundreds of times a second; without it horsehair on steel merely slides. The same grab serves the gymnast's hands and the dancer's shoes. The costs: the dust etches the varnish if left; too much and the tone is gritty, too little and the bow skates; soft winter grades gum up in summer and hard ones squeak in a cold hall; and it is an allergen, so many players choose by what their lungs tolerate.",
  stats: [["From", "distilled pine resin"], ["Softens", "at the heat of friction, about 75 degrees"], ["Does", "the grab half of stick-slip"]],
  uses: "String bows, grip for gymnasts, dancers and pitchers, soldering flux, varnishes, printing inks, chewing gum base.",
  link: "https://en.wikipedia.org/wiki/Rosin"
},
{
  id: "fiddleback", cat: "music", name: "Fiddleback maple",
  sub: "wavy-grain Acer", img: "fiddleback", extra: ["fiddleback2", "fiddleback3"],
  hook: "The stripes are a wave in the fibres, so each band catches light at its own angle and the back seems to move as it turns. Wavy grain is harder to work and does nothing for the sound; luthiers choose it anyway.",
  more: "In some maples the fibres grow in a wave along the trunk, and a plank sawn through them alternates end grain and side grain: one reflects, the next absorbs, and tilt the board and they swap. Nobody knows why. Maple earns the back of a violin for duller reasons: stiff across the grain, dense enough to reflect the sound back into the box and leave the soft spruce top to radiate; the figure is what the best Balkan maple happened to have, and Cremona made it the look. The costs: the grain rises and falls under the gouge, so it tears out and must be scraped, not planed; a flamed back can crack along a stripe; it is priced by the figure, which is cosmetic; and a buyer judging a violin by its flame is judging the wrong plate.",
  stats: [["Figure", "waves in the fibre, not the surface"], ["Role", "the stiff, reflecting back plate"], ["Paired with", "a light spruce top"]],
  uses: "Violin, viola and cello backs, necks and ribs, guitar backs and necks, drum shells, veneer and furniture.",
  link: "https://en.wikipedia.org/wiki/Figure_(wood)"
},
{
  id: "instbrass", cat: "music", name: "Instrument brass",
  sub: "yellow brass, 70/30 copper-zinc", img: "instbrass", extra: ["instbrass2", "instbrass3"],
  hook: "Seventy copper, thirty zinc, picked because it spins into a bell without splitting, not for its sound. Players hear the brasses apart; measurement puts most of that in wall and flare, the alloy a small term.",
  more: "Cartridge brass is the most ductile of the copper-zinc alloys: a flat sheet is cut to a fan, rolled and brazed into a cone, then spun over a steel mandrel and hammered, so the metal thins as it flares and the wall is thinnest where it moves most. Gold brass is 85 percent copper and red brass 90, each softer, darker, and said to sound darker. The costs: zinc leaches out of a sweaty mouthpiece, which is why it is plated; the alloy is soft enough that a dropped horn dents and a dent in the bell changes the note; brass fatigues at the braces and cracks along a seam decades on; and the metal's effect on timbre is small enough that blind tests struggle to find it, while its effect on the player's confidence is not.",
  stats: [["Alloy", "about 70 copper, 30 zinc"], ["Formed by", "spinning and hammering sheet"], ["Timbre", "mostly geometry, not alloy"]],
  uses: "Trumpet, trombone, horn and tuba bells and bodies, mouthpieces, keywork and slides, saxophone bodies.",
  link: "https://en.wikipedia.org/wiki/Brass"
},
{
  id: "lithophone", cat: "music", name: "Sounding stone",
  sub: "fine-grained rock, cut to pitch", img: "lithophone", extra: ["lithophone2", "lithophone3"],
  hook: "Dense, even-grained rock with no crack in it has little internal damping, so a free slab struck on the edge rings like metal. One crack anywhere and the ring collapses to a thud, which is why old sets are rare.",
  more: "Most rock is grains and microcracks that rub when it flexes and turn a vibration to heat at once; a slab of fine, tight stone, a hornfels, a limestone, a nephrite, has so little of that friction that a struck bar rings for seconds. The Chinese bianqing hung sixteen L-shaped slabs of one length and tuned them by thickness three thousand years ago; the Vietnamese dan da is a row of chipped basalt bars, some Neolithic; a Cumbrian mason built an instrument of Skiddaw hornfels in 1840 and played it to the Queen. The costs: the right stone is rare and no two quarries sound alike; a slab can only be ground down, so tuning is one-way; a hairline crack ends it; and the tone, however pure, is quiet beside bronze, which took over.",
  stats: [["Needs", "even grain and no cracks"], ["Tuned by", "thickness, ground down"], ["Failure", "one crack and the ring is gone"]],
  uses: "Chinese and Vietnamese stone chimes, Ethiopian church stones, the Musical Stones of Skiddaw, orchestral stone percussion.",
  link: "https://en.wikipedia.org/wiki/Lithophone"
},
{
  id: "cymbalbronze", cat: "music", name: "Cymbal bronze",
  sub: "B20 and B8, hammered sheet", img: "cymbalbronze", extra: ["cymbalbronze2", "cymbalbronze3"],
  hook: "A fifth tin, like bell metal, but rolled and hammered rather than cast, which leaves it stressed unevenly and never symmetrical. On purpose: it carries hundreds of close modes that smear into a wash with no pitch.",
  more: "B20 is cast as a disc, rolled thinner hot to scramble the grain, hammered in thousands of blows, then lathed into a shallow cone with a spiral of grooves; the stiffness varies from point to point, so instead of a few clean modes it has hundreds packed close, and the strike spreads into a shimmer with no note. Twenty percent tin would shatter under the hammer if not rolled hot and annealed, Zildjian's secret since 1623. At eight percent tin the alloy stamps from sheet: brighter, more uniform, shorter, cheaper. The costs: B20 is brittle and a cymbal struck hard on its edge cracks, for good; no two plates match, so a drummer chooses by ear from a rack; and the bronze tarnishes and the grooves fill with dirt, patina to some and dull to others.",
  stats: [["B20", "about 20 percent tin, cast then hammered"], ["B8", "about 8 percent tin, from sheet"], ["Spectrum", "dense and inharmonic on purpose"]],
  uses: "Drum kit and orchestral cymbals, hi-hats, tam-tams and gongs, temple cymbals.",
  link: "https://en.wikipedia.org/wiki/Cymbal"
},
{
  id: "tuningfork", cat: "music", name: "Tuning-fork steel",
  sub: "pitch from stiffness and density", img: "tuningfork", extra: ["tuningfork2", "tuningfork3"],
  hook: "A fork's pitch follows from its geometry and its metal's stiffness over density, and nothing else: no air column, no string. One flaw: steel loses a little stiffness as it warms, so it goes flat in a warm room.",
  more: "Two tines vibrate in opposite phase, so the stem hardly moves and it can be held without damping, and the pitch is set by the tines' length and thickness and the square root of stiffness over density, which does not drift with humidity or age; John Shore, Handel's trumpeter, made the first in 1711, and for two centuries a fork was the pitch reference. The costs: steel's modulus falls a hundredth of a percent per degree, so a 440 fork is half a cent flat on a warm stage, and Guillaume's Elinvar, an alloy whose stiffness barely moves with temperature, was the cure, and went into watch springs too; a fork is loud only on a resonance box; it gives one note; and a quartz crystal cut as a tiny fork does the job far better in every watch.",
  stats: [["Pitch set by", "geometry, stiffness, density"], ["Steel", "goes flat as it warms"], ["Fix", "Elinvar, near-constant stiffness"]],
  uses: "Pitch references, hearing and bone-conduction tests, the 32 kHz quartz fork in every watch, vibrating sensors and gyroscopes.",
  link: "https://en.wikipedia.org/wiki/Tuning_fork"
},
{
  id: "singingsand", cat: "music", name: "Booming sand",
  sub: "dry, rounded, closely sized grains", img: "singingsand", extra: ["singingsand2", "singingsand3"],
  hook: "A few dozen dune fields boom when sand avalanches down the lee face, loud enough to carry a kilometre and low enough to feel in the chest. Wet the sand or mix the grain sizes and it falls silent.",
  more: "The grains are quartz, but dry, wind-rounded and sorted to a narrow band of size; when a slab slides on the slip face the shearing layer moves in a stick-slip of the whole sheet, every grain colliding in step, and the surface radiates the beat as one low note, 70 to 105 hertz, that can last a minute and shake the ground. Marco Polo heard it in the Gobi and wrote it down as spirits; Dunhuang, Kelso and Eureka do it on demand to anyone who slides down. The costs: it needs a hot, dry day and a steep face, so most visits are silent; a shower stops it for days and a humid climate for good; the pitch is set by the grain size alone; the physics was argued for a century and is not settled; and a dune that booms is a dune on the move.",
  stats: [["Pitch", "roughly 70 to 105 Hz"], ["Needs", "dry, rounded, closely sized grains"], ["Carries", "about a kilometre"]],
  uses: "Dune fields from Dunhuang to the Mojave; a test case for how granular flows synchronise.",
  link: "https://en.wikipedia.org/wiki/Singing_sand"
},
{
  id: "ringingrock", cat: "music", name: "Ringing rock",
  sub: "diabase boulders under locked-in stress", img: "ringingrock", extra: ["ringingrock2", "ringingrock3"],
  hook: "In a handful of boulder fields the rocks answer a hammer with a clear metallic ring instead of a thud, though the stone is ordinary diabase. Take a ringing boulder home and it often stops ringing.",
  more: "The fields are open, dry and bare of soil, the blocks resting on each other rather than the ground, free to vibrate like a bell on a cushion; strike one and perhaps a third give a clear tone, looking no different from the dumb ones. The best guess since the 1960s is residual stress: the rock weathers from the outside in, the skin tightens round an unchanged core, and that locked-in tension stiffens the block and cuts its damping; move it into the damp or into soil and the note goes. The costs: a ringing rock is only a rock, so it is percussion at best; the fields are protected and the hammering tolerated rather than encouraged; the boulders cannot be moved without losing what makes them interesting; and the explanation is still a hypothesis.",
  stats: [["Rock", "fine-grained diabase"], ["Needs", "an open dry field, boulder on boulder"], ["Cause", "locked-in stress, still argued"]],
  uses: "Ringing Rocks Park in Pennsylvania, Ringing Rocks in Montana and a few other fields; struck-stone percussion.",
  link: "https://en.wikipedia.org/wiki/Ringing_rocks"
},
{
  id: "steelpan", cat: "music", name: "Oil-drum steel",
  sub: "a barrel end, sunk and tuned", img: "steelpan", extra: ["steelpan2", "steelpan3"],
  hook: "The one acoustic instrument invented in the twentieth century, and it was invented out of rubbish: the end of an oil drum, sunk into a bowl with a sledgehammer and raised into notes with a punch.",
  more: "The lid of a mild-steel drum is beaten down into a dish, which work-hardens the sheet and leaves it in tension like a drumhead; the tuner grooves the outlines of the notes, hammers each area up into a dome whose size sets its pitch, and keeps hammering until the octave and fifth of each dome fall in tune with its fundamental, so one patch of steel sounds like a chord. Trinidad built it out of biscuit tins and dustbin lids in the 1940s, after the government banned drums. The costs: the steel rusts and a rusting pan goes out of tune, so pans are chromed; the stresses creep, so a pan drifts and needs a tuner, rarer than the player; a hard stick dents a note out of pitch; and a tenor pan carries two and a half octaves, so a band is a family of pans.",
  stats: [["From", "the end of a steel drum"], ["Tuned by", "hammering each note area"], ["Each note", "fundamental, octave and fifth aligned"]],
  uses: "Steel bands and panorama orchestras, carnival, school and community ensembles, film and pop sessions.",
  link: "https://en.wikipedia.org/wiki/Steelpan"
},
{
  id: "glassharp", cat: "music", name: "Rubbed glass",
  sub: "stemware as an instrument", img: "glassharp", extra: ["glassharp2", "glassharp3"],
  hook: "Stemware does something nobody designed it to do: a wet finger dragged round the rim grabs and lets go hundreds of times a second, drives the bending mode of the bowl, and the pitch follows the water in the glass.",
  more: "A goblet rings because glass has almost no internal friction: the bowl flexes in a four-lobed mode and a wet fingertip, which sticks and slips a few hundred times a second, feeds that mode as a bow feeds a string. Water adds mass to the wall and lowers the note, so identical glasses can be tuned with a jug; glasses ground to different sizes need none, and that is the glass harp of the 1740s, which Franklin mechanised in 1761 as the armonica, nested bowls on a spindle. The costs: the sound is quiet and pure to the point of eeriness, which got the armonica blamed for madness and banned in some towns; the tuning drifts as the water evaporates; the glasses are glass; and the finger must be clean, wet and bare, so hand cream can silence it.",
  stats: [["Driven by", "stick-slip from a wet finger"], ["Tuned by", "the water level, or the glass size"], ["Works because", "glass barely damps"]],
  uses: "Glass harps and glass armonicas, tuned bowl sets, physics demonstrations, film scores.",
  link: "https://en.wikipedia.org/wiki/Glass_harp"
},
{
  id: "handpan", cat: "music", name: "Nitrided pan steel",
  sub: "deep-drawn sheet, case-hardened", img: "handpan", extra: ["handpan2", "handpan3"],
  hook: "Two steel shells glued rim to rim, each note hammered until its octave and fifth lock onto its fundamental, so one dome sounds a chord. The shells are nitrided, as gearbox parts are, because a rusting pan drifts.",
  more: "A disc of sheet a millimetre thick is pressed into a shallow dome, the note fields are hammered into it as dimples, and a central dome, the ding, holds the lowest note; a second shell is glued underneath. PANArt in Bern made the first in 2000, the Hang. The nitriding came from PANArt too: the shells sit in ammonia at around 500 degrees until the surface turns to iron nitride, a hard, rust-resistant skin a few hundredths of a millimetre deep over soft steel that does the vibrating. The costs: each pan is tuned by hand and ear over days, so it costs what a guitar does; the notes drift if the pan is dropped, left in a hot car or played hard; the scale is fixed at eight or nine notes, so a player needs several; and a bad one sounds like a saucepan.",
  stats: [["Shell", "deep-drawn sheet steel"], ["Case", "iron nitride, gas-nitrided"], ["Each note", "fundamental, octave, fifth"]],
  uses: "Handpans and steel tongue drums, percussion for film, street and studio, sound therapy.",
  link: "https://en.wikipedia.org/wiki/Handpan"
},
{
  id: "springreverb", cat: "music", name: "Reverb spring",
  sub: "coiled steel wire as a delay line", img: "springreverb", extra: ["springreverb2", "springreverb3"],
  hook: "A coiled wire is a bad delay line, which is the point. Twist one end and the wave crawls along the coil for tens of milliseconds, highs arriving first, then bounces between the ends into echoes no room ever made.",
  more: "A magnet on the end of a helical spring is driven by a coil, so the signal becomes a torsional wave twisting down the wire; the coil delays it, spreads it out since a helix passes highs faster than lows, and a second magnet and coil read it back. Each reflection off an end adds an echo, the dispersion smears them into a wash, and two or three springs of different length fill the gaps. Hammond patented it for organs in 1939, Fender put it in amplifiers in 1961, and dub and surf built a sound on it. The costs: it is microphonic, so a kicked amplifier crashes like a dropped tray; the springs ring at their own resonances; the delay is fixed by the wire; and it sounds nothing like a room, which is why it is still used.",
  stats: [["Medium", "torsional waves in coiled steel"], ["Delay", "tens of milliseconds per spring"], ["Character", "dispersion: highs arrive first"]],
  uses: "Guitar amplifiers and organs, dub and surf records, modular synthesisers.",
  link: "https://en.wikipedia.org/wiki/Spring_reverb"
},
{
  id: "thermowood", cat: "music", name: "Thermally modified wood",
  sub: "baked, not treated", img: "thermowood", extra: ["thermowood2", "thermowood3"],
  hook: "Wood baked at 160 to 215 degrees with the oxygen kept out, which breaks down the hemicellulose, the part that holds water. It comes out darker, nearly deaf to humidity and slow to rot, at the cost of toughness.",
  more: "Kiln-dry boards sit for hours in a steam-filled chamber, the steam keeping oxygen out so the wood cannot burn, at a chosen temperature: 190 degrees for an indoor timber, above 210 for one that will stand outside. The hemicellulose sugars break down and caramelise, which gives the colour, and what is left swells and shrinks a third as much and feeds few fungi. Finland industrialised it in the 1990s as ThermoWood; guitar makers found a baked spruce top behaves like one dried for fifty years. The costs: the wood is brittle and splits when nailed, so it is screwed and pre-drilled; its bending strength drops by a fifth, so it is not structural; it smells of smoke for months; and the energy to bake it is in the price.",
  stats: [["Treated at", "160 to 215 degrees, low oxygen"], ["Lost", "hemicellulose, and most humidity movement"], ["Cost", "toughness across the grain"]],
  uses: "Guitar tops and fingerboards, cladding and decking, sauna benches, window frames, garden furniture.",
  link: "https://en.wikipedia.org/wiki/Thermally_modified_wood"
},
{
  id: "headstock", cat: "music", name: "Bell headstock",
  sub: "the beam a bell hangs from", img: "headstock", extra: ["headstock2", "headstock3"],
  hook: "A swinging bell throws several times its weight at what holds it, every swing, so the headstock must be stiff, heavy and dull: anything that rings with the bell steals from it. Oak and elm did it for six centuries.",
  more: "The bell bolts under a beam that turns in bearings on the frame; when a tonne of tenor swings mouth up and back, the load peaks at four or five times its weight, twice a revolution. Oak and elm served because wood is stiff, heavy and lossy: the shock of each strike dies in the grain instead of passing into the stone, and a wooden headstock fails slowly and visibly. Cast iron took over in the nineteenth century, welded steel after that. The costs: a metal headstock passes the strike into the tower, so a frame quiet with wood may hum with steel; cast iron cracks without warning and drops a tonne of bronze; wood rots round the bolts and needs replacing every century or two; and the whole must be balanced or the bell rings unevenly.",
  stats: [["Carries", "several times the bell's weight, each swing"], ["Wants to be", "stiff, heavy, non-resonant"], ["Traditionally", "seasoned oak or elm"]],
  uses: "Church and tower bell frames, carillons, bell restoration and rehanging.",
  link: "https://en.wikipedia.org/wiki/Bell_(instrument)"
},
{
  id: "clapper", cat: "music", name: "Clapper and baldric",
  sub: "wrought iron on a leather strap", img: "clapper", extra: ["clapper2", "clapper3"],
  hook: "The clapper is deliberately the softer of the two: wrought iron against bronze, so the blows wear the clapper, not the bell. How it hangs matters as much: a clapper still touching the bell damps the note.",
  more: "A forged iron shank with a ball at the end, hung from a staple in the crown by a baldric, a loop of thick leather or a bushed steel strap; the ball weighs a few percent of the bell, strikes the sound bow near the lip and must rebound at once. Wrought iron is tough rather than hard and softer than bell metal, so the wear goes into the clapper, not into the bell, which cannot be replaced; the leather flexes for decades, gives at impact, and frays visibly before it breaks. The costs: a clapper too heavy cracks the bell and one too light will not sound it; the baldric stretches and the strike point wanders; iron rusts and fatigues at the neck, and a clapper that lets go falls through the floor; and a steel strap gives less than leather.",
  stats: [["Softer than", "the bell, on purpose"], ["Must", "bounce clear after the strike"], ["Strap", "leather: flexes, gives, warns"]],
  uses: "Church bells and carillons, ship and school bells, handbells.",
  link: "https://en.wikipedia.org/wiki/Wrought_iron"
},
{
  id: "cymbalfelt", cat: "music", name: "Cymbal felt and sleeve",
  sub: "wool felt and a plastic tube", img: "cymbalfelt", extra: ["cymbalfelt2", "cymbalfelt3"],
  hook: "A cymbal must be held up and left alone at the same time. Two wool felt washers carry the weight and nothing else, so the plate can rock and swing unclamped and unchoked; the plastic sleeve keeps metal off metal.",
  more: "The centre of a cymbal is a node of nearly every mode, so a loose support there costs almost nothing, and felt is the thing to put there: soft, lossy and conforming to the bell, it cradles the plate and absorbs the rattles, and a second felt above with the nut left a turn loose lets the cymbal swing and come back. The sleeve is a nylon tube over the rod; bare steel through the hole would chew it into a keyhole within a season and clatter on every stroke. The costs: the felts harden with age and sweat and start to choke the tone; a nut done up tight kills the sustain and cracks the cymbal at the hole; the sleeve splits and nobody notices until the keyhole has started; and the felt on a hi-hat clutch takes the hardest beating and goes first.",
  stats: [["Held by", "two felt washers, deliberately loose"], ["Felt", "soft, lossy, conforming"], ["Sleeve", "keeps metal off metal"]],
  uses: "Cymbal stands and hi-hat clutches, gong and tam-tam mounts, drum hardware.",
  link: "https://en.wikipedia.org/wiki/Cymbal_stand"
},
{
  id: "bowlcushion", cat: "music", name: "Bowl cushion",
  sub: "cloth over a loose fill", img: "bowlcushion", extra: ["bowlcushion2"],
  hook: "A standing bowl rings in its wall, which is still only in a narrow band near the base, so that band is the one place anything may touch. On a bare table the bowl goes dull and buzzes; the cushion is the mount.",
  more: "The wall bends in lobes round the rim swinging in and out, and the motion falls to almost nothing at the foot; a ring cushion of brocade over a loose fill touches only there, moulds to the curve so there is no hard point of contact, and is lossy enough to swallow the chatter between bowl and support. The Japanese rin sits on a padded ring, the Himalayan bowl on a stuffed doughnut, the gong hangs from cord, for the same reason: hold the instrument where it is already quiet. The costs: a cushion too small lets the bowl rock and clack, too big and it climbs the wall and damps the note; the fill packs down and the silk wears through; and a bowl set straight on a shop table sounds like a saucepan, which is how saucepans get sold.",
  stats: [["Touches", "only the quiet band near the base"], ["Fill", "loose, so it moulds to the bowl"], ["Bare table", "dull note and a buzz"]],
  uses: "Temple rin and singing bowls, gong cushions and stands, sound therapy sets.",
  link: "https://en.wikipedia.org/wiki/Standing_bell"
},
{
  id: "soundpost", cat: "music", name: "Soundpost",
  sub: "a spruce dowel held by friction", img: "soundpost", extra: ["soundpost2", "soundpost3"],
  hook: "A spruce stick six millimetres thick, wedged between belly and back unglued, its ends cut to each plate's curve so it stands on friction. A millimetre's move is audible: the biggest adjustment to a finished violin.",
  more: "The post stands just behind the treble foot of the bridge and ties top to back there, so when the bridge rocks under the bow the treble side is held and the bass side pumps the top, which is where a violin's volume comes from. A luthier fits each end to the inside arch, sets it through the f-hole with a bent setter, then moves it by fractions of a millimetre while the player listens: nearer the bridge for brighter, further for darker. The costs: it is set by ear and no two makers agree where; it falls over if the strings come off, so a violin is never fully unstrung; a post too long cracks the top from inside, too short falls at the first knock; it loosens in a dry winter; and the French call it the soul, which tells you how much argument it causes.",
  stats: [["Held by", "friction alone, never glued"], ["Adjusted in", "fractions of a millimetre"], ["Doubles as", "the fuse against a knock"]],
  uses: "Violins, violas, cellos and basses; some lutes, guitars and viols.",
  link: "https://en.wikipedia.org/wiki/Sound_post"
},
{
  id: "violinbridge", cat: "music", name: "Bridge maple",
  sub: "cut to fit one instrument", img: "violinbridge", extra: ["violinbridge2", "violinbridge3"],
  hook: "Held on by string pressure alone, its feet cut by hand to the arch of that one belly; move it to another instrument and it fits nothing. The cut-out heart and kidneys are a tuned filter, not decoration.",
  more: "A blank of quarter-sawn maple is thinned, its feet carved to sit flat on the arching, and its waist, heart and kidneys opened until it flexes as the maker wants; under nine kilograms of string load it must be stiff enough not to warp and light enough to move at audio frequencies, and the cut-outs put a broad resonance near two to three kilohertz, where the ear is sharpest, which is why a violin carries over an orchestra. The costs: it is never glued, so it creeps forward with tuning and must be pulled upright or it warps and snaps; it fits one instrument and one set of strings; too thick is dull, too thin is shrill and short-lived; each replacement costs a luthier an hour or two; and the player cannot see what the maker did to it.",
  stats: [["Held by", "string pressure, no glue"], ["Load", "about 9 kg pressing down"], ["Bridge hill", "a broad peak near 2 to 3 kHz"]],
  uses: "Violin family and double bass, and in other forms most stringed instruments.",
  link: "https://en.wikipedia.org/wiki/Bridge_(instrument)"
},
{
  id: "bonesaddle", cat: "music", name: "Nut and saddle",
  sub: "bone, Micarta or sintered polymer", img: "bonesaddle", extra: ["bonesaddle2", "bonesaddle3"],
  hook: "Every string ends on a hard block: harder than the string, and slippery enough that the string slides over it in tuning, not catching and jumping sharp. Bone has been the default for centuries; no two pieces match.",
  more: "Nut and saddle set the speaking length of every string and pass its vibration on, so they want a material hard, dense, low in damping and easy to file: cattle bone, boiled and bleached, has been that since the lute, and a fitted bone saddle gives a bright attack that cheap plastic does not. Micarta, a linen-phenolic laminate, and sintered polymers like Tusq are bone without the lottery: every blank the same, moulded for a factory to drop in. The costs: one bone blank in several has a porous streak that deadens the string on it, found too late; it smells of the dentist when filed; a slot a tenth of a millimetre too deep buzzes and too shallow plays sharp; and the synthetics give up a little brightness, which players argue about and rarely hear.",
  stats: [["Harder than", "the string that sits on it"], ["Must", "let the string slide while tuning"], ["Bone", "dense and bright, never twice the same"]],
  uses: "Guitar nuts and saddles, mandolin and banjo bridges, harp and zither bearing points.",
  link: "https://en.wikipedia.org/wiki/Nut_(string_instrument)"
},
{
  id: "hideglue", cat: "music", name: "Hot hide glue",
  sub: "collagen, brushed on at about 60 degrees", img: "hideglue", extra: ["hideglue2", "hideglue3"],
  hook: "Collagen from hide, kept molten at 60 degrees and brushed on hot; it gels as it cools, ten seconds to close the joint. It dries hard and glassy, not rubbery: a flexible joint in a violin would swallow the vibration.",
  more: "Hide scraps are cooked to gelatin, dried to amber granules, then soaked and warmed to a thin syrup; brushed on and clamped it gels in seconds and shrinks as it dries, pulling the joint tight. The dry film is harder than the wood and too thin to add mass, so a violin top can be glued on all round and still ring, and it opens with a hot knife and a damp cloth, so an old instrument can be taken apart and put back; the maker also chooses which joint lets go first when the thing is dropped. The costs: the open time is seconds, so a big joint needs hot wood and practice; the pot goes off in a day or two and stinks; it will not fill a gap, so the joint must fit dry; and modern glues hold better, which is why restorers refuse them.",
  stats: [["Worked at", "about 60 degrees, sets as it cools"], ["Dry joint", "hard and glassy, not rubbery"], ["Reversible", "with heat and moisture"]],
  uses: "Violin family and acoustic guitars, piano actions, furniture restoration, gilding, bookbinding.",
  link: "https://en.wikipedia.org/wiki/Hide_glue"
},
{
  id: "shockmount", cat: "music", name: "Elastic shock mount",
  sub: "holding by not quite holding", img: "shockmount", extra: ["shockmount2", "shockmount3"],
  hook: "The opposite job to a bell headstock: let nothing through. A microphone slung in elastic cords is a spring and weight tuned so that knocks climbing the stand die away well below the frequencies being recorded.",
  more: "A mass on a spring blocks vibration above its natural frequency, so a microphone hung in cords soft enough to bob at a few hertz is deaf to a slammed door coming up the stand, while the voice arrives through the air. The elastomer wants low stiffness, so the resonance sits far below the voice; high damping, so one knock does not become a slow wobble; and no creep, since a cord that takes a set lets the microphone sag onto the frame it was meant to float in. The costs: cheap rubber creeps and perishes and the mount quietly stops working; soft enough to isolate is floppy enough to swing; the cable is a second path and must be looped loose; and the mount is tuned for one weight, so a heavier microphone sags and a lighter one rings.",
  stats: [["Wants", "low stiffness, high internal damping"], ["Fails by", "creep: the cord sags into a set"], ["Tuned", "below the band being recorded"]],
  uses: "Studio microphone suspensions, boom-pole cradles, drum and tom isolation mounts, sensitive instrument stands.",
  link: "https://en.wikipedia.org/wiki/Shock_mount"
},
{
  id: "endpin", cat: "music", name: "Endpin and stopper",
  sub: "couple to the floor, or do not", img: "endpin", extra: ["endpin2", "endpin3"],
  hook: "A cello spike makes the floor part of the instrument: steel driven into a wooden stage couples the body to a big radiator, and players hear the room change. A rubber stopper cuts the coupling; most use one.",
  more: "A steel or carbon rod through the bottom block, clamped by a thumbscrew, its tip biting the floor or sitting in something; a steel point in a sprung stage passes the body's vibration into the boards and the cellist feels the floor answer, which some want and some halls forbid. Most players push the point into a rubber puck or an anchor strapped to the chair, because the first duty of the fitting is to stop a cello worth a car sliding off the stage. The costs: a point that grips a floor scars it, so halls ban bare steel; a rubber stop cuts the floor's help too; a puck on a polished floor slides anyway; the thumbscrew loosens mid-concert and the cello sinks; and couple or isolate is the argument behind every mount in this category.",
  stats: [["Steel spike", "couples the body to the floor"], ["Carbon fibre", "stiffer, lighter, different balance"], ["Rubber stopper", "isolates, and stops the slide"]],
  uses: "Cellos and double basses, bassoons, some banjos, drums and speaker stands.",
  link: "https://en.wikipedia.org/wiki/Endpin"
},
{
  id: "reedcane", cat: "music", name: "Reed cane (Arundo donax)",
  sub: "a grass, cut at two years and cured", img: "reedcane", extra: ["reedcane2", "reedcane3"],
  hook: "A giant grass whose stem wall is a natural composite: stiff fibre bundles running lengthwise through soft pith, what a vibrating tongue wants. No two slips behave alike; players buy a box of ten and keep three.",
  more: "Arundo donax grows five metres in a season along Mediterranean rivers, the best of it in the Var; canes are cut in winter at two years, sunned for months until gold, split and planed to a blade a tenth of a millimetre thick at the tip. The fibres run the length of the blade in soft pith, so the tip flexes, closes against the mouthpiece hundreds of times a second and springs back; density differs cane to cane, so a reed is graded by hardness, not thickness, and no box is uniform. The costs: most of a box is rejected and the rest lasts weeks; it swells with saliva and warps as it dries; damp softens it and dry air cracks it; the crop is one plant in one climate; and synthetic reeds, consistent and waterproof, supply half of what players want.",
  stats: [["Cut", "at about two years, then cured in sun"], ["Graded by", "hardness, not thickness"], ["Yield", "most of a box gets rejected"]],
  uses: "Clarinet and saxophone reeds, oboe and bassoon double reeds, bagpipe and organ reeds, shawms and duduks.",
  link: "https://en.wikipedia.org/wiki/Reed_(mouthpiece)"
},
{
  id: "ebonite", cat: "music", name: "Ebonite",
  sub: "rubber vulcanised until it is hard", img: "ebonite", extra: ["ebonite2", "ebonite3"],
  hook: "Rubber cooked for hours with up to half its weight in sulphur, until it stops being elastic and becomes a hard, dead, machinable solid. Mouthpieces are made of it for that deadness: it absorbs, not rings.",
  more: "A few percent of sulphur gives a tyre; thirty or forty, baked for hours, ties the chains at nearly every link and leaves a black solid like hardwood that turns and polishes to a dull shine. It was the first thermoset, and from the 1850s it made combs, pens, dentures and battery cases; in a mouthpiece it damps the chamber walls, so the tone comes from reed and air column, and a repairer can reface it by hand with a file and glass. The costs: ultraviolet oxidises the surface olive-brown, and it smells and tastes of sulphur; it is brittle and a dropped mouthpiece chips at the tip; most cheap mouthpieces are a plastic dyed to look like it; and it was sold for a century as artificial ebony, which it is not.",
  stats: [["Sulphur", "around a third to a half by weight"], ["Works like", "a hard plastic, cut and refaced by hand"], ["Ages by", "oxidising brown-green in UV"]],
  uses: "Clarinet and saxophone mouthpieces, bagpipe parts, fountain pens, bowling balls, battery cases, old dentures.",
  link: "https://en.wikipedia.org/wiki/Ebonite"
},
{
  id: "snarewire", cat: "music", name: "Snare wires",
  sub: "coiled steel resting against the lower head", img: "snarewire", extra: ["snarewire2", "snarewire3"],
  hook: "What makes a snare drum a snare drum is a bundle of steel coils stretched just touching the bottom head, so every hit sets them slapping against it. A deliberate noise generator: the coils are tuned to nothing.",
  more: "Each snare is a tight spiral of fine steel wire soldered at both ends to a strip, and the strainer pulls the set across the resonant head with just enough tension that the wires lie on it and bounce free; a stroke on the batter head drives air down the shell, the bottom head jumps, and the wires rattle against it, broadband noise on a pitched drum, which is why a snare cuts through when a tom cannot. Gut is still used in orchestral drums, for a drier, darker buzz. The costs: the wires answer anything that moves the head, so a bass note across the room makes them buzz and the player throws them off or lives with it; too tight and they choke, too loose and they splash; and the strainer is the drum's one moving part and the first to fail.",
  stats: [["Coils", "16 to 42, commonly 20"], ["Tuned to", "nothing: broadband by design"], ["Buzzes", "in sympathy with any loud note nearby"]],
  uses: "Snare drums, piccolo snares, orchestral field drums, cajon interiors.",
  link: "https://en.wikipedia.org/wiki/Snare_drum"
},
{
  id: "conepulp", cat: "music", name: "Speaker cone pulp",
  sub: "paper felted onto a cone screen", img: "conepulp", extra: ["conepulp2", "conepulp3"],
  hook: "A cone wants three things that fight: stiff, light and lossy. Metal wins two and loses the third; a stiff cone breaks up ringing like the bell it is. Paper breaks up as mush, so pulp cones outlived every obituary.",
  more: "A slurry of wood or wool fibre is sucked onto a conical screen, pressed and dried on a hot mould, trimmed and doped; the fibres lie every way, so the sheet is stiff for its weight and full of friction that turns vibration into heat. That loss is the point: every cone stops moving as a piston somewhere in its band and starts flexing, and paper flexes into a gentle roll-off where aluminium rings at a sharp peak, which is why guitar speakers and most woofers are still pulp. The costs: paper drinks humidity and softens, so it is doped and still drifts with the weather; it is the floppiest choice, so bass limit and distortion sit lower than with a stiff cone; no two cones from one mould match; and it tears, which a cleaner's finger will prove.",
  stats: [["Made by", "felting wet pulp onto a cone screen"], ["Wants", "stiff, light and lossy at once"], ["Breakup", "soft, not a ringing peak"]],
  uses: "Woofers and full-range drivers, guitar amplifier speakers, studio monitors, car audio.",
  link: "https://en.wikipedia.org/wiki/Loudspeaker"
},
{
  id: "voicecoil", cat: "music", name: "Voice coil",
  sub: "wire wound on a polyimide former", img: "voicecoil", extra: ["voicecoil2", "voicecoil3"],
  hook: "The part of a loudspeaker that moves under power: metres of copper or clad aluminium wound on a polyimide tube and hung in a gap a millimetre wide. Every property is a compromise with heat; glue fails first.",
  more: "The coil sits in the magnet's ring gap, current pushes against the field and the former pushes the cone; the wire is enamelled copper, or aluminium with a copper skin for a third of the mass, baked in a high-temperature adhesive onto a former that must stay round to a tenth of a millimetre in a gap it must never touch. Most of the amplifier's power ends as heat in a few grams of wire, two hundred degrees in a loud passage; the resistance rises and the output quietly drops: power compression. The costs: the adhesive chars before the wire melts, and a cooked coil unwinds; an overheated coil swells and rubs the gap, the scrape that ends a driver; a metal former damps, a paper one sags; and all of it is hidden, so the first warning is the smell.",
  stats: [["Gap", "about 1 mm, and it must not touch"], ["CCAW", "trades conductivity for mass"], ["Fails by", "heat: adhesive first, wire second"]],
  uses: "Every moving-coil loudspeaker and headphone, shakers, hard-disk head actuators, voice-coil motors.",
  link: "https://en.wikipedia.org/wiki/Voice_coil"
},
{
  id: "marimbarose", cat: "music", name: "Honduras rosewood",
  sub: "Dalbergia stevensonii bar stock", img: "marimbarose", extra: ["marimbarose2", "marimbarose3"],
  hook: "The wood concert marimba bars are sawn from, chosen for a mix nothing else has: dense and oily enough to ring long, with enough damping that the note is warm, not metal's clang. The tuning is cut, not chosen.",
  more: "Honduras rosewood grows slowly in Belize and Guatemala and comes as quarter-sawn billets, deep red-brown with the oils that keep it ringing; each bar is cut to length for the pitch, then an arch is scooped from its underside until the first overtone sits two octaves above the fundamental, which makes a marimba sound like a note and not a struck plank; the arch is tuned by ear and scraper. The costs: the whole Dalbergia genus went onto CITES in 2017, so makers work in padauk, synthetic bars and reclaimed stock; the wood moves with humidity and a bar drifts a few cents between seasons; a hard mallet or a drop cracks it and a cracked bar is firewood; and the best trees were cut decades ago, so what remains is smaller and knottier.",
  stats: [["Density", "about 0.95 to 1.1 g per cm3"], ["Tuned by", "undercutting the overtone to four times"], ["Supply", "CITES-listed since 2017"]],
  uses: "Marimba and xylophone bars, fine guitar backs, clarinet bodies, knife scales.",
  link: "https://en.wikipedia.org/wiki/Dalbergia_stevensonii"
},
{
  id: "rhodestine", cat: "music", name: "Rhodes tine",
  sub: "a hardened steel rod, struck off centre", img: "rhodestine", extra: ["rhodestine2", "rhodestine3"],
  hook: "A Rhodes key does not hit a string: it hits a stiff steel rod clamped at one end. A cantilever's overtones are not whole-number ratios like a string's, so it sounds closer to a bell than a piano. That is the sound.",
  more: "The tine is a spring-steel rod screwed at its root to a heavy tone bar that stores energy and feeds it back for sustain; a spring slid along the tine tunes it, a neoprene hammer strikes it, and a pickup a millimetre from its tip turns the motion into a signal: a tuning fork with one leg heard. The bark in the attack is set by how far the tine sits off the pickup's centre line, the voicing a technician adjusts with a screwdriver. The costs: the tine fatigues at the clamp, so tines snap mid-gig and a spare set is part of owning the piano; the tuning springs creep; the geometry drifts and needs regular voicing; and the harp weighs what a cast-iron frame would, so the suitcase model took two people.",
  stats: [["Vibrates as", "a cantilever, not a string"], ["Overtones", "inharmonic: bell, not piano"], ["Fails by", "fatigue at the clamp"]],
  uses: "Fender Rhodes and Rhodes Mark pianos, and the electric piano sound sampled from them.",
  link: "https://en.wikipedia.org/wiki/Rhodes_piano"
},
{
  id: "metaldome", cat: "music", name: "Metal dome diaphragm",
  sub: "aluminium, titanium or beryllium, 25 mm", img: "metaldome", extra: ["metaldome2", "metaldome3"],
  hook: "A dome must stay a piston across its range, so what matters is stiffness against density, which sets where breakup lands. Aluminium puts it just above hearing, beryllium far above. Metal rings hard when it breaks.",
  more: "A foil a few hundredths of a millimetre thick is pressed into a dome 25 millimetres across, and glued to a voice coil at its rim; above a certain frequency the dome stops moving as one and flexes in rings, and that frequency scales with the speed of sound in the metal, so aluminium breaks up near 25 kilohertz and beryllium around 40, where nobody is listening. Below breakup it is more accurate than cloth because it does not flex at all. The costs: when it does break up it rings at a sharp peak, where fabric turns the energy to heat, so the designer filters it or lives with it; beryllium is toxic as dust and a damaged dome carries a warning not to touch it; it costs ten times aluminium; and a metal dome dents under a child's finger for good.",
  stats: [["Dome", "about 25 mm across, tens of micrometres thick"], ["Beryllium", "about 3x the sound speed of aluminium"], ["Costs", "a hard ring at breakup, and in Be, toxicity"]],
  uses: "Hi-fi and studio monitor tweeters, compression driver diaphragms, in-ear and headphone drivers.",
  link: "https://en.wikipedia.org/wiki/Tweeter"
},
{
  id: "recordvinyl", cat: "music", name: "Record vinyl",
  sub: "PVC with vinyl acetate and carbon black", img: "recordvinyl", extra: ["recordvinyl2", "recordvinyl3"],
  hook: "A copolymer picked for one job: to flow into a groove tens of micrometres wide under a hot stamper, then hold it for decades while a diamond drags across it. Carbon black is for conductivity as much as colour.",
  more: "PVC with ten to fifteen percent vinyl acetate, which softens it enough to mould at 160 degrees without cooking, plus stabilisers and carbon black; a warm puck of it is squeezed between two nickel stampers for half a minute, trimmed and cooled flat. The groove is a spiral forty to eighty micrometres wide whose walls wiggle with the music, and the stylus presses with tonnes per square centimetre, so the plastic must be hard enough not to flow and tough enough not to chip. The costs: unfilled vinyl charges with static and pulls in dust, which is why clear and coloured pressings are noisier; every play wears the modulation a little; heat warps it and a damp sleeve grows mould; and a 180 gram pressing buys flatness, not fidelity.",
  stats: [["Groove", "tens of micrometres wide"], ["Carbon black", "for antistatic as much as colour"], ["180 g", "flatness and handling, not fidelity"]],
  uses: "LP and single pressings, dub plates, picture discs; the lacquer master is a different material.",
  link: "https://en.wikipedia.org/wiki/Phonograph_record"
},
{
  id: "woodwool", cat: "music", name: "Wood-wool cement board",
  sub: "shaved spruce bound in cement", img: "woodwool", extra: ["woodwool2", "woodwool3"],
  hook: "Wood shavings sprayed with cement and pressed into a slab loose enough to see through; the gaps are the product. Sound entering the tangle is lost rubbing on fibre, so it absorbs with no membrane or cavity to fail.",
  more: "Spruce is shaved into ribbons, soaked in a mineral solution so its sugars do not stop the cement setting, tumbled with cement and pressed lightly in moulds, so the slab comes out a stiff open mat of grey strands, half air. Air moving through loses energy to friction, so a 25 millimetre board soaks up most of what hits it above a few hundred hertz, and the cement makes it incombustible, rot-proof and indifferent to damp, which is why it has hung on school hall ceilings since the 1920s. The costs: it is heavy and brittle at the edges; it does little below two hundred hertz without a deep cavity behind; it sheds grit; paint closes the pores and halves the absorption; and it is, by common agreement, the ugliest absorber there is.",
  stats: [["Made of", "wood shavings, mineral-bound"], ["Absorbs by", "friction in the open tangle"], ["Indifferent to", "fire, rot and damp"]],
  uses: "Hall and classroom ceilings, car park soffits, industrial acoustic linings, permanent formwork, hedgehog houses.",
  link: "https://en.wikipedia.org/wiki/Wood_wool"
},
{
  id: "drumshell", cat: "music", name: "Drum shell maple",
  sub: "plies cross-laminated into a cylinder", img: "drumshell", extra: ["drumshell2", "drumshell3"],
  hook: "Maple veneers, grain crossed, pressed round a mould, because a shell's main job is holding two heads in tension without going oval. Most of the note is the heads; the shell decides how fast it leaves them.",
  more: "Six to eight veneers are glued and rolled into a mould with each ply's grain crossing the last, pressed until the glue cures into a cylinder that stays round under tension; the ends are cut true and a bearing edge routed on, the bevel the head sits on. Maple is the default, stiff, light and even; birch is brighter, mahogany warmer, and a thin shell flexes and sings where a thick one reflects and projects, jazz against rock. The costs: the species matters less than drummers believe and the edge more, sharp for bright, rounded for warm and short; a shell out of round will not seat its head and cannot be tuned; the plies delaminate in a damp cellar; and the finish, lacquer or wrap, changes the sound more than the wood under it.",
  stats: [["Ply", "six to eight, grain crossed"], ["Note", "mostly the heads; the shell colours it"], ["Matters most", "the bearing edge, not the species"]],
  uses: "Drum kits, snare and orchestral drums, marching percussion, cajons.",
  link: "https://en.wikipedia.org/wiki/Drum"
},
{
  id: "goss", cat: "music", name: "Grain-oriented electrical steel",
  sub: "the hum in every transformer", img: "goss", extra: ["goss2", "goss3"],
  hook: "Three-percent silicon iron, rolled and annealed until the crystals all point one way, so magnetising it along the strip costs little. It also stretches a few parts per million each time, twice a cycle. The hum.",
  more: "Silicon cuts the eddy currents in a thin sheet, and Norman Goss's rolling and annealing of 1934 grows grains with their easy axis along the strip, so a core stacked from it magnetises with a fraction of plain steel's loss. The hum is magnetostriction: each grain lengthens as its domains swing into line and relaxes as they swing back, so the core stretches twice per cycle and radiates 100 or 120 hertz, hence the clamps and varnish on audio transformers. The costs: it is good only along the grain, so the core is cut and stacked with the flux following it, and every corner is a loss; it is brittle and the laminations must be insulated, so a core is a thousand coated sheets; and the hum, in a quiet studio, is the sound of the mains.",
  stats: [["Silicon", "about 3 percent, grains aligned"], ["Strain", "a few parts per million, per cycle"], ["Hums at", "twice the line frequency, 100 or 120 Hz"]],
  uses: "Power and audio transformer cores, large motor and generator laminations, inductors and chokes.",
  link: "https://en.wikipedia.org/wiki/Electrical_steel"
},
{
  id: "hammerfelt", cat: "music", name: "Piano hammer felt",
  sub: "graded wool, pressed on under tons", img: "hammerfelt", extra: ["hammerfelt2", "hammerfelt3"],
  hook: "One sheet of felt per piano, pressed round the hammer cores under tonnes so it ends up hard at the core and soft at the surface. That gradient is the tone; a technician changes a piano by changing the felt alone.",
  more: "A tapered sheet of dense felt, thick at the bass end and thin at the treble, is glued round a strip of wooden cores and pressed under tonnes until the glue sets, then sawn into hammers; the wool at the core is crushed hard and the outer layers stay springy: a soft face on a hard heart. The soft face spreads the blow and swallows the upper partials, the hard core gives the energy straight back, and the balance is voicing: needles to loosen the felt, lacquer to harden it, note by note. The costs: the felt packs where it hits the strings and cuts grooves, so a hard-played piano goes harsh and must be reshaped; moths eat it; voicing is easy to overdo, and a hammer needled too far is dead; and a new set costs what a car does.",
  stats: [["Built", "soft at the surface, hard at the core"], ["Voiced", "with needles or lacquer, note by note"], ["Contact", "a couple of milliseconds per blow"]],
  uses: "Grand and upright piano hammers, damper felts, action bushings and punchings.",
  link: "https://en.wikipedia.org/wiki/Action_(piano)"
},
{
  id: "ribbonmic", cat: "music", name: "Microphone ribbon",
  sub: "corrugated aluminium, about 2 µm thick", img: "ribbonmic", extra: ["ribbonmic2", "ribbonmic3"],
  hook: "A strip of aluminium ten times thinner than foil, corrugated so it breathes like a concertina and hung slack in a magnet gap: the whole transducer is one piece of metal, no diaphragm, no coil. It is also a fuse.",
  more: "The ribbon is a few millimetres wide and a few centimetres long, clamped at its ends between the poles of a magnet; pressure differences push it to and fro, it cuts the field, and the millivolts induced go out through a transformer. Hanging it loose puts its resonance below everything it records, which is why a ribbon sounds even where a tensioned diaphragm peaks, and why brass and guitar amplifiers have gone through one since the RCA 44 of 1931. The costs: the output is tiny and the preamp must be quiet; phantom power down a miswired cable, a kick drum up close or a windy car park stretches or tears it, and a stretched ribbon never comes back; it is heavy, because the magnet is; and it is replaced, not repaired, by someone with steady hands.",
  stats: [["Thickness", "about 2 micrometres, a few mm wide"], ["Resonance", "below the band it records"], ["Killed by", "a gust, a kick drum or a wiring fault"]],
  uses: "Studio ribbon microphones for brass, strings, guitar amplifiers and drum overheads; broadcast classics.",
  link: "https://en.wikipedia.org/wiki/Ribbon_microphone"
},
{
  id: "drumhead", cat: "music", name: "Drumhead film",
  sub: "biaxially drawn polyester, one ply or two", img: "drumhead", extra: ["drumhead2", "drumhead3"],
  hook: "Until 1957 a drum head was calfskin, slack in damp weather and tight in dry, so tuning was done between numbers. Polyester film does not care what the room is doing. The head is the sound; the shell colours it.",
  more: "A sheet of stretched polyester a quarter of a millimetre thick is clamped into an aluminium hoop with a collar formed to seat on the bearing edge; it is sold clear, coated with a sprayed texture for brushes, or as two plies with oil between them that damps the ring. It holds its tension because it hardly creeps and takes up no water, so a drum tuned in a cold van is still in tune under hot lights, which skin never managed, and a head costs a tenth of a skin. The costs: it stretches in its first hour and must be retuned; a dent is a buzz; it pits and is replaced every few months on a working kit; it sounds brighter and shorter than skin, which timpanists still mind; and the coating wears off in a white halo where the drummer hits.",
  stats: [["Film", "about 180 to 250 micrometres for a single ply"], ["Two-ply", "oil between the plies, for damping"], ["Unlike skin", "indifferent to humidity"]],
  uses: "Drum kits and marching drums, timpani heads, practice pads, frame drums and banjos.",
  link: "https://en.wikipedia.org/wiki/Drumhead"
},
{
  id: "accordionreed", cat: "music", name: "Free reed plate",
  sub: "a blued steel tongue over an aluminium plate", img: "accordionreed", extra: ["accordionreed2", "accordionreed3"],
  hook: "A clarinet reed beats on something; a free reed swings through a slot its own shape, hundredths of a millimetre clear, touching nothing. The pitch is the steel tongue's alone: one reed sounds the same in any box.",
  more: "A tongue of blued spring steel is riveted at its root over a slot in an aluminium plate, two per plate, one for each direction of the bellows; air bends the tongue through the slot, the flow is cut, the tongue springs back, and the puffs repeat at its own frequency, set by its length, thickness and the weight at its tip. The plates are waxed onto wooden blocks, and tuning is by filing: metal off the tip to go flat, off the root to go sharp; the musette shimmer is two reeds a few cents apart, beating on purpose. The costs: a tongue too close sticks and too far wheezes, and the gap is set by hand; the wax dries and reeds fall off in a hot car; a hard-played reed cracks at the rivet; and an instrument carries hundreds, every one tuned by ear.",
  stats: [["Clearance", "a few hundredths of a millimetre"], ["Tuned", "by filing: tip flat, root sharp"], ["Musette", "pairs detuned on purpose, to beat"]],
  uses: "Accordions and concertinas, harmonicas, harmoniums and reed organs, melodicas, pitch pipes.",
  link: "https://en.wikipedia.org/wiki/Free_reed_aerophone"
},
{
  id: "nickelsilver", cat: "music", name: "Nickel silver",
  sub: "copper, nickel and zinc, with no silver in it", img: "nickelsilver", extra: ["nickelsilver2", "nickelsilver3"],
  hook: "Brass with ten to twenty percent nickel, which turns it white, stiff and hard and makes it shrug off the acid in breath. No silver in it. For small parts that take wear, posts, slides, fretwire, nothing beats it.",
  more: "Copper with twenty percent zinc and ten to twenty nickel gives an alloy harder and stiffer than yellow brass that takes a thread and stays bright where brass goes green: Germany industrialised it in the 1820s and it became the base metal under electroplate, the N in EPNS. In an instrument it is the trombone slide that runs years without wearing oval, a clarinet's keywork, a guitar's fretwire and the body of most student flutes, which carry a few microns of real silver, so the tarnish is the plating, not the alloy. The costs: it is dearer than brass and dulls tools; nickel gives some lips a rash; it is the colour of silver without the value, and its names were chosen to blur that; and a dropped slide dents like any brass.",
  stats: [["Nickel", "10 to 20 percent, rest copper and zinc"], ["Harder", "and stiffer than yellow brass"], ["The white", "is the alloy itself, not plating"]],
  uses: "Flute and clarinet keywork, trombone slides, brass trim and braces, fretwire, cutlery blanks, coinage, zips.",
  link: "https://en.wikipedia.org/wiki/Nickel_silver"
},
{
  id: "vibebars", cat: "music", name: "Vibraphone aluminium",
  sub: "alloy bars, undercut and tuned", img: "vibebars", extra: ["vibebars2", "vibebars3"],
  hook: "Swap rosewood for aluminium and the damping almost disappears: a struck bar rings for seconds, lovely once and intolerable in a melody. So the instrument is built around killing the sound it is so good at making.",
  more: "The bars are extruded aluminium, cut to length and arched underneath like a marimba bar until the first overtone sits two octaves up, then strung on cord through the nodes, with a tuned tube under each. A bar rings for ten seconds or more, and Deagan's answer in 1927 was two mechanisms: a felt damper bar lifted off all the notes by a pedal, so the player phrases like a pianist, and a motor turning discs in the resonator mouths a few times a second, the vibrato the instrument is named for. The costs: a bar struck without the pedal rings into the next note; the motor hums and the belt slips; the frame weighs as much as the player; a dropped bar goes out of tune and cannot be scraped back like wood; and the instrument needs mains for its wobble.",
  stats: [["Rings", "for seconds; hence the damper bar"], ["Undercut", "to tune the overtone, as in wood"], ["Wobble", "discs spinning in the resonator mouths"]],
  uses: "Vibraphones, glockenspiels and chime bars, tuned percussion, film and jazz scoring.",
  link: "https://en.wikipedia.org/wiki/Vibraphone"
},
{
  id: "lacquermaster", cat: "music", name: "Lacquer master disc",
  sub: "nitrocellulose flowed onto polished aluminium", img: "lacquermaster", extra: ["lacquermaster2", "lacquermaster3"],
  hook: "Every pressed record starts here: an aluminium disc coated with nitrocellulose lacquer, soft enough for a hot sapphire to cut a groove and hard enough to keep it. A consumable with a clock running, and flammable.",
  more: "An aluminium blank, polished, is flow-coated with nitrocellulose lacquer plasticised with castor oil, a skin a fifth of a millimetre thick that cuts like butter; on the lathe a heated sapphire carves the groove in one pass while a vacuum takes the thread. The lacquer keeps hardening and shrinking from the moment it is cut, so the disc is silvered and nickel-plated within days, or the groove changes under it. The costs: nitrocellulose is guncotton with a plasticiser, and a cupboard of lacquers is a fire waiting to happen; a cut lacquer plays a few times before the groove wears; and the industry depended on two factories, so when Apollo Masters in California burned in 2020, vinyl pressing stopped for months while the Japanese one caught up.",
  stats: [["Coating", "nitrocellulose on polished aluminium"], ["Shelf life", "days; it must be plated quickly"], ["Supply", "two factories, one of which burned down"]],
  uses: "Mastering for vinyl, reference acetates, dub plates for sound systems.",
  link: "https://en.wikipedia.org/wiki/Acetate_disc"
},
{
  id: "cabinetmdf", cat: "music", name: "Cabinet MDF",
  sub: "wood fibre and resin, chosen for being dead", img: "cabinetmdf", extra: ["cabinetmdf2", "cabinetmdf3"],
  hook: "A speaker box wants to be heavy, stiff and silent; wood fails at all three: stiffer along the grain than across, it moves with the weather and rings at will. Fibreboard has no grain and plenty of friction inside.",
  more: "Wood chips are ground to fibre, blended with urea-formaldehyde resin and hot-pressed into a board of about 750 kilograms per cubic metre, the same in every direction and dead flat. For a cabinet that means panels whose resonances are weak and, more usefully, predictable, so a designer can brace for a mode that will be where the sums put it; it machines to a clean edge, it is cheap, and its mass is part of the point. The costs: it is heavy; it blunts tooling and the dust is fine and formaldehyde-laden; screws into its edge split it, so joints are glued and rebated; if it gets wet it swells and never comes back; and it is stiff only in proportion to its thickness, so good boxes use it thick, braced, or not at all.",
  stats: [["Density", "about 700 to 800 kg per cubic metre, no grain"], ["Damping", "higher than plywood, stiffness lower"], ["Ruined by", "water: it swells and stays swollen"]],
  uses: "Loudspeaker cabinets, studio furniture and desks, flat-pack furniture, shop fitting, templates and jigs.",
  link: "https://en.wikipedia.org/wiki/Medium-density_fibreboard"
},
{
  id: "pickupwire", cat: "music", name: "Pickup magnet wire",
  sub: "42 AWG copper under a few microns of enamel", img: "pickupwire", extra: ["pickupwire2", "pickupwire3"],
  hook: "A guitar pickup is five to eight thousand turns of copper thinner than a hair under two micrometres of enamel, wound round magnets until it has enough inductance to be heard. The sound follows from that number.",
  more: "The wire is 42 gauge, sixty micrometres of copper under enamel, wound onto a bobbin round six magnet slugs at a few thousand turns a minute; a vibrating steel string disturbs the field, the change induces a voltage in the coil, and the coil's inductance against the cable's capacitance forms a resonant peak that is the pickup's voice. More turns means more output and a lower peak, louder and darker; fewer means brighter and quieter. The costs: a nick in the enamel shorts turns and dulls the coil, and the wire breaks if you look at it; the coil must be dipped in wax or the turns move with the loudspeaker and the amplifier squeals; copper corrodes under sweat and a pickup dies open after decades; and a coil cannot be repaired, only rewound.",
  stats: [["Wire", "42 AWG, about 63 micrometres bare"], ["Turns", "five to eight thousand"], ["Potted in wax", "or the coil squeals"]],
  uses: "Guitar and bass pickups, transformers and relays, small motors and solenoids, headphone drivers.",
  link: "https://en.wikipedia.org/wiki/Magnet_wire"
},
{
  id: "woodpipe", cat: "music", name: "Organ pipe wood",
  sub: "quartersawn pine and oak, square in section", img: "woodpipe", extra: ["woodpipe2", "woodpipe3"],
  hook: "Half a large organ is wooden pipes, square because boards are square: four planks and two blocks make a pipe that would otherwise be rolled and soldered from soft metal. In the bass it is the only sane choice.",
  more: "Four boards of quartersawn pine or oak are glued into a long box with a block at the foot and a lip cut for the mouth; the wind strikes the lip and sets the air column singing as in a metal pipe, but the wall is thick and lossy, so the tone is rounder than tin, and a stopped pipe sounds an octave below its length. A 32-foot metal pipe would cost a fortune and sag under its own weight; a wooden one is big carpentry, which is why the pedal ranks that shake the floor are wood. The costs: a board that cups shifts the mouth out of line and the pipe stops speaking, so the stock is seasoned for years and still retuned with the seasons; woodworm and damp eat it; and the voicing is cut into the wood and cannot be nudged with pliers like metal.",
  stats: [["Section", "square: boards, not rolled sheet"], ["Bass ranks", "almost always wood, not metal"], ["Fails by", "warping, which puts a pipe out of speech"]],
  uses: "Organ flue stops and pedal ranks, stopped diapasons and gedackts, fairground organs, wooden flutes and recorders.",
  link: "https://en.wikipedia.org/wiki/Organ_pipe"
},
{
  id: "valvepiston", cat: "music", name: "Valve piston alloy",
  sub: "monel or nickel silver, fitted to microns", img: "valvepiston", extra: ["valvepiston2", "valvepiston3"],
  hook: "A trumpet piston slides in its casing on a film of oil with a gap too small for air to leak past, hundreds of thousands of times a year, in warm, acidic breath. Everything is the fit; one dent in the casing ends it.",
  more: "The piston is a tube with ports drilled through it at angles, so that up the air runs straight through and down it detours round a loop of extra tubing; it is ground to within a few micrometres of the casing bore, and a spring returns it in milliseconds. Monel, two thirds nickel and a third copper, is the standard because it is hard, stable and does not corrode in breath, where brass pits and seizes; the oil is the seal. The costs: the clearance that makes a valve fast makes it fragile; dried saliva and the wrong oil gum it, so valves are oiled daily and the horn washed in the bath; a dropped piston is scrap; the ports must line up or the note stuffs up; and a worn valve leaks long before it feels loose, which the player hears as a tired horn.",
  stats: [["Clearance", "a few micrometres, sealed by oil"], ["Monel", "about two thirds nickel, a third copper"], ["Killed by", "one dent in the casing"]],
  uses: "Trumpet, cornet, euphonium and tuba pistons; rotary valve cores; instrument repair.",
  link: "https://en.wikipedia.org/wiki/Monel"
},
{
  id: "saxpad", cat: "music", name: "Woodwind pad",
  sub: "leather over felt, bedded in shellac", img: "saxpad", extra: ["saxpad2", "saxpad3"],
  hook: "Every tone hole must be shut by something soft enough to mould to a rim that is never quite flat, and constant enough to come back to the same place for years: felt faced with kid skin, floated on melted shellac.",
  more: "A disc of wool felt is backed with card, faced with thin kidskin glued round the edge, and pierced for a metal resonator that reflects sound back up the tube instead of into the leather; it sits in the key cup on a bed of shellac, and the technician warms the cup and floats the pad until it meets the rim all round at once, checked with cigarette paper, the finest adjustment of any overhaul. The costs: leather hardens, cracks and sticks, so a saxophone is repadded every decade or so, at a price; moisture swells the felt, so a pad that seated in the shop leaks in a cold hall; a bent key or a dented rim lifts one edge by a hair and the bottom of the range goes; and the player feels a leak as a stiff instrument long before they can find it.",
  stats: [["Built from", "a felt disc faced with kid or fish skin"], ["Bedded", "in shellac, melted to align it"], ["A hair-wide leak", "kills the bottom of the range"]],
  uses: "Saxophone, clarinet, flute and bassoon pads; overhauls and repadding.",
  link: "https://en.wikipedia.org/wiki/Key_(instrument)"
},
{
  id: "moldedcab", cat: "music", name: "Moulded speaker enclosure",
  sub: "glass-filled ABS or polypropylene, one shot", img: "moldedcab", extra: ["moldedcab2", "moldedcab3"],
  hook: "A powered PA top of the Behringer Eurolive sort is one injection moulding, millimetres of glass-filled plastic with ribs inside. Nothing on it is flat, and the stiffness comes from that geometry, not from mass.",
  more: "Molten polypropylene or ABS, loaded with glass fibre, is shot into a steel tool the size of a wardrobe, and the box, the horn flare, the handles, the pole socket and the slanted monitor face come out in one piece, with ribs across every panel so that none is a flat drum skin; the amplifier bolts into a recess at the back. A twelve-inch box weighs fifteen kilos where plywood would be twenty-five, shrugs off rain and a drop off a stage, and damps itself better than wood. The costs: the tool costs six figures, so the shape is frozen for the life of the model; an unribbed patch still sings along with the woofer; the plastic creeps in a hot van and the pole socket wallows out; and the hollow knock of a cheap one tells the audience what it is.",
  stats: [["Wall", "a few mm, ribbed from inside"], ["Resin", "glass-filled ABS or polypropylene"], ["One tool", "box, horn, handles and pole cup"]],
  uses: "Powered PA tops and floor monitors, column arrays, portable subwoofers, DJ and battery speakers.",
  link: "https://en.wikipedia.org/wiki/Loudspeaker_enclosure"
},
{
  id: "grillesteel", cat: "music", name: "Perforated grille steel",
  sub: "punched sheet, powder-coated black", img: "grillesteel", extra: ["grillesteel2", "grillesteel3"],
  hook: "A millimetre of steel punched with round holes on a stagger, a third to a half of the area open. Sound ignores holes far smaller than its wavelength, so the grille is absent to the ear and solid to a mic stand.",
  more: "A coil of mild steel runs through a press that punches thousands of holes a stroke; the blank is sheared, dished or rolled at the lip to put back the stiffness the holes took out, and powder-coated black, because wet paint chips off an edge that gets kicked. Behind it is usually foam or cloth, to hide the driver, not to change the sound. The costs: punching halves the stiffness, so a flat grille buzzes against the baffle unless it is formed or framed; it rusts at the cut edge of every hole once the coating is breached, so old grilles bleed orange; the open area is a trade between seeing the driver and shielding it, and a fine grille shades the tweeter above ten kilohertz; and a dented grille rubs the cone it was there to protect.",
  stats: [["Open area", "roughly 30 to 45 percent"], ["Sheet", "about 1 to 1.6 mm steel"], ["Shaped", "dished or rolled, to get stiffness back"]],
  uses: "Loudspeaker and monitor grilles, amplifier cages, microphone baskets, equipment racks, ventilation.",
  link: "https://en.wikipedia.org/wiki/Perforated_metal"
},
{
  id: "surround", cat: "music", name: "Driver surround",
  sub: "a rolled rubber or foam edge seal", img: "surround", extra: ["surround2", "surround3"],
  hook: "The ring that joins cone to basket does two incompatible things: seal front from back absolutely, and offer no resistance over millimetres of travel. The answer: a half-roll that unrolls rather than stretches.",
  more: "A ring of rubber, polyurethane foam or treated cloth is moulded into a half-round bead, glued to the cone inside and the basket outside, and as the cone moves the roll simply rolls, so the restoring force is small until the roll runs out; it also damps the ragged resonance round the edge of the cone. Foam is the lightest and deadest, which is why it was on every hi-fi woofer of the eighties; rubber lasts longer; cloth is for guitar speakers. The costs: polyurethane foam hydrolyses, and a twenty year old surround crumbles to dust at a touch, which is why refoaming dead woofers is a small industry; too stiff raises the bass cut-off and too soft lets the cone rock; and it is glued, and glue is what fails in a hot car.",
  stats: [["Travel", "a few mm, with no added stiffness"], ["Materials", "nitrile or SBR rubber, PU foam, cloth"], ["Foam rot", "crumbles after 10 to 20 years"]],
  uses: "Every cone loudspeaker, from earbuds to touring subwoofers.",
  link: "https://en.wikipedia.org/wiki/Loudspeaker"
},
{
  id: "roadcase", cat: "music", name: "Road case panel",
  sub: "birch plywood under textured laminate", img: "roadcase", extra: ["roadcase2", "roadcase3"],
  hook: "Three materials, three jobs: birch plywood takes the bending, a plastic laminate takes the scuffs and the wet, and aluminium extrusion wraps every edge so the ply never meets the dock. Riveted, not screwed.",
  more: "Six to twelve millimetres of Baltic birch ply is faced both sides with ABS or PVC laminate, cut to panels joined along every edge by aluminium extrusion, with ball corners at the eight points that hit the ground first, recessed latches and handles that survive being stacked on, castors on the heavy ones, and a lining of cut foam that holds the gear off the walls. The costs: it is heavy, often heavier than what is inside, and a loaded rack is a two-person lift and a freight bill; the ply swells if the laminate is breached; rivets hold under vibration where screws back out, but a sheared rivet is a hole with no fix on the road; and a case cut for one mixer fits nothing else, so touring runs on cases that outlive their gear.",
  stats: [["Core", "6 to 12 mm birch plywood"], ["Faces", "textured ABS or PVC laminate"], ["Edges", "aluminium extrusion, riveted"]],
  uses: "Touring racks and amplifier cases, instrument and console cases, lighting and camera transport.",
  link: "https://en.wikipedia.org/wiki/Road_case"
},
{
  id: "tolex", cat: "music", name: "Tolex",
  sub: "grained vinyl on a cloth backing", img: "tolex", extra: ["tolex2", "tolex3"],
  hook: "PVC on a woven backing, embossed with a grain and contact-cemented over the plywood with the corners folded like a parcel. Cheap, wipeable, and it hides every joint and screw head in a box built in an afternoon.",
  more: "A PVC skin a few tenths of a millimetre thick is fused to a cotton scrim and embossed while hot: levant, bronco, elephant, sparkle. The cabinet maker cements both faces, lays the sheet from the middle out, slits and folds the corners like wrapping paper and tucks the edges under the baffle. The costs: the vinyl is thinnest where it stretched round a corner, so the wear starts at the corners and the handle and a gigged amplifier ends up with the scrim showing; plasticiser migrates and old tolex goes stiff, shrinks at the seams and takes a tacky bloom; a knock that would dent bare plywood tears it instead; the cement lets go in a hot van; and a recover is a strip-and-redo job few bother with, which is why worn tolex became a look.",
  stats: [["Build", "PVC skin on woven backing"], ["Fitted", "contact cement, corners folded"], ["Wears", "at corners first, where it stretched"]],
  uses: "Guitar and bass amplifier cabinets, keyboard and speaker cabinets, case coverings.",
  link: "https://en.wikipedia.org/wiki/Tolex"
},
{
  id: "grillecloth", cat: "music", name: "Grille cloth",
  sub: "open-woven cotton, rayon or metallised yarn", img: "grillecloth", extra: ["grillecloth2", "grillecloth3"],
  hook: "One acoustic requirement, that air passes through unnoticed, and one visual one, that the driver cannot be seen. They pull opposite ways, which is why the classics are loose dark weaves with a glint of metal thread.",
  more: "A loose weave of cotton, rayon or polyester, dyed dark, often with a wrapped metallic yarn, in patterns with names: salt and pepper, wheat, oxford, Vox diamond, Fender gold. It is stretched over a frame or the baffle and stapled under tension; a good cloth is nearly transparent on a meter and opaque to the eye. The costs: a slack cloth flutters against the baffle and buzzes on bass notes, and cloth sags with age and damp; smoke and dust fill the weave until it resists the air it was meant to ignore; the metallic yarns tarnish; a tear cannot be mended invisibly, so the patterns are reissued to keep old amplifiers original; and a loose weave is no protection, so a boot or a mic stand goes straight through to the cone.",
  stats: [["Needs", "low airflow resistance, high opacity"], ["Stretched", "taut, or it buzzes"], ["Clogs", "with smoke and dust"]],
  uses: "Amplifier and hi-fi speaker grilles, organ and radio fronts, acoustic panel facings.",
  link: "https://en.wikipedia.org/wiki/Guitar_amplifier"
},
{
  id: "woundstring", cat: "music", name: "Wound string",
  sub: "a hexagonal steel core under a spun wrap", img: "woundstring", extra: ["woundstring2", "woundstring3"],
  hook: "A thick plain wire at pitch is stiff, sounds sharp in its partials and hurts to bend. So a bass string is built: a hexagonal steel core carries the tension, and a wrap spun over it adds mass without stiffness.",
  more: "A steel core, drawn hexagonal, spins while a wrap wire is laid on under tension, turn against turn; the corners bite into the wrap so it cannot creep when the string is bent or cut, and the wrap alloy is the voice: phosphor bronze for acoustic warmth, nickel-plated steel for output under a magnetic pickup, pure nickel for softer, flat ribbon for no finger noise, copper for a piano bass. The costs: the wrap is a spring of thousands of turns and anything that gets between them stays, so sweat and oxide deaden a roundwound in weeks while a plain string plays on; a flatwound lasts for years and sounds like it; a kink in the core is a break waiting to happen; and tension is set by core and wrap together, so the same gauge from two makers feels different.",
  stats: [["Core", "hexagonal, carries all the tension"], ["Wrap", "phosphor bronze, nickel, or flat ribbon"], ["Why wound", "mass without stiffness"]],
  uses: "Guitar, bass and piano strings, harp and orchestral bass strings.",
  link: "https://en.wikipedia.org/wiki/String_(music)"
},
{
  id: "pick", cat: "music", name: "Plectrum",
  sub: "celluloid, acetal, nylon or Ultem", img: "pick", extra: ["pick2", "pick3"],
  hook: "What actually excites the string is a sliver of plastic, and which plastic is audible. Celluloid is bright and clicky and wears away in a few gigs, nylon flexes and softens the attack, Ultem barely flexes at all.",
  more: "A sheet of plastic is punched to shape and the edge tumbled or bevelled: celluloid, the old imitation of tortoiseshell and nearly the last celluloid still made; acetal, which Dunlop colour-codes by gauge as Tortex; nylon, which grips a damp hand; Ultem and glass-filled plastics for hitting the string hard. Thickness does the rest: half a millimetre bends away and spreads the transient, a millimetre and a half transfers it whole, and the bevel sets the click. The costs: celluloid wears visibly in hours, warps, and is nitrate film by another name; nylon goes slick with sweat; the stiff plastics chip; thick picks round a strummed chord and thin ones mush a picked line; and most of them end up in the sofa, which is why they are sold by the gross.",
  stats: [["Materials", "celluloid, acetal, nylon, Ultem"], ["Gauge", "0.4 mm flexes, 1.5 mm does not"], ["Also voiced", "by the bevel on the edge"]],
  uses: "Guitar, bass, mandolin and banjo picks; harpsichord jacks; plucked zithers.",
  link: "https://en.wikipedia.org/wiki/Guitar_pick"
},
{
  id: "gaffer", cat: "music", name: "Gaffer tape",
  sub: "matte cloth scrim, synthetic rubber adhesive", img: "gaffer", extra: ["gaffer2", "gaffer3"],
  hook: "A cotton scrim coated matte over a synthetic rubber adhesive, built for three stage needs: it tears straight by hand both ways, it does not shine under a spotlight, and it comes up without the film duct tape leaves.",
  more: "A woven cotton cloth is coated with a matte vinyl face and a thick synthetic rubber adhesive formulated to hold for a night and release clean in the morning; the cloth gives a straight tear along the weave both ways, so a rigger works it one-handed off a roll on a belt, and the matte face swallows light where a shiny tape is a highlight in a lens. The costs: it is not waterproof, duct tape has a polyethylene skin and gaffer tape does not; it costs several times as much a roll, and a tour goes through cases of it; what releases from a floor still lifts paint from a wall, and left for weeks in heat it leaves residue after all; the cheap kind is duct tape dyed black; and the marks it leaves are a trail of every set change.",
  stats: [["Carrier", "matte cloth scrim, not plastic film"], ["Tears", "straight, both ways, by hand"], ["Releases", "without the duct-tape residue"]],
  uses: "Taping down cables and setlists, marking stage positions, film and theatre rigging, repairs.",
  link: "https://en.wikipedia.org/wiki/Gaffer_tape"
},
{
  id: "drumstick", cat: "music", name: "Drumstick hickory",
  sub: "dense interlocked hardwood, matched in pairs", img: "drumstick", extra: ["drumstick2", "drumstick3"],
  hook: "Hickory is the default because its interlocked grain soaks up shock instead of passing it to the wrist, and it splinters rather than snaps. Maple is lighter and dies sooner; oak hands back every rimshot.",
  more: "Straight-grained hickory is sawn into squares, dried, turned on a copy lathe, sanded, and the tip cut round, barrel, acorn or teardrop, which decides how much of a cymbal gets excited; a nylon tip brightens it and lasts longer. Good sticks are sold in pairs matched by weight and by the pitch they ring at when rolled on a bench, because two unmatched sticks sound like two drummers. The costs: a rock drummer goes through a pair a night at the rim and the hi-hat edge; the shoulder splinters, and a splinter in a drumhead is a hole; moisture moves the weight, so a pair matched in Tennessee is unmatched in Manila; a nylon tip flies off; and lacquer is slippery in a hot hand, which is why players sand it.",
  stats: [["Wood", "hickory standard; maple light, oak hard"], ["Paired", "by weight and ringing pitch"], ["Tip", "shape sets the cymbal tone"]],
  uses: "Drum kit and orchestral sticks, mallets and rutes, marching percussion.",
  link: "https://en.wikipedia.org/wiki/Drum_stick"
},
{
  id: "truss", cat: "music", name: "Stage truss",
  sub: "welded aluminium lattice, 6082 or 6061", img: "truss", extra: ["truss2", "truss3"],
  hook: "The grid over a stage is aluminium tube welded into a lattice, fifty-millimetre chords and twenty-millimetre diagonals. Aluminium has a third of steel's stiffness, so a span is limited by sag, not by strength.",
  more: "Extruded 6082-T6 or 6061-T6 tube is jigged and TIG-welded into sections with conical spigots at the joints, pinned together on the floor and lifted on hoists; welding softens the alloy either side of each bead, so the design counts on the weaker heat-affected metal or the section is heat-treated again. The load tables are specific to the spigot system, the span and an evenly spread load. The costs: hang a motor in the wrong place and the numbers mean nothing; a bent chord or a cracked weld scraps a section, and aluminium gives no warning before it goes; forklift forks and dropped shackles dent it; it corrodes where it meets steel in the wet; and the spigots and pins get lost, bent and mixed between makers, the quiet start of most bad days on site.",
  stats: [["Alloy", "6082-T6 or 6061-T6 aluminium"], ["Governed by", "deflection, not strength"], ["Welds", "soften the alloy where they land"]],
  uses: "Lighting and PA rigging, stage roofs, line-array hangs, exhibition stands.",
  link: "https://en.wikipedia.org/wiki/Truss"
},
{
  id: "miccable", cat: "music", name: "Microphone cable",
  sub: "twisted pair inside a braided screen", img: "miccable", extra: ["miccable2", "miccable3"],
  hook: "Two insulated conductors twisted together inside a copper braid and a rubbery jacket. The twist is the trick: both pick up the same interference, and a balanced input subtracts one from the other and throws it away.",
  more: "Two stranded cores, twisted at a fixed lay, are padded with cotton to stay round, wrapped in a braid or spiral of bare copper that drains electric-field pickup to the connector shell, and jacketed in soft PVC; star-quad goes further, four cores in opposing pairs to shrink the loop a magnetic field can push on, at the price of capacitance. The screen handles electric fields, the twist magnetic ones. The costs: it fails at the flex points and the solder joints, never in the middle; a cheap foil screen cracks when coiled and the cable crackles; a spiral screen opens when bent and lets hum in; the connectors cost more than the cable; and a stage runs on it by the kilometre, every metre coiled by hand the right way.",
  stats: [["Rejection", "from twisting, not from the screen"], ["Star quad", "four cores, opposing pairs"], ["Fails", "at the flex points and the solder joints"]],
  uses: "Microphone and line runs, stage snakes and multicores, patch leads.",
  link: "https://en.wikipedia.org/wiki/Balanced_audio"
},
{
  id: "gel", cat: "music", name: "Lighting gel",
  sub: "deep-dyed polyester filter film", img: "gel", extra: ["gel2"],
  hook: "A film of polyester dyed through, a tenth of a millimetre thick, in a frame in front of a lamp. It works by subtraction: a saturated blue passes a few percent of the light and absorbs the rest as heat, in itself.",
  more: "Polyester film is dyed in the mass or coated both faces, slit into rolls and sheets, and sold by number in swatch books that lighting designers memorise: 201 for daylight correction, 119 for dark blue, 106 for primary red, frost for diffusion. A sheet is cut to the frame and slid into the lantern's colour runners. The costs: a deep colour in a hot lantern fades towards the colour it was blocking, wrinkles, then bakes through in the middle in a few hours; polycarbonate lasts longer in the hot colours and costs more; a stage of saturated colour is a stage of dim lamps, which is the argument for LED fixtures that mix colour instead of subtracting it; and dichroic glass reflects what it does not pass, so it lasts, at many times the price.",
  stats: [["Film", "polyester, roughly 0.05 to 0.25 mm"], ["Works by", "absorbing the rest as heat"], ["Consumable", "it fades, wrinkles, then burns through"]],
  uses: "Stage and studio lanterns, colour washes, correction and diffusion filters.",
  link: "https://en.wikipedia.org/wiki/Color_gel"
},
{
  id: "eiderdown", cat: "warmth", name: "Eiderdown",
  sub: "hand-gathered eider duck nest down", img: "eiderdown", extra: ["eiderdown2", "eiderdown3"],
  hook: "The only down whose filaments hook into one another. An eider hen lines her nest with down from her own breast; gathered once the brood has gone, it clings together as a sheet instead of drifting to a corner.",
  more: "In June the farmer walks the colony, lifts the down from under the eggs and leaves hay in its place; the raw down is dried, baked to kill mites, tumbled over a toothed drum that shakes out the hay, and finished by hand, picking out the last stalks, which is most of the work. The barbules carry tiny hooks, so the cleaned down holds together as a mat, and a quilt is a single sheet of it in a cotton shell. The costs: a nest gives about fifteen grams and the world about four tonnes a year, three quarters of it Icelandic, which is the whole explanation for the price; a wet eiderdown takes days to dry; the supply depends on a wild bird nesting where farmers keep the mink and gulls off; and a cheap eiderdown is goose down with a word on the label.",
  stats: [["Per nest", "about 15 g, gathered after the brood leaves"], ["Fill power", "900-1200, the highest of any fill"], ["Supply", "~4 tonnes a year worldwide"]],
  uses: "Icelandic and Norwegian duvets, a few Arctic parkas, and museum repairs to historic quilts.",
  link: "https://en.wikipedia.org/wiki/Eiderdown",
  src: ["Icelandic Eiderdown", "https://icelandiceiderdown.com/"],
  tags: ["duvet"]
},
{
  id: "shearling", cat: "warmth", name: "Shearling",
  sub: "sheepskin tanned with the fleece still on", img: "shearling", extra: ["shearling2", "shearling3"],
  hook: "One material doing both jobs a cold coat needs. The skin is a windproof membrane and the wool still rooted in it is a pile of still air, and because the two were never joined there is no seam and no cold spot.",
  more: "A lambskin is tanned with the wool still rooted in it; the skin side is buffed to a suede or finished to a nappa, the wool side sheared to fifteen to thirty millimetres, and the pelts matched and cut like cloth. The result is a membrane with its own insulation grown in: the B-3 flying jacket and the Afghan postin are the same idea from two climates. The costs: weight, about four kilos for a flight jacket; the collagen holding it together starts shrinking around sixty degrees, so it cannot be hot-washed or dried on a radiator by anyone who wants it back; it soaks up rain and dries stiff; a coat is twenty pelts and a seam at every one; moth eats it in a wardrobe; and a cheap shearling is a pile glued to a split, which fails where the real thing cannot.",
  stats: [["Pile", "15-30 mm of wool, still rooted in the skin"], ["Two jobs", "windproof membrane plus trapped air"], ["Ruined by", "heat: the collagen shrinks above about 60 C"]],
  uses: "B-3 flying jackets, Afghan postins, car seat covers, slippers, and medical fleeces for pressure sores.",
  link: "https://en.wikipedia.org/wiki/Shearling"
},
{
  id: "alpaca", cat: "warmth", name: "Alpaca fibre",
  sub: "camelid hair, part hollow and grease-free", img: "alpaca", extra: ["alpaca2", "alpaca3"],
  hook: "Wool without the grease. Alpaca carries no lanolin, so it needs no harsh scouring and sets off far fewer wool reactions, and the fibre is partly hollow, so it is warmer per gram than wool. What it lacks is crimp.",
  more: "An alpaca is shorn once a year, three or four kilos a fleece, sorted by hand into grades from royal under nineteen microns to coarse over thirty, in twenty-odd natural shades spun undyed as often as not; huacaya fibre is dense and faintly crimped, suri hangs in straight silky locks. With no grease to wash out it goes from animal to spindle with a rinse. The costs: sheep wool springs back because every fibre is a little helix, and alpaca is nearly straight, so it drapes beautifully and then keeps whatever shape you left it in, and a heavy jumper hung on a peg grows a shoulder; the fine grades are a small fraction of each fleece and the rest is blanket; it pills at the elbows; and the herd is small, so a bad season in Puno shows in the price in Milan.",
  stats: [["Fibre", "18-28 µm, partly hollow"], ["No lanolin", "no scouring, little allergy"], ["Weakness", "almost no crimp, so knitwear sags"]],
  uses: "Andean knitwear, coat cloth, blankets, and socks where the drape does not matter.",
  link: "https://en.wikipedia.org/wiki/Alpaca_fiber",
  src: ["Alpaca Owners Association", "https://www.alpacainfo.com/"]
},
{
  id: "angora", cat: "warmth", name: "Angora rabbit hair",
  sub: "hollow rabbit hair, 12 µm", img: "angora", extra: ["angora2", "angora3"],
  hook: "Hollow, twelve microns across and weightless, angora is about two and a half times warmer than wool for the weight and useless by itself. It has no crimp and barely any scale, so it cannot grip its neighbours.",
  more: "Every three months the rabbit is plucked or clipped, a couple of hundred grams of hair that is already clean, sorted by length and blended with wool or nylon at twenty to forty percent, in which the wool holds the yarn together and the rabbit does the insulating; the knit is then brushed to raise the halo that is the whole point of paying for it. The costs: spun pure it sheds into everything you own and thins wherever it rubs, which is why every angora garment on sale is a blend; the halo mats in the wash and goes flat under a coat; the trade collapsed in 2013 when film of live plucking on Chinese farms went round and most retailers dropped it; and the hair is so fine and light that it gets into the spinner's lungs, a recognised trade disease.",
  stats: [["Fibre", "10-15 µm with a hollow core"], ["Warmth", "about 2.5x wool at equal weight"], ["Catch", "no crimp: it sheds, so it is always blended"]],
  uses: "Blended knitwear, thermal underwear, and the halo on expensive jumpers.",
  link: "https://en.wikipedia.org/wiki/Angora_wool",
  src: ["National Angora Rabbit Breeders", "https://www.nationalangorarabbitbreeders.com/"]
},
{
  id: "camelhair", cat: "warmth", name: "Camel hair",
  sub: "Bactrian camel undercoat", img: "camelhair", extra: ["camelhair2", "camelhair3"],
  hook: "A camel wears two coats, coarse guard hair over fine undercoat, and in spring the undercoat comes away in sheets, picked up rather than shorn. The fine fraction is cashmere territory, grown at minus thirty.",
  more: "A Bactrian camel moults two to four kilos a year, combed or gathered as it loosens in May; the clip is a tangle of guard hair up to a hundred microns and down of sixteen to twenty, and dehairing, by machine and then by eye, is the whole industry: the down is a fifth of the weight and nearly all the value. The down is spun into coating in its own fawn; the guard hair goes into felt, rope and ger walls. The costs: dehairing is slow and never complete, and a coarse hair in a coat is a prickle; the down is short, so the yarn is weak and the cloth pills; most is sold undyed because the natural colour will not take a pale shade; supply follows the Mongolian herd and the last hard winter; and camel-hair brushes are squirrel, pony and ox, and always were.",
  stats: [["Undercoat", "16-20 µm, 2-4 kg per camel per year"], ["Gathered", "shed in spring, not shorn"], ["Cost", "dehairing: the guard hair has to come out"]],
  uses: "Overcoats and blazers, Mongolian blankets and ger felt, and artists brushes that are mostly not camel at all.",
  link: "https://en.wikipedia.org/wiki/Camel_hair"
},
{
  id: "vicuna", cat: "warmth", name: "Vicuna fibre",
  sub: "wild camelid fleece, 12 µm", img: "vicuna", extra: ["vicuna2", "vicuna3"],
  hook: "The finest fibre in commerce, from an animal nobody has managed to farm. Vicuna live wild on the altiplano and are driven into a funnel every second year in a chaccu, shorn and released, two hundred grams each.",
  more: "Hunted down to six thousand animals by the 1960s and protected since, the vicuna recovered once Andean communities were given the fleece for keeping poachers off; a village chaccu strings a human chain across the hills, walks the herd into a net funnel, shears each animal in minutes and lets it go. The costs: at twelve microns the scales are so delicate that hot dyeing and hard scouring destroy the handle, so most is sold in the animal's own golden brown; two hundred grams every two years from a wild animal explains a price above most metals; the cloth is as fragile as it is soft, and not for rain; poached fibre still leaks into the certified trade; and the communities that do the work see a sliver of what a scarf fetches in Milan.",
  stats: [["Fibre", "12-13 µm, the finest in commerce"], ["Yield", "~200 g per animal, every two years"], ["Ruined by", "hot dye and hard scouring"]],
  uses: "Coats and scarves at the far end of the price list, and Andean ceremonial cloth.",
  link: "https://en.wikipedia.org/wiki/Vicu%C3%B1a",
  src: ["IUCN Red List", "https://www.iucnredlist.org/species/22956/145360542"]
},
{
  id: "reindeerhide", cat: "warmth", name: "Reindeer hide",
  sub: "skin with hollow guard hair", img: "reindeerhide", extra: ["reindeerhide2", "reindeerhide3"],
  hook: "Every guard hair on a reindeer is hollow, which is why the animal floats and why a pelt on snow keeps somebody off the ground at minus forty better than most foam mats. The hair is too dense for the air to move.",
  more: "The winter coat is underwool beneath thirty millimetres of air-filled guard hair standing close enough that the trapped air stays put; the skin is scraped, dried and softened, traditionally with bark or brain, and sold whole with the hair on. Laid hair-up on snow it is a mattress, a seat and a windbreak, and the Sami, Nenets and Inuit built sledge covers, tents and boots on it long before foam. The costs: hollow hairs snap, so a working skin sheds constantly and a sofa wears a halo of it; it cannot be washed, and it rots if rolled up damp; it is heavy and bulky beside modern fill; a skin is one animal, so a sledge cover is a patchwork; and it is a consumable, two or three hard winters, not an heirloom, whatever the interiors shops charge.",
  stats: [["Hair", "hollow and air-filled, about 30 mm"], ["Works at", "-40 C, laid straight on snow"], ["Cost", "sheds hair, cannot be washed"]],
  uses: "Sami sleeping skins and sledge covers, bushcraft sit pads, and a great many Nordic interiors.",
  link: "https://en.wikipedia.org/wiki/Reindeer",
  src: ["International Centre for Reindeer Husbandry", "https://reindeerherding.org/"]
},
{
  id: "flannel", cat: "warmth", name: "Flannel",
  sub: "napped cotton or wool cloth", img: "flannel", extra: ["flannel2", "flannel3"],
  hook: "Warmth from a finishing step rather than a fibre. Flannel is ordinary cloth dragged across wire-covered rollers until fibre ends are torn out of the yarn and stand up as a nap that holds still air against the skin.",
  more: "A loosely spun cotton or wool cloth is run over a raising machine, rollers clothed in bent wire, once a gig of dried teasel heads, which tease fibre ends out of the weft until the surface is a fuzz a millimetre deep, then sheared level. The nap adds loft without adding yarn, and it hides the weave, which is why a cheap flannel looks like a good one for a season. The costs: raising tears fibre, and a flannel is a tenth weaker than the cloth it came from; it wears out in plain sight, pilling first, then rubbing bald at cuffs and elbows to leave the thin weave that was underneath all along; it shrinks on the first hot wash; a raised cotton nap catches fire fast, which is why children's nightwear law exists; and it fills every tumble dryer filter.",
  stats: [["Made by", "raising a nap on wire-covered rollers"], ["Gains", "loft with no extra yarn"], ["Dies of", "pilling, then bald patches where it rubs"]],
  uses: "Shirts, pyjamas, bedsheets, and the backing of a tartan picnic rug.",
  link: "https://en.wikipedia.org/wiki/Flannel",
  tags: ["duvet"]
},
{
  id: "polyfill", cat: "warmth", name: "Polyester fibrefill",
  sub: "siliconised hollow polyester staple", img: "polyfill", extra: ["polyfill2", "polyfill3"],
  hook: "The cheap answer to down, and honest about it. Hollow polyester staple, crimped and coated with silicone so the fibres slide and spring back rather than mat. A fraction of the price, and it does not mind wet.",
  more: "Polyester is extruded with a hollow core, crimped in a stuffer box so it zigzags, cut to a few centimetres and dusted with silicone; the fibres are carded into a batt or blown as clusters into a duvet, and the crimp and the slip between fibres hold the loft. Wet, it keeps most of its insulation where down collapses into porridge, and it washes and dries in an afternoon, so it is in every hospital pillow. The costs: it needs about twice the volume of down for the same warmth; every compression takes a little permanent set, so a duvet is flat after a few hundred washes and a jacket after a few seasons in a stuff sack; the silicone washes off and the fibres mat; it sheds microfibre into the wash water; and it is oil, which the label does not mention.",
  stats: [["Fibre", "hollow, 6-15 denier, silicone-coated"], ["Wet", "keeps most of its loft; down keeps almost none"], ["Dies of", "compression set: flat after a few hundred washes"]],
  uses: "Duvets, pillows, sleeping bags, cheap jackets and every teddy bear.",
  link: "https://en.wikipedia.org/wiki/Polyester_fiberfill",
  tags: ["duvet"]
},
{
  id: "spaceblanket", cat: "warmth", name: "Rescue blanket",
  sub: "vacuum-metallised PET film", img: "spaceblanket", extra: ["spaceblanket2", "spaceblanket3"],
  hook: "Twelve microns of polyester film with a few hundredths of a micron of aluminium evaporated onto it, the film NASA flew on the Echo balloons and Apollo. Fifty grams that throw most of your radiated heat back at you.",
  more: "A roll of PET passes through a vacuum chamber where aluminium boiled off a crucible condenses on it as a mirror a few tens of nanometres thick; the sheet is folded to the size of a pack of cards and sold for the price of a coffee. Round a casualty it reflects most of the infrared a body radiates, blocks the wind and keeps the rain off, and it weighs nothing in a rucksack. The costs: radiation is one of three ways to lose heat, and it does nothing about the other two, conducting straight through where it touches cold ground and convecting the moment wind finds an edge; it passes no water vapour, so a casualty wrapped in one ends up reflected, soaked and still cold; it tears from a nick; and it is a layer, not a system.",
  stats: [["Film", "12 µm PET plus ~0.03 µm aluminium"], ["Reflects", "most of the infrared a body radiates"], ["Does nothing about", "conduction, wind or sweat"]],
  uses: "Rescue kits and marathon finish lines, satellite thermal blankets, emergency bivvy liners.",
  link: "https://en.wikipedia.org/wiki/Space_blanket",
  src: ["NASA Spinoff", "https://spinoff.nasa.gov/node/10461"]
},
{
  id: "batting", cat: "warmth", name: "Cotton batting",
  sub: "carded cotton wadding", img: "batting", extra: ["batting2", "batting3"],
  hook: "The filling in a quilt is carded cotton laid in crossed layers, and it has one failure mode: it walks. Cotton has no crimp to lock it, so an unquilted batt migrates to the corners of its cover and leaves voids.",
  more: "Ginned cotton is carded into a thin web, the web folded back on itself in crossed layers until it is two to four hundred grams a square metre, sometimes lightly needled so it survives handling; the batt goes between a top and a backing and the three are stitched through together, and the stitching is the engineering. Cotton wadding wants a line every eighty to a hundred and fifty millimetres, which is why quilting patterns exist at all. The costs: unquilted it balls up in the first wash and never comes back; it is thirstily hygroscopic, and a damp batt is a cold one that stays cold; it is heavy for its warmth beside down or polyester; it shrinks on the first wash, which gives an old quilt its crinkle; and a futon of it is a mattress and a fire load.",
  stats: [["Weight", "about 200-400 g/m2 of carded cotton"], ["Needs", "quilting every 8-15 cm or it balls up"], ["Weakness", "soaks up moisture and holds it"]],
  uses: "Quilts, futons, mattresses, upholstery, and anything restored by a textile conservator.",
  link: "https://en.wikipedia.org/wiki/Batting_(material)",
  tags: ["duvet"]
},
{
  id: "milkweed", cat: "warmth", name: "Milkweed floss",
  sub: "Asclepias seed hair, hollow and waxed", img: "milkweed", extra: ["milkweed2", "milkweed3"],
  hook: "A hollow, waxed seed hair that is mostly air, six times as buoyant as cork, which is why American schoolchildren collected it by the ton for life jackets in 1943 when Japan took the kapok. A filling, never a yarn.",
  more: "The pods are picked as they split, dried, and the floss beaten or tumbled free of seed and husk; the fibre is a single-cell tube twenty microns across with a waxy cuticle, so it floats, shrugs off water and traps air along its length. Carded into a batt it fills jackets and duvets as a plant alternative to down, and the same wax and hollow make it a sorbent that drinks oil off water. The costs: the staple is short, smooth and uncrimped, so it will not hold a twist and cannot be spun, which is why it is a fill or nothing; tests put it below down for loft and it mats after a wash; it is brittle and sheds dust; the harvest is by hand from a barely domesticated plant, so no factory can count on tonnage; and the pods belong to the monarch butterfly first.",
  stats: [["Fibre", "hollow, ~20 µm, wax-coated"], ["Buoyancy", "about 6x cork by volume"], ["Limit", "will not spin: a fill, never a yarn"]],
  uses: "Jacket and duvet fill, pillow stuffing, oil-spill sorbents, and wartime life vests.",
  link: "https://en.wikipedia.org/wiki/Asclepias",
  src: ["Crews et al., University of Nebraska", "https://digitalcommons.unl.edu/textiles_facpub/10/"],
  tags: ["duvet"]
},
{
  id: "possum", cat: "warmth", name: "Brushtail possum fur",
  sub: "hollow-hair fur blended into merino", img: "possum", extra: ["possum2", "possum3"],
  hook: "A pest turned into a fibre. New Zealand culls brushtail possums to save its forests, and the fur has a hollow core like polar bear hair. Blended into merino it adds warmth, and the yarn is lighter than it looks.",
  more: "Trappers sell the fur plucked from culled animals; it is dehaired, scoured, blended twenty to forty percent with fine merino and spun into a soft yarn with a halo. The hollow hair holds air, so the knit is warmer for its weight than merino alone, and the slick fur suppresses the pilling merino is prone to; at fourteen to sixteen microns it does not itch. The costs: the staple is too short to spin alone, so it is always a blend and the possum is the minor partner; the supply depends on a government pest cull carrying on, not a flock anyone can grow, and prices swing with the poison budget; its brown-grey will not take a pale dye; and the story is a hard sell to a customer who has just met the animal in a Brisbane garden.",
  stats: [["Hair", "hollow, 14-16 µm"], ["Blend", "typically 20-40% with merino"], ["Supply", "a pest cull, not a flock you can grow"]],
  uses: "New Zealand knitwear, gloves and socks sold as possum-merino.",
  link: "https://en.wikipedia.org/wiki/Common_brushtail_possum",
  src: ["NZ Department of Conservation", "https://www.doc.govt.nz/nature/pests-and-threats/animal-pests-and-threats/possums/"]
},
{
  id: "furfelt", cat: "warmth", name: "Fur felt",
  sub: "carroted rabbit or beaver underfur", img: "furfelt", extra: ["furfelt2", "furfelt3"],
  hook: "Wool felts because its scales lock together; fur felts better, and for two centuries it took mercury to make it do so. The result is denser and more windproof than wool felt, and holds a brim through rain.",
  more: "Rabbit or beaver underfur is cut from the skin, blown clean and sucked onto a cone, which is worked in hot water and rollers until the fibres have crept together into a tight felt a third the size it started; the body is dyed, stiffened with shellac, blocked over a wooden form under steam. Carroting, brushing the fur with mercuric nitrate, roughened the scales so they would felt, and left the fur orange. The costs: the mercury went into the hatters as tremor, slurred speech and paranoia, the mad hatter of the phrase, and was banned in the United States only in 1941; a good hat is forty rabbits of underfur and priced like it; it loses its block if soaked and dried on a radiator; and beaver felt, the finest, needed a continent of beavers.",
  stats: [["Fibre", "rabbit or beaver underfur, dehaired"], ["Felting aid", "mercuric nitrate, until 1941"], ["Why bother", "denser and more windproof than wool felt"]],
  uses: "Fedoras and Stetsons, military dress hats, and any brim expected to survive weather.",
  link: "https://en.wikipedia.org/wiki/Felt",
  src: ["Fine Arts Museums of San Francisco", "https://www.famsf.org/stories/poisons-part-i-the-mercurial-world-of-felt"]
},
{
  id: "snow", cat: "warmth", name: "Snow",
  sub: "sintered wind-packed snow", img: "snow", extra: ["snow2", "snow3"],
  hook: "Sixty to ninety percent air, conducting as badly as mineral wool, so the inside of a snow house sits near freezing while the night outside is minus forty. The failure is designed in: your warmth glazes the roof.",
  more: "Wind-packed snow cuts with a long knife into blocks the size of a suitcase, and a snow house goes up as a rising spiral of them, each leaning in on the last until the keystone drops in; within hours the crystals sinter, bonding where they touch, so the shell is stronger in the morning than when it was built, and the people inside and one flame hold the air near zero. A quinzhee is a heap left to sinter, then hollowed out. The costs: ice conducts about a hundred times better than snow, so the shelter you improved by heating it is the one that leaks and drips on you; the right snow is a matter of wind and weather, and powder will not cut; the entrance must be below the floor or the warm air walks out; and a roof under a thaw is a roof that comes down.",
  stats: [["Conductivity", "0.05-0.15 W/mK, in mineral wool territory"], ["Air", "60-90% by volume"], ["Fails by", "glazing: ice conducts ~100x better"]],
  uses: "Igloos and quinzhees, avalanche burial survival, and the snow on a roof that halves the heating bill.",
  link: "https://en.wikipedia.org/wiki/Igloo",
  src: ["NSIDC: the science of snow", "https://nsidc.org/learn/parts-cryosphere/snow/science-snow"]
},
{
  id: "featherdown", cat: "warmth", name: "Feather and down blend",
  sub: "goose or duck feather cut with a down fraction", img: "featherdown", extra: ["featherdown2"],
  hook: "A duvet is sold by the ratio on its label, and the ratio is an argument about shafts. A down cluster has none, so it holds air in three dimensions; a feather has a quill: spring, weight and a path for heat.",
  more: "Feather and down come off the same bird and are separated by blowing them up a tower, the down rising highest, the quills staying put; the grades are recombined to a ratio by weight, washed, dried hot and blown into a ticking shell on a scale, because warmth here is sold by the gram. Ninety to ten lofts and costs; fifteen to eighty-five packs a pillow that keeps its shape under a head. The costs: a feather is a spring and a conductor at once, so every percent of feather is warmth given up for support; quills work out through the seams unless the ticking is woven downproof; feather smells when damp; the ratio on the label is tested by picking a sample apart by hand; and the cheap end of the market is feather with a word on the box.",
  stats: [["Sold as", "a down/feather ratio by mass"], ["Down cluster", "no shaft, holds air in 3D"], ["Failure", "quills migrate out at the seams"]],
  uses: "Duvets, pillows and seat cushions, and the reason a cheap pillow feels crunchy.",
  link: "https://en.wikipedia.org/wiki/Feather",
  src: ["American Down and Feather Council", "https://downandfeathercouncil.com/what-is-down-feather/"],
  tags: ["duvet"]
},
{
  id: "silkfloss", cat: "warmth", name: "Silk wadding",
  sub: "hand-pulled mulberry silk floss", img: "silkfloss", extra: ["silkfloss2", "silkfloss3"],
  hook: "Silk wadding is neither carded nor blown. A boiled-off cocoon is opened over a frame and drawn by hand into a sheet the size of a bed, and thirty sheets stacked. Every strand runs the whole length.",
  more: "Cocoons too flawed to reel are boiled, opened by hand and stretched over a bamboo hoop a few at a time; the little caps are soaked, then stretched again by two people walking apart until one cap is the size of a bed, and the sheets stacked into a cotton cover. Because every filament runs the length of the quilt, the filling cannot ball up or walk into a corner and needs no quilting; it drapes close. The costs: it does not loft, so it warms by lying against the sleeper rather than by holding air, so it is heavy for its warmth and thin comfort in a hard frost; water mats the layers into felt, so it is aired in the sun and never washed; cheap floss keeps its gum and yellows; and a good quilt is days of hand work, priced accordingly.",
  stats: [["Filament", "continuous, 10-15 um"], ["Needs", "no quilting, it cannot migrate"], ["Ruined by", "washing, which mats the layers"]],
  uses: "Silk duvets and summer quilts across east Asia, and the lightest layer in layered bedding.",
  link: "https://en.wikipedia.org/wiki/Silk",
  tags: ["duvet"]
},
{
  id: "threadlattice", cat: "warmth", name: "Thread lattice",
  sub: "cotton net laid over a loose batt", img: "threadlattice", extra: ["threadlattice2", "threadlattice3"],
  hook: "Before a quilt has a cover it is a loose cotton batt held by nothing. The Hainan answer is a net, not a seam: thread run peg to peg round a frame and laid over the batt in a diagonal lattice, both faces.",
  more: "Carded cotton is built up on a pegged frame and pressed with a heavy wooden disc; then thread is walked from peg to peg across it, diagonally both ways a few centimetres apart, the whole turned and netted again on the other face, so the cotton is caged between two nets instead of stitched through. It costs a reel of thread and an afternoon, and it can be unpicked, so a batt is opened and re-carded every few years rather than thrown away. The costs: the net holds the batt in shape but not in place, so the quilt can be aired and sunned but never washed; the lattice snags through a thin cover; a loose batt packs down under a sleeper; and it is hand work on a frame the size of the bed, which is why it survives as a street trade and nowhere else.",
  stats: [["Holds", "a loose batt with no stitch through it"], ["Laid", "diagonally, both faces, every few cm"], ["Cost", "the quilt can be aired but not washed"]],
  uses: "Hand-made cotton quilts in southern China, and any batt meant to be re-carded rather than replaced.",
  link: "https://en.wikipedia.org/wiki/Quilting",
  tags: ["duvet"]
},
{
  id: "ticking", cat: "warmth", name: "Downproof ticking",
  sub: "calendered plain-weave cotton inlet", img: "ticking", extra: ["ticking2"],
  hook: "The fill gets the credit; the shell does the work. Plain cotton driven to three hundred threads a decimetre, then calendered flat until no gap passes a quill; without it a feather duvet empties into the bed.",
  more: "Combed cotton is woven tight, often with the blue stripe that once marked the warp count, then singed and run hot between steel rollers so the yarns flatten and close the gaps; a wax or resin finish seals what the calender missed. Older ticks were herringbone linen filled with straw; the stripe survives as a decorating cliche. The costs: a cloth down cannot get through is one air cannot get through either, so it drapes stiffly, breathes badly and makes a duvet clammier than its fill would be; the finish washes out long before the cloth wears, and then the quills come; the heavy weave adds a third to a light duvet's weight; and a cheap tick is a loose weave under a lot of finish, a leak waiting for the first wash.",
  stats: [["Weave", "plain cotton, 300+ threads per 10 cm"], ["Tested by", "EN 12132, rubbing for feather escape"], ["Wears out", "the downproof finish, not the cloth"]],
  uses: "The inner shells of duvets, pillows and feather beds, and the striped cloth on an old mattress.",
  link: "https://en.wikipedia.org/wiki/Ticking",
  tags: ["duvet"]
},
{
  id: "cellulosefill", cat: "warmth", name: "Cellulose insulation",
  sub: "milled newsprint dosed with borate", img: "cellulosefill", extra: ["cellulosefill2", "cellulosefill3"],
  hook: "Newspaper milled to fibre, dosed with borate and blown down a hose into whatever the building offers. The advantage over a batt: it packs round pipes and odd joists instead of being cut to fit badly.",
  more: "Baled newsprint is hammer-milled to a grey fluff and tumbled with boric acid and borax, which earn their keep as fire retardant, rot inhibitor and insecticide; on site a blower sends it down a hose, loose over a loft deck at thirty kilos a cubic metre or dense-packed through holes in a closed wall at fifty-five. It is cheap, mostly recycled, and fills what a batt leaves open. The costs: blown loose it settles, and a wall that settles a tenth of its depth has a cold stripe along the top for good, which is why dense packing exists and the installer matters more than the product; a roof leak turns it to papier-mache; the dust stings; mice like it as much as you do; and a sixth of it by mass is borate headed for landfill.",
  stats: [["Conductivity", "0.038-0.040 W/mK"], ["Borate", "about 15% by mass"], ["Failure", "settling where it is blown too loose"]],
  uses: "Loft decks, timber-frame walls and retrofit cavity fills.",
  link: "https://en.wikipedia.org/wiki/Cellulose_insulation",
  src: ["Cellulose Insulation Manufacturers Association", "https://cellulose.org/why-cellulose/"]
},
{
  id: "flaxinsul", cat: "warmth", name: "Flax insulation",
  sub: "scutching tow bonded with polyester", img: "flaxinsul", extra: ["flaxinsul2", "flaxinsul3"],
  hook: "The tow left when flax is scutched for linen, carded into a mat and held by fifteen percent polyester, with a salt against fire and beetles. It insulates no better than glass wool. What it has is heat capacity.",
  more: "Scutching tow, the short fibre that falls out when flax straw is beaten for its long line fibre, is blended with a low-melt polyester binder, carded, cross-lapped to thickness and baked so the binder welds the mat; ammonium phosphate goes in against fire and beetle. At sixteen hundred joules per kilogram-kelvin against mineral wool's thousand, a roof of it takes a summer afternoon to warm through; it cuts with a bread knife, does not itch, and buffers moisture like the timber round it. The costs: three times the price of mineral wool for the same resistance; it is a plant and rots if it gets wet; the binder is neither natural nor recyclable; it sags in a wall if cut short; and the tow supply follows the linen harvest, not the building trade.",
  stats: [["Conductivity", "0.038-0.040 W/mK"], ["Heat capacity", "about 1600 J/kgK"], ["Price", "roughly 3x mineral wool"]],
  uses: "Roofs and timber frames in northern Europe, where the summer overheating argument sells it.",
  link: "https://en.wikipedia.org/wiki/Flax"
},
{
  id: "eelgrass", cat: "warmth", name: "Eelgrass thatch",
  sub: "salt-cured Zostera marina", img: "eelgrass", extra: ["eelgrass2", "eelgrass3"],
  hook: "Eelgrass washes up on the beaches of Laeso, dries on the dunes and goes on the roof half a metre thick and more. The salt and silica left in the leaves make it rot-proof, vermin-proof and very hard to light.",
  more: "The leaves are raked up after the autumn storms, dried in the salt air, twisted into thick ropes laid in courses over the rafters and tied down, then buried under loose material that settles into a felted mass a metre deep, with turf on the ridge. The salt keeps rot and insects out, the silica makes it slow to catch, and roofs built this way have stood two and three hundred years with no maintenance to speak of. The costs: it is heavy, several tonnes on a farmhouse; it takes an island's beaches and most of a winter to roof one house; a wasting disease took most of the Atlantic eelgrass in the 1930s, so the surviving roofs are re-thatched out of a seaweed bank or not at all; and nobody alive learned the trade from a master.",
  stats: [["Laid", "0.5 to 1 m thick"], ["Life", "200-300 years"], ["Killed by", "the 1930s eelgrass wasting disease"]],
  uses: "Farmhouse roofs on Laeso in Denmark, and a recent run of prefabricated seaweed panels.",
  link: "https://en.wikipedia.org/wiki/Seaweed_roofs_on_L%C3%A6s%C3%B8",
  src: ["IIBEC", "https://iibec.org/seaweed-thatching/"]
},
{
  id: "polarfilm", cat: "film", name: "Polarising film",
  sub: "iodine-stained stretched polyvinyl alcohol", img: "polarfilm", extra: ["polarfilm2", "polarfilm3"],
  hook: "Polyvinyl alcohol soaked in iodine and stretched to several times its length, which drags the chains into parallel lines. Light along the lines is absorbed; light across them passes. Both faces of every LCD.",
  more: "Edwin Land made the first sheet polariser in 1929; the modern one is simpler. PVA film is dyed in an iodine bath, stretched hot to four or five times its length so the chains and the iodine along them line up, and laminated at once between two skins of cellulose triacetate, because stretched PVA would shrink back and tear. Two sheets crossed go nearly black, and a pair is what turns a liquid crystal's twist into a picture. The costs: it dies of damp, and old laptops go grey in streaks that follow the stretch as the PVA takes up water; heat and ultraviolet bleach the iodine, so a polariser behind a hot backlight is a wear part; it throws away more than half the light before the display has done anything; and a scratch cannot be polished out.",
  stats: [["Construction", "stretched PVA with iodine, between TAC skins"], ["Transmits", "about 40% of unpolarised light"], ["Crossed pair", "well under 0.1% gets through"]],
  uses: "Every LCD screen, polarised sunglasses, camera filters, 3D cinema glasses, stress analysis of clear plastics.",
  link: "https://en.wikipedia.org/wiki/Polarizer",
  src: ["Edmund Optics: introduction to polarisation", "https://www.edmundoptics.com/knowledge-center/application-notes/optics/introduction-to-polarization/"]
},
{
  id: "cellophane", cat: "film", name: "Cellophane",
  sub: "regenerated cellulose film, from viscose", img: "cellophane", extra: ["cellophane2", "cellophane3"],
  hook: "Invented in 1908 by a Swiss chemist after a wine-proof tablecloth, and made like viscose rayon: wood pulp dissolved and squeezed out as a sheet into an acid bath that turns it back into cellulose. Not a plastic.",
  more: "Wood pulp is steeped in caustic soda, treated with carbon disulphide to make viscose syrup, and extruded through a slot into sulphuric acid, which regenerates it as a clear sheet; the film is plasticised with glycerol so it will not crack, and often coated to make it heat-sealable and waterproof. Uncoated it passes water vapour, which keeps bread crusty and cigars from sweating, and it blocks oxygen and grease far better than polyethylene; it crackles, takes print and composts. The costs: it goes brittle as the glycerol leaves, and an old sweet wrapper shatters; uncoated it goes limp in damp; the carbon disulphide is a neurotoxin; it costs more than polypropylene; and the clear wrap on most things is now polypropylene wearing its name.",
  stats: [["Base", "wood pulp, regenerated from viscose"], ["Barrier", "oxygen and grease, not water vapour"], ["Ages by", "losing its plasticiser and going brittle"]],
  uses: "Sweet twists, cigar and tea packaging, florist wrap, and the adhesive tape that still carries the name in several languages.",
  link: "https://en.wikipedia.org/wiki/Cellophane",
  src: ["Futamura: cellulose films", "https://www.futamuragroup.com/"]
},
{
  id: "retrosheet", cat: "film", name: "Retroreflective sheeting",
  sub: "glass beads or micro-prisms under a clear film", img: "retrosheet", extra: ["retrosheet2", "retrosheet3"],
  hook: "A road sign does not glow; it throws your own headlights back at you. The old sheeting does it with tiny glass beads, each a lens over a mirror; the new kind with cube-corner prisms moulded into a film's back.",
  more: "Bead sheeting is glass microspheres in resin over an aluminised backing, each bead focusing light onto the mirror behind it and sending it back along the same line, give or take a degree; prismatic sheeting is an acrylic film with thousands of cube corners per square centimetre embossed into its back, and three bounces off a cube corner send light back exactly where it came from, several times as much. Printed on aluminium, it is a sign. The costs: both return light only towards its source, so a passenger sees a dimmer sign; the standards give them seven to twelve years before sun and salt dull them below the minimum; a wet sign is a worse sign; road film kills the prisms; and the newest sheeting is bright enough at close range to dazzle.",
  stats: [["Optics", "glass beads, or cube-corner micro-prisms"], ["Returns", "most light to within a degree of its source"], ["Rated life", "7-12 years, then replaced"]],
  uses: "Road signs and lane markers, high-visibility clothing, vehicle conspicuity tape, number plates.",
  link: "https://en.wikipedia.org/wiki/Retroreflective_sheeting",
  src: ["Orafol: reflective solutions", "https://www.orafol.com/en/americas/products/reflective-solutions/overview"]
},
{
  id: "holofoil", cat: "film", name: "Holographic foil",
  sub: "embossed diffraction grating, metallised and transferred by heat", img: "holofoil", extra: ["holofoil2", "holofoil3"],
  hook: "The rainbow on a banknote is not printed and holds no ink. A relief under a micron deep is pressed into lacquer on a polyester carrier, backed with nanometres of aluminium, and moved to the paper by a hot die.",
  more: "A master is recorded with lasers and electroformed into a nickel shim, which rides a heated roller embossing the pattern into lacquer on a polyester web at a few hundred metres a minute; aluminium is evaporated onto the back so the grooves reflect, adhesive goes over that, and on the press a hot die melts the adhesive onto paper and the polyester peels away. It costs almost nothing per square metre, which is why it is on crisp packets as well as passports; the security grade is in the master. The costs: an embossed hologram is as easy to copy as to make, given the shim; the aluminium corrodes if the lacquer is breached; the foil cracks over a fold and scuffs white; and every crisp packet so decorated is unrecyclable metallised plastic.",
  stats: [["Relief", "well under a micron deep"], ["Metal", "aluminium, a few tens of nanometres"], ["Transfer", "heat and pressure, carrier peeled away"]],
  uses: "Banknotes and passports, credit cards, cosmetics cartons, tamper-evident seals, wrapping paper.",
  link: "https://en.wikipedia.org/wiki/Security_hologram",
  src: ["Kurz: hot stamping and transfer foils", "https://www.kurz-world.com/en/"]
},
{
  id: "lenticular", cat: "film", name: "Lenticular sheet",
  sub: "extruded ribs of cylindrical lens on PET or PVC", img: "lenticular", extra: ["lenticular2", "lenticular3"],
  hook: "A clear sheet faced with parallel ridges, each a tiny cylindrical lens. Under each ridge sits a strip of slices from two or more images, and the lens shows a different slice as your eye moves: a flip, or depth.",
  more: "Molten PET or PVC is extruded between a chill roll and an engraved roll that presses the lens profile into one face, ten an inch for a poster, a hundred for a card; the images are sliced into strips, interlaced and printed on the flat back, each strip under its own lens. Ridges horizontal give a flip as the card tilts; vertical, each eye gets its own view, and depth. The costs: print and lenses must stay in register to a few microns across the whole sheet, and a change in humidity on paper is enough to put them out, which is the ghosting on a cheap card; the effect works from one distance and one axis; the plastic is unrecyclable once laminated; and it is the same trick as the glasses-free 3D on a handheld console, which most people switched off.",
  stats: [["Lens pitch", "about 10 to 100 lenses per inch"], ["Effect", "flip, motion or stereo depth"], ["Enemy", "registration drift of a few microns"]],
  uses: "Postcards and badges, packaging, glasses-free 3D displays, bus-shelter posters.",
  link: "https://en.wikipedia.org/wiki/Lenticular_lens"
},
{
  id: "fresnelsheet", cat: "film", name: "Fresnel sheet lens",
  sub: "acrylic or PVC film with concentric lens steps", img: "fresnelsheet", extra: ["fresnelsheet2", "fresnelsheet3"],
  hook: "A lens three millimetres thick doing the job of one as thick as a brick, because only the curved surface bends the light and the glass between is dead weight. Fresnel worked that out for lighthouses in 1822.",
  more: "A master is cut on a diamond lathe with the lens curve chopped into hundreds of concentric steps, each carrying the slope the full lens would have had at that radius; acrylic or PVC is pressed against it, and a page-sized lens comes out a few millimetres thick and rolls up. It gathers light as well as a lens fifty times heavier, which is why an overhead projector has one under its glass and a solar cooker one over the pot. The costs: it makes a poor image, because every step scatters light into the next, so it is no good at all in a camera; the grooves fill with dust; the plastic yellows in the sun it was bought to concentrate; a flexible one sags out of figure; and the focus of a big one starts a fire on the bench while you look for the matches.",
  stats: [["Thickness", "a few millimetres for a page-sized lens"], ["Groove pitch", "fractions of a millimetre"], ["Image", "poor, every step scatters"]],
  uses: "Overhead projectors and rear-projection TVs, page magnifiers, solar concentrators, the wide-angle sticker on a van rear window.",
  link: "https://en.wikipedia.org/wiki/Fresnel_lens",
  src: ["Edmund Optics: advantages of Fresnel lenses", "https://www.edmundoptics.com/knowledge-center/application-notes/optics/advantages-of-fresnel-lenses/"]
},
{
  id: "goldleaf", cat: "film", name: "Gold leaf",
  sub: "gold beaten to a tenth of a micron", img: "goldleaf", extra: ["goldleaf2", "goldleaf3"],
  hook: "The thinnest thing made by hand. A gram of gold, a bead on a fingernail, is rolled, cut, stacked and hammered for hours until it covers half a square metre and is a few hundred atoms thick. It tears at a breath.",
  more: "Gold is rolled to a thin ribbon, cut into squares and interleaved in a packet of vellum, beaten, cut into quarters and beaten again between goldbeater's skin, the ox gut it will not stick to, until each leaf is about a tenth of a micron; held to the light it is translucent and green. It is lifted on a static-charged brush, never with fingers, laid over a size and burnished with agate, and it does not tarnish, which is why gilding from the Bronze Age is still bright. The costs: it cannot be touched, and a draught through the workshop door is a leaf gone; it is so thin the surface beneath shows through, so the gesso and bole are most of the work; a gilded surface cannot be cleaned, only regilded; and the metal is the least of what you pay for.",
  stats: [["Thickness", "about 0.1 µm"], ["One gram", "covers roughly half a square metre"], ["Handling", "lifted on a brush, never with fingers"]],
  uses: "Gilded frames and domes, illuminated manuscripts, sign writing, sushi and sweets, the cross on a cathedral.",
  link: "https://en.wikipedia.org/wiki/Gold_leaf",
  src: ["Society of Gilders", "https://societyofgilders.org/"]
},
{
  id: "alufoil", cat: "film", name: "Aluminium foil",
  sub: "rolled 8011 or 1235 alloy, 6-25 µm", img: "alufoil", extra: ["alufoil2", "alufoil3"],
  hook: "The last pass of a foil mill rolls two sheets at once, because one that thin would tear; hence one shiny face and one matt. At twenty microns it is a complete barrier to light, gas and smell.",
  more: "A slab of aluminium with a little iron and silicon is rolled in passes down to about forty microns; two webs then run through the last stand together, so each comes out at a dozen microns with one face polished by the steel roll and one matt from pressing against the other sheet, and the foil is annealed to drive off the oil. Nothing else that cheap stops light, gas and smell completely, and it survives an oven and a freezer in the same afternoon. The costs: it tears at a nick; below about seventeen microns it has pinholes, so the foil in a drinks carton is buried between plastic films; it reacts with salt and acid, which is why a yoghurt lid is lacquered and a tomato dish eats through it; and the shiny side does nothing the matt side does not.",
  stats: [["Thickness", "6-25 µm for packaging"], ["Barrier", "complete above about 17 µm"], ["Two faces", "from rolling two sheets at once"]],
  uses: "Kitchen foil, blister packs and lids, drinks cartons, insulation facings, capacitors, the shielding inside a cable.",
  link: "https://en.wikipedia.org/wiki/Aluminium_foil",
  src: ["European Aluminium Foil Association", "https://www.alufoil.org/"]
},
{
  id: "clingfilm", cat: "film", name: "Cling film",
  sub: "PVC or polyethylene, 8-12 µm, with a tackifier", img: "clingfilm", extra: ["clingfilm2", "clingfilm3"],
  hook: "An accident: a Dow chemist in 1933 found a polyvinylidene chloride film that would not wash off glassware, and it became Saran. It sticks to bowls and to itself by static and a tackifier that blooms to the surface.",
  more: "PVC or polyethylene is blown into a film about ten microns thick with a few percent of a tackifier, a sticky oil that migrates to the surface; the film comes off the roll with a static charge, which with the tacky surface makes it grab a bowl rim and itself. The PVC kind clings best and stretches furthest; the polyethylene kind is cheaper and leaches no plasticiser into fatty food, which is why most household rolls quietly switched. The costs: none is a true barrier, and oxygen goes through polyethylene film as if it were not there, so it keeps things from drying out, not from going stale; it clings to itself better than to anything you want; the PVC kind should not touch fat; it sags in a microwave; and it is ten microns of plastic used once.",
  stats: [["Thickness", "about 10 µm"], ["Clings by", "static charge plus a surface tackifier"], ["Oxygen", "passes through, in the PE kind especially"]],
  uses: "Kitchens, cafeterias, pallets of fresh produce, dressings in a hospital, a painter keeping a brush wet overnight.",
  link: "https://en.wikipedia.org/wiki/Plastic_wrap",
  src: ["Macrogalleria: PVC", "https://pslc.ws/macrog/pvc.htm"]
},
{
  id: "stretchwrap", cat: "film", name: "Stretch wrap",
  sub: "linear low-density polyethylene, cast or blown, 12-25 µm", img: "stretchwrap", extra: ["stretchwrap2", "stretchwrap3"],
  hook: "The film round a pallet is not shrunk on; it is stretched on, and the stretch is what holds the load. Linear low-density polyethylene pulls to three times its length and then spends its life trying to recover.",
  more: "The film is cast or blown twelve to twenty-five microns thick with a few percent of polyisobutylene that migrates to one face and makes it cling to itself; a wrapping machine runs it over two rollers turning at different speeds, pre-stretching it by two or three hundred percent, and lays it on the turning pallet under tension. The layers grip each other and nothing else, so it comes off a carton clean, and a few hundred grams holds a tonne through a lorry journey. The costs: hand wrapping cannot pre-stretch, so a hand roll uses several times the film for a looser load; a nick on a corner unwinds in the wind; it is no barrier to rain; it comes off as a tangled ball few recyclers want; and a badly wrapped pallet is a load shifted on a bend.",
  stats: [["Pre-stretch", "200-300% on a machine"], ["Cling", "polyisobutylene on one face"], ["Per pallet", "a few hundred grams holds a tonne"]],
  uses: "Every pallet in every warehouse, hay bales, boats and machinery in storage, furniture removals.",
  link: "https://en.wikipedia.org/wiki/Stretch_wrap",
  src: ["Macrogalleria: polyethylene", "https://pslc.ws/macrog/pe.htm"]
},
{
  id: "bubblewrap", cat: "film", name: "Bubble wrap",
  sub: "two polyethylene films, one vacuum-formed into pockets", img: "bubblewrap", extra: ["bubblewrap2", "bubblewrap3"],
  hook: "Two engineers in 1957 sealed two shower curtains together with air between them and tried to sell it as wallpaper, then as greenhouse insulation. It became packaging in 1960 when IBM needed to ship a computer.",
  more: "Hot polyethylene film runs over a drum pierced with pockets under vacuum, which sucks it into bubbles, and a second flat film is laminated on while the bubbles are still full; in the better grades a nylon barrier layer is co-extruded into the film so the air stays in over months, which the plain kind does not. It cushions by letting a bubble deform and spring back, it weighs nothing, and it is cheap enough to throw away. The costs: it cushions only once hard, because a popped bubble is two thin films and a popped sheet is nothing; the cheap grades go flat in a warehouse before they reach a parcel; it is bulky to ship empty; the laminate with nylon in it is hard to recycle; and nobody has kept a sheet long enough to find out how it ages.",
  stats: [["Invented", "1957, as wallpaper"], ["Bubble", "from 6 to 25 mm across"], ["Weakness", "air leaks out of the cheap grades"]],
  uses: "Parcels, moving house, greenhouse glazing, insulation on a pond pump in winter, a bit of stress relief.",
  link: "https://en.wikipedia.org/wiki/Bubble_wrap"
},
{
  id: "shrinkfilm", cat: "film", name: "Shrink film",
  sub: "biaxially oriented polyolefin or PVC, cross-linked", img: "shrinkfilm", extra: ["shrinkfilm2", "shrinkfilm3"],
  hook: "A film with a memory. Polyolefin or PVC is stretched both ways while warm and chilled, which freezes the molecules stretched; heat it again and it tries to return to its old size, shrinking by half or more.",
  more: "The film is extruded, stretched both ways while warm, then chilled before the chains can relax; for polyolefin an electron beam cross-links the chains first so they cannot slide apart when heated again. The product goes into a loose sleeve, a bar seals it, and a hot tunnel sets the film shrinking until it is tight round whatever is inside, which is why a multipack of bottles has a hard skin with a hole at each end for a hand. The costs: PVC shrinks hard and fast and gives off hydrogen chloride while it does, so the film is leaving food packaging; polyolefin is tougher and cleaner and costs more; shrunk film needs a blade to open; and the same trick in a tube is the heat-shrink on a wire, the only version anyone keeps.",
  stats: [["Shrink", "up to 50-70% in each direction"], ["Trigger", "hot air, roughly 120-180 °C"], ["Cross-linked by", "electron beam, for the polyolefin grade"]],
  uses: "Multipacks and boxed software, bottle labels, boats in winter storage, heat-shrink tubing on wiring.",
  link: "https://en.wikipedia.org/wiki/Shrink_wrap"
},
{
  id: "ldpefilm", cat: "film", name: "Blown polyethylene film",
  sub: "low-density polyethylene, inflated from a ring die", img: "ldpefilm", extra: ["ldpefilm2", "ldpefilm3"],
  hook: "Most of the plastic bags in the world are made by blowing a bubble. Molten polyethylene comes up through a ring die, air is blown into the middle, and a tube of film storeys high rises to rollers that flatten it.",
  more: "Low-density polyethylene is used because its branched chains give the melt the strength to stand up as a bubble at all; the bubble stretches the film both ways at once, round as it inflates and lengthwise as the rolls pull it up, which is what gives a bag its toughness, and the flattened tube becomes bags with one seal and a cut. The whole thing is a balance of air pressure, melt strength and roller speed that an operator watches by eye. The costs: the bubble wanders, and a draught through the shed puts a thick stripe down the film; the thin spots set the rating; the film is hazy, which is why bread bags look as they do; it scuffs; and it is the cheapest useful plastic there is, which is why so much of it is in the sea.",
  stats: [["Film", "from about 10 to 250 µm"], ["Bubble", "up to several metres across"], ["Why LDPE", "branched chains give melt strength"]],
  uses: "Carrier bags and bin liners, bread bags, agricultural sheet, the liner inside a cereal box.",
  link: "https://en.wikipedia.org/wiki/Low-density_polyethylene",
  src: ["Macrogalleria: polyethylene", "https://pslc.ws/macrog/pe.htm"]
},
{
  id: "pdlcfilm", cat: "film", name: "PDLC switchable film",
  sub: "liquid crystal droplets in a polymer, between conductive PET", img: "pdlcfilm", extra: ["pdlcfilm2", "pdlcfilm3"],
  hook: "A sheet that goes from frosted to clear at a switch. Liquid crystal droplets cured into a polymer between two conductive films: with no field they scatter light, at sixty volts they line up and the film clears.",
  more: "Liquid crystal is mixed into a UV-curable resin, spread a few hundredths of a millimetre thick between two sheets of PET coated with indium tin oxide and cured, which throws it out as droplets; with no field the molecules in each droplet point every which way, their index does not match the polymer, and light scatters. A voltage across the layers lines the molecules up, the indices match, and the film clears in milliseconds; laminated in glass, a wall becomes a window. The costs: it uses power to stay transparent, not opaque, so a meeting room is clear only while someone pays; it blurs light rather than blocking it, and a shadow behind it still shows; clear, it keeps a haze; a crease is a dead stripe; and it costs hundreds of pounds a square metre.",
  stats: [["Clear at", "roughly 48-65 V AC"], ["Power", "only while transparent"], ["Switch", "a few milliseconds"]],
  uses: "Meeting-room glass, hospital partitions, rear-projection shop windows, car sunroofs, aircraft cabin dividers.",
  link: "https://en.wikipedia.org/wiki/Smart_glass",
  src: ["Gauzy: PDLC", "https://www.gauzy.com/pdlc/"]
},
{
  id: "capfilm", cat: "film", name: "Metallised capacitor film",
  sub: "polypropylene with a few nanometres of aluminium or zinc", img: "capfilm",
  hook: "A capacitor that repairs its own failures. The dielectric is polypropylene film a few microns thick, carrying an electrode of evaporated metal so thin, tens of nanometres, that it is almost not there. When a weak spot in the film breaks down, the arc vaporises the metal around the hole faster than it can carry current, the fault is cut out of the circuit in microseconds, and the capacitor goes on working with a little less capacitance. Thousands of such clearings can happen over a life. A foil electrode would hold the arc and short the part for good; the thin metal fails safe by failing first.",
  stats: [["Film", "polypropylene, about 2-10 µm"], ["Electrode", "aluminium or zinc, tens of nanometres"], ["Self-healing", "a clearing takes microseconds"]],
  uses: "Mains filters, motor-run and lighting capacitors, inverters, the snubbers in every switch-mode supply.",
  link: "https://en.wikipedia.org/wiki/Film_capacitor",
  src: ["Vishay: film capacitors", "https://www.vishay.com/en/capacitors/film/"]
},
{
  id: "nitratefilm", cat: "film", name: "Nitrate film base",
  sub: "cellulose nitrate, camphor-plasticised", img: "nitratefilm",
  hook: "The first flexible film base, and the reason cinema archives are built like bunkers. Cellulose nitrate is chemically close to guncotton; it burns fiercely, carries its own oxygen so water does not put it out, and can ignite on its own in a hot can. Worse for the archivist, it decomposes slowly from the day it is made, giving off nitrogen dioxide that attacks the gelatin image, then the base itself, until a reel is a sticky brown mass and finally a rust-coloured powder. The decay is self-catalysing, so every reel in a sealed can speeds the next one. Manufacture stopped in 1951 in favour of acetate, which has a slower disaster of its own.",
  stats: [["Used", "1889 to about 1951"], ["Burns", "self-oxidising, cannot be smothered"], ["Decay", "self-catalysing, feeds on its own fumes"]],
  uses: "Early cinema and still negatives, now stored cold in vaults; the survivors are copied, the rest dissolve.",
  link: "https://en.wikipedia.org/wiki/Nitrocellulose",
  src: ["Library of Congress: care of film", "https://www.loc.gov/preservation/care/film.html"]
},
{
  id: "sailfilm", cat: "film", name: "Solar sail film",
  sub: "aluminised polyimide or polyester, 2-8 µm", img: "sailfilm",
  hook: "A spacecraft pushed by light, which weighs nothing, needs a sail that weighs almost nothing. The film is polyimide or polyester, a tenth the thickness of kitchen foil and twenty times thinner than a hair, carrying a coat of aluminium a hundred nanometres thick to reflect sunlight and, on the back, chromium or a black layer to shed heat. Sunlight pushes on it with about nine micronewtons per square metre at Earth, so a sail the size of a tennis court accelerates a small satellite the way a snail does; what it never does is run out of fuel. Folding it so it unpacks without tearing is the hard part.",
  stats: [["Film", "2-8 µm, aluminised"], ["Thrust", "about 9 µN per square metre at Earth"], ["Packing", "folded flat, unfurled on booms"]],
  uses: "IKAROS, LightSail 2, NASA ACS3; proposed for station-keeping and for drag sails that de-orbit dead satellites.",
  link: "https://en.wikipedia.org/wiki/Solar_sail",
  src: ["NASA: Advanced Composite Solar Sail System", "https://www.nasa.gov/mission/acs3/"]
},
{
  id: "ptfetape", cat: "film", name: "Thread seal tape",
  sub: "unsintered PTFE, calendered to 0.075 mm", img: "ptfetape",
  hook: "The white tape on a pipe thread is PTFE that was never fully made. Sintered PTFE is the hard, slippery solid of a frying pan; this is the raw powder pasted with a lubricant and squeezed through rollers into a ribbon, then dried but not baked, so the particles are only lightly fused and the film tears, stretches and smears at a touch. Wrapped round a thread it does not seal by sticking or setting. The thread crushes it into the gaps and it cold-flows to fill them, and it lubricates the joint so the taper pulls up further. Wrap it against the direction of tightening and the thread unwinds it; put it on a parallel thread and it does nothing much at all.",
  stats: [["Thickness", "about 0.075 mm"], ["Works by", "cold flow into the thread, plus lubrication"], ["Wrong way round", "the thread peels it off"]],
  uses: "Plumbing, gas fittings with the yellow grade, air lines, the laboratory and the oxygen bottle.",
  link: "https://en.wikipedia.org/wiki/Thread_seal_tape"
},
{
  id: "parafilm", cat: "film", name: "Parafilm",
  sub: "paraffin wax and polyolefin, 0.13 mm", img: "parafilm",
  hook: "A lab film that seals by being stretched over the mouth of a flask, and nowhere else is anything sealed that way. It is paraffin wax blended with a polyolefin, which gives it the waxy self-cling of the one and the stretch of the other; pulled to twice its length it thins, clings to glass and to itself, and stays put, keeping water vapour out of a sample and solvent in, well enough to hold a flask for weeks. It is cheap, it leaves no residue, and it fails in the ways wax does: above about 50 °C it softens and sags, a solvent that dissolves paraffin walks straight through it, and it is not sterile.",
  stats: [["Stretch", "to about 200%"], ["Seals against", "water vapour, not solvents"], ["Dies at", "about 50 °C"]],
  uses: "Flasks, test tubes and Petri dishes in every laboratory, grafting tape in orchards, a quick cork.",
  link: "https://en.wikipedia.org/wiki/Parafilm",
  src: ["Amcor: sealing films and wraps", "https://www.amcor.com/products/technical-applications/sealing-films-wraps"]
},
{
  id: "esdbag", cat: "film", name: "Static shielding bag",
  sub: "metallised polyester over polyethylene, with a dissipative coat", img: "esdbag",
  hook: "A circuit board shipped in an ordinary polythene bag can arrive dead from a spark it never saw. The silver bag is a Faraday cage you can heat-seal: a layer of aluminium a few tens of nanometres thick, buried between polyester and polyethylene, that spreads any charge around the outside instead of letting the field through, with a coating on both faces that bleeds static away slowly instead of letting it build. The pink bag beside it is only antistatic, meaning it will not generate a charge itself; it shields nothing, and the difference is about a thousand volts of protection. The metal layer is why the bag is translucent rather than clear.",
  stats: [["Shield", "a few tens of nanometres of aluminium"], ["Surface", "dissipative, 10^8 to 10^11 ohms"], ["Pink bag", "antistatic only, no shielding"]],
  uses: "Every memory module, drive and graphics card in transit, service spares, the inside of a repair kit.",
  link: "https://en.wikipedia.org/wiki/Antistatic_bag",
  src: ["ESD Association: ESD overview", "https://www.esda.org/esd-overview/"]
},
{
  id: "geomembrane", cat: "film", name: "HDPE geomembrane",
  sub: "high-density polyethylene sheet, 1-2.5 mm, carbon black", img: "geomembrane",
  hook: "The floor under a landfill is a sheet of plastic. High-density polyethylene is extruded as flat sheet one to two and a half millimetres thick and up to eight metres wide, rolled out over a prepared clay bed, and welded along every seam with a hot wedge that leaves a double track with an air channel between, so each seam can be pressure-tested before the first lorry of waste arrives. It is chosen because nothing in leachate attacks it and because, with two percent carbon black, it survives sun on an open slope for decades. Its failure is stress cracking at a wrinkle or a weld, which is why the installation is inspected more closely than the material.",
  stats: [["Thickness", "1-2.5 mm, rolls up to 8 m wide"], ["Seams", "hot-wedge welded, air-tested"], ["Weakness", "stress cracking at folds and seams"]],
  uses: "Landfill liners and caps, mine heap-leach pads, reservoirs and canals, garden ponds in the thinner grades.",
  link: "https://en.wikipedia.org/wiki/Geomembrane",
  src: ["Geosynthetic Institute", "https://geosynthetic-institute.org/"]
},
{
  id: "mulchfilm", cat: "film", name: "Plastic mulch",
  sub: "black or clear polyethylene film, 15-30 µm, laid by machine", img: "mulchfilm",
  hook: "A strawberry field in stripes of black plastic. The film warms the soil by a few degrees, which brings a crop forward by weeks, stops weeds by denying them light, keeps the fruit off wet earth and holds in the water from the drip line under it. Clear film warms the soil more but grows weeds under it; black blocks them; white-on-black cools the roots in summer; silver confuses aphids. The problem is at the end of the season, when a few hundred kilograms per hectare of soil-caked film has to be pulled up and has nowhere to go, which is why mulch of PBAT and starch that ploughs in and rots is the thing growers are watching.",
  stats: [["Thickness", "15-30 µm"], ["Soil warming", "a few degrees, a crop weeks earlier"], ["Afterwards", "hundreds of kg per hectare to dispose of"]],
  uses: "Strawberries, melons and peppers, tomato fields, vineyards; biodegradable grades for crops that are ploughed in.",
  link: "https://en.wikipedia.org/wiki/Plastic_mulch"
},
{
  id: "balewrap", cat: "film", name: "Bale wrap",
  sub: "linear low-density polyethylene stretch film, 25 µm, UV-stabilised", img: "balewrap",
  hook: "A wrapped bale is a silo for one. Grass cut and baled while still wet is wound in four to six overlapping layers of stretch film, which excludes air; the bacteria inside then ferment the sugars into lactic acid, the pH falls, and the grass pickles itself into silage. The film has to stay airtight for a year outdoors, so it carries a UV stabiliser and is pigmented white or pale green to keep the bale cool, and it clings to itself so the layers seal without glue. One puncture lets oxygen in and the bale moulds from that spot. The old alternative was a clamp of grass under a weighted sheet; this costs more film per tonne and fewer trips.",
  stats: [["Layers", "4-6, overlapping by half"], ["Film", "25 µm LLDPE with UV stabiliser"], ["One hole", "mould spreads from it"]],
  uses: "Grass and maize silage on livestock farms from Ireland to New Zealand.",
  link: "https://en.wikipedia.org/wiki/Silage"
},
{
  id: "microfilm", cat: "film", name: "Microfilm",
  sub: "silver-gelatin emulsion on polyester base, 16 or 35 mm", img: "microfilm",
  hook: "A storage medium with a rated life of five hundred years and a reader that is a lamp and a lens. Pages are photographed at a reduction of twenty to forty times onto silver-halide emulsion on a polyester base; the silver image is metal in gelatin, which does not fade, and the polyester, unlike the acetate it replaced, neither shrinks nor turns to vinegar. Stored cool and dry it is the only format a library can put on a shelf and trust to be readable when every current disc, drive and file format has been obsolete for centuries. The costs are that it cannot be searched, a roll takes an afternoon to read, and the colour versions do not last.",
  stats: [["Reduction", "20-40 times"], ["Rated life", "LE-500, five centuries"], ["Reader needed", "a lamp and a lens"]],
  uses: "Newspaper and census archives, land registries, engineering drawing vaults, the granite vault outside Salt Lake City.",
  link: "https://en.wikipedia.org/wiki/Microform",
  src: ["US National Archives: microfilming", "https://www.archives.gov/preservation/formats/microfilming.html"]
},
{
  id: "shrinkart", cat: "film", name: "Shrink art sheet",
  sub: "biaxially oriented polystyrene, 0.25 mm", img: "shrinkart",
  hook: "The toy that teaches orientation. A sheet of polystyrene is stretched in both directions while warm and cooled while stretched, which locks the chains in a flattened state and makes a sheet you can draw on with pencils. In an oven at about 160 °C the chains relax to their coiled shape and the sheet shrinks to about a third of its size in each direction, curling violently on the way, and ends up nine times smaller in area and nine times thicker, with the drawing shrunk and sharpened along with it. It is the same physics as shrink film and heat-shrink tubing, and the reason a polystyrene cup from a drinks machine turns into a thick button in the same oven.",
  stats: [["Shrinks", "to about a third in each direction"], ["Oven", "about 160 °C"], ["Thickens", "by the same factor, roughly nine"]],
  uses: "Shrinky Dinks, jewellery and keyring craft, a classroom demonstration of polymer orientation.",
  link: "https://en.wikipedia.org/wiki/Shrinky_Dinks",
  src: ["Macrogalleria: polystyrene", "https://pslc.ws/macrog/styrene.htm"]
},
{
  id: "lcfilm", cat: "film", name: "Liquid crystal thermometer",
  sub: "cholesteric liquid crystal microcapsules on black polyester", img: "lcfilm",
  hook: "A strip that reads temperature in colour with no sensor and no battery. Each number sits over a patch of cholesteric liquid crystal, a helix of rod molecules whose pitch changes with temperature and reflects the colour of light that matches it, so each patch is dark until its own band arrives and then runs red, green and blue over about a degree before going dark again. The crystal is microencapsulated and printed on a black background so the reflected colour shows. It is accurate to about half a degree, costs almost nothing, and is wrong the moment a hand or a lamp warms the strip rather than the thing it is stuck to.",
  stats: [["Reads by", "helix pitch selecting a reflected colour"], ["Resolution", "about 1 °C per patch"], ["Fooled by", "anything that warms the strip itself"]],
  uses: "Aquariums and fermenters, fridge strips, forehead thermometers, mood rings, mapping airflow over a wing in a wind tunnel.",
  link: "https://en.wikipedia.org/wiki/Liquid_crystal_thermometer"
},
{
  id: "feelerstock", cat: "film", name: "Feeler stock",
  sub: "hardened and tempered carbon steel strip, 0.04-1 mm", img: "feelerstock",
  hook: "A measuring instrument whose whole content is a material held to a tolerance. Feeler stock is spring steel rolled to a stated thickness and hardened, so a leaf stamped 0.10 mm is 0.10 mm along its whole length and stays that way after ten thousand slides into a spark-plug gap; the same strip is sold by the metre as shim stock for packing a bearing or truing a machine. The thin leaves will not stand up on their own and measure by feel, a light drag between two faces, which is where the name comes from. It rusts if you look at it, and a kinked leaf is scrap, because the kink is thicker than the leaf.",
  stats: [["Thickness", "0.04-1 mm, held to a few microns"], ["Steel", "hardened and tempered carbon spring steel"], ["Scrap if", "kinked, rusted or burred"]],
  uses: "Valve clearances and plug gaps, bearing shims, machine alignment, the slide in a luthier's nut file.",
  link: "https://en.wikipedia.org/wiki/Feeler_gauge"
},
{
  id: "greenhousefilm", cat: "film", name: "Greenhouse film",
  sub: "UV-stabilised polyethylene or EVA, 150-200 µm, three-layer", img: "greenhousefilm",
  hook: "A glasshouse for the price of the plastic. Polytunnel film is polyethylene blown as a tube up to sixteen metres wide, two hundred microns thick, and made to last three or four summers in full sun by a hindered-amine stabiliser that scavenges the radicals ultraviolet knocks loose; without it the sheet goes brittle and shreds in a season. The middle layer of a modern film is EVA, which absorbs the infrared the ground radiates at night and holds a few degrees of warmth, and the inside face carries an anti-drip additive so condensation runs down instead of falling as cold rain on the plants. The same chemistry is why a sulphur-based pesticide can kill a greenhouse cover.",
  stats: [["Thickness", "150-200 µm, often three layers"], ["Life", "3-4 seasons, set by the stabiliser"], ["Killed by", "sulphur and chlorine pesticides"]],
  uses: "Polytunnels and high tunnels worldwide, nursery cold frames, the winter cover on a strawberry field.",
  link: "https://en.wikipedia.org/wiki/Polytunnel"
},
{
  id: "pvaglue", cat: "glue", name: "PVA wood glue",
  sub: "polyvinyl acetate emulsion, white and yellow glue", img: "pvaglue", extra: ["pvaglue2"],
  hook: "White glue is droplets of plastic in water. The wood drinks the water, the droplets run together into a film, and the joint is stronger than the wood. Glass never bonds: the water has nowhere to go.",
  more: "Fritz Klatte made vinyl acetate at Griesheim in 1912 and it waited a generation for a use; Borden sold the emulsion as Elmer's in 1947. It is not a liquid plastic but droplets of one suspended in water, so it sets by losing water into the wood and the droplets touching, which is why it works on anything porous and on nothing else. In shear the joint outlasts the wood. It also creeps under a steady load, softens above 60 C and lets go when damp, so a shelf glued with it sags over the years, politely. Before it the cabinetmaker kept a pot of hide glue hot all day; after it, only the people who need the joint to come apart again do. Yellow and cross-linking grades buy more heat and water; polyurethane bought the outdoors.",
  stats: [["Shear strength", "20 to 27 MPa"], ["Full strength", "24 h"], ["Weakness", "creep under load, softens above 60 °C"]],
  uses: "Furniture, bookbinding, school craft, every workshop drawer.",
  link: "https://en.wikipedia.org/wiki/Polyvinyl_acetate",
  src: ["Macrogalleria", "https://pslc.ws/macrog/pva.htm"]
},
{
  id: "hotmelt", cat: "glue", name: "Hot-melt glue",
  sub: "ethylene-vinyl acetate with tackifier and wax", img: "hotmelt", extra: ["hotmelt2", "hotmelt3"],
  hook: "Nothing cures. A stick of plastic is melted, pushed out and bonds the moment it cools, which is why a box plant closes thousands of cartons a minute. A sunny window un-sticks it just as fast.",
  more: "A hot-melt is a thermoplastic with the chemistry left out: ethylene-vinyl acetate for the body, a resin to make it tacky, wax to make it flow, and no cure at all. The gun melts the stick at 120 to 190 C, the bead wets whatever it lands on, and the bond exists the moment it drops below its softening point, about ten seconds later. That speed is why cartons, book spines and shoe linings are closed with it: there is nothing to wait for. The bond is as strong as the solid plastic and no stronger, and it remembers heat, so a parcel in a hot van opens itself, and a bead on cold steel never wets the surface and peels off clean. The reactive polyurethane kind cures with moisture after cooling and stops being a hot-melt at all.",
  stats: [["Applied at", "120 to 190 °C"], ["Sets in", "about 10 s"], ["Fails above", "60 to 80 °C"]],
  uses: "Cartons, book spines, crafts, cable potting, the inside of a shoe.",
  link: "https://en.wikipedia.org/wiki/Hot-melt_adhesive",
  src: ["Power Adhesives", "https://www.poweradhesives.com/"]
},
{
  id: "wheatpaste", cat: "glue", name: "Wheat starch paste",
  sub: "cooked wheat starch and water, nothing else", img: "wheatpaste", extra: ["wheatpaste2", "wheatpaste3"],
  hook: "Cooked wheat starch and water, the conservator's glue, because it comes undone. A hinge laid in it fifty years ago lifts with a damp swab, and a failing repair tears the paste, not the page.",
  more: "Starch granules cooked in water burst, and the chains tangle into a translucent paste that paper conservators use almost to the exclusion of anything else, because every other glue is permanent and permanence is a vice in a repair. The paste is weaker than the paper, so a failing hinge lets go at the paste; and it re-wets, so what a conservator did in 1970 can be undone in an afternoon. Japanese scroll mounters keep theirs in jars for ten years until it is weaker still, on purpose. On the street it is the poster glue: brush, poster, brush again. The cost is that it is food. It moulds on a damp wall, and a batch lasts about a week in the fridge. Bookbinding factories moved to PVA, which does not go off and does not come off either.",
  stats: [["Cooked at", "about 80 °C"], ["Shelf life", "days, in the fridge"], ["Reversible", "with water, always"]],
  uses: "Paper repair, hinging prints, box making, street posters, papier-mâché.",
  link: "https://en.wikipedia.org/wiki/Wheatpaste",
  src: ["AIC Book and Paper Group", "https://www.conservation-wiki.com/wiki/BPG_Adhesives"]
},
{
  id: "contactcement", cat: "glue", name: "Contact cement",
  sub: "polychloroprene rubber in solvent, Butapren, Weldwood", img: "contactcement", extra: ["contactcement2"],
  hook: "Brush it on both parts, wait until both are dry to the touch, then press. The two dry films grab each other completely and at once, no clamp, no open time, and no second chance.",
  more: "Contact cement is neoprene, the synthetic rubber DuPont sold from 1931, dissolved in solvent. Coat both parts, let the solvent leave, and the two dry films bond to each other on touch, fully, with pressure alone, which is how laminate goes onto a worktop and a sole onto a shoe, two things no wet glue could hold still long enough to set. The price is that it bonds exactly where the parts first meet, so a worktop is laid over dowels and the dowels pulled one at a time. The window is a quarter of an hour to an hour after touch-dry; leave it longer and the two films have forgotten each other. The toluene is the smell of every shoe repair shop and the reason the water-based grades exist, which are kinder and slower.",
  stats: [["Bonds", "on contact, pressure only"], ["Window", "15 to 60 min after touch-dry"], ["Heat limit", "about 70 °C"]],
  uses: "Laminate worktops, shoe soles, veneer, leather, foam upholstery.",
  link: "https://en.wikipedia.org/wiki/Impact_glue",
  src: ["DAP", "https://www.dap.com/"]
},
{
  id: "rubbercement", cat: "glue", name: "Rubber cement",
  sub: "natural rubber dissolved in heptane", img: "rubbercement", extra: ["rubbercement2"],
  hook: "Raw rubber dissolved in heptane. Coat both sides and it bonds like contact cement; coat one and it peels off paper without a mark, which is why newspapers were laid out with it for sixty years.",
  more: "Rubber cement is natural rubber dissolved in a petrol fraction. On both surfaces, dried and pressed, it is contact cement; on one surface it is the most forgiving glue ever made for paper, since the dried film peels away clean and the excess rubs off in crumbs. Every newspaper and magazine page from the 1920s to the 1980s was assembled with it, type pasted down, lifted and moved until the page worked. The wartime picture shows a Goodyear worker brushing it onto rubberised cloth for an inflatable assault boat, the same solvent-welded seam as a bicycle puncture patch. It yellows paper within a few years and stains through, and an open pot has a flash point below freezing. Desktop publishing retired it in a decade; the puncture kit never let it go.",
  stats: [["Solvent", "heptane, flash point -4 °C"], ["Removable", "from paper, one-sided"], ["Ages", "yellows and stains"]],
  uses: "Paste-up, puncture repair, leather, balloons, masking.",
  link: "https://en.wikipedia.org/wiki/Rubber_cement",
  src: ["Bestine", "https://www.bestine.com/"]
},
{
  id: "rabbitskin", cat: "glue", name: "Rabbit-skin glue",
  sub: "collagen from rabbit hide, in granules", img: "rabbitskin", extra: ["rabbitskin2", "rabbitskin3"],
  hook: "The painter's size: warmed, brushed on raw canvas, mixed with chalk into gesso. It never stops being animal protein, so it swells in damp and shrinks in dry, and old paintings crack along with it.",
  more: "Rabbit-skin glue is collagen boiled out of hides, soaked, warmed to about 60 C and brushed onto raw canvas, because oil paint on bare linen rots the cloth. Mixed with chalk it is gesso, the ground under five centuries of panel paintings. It is chosen over bone and hide glue for being paler and more elastic. It also never stops being a hygroscopic protein. The film takes on water in a damp room and gives it back in a dry one, swelling and shrinking under a paint layer that cannot, which is where the cracks in old paintings come from and why museums spend their money on humidity. Acrylic dispersions have sized most canvas since the 1960s; the painters who hold out know exactly what they are buying, cracks included.",
  stats: [["Working temp", "about 60 °C"], ["Film", "swells and shrinks with the weather"], ["Mould", "yes, once damp"]],
  uses: "Canvas sizing, gesso, gilding, book restoration.",
  link: "https://en.wikipedia.org/wiki/Rabbit-skin_glue",
  src: ["Gamblin", "https://gamblincolors.com/rabbit-skin-glue/"]
},
{
  id: "boneglue", cat: "glue", name: "Bone glue",
  sub: "collagen from boiled bone, sold as pearls", img: "boneglue", extra: ["boneglue2", "boneglue3"],
  hook: "The cheap end of the collagen glues: bones boiled, the broth dried into pearls. Weaker and darker than hide glue, reversible with heat and water for ever, and useless in a cold shop.",
  more: "Bone glue is what is left when degreased bone is boiled and the broth dried to pearls: collagen, the same molecule as hide glue with less strength and more colour. It gels as it cools and sets as it dries, so the joint is made hot and quick and holds by morning, and because the gel never cross-links, a joint made in 1850 opens today with a damp cloth and a warm iron, which is why every conservator wants furniture glued with it and no manufacturer does. The failures are domestic: a cold shop gels the brush before the parts meet, damp lets it go, and a pot kept hot all day cooks the chains shorter until it is brown soup. PVA took the factories in the 1950s; the pot survives in instrument workshops, where things must come apart again.",
  stats: [["Gels at", "about 50 °C"], ["Bloom strength", "100 to 200 g"], ["Enemy", "damp, and a cold shop"]],
  uses: "Bookbinding, veneering, gummed tape, abrasive paper, matches.",
  link: "https://en.wikipedia.org/wiki/Animal_glue",
  src: ["AIC Book and Paper Group", "https://www.conservation-wiki.com/wiki/BPG_Adhesives"]
},
{
  id: "caseinglue", cat: "glue", name: "Casein glue",
  sub: "milk curd, lime and a little sodium salt", img: "caseinglue", extra: ["caseinglue2"],
  hook: "Milk curd, lime and a little salt: a powder that sets at room temperature and shrugs off damp. It built the plywood aircraft of the First World War, and it stains oak a black line to remind you.",
  more: "Casein is the protein that curdles out of skimmed milk; dried, ground and mixed with lime and sodium salts, it is a powder stirred into water on the bench that glues wood cold, with a joint that stands damp far better than any animal glue. By 1914 it was decisive: the plywood fuselages and laminated spars of the First World War were casein-glued, and it was the first strong wood joint that needed no hot pot and no hurry. The lime is the trouble. It turns the tannin in oak, mahogany and walnut into a black glue line, and the bond weakens the longer it stays damp, which is not what a wing wants. Urea and phenol resins took the aircraft work in the 1930s. Casein kept the beer-bottle label, where a glue that lets go in cold water is the specification.",
  stats: [["Water", "damp-proof, not waterproof"], ["Sets at", "room temperature"], ["Stains", "oak, mahogany, any tannin wood"]],
  uses: "Early plywood and aircraft, beer-bottle labels, furniture, wine fining.",
  link: "https://en.wikipedia.org/wiki/Casein",
  src: ["AIC Book and Paper Group", "https://www.conservation-wiki.com/wiki/BPG_Adhesives"]
},
{
  id: "gumarabic", cat: "glue", name: "Gum arabic",
  sub: "dried sap of Acacia senegal and seyal", img: "gumarabic", extra: ["gumarabic2", "gumarabic3"],
  hook: "Dried acacia sap, dissolved in water to a clear syrup. Edible, weak, and soluble for ever, which is exactly what a postage stamp needs. Most of the world's supply comes from one belt of Sudan.",
  more: "Gum arabic is the sap an acacia bleeds when its bark is cut, collected in amber lumps across the Sahel and dissolved in water into a syrup that holds, sweetens and dries clear. Being edible and harmless it gums stamps and envelope flaps, binds watercolour and pastels, sets gummy sweets and holds the oil in a soft drink. Being weak and soluble it is no use for anything that must stay stuck; the first lick undoes it, which is the point of a stamp. On a lithographic stone a film of it is the water-loving layer that refuses ink, and that was what printing meant for a century. The supply is one crop from one belt of semi-desert, Sudan above all, so a drought or a war there reaches confectioners and printers within months.",
  stats: [["Dissolves", "in cold water, fully"], ["Film", "brittle, re-wets"], ["Source", "Sudan, most of the world supply"]],
  uses: "Stamp gum, watercolour binder, lithography, sweets and soft drinks, pastels.",
  link: "https://en.wikipedia.org/wiki/Gum_arabic",
  src: ["AIC Book and Paper Group", "https://www.conservation-wiki.com/wiki/BPG_Adhesives"]
},
{
  id: "postit", cat: "glue", name: "Repositionable adhesive",
  sub: "acrylate microspheres, the Post-it glue", img: "postit", extra: ["postit2"],
  hook: "Spencer Silver at 3M overdid the monomer in 1968 and got tacky microspheres instead of a film. Only their tops touch the paper, so it holds, lets go, and holds again. Nobody wanted it for six years.",
  more: "Spencer Silver was trying to make a stronger acrylate adhesive in 1968 and got the weakest one 3M had seen: the monomer polymerised into solid tacky spheres tens of micrometres across instead of a film. Printed thinly, only the crowns of the spheres touch the paper, so the adhesive holds with a fraction of its strength and comes away without tearing, and because the spheres do not deform it sticks again. 3M filed it under interesting. Six years later Art Fry wanted a bookmark that stayed in his hymnal, and the note went on sale in 1980. The weakness is the specification: it holds no weight, every lift picks up dust until it holds nothing, and a note left on a wall for a year is on the floor. ",
  stats: [["Microspheres", "tens of micrometres"], ["Re-sticks", "until it picks up dust"], ["Peel strength", "a fraction of tape"]],
  uses: "Sticky notes, removable labels, repositionable mounting sprays and graphics.",
  link: "https://en.wikipedia.org/wiki/Post-it_note",
  src: ["National Inventors Hall of Fame", "https://www.invent.org/inductees/spencer-silver"]
},
{
  id: "threadlocker", cat: "glue", name: "Anaerobic threadlocker",
  sub: "dimethacrylate ester, Loctite 243", img: "threadlocker", extra: ["threadlocker2"],
  hook: "A drop stays liquid in the bottle because air keeps it so. Screwed into a steel thread the oxygen is gone, the metal starts the cure, and the bolt cannot vibrate loose. The bottle is sold half empty on purpose.",
  more: "Vernon Krieble, at Trinity College, Hartford, found in 1953 that a dimethacrylate ester stays liquid as long as oxygen reaches it and sets hard as soon as it does not, with iron or copper ions to start it. Screw a wet bolt home and the clearance between the threads is airless and full of metal: the drop cures to a hard plastic that fills it, and the bolt stays put through vibration. The trick was the bottle, half full of air and made of a plastic that breathes, since a bottle sealed too well cures itself solid. It does nothing on plastics and little on stainless, zinc plate or anodised aluminium without a primer to supply the ions. Spring washers did the job before, and still do it worse.",
  stats: [["Cures", "without air, on metal ions"], ["Break-away, M10", "about 26 N·m, blue grade"], ["Stainless", "needs an activator"]],
  uses: "Engine bolts, bicycles, rifle scopes, bearings pressed into housings.",
  link: "https://en.wikipedia.org/wiki/Thread-locking_compound",
  src: ["Loctite", "https://www.loctiteproducts.com/"]
},
{
  id: "rtvsilicone", cat: "glue", name: "Silicone sealant",
  sub: "RTV acetoxy-cure polysiloxane", img: "rtvsilicone", extra: ["rtvsilicone2", "rtvsilicone3"],
  hook: "Cures from the moisture in the air, giving off vinegar, and stays rubber through twenty years of sun and frost. Nothing sticks to it afterwards: not paint, not a second bead, not even the first bead's replacement.",
  more: "A silicone sealant is a polysiloxane that takes water from the air and gives back acetic acid, the vinegar smell: the bead skins in ten minutes and cures about 2 mm a day inward, so a deep fill takes a week to harden through. The rubber it becomes sticks to glass, tile and metal and does what no hard glue can, stretching and squashing with a joint that moves a quarter of its width through twenty years of sun and frost. The flip side is a surface nothing wets: paint beads off, and a second bead does not bond to the first, so a failed joint is cut out to bare substrate. The acetic acid etches copper and concrete, so electronics and masonry get the neutral-cure kind. Mould, meanwhile, grows on it perfectly well.",
  stats: [["Cure rate", "about 2 mm a day"], ["Movement", "±25% of joint width"], ["Paintable", "no"]],
  uses: "Shower and window joints, aquaria, car gaskets, potting electronics.",
  link: "https://en.wikipedia.org/wiki/Silicone_rubber",
  src: ["GE Sealants", "https://www.gesealants.com/"]
},
{
  id: "birchtar", cat: "glue", name: "Birch bark tar",
  sub: "dry-distilled birch bark, the oldest glue", img: "birchtar", extra: ["birchtar2", "birchtar3"],
  hook: "Birch bark heated without air sweats a black tar, the oldest synthetic material known. A flint from a Dutch beach carries a lump a Neanderthal made 50,000 years ago. It softens in the hand and cracks in the cold.",
  more: "Heat birch bark with the air kept out and it gives up a black tar: the earliest material anyone made that does not occur in nature. A flint flake found on a Dutch beach in 2016 carries a lump of it that a Neanderthal pressed on about 50,000 years ago to hold the tool, and it hafted blades and set the arrowheads of Oetzi for the forty thousand years after. It is a thermoplastic: soft at body heat, hard in the cold, re-usable. The archaeologists' argument was how a people with no pots managed a sealed distillation, and the answer is that a roll of bark in the embers gives a little and a bark cone in a pit gives more. Below freezing it goes brittle and a hafted blade comes off in a hard strike, which is presumably how the Zandmotor flake was lost.",
  stats: [["Made at", "250 to 400 °C, no air"], ["Oldest find", "about 50,000 years"], ["Softens", "in the hand"]],
  uses: "Hafting stone tools, mending pots, waterproofing, Mesolithic chewing gum.",
  link: "https://en.wikipedia.org/wiki/Birch_bark_tar",
  src: ["Kozowyk et al., Scientific Reports 2017", "https://www.nature.com/articles/s41598-017-08106-7"]
},
{
  id: "gluestick", cat: "glue", name: "Glue stick",
  sub: "PVP or modified starch, in a lipstick case", img: "gluestick", extra: ["gluestick2", "gluestick3"],
  hook: "Henkel's Pritt, 1969, after an engineer watched a woman apply lipstick on a flight. Water-based glue thickened to a twist-up gel; it dries into the paper and holds nothing heavier. The safest glue in the building.",
  more: "Wolfgang Dierichs of Henkel watched a woman put on lipstick on a flight in 1967 and asked why glue could not be sold like that; Pritt went on sale in 1969. The stick is a water-based glue thickened with a stearate soap into a gel firm enough to hold a shape, polyvinylpyrrolidone at first and modified starch since 2000. It sets by losing its water into paper, which is why it works on paper and card and on nothing that cannot drink. The bond is weak, a wet sheet wrinkles, and a stick left uncapped dries to a crumb in a day. All of that is why it is handed to five-year-olds: no solvent, nothing to spill, nothing it can do to anybody. Before it the classroom had a pot of paste and a brush, and the brush ended up in the pot.",
  stats: [["Launched", "1969"], ["Sets", "by drying into the paper"], ["Holds", "paper and card, nothing heavier"]],
  uses: "Schools, offices, envelopes, scrapbooks, temporary masking.",
  link: "https://en.wikipedia.org/wiki/Glue_stick",
  src: ["Pritt", "https://prittworld.ca/ca-en/about-pritt/history.html"]
},
{
  id: "isinglass", cat: "glue", name: "Isinglass",
  sub: "collagen from sturgeon swim bladders", img: "isinglass", extra: ["isinglass2"],
  hook: "The dried swim bladder of a sturgeon, split into papery sheets: the purest of the animal glues, colourless, flexible, strong at one part in a hundred. Gilders lay gold with it and brewers drop it into the cask.",
  more: "Isinglass is the swim bladder of a sturgeon, dried and split into sheets like parchment, and it is collagen with almost nothing else in it: nearly colourless, flexible when dry, and strong at one to three per cent in water, where the film is invisible. Gilders lay gold leaf on it, icon painters and parchment conservators use it to lay down flaking paint, and brewers drop a shot of it into a cask of ale, where the long collagen strands net the yeast and drag it to the bottom in hours. The price of the real thing is the sturgeon, a fish that takes fifteen years to mature and is caught for its roe first. Fish glue boiled from cod skins does the cheap work. A pint cleared with isinglass is not vegan, which the brewers now print on the pump.",
  stats: [["Source", "sturgeon, Caspian and Volga"], ["Working strength", "1 to 3% in water"], ["Clears cask ale", "in hours"]],
  uses: "Gilding, consolidating flaking paint, cask-ale finings, parchment repair.",
  link: "https://en.wikipedia.org/wiki/Isinglass",
  src: ["Murphy and Son, brewing finings", "https://www.murphyandson.co.uk/products/finings/"]
},
{
  id: "wallpaperpaste", cat: "glue", name: "Wallpaper paste",
  sub: "methyl cellulose or modified starch, flakes into water", img: "wallpaperpaste", extra: ["wallpaperpaste2", "wallpaperpaste3"],
  hook: "Almost all water: a few grams of cellulose or starch thicken a litre into a slippery gel. The slip is the design. The paper slides into place, relaxes, and comes off again with steam when the fashion changes.",
  more: "Wallpaper paste is two to four per cent solids: flakes of methyl cellulose, which Henkel sold as Metylan from 1953, or of modified starch, stirred into a bucket of water and left to swell into a clear slippery gel. The slip is the design. The paper slides on the wall until the pattern matches, the gel keeps it wet long enough to expand and relax before it is hung, and the glue is weak on purpose, so that when the fashion changes the paper comes off with a steam stripper instead of the plaster. Stir the flakes in too fast and they knot into lumps that never dissolve, which every first-time decorator learns by Saturday lunchtime. Cellulose paste neither moulds nor stains; starch paste is cheaper and, behind a damp wall, is lunch for mould.",
  stats: [["Solids", "2 to 4% in water"], ["Strength", "low, by design"], ["Reversible", "with warm water"]],
  uses: "Wallpaper, lining paper, paper conservation, papier-mâché.",
  link: "https://en.wikipedia.org/wiki/Wallpaper_paste",
  src: ["Metylan", "https://www.metylan.de/de/produkte.html"]
},
{
  id: "foamtape", cat: "glue", name: "Acrylic foam tape",
  sub: "closed-cell acrylic foam that is adhesive all the way through, VHB", img: "foamtape",
  hook: "A double-sided tape with no carrier: the whole thickness is acrylic adhesive, foamed, so it stretches and swallows vibration. Car badges, signs and the glass of curtain walls hang on it. Clean surface or nothing.",
  more: "An ordinary double-sided tape is a thin carrier with adhesive on both faces, and the carrier is the weak layer. 3M dropped the carrier in 1980: a VHB tape is acrylic adhesive through its whole thickness, foamed with closed cells, so it bonds, stretches and damps vibration from one face to the other. Car makers hang trim and badges on it, sign makers hang signs, and since the 1990s glass curtain walls have been held to their frames with it. It is pressure-sensitive and patient: a clean surface, firm pressure and about three days to wet out, and it hates polyethylene, dust and a cold day. Removal is by stretching it out of the joint sideways, and it bonds very well indeed to an oil film and not at all to the metal under it.",
  stats: [["Thickness", "0.4 to 3 mm"], ["Full strength", "about 72 h"], ["Enemy", "polyethylene, dust, a cold day"]],
  uses: "Car trim and badges, signs, curtain-wall glazing, phone screens.",
  link: "https://en.wikipedia.org/wiki/Double-sided_tape",
  src: ["tesa", "https://www.tesa.com/en"]
},
{
  id: "spinifex", cat: "glue", name: "Spinifex resin",
  sub: "Triodia grass resin, winnowed, heated and filled", img: "spinifex", extra: ["spinifex2"],
  hook: "The hummock grass of inland Australia beads resin at the base of its leaves. Threshed out, melted and worked with sand, it set stone points to spears across half a continent. Warm it and it is yours again.",
  more: "Triodia, the spinifex of inland Australia, exudes a resin that beads at the base of its leaves. It was threshed or burned out of the tussock, winnowed from the chaff, melted gently and kneaded with sand, ash or charcoal into a cement that set stone points to spear shafts and axe heads to handles across the arid half of the continent, and was traded in cakes to places where the grass does not grow. It is a true thermoplastic: warm, it flows; cold, it is a hard cement; warm again, it is reusable, so a broken point is reset at the next fire. The skill is in not overcooking it, since too much heat turns it brittle. The failure is also the asset: a blade set in it comes free in a hard strike or a hot day, and the fire went with the spear.",
  stats: [["Collected", "by burning or threshing the tussock"], ["Worked", "with gentle heat; overheating ruins it"], ["Filler", "sand, ash, charcoal"]],
  uses: "Hafting spear points and axes, mending wooden dishes, waterproofing.",
  link: "https://en.wikipedia.org/wiki/Spinifex_resin",
  src: ["Queensland Museum", "https://blog.qm.qld.gov.au/2022/05/18/resin-an-essential-piece-of-kit/"]
},
{
  id: "epoxyputty", cat: "glue", name: "Epoxy putty",
  sub: "two-part kneadable epoxy, mineral-filled", img: "epoxyputty", extra: ["epoxyputty2", "epoxyputty3"],
  hook: "Epoxy with so much mineral filler that it is a clay. Knead the two colours until the marbling goes; an hour later it drills and taps like soft aluminium, holds on a vertical pipe, and has set under water.",
  more: "Two sticks of ordinary epoxy, resin and hardener, each loaded with so much mineral filler that it has given up being a liquid. Knead the two colours until the marbling is gone and the clock starts: five to twenty minutes to shape it, an hour to a block that drills, taps and files like soft aluminium. The filler is the whole point. It holds its shape on a vertical pipe, fills a hole instead of running out of it and cures under water, which is why a stick lives in the plumber's van and the sculptor's drawer. The filler is also the weakness: the bond is a grip on a roughened surface, not a chemical one, it is brittle, and spread thin it is no use at all. Liquid epoxy is stronger in every way except the ones that matter at the bottom of a wet sink.",
  stats: [["Work time", "5 to 20 min"], ["Cured", "drills and taps"], ["Strength", "a filler, not a structural glue"]],
  uses: "Pipe repair, model making, sculpture, car and boat fixes.",
  link: "https://en.wikipedia.org/wiki/Epoxy_putty",
  src: ["J-B Weld", "https://www.jbweld.com/product/j-b-weld-twin-tube"]
},
{
  id: "cyanoacrylate", cat: "glue", name: "Superglue",
  sub: "ethyl 2-cyanoacrylate", img: "cyanoacrylate", extra: ["cyanoacrylate2", "cyanoacrylate3"],
  hook: "It does not dry, it polymerises, and the trigger is the film of water on almost any surface, which is why it grabs skin before it grabs the job. Harry Coover found it twice and threw it out both times.",
  more: "Harry Coover at Eastman Kodak found ethyl cyanoacrylate in 1942, looking for a clear plastic for gunsights, and rejected it for sticking to everything; in 1951 he found it again, and this time wrote the patent. The monomer is a liquid until it meets a trace of water, and water is on every surface, so it polymerises in seconds into a glassy solid that holds in shear with real strength. The speed is the catch: the bond cannot fill a gap, is brittle, peels with a flick, lets go in boiling water, and leaves a white bloom wherever its vapour meets the water in the air. Fingerprint examiners fume it in a tank for exactly that bloom. Surgeons stopped sewing some wounds and glue them instead, with the butyl version, which stings less.",
  stats: [["Cure trigger", "surface moisture"], ["Set", "seconds, thin film only"], ["Weak in", "peel, gaps, heat"]],
  uses: "Model making, surgical skin adhesive, quick fixes, crime-scene fingerprint fuming.",
  link: "https://en.wikipedia.org/wiki/Cyanoacrylate",
  src: ["Permabond", "https://permabond.com/products/cyanoacrylate-adhesives/"]
}

];
