// Material catalogue. `img` matches a key in credits.js (a real photograph);
// `swatch` is a drawn illustration, used only where no freely licensed photo exists.
window.MATERIALS = [

/* ---------- POLYMERS & ELASTOMERS ---------- */
{
  id: "vulkollan", cat: "polymer", name: "Vulkollan",
  sub: "NDI-based cast polyurethane", img: "vulkollan",
  hook: "A cast polyurethane built on naphthalene diisocyanate instead of the usual MDI or TDI. It carries enormous load with very little hysteresis, so it does not cook itself from the inside while rolling.",
  stats: [["Hardness", "~65–95 Shore A"], ["Rebound", "up to ~65%"], ["Trick", "low heat build-up"]],
  uses: "Forklift and AGV wheels, heavy press pads, die cushions.",
  link: "https://en.wikipedia.org/wiki/Polyurethane"
},
{
  id: "sorbothane", cat: "polymer", name: "Sorbothane",
  sub: "viscoelastic polyether polyurethane",
  img: "sorbothane",
  swatch: { pattern: "gloss", colors: ["#2b2430", "#6a5878", "#17131c"] },
  hook: "Behaves like a solid at rest and like a liquid on impact timescales. Rubber stores energy and hands it back; Sorbothane turns it into heat instead.",
  stats: [["Durometer", "30–70"], ["Shock absorbed", "~90%+"], ["Rebound", "deliberately terrible"]],
  uses: "Microscope and turntable feet, machine isolation, insoles, speaker mounts."
},
{
  id: "d3o", cat: "polymer", name: "D3O",
  sub: "shear-thickening polymer", img: "d3o",
  hook: "Soft, floppy putty you can fold into a glove — until it is struck, when the molecules lock up for a few milliseconds and spread the hit across the pad.",
  stats: [["Behaviour", "rate-dependent"], ["Lock-up", "milliseconds"], ["At rest", "stays soft"]],
  uses: "Motorcycle and ski armour, military knee pads, phone cases.",
  link: "https://en.wikipedia.org/wiki/D3O"
},
{
  id: "uhmwpe", cat: "polymer", name: "UHMWPE / Dyneema",
  sub: "ultra-high-molecular-weight polyethylene", img: "uhmwpe",
  hook: "Polyethylene with chains so long they can be drawn into near-perfect alignment. Pound for pound it beats steel wire, and it floats.",
  stats: [["Fibre tensile", "~3–3.6 GPa"], ["Density", "0.97 g/cm³"], ["Melting", "~135 °C"]],
  uses: "Winch and mooring line, soft body armour, hip liners, cut-resistant gloves.",
  link: "https://en.wikipedia.org/wiki/Ultra-high-molecular-weight_polyethylene"
},
{
  id: "peek", cat: "polymer", name: "PEEK",
  sub: "polyether ether ketone", img: "peek",
  hook: "The semicrystalline thermoplastic that goes where engineers expect to need metal: steam, solvents, radiation and 250 °C, while still being injection-mouldable.",
  stats: [["Continuous use", "~250 °C"], ["Melt point", "343 °C"], ["Tensile", "~100 MPa"]],
  uses: "Pump wear rings, spinal cages, aerospace brackets, semiconductor handling.",
  link: "https://en.wikipedia.org/wiki/Polyether_ether_ketone"
},
{
  id: "vespel", cat: "polymer", name: "Vespel",
  sub: "polyimide, SP-1", img: "vespel",
  hook: "A polymer that never melts. It is sintered from powder, machined like metal, and runs dry in vacuum from cryogenic temperatures up to 300 °C.",
  stats: [["Continuous", "300 °C"], ["Excursion", "~480 °C"], ["Melting point", "none — it chars"]],
  uses: "Jet engine seals, vacuum bushings, cryogenic bearings, semiconductor fixtures.",
  link: "https://en.wikipedia.org/wiki/Vespel"
},
{
  id: "torlon", cat: "polymer", name: "Torlon",
  sub: "polyamide-imide (PAI)",
  img: "torlon",
  swatch: { pattern: "gloss", colors: ["#5d3113", "#c9802f", "#39200b"] },
  hook: "About the highest compressive strength of any unfilled thermoplastic — and it keeps getting tougher through a post-cure that takes days in an oven.",
  stats: [["Glass transition", "~275 °C"], ["Compressive", "~220+ MPa"], ["Post-cure", "measured in days"]],
  uses: "Valve seats, thrust washers, compressor vanes, downhole tooling.",
  link: "https://en.wikipedia.org/wiki/Polyamide-imide"
},
{
  id: "ffkm", cat: "polymer", name: "FFKM",
  sub: "perfluoroelastomer — Kalrez, Chemraz", img: "ffkm",
  hook: "A rubber with a fully fluorinated backbone. It shrugs off nearly every chemical on the shelf and stays elastic above 300 °C, and is priced per O-ring like jewellery.",
  stats: [["Service", "to ~327 °C"], ["Media resisted", "~1800+"], ["Cost", "$$$ per seal"]],
  uses: "Semiconductor plasma chambers, chemical reactors, aerospace fuel systems.",
  link: "https://en.wikipedia.org/wiki/Perfluoroelastomer"
},
{
  id: "zylon", cat: "polymer", name: "Zylon (PBO)",
  sub: "poly(p-phenylene benzobisoxazole)",
  img: "zylon",
  swatch: { pattern: "fiber", colors: ["#7d5f12", "#e5c85f", "#4c3807"] },
  hook: "Stronger and stiffer than aramid, and the cautionary tale of the field: it quietly loses strength to heat and humidity, which turned into a body-armour recall.",
  stats: [["Tensile", "~5.8 GPa"], ["Modulus", "~270 GPa"], ["Weakness", "hydrolysis + UV"]],
  uses: "F1 cockpit anti-intrusion panels, tethers, formerly ballistic vests.",
  link: "https://en.wikipedia.org/wiki/Zylon"
},
{
  id: "lignostone", cat: "polymer", name: "Densified wood laminate",
  sub: "Lignostone, Permali",
  img: "lignostone",
  swatch: { pattern: "laminate", colors: ["#50351d", "#a3733f", "#2f2012"] },
  hook: "Beech veneer soaked in resin and compressed until it is denser than water. It still beats modern plastics on creep at cryogenic temperature, so it never went away.",
  stats: [["Density", "~1.3 g/cm³"], ["Niche", "cryogenic + HV"], ["Age", "a century old"]],
  uses: "LNG tank supports, transformer spacers and clamping, cryostat structures."
},
{
  id: "ptfe", cat: "polymer", name: "PTFE",
  sub: "polytetrafluoroethylene, Teflon", img: "ptfe",
  hook: "A fluorine sheath wrapped so tightly around the carbon chain that nothing can get a grip on it — the lowest friction of any solid, and almost nothing sticks. The price is creep: load it and it slowly flows.",
  stats: [["Friction coefficient", "~0.04"], ["Service", "−200 to 260 °C"], ["Flaw", "cold flow under load"]],
  uses: "Seals and gaskets, thread tape, chemical lining, low-friction pads, cookware.",
  link: "https://en.wikipedia.org/wiki/Polytetrafluoroethylene"
},
{
  id: "eptfe", cat: "polymer", name: "Expanded PTFE",
  sub: "ePTFE, Gore-Tex", img: "eptfe",
  hook: "PTFE yanked apart fast enough to tear into a web of nodes and fibrils. The holes are far too small for a water droplet and far too large for a water-vapour molecule, so it breathes one way only.",
  stats: [["Pores", "~10⁹ per cm²"], ["Blocks", "liquid water"], ["Passes", "water vapour"]],
  uses: "Waterproof-breathable laminates, vascular grafts, vent plugs, filter media, sealing tape.",
  link: "https://en.wikipedia.org/wiki/Gore-Tex"
},
{
  id: "aramid", cat: "polymer", name: "Aramid (Kevlar)",
  sub: "para-aramid fibre", img: "aramid",
  hook: "Rigid rod-like molecules spun from liquid crystal so they emerge already aligned, then hydrogen-bonded into sheets. Enormous in tension and famously poor in compression — it is a rope material, not a strut material.",
  stats: [["Tensile", "~3.6 GPa"], ["vs. steel by weight", "~5×"], ["In compression", "weak"]],
  uses: "Ballistic vests, cut-resistant gloves, ropes and cables, tyre belts, friction materials.",
  link: "https://en.wikipedia.org/wiki/Aramid"
},
{
  id: "fkm", cat: "polymer", name: "FKM (Viton)",
  sub: "fluoroelastomer", img: "fkm",
  hook: "The workhorse below FFKM: most of the chemical and heat resistance at a fraction of the price. It is the default O-ring anywhere fuel, oil or vacuum is involved.",
  stats: [["Service", "−20 to ~230 °C"], ["Resists", "fuels, oils, vacuum"], ["Avoid", "ketones, amines, steam"]],
  uses: "Fuel system seals, vacuum feedthroughs, engine gaskets, chemical pump seals.",
  link: "https://en.wikipedia.org/wiki/FKM"
},
{
  id: "silicone", cat: "polymer", name: "Silicone rubber",
  sub: "VMQ, polysiloxane", img: "silicone",
  hook: "Its backbone is silicon and oxygen rather than carbon, which is why it stays rubbery at −60 °C and still rubbery at 230 °C. It is also strikingly permeable to gas — a flaw that became the basis of blood oxygenators.",
  stats: [["Service", "−60 to 230 °C"], ["Gas permeability", "very high"], ["Strength", "modest"]],
  uses: "Seals and gaskets, medical tubing and implants, bakeware, keypads, encapsulants.",
  link: "https://en.wikipedia.org/wiki/Silicone_rubber"
},
{
  id: "natrubber", cat: "polymer", name: "Natural rubber",
  sub: "cis-1,4-polyisoprene", img: "natrubber",
  hook: "Still unbeaten after a century of synthetics. Stretch it and the chains crystallise, reinforcing the material exactly where a crack would start — so it resists tearing and fatigue better than anything made in a reactor.",
  stats: [["Elongation", "to ~700%"], ["Fatigue", "best in class"], ["Trick", "strain crystallisation"]],
  uses: "Aircraft and truck tyres, seismic base isolators, engine mounts, gloves.",
  link: "https://en.wikipedia.org/wiki/Natural_rubber"
},
{
  id: "butyl", cat: "polymer", name: "Butyl rubber",
  sub: "IIR, isobutylene-isoprene", img: "butyl",
  hook: "Its chains pack so densely that gas molecules can barely thread through. It is also unusually lossy, so a butyl part damps vibration while it holds pressure.",
  stats: [["Gas permeability", "~10× lower than NR"], ["Damping", "high"], ["Rebound", "low"]],
  uses: "Tyre inner liners and tubes, glovebox gloves, pharmaceutical stoppers, vibration mounts.",
  link: "https://en.wikipedia.org/wiki/Butyl_rubber"
},
{
  id: "pvdf", cat: "polymer", name: "PVDF",
  sub: "polyvinylidene fluoride", img: "pvdf",
  hook: "Stretch and pole it and the fluorine dipoles line up permanently, leaving a plastic film that produces a voltage when you bend it — a piezoelectric you can cut with scissors. The same polymer makes pipe that shrugs off acid.",
  stats: [["Piezoelectric", "yes, when poled"], ["Form", "film down to µm"], ["Also", "ultrapure piping"]],
  uses: "Hydrophones, contact and impact sensors, ultrapure water piping, battery binders.",
  link: "https://en.wikipedia.org/wiki/Polyvinylidene_fluoride"
},
{
  id: "kapton", cat: "polymer", name: "Kapton",
  sub: "polyimide film", img: "kapton",
  hook: "A plastic film that works from near absolute zero to 400 °C and keeps its strength through both. It is the amber film wrapped around most spacecraft, and the substrate under most flexible circuits.",
  stats: [["Range", "−269 to 400 °C"], ["Thickness", "from 7.5 µm"], ["Colour", "unmistakably amber"]],
  uses: "Multi-layer insulation blankets, flexible circuits, 3D-printer bed tape, cryogenic wiring.",
  link: "https://en.wikipedia.org/wiki/Kapton"
},
{
  id: "parylene", cat: "polymer", name: "Parylene",
  sub: "poly(p-xylylene)",
  img: "parylene",
  swatch: { pattern: "gloss", colors: ["#9fb0b8", "#e3edf1", "#5f7079"] },
  hook: "Applied as a gas, not a liquid. The monomer drifts in under vacuum and polymerises on every surface it touches, so it coats the inside of a connector and the back of a chip in the same pinhole-free micron-thick skin, with no solvent and no curing stress.",
  stats: [["Applied as", "a vapour"], ["Thickness", "~0.1–50 µm"], ["Coverage", "truly conformal"]],
  uses: "PCB conformal coating, implant and stent coatings, MEMS, museum conservation.",
  link: "https://en.wikipedia.org/wiki/Parylene"
},
{
  id: "vectran", cat: "polymer", name: "Vectran",
  sub: "melt-spun liquid crystal polymer",
  img: "vectran",
  swatch: { pattern: "fiber", colors: ["#9a7b2e", "#f0d98a", "#604a12"] },
  hook: "Aramid-class strength with something aramid and Dyneema both lack: it does not creep. Hang a load on it for a year and it is where you left it, which is why it holds inflatable structures together.",
  stats: [["Creep", "essentially none"], ["Moisture", "unaffected"], ["Cut resistance", "high"]],
  uses: "Mars lander airbags, inflatable habitats, sailcloth and lines, cut-resistant gloves.",
  link: "https://en.wikipedia.org/wiki/Vectran"
},
{
  id: "delrin", cat: "polymer", name: "Acetal (Delrin)",
  sub: "polyoxymethylene, POM", img: "delrin",
  hook: "Highly crystalline, barely absorbs water and machines like a dream, so a part comes off the lathe at the dimension you asked for and stays there. The quiet default for small moving parts.",
  stats: [["Moisture uptake", "~0.2%"], ["Friction", "low, self-lubricating"], ["Weakness", "acids, chlorine"]],
  uses: "Gears and bushings, snap fits, fuel system parts, guitar picks, fittings.",
  link: "https://en.wikipedia.org/wiki/Polyoxymethylene"
},
{
  id: "pc", cat: "polymer", name: "Polycarbonate",
  sub: "PC", img: "pc",
  hook: "Transparent and almost impossible to shatter — the chains absorb impact by sliding rather than breaking. It scratches if you look at it wrong, which is why most sheets are sold with a hard coat.",
  stats: [["Impact", "~250× glass"], ["Transmission", "~88%"], ["Weakness", "scratches, solvents"]],
  uses: "Riot shields and visors, aircraft canopies, safety glazing, machine guards, lenses.",
  link: "https://en.wikipedia.org/wiki/Polycarbonate"
},
{
  id: "pmma", cat: "polymer", name: "PMMA",
  sub: "acrylic, Plexiglas, Perspex", img: "pmma",
  hook: "Clearer than window glass and far more weather-stable than most plastics. Cast thick it stays optically perfect, which is how an aquarium holds back several metres of water behind a single transparent wall.",
  stats: [["Transmission", "~92%"], ["UV stability", "excellent"], ["Thick sections", "stay clear"]],
  uses: "Aquarium and submersible windows, signage and lighting, dentures, optical fibre.",
  link: "https://en.wikipedia.org/wiki/Poly(methyl_methacrylate)"
},
{
  id: "sap", cat: "polymer", name: "Superabsorbent polymer",
  sub: "sodium polyacrylate", img: "sap",
  hook: "A loosely cross-linked network whose sodium ions pull water in osmotically until the network is physically stretched to its limit. It holds hundreds of times its own weight and does not release it under pressure.",
  stats: [["Absorbs", "~300× its weight"], ["Mechanism", "osmotic swelling"], ["Releases", "reluctantly"]],
  uses: "Nappies and hygiene products, agricultural water retention, fire gels, cable water-blocking.",
  link: "https://en.wikipedia.org/wiki/Sodium_polyacrylate"
},
{
  id: "polyurea", cat: "polymer", name: "Polyurea",
  sub: "sprayed elastomer", img: "polyurea",
  hook: "Two components that react on contact with each other rather than with air or moisture, so it gels within seconds and takes foot traffic in minutes. It can be sprayed overhead, in the cold, onto damp concrete.",
  stats: [["Gel time", "~5 seconds"], ["Humidity", "does not care"], ["Thickness", "millimetres per pass"]],
  uses: "Truck bed liners, tank and tunnel linings, blast mitigation retrofits, bridge decks.",
  link: "https://en.wikipedia.org/wiki/Polyurea"
},
{
  id: "bakelite", cat: "polymer", name: "Bakelite",
  sub: "phenol formaldehyde resin", img: "bakelite",
  hook: "The first fully synthetic plastic, and the first thermoset: once cured it is cross-linked into a single molecule and can never be melted again. That is why 1930s radio cabinets survive and 1990s plastics do not.",
  stats: [["Invented", "1907"], ["Cure", "irreversible"], ["Legacy", "the first thermoset"]],
  uses: "Vintage housings and knobs, electrical insulators, brake pads, laboratory benchtops.",
  link: "https://en.wikipedia.org/wiki/Bakelite"
},
{
  id: "phenolic", cat: "polymer", name: "Phenolic laminate",
  sub: "Tufnol, Textolite, Micarta", img: "phenolic",
  hook: "Sheets of paper, cotton or linen soaked in phenolic resin and pressed into a solid board. Gears cut from it run quieter than steel and tolerate grit, which is why the material outlived its own era.",
  stats: [["Core", "cloth or paper"], ["Gears", "quiet, forgiving"], ["Machines", "like hard wood"]],
  uses: "Quiet gears, electrical standoffs, knife scales, bearing cages, switchgear panels.",
  link: "https://en.wikipedia.org/wiki/Phenol_formaldehyde_resin"
},
{
  id: "neoprene", cat: "polymer", name: "Neoprene",
  sub: "polychloroprene", img: "neoprene",
  hook: "One of the first successful synthetic rubbers and still the all-rounder: it resists oil, ozone and weather at once, which natural rubber does not. Foamed with nitrogen, the trapped bubbles became the wetsuit.",
  stats: [["Introduced", "1931"], ["Resists", "oil, ozone, weather"], ["Foamed", "it insulates"]],
  uses: "Wetsuits, gaskets and bellows, hose covers, laptop sleeves, bridge bearings.",
  link: "https://en.wikipedia.org/wiki/Neoprene"
},
{
  id: "epdm", cat: "polymer", name: "EPDM",
  sub: "ethylene propylene diene rubber", img: "epdm",
  hook: "Its backbone carries no double bonds for ozone to attack, so it simply does not perish outdoors. Thirty years on a roof and it is still flexible — but it swells in oil, so it is kept away from engines.",
  stats: [["Ozone", "unaffected"], ["Service", "−50 to 150 °C"], ["Weakness", "oils and fuels"]],
  uses: "Roofing membrane, car door and window seals, radiator hose, pond liners, cable insulation.",
  link: "https://en.wikipedia.org/wiki/EPDM_rubber"
},
{
  id: "nbr", cat: "polymer", name: "Nitrile rubber",
  sub: "NBR, Buna-N", img: "nbr",
  hook: "Adding acrylonitrile to the chain makes the rubber polar, and polar rubber will not dissolve in non-polar oil. The more you add the better it resists fuel and the worse it tolerates cold — a dial the compounder sets.",
  stats: [["Resists", "fuel, oil, grease"], ["Trade-off", "cold flexibility"], ["Service", "−30 to 120 °C"]],
  uses: "Fuel and hydraulic seals, O-rings, disposable gloves, conveyor belts, hoses.",
  link: "https://en.wikipedia.org/wiki/Nitrile_rubber"
},
{
  id: "br", cat: "polymer", name: "Polybutadiene",
  sub: "BR", img: "br",
  hook: "The bounciest rubber in production. It loses very little energy per cycle, so it is blended into tyre treads for low rolling resistance and moulded solid into the core of a golf ball.",
  stats: [["Rebound", "highest of the rubbers"], ["Glass transition", "~−100 °C"], ["Use", "usually blended"]],
  uses: "Tyre treads and sidewalls, golf ball cores, conveyor belts, impact modifier in plastics.",
  link: "https://en.wikipedia.org/wiki/Polybutadiene"
},
{
  id: "tpu", cat: "polymer", name: "TPU",
  sub: "thermoplastic polyurethane", img: "tpu",
  hook: "Hard and soft segments separate into their own microscopic domains: the hard ones act as physical cross-links that hold it together, and melt on demand. Rubber behaviour from a plastic you can injection mould or print.",
  stats: [["Hardness", "60 Shore A to 70 Shore D"], ["Abrasion", "outstanding"], ["Processing", "melt, mould, reuse"]],
  uses: "Phone cases, shoe soles, cable jackets, 3D printing filament, caster wheels, films.",
  link: "https://en.wikipedia.org/wiki/Thermoplastic_polyurethane"
},
{
  id: "pps", cat: "polymer", name: "PPS",
  sub: "polyphenylene sulfide", img: "pps",
  hook: "Rigid aromatic rings strung on sulfur links, and below 200 °C there is no known solvent for it. It holds dimensions hot and wet, which is why it quietly replaced metal in pumps and under bonnets.",
  stats: [["Continuous use", "~220 °C"], ["Solvents", "none below 200 °C"], ["Flammability", "inherently V-0"]],
  uses: "Pump housings and impellers, under-bonnet parts, connectors, filter fabric for flue gas.",
  link: "https://en.wikipedia.org/wiki/Polyphenylene_sulfide"
},
{
  id: "mylar", cat: "polymer", name: "BoPET (Mylar)",
  sub: "biaxially oriented polyester film", img: "mylar",
  hook: "PET film stretched in both directions at once, aligning the crystals in the plane of the sheet. The result is dimensionally stable, nearly impossible to tear, and takes a vapour-deposited aluminium layer a few atoms thick.",
  stats: [["Thickness", "from 1.5 µm"], ["Strength", "high, in both directions"], ["Metallised", "near-total IR reflection"]],
  uses: "Space blankets and MLI, solar sails, food packaging, capacitor dielectric, balloons.",
  link: "https://en.wikipedia.org/wiki/BoPET"
},
{
  id: "pp", cat: "polymer", name: "Polypropylene",
  sub: "PP", img: "pp",
  hook: "Cheap, light enough to float, and the only common plastic with a genuine living hinge: flex a thin moulded web once and the crystals align across it, after which it will survive millions of cycles.",
  stats: [["Density", "0.90 g/cm³ — it floats"], ["Living hinge", "millions of cycles"], ["Melt point", "~160 °C"]],
  uses: "Flip-top caps and boxes, car bumpers and trim, rope, autoclavable labware, fibre.",
  link: "https://en.wikipedia.org/wiki/Polypropylene"
},
{
  id: "memoryfoam", cat: "polymer", name: "Viscoelastic foam",
  sub: "memory foam", img: "memoryfoam",
  hook: "An open-cell polyurethane whose glass transition sits near body temperature, so your own warmth softens the part you are touching. The recovery is slow because the air has to seep back through the cells.",
  stats: [["Softens at", "~body temperature"], ["Recovery", "seconds, deliberately"], ["Origin", "NASA seat research, 1966"]],
  uses: "Mattresses and pillows, earplugs, prosthetic liners, wheelchair cushions, packaging.",
  link: "https://en.wikipedia.org/wiki/Memory_foam"
},
{
  id: "epoxy", cat: "polymer", name: "Epoxy",
  sub: "thermosetting resin", img: "epoxy",
  hook: "It cures by addition rather than condensation, so nothing is given off and nothing shrinks away — which is why it sticks to almost everything and why it became the matrix holding nearly every composite together.",
  stats: [["Cure shrinkage", "~1–2%"], ["Adhesion", "to almost anything"], ["Service", "to ~180 °C"]],
  uses: "Composite matrix, structural adhesive, potting and encapsulation, coatings, PCB laminate.",
  link: "https://en.wikipedia.org/wiki/Epoxy"
},
{
  id: "eva", cat: "polymer", name: "EVA foam",
  sub: "ethylene-vinyl acetate", img: "eva",
  hook: "Polyethylene with enough vinyl acetate disrupting the crystals to leave it soft and rubbery without plasticiser — so it cannot dry out and go brittle the way plasticised PVC does.",
  stats: [["Plasticiser", "none needed"], ["Density", "typically 30–200 kg/m³"], ["Water", "closed cell, absorbs none"]],
  uses: "Shoe midsoles, mats and padding, solar panel encapsulant, hot-melt adhesive, buoyancy.",
  link: "https://en.wikipedia.org/wiki/Ethylene-vinyl_acetate"
},
{
  id: "abs", cat: "polymer", name: "ABS",
  sub: "acrylonitrile butadiene styrene", img: "abs",
  hook: "Three monomers doing three jobs: styrene for stiffness and gloss, acrylonitrile for chemical resistance, a rubber phase for toughness. It moulds to ±0.01 mm and holds it, which is why a 1958 Lego brick still clutches a new one.",
  stats: [["Tg", "~105 °C"], ["Impact", "rubber-toughened"], ["Mould shrink", "~0.5%"]],
  uses: "Lego, appliance housings, automotive trim, 3D printing filament.",
  link: "https://en.wikipedia.org/wiki/Acrylonitrile_butadiene_styrene"
},
{
  id: "pet", cat: "polymer", name: "PET",
  sub: "polyethylene terephthalate", img: "pet",
  hook: "Blown into a bottle it is stretched in two directions at once, and the chains crystallise as they go. The bottle ends up stronger and far less gas-permeable than the lump of plastic it started as — the shaping is the strengthening.",
  stats: [["Wall", "~0.3 mm"], ["Preform", "~25 g"], ["Trick", "biaxial orientation"]],
  uses: "Drinks bottles, film, polyester fibre, oven-safe trays.",
  link: "https://en.wikipedia.org/wiki/Polyethylene_terephthalate"
},
{
  id: "pvc", cat: "polymer", name: "PVC",
  sub: "polyvinyl chloride", img: "pvc",
  hook: "The same polymer makes drainpipe and inflatable boats. Plasticiser content slides it from rigid to floppy without changing the chemistry, and it is more than half chlorine by weight, so it refuses to keep burning.",
  stats: [["Chlorine", "~57% by mass"], ["Plasticiser", "0–50%"], ["LOI", "~45%"]],
  uses: "Pipe, window frames, cable sheathing, flooring, inflatables.",
  link: "https://en.wikipedia.org/wiki/Polyvinyl_chloride"
},
{
  id: "nylon66", cat: "polymer", name: "Nylon 6/6",
  sub: "polyhexamethylene adipamide", img: "nylon66",
  hook: "The first fully synthetic fibre, and still the default tough engineering plastic. Its flaw is a feature in disguise: it drinks up to 2.5% water, which swells the part and quietly turns it from brittle to tough.",
  stats: [["Melting", "255 °C"], ["Water uptake", "~2.5%"], ["Dry vs wet", "different material"]],
  uses: "Gears, cable ties, rope, bearings, toothbrush bristles.",
  link: "https://en.wikipedia.org/wiki/Nylon_66"
},
{
  id: "hdpe", cat: "polymer", name: "HDPE",
  sub: "high-density polyethylene", img: "hdpe",
  hook: "Almost nothing wets it, almost nothing attacks it, and it costs about a dollar a kilo. The catch is that it creeps: load an HDPE part for a year and it keeps moving, so it is designed by deflection, not by strength.",
  stats: [["Density", "0.94–0.97 g/cm³"], ["Chemical", "near-universal resistance"], ["Weakness", "creep"]],
  uses: "Jerry cans, gas pipe, cutting boards, chemical tanks, milk jugs.",
  link: "https://en.wikipedia.org/wiki/High-density_polyethylene"
},
{
  id: "pex", cat: "polymer", name: "PEX",
  sub: "cross-linked polyethylene", img: "pex",
  hook: "Cross-linking gives polyethylene a memory. Expand a PEX pipe end with a cold tool, push it over a fitting, and the pipe spends the next thirty seconds shrinking back onto it — the joint tightens itself, no glue, no heat.",
  stats: [["Cross-link", "70–89%"], ["Service", "95 °C at 6 bar"], ["Joint", "shrink-fit"]],
  uses: "Domestic hot and cold plumbing, underfloor heating loops.",
  link: "https://en.wikipedia.org/wiki/Cross-linked_polyethylene"
},
{
  id: "eps", cat: "polymer", name: "Expanded polystyrene",
  sub: "steam-expanded PS beads", img: "eps",
  hook: "98% air held in closed cells. It does not spring back, and that is the point: a bicycle helmet works once, crushing in a controlled way to stretch the stop over milliseconds instead of microseconds.",
  stats: [["Density", "15–30 kg/m³"], ["λ", "~0.035 W/m·K"], ["Rebound", "none, by design"]],
  uses: "Helmets, packaging, insulation board, void formers in concrete.",
  link: "https://en.wikipedia.org/wiki/Polystyrene"
},
{
  id: "pdms", cat: "polymer", name: "PDMS",
  sub: "polydimethylsiloxane (Sylgard 184)", img: "pdms",
  hook: "Pour it over a silicon mould, bake it for an hour, peel it off and you have copied features 100 nanometres across in a rubber you can see through. It is also gas-permeable, so cells living inside the channels can breathe.",
  stats: [["Feature copy", "<100 nm"], ["Optical", "clear to 300 nm"], ["O₂", "permeable"]],
  uses: "Microfluidic chips, organ-on-chip, soft lithography, optical encapsulation.",
  link: "https://en.wikipedia.org/wiki/Polydimethylsiloxane"
},
{
  id: "pebax", cat: "polymer", name: "Pebax",
  sub: "polyether block amide", img: "pebax",
  swatch: { pattern: "gloss", colors: ["#d8dde3", "#f3f6f9", "#a9b3bd"] },
  hook: "A block copolymer that hands you stiffness and bounce on the same dial. Foamed, it returns more energy per gram than any other midsole material, which is why every marathon record of the last decade has been run on top of it.",
  stats: [["Density, foamed", "~0.1 g/cm³"], ["Energy return", "~85%"], ["Cold", "flexible to −40 °C"]],
  uses: "Running shoe midsoles, ski boots, catheters, sports film.",
  link: "https://en.wikipedia.org/wiki/Polyether_block_amide"
},
{
  id: "pei", cat: "polymer", name: "PEI (Ultem)",
  sub: "polyetherimide", img: "pei",
  swatch: { pattern: "gloss", colors: ["#b06a1f", "#e0a657", "#6d3d0d"] },
  hook: "An amber transparent plastic that passes aircraft cabin fire tests without any flame retardant added — the imide rings simply char instead of feeding the fire. It also takes repeated steam autoclaving.",
  stats: [["Tg", "217 °C"], ["LOI", "47%"], ["Smoke", "very low"]],
  uses: "Aircraft interior panels, sterilisable medical trays, high-temp 3D printing.",
  link: "https://en.wikipedia.org/wiki/Polyetherimide"
},
{
  id: "fep", cat: "polymer", name: "FEP",
  sub: "fluorinated ethylene propylene", img: "fep",
  hook: "PTFE's non-stick surface in a plastic you can actually melt and extrude. You give up about 60 °C of service temperature and get continuous tubing and heat-sealable film in return.",
  stats: [["Max service", "~200 °C"], ["Melt-processible", "yes, unlike PTFE"], ["Clarity", "transparent"]],
  uses: "Release film, lab tubing, wire insulation, solar module front sheets.",
  link: "https://en.wikipedia.org/wiki/Fluorinated_ethylene_propylene"
},
{
  id: "pvb", cat: "polymer", name: "PVB interlayer",
  sub: "polyvinyl butyral", img: "pvb",
  hook: "The reason a windscreen crazes into a spiderweb instead of a cloud of knives. A 0.76 mm sheet of PVB bonded between two glass plies holds every fragment in place and stretches two and a half times its length doing it.",
  stats: [["Thickness", "0.38 / 0.76 mm"], ["Elongation", ">250%"], ["Invented", "1930s"]],
  uses: "Windscreens, laminated architectural glass, hurricane glazing, photovoltaic lamination.",
  link: "https://en.wikipedia.org/wiki/Polyvinyl_butyral"
},
{
  id: "surlyn", cat: "polymer", name: "Ionomer (Surlyn)",
  sub: "zinc/sodium-neutralised ethylene acrylic acid", img: "surlyn",
  hook: "Metal ions stitch the chains together with bonds that break under a blow and reform afterwards. A golf ball cover shrugs off the edge of a wedge, and a scuffed ski base can be healed with a heat gun.",
  stats: [["Cross-links", "ionic, reversible"], ["Cut resistance", "very high"], ["Clarity", "glass-like"]],
  uses: "Golf ball covers, ski bases, bottle closures, food packaging film.",
  link: "https://en.wikipedia.org/wiki/Ionomer"
},
{
  id: "pla", cat: "polymer", name: "PLA",
  sub: "polylactic acid", img: "pla",
  hook: "Made from fermented sugar rather than oil, and it hydrolyses back to lactic acid. The honest caveat is that it needs an industrial composter at 58 °C — in a garden heap or the sea it behaves like any other plastic.",
  stats: [["Feedstock", "corn, cane sugar"], ["Tg", "~60 °C"], ["Compost", "industrial only"]],
  uses: "3D printing filament, food service ware, resorbable sutures and screws.",
  link: "https://en.wikipedia.org/wiki/Polylactic_acid"
},
{
  id: "cellacetate", cat: "polymer", name: "Cellulose acetate",
  sub: "acetylated cotton linter or wood pulp", img: "cellacetate",
  swatch: { pattern: "speckle", colors: ["#6b4320", "#b9813f", "#3a2310"] },
  hook: "A plastic made from trees, dyed in the block rather than on the surface, so colour runs all the way through and polishes back to a shine after years on a face. It is still the only material good eyewear is made from.",
  stats: [["Base", "plant cellulose"], ["Colour", "through the block"], ["Repolish", "indefinitely"]],
  uses: "Spectacle frames, guitar picks, cigarette filters, photographic film base.",
  link: "https://en.wikipedia.org/wiki/Cellulose_acetate"
},
{
  id: "melaminefoam", cat: "polymer", name: "Melamine foam",
  sub: "melamine–formaldehyde resin foam", img: "melaminefoam",
  hook: "Sold as a cleaning sponge, it is really an abrasive. The open cell walls are hard and brittle, so the foam acts as extremely fine sandpaper that wears itself away instead of scratching — no detergent involved.",
  stats: [["Density", "~9 kg/m³"], ["Mechanism", "micro-abrasion"], ["Also", "acoustic absorber"]],
  uses: "Magic-eraser sponges, studio acoustic foam, high-temperature insulation.",
  link: "https://en.wikipedia.org/wiki/Melamine_foam"
},
{
  id: "cyanoacrylate", cat: "polymer", name: "Cyanoacrylate",
  sub: "ethyl 2-cyanoacrylate", img: "cyanoacrylate",
  hook: "It does not dry — it polymerises, and the trigger is the trace of water on almost any surface. Discovered twice by accident while people were trying to make gunsights, and dismissed both times for sticking to everything.",
  stats: [["Cure trigger", "surface moisture"], ["Set", "seconds"], ["Also", "fingerprint fuming"]],
  uses: "Superglue, surgical skin adhesive, model making, crime-scene fingerprinting.",
  link: "https://en.wikipedia.org/wiki/Cyanoacrylate"
},
{
  id: "pva", cat: "polymer", name: "Polyvinyl alcohol",
  sub: "PVOH", img: "pva",
  hook: "A plastic designed to fail. The film around a detergent pod is strong enough to survive shipping and a dry hand, then dissolves completely in cold water in under a minute.",
  stats: [["Solubility", "cold or hot grades"], ["Oxygen barrier", "excellent, when dry"], ["Residue", "dissolves away"]],
  uses: "Detergent pods, dissolvable 3D-print supports, embroidery backing, release film.",
  link: "https://en.wikipedia.org/wiki/Polyvinyl_alcohol"
},
{
  id: "nafion", cat: "polymer", name: "Nafion",
  sub: "sulfonated tetrafluoroethylene ionomer", img: "nafion",
  hook: "A PTFE backbone with sulfonic acid groups hanging off it. The fluorine keeps it chemically immortal while the acid channels ferry protons through — it lets hydrogen ions cross and blocks everything else, which is what makes a fuel cell a cell.",
  stats: [["Conductivity", "~0.1 S/cm, hydrated"], ["Thickness", "25–180 µm"], ["Needs", "water to work"]],
  uses: "PEM fuel cells, chlor-alkali cells, electrolysers, flow batteries.",
  link: "https://en.wikipedia.org/wiki/Nafion"
},
{
  id: "pbi", cat: "polymer", name: "PBI",
  sub: "polybenzimidazole", img: "pbi",
  hook: "The polymer that will not burn and will not melt. It has no melting point at all — it chars at around 500 °C — so a firefighter's hood made of it stays intact in flashover where aramid alone would shrink away.",
  stats: [["Tg", "427 °C"], ["Melting", "none"], ["LOI", ">41%"]],
  uses: "Firefighter hoods and turnout gear, high-temp seals and bushings, glove liners.",
  link: "https://en.wikipedia.org/wiki/Polybenzimidazole_fiber"
},

/* ---------- METALS & ALLOYS ---------- */
{
  id: "nitinol", cat: "metal", name: "Nitinol",
  sub: "NiTi shape-memory alloy", img: "nitinol",
  hook: "Bend it cold and it stays bent; warm it and it snaps back to the shape it was trained into. Shift the composition slightly and it becomes superelastic at room temperature instead.",
  stats: [["Recoverable strain", "~8%"], ["Transition", "−20 to 110 °C"], ["Mix", "~55% Ni, 45% Ti"]],
  uses: "Self-expanding stents, eyeglass frames, actuators, orthodontic wire.",
  link: "https://en.wikipedia.org/wiki/Nickel_titanium"
},
{
  id: "invar", cat: "metal", name: "Invar 36",
  sub: "Fe–36Ni", img: "invar",
  hook: "A magnetic accident: thermal expansion is almost exactly cancelled by magnetostriction, leaving an alloy that barely changes size over normal temperature swings.",
  stats: [["CTE", "~1.2 ppm/K"], ["Steel", "~12 ppm/K"], ["Found", "1896, Guillaume"]],
  uses: "Metrology frames, telescope structures, LNG membrane tanks, composite moulds.",
  link: "https://en.wikipedia.org/wiki/Invar"
},
{
  id: "kovar", cat: "metal", name: "Kovar",
  sub: "Fe–29Ni–17Co", img: "kovar",
  hook: "Not low expansion — matched expansion. Its curve tracks borosilicate glass closely enough that the two can be fused into a seal that survives thermal cycling.",
  stats: [["CTE", "~5 ppm/K"], ["Matched to", "borosilicate"], ["Seal", "hermetic glass-to-metal"]],
  uses: "Vacuum tube and IC packages, laser windows, hermetic feedthroughs.",
  link: "https://en.wikipedia.org/wiki/Kovar"
},
{
  id: "gummetal", cat: "metal", name: "Gum Metal",
  sub: "Ti–Nb–Ta–Zr–O",
  img: "gummetal",
  swatch: { pattern: "brushed", colors: ["#434a52", "#98a3ad", "#2b3137"] },
  hook: "A titanium alloy that breaks the usual rules: very low stiffness, large elastic strain, and it can be cold-worked enormously without work-hardening the way metals are supposed to.",
  stats: [["Elastic strain", "~2.5%"], ["Modulus", "~55–65 GPa"], ["Cold work", "90%+"]],
  uses: "Watch springs, eyeglass frames, medical devices, research curiosities.",
  link: "https://en.wikipedia.org/wiki/Gum_metal"
},
{
  id: "bmg", cat: "metal", name: "Bulk metallic glass",
  sub: "Vitreloy, Liquidmetal", img: "bmg",
  hook: "Cooled fast enough that the atoms never find their lattice. No grains, no slip planes, no grain boundaries to corrode — and it can be blow-moulded like a thermoplastic.",
  stats: [["Elastic limit", "~2%"], ["Strength", "~1.9 GPa"], ["Structure", "amorphous"]],
  uses: "Phone hinges and SIM tools, watch cases, golf heads, surgical blades.",
  link: "https://en.wikipedia.org/wiki/Amorphous_metal"
},
{
  id: "greyiron", cat: "metal", name: "Grey cast iron",
  sub: "flake-graphite iron", img: "greyiron",
  hook: "The oldest material here and still unbeaten at one job. Graphite flakes interrupt the matrix and turn vibration into heat, which is why precision machine bases are cast rather than fabricated.",
  stats: [["Damping", "~10–20× steel"], ["Tensile", "150–400 MPa"], ["Cost", "cheap"]],
  uses: "Machine tool beds, engine blocks, brake discs, stationary bases.",
  link: "https://en.wikipedia.org/wiki/Gray_iron"
},
{
  id: "becu", cat: "metal", name: "Beryllium copper",
  sub: "C17200", img: "becu",
  hook: "Age-hardens to steel-like strength while staying conductive and completely non-magnetic — and it will not throw a spark, which is why it goes into refineries and minefields.",
  stats: [["UTS", "~1300 MPa"], ["Conductivity", "~22% IACS"], ["Sparks", "none"]],
  uses: "Non-sparking tools, springs and contacts, mould inserts, EOD tooling.",
  link: "https://en.wikipedia.org/wiki/Beryllium_copper"
},
{
  id: "mumetal", cat: "metal", name: "Mu-metal",
  sub: "Ni–Fe–Cu–Cr", img: "mumetal",
  hook: "It does not block magnetic fields; it offers them an easier path and lets them flow around whatever is inside. Bend a finished shield and you ruin it until it is annealed again.",
  stats: [["Rel. permeability", "to ~400,000"], ["Catch", "anneal after forming"], ["Saturates", "early, by design"]],
  uses: "Magnetometer and SQUID shielding, photomultiplier cans, MRI rooms.",
  link: "https://en.wikipedia.org/wiki/Mu-metal"
},
{
  id: "metglas", cat: "metal", name: "Metglas",
  sub: "amorphous Fe–Si–B ribbon",
  img: "metglas",
  swatch: { pattern: "ribbon", colors: ["#394049", "#b5bdc6", "#1f2328"] },
  hook: "Molten alloy squirted onto a spinning chilled wheel and frozen into a glassy ribbon 25 µm thick. With no crystal structure there is almost no hysteresis loss.",
  stats: [["Thickness", "~25 µm"], ["Core loss", "~70–80% below Si steel"], ["Quench", "~10⁶ K/s"]],
  uses: "Distribution transformer cores, current sensors, anti-theft tags.",
  link: "https://en.wikipedia.org/wiki/Amorphous_metal"
},
{
  id: "terfenol", cat: "metal", name: "Terfenol-D",
  sub: "Tb–Dy–Fe",
  img: "terfenol",
  swatch: { pattern: "grain", colors: ["#2d3136", "#848c94", "#171a1d"] },
  hook: "Put it in a magnetic field and it physically grows. The strain is small, but the force is enormous and the response is instant — an actuator with no moving parts.",
  stats: [["Strain", "~1000–2000 ppm"], ["Response", "microseconds"], ["Downside", "brittle, costly"]],
  uses: "Sonar projectors, precision positioning, ultrasonic machining, active damping.",
  link: "https://en.wikipedia.org/wiki/Terfenol-D"
},
{
  id: "stellite", cat: "metal", name: "Stellite",
  sub: "cobalt–chromium–tungsten", img: "stellite",
  hook: "A cobalt alloy that holds its hardness glowing red, resists galling against itself, and is usually deposited as a weld overlay onto something cheaper.",
  stats: [["Hardness", "~40–60 HRC"], ["Hot hardness", "holds to red heat"], ["Form", "usually hardfacing"]],
  uses: "Valve seats, extruder screws, turbine erosion shields, cast dental frameworks.",
  link: "https://en.wikipedia.org/wiki/Stellite"
},
{
  id: "wha", cat: "metal", name: "Tungsten heavy alloy",
  sub: "90–97% W, Ni–Fe binder", img: "wha",
  hook: "Pure tungsten is brittle and effectively unmachinable. Liquid-phase sinter it with a little nickel and iron and you get something far denser than lead that turns on a lathe.",
  stats: [["Density", "17–18.5 g/cm³"], ["Lead", "11.3 g/cm³"], ["Machinable", "yes"]],
  uses: "Balance weights, radiation collimators, damped boring bars, darts.",
  link: "https://en.wikipedia.org/wiki/Tungsten"
},
{
  id: "superalloy", cat: "metal", name: "Single-crystal superalloy",
  sub: "CMSX-4, René N5", img: "superalloy",
  hook: "A turbine blade grown as one continuous crystal, because grain boundaries are where creep starts. It then runs in gas hotter than its own melting point, saved by film cooling and a ceramic coating.",
  stats: [["Grain boundaries", "zero"], ["Gas path", "above its melting point"], ["Casting", "one seed crystal"]],
  uses: "High-pressure turbine blades and vanes in jet and industrial gas turbines.",
  link: "https://en.wikipedia.org/wiki/Superalloy"
},
{
  id: "maraging", cat: "metal", name: "Maraging steel",
  sub: "18Ni(250), 18Ni(300)",
  img: "maraging",
  swatch: { pattern: "brushed", colors: ["#3f464e", "#a7b0b9", "#242930"] },
  hook: "Takes its strength from intermetallic precipitates during a gentle 480 °C age, not from quenching. Almost nothing moves, so you can machine it complete and harden it afterwards.",
  stats: [["UTS", "1700–2400 MPa"], ["Aging", "~480 °C"], ["Distortion", "minimal"]],
  uses: "Rocket motor cases, tooling and dies, fencing blades, centrifuge rotors.",
  link: "https://en.wikipedia.org/wiki/Maraging_steel"
},
{
  id: "galinstan", cat: "metal", name: "Galinstan",
  sub: "Ga–In–Sn eutectic", img: "galinstan",
  hook: "A liquid metal that stays liquid below room temperature without being toxic like mercury. It also wets and attacks aluminium alarmingly well, which limits where you can put it.",
  stats: [["Melting point", "≈ −19 °C"], ["Density", "6.4 g/cm³"], ["Caution", "destroys aluminium"]],
  uses: "Mercury-free thermometers, liquid metal cooling, stretchable circuitry.",
  link: "https://en.wikipedia.org/wiki/Galinstan"
},
{
  id: "fields", cat: "metal", name: "Field's metal",
  sub: "Bi–In–Sn eutectic",
  img: "fields",
  swatch: { pattern: "gloss", colors: ["#656b73", "#d4dae1", "#3f444a"] },
  hook: "A non-toxic alloy that melts in hot water. Handy for casting at kitchen temperatures, and for fusible links that are meant to fail at a known number.",
  stats: [["Melting point", "62 °C"], ["Toxicity", "no lead or cadmium"], ["Mix", "Bi 32.5 / In 51 / Sn 16.5"]],
  uses: "Low-temperature casting, prototyping, fusible safety links, demonstrations.",
  link: "https://en.wikipedia.org/wiki/Field%27s_metal"
},
{
  id: "rhenium", cat: "metal", name: "Rhenium",
  sub: "element 75", img: "rhenium",
  hook: "One of the rarest stable elements and among the highest melting. A few percent in a nickel superalloy measurably slows creep, which is why jet engines consume a large share of world supply.",
  stats: [["Melting point", "3186 °C"], ["Density", "21.0 g/cm³"], ["In blades", "~3–6%"]],
  uses: "Superalloy blades, rocket thrusters, high-temperature thermocouples, catalysts.",
  link: "https://en.wikipedia.org/wiki/Rhenium"
},
{
  id: "albemet", cat: "metal", name: "AlBeMet",
  sub: "62% Be / 38% Al", img: "albemet",
  hook: "Beryllium's absurd stiffness-to-weight, made machinable by blending it with aluminium. Nothing else in billet form comes close — at the cost of toxic dust and a licensed shop.",
  stats: [["Modulus", "~193 GPa"], ["Density", "2.07 g/cm³"], ["Specific stiffness", "~3× aluminium"]],
  uses: "Optical benches, inertial guidance platforms, satellite structures.",
  link: "https://en.wikipedia.org/wiki/Beryllium"
},
{
  id: "ti64", cat: "metal", name: "Ti-6Al-4V",
  sub: "titanium grade 5", img: "ti64",
  hook: "Half the density of steel at similar strength, and the oxide film reforms instantly wherever it is scratched — including inside a body, which is why bone grows straight onto it. It also hates being machined, galling and work-hardening against the tool.",
  stats: [["Tensile", "~950 MPa"], ["Density", "4.43 g/cm³"], ["Share", "~half of all Ti used"]],
  uses: "Airframe and engine parts, implants, fasteners, bike frames.",
  link: "https://en.wikipedia.org/wiki/Ti-6Al-4V"
},
{
  id: "al7075", cat: "metal", name: "7075 aluminium",
  sub: "Al–Zn–Mg–Cu, T6 temper", img: "al7075",
  swatch: { pattern: "brushed", colors: ["#9aa3ab", "#d4dade", "#6b747c"] },
  hook: "An aluminium as strong as mild steel, invented in secret in Japan in the 1930s and flown on the Zero. The strength comes from zinc precipitates grown by baking, and it is bought at the price of weldability and corrosion resistance.",
  stats: [["Tensile, T6", "~570 MPa"], ["Density", "2.81 g/cm³"], ["Welding", "essentially not"]],
  uses: "Aircraft spars, rifle receivers, climbing hardware, mould plate.",
  link: "https://en.wikipedia.org/wiki/7075_aluminium_alloy"
},
{
  id: "magnesium", cat: "metal", name: "Magnesium alloy",
  sub: "AZ91 / AZ31", img: "magnesium",
  hook: "The lightest structural metal in use — two thirds the density of aluminium — and the best damper of the lot, which is why camera bodies and steering wheel cores are cast from it. Fine chips really do burn, cast parts really do not.",
  stats: [["Density", "1.74 g/cm³"], ["Damping", "best of structural metals"], ["Casting", "thin walls, fast cycles"]],
  uses: "Laptop and camera bodies, gearbox housings, steering-wheel armatures, drone frames.",
  link: "https://en.wikipedia.org/wiki/Magnesium_alloy"
},
{
  id: "damascus", cat: "metal", name: "Pattern-welded steel",
  sub: "folded laminate, 'Damascus'", img: "damascus",
  hook: "Two steels with different alloy content folded together a few hundred times, then etched so one layer darkens and the other stays bright. Modern versions are decorative; the original wootz used carbide bands that genuinely sharpened the edge.",
  stats: [["Layers", "100s–1000s"], ["Pattern", "revealed by acid etch"], ["Original", "wootz, ~300 BC"]],
  uses: "Knives, jewellery, watch cases, gun barrels historically.",
  link: "https://en.wikipedia.org/wiki/Pattern_welding"
},
{
  id: "hadfield", cat: "metal", name: "Hadfield manganese steel",
  sub: "~12% Mn austenitic steel", img: "hadfield",
  hook: "Arrives soft enough to cut, then transforms under impact: the surface work-hardens to three times its original hardness while the core stays tough. The harder you hit it, the better it gets, which is why it is still used where rails cross.",
  stats: [["Manganese", "11–14%"], ["As-cast", "~200 HB"], ["Worked surface", "~550 HB"]],
  uses: "Railway crossings, rock crusher jaws, excavator teeth, prison bars.",
  link: "https://en.wikipedia.org/wiki/Mangalloy"
},
{
  id: "duplex", cat: "metal", name: "Duplex stainless 2205",
  sub: "half ferrite, half austenite", img: "duplex",
  hook: "Two crystal structures in one alloy, deliberately balanced fifty-fifty. The mixture is twice as strong as ordinary 316 and far harder to crack in chloride, so you use less of it on an offshore platform.",
  stats: [["Yield", "~450 MPa"], ["Phases", "~50/50 α + γ"], ["PREN", "~35"]],
  uses: "Offshore piping, desalination plant, chemical tankers, bridge rebar.",
  link: "https://en.wikipedia.org/wiki/Duplex_stainless_steel"
},
{
  id: "ss316l", cat: "metal", name: "316L stainless",
  sub: "Fe–18Cr–10Ni–2Mo, low carbon", img: "ss316l",
  swatch: { pattern: "brushed", colors: ["#8d969e", "#cdd4d9", "#5d666e"] },
  hook: "The default when something has to be clean, welded and left alone. The 2% molybdenum is what buys chloride resistance, and the L — carbon under 0.03% — stops chromium carbides forming at the weld and eating the corrosion resistance there.",
  stats: [["Molybdenum", "2–3%"], ["Carbon", "<0.03%"], ["Magnetic", "no, until cold-worked"]],
  uses: "Food and pharma plant, marine fittings, surgical instruments, exhausts.",
  link: "https://en.wikipedia.org/wiki/SAE_316L_stainless_steel"
},
{
  id: "hss", cat: "metal", name: "High-speed steel",
  sub: "M2 / T1 tool steel", img: "hss",
  hook: "The alloy that doubled factory output overnight in 1900: tungsten and molybdenum carbides keep it hard even when the cutting edge glows dull red. Carbide has taken the high end, but HSS still wins wherever the tool has to survive a flex.",
  stats: [["Red hardness", "to ~600 °C"], ["Hardness", "62–67 HRC"], ["Beats carbide at", "toughness"]],
  uses: "Drill bits, taps, milling cutters, hacksaw and bandsaw blades.",
  link: "https://en.wikipedia.org/wiki/High-speed_steel"
},
{
  id: "phosbronze", cat: "metal", name: "Phosphor bronze",
  sub: "Cu–Sn with ~0.2% P", img: "phosbronze",
  hook: "The phosphorus deoxidises the melt and leaves hard tin phosphide particles behind. The result springs back forever without fatiguing and slides against steel without seizing — one alloy for contacts and for bearings.",
  stats: [["Tin", "4–10%"], ["Fatigue", "excellent in spring temper"], ["Friction", "low against steel"]],
  uses: "Electrical contacts and connectors, plain bearings, ship propellers, bass strings.",
  link: "https://en.wikipedia.org/wiki/Phosphor_bronze"
},
{
  id: "monel", cat: "metal", name: "Monel 400",
  sub: "~67% Ni, 30% Cu", img: "monel",
  hook: "Smelted almost straight from an ore that already contained both metals in roughly the right ratio. It is one of very few metals that holds up in hydrofluoric acid and in fast-moving seawater at the same time, and it will not spark.",
  stats: [["Nickel", "63–70%"], ["Seawater", "resists erosion-corrosion"], ["HF acid", "one of the few"]],
  uses: "Marine shafting and pumps, HF service, cryogenic parts, saxophone necks.",
  link: "https://en.wikipedia.org/wiki/Monel"
},
{
  id: "hastelloy", cat: "metal", name: "Hastelloy C-276",
  sub: "Ni–Mo–Cr superalloy", img: "hastelloy",
  hook: "Holds against wet chlorine, hot hydrochloric and sulfuric acid, and oxidising and reducing conditions in the same vessel — a combination almost nothing else survives. It is priced accordingly, so it is used as cladding more than as bulk.",
  stats: [["Molybdenum", "~16%"], ["Resists", "oxidising and reducing"], ["Weld", "no post-weld anneal needed"]],
  uses: "Chemical reactors, flue gas scrubbers, pollution control, nuclear reprocessing.",
  link: "https://en.wikipedia.org/wiki/Hastelloy"
},
{
  id: "zamak", cat: "metal", name: "Zamak",
  sub: "Zn–Al–Mg–Cu die casting alloy", img: "zamak",
  hook: "Melts at 385 °C, so it is injected into a steel die that lasts a million shots instead of ten thousand. That is why a zinc casting carries crisp lettering and threads straight out of the machine. Old impure zinc crumbled; the 'zamak' name marks the purity rule that fixed it.",
  stats: [["Melting", "~385 °C"], ["Die life", "~1,000,000 shots"], ["Detail", "as-cast threads"]],
  uses: "Carburettors, locks and keys, model cars, zips, bathroom fittings.",
  link: "https://en.wikipedia.org/wiki/Zamak"
},
{
  id: "sac305", cat: "metal", name: "SAC305 solder",
  sub: "Sn–3.0Ag–0.5Cu", img: "sac305",
  hook: "The lead-free replacement the whole electronics industry switched to at once. It melts 34 °C hotter than tin-lead, wets worse, looks dull when it is actually fine — and brings back tin whiskers, hair-thin crystals that grow out of the joint and short things years later.",
  stats: [["Melting", "217–220 °C"], ["vs Sn63Pb37", "+34 °C"], ["Known issue", "tin whiskers"]],
  uses: "Essentially all consumer electronics assembly since RoHS in 2006.",
  link: "https://en.wikipedia.org/wiki/Solder"
},
{
  id: "tantalum", cat: "metal", name: "Tantalum",
  sub: "Ta, refractory metal", img: "tantalum",
  hook: "Its oxide film is so stable that the body ignores it entirely and so thin and even that a speck of tantalum powder becomes a capacitor. Nearly immune to acid, and it melts at 3017 °C.",
  stats: [["Melting", "3017 °C"], ["Oxide", "Ta₂O₅, self-healing"], ["Body response", "inert"]],
  uses: "Capacitors in every phone, cranial plates, acid-plant heat exchangers, crucibles.",
  link: "https://en.wikipedia.org/wiki/Tantalum"
},
{
  id: "niobium", cat: "metal", name: "Niobium",
  sub: "Nb, superconducting below 9.2 K", img: "niobium",
  hook: "Cool it with liquid helium and a niobium cavity carries a radio-frequency field with almost no loss, so particle accelerators are built from it. It also anodises into saturated colours with no dye at all — the colour is film interference.",
  stats: [["Tc", "9.2 K"], ["Cavity Q", ">10¹⁰"], ["Anodising", "colour by film thickness"]],
  uses: "Accelerator cavities, MRI magnet wire (as Nb-Ti), HSLA steel, body jewellery.",
  link: "https://en.wikipedia.org/wiki/Niobium"
},
{
  id: "nbti", cat: "metal", name: "Nb-Ti superconductor",
  sub: "niobium–titanium filaments in copper", img: "nbti",
  hook: "Thousands of filaments thinner than a hair, drawn inside a copper matrix and twisted. Below 9 K it carries current with no resistance; the copper is there to take over for a few milliseconds if a patch warms up, so the magnet does not destroy itself.",
  stats: [["Tc", "9.2 K"], ["Field", "to ~10 T"], ["Filaments", "<10 µm each"]],
  uses: "Every MRI scanner, the LHC dipoles, research magnets.",
  link: "https://en.wikipedia.org/wiki/Niobium%E2%80%93titanium"
},
{
  id: "bismuth", cat: "metal", name: "Bismuth",
  sub: "Bi, the benign heavy metal", img: "bismuth",
  hook: "Heavy as lead and essentially non-toxic, so it has quietly replaced lead in shot, solder and plumbing fittings. It expands as it freezes — useful in type metal — and grows hopper crystals in rainbow oxide colours.",
  stats: [["Density", "9.8 g/cm³"], ["On freezing", "expands ~3%"], ["Diamagnetism", "strongest of all metals"]],
  uses: "Lead-free solder and brass, fusible alloys, pigments, Pepto-Bismol.",
  link: "https://en.wikipedia.org/wiki/Bismuth"
},
{
  id: "inconel718", cat: "metal", name: "Inconel 718",
  sub: "Ni–Cr–Nb–Mo age-hardening superalloy", img: "inconel718",
  hook: "A nickel alloy that is actually weldable, because the niobium-bearing strengthening phase forms slowly enough that the weld does not crack while it cools. That one property made it the default for rocket engine parts, and now for metal 3D printing.",
  stats: [["Service", "to ~700 °C"], ["Tensile", "~1375 MPa aged"], ["Weldable", "unusually, yes"]],
  uses: "Rocket turbopumps, turbine casings, downhole tools, additive-manufactured parts.",
  link: "https://en.wikipedia.org/wiki/Inconel"
},
{
  id: "cupronickel", cat: "metal", name: "Cupronickel",
  sub: "Cu–10Ni or Cu–30Ni", img: "cupronickel",
  swatch: { pattern: "brushed", colors: ["#9b9a94", "#d2d1c9", "#6a6963"] },
  hook: "Copper ions leaching slowly from the surface keep barnacles and weed from ever settling, so a cupronickel hull or intake pipe stays clean without paint. It is also why most 'silver' coins are not silver.",
  stats: [["Nickel", "10–30%"], ["Biofouling", "self-resisting"], ["Seawater", "decades of service"]],
  uses: "Ship hull cladding, condenser tubing, seawater piping, coinage.",
  link: "https://en.wikipedia.org/wiki/Cupronickel"
},
{
  id: "ndfeb", cat: "metal", name: "Neodymium magnet",
  sub: "Nd₂Fe₁₄B sintered", img: "ndfeb",
  hook: "The strongest permanent magnet ever made, and the reason headphones, hard drives and electric motors shrank in the 1980s. It rusts if left bare, demagnetises above about 80 °C, and will shatter and take a fingertip if two are allowed to meet.",
  stats: [["Energy product", "to 52 MGOe"], ["Max temp", "80–200 °C by grade"], ["Discovered", "1982"]],
  uses: "EV and wind turbine motors, hard drives, speakers, MRI, magnetic couplings.",
  link: "https://en.wikipedia.org/wiki/Neodymium_magnet"
},
{
  id: "alnico", cat: "metal", name: "Alnico",
  sub: "Al–Ni–Co–Fe cast magnet", img: "alnico",
  hook: "Weaker than neodymium but it barely cares about heat, holding its field to 500 °C where modern magnets give up at 80. Guitar pickups still use it because it saturates gently and softens the top end — a magnetic compressor.",
  stats: [["Curie point", "~800 °C"], ["Working temp", "to 500 °C"], ["Coercivity", "low — easily demagnetised"]],
  uses: "Guitar pickups, sensors and magnetrons, hot-environment holding magnets.",
  link: "https://en.wikipedia.org/wiki/Alnico"
},
{
  id: "babbitt", cat: "metal", name: "Babbitt metal",
  sub: "tin or lead matrix with hard crystals", img: "babbitt",
  swatch: { pattern: "speckle", colors: ["#b8bcc0", "#e8ebee", "#7d8287"] },
  hook: "A deliberately weak bearing lining: hard crystals sit in a soft matrix that wears away around them, leaving channels for oil and letting grit bury itself harmlessly. The bearing is sacrificed instead of the million-dollar shaft.",
  stats: [["Hardness", "~20–30 HB"], ["Structure", "hard phase in soft matrix"], ["Role", "the sacrificial part"]],
  uses: "Steam and gas turbine journal bearings, large engines, machine tool ways.",
  link: "https://en.wikipedia.org/wiki/Babbitt_(alloy)"
},
{
  id: "corten", cat: "metal", name: "Weathering steel",
  sub: "Cor-Ten, Cu–Cr–Ni–P steel", img: "corten",
  hook: "A steel that rusts on purpose and then stops. Copper and phosphorus make the first rust layer dense and sticky instead of flaky, so it seals the surface and corrosion slows to near nothing — no paint, ever. Give it standing water and the trick fails.",
  stats: [["Patina", "stable in 2–6 years"], ["Paint", "none required"], ["Fails if", "constantly wet or salted"]],
  uses: "Bridges, sculpture, building façades, shipping containers, planters.",
  link: "https://en.wikipedia.org/wiki/Weathering_steel"
},
{
  id: "zircaloy", cat: "metal", name: "Zircaloy",
  sub: "zirconium–tin cladding alloy", img: "zircaloy",
  hook: "Chosen for one property: neutrons pass straight through it. That lets a fuel rod be wrapped in metal without poisoning the reaction. Its one bad day is a loss of coolant, when hot zirconium strips oxygen from steam and makes hydrogen.",
  stats: [["Neutron capture", "very low"], ["Service", "~350 °C in water"], ["Steam above 1200 °C", "makes H₂"]],
  uses: "Fuel rod cladding and channel boxes in essentially every water-cooled reactor.",
  link: "https://en.wikipedia.org/wiki/Zircaloy"
},
{
  id: "hafnium", cat: "metal", name: "Hafnium",
  sub: "Hf, zirconium's chemical twin", img: "hafnium",
  hook: "Chemically almost identical to zirconium and found in the same ore, but it swallows neutrons about 600 times more greedily. So the two are painstakingly separated: zirconium wraps the fuel, hafnium makes the control rods that stop it.",
  stats: [["Neutron capture", "~600× zirconium"], ["Melting", "2233 °C"], ["Separation", "the hard part"]],
  uses: "Reactor control rods, plasma cutting electrodes, superalloy additive, high-k gate oxide.",
  link: "https://en.wikipedia.org/wiki/Hafnium"
},
{
  id: "hea", cat: "metal", name: "High-entropy alloy",
  sub: "CrMnFeCoNi (Cantor alloy)", img: "hea",
  hook: "Five metals in roughly equal amounts, with no host element at all — the opposite of how alloys are normally designed. The Cantor alloy's fracture toughness rises as it gets colder, which almost every other metal refuses to do.",
  stats: [["Elements", "5, near-equiatomic"], ["Toughness at 77 K", "~200 MPa·m½"], ["First reported", "2004"]],
  uses: "Cryogenic structures, research into radiation-tolerant and wear-resistant alloys.",
  link: "https://en.wikipedia.org/wiki/High-entropy_alloy"
},
{
  id: "nb3sn", cat: "metal", name: "Nb3Sn superconductor",
  sub: "A15 intermetallic, reacted after winding", img: "nb3sn",
  hook: "Niobium and tin in the A15 structure stay superconducting in fields that flatten niobium-titanium — useful past 20 tesla, where Nb-Ti gives up around 10. The catch is that the compound is a ceramic in all but name: bend a finished strand and the filaments crack. So magnets are wound from ductile niobium-and-bronze precursor and then baked at about 650 °C for days, forming the superconductor in place inside the finished coil, after which the whole thing has to be handled as if it were glass.",
  stats: [["Critical temperature", "about 18 K"], ["Useful past", "20 T, where Nb-Ti stops"], ["Formed", "after winding, near 650 °C"]],
  uses: "ITER and fusion magnets, high-luminosity LHC quadrupoles, high-field NMR and research magnets.",
  link: "https://en.wikipedia.org/wiki/Niobium%E2%80%93tin"
},
{
  id: "wroughtiron", cat: "metal", name: "Wrought iron",
  sub: "iron with its slag rolled into fibres", img: "wroughtiron",
  hook: "Neither steel nor cast iron: almost pure iron with one or two percent of its smelting slag left inside and rolled out into long fibres, so the metal has a grain and tears along it like timber. The grain is why it forge-welds so willingly and why old chain and railing bends instead of snapping, and the low carbon with a trace of phosphorus is why some of it corrodes so slowly — the Delhi pillar has stood in the open for sixteen centuries. Nobody has made it at scale since the 1970s, so restoration work runs on reclaimed stock.",
  stats: [["Carbon", "under 0.1 percent"], ["Slag", "1–2 percent, drawn into fibres"], ["Supply", "reclaimed — no longer made at scale"]],
  uses: "Historic chain, gates and railings; blacksmithing; conservation and restoration work.",
  link: "https://en.wikipedia.org/wiki/Wrought_iron"
},

/* ---------- CERAMICS & GLASS ---------- */
{
  id: "ytzp", cat: "ceramic", name: "Zirconia (Y-TZP)",
  sub: "yttria-stabilised ZrO₂", img: "ytzp",
  hook: "A ceramic that fights back against cracks: the stress field at a crack tip triggers a phase change that expands and clamps the crack shut. The 1975 paper announcing it was titled “Ceramic steel?”",
  stats: [["Flexural strength", "900–1200 MPa"], ["Toughness", "5–10 MPa·m½"], ["Mechanism", "transformation toughening"]],
  uses: "Bearing balls, knives and scissors, dental crowns, oxygen sensors.",
  link: "https://en.wikipedia.org/wiki/Yttria-stabilized_zirconia"
},
{
  id: "cbn", cat: "ceramic", name: "Cubic boron nitride",
  sub: "cBN, borazon", img: "cbn",
  hook: "Second only to diamond in hardness, and better than diamond for the job that matters most: carbon dissolves into hot steel, boron nitride does not. So cBN is what cuts hardened steel.",
  stats: [["Hardness", "~45 GPa"], ["Stable in steel to", "~1300 °C"], ["Diamond in steel", "chemically fails"]],
  uses: "Hard-turning inserts, grinding wheels, finishing hardened gears and bearings.",
  link: "https://en.wikipedia.org/wiki/Boron_nitride"
},
{
  id: "b4c", cat: "ceramic", name: "Boron carbide",
  sub: "B₄C", img: "b4c",
  hook: "The third-hardest material known and remarkably light with it. Boron-10 also swallows thermal neutrons, so the same powder turns up in rifle plates and in reactor control rods.",
  stats: [["Hardness", "~30 GPa"], ["Density", "2.52 g/cm³"], ["Bonus", "neutron absorber"]],
  uses: "Armour plate, blast nozzles, control rods, lapping abrasive.",
  link: "https://en.wikipedia.org/wiki/Boron_carbide"
},
{
  id: "sic", cat: "ceramic", name: "Silicon carbide",
  sub: "SiC", img: "sic",
  hook: "Hard, stiff, chemically inert and a good conductor of heat — a rare combination. It polishes to an optical mirror, survives a brake disc's life, and now switches power in electric cars.",
  stats: [["Conductivity", "120–270 W/m·K"], ["Hardness", "~25 GPa"], ["Sublimes", "~2700 °C"]],
  uses: "Telescope mirrors, carbon-ceramic brakes, mechanical seals, power semiconductors.",
  link: "https://en.wikipedia.org/wiki/Silicon_carbide"
},
{
  id: "zerodur", cat: "ceramic", name: "Zerodur",
  sub: "lithium-aluminosilicate glass-ceramic", img: "zerodur",
  hook: "A glass seeded with crystals that shrink as the surrounding glass expands. The two cancel, leaving a material whose size barely notices temperature — the only way a four-metre mirror holds its figure.",
  stats: [["CTE", "≈ 0 ± 0.02 ppm/K"], ["Polish", "sub-nanometre"], ["Blanks", "4 m+"]],
  uses: "Telescope mirror blanks, lithography stages, gyroscope and metrology bodies.",
  link: "https://en.wikipedia.org/wiki/Zerodur"
},
{
  id: "macor", cat: "ceramic", name: "Macor",
  sub: "machinable glass-ceramic",
  img: "macor",
  swatch: { pattern: "speckle", colors: ["#ded9d0", "#faf8f4", "#bdb6a9"] },
  hook: "Mica crystals in a glass matrix: the crystals deflect and arrest the cutting edge, so you can drill and tap it on an ordinary mill — then run the finished part at 800 °C.",
  stats: [["Continuous use", "800 °C"], ["Porosity", "zero"], ["Tooling", "standard metalworking"]],
  uses: "Vacuum feedthroughs, laser and plasma fixtures, precision insulators.",
  link: "https://en.wikipedia.org/wiki/Macor"
},
{
  id: "aln", cat: "ceramic", name: "Aluminium nitride",
  sub: "AlN, Shapal", img: "aln",
  hook: "An electrical insulator that moves heat almost like a metal. The machinable grade lets you mill a part that isolates volts while draining watts.",
  stats: [["Conductivity", "90–180 W/m·K"], ["Electrically", "insulating"], ["Shapal", "machinable grade"]],
  uses: "Power electronics substrates, heater chucks, RF packages, heat spreaders.",
  link: "https://en.wikipedia.org/wiki/Aluminium_nitride"
},
{
  id: "cordierite", cat: "ceramic", name: "Cordierite",
  sub: "2MgO·2Al₂O₃·5SiO₂",
  img: "cordierite",
  swatch: { pattern: "honeycomb", colors: ["#b2a085", "#e6dcc8", "#857760"] },
  hook: "Barely expands when heated, so it can go from cold to glowing without cracking. Extruded into a honeycomb, it is the substrate inside essentially every catalytic converter ever fitted.",
  stats: [["CTE", "~1–2 ppm/K"], ["Thermal shock", "excellent"], ["Form", "extruded honeycomb"]],
  uses: "Catalytic converter and diesel filter substrates, kiln furniture, heat shields.",
  link: "https://en.wikipedia.org/wiki/Cordierite"
},
{
  id: "alon", cat: "ceramic", name: "AlON & transparent spinel",
  sub: "“transparent aluminium”", img: "alon",
  hook: "A polycrystalline ceramic with no grain-boundary phase to scatter light, so it comes out transparent — and far harder than glass. It really is the science-fiction name, and it really stops bullets.",
  stats: [["Hardness", "~80% of sapphire"], ["Transmits", "~0.2–5 µm"], ["vs. laminated glass", "thinner, lighter"]],
  uses: "Transparent armour, IR missile domes, scratch-proof windows, scanner platens.",
  link: "https://en.wikipedia.org/wiki/Aluminium_oxynitride"
},
{
  id: "pyro", cat: "ceramic", name: "Pyrolytic graphite",
  sub: "oriented CVD carbon", img: "pyro",
  hook: "Grown layer by layer out of hot gas, so its properties differ wildly along and across the sheet. It is also the most diamagnetic solid at room temperature: it floats over magnets with no cooling at all.",
  stats: [["In-plane", "~1700 W/m·K"], ["Through-plane", "~100× lower"], ["Levitates", "at room temperature"]],
  uses: "Heat spreaders, crucibles, X-ray optics, neutron monochromators, desk toys.",
  link: "https://en.wikipedia.org/wiki/Pyrolytic_carbon"
},
{
  id: "alumina", cat: "ceramic", name: "Alumina",
  sub: "Al₂O₃, 96–99.8%", img: "alumina",
  hook: "The workhorse of technical ceramics and the one you have definitely touched. Hard, stiff, inert, a superb insulator even when red hot, and cheap enough to throw at problems the exotic ceramics would solve more elegantly.",
  stats: [["Hardness", "~15 GPa"], ["Max use", "~1700 °C"], ["Cost", "the cheap option"]],
  uses: "Spark plug insulators, circuit substrates, wear liners, pump seals, armour plate.",
  link: "https://en.wikipedia.org/wiki/Aluminium_oxide"
},
{
  id: "sapphire", cat: "ceramic", name: "Sapphire",
  sub: "single-crystal Al₂O₃", img: "sapphire",
  hook: "The same chemistry as alumina, grown as one enormous crystal instead of sintered powder — and the difference is total. It is transparent from UV to mid-infrared and second only to diamond among common hard materials.",
  stats: [["Hardness", "9 Mohs"], ["Transmits", "0.15–5.5 µm"], ["Grown as", "boules up to ~200 kg"]],
  uses: "Watch crystals, scanner windows, LED substrates, high-pressure cell windows, endoscopes.",
  link: "https://en.wikipedia.org/wiki/Sapphire"
},
{
  id: "fusedsilica", cat: "ceramic", name: "Fused silica",
  sub: "amorphous SiO₂", img: "fusedsilica",
  hook: "Glass with everything else taken out. Pure silica barely expands, transmits deep into the ultraviolet, and loses so little light that a signal survives tens of kilometres of it — which is the entire basis of the internet.",
  stats: [["CTE", "~0.55 ppm/K"], ["Optical loss", "~0.2 dB/km"], ["Purity", "parts per billion"]],
  uses: "Optical fibre, UV optics, semiconductor process ware, gyroscope rotors, mirror substrates.",
  link: "https://en.wikipedia.org/wiki/Fused_quartz"
},
{
  id: "gorilla", cat: "ceramic", name: "Chemically strengthened glass",
  sub: "Gorilla Glass and relatives", img: "gorilla",
  hook: "Soak the glass in molten potassium salt and the big potassium ions swap into sodium's places near the surface, wedging it into permanent compression. A crack cannot open in a layer that is being squeezed shut.",
  stats: [["Compression depth", "~30–100 µm"], ["Surface stress", "up to ~1 GPa"], ["Method", "ion exchange"]],
  uses: "Phone and watch cover glass, laptop screens, vehicle glazing, appliance fronts.",
  link: "https://en.wikipedia.org/wiki/Gorilla_Glass"
},
{
  id: "borosilicate", cat: "ceramic", name: "Borosilicate glass",
  sub: "Pyrex, Duran", img: "borosilicate",
  hook: "Boron oxide loosens the silica network just enough to cut its expansion by two thirds, so the glass can go from a flame into water without splitting. The 200-inch Hale telescope mirror is a single borosilicate casting.",
  stats: [["CTE", "~3.3 ppm/K"], ["Soda-lime", "~9 ppm/K"], ["Thermal shock", "~160 K"]],
  uses: "Laboratory glassware, cookware, lighting, telescope mirror blanks, sight glasses.",
  link: "https://en.wikipedia.org/wiki/Borosilicate_glass"
},
{
  id: "si3n4", cat: "ceramic", name: "Silicon nitride",
  sub: "Si₃N₄", img: "si3n4",
  hook: "Interlocking needle-shaped grains make it the toughest of the structural ceramics, and it barely expands with heat. A ball of it is 60% the weight of steel, needs no lubricant, and will not weld itself to a steel race.",
  stats: [["Density", "3.2 g/cm³"], ["Thermal shock", "excellent"], ["Bearings", "run dry, faster"]],
  uses: "Hybrid and ceramic bearings, turbocharger rotors, glow plugs, cutting tools, weld nozzles.",
  link: "https://en.wikipedia.org/wiki/Silicon_nitride"
},
{
  id: "hbn", cat: "ceramic", name: "Hexagonal boron nitride",
  sub: "hBN, “white graphite”", img: "hbn",
  hook: "Identical chemistry to the second-hardest material known, stacked differently — and the result is soft, slippery and white. It machines with ordinary tools, lubricates at 900 °C, insulates electrically and conducts heat well.",
  stats: [["Hardness", "soft — it is a lubricant"], ["Electrically", "insulating"], ["Lubricates to", "~900 °C"]],
  uses: "Crucibles and setters, mould release, high-temperature lubricant, plasma chamber parts.",
  link: "https://en.wikipedia.org/wiki/Boron_nitride"
},
{
  id: "pzt", cat: "ceramic", name: "PZT",
  sub: "lead zirconate titanate", img: "pzt",
  hook: "Squeeze it and it produces a voltage; apply a voltage and it changes length by nanometres, reliably, forever. Almost every ultrasound image, fuel injector and parking sensor runs through a piece of this.",
  stats: [["Strain", "~0.1%, sub-nm resolution"], ["Response", "microseconds"], ["Force", "very high"]],
  uses: "Ultrasound transducers, fuel injectors, nanopositioners, sonar, buzzers, igniters.",
  link: "https://en.wikipedia.org/wiki/Lead_zirconate_titanate"
},
{
  id: "batio3", cat: "ceramic", name: "Barium titanate",
  sub: "BaTiO₃", img: "batio3",
  hook: "A perovskite whose unit cell is slightly lopsided, giving it a dielectric constant in the thousands where most insulators manage single digits. Stacked in hundreds of sub-micron layers, it is the most manufactured electronic component on earth.",
  stats: [["Dielectric constant", "~1000–7000"], ["Layer thickness", "<1 µm"], ["Made", "trillions per year"]],
  uses: "Multilayer ceramic capacitors, PTC thermistors, transducers, non-volatile memory.",
  link: "https://en.wikipedia.org/wiki/Barium_titanate"
},
{
  id: "wc", cat: "ceramic", name: "Cemented carbide",
  sub: "WC–Co hardmetal", img: "wc",
  hook: "Tungsten carbide grains glued together by cobalt metal — a ceramic with a metal binder, so it is nearly as hard as a ceramic but will not shatter like one. It is also twice as stiff as steel.",
  stats: [["Hardness", "~1600 HV"], ["Stiffness", "~2× steel"], ["Binder", "6–15% cobalt"]],
  uses: "Cutting inserts and drills, drawing dies, rock bits, wear parts, anti-vibration bars.",
  link: "https://en.wikipedia.org/wiki/Tungsten_carbide"
},
{
  id: "uhtc", cat: "ceramic", name: "Ultra-high-temperature ceramics",
  sub: "ZrB₂, HfB₂, HfC", img: "uhtc",
  hook: "The borides and carbides of hafnium and zirconium melt somewhere near 3900 °C — close to the highest melting points known. They are what you use when a leading edge must be sharp rather than blunt and rounded.",
  stats: [["Melting", "~3200–3900 °C"], ["HfC", "~3950 °C"], ["Enables", "sharp hypersonic edges"]],
  uses: "Hypersonic leading edges, rocket nozzle inserts, plasma electrodes, reactor components.",
  link: "https://en.wikipedia.org/wiki/Ultra-high-temperature_ceramics"
},
{
  id: "li900", cat: "ceramic", name: "LI-900 silica tile",
  sub: "Shuttle thermal protection", img: "li900",
  hook: "Silica fibres sintered at their contact points into a block that is 94% air. Heat has almost no path through it, which is why the famous photograph shows a technician holding a tile by its edges while the middle is still glowing.",
  stats: [["Density", "144 kg/m³"], ["Air", "~94%"], ["Surface", "~1260 °C in use"]],
  uses: "Orbiter thermal protection, furnace insulation, high-temperature standoffs.",
  link: "https://en.wikipedia.org/wiki/Space_Shuttle_thermal_protection_system"
},
{
  id: "tbc", cat: "ceramic", name: "Thermal barrier coating",
  sub: "plasma-sprayed YSZ", img: "tbc",
  hook: "A deliberately porous, deliberately cracked zirconia layer a fraction of a millimetre thick, sprayed onto a turbine blade. The gaps let it expand without spalling, and it drops the metal temperature underneath by over 100 °C.",
  stats: [["Thickness", "~0.1–0.5 mm"], ["Metal temperature", "−100 to −150 °C"], ["Structure", "porous by design"]],
  uses: "Turbine blades and vanes, combustors, exhaust components, diesel piston crowns.",
  link: "https://en.wikipedia.org/wiki/Thermal_barrier_coating"
},
{
  id: "cvddiamond", cat: "ceramic", name: "CVD diamond",
  sub: "grown from methane plasma", img: "cvddiamond",
  hook: "Diamond grown atom by atom out of a glowing gas, in sheets rather than gemstones. It conducts heat better than any other material known — roughly five times copper — while being an electrical insulator and transparent.",
  stats: [["Thermal conductivity", "~2000 W/m·K"], ["Copper", "~400 W/m·K"], ["Electrically", "insulating"]],
  uses: "Laser and X-ray windows, heat spreaders for power devices, anvils, surgical blades.",
  link: "https://en.wikipedia.org/wiki/Synthetic_diamond"
},
{
  id: "quartzxtal", cat: "ceramic", name: "Quartz crystal",
  sub: "piezoelectric SiO₂", img: "quartzxtal",
  hook: "Cut at exactly the right angle to the crystal axes, a sliver of quartz rings at a frequency that barely drifts with temperature. Etched into a tuning fork at 32,768 Hz — 2¹⁵ — it divides neatly down to one tick per second.",
  stats: [["Watch fork", "32,768 Hz"], ["Stability", "~±20 ppm"], ["Drift", "seconds per month"]],
  uses: "Every quartz watch and clock, oscillators in nearly all digital electronics, mass sensors.",
  link: "https://en.wikipedia.org/wiki/Crystal_oscillator"
},
{
  id: "yag", cat: "ceramic", name: "Nd:YAG",
  sub: "neodymium-doped yttrium aluminium garnet", img: "yag",
  hook: "A synthetic garnet grown as a flawless crystal and seeded with neodymium atoms that store energy and release it in step. It is the host that made the industrial solid-state laser practical.",
  stats: [["Wavelength", "1064 nm"], ["Form", "grown rod or disc"], ["Host for", "Nd, Yb, Er, Ce"]],
  uses: "Industrial cutting and welding lasers, rangefinders, surgery, LED phosphor (Ce:YAG).",
  link: "https://en.wikipedia.org/wiki/Yttrium_aluminium_garnet"
},
{
  id: "sodalime", cat: "ceramic", name: "Soda-lime glass",
  sub: "SiO₂–Na₂O–CaO", img: "sodalime",
  hook: "90% of all glass made. Soda drops silica's melting point by 700 °C so it can be worked at all; lime is then added to stop the result dissolving in water, which is exactly what soda alone produces — water glass.",
  stats: [["Melt", "~1500 °C"], ["Expansion", "9 × 10⁻⁶ /K"], ["Share of all glass", "~90%"]],
  uses: "Windows, bottles, jars, light bulbs, everyday tableware.",
  link: "https://en.wikipedia.org/wiki/Soda%E2%80%93lime_glass"
},
{
  id: "leadcrystal", cat: "ceramic", name: "Lead crystal",
  sub: "potash–lead silicate glass", img: "leadcrystal",
  hook: "Lead oxide raises the refractive index and spreads the colours further apart, so a cut facet throws rainbows. It also softens the glass enough to cut deeply, and it rings — the low internal damping gives a long, pure note.",
  stats: [["PbO", "24–33%"], ["Refractive index", "1.55–1.6"], ["Ring", "seconds, not a thud"]],
  uses: "Cut glassware and chandeliers; historically radiation shielding windows and CRT faces.",
  link: "https://en.wikipedia.org/wiki/Lead_glass"
},
{
  id: "ceran", cat: "ceramic", name: "Glass-ceramic cooktop",
  sub: "lithium aluminosilicate, Ceran", img: "ceran",
  hook: "Glass that is heat-treated until tiny crystals grow inside it, and those crystals shrink as the glass expands. The two cancel out: you can run a red-hot ring in one spot while the plate an inch away stays cool, with no crack.",
  stats: [["Expansion", "≈0 × 10⁻⁶ /K"], ["Spot heating", "no thermal shock"], ["Crystals", "grown in place"]],
  uses: "Hob panels, wood stove windows, telescope mirror blanks, cookware.",
  link: "https://en.wikipedia.org/wiki/Glass-ceramic"
},
{
  id: "chalcogenide", cat: "ceramic", name: "Chalcogenide glass",
  sub: "Ge–As–Se / As₂S₃", img: "chalcogenide",
  swatch: { pattern: "gloss", colors: ["#23262a", "#5b6066", "#0b0c0e"] },
  hook: "Looks like a black mirror and is completely opaque to the eye, yet thermal infrared passes straight through it. It can be moulded like plastic, which is why thermal cameras got cheap enough to clip onto a phone.",
  stats: [["Transmits", "8–12 µm"], ["Visible", "opaque"], ["Forming", "precision moulded"]],
  uses: "Thermal imaging lenses, IR fibre, rewritable optical disc layers, phase-change memory.",
  link: "https://en.wikipedia.org/wiki/Chalcogenide_glass"
},
{
  id: "zblan", cat: "ceramic", name: "ZBLAN fluoride glass",
  sub: "ZrF₄–BaF₂–LaF₃–AlF₃–NaF", img: "zblan",
  swatch: { pattern: "gloss", colors: ["#cfe3e8", "#f2fafc", "#9ab6bf"] },
  hook: "In theory it could carry light a hundred times further than silica fibre. In practice gravity lets crystals nucleate and settle while it cools, ruining it — so it is now being drawn in orbit, where there is nothing to settle.",
  stats: [["Theoretical loss", "~0.001 dB/km"], ["Problem", "crystallises on cooling"], ["Drawn on", "the ISS, since 2017"]],
  uses: "Mid-IR fibre lasers, fibre amplifiers, proposed ultra-long-haul links.",
  link: "https://en.wikipedia.org/wiki/ZBLAN"
},
{
  id: "porcelain", cat: "ceramic", name: "Electrical porcelain",
  sub: "kaolin–feldspar–quartz, vitrified", img: "porcelain",
  hook: "Fired until the glassy phase closes every pore, so rain cannot get in and nothing tracks across the surface. A grid insulator has held tens of thousands of volts outdoors for a century with no maintenance at all.",
  stats: [["Dielectric strength", "~20 kV/mm"], ["Porosity", "zero"], ["Fired at", "1200–1400 °C"]],
  uses: "Power line and substation insulators, fuse bodies, spark plug cores, lab ware.",
  link: "https://en.wikipedia.org/wiki/Porcelain"
},
{
  id: "steatite", cat: "ceramic", name: "Steatite",
  sub: "fired talc–clay (soapstone)", img: "steatite",
  hook: "Soft enough to carve with a knife before firing, then fires into a hard insulator with low dielectric loss. That window — machine it green, fire it hard — made it the standard body for electrical parts before plastics.",
  stats: [["Green state", "machinable"], ["Loss tangent", "very low"], ["Max use", "~1000 °C"]],
  uses: "Heater element formers, terminal blocks, RF insulators, aquarium heaters.",
  link: "https://en.wikipedia.org/wiki/Steatite"
},
{
  id: "mullite", cat: "ceramic", name: "Mullite",
  sub: "3Al₂O₃·2SiO₂", img: "mullite",
  hook: "Almost nonexistent in nature — it was named after a Scottish island where lava met clay — yet it is the phase that forms in nearly every fired clay body and gives it strength. It barely creeps at 1500 °C.",
  stats: [["Stable to", "~1800 °C"], ["Creep", "very low"], ["Expansion", "5 × 10⁻⁶ /K"]],
  uses: "Kiln furniture, furnace linings, foundry crucibles, IR-transparent windows.",
  link: "https://en.wikipedia.org/wiki/Mullite"
},
{
  id: "tib2", cat: "ceramic", name: "Titanium diboride",
  sub: "TiB₂", img: "tib2",
  swatch: { pattern: "gloss", colors: ["#5a5f63", "#9aa0a5", "#32363a"] },
  hook: "A ceramic that conducts electricity better than titanium metal while being nearly as hard as boron carbide. That combination lets it be cut by EDM — you can spark-erode shapes into a ceramic, which is normally impossible.",
  stats: [["Hardness", "~25 GPa"], ["Resistivity", "~15 µΩ·cm"], ["Melting", "3230 °C"]],
  uses: "Aluminium smelter cathodes, crucibles for molten metal, armour, cutting tools.",
  link: "https://en.wikipedia.org/wiki/Titanium_diboride"
},
{
  id: "isographite", cat: "ceramic", name: "Isostatic graphite",
  sub: "isotropically pressed fine-grain carbon", img: "isographite",
  swatch: { pattern: "grain", colors: ["#3a3d40", "#6e7276", "#202224"] },
  hook: "Unlike every other structural material, it gets stronger as it gets hotter, peaking around 2500 °C. It also machines like chalk and conducts electricity, so it is the electrode that burns a shape into hardened steel.",
  stats: [["Strength peak", "~2500 °C"], ["Grain", "<10 µm"], ["Machining", "like dense chalk"]],
  uses: "EDM electrodes, continuous casting dies, crucibles, rocket nozzle throats.",
  link: "https://en.wikipedia.org/wiki/Graphite"
},
{
  id: "glassycarbon", cat: "ceramic", name: "Glassy carbon",
  sub: "vitreous carbon", img: "glassycarbon",
  hook: "Carbon that has been baked until it is neither graphite nor diamond but a tangle of ribbons with no connected porosity at all. Gas cannot get through it, acid cannot touch it, and it keeps a mirror polish.",
  stats: [["Permeability", "gas-tight"], ["Use temp", "to 3000 °C, inert"], ["Density", "1.5 g/cm³"]],
  uses: "Electrochemistry electrodes, crucibles for ultra-pure melts, AFM calibration standards.",
  link: "https://en.wikipedia.org/wiki/Glassy_carbon"
},
{
  id: "emax", cat: "ceramic", name: "Lithium disilicate",
  sub: "Li₂Si₂O₅ dental glass-ceramic", img: "emax",
  hook: "Milled as a soft blue-violet blank in twenty minutes, then fired — and during the firing the crystals grow, the colour turns to tooth, and the strength triples. The machining happens while it is still weak on purpose.",
  stats: [["Milled strength", "~130 MPa"], ["Fired strength", "~400 MPa"], ["Chairside", "under an hour"]],
  uses: "Crowns, veneers and inlays made in the dentist's own milling machine.",
  link: "https://en.wikipedia.org/wiki/Glass-ceramic"
},
{
  id: "zta", cat: "ceramic", name: "Zirconia-toughened alumina",
  sub: "ZTA, Al₂O₃ + 10–20% ZrO₂", img: "zta",
  hook: "Zirconia grains sit in the alumina like loaded springs. A crack running through triggers them to change crystal structure and swell, which squeezes the crack shut behind the tip. Alumina's hardness with much of zirconia's toughness.",
  stats: [["Toughness", "~6 MPa·m½"], ["Hardness", "~1700 HV"], ["Mechanism", "transformation toughening"]],
  uses: "Hip replacement heads, wear tiles, cutting inserts, ballistic plates.",
  link: "https://en.wikipedia.org/wiki/Zirconium_dioxide"
},
{
  id: "mnznferrite", cat: "ceramic", name: "MnZn ferrite",
  sub: "soft ferrite core material", img: "mnznferrite",
  hook: "A magnetic ceramic that is an electrical insulator, so eddy currents that would cook a solid iron core simply cannot circulate. That is the only reason switching power supplies can run at hundreds of kilohertz.",
  stats: [["Permeability", "2000–15000"], ["Resistivity", "~1 Ω·m"], ["Useful to", "~1 MHz"]],
  uses: "SMPS transformers, inductors, the lump on every USB cable, antenna rods.",
  link: "https://en.wikipedia.org/wiki/Ferrite_(magnet)"
},
{
  id: "azs", cat: "ceramic", name: "Fused-cast AZS",
  sub: "alumina–zirconia–silica refractory", img: "azs",
  swatch: { pattern: "speckle", colors: ["#cdc7b8", "#eee9dc", "#9a9484"] },
  hook: "Melted at over 2000 °C and cast like metal into blocks, rather than pressed and fired. The result stands in molten glass for ten or fifteen years without dissolving into it — a glass furnace is rebuilt around the AZS, not the other way round.",
  stats: [["Cast at", ">2000 °C"], ["Campaign life", "10–15 years"], ["ZrO₂", "33–41%"]],
  uses: "Glass melting furnace linings, throats and feeders.",
  link: "https://en.wikipedia.org/wiki/Refractory"
},
{
  id: "ifb", cat: "ceramic", name: "Insulating firebrick",
  sub: "porous alumina-silicate refractory", img: "ifb",
  hook: "Sawdust or polystyrene beads are burned out of the body during firing, leaving a brick that is mostly sealed air. You can hold one corner while the other glows at 1200 °C, and cut it with a hand saw.",
  stats: [["Density", "0.5–0.8 g/cm³"], ["Rating", "1260–1650 °C"], ["Cutting", "ordinary wood saw"]],
  uses: "Kiln and furnace linings, forge interiors, back-up insulation.",
  link: "https://en.wikipedia.org/wiki/Fire_brick"
},
{
  id: "sialon", cat: "ceramic", name: "Sialon",
  sub: "Si–Al–O–N solid solution", img: "sialon",
  hook: "Silicon nitride with aluminium and oxygen substituted into the lattice, which lets it be sintered without a glassy grain-boundary phase to soften at temperature. Molten aluminium will not wet it, so it survives in a job that destroys steel.",
  stats: [["Hardness", "~1600 HV"], ["Thermal shock", "excellent"], ["Molten Al", "non-wetting"]],
  uses: "Welding nozzles, thermocouple sheaths in aluminium melts, cutting inserts for nickel alloys.",
  link: "https://en.wikipedia.org/wiki/SiAlON"
},
{
  id: "beo", cat: "ceramic", name: "Beryllia",
  sub: "BeO, beryllium oxide", img: "beo",
  hook: "An electrical insulator that conducts heat better than aluminium metal — only diamond and a couple of others beat it. Sintered parts are safe to handle; the dust is not, which is why aluminium nitride replaced it wherever it could.",
  stats: [["Thermal conductivity", "~285 W/m·K"], ["Dielectric", "insulator"], ["Hazard", "dust only, chronic"]],
  uses: "Legacy RF power transistor and klystron packages, laser tubes, specialist heat spreaders.",
  link: "https://en.wikipedia.org/wiki/Beryllium_oxide"
},
{
  id: "uraniumglass", cat: "ceramic", name: "Uranium glass",
  sub: "uranium-doped soda-lime glass", img: "uraniumglass",
  hook: "A couple of percent uranium oxide turns glass yellow-green and makes it blaze under ultraviolet. Made as ordinary tableware from the 1830s; the radioactivity is real but trivial, less than a banana's worth of dose from sitting in the cabinet.",
  stats: [["Uranium", "~0.1–2%"], ["Under UV", "bright green"], ["Dose", "negligible"]],
  uses: "Collectable glassware, Depression-era pressed glass, historical lab ware.",
  link: "https://en.wikipedia.org/wiki/Uranium_glass"
},
{
  id: "dichroic", cat: "ceramic", name: "Dichroic glass",
  sub: "glass with a vapour-deposited oxide stack", img: "dichroic",
  hook: "The colour is not a pigment but a stack of oxide layers a few hundred atoms thick, interfering with light. It shows one colour reflected and the complementary one transmitted, and changes as you tilt it. NASA developed it for spacecraft filters.",
  stats: [["Layers", "30–50, nanometre scale"], ["Colour source", "interference, not dye"], ["Origin", "NASA optical filters"]],
  uses: "Art glass and jewellery, stage lighting filters, laser mirrors, architectural glazing.",
  link: "https://en.wikipedia.org/wiki/Dichroic_glass"
},
{
  id: "photochromic", cat: "ceramic", name: "Photochromic glass",
  sub: "silver halide microcrystals in glass", img: "photochromic",
  hook: "Silver halide crystals suspended in the glass split into silver and halogen in sunlight, darkening the lens — and because the glass cage holds both halves in place, they recombine in the shade. The same reaction as photographic film, made reversible.",
  stats: [["Darkening", "under 60 s"], ["Clearing", "a few minutes"], ["Cycles", "effectively unlimited"]],
  uses: "Sunglass and spectacle lenses, aircraft and architectural glazing.",
  link: "https://en.wikipedia.org/wiki/Photochromic_lens"
},
{
  id: "bonechina", cat: "ceramic", name: "Bone china",
  sub: "~50% calcined bone ash", img: "bonechina",
  hook: "Half the body is ash from cattle bone, which gives it a translucency and a whiteness no clay alone reaches, and makes a thin-walled cup strong enough to survive a hotel. Fired once hot and glazed once cool — the opposite order to porcelain.",
  stats: [["Bone ash", "~50%"], ["Translucency", "you can see a hand through it"], ["Firing", "biscuit high, glaze low"]],
  uses: "Fine tableware, teacups, figurines.",
  link: "https://en.wikipedia.org/wiki/Bone_china"
},
{
  id: "enamel", cat: "ceramic", name: "Vitreous enamel",
  sub: "glass fused to steel or cast iron", img: "enamel",
  hook: "Powdered glass fired onto metal at 800 °C, so the two expand together for the life of the part. It gives steel a surface that does not fade, scratch or stain — the London Underground's signs are nearly a century old and still look printed yesterday.",
  stats: [["Fired at", "750–850 °C"], ["Hardness", "~6 Mohs"], ["Weakness", "chips if struck"]],
  uses: "Cookware and sinks, cast iron baths, road and transit signs, cloisonné jewellery.",
  link: "https://en.wikipedia.org/wiki/Vitreous_enamel"
},
{
  id: "tincoat", cat: "ceramic", name: "Titanium nitride coating",
  sub: "a few micrometres, struck on by arc", img: "tincoat",
  hook: "Two to four micrometres of titanium nitride grown onto a finished tool by striking an arc on a titanium cathode in nitrogen, hot enough to bond but not to ruin the temper underneath. The coating is around three times the hardness of hardened steel and slides better, so the tool keeps its own toughness while the surface takes the wear, and a worn tool can be stripped and recoated rather than scrapped. The gold colour is incidental — a consequence of how its electrons swallow blue light — and hotter cutting has since moved on to aluminium-titanium and aluminium-chromium nitrides, which grow their own oxide skin at the edge.",
  stats: [["Thickness", "2–4 µm"], ["Hardness", "around 2000–2400 HV"], ["Gold colour", "a side effect, not a plating"]],
  uses: "Drills, taps, punches and cutters; injection moulds, medical implants, decorative trim.",
  link: "https://en.wikipedia.org/wiki/Titanium_nitride"
},

/* ---------- COMPOSITES & STRUCTURES ---------- */
{
  id: "cc", cat: "composite", name: "Carbon–carbon",
  sub: "carbon fibre in a carbon matrix", img: "cc",
  hook: "Both the fibre and the glue are carbon, so there is nothing softer to fail first. It keeps its strength past 2000 °C in an inert atmosphere — one of very few materials that is happier hot.",
  stats: [["Usable to", ">2000 °C inert"], ["Weakness", "oxidises in air"], ["Density", "~1.8 g/cm³"]],
  uses: "Aircraft and F1 brakes, rocket nozzle throats, re-entry leading edges, furnace fixtures.",
  link: "https://en.wikipedia.org/wiki/Reinforced_carbon%E2%80%93carbon"
},
{
  id: "cmc", cat: "composite", name: "SiC/SiC composite",
  sub: "ceramic matrix composite", img: "cmc",
  hook: "Ceramics are strong but shatter. Weave ceramic fibres into a ceramic matrix and cracks get pinned and pulled out fibre by fibre, so it fails gracefully — which is what let engines run hotter.",
  stats: [["Service", "1200–1300 °C"], ["Density", "~⅓ of superalloy"], ["Failure", "pseudo-ductile"]],
  uses: "Turbine shrouds and combustor liners, exhaust nozzles, hot structures.",
  link: "https://en.wikipedia.org/wiki/Ceramic_matrix_composite"
},
{
  id: "cf", cat: "composite", name: "Pitch-based carbon fibre",
  sub: "K13D and relatives", img: "cf",
  hook: "The high-modulus cousin of ordinary PAN carbon fibre. Its graphite planes are aligned so well along the fibre that it beats copper at conducting heat, and shrinks slightly when warmed.",
  stats: [["Modulus", "to ~935 GPa"], ["Conductivity", "~800 W/m·K"], ["Axial CTE", "negative"]],
  uses: "Satellite structures and optical benches, thermal doublers, stiff robot arms.",
  link: "https://en.wikipedia.org/wiki/Carbon_fibers"
},
{
  id: "nextel", cat: "composite", name: "Nextel ceramic fabric",
  sub: "alumina–boria–silica fibre",
  img: "nextel",
  swatch: { pattern: "weave", colors: ["#d6d1c7", "#f5f3ed", "#b0a99b"] },
  hook: "A ceramic you can weave, drape and sew. It takes a flame straight on, which is why it forms the outer layers of spacecraft shielding and furnace curtains.",
  stats: [["Continuous use", "1200–1400 °C"], ["Form", "cloth, sleeve, tape"], ["Handling", "like fabric"]],
  uses: "Thermal protection blankets, furnace curtains, CMC preforms, flame barriers."
},
{
  id: "syntactic", cat: "composite", name: "Syntactic foam",
  sub: "glass microballoons in resin", img: "syntactic",
  hook: "Foam whose bubbles are rigid glass spheres instead of voids. That makes a foam which does not collapse under pressure — the only reason crewed submersibles can float back up.",
  stats: [["Density", "0.3–0.7 g/cm³"], ["Depth", "to 11,000 m"], ["Water uptake", "negligible"]],
  uses: "Submersible and ROV buoyancy, riser modules, sandwich cores.",
  link: "https://en.wikipedia.org/wiki/Syntactic_foam"
},
{
  id: "aerogel", cat: "composite", name: "Silica aerogel",
  sub: "“frozen smoke”", img: "aerogel",
  hook: "A gel with the liquid removed and the structure left standing. Almost all of it is air, held in pores too small for air molecules to carry heat across.",
  stats: [["Density", "from 0.001 g/cm³"], ["Conductivity", "0.012–0.02 W/m·K"], ["Air", "~99.8%"]],
  uses: "Spacecraft and pipeline insulation, comet dust capture, insulating blankets.",
  link: "https://en.wikipedia.org/wiki/Aerogel"
},
{
  id: "metalfoam", cat: "composite", name: "Metal foam",
  sub: "closed-cell aluminium", img: "metalfoam",
  hook: "Metal with gas blown into the melt. It crushes at a near-constant stress over a long stroke, which is exactly the curve you want from a crash structure.",
  stats: [["Relative density", "5–25%"], ["Crush", "constant plateau"], ["Bonus", "stiff and quiet"]],
  uses: "Crash boxes, sandwich panel cores, heat exchangers, acoustic panels.",
  link: "https://en.wikipedia.org/wiki/Metal_foam"
},
{
  id: "auxetic", cat: "composite", name: "Auxetic structures",
  sub: "negative Poisson's ratio", img: "auxetic",
  hook: "Stretch it and it gets fatter; squeeze it and it gets thinner. That comes from geometry rather than chemistry, so it can be printed into almost any base material. Under impact it pulls material inwards instead of squirting it out.",
  stats: [["Poisson's ratio", "negative"], ["Source", "geometry"], ["Impact", "densifies"]],
  uses: "Protective padding, stents, filters, conformable panels, shoe soles.",
  link: "https://en.wikipedia.org/wiki/Auxetics"
},
{
  id: "bioglass", cat: "composite", name: "Bioglass 45S5",
  sub: "bioactive glass", img: "bioglass",
  hook: "Most implant materials are merely tolerated by the body. This one is chemically attacked by it — and the reaction layer is hydroxyapatite, so bone bonds straight onto the glass instead of walling it off.",
  stats: [["Silica", "45%"], ["Reaction", "grows apatite"], ["Bond", "direct to bone"]],
  uses: "Bone graft granules, dental repair, sensitivity toothpaste, scaffolds.",
  link: "https://en.wikipedia.org/wiki/Bioglass_45S5"
},
{
  id: "hap", cat: "composite", name: "Hydroxyapatite",
  sub: "Ca₅(PO₄)₃(OH)", img: "hap",
  hook: "The mineral your skeleton is made of, which also occurs as a rock you can hold. Plasma-sprayed onto a titanium implant, it persuades bone to grow onto metal.",
  stats: [["Of bone mineral", "~60–70%"], ["Role", "osteoconductive"], ["Also", "a natural mineral"]],
  uses: "Implant coatings, bone void filler, chromatography media, enamel repair.",
  link: "https://en.wikipedia.org/wiki/Hydroxyapatite"
},
{
  id: "mycelium", cat: "composite", name: "Mycelium composite",
  sub: "fungal biocomposite", img: "mycelium",
  hook: "Not manufactured — grown. Fungal threads colonise agricultural waste inside a mould over a few days, then are heat-killed, leaving a foam-like solid that composts at end of life.",
  stats: [["Growth", "days, room temp"], ["Feedstock", "crop waste"], ["End of life", "compostable"]],
  uses: "Protective packaging, acoustic and insulation panels, furniture, leather substitute.",
  link: "https://en.wikipedia.org/wiki/Mycelium-based_materials"
},
{
  id: "twood", cat: "composite", name: "Transparent wood",
  sub: "delignified wood + polymer", img: "twood",
  hook: "Strip the light-absorbing lignin out of a thin slice of wood and backfill the cell structure with index-matched polymer. The grain stays, light passes through, and it insulates far better than glass.",
  stats: [["Transmittance", "~85–90%"], ["vs. glass", "tougher, warmer"], ["Keeps", "the grain"]],
  uses: "Experimental glazing, diffusing light panels, structural windows.",
  link: "https://en.wikipedia.org/wiki/Transparent_wood_composite"
},
{
  id: "gfrp", cat: "composite", name: "Glass-fibre laminate",
  sub: "GFRP / fibreglass", img: "gfrp",
  hook: "Glass in bulk is brittle because of surface flaws; drawn into a 10 µm filament and kept coated, those flaws never form, and the fibre is stronger than steel wire. The resin's only job is to hold the fibres apart and pass load between them.",
  stats: [["Fibre tensile", "~3.4 GPa"], ["Fibre fraction", "30–60%"], ["Resin's job", "load transfer"]],
  uses: "Boat hulls, wind turbine blades, bath tubs, circuit boards, ladders.",
  link: "https://en.wikipedia.org/wiki/Fiberglass"
},
{
  id: "cfrp", cat: "composite", name: "CFRP prepreg laminate",
  sub: "carbon fibre pre-impregnated with epoxy", img: "cfrp",
  hook: "Cloth arrives already loaded with exactly the right amount of B-staged resin, frozen to stop it curing. You lay it up, bag it and bake it, and the part has the fibre fraction an engineer specified rather than the one a wet brush happened to give.",
  stats: [["Fibre fraction", "~60%, controlled"], ["Shelf life", "months at −18 °C"], ["Cure", "120–180 °C in autoclave"]],
  uses: "Airframes, F1 monocoques, bicycle frames, satellite structures.",
  link: "https://en.wikipedia.org/wiki/Pre-preg"
},
{
  id: "alhoneycomb", cat: "composite", name: "Aluminium honeycomb",
  sub: "expanded foil core sandwich", img: "alhoneycomb",
  hook: "Foil 25 µm thick, glued in stripes and pulled open into hexagons. Separating two thin skins by an inch of near-nothing multiplies the panel's bending stiffness by a hundred for a few percent extra weight — the I-beam idea in two dimensions.",
  stats: [["Foil", "~25 µm"], ["Density", "~50 kg/m³"], ["Stiffness gain", "~100×"]],
  uses: "Aircraft floors and control surfaces, satellite panels, race car floors, flight cases.",
  link: "https://en.wikipedia.org/wiki/Honeycomb_structure"
},
{
  id: "nomexcore", cat: "composite", name: "Nomex honeycomb",
  sub: "phenolic-dipped aramid paper core", img: "nomexcore",
  swatch: { pattern: "honeycomb", colors: ["#c79a3c", "#e9c877", "#8a6520"] },
  hook: "Aramid paper folded into cells and dipped in phenolic resin until it is rigid. Lighter than aluminium core, does not corrode, does not conduct, and does not take a permanent dent — it springs back where the metal version stays crushed.",
  stats: [["Density", "29–130 kg/m³"], ["Dent", "recovers"], ["Flame", "self-extinguishing"]],
  uses: "Aircraft interior panels, radomes, racing bodywork, skis and snowboards.",
  link: "https://en.wikipedia.org/wiki/Honeycomb_structure"
},
{
  id: "glare", cat: "composite", name: "GLARE",
  sub: "glass-fibre / aluminium laminate", img: "glare",
  hook: "Thin aluminium sheets alternating with glass-fibre prepreg. A fatigue crack runs through the metal layer and then stops dead, because the fibres bridging it carry the load across — cracks grow ten to a hundred times slower than in solid alloy.",
  stats: [["Crack growth", "10–100× slower"], ["Weight saving", "~10% vs alloy"], ["Flies on", "the A380 upper fuselage"]],
  uses: "Airbus A380 fuselage panels, cargo liners, blast-resistant containers.",
  link: "https://en.wikipedia.org/wiki/GLARE"
},
{
  id: "plywood", cat: "composite", name: "Plywood",
  sub: "cross-laminated wood veneer", img: "plywood",
  hook: "Wood is roughly thirty times stiffer along the grain than across it. Rotate every veneer 90° to its neighbour and you get a sheet that is equally strong in both directions and will not split — engineering around a flaw by stacking it out.",
  stats: [["Plies", "odd number, always"], ["Grain", "alternating 90°"], ["Splitting", "designed out"]],
  uses: "Construction sheathing, furniture, boat hulls, concrete formwork, aircraft (Mosquito).",
  link: "https://en.wikipedia.org/wiki/Plywood"
},
{
  id: "clt", cat: "composite", name: "Cross-laminated timber",
  sub: "CLT mass timber panel", img: "clt",
  hook: "Plywood's logic at building scale: whole boards stacked crosswise into slabs a foot thick. It carries like concrete at a fifth of the weight, and in a fire the outside chars into an insulating layer that protects the structural core behind it.",
  stats: [["Char rate", "~0.65 mm/min"], ["vs concrete", "~1/5 the weight"], ["Tallest so far", "~25 storeys"]],
  uses: "Mid-rise apartment and office buildings, floor and roof slabs, shear walls.",
  link: "https://en.wikipedia.org/wiki/Cross-laminated_timber"
},
{
  id: "rcconcrete", cat: "composite", name: "Reinforced concrete",
  sub: "concrete with embedded steel", img: "rcconcrete",
  hook: "The partnership works for a reason nobody planned: concrete and steel happen to expand at almost exactly the same rate, so a hot day does not tear them apart. The concrete's alkalinity also passivates the steel, which is why carbonation and chloride are what eventually kill a structure.",
  stats: [["Compression", "concrete, 20–50 MPa"], ["Tension", "steel, ~500 MPa"], ["Expansion", "near-identical, by luck"]],
  uses: "Essentially all modern construction — frames, slabs, dams, foundations.",
  link: "https://en.wikipedia.org/wiki/Reinforced_concrete"
},
{
  id: "uhpc", cat: "composite", name: "Ultra-high-performance concrete",
  sub: "UHPC with steel microfibres", img: "uhpc",
  hook: "Packed with particles of every size from a centimetre down to a tenth of a micron so there is no space left for voids, plus steel fibres to carry tension. It is eight times stronger than structural concrete and does not need rebar.",
  stats: [["Compressive", "120–250 MPa"], ["Water/cement", "<0.25"], ["Rebar", "often none"]],
  uses: "Thin-shell footbridges, façade panels, bridge deck joints, security bollards.",
  link: "https://en.wikipedia.org/wiki/Ultra-high-performance_concrete"
},
{
  id: "selfhealconcrete", cat: "composite", name: "Self-healing concrete",
  sub: "bacterial or capsule-healed concrete", img: "selfhealconcrete",
  hook: "Dormant Bacillus spores and their calcium lactate food are mixed into the pour and sit inert for decades. A crack lets water in, the spores wake, and they precipitate limestone until the crack is plugged and the water stops.",
  stats: [["Spore dormancy", "200 years, claimed"], ["Crack sealed", "to ~0.8 mm"], ["Trigger", "water ingress"]],
  uses: "Tunnel linings, marine structures, basement walls — anywhere repair access is expensive.",
  link: "https://en.wikipedia.org/wiki/Self-healing_material"
},
{
  id: "fibrecement", cat: "composite", name: "Fibre cement",
  sub: "cellulose-reinforced cement board", img: "fibrecement",
  hook: "The modern, honest replacement for asbestos cement: wood pulp fibres do the same crack-bridging job without the lung hazard. Non-combustible, immune to termites and rot, and it holds paint for decades.",
  stats: [["Fibre", "cellulose, not asbestos"], ["Combustible", "no"], ["Life", "50 years typical"]],
  uses: "Cladding and siding, soffits, tile backer board, roof slates.",
  link: "https://en.wikipedia.org/wiki/Fibre_cement"
},
{
  id: "smc", cat: "composite", name: "Sheet moulding compound",
  sub: "SMC, chopped glass in thickened polyester", img: "smc",
  swatch: { pattern: "speckle", colors: ["#6f756e", "#a4a99f", "#464b45"] },
  hook: "A leathery sheet of resin and chopped fibre that is pressed into a hot steel die and cured in two minutes. It is how a composite body panel gets made at car-plant rate instead of boat-yard rate, and it does not dent or rust.",
  stats: [["Cycle", "1–3 minutes"], ["Glass", "25–30%"], ["Finish", "paintable Class A"]],
  uses: "Truck and car body panels, electrical enclosures, lorry cabs, bathroom units.",
  link: "https://en.wikipedia.org/wiki/Sheet_moulding_compound"
},
{
  id: "forgedcomposite", cat: "composite", name: "Forged composite",
  sub: "chopped-tow compression moulded CFRP", img: "forgedcomposite",
  swatch: { pattern: "speckle", colors: ["#2b2e31", "#70757a", "#141618"] },
  hook: "Short random carbon tows squeezed into a die instead of laid up by hand. You lose the directional strength of a laminate and gain the ability to mould ribs, bosses and thick sections in one shot — and a marbled surface nobody can fake.",
  stats: [["Tow length", "~25–50 mm"], ["Cycle", "minutes"], ["Shapes", "3D, not just shells"]],
  uses: "Supercar structural parts, watch cases, bicycle components, tool bodies.",
  link: "https://en.wikipedia.org/wiki/Carbon_fiber_reinforced_polymer"
},
{
  id: "alsic", cat: "composite", name: "Al-SiC metal matrix",
  sub: "aluminium with 40–70% SiC particles", img: "alsic",
  hook: "Load aluminium with enough silicon carbide and you can tune its thermal expansion to match a silicon chip exactly, while keeping metal's heat conduction. The package then survives thousands of thermal cycles without the solder joints shearing off.",
  stats: [["Expansion", "tunable 6–12 × 10⁻⁶ /K"], ["Conductivity", "~180 W/m·K"], ["SiC", "40–70 vol%"]],
  uses: "Power module baseplates, IGBT substrates, avionics packaging, brake discs.",
  link: "https://en.wikipedia.org/wiki/Metal_matrix_composite"
},
{
  id: "tyre", cat: "composite", name: "Steel-belted radial tyre",
  sub: "rubber, steel cord, textile plies", img: "tyre",
  hook: "Among the most complex objects mass-produced: up to twenty materials, brass-plated steel cord bonded chemically to rubber, carcass plies running radially and belts running across them. It is expected to run at 120 km/h for 60,000 km with no maintenance.",
  stats: [["Materials", "up to ~20"], ["Cord bond", "brass-to-sulfur"], ["Flex cycles", "~50 million"]],
  uses: "Every road vehicle built since the 1970s.",
  link: "https://en.wikipedia.org/wiki/Radial_tire"
},
{
  id: "transparentarmour", cat: "composite", name: "Transparent armour",
  sub: "glass / polycarbonate / ceramic laminate", img: "transparentarmour",
  hook: "A stack with a job for each layer: a hard ceramic or glass face to shatter and blunt the bullet, thick glass to spread the load, and a polycarbonate backing to catch everything without spalling into the cabin. Four inches thick for a rifle round.",
  stats: [["Thickness", "25–100 mm"], ["Layers", "glass, PVB, PC"], ["Weight", "~100 kg/m² at rifle rating"]],
  uses: "Armoured vehicle and bank glazing, cockpit windscreens, riot shields.",
  link: "https://en.wikipedia.org/wiki/Bulletproof_glass"
},
{
  id: "dyneemahb", cat: "composite", name: "UHMWPE armour laminate",
  sub: "cross-plied Dyneema HB", img: "dyneemahb",
  hook: "Unidirectional fibre sheets cross-plied and pressed with almost no resin, so the fibres do nearly all the work. It stops rifle rounds at a lower areal weight than any other material, and being polyethylene it floats and ignores water.",
  stats: [["Areal density", "~15–20 kg/m² rifle"], ["Resin", "<20%"], ["Water", "no effect"]],
  uses: "Helmets, vehicle and ship armour, ballistic plates, blast containment.",
  link: "https://en.wikipedia.org/wiki/Ultra-high-molecular-weight_polyethylene"
},
{
  id: "pvcfoam", cat: "composite", name: "Structural PVC foam core",
  sub: "cross-linked PVC, Divinycell type", img: "pvcfoam",
  swatch: { pattern: "powder", colors: ["#c8b78f", "#e6dcc0", "#95855f"] },
  hook: "A rigid closed-cell foam engineered to carry shear rather than to insulate. In a sandwich panel the skins take tension and compression and the core's only job is to keep them apart and stop them sliding — and it absorbs no water if the skin is pierced.",
  stats: [["Density", "40–250 kg/m³"], ["Cells", "closed"], ["Carries", "shear, not bending"]],
  uses: "Boat hulls and decks, wind turbine blade shells, rail car panels.",
  link: "https://en.wikipedia.org/wiki/Sandwich-structured_composite"
},
{
  id: "gypsum", cat: "composite", name: "Gypsum board",
  sub: "CaSO₄·2H₂O between paper facings", img: "gypsum",
  hook: "Its fire rating comes from chemistry, not insulation: the board is about 20% water bound into the crystal, and in a fire that water boils off and holds the far side at 100 °C until the whole sheet is dry. A 16 mm board buys an hour.",
  stats: [["Bound water", "~21% by mass"], ["Rating", "~60 min at 16 mm"], ["Mechanism", "calcination"]],
  uses: "Interior walls and ceilings, fire separations, shaft linings.",
  link: "https://en.wikipedia.org/wiki/Drywall"
},
{
  id: "g10", cat: "composite", name: "G10 / FR-4",
  sub: "woven glass cloth in epoxy", img: "g10",
  swatch: { pattern: "weave", colors: ["#2f6b3a", "#5ea06b", "#1b3f22"] },
  hook: "The green board every circuit lives on, and a superb structural material in its own right: dimensionally stable, an excellent insulator, and unbothered by water. FR-4 is the same thing with bromine added so it self-extinguishes.",
  stats: [["Dielectric strength", "~20 kV/mm"], ["Water absorption", "<0.1%"], ["Tg", "130–180 °C"]],
  uses: "Printed circuit boards, knife scales, transformer spacers, cryogenic supports.",
  link: "https://en.wikipedia.org/wiki/FR-4"
},
{
  id: "copv", cat: "composite", name: "COPV",
  sub: "composite overwrapped pressure vessel", img: "copv",
  hook: "A thin metal or plastic liner that only has to hold gas in, wound with carbon fibre that does all the holding together. Half the weight of a steel cylinder at the same pressure — and the winding pattern is calculated so the fibres carry pure tension everywhere.",
  stats: [["Pressure", "300–700 bar"], ["vs steel", "~50% lighter"], ["Liner", "seals only"]],
  uses: "Hydrogen and CNG vehicle tanks, SCBA and scuba cylinders, spacecraft helium tanks.",
  link: "https://en.wikipedia.org/wiki/Composite_overwrapped_pressure_vessel"
},
{
  id: "pykrete", cat: "composite", name: "Pykrete",
  sub: "14% wood pulp frozen into water", img: "pykrete",
  hook: "Ice with sawdust in it. The fibres stop cracks running, so it is several times stronger than ice, melts far more slowly, and can be machined and shot at. Britain seriously planned an aircraft carrier out of it in 1943; the war ended first.",
  stats: [["Pulp", "~14% by mass"], ["Crush strength", "~7 MPa"], ["Project", "Habakkuk, 1943"]],
  uses: "None in service — a wartime proposal and a durable demonstration piece.",
  link: "https://en.wikipedia.org/wiki/Pykrete"
},
{
  id: "hempcrete", cat: "composite", name: "Hempcrete",
  sub: "hemp shiv bound with lime", img: "hempcrete",
  hook: "Not structural — it is poured around a timber frame as insulation. The lime slowly reabsorbs the CO₂ it gave off when it was burned, and the plant locked up carbon while growing, so a finished wall can be carbon-negative. It also buffers humidity.",
  stats: [["Density", "~275 kg/m³"], ["λ", "~0.06 W/m·K"], ["Carbon", "net negative"]],
  uses: "Infill walls and insulating renders in low-energy and heritage building.",
  link: "https://en.wikipedia.org/wiki/Hempcrete"
},
{
  id: "fgm", cat: "composite", name: "Functionally graded material",
  sub: "FGM, continuously varying composition", img: "fgm",
  swatch: { pattern: "laminate", colors: ["#8d6a4a", "#d8d2cc", "#3c4147"] },
  hook: "Instead of bonding ceramic to metal and living with the stress at the interface, the composition is swept gradually from one to the other across a few millimetres. There is no interface left to delaminate — the idea came out of Japanese hypersonic work in the 1980s.",
  stats: [["Interface", "none — a gradient"], ["Made by", "powder grading, DED printing"], ["Origin", "Japan, 1984"]],
  uses: "Thermal barrier layers, rocket nozzles, cutting tools, graded bone implants.",
  link: "https://en.wikipedia.org/wiki/Functionally_graded_material"
},
{
  id: "lattice", cat: "additive", name: "Printed lattice",
  sub: "a solid whose stiffness is geometry", img: "lattice",
  hook: "A material whose properties come from its architecture rather than its chemistry: relative density sets the stiffness, and the cell type sets how it scales — a stretch-dominated octet truss falls off roughly linearly with density, a bending-dominated foam far faster. Printing is what made the inside of a part designable at all.",
  stats: [["Mass saving", "50–80%"], ["Cell size", "1–10 mm"], ["Octet", "stiffness linear with density"]],
  uses: "Aerospace brackets, heat exchangers, bone-ingrowth implants, impact liners.",
  link: "https://en.wikipedia.org/wiki/Lattice_material"
},

/* ---------- 3D PRINTING & ADDITIVE ---------- */
{
  id: "fff", cat: "additive", name: "Printer filament",
  sub: "1.75 mm spooled thermoplastic", img: "fff",
  hook: "A drawn monofilament on a spool, held to about ±0.02 mm, because the extruder meters by volume and a fat spot becomes a blob. PLA, PETG and ABS all arrive as the same stock and the machine only melts and places it — which is why what comes out is never isotropic: the layers are welds, and the weld is the weakest thing in the part.",
  stats: [["Diameter", "1.75 mm, ±0.02 mm"], ["Z strength", "20–70% of XY"], ["Catch", "nylon and PETG drink water"]],
  uses: "Prototyping, jigs and fixtures, end-use brackets, the entire desktop printer market.",
  link: "https://en.wikipedia.org/wiki/3D_printing_filament"
},
{
  id: "ebm", cat: "additive", name: "Electron-beam titanium",
  sub: "Ti-6Al-4V built hot, in vacuum", img: "ebm",
  hook: "Titanium grown in a powder bed held near 700 °C anneals itself as it goes, so it ends up with a lamellar α+β structure and almost none of the residual stress a laser leaves behind. The surface comes out rough, half-sintered powder — which is what surgeons want, because bone grows into exactly that kind of trabecular skin.",
  stats: [["Bed", "700–1000 °C, self-annealed"], ["Structure", "lamellar α+β"], ["Surface", "rough, bone grows in"]],
  uses: "Acetabular cups and spinal cages, patient-specific implants, turbine blades, refractory alloys.",
  link: "https://en.wikipedia.org/wiki/Electron-beam_additive_manufacturing"
},
{
  id: "waam", cat: "additive", name: "Welding wire feedstock",
  sub: "ER70S, 5356 and titanium wire", img: "waam",
  hook: "Ordinary welding wire off a spool, laid down by the kilogram an hour rather than the gram. What you get is weld metal — coarse, columnar, sound once machined back — and the build volume is simply the reach of the robot arm, which is the only reason a ship's propeller or a rocket tank can be printed at all.",
  stats: [["Rate", "1–10 kg/h"], ["Build volume", "the robot's reach"], ["Finish", "rough, machine after"]],
  uses: "Rocket tanks, ship propellers, large brackets, repair and feature addition on big castings.",
  link: "https://en.wikipedia.org/wiki/Wire_arc_additive_manufacturing"
},
{
  id: "coldspray", cat: "additive", name: "Cold-spray powder",
  sub: "ductile metal, bonded by impact", img: "coldspray",
  hook: "Powder that has to be ductile, because the bond is mechanical: at 500–1200 m/s the particle and the surface deform past their oxide skins and weld without melting. Copper, aluminium, nickel and tantalum work; hard, brittle powders simply bounce off. No heat means no oxidation and no heat-affected zone, so a finished part can be built onto.",
  stats: [["Particle speed", "500–1200 m/s"], ["Needs", "ductile powder, 5–45 µm"], ["Heat", "none, no oxidation"]],
  uses: "Repairing worn or corroded castings, adding features to finished parts, coating, field repair of aircraft.",
  link: "https://en.wikipedia.org/wiki/Cold_spraying"
},
{
  id: "twophoton", cat: "additive", name: "Two-photon resist",
  sub: "acrylate resist cured only at the focus", img: "twophoton",
  hook: "A resist formulated so that curing takes two infrared photons arriving at the same instant, which happens only inside the focal volume. That nonlinearity beats the diffraction limit: features land around 100–200 nm, smaller than the light writing them, anywhere inside the drop. Cure shrinkage is what fights you at that scale.",
  stats: [["Feature size", "~100–200 nm"], ["Mechanism", "two-photon absorption"], ["Catch", "a few % cure shrinkage"]],
  uses: "Microlenses printed on fibre tips, microfluidic parts, mechanical metamaterials, micro-robots.",
  link: "https://en.wikipedia.org/wiki/Two-photon_lithography"
},
{
  id: "concreteprint", cat: "additive", name: "Printable mortar",
  sub: "thixotropic fine-aggregate mix", img: "concreteprint",
  hook: "A mix that has to contradict itself: fluid enough to pump down a hose, then stiff enough within minutes to carry the beads stacked on it before any of it has cured. Aggregate is kept small enough to pass the nozzle, accelerator sets the open time, and the layer interface is the weak plane. Putting the steel back in is the part nobody has solved.",
  stats: [["Aggregate", "under ~4 mm"], ["Open time", "minutes, set by accelerator"], ["Open problem", "reinforcement"]],
  uses: "House shells and walls, bridges, street furniture, formwork for conventional concrete.",
  link: "https://en.wikipedia.org/wiki/Construction_3D_printing"
},
{
  id: "sandprint", cat: "additive", name: "Furan-bonded sand",
  sub: "foundry sand, printed into moulds", img: "sandprint",
  hook: "Plain silica sand with furan resin and an acid catalyst jetted into it drop by drop: it sets where the head passed and the rest pours away. The casting that follows is three thousand years old and unchanged, but no pattern was carved and no core had to be withdrawable, so cooling passages can loop through a cylinder head any way they like.",
  stats: [["Sand", "silica, 0.1–0.3 mm"], ["Binder", "furan resin, acid cured"], ["Tooling", "none"]],
  uses: "Engine blocks and heads, pump and valve bodies, art casting, foundry prototyping.",
  link: "https://en.wikipedia.org/wiki/Sand_casting"
},
{
  id: "contfibre", cat: "additive", name: "Printed continuous tow",
  sub: "unbroken carbon or glass in a printed shell", img: "contfibre",
  hook: "A single unbroken tow, fed by a second nozzle and laid along the load path while the plastic shell prints around it. Chopped fibre only stiffens a filament; continuous fibre changes what the part is, because the reinforcement follows the stress rather than the raster. The limit is geometric — a tow will not turn a sharp corner.",
  stats: [["Fibre", "continuous, path-placed"], ["Stiffness", "several × unfilled"], ["Limit", "no sharp turns"]],
  uses: "Tooling and fixtures, drone and robot structures, replacement brackets, low-volume load-bearing parts.",
  link: "https://en.wikipedia.org/wiki/Fibre-reinforced_plastic"
},
{
  id: "boundmetal", cat: "additive", name: "Bound metal filament",
  sub: "metal powder in wax and polymer", img: "boundmetal",
  hook: "Metal injection moulding feedstock drawn into a filament: around 60% steel powder by volume held in wax and polymer, stiff and faintly waxy in the hand. It prints on what is essentially a plastic machine — no laser, no argon, no loose powder — then the binder leaves in solvent and heat, and the part gives up a fifth of its size in the furnace.",
  stats: [["Solids", "~55–60% powder by volume"], ["Shrinkage", "~20% on sintering"], ["Density", "96–99% after sinter"]],
  uses: "Tooling, fixtures and soft jaws, spare parts, low-volume stainless and tool steel components.",
  link: "https://en.wikipedia.org/wiki/Metal_injection_molding"
},
{
  id: "lcmceramic", cat: "additive", name: "Ceramic slurry resin",
  sub: "alumina or zirconia in photopolymer", img: "lcmceramic",
  hook: "Half ceramic powder by volume suspended in photopolymer, which makes a paste that scatters the very light meant to cure it — so the binder is matched to the powder's refractive index to keep the cure depth usable. Fire it and the polymer leaves: what remains is over 99% dense zirconia or alumina, which behaves like a real ceramic rather than like something printed.",
  stats: [["Solids loading", "40–55% by volume"], ["After firing", ">99% dense"], ["Shrinkage", "~20–25%"]],
  uses: "Dental crowns and bridges, surgical tools, microreactors, high-temperature cores.",
  link: "https://en.wikipedia.org/wiki/Ceramic_engineering"
},
{
  id: "soluble", cat: "additive", name: "Soluble support",
  sub: "PVA, BVOH and HIPS", img: "soluble",
  hook: "Scaffolding that leaves through a chemical door rather than a mechanical one: PVA and BVOH wash out in water, HIPS dissolves in limonene. Once support no longer has to be broken off, a sealed cavity, a captive bearing or a gear train printed already meshed all become things you can simply print.",
  stats: [["PVA", "dissolves in water"], ["HIPS", "dissolves in limonene"], ["Needs", "a second extruder"]],
  uses: "Enclosed voids, printed-in-place mechanisms, fine overhangs, clean surfaces where supports touched.",
  link: "https://en.wikipedia.org/wiki/Polyvinyl_alcohol"
},
{
  id: "slaresin", cat: "additive", name: "Photopolymer resin",
  sub: "acrylate oligomers and a photoinitiator", img: "slaresin",
  hook: "Oligomers, a reactive diluent and an initiator that fires under ultraviolet and runs a chain reaction across the whole exposed layer. Each layer cross-links into the one below instead of welding to it, so the part is a single continuous network with no weak direction — but it is a thermoset: it leaves the vat only partly cured, keeps changing for days, and the uncured monomer is a skin sensitiser.",
  stats: [["Cure", "UV, 385 or 405 nm"], ["Anisotropy", "essentially none"], ["Handling", "sensitiser, wear gloves"]],
  uses: "Every vat process: laser, DLP, masked LCD and continuous printing; dental, jewellery, models, engineering parts.",
  link: "https://en.wikipedia.org/wiki/Photopolymer"
},
{
  id: "pa12powder", cat: "additive", name: "PA12 powder",
  sub: "nylon 12 for powder bed fusion", img: "pa12powder",
  hook: "Chosen for a thermal quirk: the gap between where it melts and where it recrystallises is wide, so a fused layer stays liquid long enough for the next one to join it properly. The grains never fully melt, which leaves a few per cent porosity — matt, faintly absorbent, superb at taking dye — and powder that has sat hot in the bed ages, so every build blends used with virgin.",
  stats: [["Particle size", "~45–60 µm"], ["Refresh", "30–50% virgin per build"], ["Porosity", "~2–4%"]],
  uses: "Laser-sintered and agent-jetted parts, ducting, housings, orthotics, living hinges.",
  link: "https://en.wikipedia.org/wiki/Nylon_12"
},
{
  id: "metalpowder", cat: "additive", name: "Gas-atomised powder",
  sub: "spherical metal feedstock", img: "metalpowder",
  hook: "Molten metal blown apart by an inert gas jet freezes into spheres before it can land. Roundness is the whole specification: only spheres flow and pack evenly under a recoater blade, and a satellite — a small sphere welded to a big one — is enough to streak a layer and seed a pore. Oxygen is counted in parts per million, because every reuse picks up a little more.",
  stats: [["Size cut", "15–45 µm for laser beds"], ["Shape", "spherical, satellite-free"], ["Oxygen", "tracked, ppm level"]],
  uses: "Feedstock for every powder bed and blown powder process; also metal injection moulding and thermal spray.",
  link: "https://en.wikipedia.org/wiki/Powder_metallurgy"
},
{
  id: "alsi10mg", cat: "additive", name: "AlSi10Mg",
  sub: "printable aluminium casting alloy", img: "alsi10mg",
  hook: "A casting alloy that turned out to suit lasers: the silicon sits near the eutectic, so the freezing range is narrow and the melt pool solidifies without tearing itself apart. Cooling is steep enough that the printed structure comes out finer, and stronger, than the same alloy poured into a mould.",
  stats: [["Tensile", "~450 MPa as built"], ["Why it works", "near-eutectic, no hot tearing"], ["Versus cast", "finer grain, stronger"]],
  uses: "Heat exchangers and cold plates, motorsport brackets, drone and robot structures.",
  link: "https://en.wikipedia.org/wiki/Aluminium%E2%80%93silicon_alloys"
},
{
  id: "grcop", cat: "additive", name: "GRCop-42",
  sub: "Cu-Cr-Nb rocket chamber alloy", img: "grcop",
  hook: "Copper carries heat better than almost anything and softens if you look at it hot. NASA's answer disperses Cr₂Nb particles through it, which hold the grains in place at 800 °C while the copper keeps conducting — and the chamber is printed because its cooling channels cannot be drilled.",
  stats: [["Conductivity", "~80% of pure copper"], ["Hot strength", "holds to ~800 °C"], ["Built by", "laser powder bed fusion"]],
  uses: "Regeneratively cooled rocket combustion chambers, nozzle liners and injectors.",
  link: "https://en.wikipedia.org/wiki/Regenerative_cooling_(rocketry)"
},
{
  id: "bioink", cat: "additive", name: "Bioink",
  sub: "cell-laden hydrogel", img: "bioink",
  hook: "Three demands that pull against each other: runny enough to pass a nozzle, stiff enough to hold its shape once it lands, and gentle enough that the cells inside survive the shear on the way through. Every formulation is a compromise, and the number that matters is how many cells are still alive afterwards.",
  stats: [["Base", "GelMA, alginate, collagen"], ["Cell viability", "the figure of merit"], ["Gelling", "temperature, ions or UV"]],
  uses: "Tissue and tumour models, skin and cartilage constructs, organ-on-a-chip, drug screening.",
  link: "https://en.wikipedia.org/wiki/Bio-ink"
},
{
  id: "fourd", cat: "additive", name: "Printed shape-memory polymer",
  sub: "the fold programmed by the toolpath", img: "fourd",
  hook: "A polymer that will hold a deformed shape until heat lets its network pull back to the one it was printed in — so the print is the program. Lay the fibres in one direction, or print a bilayer that swells unevenly, and the part folds, curls or opens itself when it is warmed or wetted. Flat-pack goes in, a structure comes out.",
  stats: [["Trigger", "heat, water, light or field"], ["Recovery", "to the as-printed shape"], ["Cycles", "tens to hundreds"]],
  uses: "Self-folding structures, deployable space hardware, adaptive textiles, soft actuators, stents.",
  link: "https://en.wikipedia.org/wiki/Shape-memory_polymer"
},
{
  id: "printsilicone", cat: "additive", name: "Printable silicone",
  sub: "thixotropic liquid silicone rubber", img: "printsilicone",
  hook: "Silicone will not hold a shape on its own, so it is either made thixotropic — stiff until the nozzle shears it, stiff again the instant it lands — or printed into a gel bath that holds it while it cures. Either way soft parts stop needing a mould, which is what soft robotics was waiting for.",
  stats: [["Shore", "00–30 to A-60"], ["Rheology", "shear-thinning, recovers fast"], ["Cure", "platinum or UV"]],
  uses: "Soft robot actuators, custom seals and gaskets, prosthetic liners, wearables, anatomical models.",
  link: "https://en.wikipedia.org/wiki/Silicone"
},

/* ---------- ROPES & WOVEN MATERIALS ---------- */
{
  id: "manila", cat: "fibre", name: "Manila (abacá)",
  sub: "Musa textilis leaf fibre", img: "manila",
  hook: "Not hemp at all but a banana relative, and for a century the standard every other rope was measured against. It holds up in salt water where most plant fibres rot, and it is stiff enough to hold a coil.",
  stats: [["Wet", "tolerates salt water"], ["Historic role", "the benchmark rope"], ["Stretch", "low for a natural fibre"]],
  uses: "Marine and towing rope, heavy twine, teabags and currency paper, Manila folders.",
  link: "https://en.wikipedia.org/wiki/Abac%C3%A1"
},
{
  id: "hemprope", cat: "fibre", name: "Hemp",
  sub: "Cannabis sativa bast fibre", img: "hemprope",
  hook: "The rope that rigged the age of sail. It is strong and grips well, but it rots from the inside once damp — which is why standing rigging was tarred, and why the smell of tar is the smell of an old ship.",
  stats: [["Strength", "high for a bast fibre"], ["Wet", "rots untreated"], ["Traditional fix", "tar"]],
  uses: "Traditional rigging and cordage, twine, canvas, decorative and theatre rope.",
  link: "https://en.wikipedia.org/wiki/Hemp"
},
{
  id: "sisal", cat: "fibre", name: "Sisal",
  sub: "Agave sisalana leaf fibre", img: "sisal",
  hook: "Coarse, cheap and sharply textured, so knots in it stay tied and cats sharpen their claws on it. It has almost no elasticity and little tolerance for damp, so it lives a short hard life on purpose.",
  stats: [["Texture", "deliberately rough"], ["Stretch", "minimal"], ["Wet", "weakens and rots"]],
  uses: "Baler and agricultural twine, scratching posts, buffing wheels, carpet backing, matting.",
  link: "https://en.wikipedia.org/wiki/Sisal"
},
{
  id: "coir", cat: "fibre", name: "Coir",
  sub: "coconut husk fibre", img: "coir",
  hook: "Weak by any engineering measure, but it floats, stretches about a third of its length before failing, and salt water barely touches it. For a mooring line that has to surge and never sink, those are the right properties.",
  stats: [["Elongation", "~30%"], ["Buoyancy", "floats"], ["Salt water", "highly resistant"]],
  uses: "Mooring and towing lines, doormats and matting, erosion blankets, growing medium, brushes.",
  link: "https://en.wikipedia.org/wiki/Coir"
},
{
  id: "jute", cat: "fibre", name: "Jute",
  sub: "Corchorus bast fibre, “golden fibre”", img: "jute",
  hook: "The cheapest usable natural fibre there is, grown in volumes second only to cotton. It is not strong, it hates water and it degrades in sunlight — and all of that is fine for a sack that composts after one trip.",
  stats: [["Cost", "the cheapest"], ["Lifetime", "short, by design"], ["End of life", "biodegrades"]],
  uses: "Sacking and hessian, carpet backing, rope and twine, geotextiles, packaging.",
  link: "https://en.wikipedia.org/wiki/Jute"
},
{
  id: "cottonduck", cat: "fibre", name: "Cotton duck",
  sub: "tightly woven cotton canvas", img: "cottonduck",
  hook: "A plain weave packed so densely that when the cotton wets it swells and closes the gaps. The fabric seals itself against rain while still breathing — a trick it performs with no coating at all.",
  stats: [["Weave", "plain, very dense"], ["Wet", "swells and seals"], ["Coating", "none required"]],
  uses: "Tents and awnings, workwear and aprons, sneakers, artist canvas, sandbags, tarpaulins.",
  link: "https://en.wikipedia.org/wiki/Cotton_duck"
},
{
  id: "linen", cat: "fibre", name: "Linen (flax)",
  sub: "Linum usitatissimum bast fibre", img: "linen",
  hook: "One of the few fibres that is stronger wet than dry, and among the oldest in use — there is linen in Egyptian tombs still recognisable as cloth. It barely stretches, which makes it crisp and makes it crease.",
  stats: [["Wet strength", "~20% higher than dry"], ["Stretch", "very low"], ["Age of use", "~30,000 years"]],
  uses: "Cloth and sailcloth, fire hose liners, bookbinding and paper, composite reinforcement.",
  link: "https://en.wikipedia.org/wiki/Linen"
},
{
  id: "silk", cat: "fibre", name: "Silk",
  sub: "Bombyx mori filament", img: "silk",
  hook: "A single continuous filament, up to a kilometre and a half of it, unwound from one cocoon — no other natural fibre comes in a length like that. Strong, tough and smooth enough to pack a parachute.",
  stats: [["Filament length", "up to ~1500 m"], ["Tensile", "~0.5 GPa"], ["Diameter", "~10–15 µm"]],
  uses: "Textiles, parachutes and balloon cloth historically, surgical suture, insulation in fine wire.",
  link: "https://en.wikipedia.org/wiki/Silk"
},
{
  id: "spidersilk", cat: "fibre", name: "Spider silk",
  sub: "dragline silk and its recombinant copies", img: "spidersilk",
  hook: "Not the strongest fibre, but the toughest: it stretches far while resisting hard, so it absorbs more energy before breaking than steel or aramid. Spiders are territorial and eat each other, so it cannot be farmed — it has to be brewed.",
  stats: [["Toughness", "~3× aramid"], ["Extension", "~30–40%"], ["Production", "recombinant, not farmed"]],
  uses: "Experimental textiles and composites, sutures and scaffolds, research into tough fibres.",
  link: "https://en.wikipedia.org/wiki/Spider_silk"
},
{
  id: "felt", cat: "fibre", name: "Wool felt",
  sub: "non-woven matted fibre", img: "felt",
  hook: "Fabric with no weave at all. Wool scales ratchet past each other under heat, moisture and pressure and then cannot slide back, locking into a solid sheet. It has no grain, so it never frays and cuts in any direction.",
  stats: [["Structure", "no weave, no grain"], ["Edges", "never fray"], ["Age", "oldest known fabric"]],
  uses: "Piano hammers and dampers, gaskets and washers, polishing wheels, yurts, hats, acoustic panels.",
  link: "https://en.wikipedia.org/wiki/Felt"
},
{
  id: "paracord", cat: "fibre", name: "Paracord 550",
  sub: "nylon kernmantle cord", img: "paracord",
  hook: "A braided nylon sheath over seven to nine twisted inner yarns, each of which is itself usable cordage. Nylon stretches roughly a third before it breaks, which is exactly what you want under a parachute canopy and nowhere near a winch.",
  stats: [["Breaking strength", "550 lb / 2.5 kN"], ["Stretch", "~30%"], ["Core", "7–9 separate yarns"]],
  uses: "Parachute suspension lines, general lashing, repairs, bracelets, improvised shelter.",
  link: "https://en.wikipedia.org/wiki/Parachute_cord"
},
{
  id: "polyesterfab", cat: "fibre", name: "Polyester (Dacron)",
  sub: "PET fibre", img: "polyesterfab",
  hook: "Nylon's quieter rival and the reason natural rope disappeared from working boats. It barely creeps under sustained load, is unbothered by water and shrugs off sunlight far better than nylon does.",
  stats: [["Creep", "very low"], ["Wet strength", "unchanged"], ["UV", "good resistance"]],
  uses: "Halyards and standing rigging, sailcloth, webbing and slings, clothing, tyre cord.",
  link: "https://en.wikipedia.org/wiki/Polyester"
},
{
  id: "wirerope", cat: "fibre", name: "Wire rope",
  sub: "laid steel strand", img: "wirerope",
  hook: "A solid steel bar of the same section cannot bend around a sheave; a few hundred thin wires can, because each one only has to flex a little. Spiral the strands against the lay of the wires and the whole rope resists unwinding under load.",
  stats: [["Construction", "e.g. 6×19, 6×36"], ["Why it bends", "thin wires, low strain"], ["Invented", "1830s, mining"]],
  uses: "Cranes and lifts, cable cars and bridges, winches, rigging, control cables.",
  link: "https://en.wikipedia.org/wiki/Wire_rope"
},
{
  id: "glassfibre", cat: "fibre", name: "Glass fibre",
  sub: "E-glass and S-glass", img: "glassfibre",
  hook: "Bulk glass is brittle because of the flaws on its surface; drawn into a filament ten microns across, there is hardly any surface left to flaw. The same material that shatters as a pane becomes a fibre you can tie in a knot.",
  stats: [["Modulus", "~72 GPa (E-glass)"], ["Diameter", "~5–20 µm"], ["Weakness", "abrasion, moisture"]],
  uses: "GRP hulls and panels, circuit board laminate, insulation, pressure vessels, ducting.",
  link: "https://en.wikipedia.org/wiki/Glass_fiber"
},
{
  id: "basalt", cat: "fibre", name: "Basalt fibre",
  sub: "melt-spun volcanic rock", img: "basalt",
  hook: "Crushed basalt melted at 1450 °C and drawn straight into filament — one raw material, no additives, no binders. It outperforms E-glass on temperature and alkali resistance, which matters in concrete.",
  stats: [["Service", "−260 to 700 °C"], ["Input", "rock, nothing else"], ["vs. E-glass", "stiffer, more alkali-proof"]],
  uses: "Concrete reinforcement, fire barriers, pipe wrap, automotive composites, insulation.",
  link: "https://en.wikipedia.org/wiki/Basalt_fiber"
},
{
  id: "nomex", cat: "fibre", name: "Nomex",
  sub: "meta-aramid", img: "nomex",
  hook: "Kevlar's sibling with the bonds in the meta position instead of para, which trades tensile strength for heat. It does not melt or drip; it thickens and chars, and the char is what keeps the flame off skin.",
  stats: [["Behaviour in fire", "chars, never melts"], ["Continuous use", "~200 °C"], ["Also made as", "honeycomb core"]],
  uses: "Firefighting and racing suits, flight gloves, electrical insulation paper, honeycomb cores.",
  link: "https://en.wikipedia.org/wiki/Nomex"
},
{
  id: "ripstop", cat: "fibre", name: "Ripstop",
  sub: "a weave, not a material", img: "ripstop",
  hook: "The only entry here that is pure geometry. Thicker yarns woven in every few millimetres do nothing until something tears — then the tear runs to the next grid line and stops, so a hole stays a hole.",
  stats: [["Grid spacing", "~5–8 mm"], ["Weight cost", "almost none"], ["Effect", "arrests tear propagation"]],
  uses: "Parachutes and paragliders, tents and sails, hot air balloons, outdoor clothing, flags.",
  link: "https://en.wikipedia.org/wiki/Ripstop"
},
{
  id: "sailcloth", cat: "fibre", name: "Laminate sailcloth",
  sub: "scrim between films", img: "sailcloth",
  hook: "A racing sail fails by stretching, not by tearing, so modern cloth is a sandwich: load-bearing yarns of aramid, carbon or UHMWPE laid exactly along the computed load paths and trapped between polyester films.",
  stats: [["Design driver", "stretch, not strength"], ["Yarns", "aligned to load paths"], ["Build", "film–scrim–film"]],
  uses: "Racing sails, kites and wings, lightweight packs, inflatable structures.",
  link: "https://en.wikipedia.org/wiki/Sailcloth"
},
{
  id: "nylonrope", cat: "fibre", name: "Nylon double braid",
  sub: "polyamide rope", img: "nylonrope",
  hook: "Chosen for the opposite of what a rope is usually judged on: it stretches. Up to 30% before it breaks, which turns a snatch load into a long gentle pull — and makes a parted line a lethal whip, because all that stored energy comes back.",
  stats: [["Stretch at break", "~25–30%"], ["Wet strength", "−10 to −15%"], ["Danger", "stored energy on failure"]],
  uses: "Anchor and mooring rode, tow and recovery straps, climbing slings, winch snatch lines.",
  link: "https://en.wikipedia.org/wiki/Rope"
},
{
  id: "pprope", cat: "fibre", name: "Polypropylene rope",
  sub: "PP monofilament or split film", img: "pprope",
  swatch: { pattern: "fiber", colors: ["#d9b321", "#f3dd71", "#9a7c10"] },
  hook: "The only common rope that floats, which is why a throwline is always this garish yellow. The price is sunlight: a few seasons of UV and it turns to powder in your hand, and it melts at a temperature a hand-over-hand descent can reach.",
  stats: [["Density", "0.91 g/cm³ — floats"], ["UV life", "1–3 seasons"], ["Melts", "~165 °C"]],
  uses: "Rescue throwlines, water-ski ropes, barrier rope, agriculture and baling.",
  link: "https://en.wikipedia.org/wiki/Polypropylene"
},
{
  id: "bungee", cat: "fibre", name: "Shock cord",
  sub: "rubber strands in a braided sleeve", img: "bungee",
  hook: "A bundle of natural rubber threads inside a woven jacket that limits how far it can go. The jacket takes the abrasion and sets the stretch limit; the rubber supplies the force. Jump off a bridge on one and it decelerates you over several seconds at well under 3 g.",
  stats: [["Stretch", "100–200%"], ["Core", "natural rubber"], ["Peak load", "~2–3 g on a jump"]],
  uses: "Bungee jumping, cargo nets and tie-downs, tent poles, kayak deck rigging.",
  link: "https://en.wikipedia.org/wiki/Bungee_cord"
},
{
  id: "kernmantle", cat: "fibre", name: "Kernmantle rope",
  sub: "twisted nylon core in a woven sheath", img: "kernmantle",
  hook: "Two ropes in one: a core that carries essentially all the load and a sheath that protects it and does almost nothing else. A dynamic rope is rated not by breaking strength but by how many standard falls it survives — it is a consumable energy absorber.",
  stats: [["Core carries", "~70% of load"], ["Impact force", "<9 kN by standard"], ["Rated in", "UIAA falls held"]],
  uses: "Climbing and caving, rope access, rescue, arborist work.",
  link: "https://en.wikipedia.org/wiki/Kernmantle_rope"
},
{
  id: "webbing", cat: "fibre", name: "Tubular webbing",
  sub: "flat-woven nylon tube", img: "webbing",
  swatch: { pattern: "weave", colors: ["#3a3d42", "#6d7278", "#1e2024"] },
  hook: "Woven as a continuous tube on a shuttle loom rather than a strip folded over. There is no seam to abrade, it drapes flat over an edge instead of rolling onto a corner, and a hitch tied in it does not want to slip.",
  stats: [["Strength", "~18 kN in 25 mm"], ["Weave", "seamless tube"], ["Edge load", "spread flat"]],
  uses: "Climbing anchors and slings, rescue harnesses, slacklines, load restraint.",
  link: "https://en.wikipedia.org/wiki/Webbing"
},
{
  id: "seatbelt", cat: "fibre", name: "Seat-belt webbing",
  sub: "polyester, engineered to elongate", img: "seatbelt",
  hook: "A belt that did not stretch would break ribs. This one is woven to give 8–14% at full load, which adds a few extra centimetres of stopping distance at exactly the moment they matter most, and polyester is used because it does not lose that behaviour when damp.",
  stats: [["Elongation", "8–14% at rated load"], ["Strength", ">26 kN"], ["Fibre", "polyester, not nylon"]],
  uses: "Vehicle and aircraft restraints, child seats, racing harnesses.",
  link: "https://en.wikipedia.org/wiki/Seat_belt"
},
{
  id: "velcro", cat: "fibre", name: "Hook-and-loop",
  sub: "Velcro, nylon hooks and loops", img: "velcro",
  hook: "Copied directly from burdock burrs stuck to a dog in 1941. Thousands of stiff hooks catch a felt of soft loops; each bond is trivial, the sum is strong in shear and weak in peel, which is why you pull it apart from a corner.",
  stats: [["Shear strength", "~100 kN/m²"], ["Peel", "weak, by design"], ["Cycles", "~10,000"]],
  uses: "Clothing and shoes, cable management, medical braces, spacecraft interiors.",
  link: "https://en.wikipedia.org/wiki/Hook-and-loop_fastener"
},
{
  id: "denim", cat: "fibre", name: "Denim",
  sub: "indigo-dyed cotton twill", img: "denim",
  hook: "Indigo will not penetrate cotton — it sits in rings on the outside of the yarn. Every crease wears that ring away and exposes white fibre underneath, so the fabric records exactly how its owner moved. The twill weave is what makes it fade in diagonal lines.",
  stats: [["Weave", "3×1 right-hand twill"], ["Dye", "ring, not through"], ["Weight", "10–21 oz/yd²"]],
  uses: "Jeans and workwear, upholstery, jackets.",
  link: "https://en.wikipedia.org/wiki/Denim"
},
{
  id: "cordura", cat: "fibre", name: "Cordura",
  sub: "high-tenacity air-jet textured nylon 6,6", img: "cordura",
  hook: "Abrasion resistance comes from the yarn, not the weave: the filaments are tangled by an air jet so they grab each other, and a snagged fibre pulls its neighbours in instead of pulling out. Several times the life of standard nylon of the same weight.",
  stats: [["Denier", "500–1000 typical"], ["Abrasion", "~4× standard nylon"], ["Introduced", "1929, as rayon"]],
  uses: "Backpacks and luggage, motorcycle gear, military packs, boot panels.",
  link: "https://en.wikipedia.org/wiki/Cordura"
},
{
  id: "monofil", cat: "fibre", name: "Nylon monofilament",
  sub: "single-strand extruded line", img: "monofil",
  swatch: { pattern: "fiber", colors: ["#c3ccd2", "#eef3f6", "#8f9aa2"] },
  hook: "A single smooth strand rather than a bundle, so it is nearly invisible in water and knots bite into themselves. It also absorbs water and stretches, which is forgiving on a strike and infuriating when you need to feel the bottom.",
  stats: [["Stretch", "~20–30%"], ["Refractive index", "close to water"], ["Weakness", "UV, ~1 season"]],
  uses: "Fishing line, string trimmers, surgical suture, brush bristles, netting.",
  link: "https://en.wikipedia.org/wiki/Monofilament_fishing_line"
},
{
  id: "viscose", cat: "fibre", name: "Viscose rayon",
  sub: "regenerated cellulose", img: "viscose",
  hook: "Neither natural nor synthetic: wood pulp is dissolved into a thick orange syrup and squirted back out as fibre. The first manufactured fibre, sold as artificial silk from 1905 — and it still drapes like silk, because the chemistry really is the same cellulose.",
  stats: [["Source", "wood pulp"], ["Wet strength", "loses ~50%"], ["Since", "1905"]],
  uses: "Linings and dress fabric, tyre cord historically, wipes, cigarette filters.",
  link: "https://en.wikipedia.org/wiki/Viscose"
},
{
  id: "lyocell", cat: "fibre", name: "Lyocell",
  sub: "solvent-spun cellulose, Tencel", img: "lyocell",
  hook: "Viscose redone with the chemistry fixed. The pulp dissolves in a non-toxic amine oxide that is recovered and reused at over 99%, and the fibre comes out stronger than viscose wet or dry, with a smooth surface that resists bacteria.",
  stats: [["Solvent recovery", ">99%"], ["Wet strength", "far better than viscose"], ["Moisture", "absorbs 50% more than cotton"]],
  uses: "Shirting and bedding, denim blends, wipes, medical textiles.",
  link: "https://en.wikipedia.org/wiki/Lyocell"
},
{
  id: "acrylicfibre", cat: "fibre", name: "Acrylic fibre",
  sub: "polyacrylonitrile", img: "acrylicfibre",
  hook: "Solution-dyed before it is even a fibre, so the colour is in the polymer, not on it — an acrylic awning holds its colour outdoors for a decade where a dyed fabric fades in two seasons. It is also the precursor that becomes carbon fibre when you burn everything else off.",
  stats: [["UV life", "10+ years solution-dyed"], ["Warmth", "wool-like, lighter"], ["Also", "precursor to carbon fibre"]],
  uses: "Awnings and marine canvas, knitwear, outdoor upholstery, fake fur.",
  link: "https://en.wikipedia.org/wiki/Acrylic_fiber"
},
{
  id: "merino", cat: "fibre", name: "Merino wool",
  sub: "fine crimped keratin fibre", img: "merino",
  hook: "Each fibre is crimped and scaled, trapping air so it insulates even soaked, and the scales break down the bacteria that make sweat smell — it is the only common fibre you can wear for a week. Under 19 µm it stops prickling the skin.",
  stats: [["Diameter", "15–24 µm"], ["Moisture held", "~30% of its weight"], ["Odour", "naturally resisted"]],
  uses: "Base layers and socks, suiting, insulation, mattress fill.",
  link: "https://en.wikipedia.org/wiki/Merino"
},
{
  id: "mohair", cat: "fibre", name: "Mohair",
  sub: "angora goat hair", img: "mohair",
  hook: "A hair with almost no crimp and flat scales, so it reflects light like silk and takes dye to a brilliance wool cannot reach. It is also unusually resilient — a mohair plush pile stands back up, which is why cinema seats and teddy bears used it.",
  stats: [["Diameter", "25–45 µm"], ["Lustre", "silk-like"], ["Resilience", "pile recovers"]],
  uses: "Suiting and upholstery, doll and teddy plush, ski climbing skins, violin bow hair substitute.",
  link: "https://en.wikipedia.org/wiki/Mohair"
},
{
  id: "ramie", cat: "fibre", name: "Ramie",
  sub: "Boehmeria nivea bast fibre", img: "ramie",
  hook: "One of the strongest natural fibres, and almost alone in getting stronger when wet. It was used for Egyptian mummy wrappings and still holds up where cotton rots, but it is stiff and brittle, so it is nearly always blended.",
  stats: [["Wet strength", "increases"], ["Rot resistance", "very high"], ["Flaw", "brittle, low elasticity"]],
  uses: "Blended shirting, canvas and fire hose historically, upholstery, paper.",
  link: "https://en.wikipedia.org/wiki/Ramie"
},
{
  id: "kapok", cat: "fibre", name: "Kapok",
  sub: "hollow seed floss from Ceiba pentandra", img: "kapok",
  hook: "Each fibre is a sealed hollow tube, so it floats eight times better than cork by weight and holds thirty times its own weight in water out. It filled every life jacket until foam arrived — but it is too slippery and brittle to spin into yarn.",
  stats: [["Buoyancy", "~5× cork by volume"], ["Density", "~0.03 g/cm³"], ["Spinnable", "no"]],
  uses: "Life jackets historically, pillow and mattress fill, zafu cushions, oil-spill absorbent.",
  link: "https://en.wikipedia.org/wiki/Kapok_fibre"
},
{
  id: "rockwool", cat: "fibre", name: "Mineral wool",
  sub: "spun basalt and slag fibre", img: "rockwool",
  hook: "Molten rock thrown off a spinning wheel into fibres, the same way candy floss is made. The result insulates, absorbs sound, and simply does not burn — it stays intact at 1000 °C, so it is the fire-stopping insulation rather than the cheap one.",
  stats: [["Melting", ">1000 °C"], ["λ", "~0.035 W/m·K"], ["Also", "acoustic absorber"]],
  uses: "Building and pipe insulation, fire stopping, acoustic panels, hydroponic growing media.",
  link: "https://en.wikipedia.org/wiki/Mineral_wool"
},
{
  id: "wiremesh", cat: "fibre", name: "Woven wire cloth",
  sub: "Dutch-weave stainless mesh", img: "wiremesh",
  hook: "A plain square weave filters down to about 25 µm and no further. Dutch weave uses coarse wires one way and very fine wires packed tight the other, so the holes become triangular slots — 2 µm filtration in a cloth you can still clean and reuse.",
  stats: [["Plain weave", "to ~25 µm"], ["Dutch weave", "to ~2 µm"], ["Reusable", "backflush and reuse"]],
  uses: "Hydraulic and polymer melt filters, sieve analysis, EMI screening, security grilles.",
  link: "https://en.wikipedia.org/wiki/Woven_wire_mesh"
},
{
  id: "geotextile", cat: "fibre", name: "Geotextile",
  sub: "needle-punched or woven polypropylene", img: "geotextile",
  hook: "Buried fabric that keeps two layers of soil from mixing while letting water through. A road built on soft ground over geotextile needs a third less stone, because the aggregate stops being pressed into the mud — the fabric is cheaper than the rock it saves.",
  stats: [["Permittivity", "water through, soil not"], ["Aggregate saved", "~30%"], ["Design life", "100 years buried"]],
  uses: "Road and rail subgrade, landfill liners, erosion control, drainage, French drains.",
  link: "https://en.wikipedia.org/wiki/Geotextile"
},
{
  id: "down", cat: "fibre", name: "Goose down",
  sub: "three-dimensional plumule clusters", img: "down",
  hook: "Not a fibre but a tiny three-dimensional cluster with no central shaft, so it traps more still air per gram than anything manufactured. Still the best insulation by weight ever measured — and it fails completely when wet, which nothing has fixed.",
  stats: [["Fill power", "550–900 in³/oz"], ["Warmth/weight", "unbeaten"], ["Wet", "collapses"]],
  uses: "Sleeping bags, duvets, expedition clothing.",
  link: "https://en.wikipedia.org/wiki/Down_feather"
},
{
  id: "primaloft", cat: "fibre", name: "Synthetic down",
  sub: "fine crimped polyester microfibre", img: "primaloft",
  swatch: { pattern: "fiber", colors: ["#dfe3e7", "#ffffff", "#b2b8be"] },
  hook: "Developed for the US Army when they wanted something that worked soaked. It gets about 70% of down's warmth per gram and keeps most of it when wet, because polyester holds no water — a straight trade of peak performance for reliability.",
  stats: [["vs down", "~70% warmth/weight"], ["Wet", "retains most loft"], ["Dries", "hours, not days"]],
  uses: "Insulated jackets and sleeping bags, work wear, marine clothing.",
  link: "https://en.wikipedia.org/wiki/Synthetic_fiber"
},
{
  id: "emifabric", cat: "fibre", name: "Conductive fabric",
  sub: "silver- or nickel-plated nylon ripstop", img: "emifabric",
  swatch: { pattern: "weave", colors: ["#a8aeb4", "#dfe4e8", "#71777d"] },
  hook: "A textile that is also a Faraday cage: metal plated onto each fibre gives a cloth that drapes and sews but blocks 50–80 dB of radio. Silver versions also kill odour-causing bacteria, which is how it ended up in socks.",
  stats: [["Shielding", "50–80 dB"], ["Surface resistance", "<0.1 Ω/sq"], ["Plating", "Ag, Ni or Cu"]],
  uses: "EMI gaskets and shielding bags, ESD garments, touchscreen gloves, medical electrodes.",
  link: "https://en.wikipedia.org/wiki/Electromagnetic_shielding"
},
{
  id: "horsehair", cat: "fibre", name: "Horsehair",
  sub: "tail hair, woven or in hanks", img: "horsehair",
  hook: "A long, springy, scaled hair that two trades still cannot replace. Woven into interlining it holds a jacket's shape where no synthetic will; in a bow, the microscopic scales grip rosin and make a string speak.",
  stats: [["Length", "to ~1 m"], ["Surface", "scaled, grips rosin"], ["Replacement", "none accepted"]],
  uses: "Violin and cello bows, bespoke tailoring canvas, upholstery stuffing, plaster reinforcement.",
  link: "https://en.wikipedia.org/wiki/Horsehair"
},
{
  id: "catgut", cat: "fibre", name: "Catgut",
  sub: "twisted serosa from sheep intestine", img: "catgut",
  hook: "Never from cats. Cleaned and twisted sheep intestine makes a string with a warmth and complexity of tone that steel has never quite matched, and a suture that the body dissolves on its own schedule — the first self-removing stitch.",
  stats: [["Source", "sheep or goat serosa"], ["Suture", "absorbed in 60–90 days"], ["Humidity", "tunes with the weather"]],
  uses: "Baroque and classical instrument strings, racquets historically, absorbable sutures.",
  link: "https://en.wikipedia.org/wiki/Catgut"
},
{
  id: "technora", cat: "fibre", name: "Technora",
  sub: "para-aramid copolymer", img: "technora",
  swatch: { pattern: "fiber", colors: ["#c9a63f", "#f0d98a", "#8e7122"] },
  hook: "An aramid built to survive the things that eat aramids. Swapping part of the backbone for an ether link makes it shrug off the steam, acid and seawater that hydrolyse Kevlar, while keeping most of the strength.",
  stats: [["Tensile", "~3.4 GPa"], ["Modulus", "~70 GPa"], ["Hot water", "far better than standard aramid"]],
  uses: "Brake and hydraulic hose reinforcement, timing belt cord, optical cable strength members, racing yacht lines.",
  link: "https://en.wikipedia.org/wiki/Technora"
},
{
  id: "m5fibre", cat: "fibre", name: "M5 (PIPD)",
  sub: "poly(pyridobisimidazole)", img: "m5fibre",
  swatch: { pattern: "fiber", colors: ["#d8cf9e", "#f4efcf", "#a39a6a"] },
  hook: "The one rigid-rod fibre designed to hold hydrogen bonds sideways between its chains, so it resists being squashed instead of only being pulled. On paper it beat everything. It never left the pilot plant.",
  stats: [["Predicted modulus", "300–450 GPa"], ["Compression", "best of the rigid rods"], ["Status", "never commercialised"]],
  uses: "Armour and cable prototypes only; the benchmark everyone cites and nobody can buy.",
  link: "https://en.wikipedia.org/wiki/M5_fiber"
},
{
  id: "basofil", cat: "fibre", name: "Melamine fibre",
  sub: "melamine-formaldehyde, Basofil", img: "basofil",
  swatch: { pattern: "fiber", colors: ["#e2ddd2", "#f8f6f1", "#b4ae9f"] },
  hook: "A thermoset spun as a fibre, which means it has no melting point to reach. It chars, holds its shape and keeps heat off the skin for a fraction of the price of aramid. It is simply too weak to be the strength of the garment.",
  stats: [["Limiting oxygen index", "~32%"], ["Continuous use", "190–200 °C"], ["Tenacity", "low, always blended"]],
  uses: "Firefighter hoods and liners, aircraft seat fire blocking, hot gas filter felts, mattress barriers.",
  link: "https://en.wikipedia.org/wiki/Melamine_fiber"
},
{
  id: "preoxpan", cat: "fibre", name: "Oxidised PAN",
  sub: "stabilised polyacrylonitrile, Panox", img: "preoxpan",
  swatch: { pattern: "fiber", colors: ["#2a2b2d", "#5e6063", "#131415"] },
  hook: "Carbon fibre stopped halfway. Heat acrylic fibre in air and it cyclises into a black, soft, infusible ladder polymer at about 62% carbon. Carry on and you get carbon fibre; stop here and you get something that stays textile and will not burn.",
  stats: [["Carbon", "~62%"], ["Limiting oxygen index", "~45%"], ["Shrinkage in flame", "almost none"]],
  uses: "Fire blankets, flame barriers under aircraft and vehicle seats, firefighter underlayers, friction material preforms.",
  link: "https://en.wikipedia.org/wiki/Polyacrylonitrile"
},
{
  id: "silicafibre", cat: "fibre", name: "High-silica fibre",
  sub: "acid-leached glass fibre, 96–99% SiO₂", img: "silicafibre",
  swatch: { pattern: "weave", colors: ["#dcdfe2", "#f6f8f9", "#aeb3b8"] },
  hook: "Ordinary glass cloth soaked in acid until everything except the silica has been washed out of it. What is left behaves like quartz but drapes like a textile: it takes a welding spark or a rocket exhaust and stays a cloth.",
  stats: [["Silica", "96–99%"], ["Continuous use", "~1000 °C"], ["Short excursions", "~1600 °C"]],
  uses: "Welding blankets and curtains, furnace gaskets, ablative liners, exhaust wrap.",
  link: "https://en.wikipedia.org/wiki/Glass_fiber"
},
{
  id: "ptfethread", cat: "fibre", name: "PTFE thread",
  sub: "expanded PTFE sewing thread, Tenara", img: "ptfethread",
  swatch: { pattern: "fiber", colors: ["#eef1f3", "#ffffff", "#c2c7cb"] },
  hook: "Awnings used to fail at the stitching, not the cloth, because polyester thread sitting proud of the surface takes the full UV dose. This thread is chemically indifferent to sunlight, chlorine and salt, so the seam now outlives the fabric it holds together.",
  stats: [["UV life", "effectively unlimited"], ["Strength", "below polyester"], ["Handling", "slippery, needs tension tuning"]],
  uses: "Marine canvas, awnings, tensile structures, pool covers, outdoor furniture.",
  link: "https://en.wikipedia.org/wiki/Polytetrafluoroethylene"
},
{
  id: "kuralon", cat: "fibre", name: "PVA fibre",
  sub: "polyvinyl alcohol, Kuralon", img: "kuralon",
  swatch: { pattern: "fiber", colors: ["#e6e9ec", "#fbfcfd", "#b7bcc1"] },
  hook: "The fibre you can dissolve on purpose. Grades are made to vanish in water at a chosen temperature, so you knit with a sacrificial yarn and wash it out afterwards to leave openwork no loom could make. Other grades are the asbestos replacement in cement board.",
  stats: [["Dissolving grades", "tuned 20–90 °C"], ["Tenacity", "up to ~1.6 GPa"], ["Alkali", "stable in cement"]],
  uses: "Sacrificial yarn in knitting and embroidery, fibre cement sheet, concrete reinforcement, water-soluble packaging.",
  link: "https://en.wikipedia.org/wiki/Polyvinyl_alcohol"
},
{
  id: "cashmere", cat: "fibre", name: "Cashmere",
  sub: "goat undercoat down", img: "cashmere",
  hook: "Not the goat's outer hair but the down beneath it, grown for a Mongolian winter and combed out in spring. At 14–19 µm it bends under its own weight, which is why it feels like nothing, and why one goat yields a scarf rather than a coat.",
  stats: [["Diameter", "14–19 µm"], ["Yield", "100–200 g per goat per year"], ["Warmth", "~3× wool by weight"]],
  uses: "Knitwear, shawls, blended suiting, and the overgrazing problem on the Mongolian steppe.",
  link: "https://en.wikipedia.org/wiki/Cashmere_wool"
},
{
  id: "qiviut", cat: "fibre", name: "Qiviut",
  sub: "muskox down", img: "qiviut",
  hook: "The warmest animal fibre anyone harvests, and it is collected rather than shorn: muskoxen shed it in sheets each spring and it is picked off the tundra and the fences. It has almost no scales, so unlike wool it will never felt or shrink.",
  stats: [["Diameter", "11–13 µm"], ["Warmth", "~8× wool by weight"], ["Yield", "~2.5 kg per animal, shed"]],
  uses: "Arctic knitwear, Alaskan and Canadian co-operative cottage industry, very expensive hats.",
  link: "https://en.wikipedia.org/wiki/Qiviut"
},
{
  id: "sinew", cat: "fibre", name: "Sinew",
  sub: "dried collagen tendon", img: "sinew",
  hook: "Shred a dried tendon and you have thread that shrinks as it dries. Bind a joint wet and it pulls itself tight; the collagen that is not fibre is hide glue, so it also makes its own adhesive. The oldest self-tightening fastener there is.",
  stats: [["Shrinkage on drying", "~10%"], ["Strength", "~100 MPa dry"], ["Wet", "goes soft, re-sets on drying"]],
  uses: "Bowstrings and sinew-backed bows, hafting stone tools, hand sewing, drum lacing.",
  link: "https://en.wikipedia.org/wiki/Tendon"
},
{
  id: "rawhide", cat: "fibre", name: "Rawhide",
  sub: "untanned dehaired hide", img: "rawhide",
  swatch: { pattern: "grain", colors: ["#c9a870", "#e8d3a8", "#95784a"] },
  hook: "Leather that was never tanned: dehaired and dried hard under tension. Lace a frame with it wet and the drying shrink locks the joint with no knot and no fastener — the material is the clamp. Soak it again and the joint comes apart.",
  stats: [["Shrink", "tightens as it dries"], ["Dry state", "rigid, almost horn-like"], ["Weakness", "water undoes it"]],
  uses: "Snowshoes, drum heads, chair seats, lacrosse sticks, saddle trees, laminated armour.",
  link: "https://en.wikipedia.org/wiki/Rawhide_(material)"
},
{
  id: "harakeke", cat: "fibre", name: "Harakeke (New Zealand flax)",
  sub: "Phormium tenax leaf fibre, muka", img: "harakeke",
  hook: "Not a flax at all. The fibre is scraped out of the living leaf with the edge of a mussel shell, which strips the green away without cutting the strands — a tool choice that is also a technique, and the reason muka comes out silky rather than hairy.",
  stats: [["Wet strength", "holds up in water"], ["Extraction", "scraped, not retted"], ["Fineness", "spinnable by hand"]],
  uses: "Māori weaving — korowai cloaks, kete baskets, cordage; a 19th-century export rope trade.",
  link: "https://en.wikipedia.org/wiki/Phormium_tenax"
},
{
  id: "esparto", cat: "fibre", name: "Esparto grass",
  sub: "Stipa tenacissima", img: "esparto",
  hook: "A desert grass tough enough to be rope and short enough to be paper. Victorian Britain printed on it by the shipload because it gave a bulky, opaque sheet from a plant nobody had to farm: it grows on ground that supports nothing else.",
  stats: [["Fibre length", "~1.5 mm, short"], ["Paper", "bulky and opaque"], ["Habitat", "semi-arid, unirrigated"]],
  uses: "Cordage and mats, espadrille soles, baskets, book and printing papers.",
  link: "https://en.wikipedia.org/wiki/Esparto"
},
{
  id: "raffia", cat: "fibre", name: "Raffia",
  sub: "Raphia palm leaf epidermis", img: "raffia",
  hook: "A flat fibre in a world of round ones. It is peeled off the leaf as a ribbon, so it lies down, grips itself and ties without cutting into what it holds — exactly what a grafted stem or a woven hat brim needs.",
  stats: [["Section", "flat ribbon, not round"], ["Length", "up to ~1.5 m"], ["Wet", "pliable, dries firm"]],
  uses: "Garden and grafting ties, hats and baskets, Kuba cloth, millinery, florist work.",
  link: "https://en.wikipedia.org/wiki/Raffia_palm"
},
{
  id: "pina", cat: "fibre", name: "Piña",
  sub: "pineapple leaf fibre", img: "pina",
  hook: "Scraped out of pineapple leaves by hand, then knotted end to end — every single filament — to make a continuous thread. The cloth is stiff, translucent and faintly glassy, and the labour behind a metre of it is why it stayed ceremonial.",
  stats: [["Preparation", "hand-scraped, hand-knotted"], ["Handle", "stiff and translucent"], ["Source", "a by-product of fruit"]],
  uses: "Barong tagalog and formal Philippine dress, embroidery grounds, ecclesiastical cloth.",
  link: "https://en.wikipedia.org/wiki/Pi%C3%B1a"
},
{
  id: "laidrope", cat: "fibre", name: "Three-strand laid rope",
  sub: "twisted construction", img: "laidrope",
  swatch: { pattern: "fiber", colors: ["#b99a62", "#ddc694", "#866c3d"] },
  hook: "Nothing holds this rope together but opposing twist. Fibres are spun one way, yarns laid the other, strands the first way again — each level permanently trying to unwind the one above it, and the standoff is the rope. Let it unbalance and it hockles into a knot by itself.",
  stats: [["Lay", "right-hand by convention"], ["Splice", "strands tucked, no tools"], ["Vice", "torque, twist and hockling"]],
  uses: "Mooring and anchor lines, traditional rigging, hauling rope — the rope every knot book assumes.",
  link: "https://en.wikipedia.org/wiki/Rope"
},
{
  id: "doublebraid", cat: "fibre", name: "Double braid",
  sub: "braided core inside a braided cover", img: "doublebraid",
  swatch: { pattern: "weave", colors: ["#9aa4ad", "#d2dade", "#67707a"] },
  hook: "Two ropes sharing one job, each taking roughly half the load, and neither one twisting. The clever part is the splice: the core is buried inside its own cover, so pulling harder only locks it tighter — stronger than any knot you could tie in it.",
  stats: [["Load split", "~50/50 core and cover"], ["Splice strength", "95–100% of rope"], ["Torque", "balanced, none"]],
  uses: "Yacht sheets and halyards, arborist climbing lines, winch and rescue rope.",
  link: "https://en.wikipedia.org/wiki/Rope_splicing"
},
{
  id: "twelvestrand", cat: "fibre", name: "Twelve-strand hollow braid",
  sub: "single-braid construction", img: "twelvestrand",
  swatch: { pattern: "weave", colors: ["#cdd4d9", "#f0f4f6", "#99a1a8"] },
  hook: "A rope with nothing inside it, which is the point: a splice can be pushed down the middle of the rope itself. That is what makes a soft shackle possible — a loop of cord stronger than the steel shackle it replaces, that cannot dent a deck or take an eye out when it lets go.",
  stats: [["Carriers", "12, no core"], ["Splice", "buried in its own braid"], ["Soft shackle", "beats steel per gram"]],
  uses: "Soft shackles and lashings, winch lines, arborist rigging, rope-to-rope connections.",
  link: "https://en.wikipedia.org/wiki/Soft_shackle"
},
{
  id: "braidedline", cat: "fibre", name: "Braided fishing line",
  sub: "gel-spun UHMWPE, 4–8 carriers", img: "braidedline",
  swatch: { pattern: "fiber", colors: ["#4b6b55", "#86a892", "#2b4133"] },
  hook: "Near-zero stretch changes what fishing feels like: a fish mouthing the bait forty metres away arrives in your fingertips. It also means nothing absorbs a shock, so the rod and the knot have to, and the line quietly saws grooves in the rod guides.",
  stats: [["Stretch", "~3% or less"], ["Diameter", "about a third of mono"], ["Knots", "slips unless tied for it"]],
  uses: "Spinning and baitcasting mainline, jigging, kite and drone line, cut-resistant cord.",
  link: "https://en.wikipedia.org/wiki/Fishing_line"
},
{
  id: "kineticrope", cat: "fibre", name: "Kinetic recovery rope",
  sub: "double-braid nylon, high stretch", img: "kineticrope",
  swatch: { pattern: "fiber", colors: ["#b8572f", "#e08a5e", "#7d3519"] },
  hook: "A rope engineered to be stretchy, the opposite of every other rope here. The recovery vehicle takes a run-up, the rope stores that kinetic energy and hands it back, and a stuck truck floats out on a gentle pull where a steel cable would tear a bumper off.",
  stats: [["Stretch", "20–30% working"], ["Energy", "stores it, returns it"], ["Failure", "recoils — the dangerous part"]],
  uses: "Off-road vehicle recovery, agricultural and military towing; replaced snatch straps and steel cable.",
  link: "https://en.wikipedia.org/wiki/Kinetic_recovery_rope"
},
{
  id: "pianowire", cat: "fibre", name: "Music wire",
  sub: "cold-drawn high-carbon steel", img: "pianowire",
  hook: "Among the strongest steel sold by the kilometre, and it gets there by being pulled through holes. Each die squeezes the pearlite lamellae thinner and straighter until the wire is nearly a composite of itself — strength that drawing gives you, not heat treatment.",
  stats: [["Tensile", "2300–3000 MPa in fine sizes"], ["Carbon", "0.7–1.0%"], ["Route", "cold drawing, no quench"]],
  uses: "Piano and instrument strings, springs, cheese cutters, control cables, lock picks.",
  link: "https://en.wikipedia.org/wiki/Piano_wire"
},
{
  id: "rattan", cat: "fibre", name: "Rattan cane",
  sub: "split peel and core of a climbing palm", img: "rattan",
  hook: "A palm that climbs instead of standing, so its stem is solid, even in diameter and hundreds of metres long — the only plant that supplies long weaving stock without being sawn into it. Two materials come out of one stem: the glossy outer peel, cut into narrow strips and used wherever the weave has to take tension around a corner, and the soft inner core, which is extruded into round reed for baskets and takes a bend but no load. Steam or a soak makes it pliable and it sets hard as it dries, which is why a caned seat tightens on itself rather than going slack.",
  stats: [["Peel", "strong, glossy, takes the tension"], ["Core", "soft reed, bends but carries little"], ["Set", "woven wet, tightens as it dries"]],
  uses: "Caned chair seats and backs, baskets, furniture frames, walking sticks, bindings.",
  link: "https://en.wikipedia.org/wiki/Rattan"
},
{
  id: "willow", cat: "fibre", name: "Willow (osier)",
  sub: "one season of growth, cut in winter", img: "willow",
  hook: "Basketry willow is never timber: it is a single year of growth cut from a stooled bed in winter, graded by length and sorted to the millimetre, because a rod that tapers differently weaves differently. Boiling the rods in their own tannin before stripping gives buff; stripping them after a spring soak gives white; leaving the bark on gives brown. All of them are soaked again before use — dry willow snaps, wet willow bends to a radius no sawn wood will take, and the weave tightens as the rods shrink, which is why a basket is stiffer a week after it is made.",
  stats: [["Stock", "one season of growth, winter cut"], ["Soaked", "days before weaving, or it snaps"], ["Shrinks", "tighter than it was woven"]],
  uses: "Baskets, hurdles and fencing, living willow structures, coffins, garden furniture, fish traps.",
  link: "https://en.wikipedia.org/wiki/Salix_viminalis"
},
{
  id: "tatami", cat: "fibre", name: "Tatami rush (igusa)",
  sub: "soft rush woven over a pressed core", img: "tatami",
  hook: "A tatami mat is two materials: a thick compressed core of rice straw or board, and a facing of soft rush woven over it with hemp or cotton warp. The rush is a hollow tube full of pith, so the mat is springy, insulating and hygroscopic — it takes up damp in a humid summer and gives it back in winter, and it smells of hay for the first year. It is also a unit of measurement: rooms in Japan are counted in mats, not square metres. When the facing wears it is turned over, then re-faced on the same core.",
  stats: [["Facing", "igusa rush over straw or board"], ["Doubles as", "the unit a room is measured in"], ["Worn out", "flipped, then re-faced, not binned"]],
  uses: "Japanese flooring, tea rooms, judo and kendo halls, zabuton and futon bases.",
  link: "https://en.wikipedia.org/wiki/Tatami"
},
{
  id: "toquilla", cat: "fibre", name: "Toquilla straw",
  sub: "split palm shoot, boiled and sun-dried", img: "toquilla",
  hook: "The straw of the so-called Panama hat, which is Ecuadorian: fibre split by fingernail from the unopened shoot of Carludovica palmata, boiled, dried in the sun and then woven damp, because dry straw breaks and wet straw stretches. The weave is counted in rows per inch like a textile, and at the top grades there are more rows in a hat brim than in most shirting — a fine one is months of work by one pair of hands, woven in the cool of early morning. The finished hat is a single woven fabric with no seam anywhere in it.",
  stats: [["Split", "by fingernail from the leaf shoot"], ["Woven", "damp, in the cool of the morning"], ["Fine grades", "months of work, one weaver"]],
  uses: "Panama hats, fans and baskets, fine Ecuadorian and Peruvian weaving.",
  link: "https://en.wikipedia.org/wiki/Carludovica_palmata"
},
{
  id: "worsted", cat: "fibre", name: "Worsted yarn",
  sub: "combed, parallel, long staple only", img: "worsted",
  hook: "Worsted and woollen are not two kinds of sheep but two ways of handling the same fleece. Combing pulls the long fibres parallel and throws out the short ones as noil; spun tight, that gives a smooth dense yarn with little air in it, which makes cloth that is strong, holds a crease and shines slightly. Carding instead leaves the fibres crossed in every direction and spins them soft and full of air, which is why a tweed is warm and fuzzy and a suit length is not. The comb costs a third of the fleece and most of the price.",
  stats: [["Combed", "fibres parallel, shorts removed"], ["Loses", "about a third of the fleece as noil"], ["Cloth", "smooth, dense, holds a crease"]],
  uses: "Suiting and tailoring cloth, gabardine, fine knitting yarn, upholstery.",
  link: "https://en.wikipedia.org/wiki/Worsted"
},

/* ---------- FABRICS & CONSTRUCTIONS ---------- */
{
  id: "jacquard", cat: "fabric", name: "Jacquard weave",
  sub: "punched-card warp selection", img: "jacquard",
  hook: "Every warp thread gets its own hook, and a punched card decides which ones lift. That turned pattern into data in 1804, freed the weaver from the repeat entirely, and gave Babbage and then Hollerith the idea of the punched card.",
  stats: [["Control", "one card row per pick"], ["Repeat", "effectively unlimited"], ["Legacy", "the first stored program"]],
  uses: "Figured upholstery and damask, labels and ribbons, airbag fabric, carbon fibre preforms.",
  link: "https://en.wikipedia.org/wiki/Jacquard_machine"
},
{
  id: "leno", cat: "fabric", name: "Leno weave",
  sub: "crossed-warp gauze", img: "leno",
  hook: "Paired warp threads cross over each other between every pick, so each weft yarn is trapped in a twist rather than resting in a gap. That is how you get a fabric that is mostly holes and still cannot slide out of shape.",
  stats: [["Openness", "mostly air"], ["Slippage", "locked by the twist"], ["Cost", "slower than plain weave"]],
  uses: "Surgical gauze and bandage, shade cloth, plaster and render scrim, wallpaper backing, geogrid.",
  link: "https://en.wikipedia.org/wiki/Leno_weave"
},
{
  id: "triaxial", cat: "fabric", name: "Triaxial weave",
  sub: "three yarn sets at 60°", img: "triaxial",
  swatch: { pattern: "weave", colors: ["#2f3337", "#6b7177", "#181a1c"] },
  hook: "Ordinary cloth has two thread directions and no resistance to racking: pull it on the diagonal and the square becomes a parallelogram. Add a third set at sixty degrees and the shear has nowhere to go. The fabric holds its shape in its own plane.",
  stats: [["Yarn directions", "3 at 60°"], ["Shear stiffness", "far above biaxial"], ["Isotropy", "near-equal in plane"]],
  uses: "Sailcloth and kite skins, filter and screen fabric, balloon envelopes, composite reinforcement.",
  link: "https://en.wikipedia.org/wiki/Triaxial_weave"
},
{
  id: "doublecloth", cat: "fabric", name: "Double cloth",
  sub: "two fabrics woven at once", img: "doublecloth",
  hook: "One loom, two complete cloths, stitched to each other wherever the weaver swaps a thread from the top layer to the bottom. Stop swapping and the two layers separate: the pocket, the tube and the closed bag are woven, not sewn.",
  stats: [["Layers", "2 or more, simultaneous"], ["Join", "by thread exchange"], ["Reversible", "a different face each side"]],
  uses: "Reversible coats and blankets, Welsh and Jacquard tapestry, woven tubes, airbag and ducting fabric.",
  link: "https://en.wikipedia.org/wiki/Double_cloth"
},
{
  id: "terrypile", cat: "fabric", name: "Pile weave",
  sub: "terry and velvet construction", img: "terrypile",
  hook: "A second warp fed in slack and lifted over wires, so the fabric grows a third dimension off a flat loom. Leave the loops whole and you have a towel, where the surface area is the point. Shear them and you have velvet, where the cut ends are.",
  stats: [["Warps", "2, one slack"], ["Loops uncut", "towel, high absorbency"], ["Loops cut", "velvet and velour"]],
  uses: "Towels and robes, velvet and corduroy, upholstery plush, cleaning cloth.",
  link: "https://en.wikipedia.org/wiki/Pile_(textile)"
},
{
  id: "warpknit", cat: "fabric", name: "Warp knitting",
  sub: "tricot and raschel", img: "warpknit",
  hook: "Every warp end has its own needle and the loops interlock sideways along the row, not in a single running chain. Cut it and nothing unravels — the reason a ladder in tricot stays a hole rather than racing to the hem.",
  stats: [["Yarns", "one per needle"], ["Run resistance", "high, does not ladder"], ["Speed", "very fast, wide fabric"]],
  uses: "Lingerie and swimwear, powernet and mesh, mosquito and sports netting, car headliners, geogrid.",
  link: "https://en.wikipedia.org/wiki/Warp_knitting"
},
{
  id: "jersey", cat: "fabric", name: "Weft-knit jersey",
  sub: "single-bed loop structure", img: "jersey",
  hook: "A single yarn looped through itself in rows. It stretches a third of its length again with no elastic in it at all, because the loops simply straighten — that is why a knitted shirt fits where a woven one has to be tailored. Cut one loop and the whole row runs.",
  stats: [["Stretch", "30–50% with no elastane"], ["Edges", "curl, need hemming"], ["Failure", "one broken loop runs"]],
  uses: "T-shirts and underwear, sweatshirting, sportswear, medical tubular bandage.",
  link: "https://en.wikipedia.org/wiki/Jersey_(fabric)"
},
{
  id: "seamlessknit", cat: "fabric", name: "Whole-garment knitting",
  sub: "3D knitted to shape", img: "seamlessknit",
  hook: "The machine knits a finished three-dimensional garment — sleeves, body, neck — in one piece, so there are no cut panels and no seams to sew. Cutting flat cloth throws away 15 to 20% of it; this throws away nothing, which is the real argument.",
  stats: [["Seams", "none"], ["Cutting waste", "~0 vs 15–20%"], ["Shaping", "stitch by stitch in software"]],
  uses: "Seamless knitwear and hosiery, knitted shoe uppers, compression garments, medical sleeves.",
  link: "https://en.wikipedia.org/wiki/Knitting_machine"
},
{
  id: "spacerfabric", cat: "fabric", name: "Spacer fabric",
  sub: "3D knit with monofilament pile", img: "spacerfabric",
  hook: "Two knitted faces made at the same time and held apart by monofilaments standing between them. It cushions like foam but is open to air and water, springs back instead of taking a permanent dent, and goes through a washing machine.",
  stats: [["Thickness", "2–20 mm knitted in"], ["Recovery", "no permanent set"], ["Airflow", "open through the core"]],
  uses: "Mattress and car-seat tops, backpack straps, shoe uppers, orthopaedic padding, pressure-sore mattresses.",
  link: "https://en.wikipedia.org/wiki/Spacer_fabric"
},
{
  id: "fleece", cat: "fabric", name: "Polar fleece",
  sub: "napped double-knit polyester", img: "fleece",
  hook: "A polyester knit brushed until the fibre ends stand up, then shorn level, so the fabric is mostly trapped air. It was deliberately left unpatented in 1979, barely absorbs water, and is often spun from drinks bottles — but it sheds microfibre in every wash.",
  stats: [["Weight", "100–300 g/m²"], ["Water uptake", "~1% of its weight"], ["Problem", "microfibre shedding"]],
  uses: "Midlayers and jackets, blankets, pet bedding, linings.",
  link: "https://en.wikipedia.org/wiki/Polar_fleece"
},
{
  id: "nonwoven", cat: "fabric", name: "Spunbond-meltblown nonwoven",
  sub: "SMS web, no yarn at all", img: "nonwoven",
  hook: "Fabric with no spinning and no weaving: polymer goes straight from melt to web and is bonded where the fibres touch. The meltblown middle layer is fibres a few µm across — fine enough to catch what a weave never could, which is why it is the filter in a mask.",
  stats: [["Meltblown fibre", "1–5 µm"], ["Spunbond fibre", "15–35 µm"], ["Route", "melt to fabric in one line"]],
  uses: "Surgical gowns and masks, nappies and wipes, housewrap, geotextile, teabags.",
  link: "https://en.wikipedia.org/wiki/Nonwoven_fabric"
},
{
  id: "needlepunch", cat: "fabric", name: "Needle-punched felt",
  sub: "mechanically entangled web", img: "needlepunch",
  swatch: { pattern: "fiber", colors: ["#7e838a", "#b6bbc1", "#53585e"] },
  hook: "Thousands of barbed needles stab a loose web of fibre tens of times a second, dragging fibres down through the thickness. Nothing is spun, knitted, glued or melted — the fabric is held together purely by friction between tangled fibres.",
  stats: [["Punches", "up to ~2000 per cm²"], ["Binder", "none, friction only"], ["Thickness", "1–20 mm"]],
  uses: "Automotive carpet and insulation, filter felt, geotextile, papermaker felts, craft felt.",
  link: "https://en.wikipedia.org/wiki/Needle_felting"
},
{
  id: "electrospun", cat: "fabric", name: "Electrospun nanofibre mat",
  sub: "polymer drawn by a high-voltage field", img: "electrospun",
  hook: "A drop of polymer solution at twenty kilovolts tears itself into a whipping jet and lands as fibres a hundred times thinner than anything a spinneret makes. The result has a pore structure no textile route can reach — and it comes off the rig by the gram, not the tonne.",
  stats: [["Fibre diameter", "50–500 nm"], ["Voltage", "10–30 kV"], ["Limit", "production rate"]],
  uses: "Wound dressings and scaffolds, high-efficiency air filtration, battery separators, sensor membranes.",
  link: "https://en.wikipedia.org/wiki/Electrospinning"
},
{
  id: "tyvek", cat: "fabric", name: "Tyvek",
  sub: "flash-spun high-density polyethylene", img: "tyvek",
  hook: "Polyethylene dissolved under pressure and released, so the solvent flashes off and leaves a cloud of fibres that are pressed into a sheet. It looks like paper, tears like fabric, passes water vapour and stops liquid water, and you cannot write on it with a pencil.",
  stats: [["Fibre diameter", "0.5–10 µm"], ["Water", "liquid out, vapour through"], ["Tear", "very high for paper"]],
  uses: "Housewrap, courier envelopes, sterile medical packaging, protective coveralls, wristbands, maps.",
  link: "https://en.wikipedia.org/wiki/Tyvek"
},
{
  id: "stitchbond", cat: "fabric", name: "Non-crimp fabric",
  sub: "stitched multiaxial reinforcement", img: "stitchbond",
  swatch: { pattern: "ribbon", colors: ["#3b3f44", "#787f87", "#1f2225"] },
  hook: "Weaving makes every fibre go over and under, and a bent fibre is a weaker fibre. Here the layers are laid dead straight at whatever angles the part needs and held with a light stitching yarn, so the reinforcement is as strong as the fibre actually is.",
  stats: [["Crimp", "none"], ["Strength gain", "~10–15% over woven"], ["Angles", "0/90/±45 as laid"]],
  uses: "Wind turbine blades, boat hulls, automotive and rail composite panels.",
  link: "https://en.wikipedia.org/wiki/Fibre-reinforced_plastic"
},
{
  id: "woven3d", cat: "fabric", name: "3D woven preform",
  sub: "through-thickness yarn architecture", img: "woven3d",
  swatch: { pattern: "weave", colors: ["#23262a", "#5a5f65", "#101214"] },
  hook: "A stack of flat plies delaminates because there is nothing holding one ply to the next except resin. Weave yarns through the thickness and there is no plane to split along: the part comes off the loom as a shape, and the resin is only filler.",
  stats: [["Yarn directions", "3, including Z"], ["Delamination", "designed out"], ["Form", "near-net shape off the loom"]],
  uses: "Jet engine fan blades and cases, rocket nozzles, stiffened panels, I-beam and joint preforms.",
  link: "https://en.wikipedia.org/wiki/Woven_fabric"
},
{
  id: "opwairbag", cat: "fabric", name: "One-piece woven airbag",
  sub: "bag woven closed on a Jacquard loom", img: "opwairbag",
  hook: "A curtain airbag has to hold pressure for several seconds through a rollover, and a sewn seam is a row of holes waiting to open. So the bag is woven as a bag — two layers that merge into one wherever the edge should be. Nothing is stitched, because nothing is cut.",
  stats: [["Seams", "woven, not sewn"], ["Hold time", "seconds, not milliseconds"], ["Loom", "Jacquard, double cloth"]],
  uses: "Side curtain airbags, inflatable slides and rafts, high-pressure inflatable structures.",
  link: "https://en.wikipedia.org/wiki/Airbag"
},
{
  id: "ptfeglass", cat: "fabric", name: "PTFE-coated glass fabric",
  sub: "woven glass fibre in fluoropolymer", img: "ptfeglass",
  hook: "A roof you can see daylight through that will not burn, will not rot and washes itself in the rain. Glass fibre takes the tension, the PTFE takes the weather, and the two together let a building be spanned by a membrane under cable rather than held up by structure.",
  stats: [["Light transmission", "~10–15%"], ["Service life", "30 years plus"], ["Fire", "non-combustible"]],
  uses: "Stadium and terminal roofs, the Hajj Terminal and Millennium Dome, conveyor belts, release sheets.",
  link: "https://en.wikipedia.org/wiki/Tensile_structure"
},
{
  id: "etfefoil", cat: "fabric", name: "ETFE cushion",
  sub: "inflated multi-layer fluoropolymer foil", img: "etfefoil",
  hook: "Two or three films welded into a pillow and kept inflated at a few hundred pascals. It weighs about one per cent of the glass it replaces, lets through the ultraviolet that plants need, and a printed dot pattern on each layer turns shading on and off by changing the pressure.",
  stats: [["Weight", "~1% of glazing"], ["Pressure", "200–800 Pa"], ["UV", "passes it, unlike glass"]],
  uses: "Eden Project, Allianz Arena, Beijing Water Cube; atria, greenhouses, stadium facades.",
  link: "https://en.wikipedia.org/wiki/ETFE"
},
{
  id: "laminateshell", cat: "fabric", name: "Three-layer laminate",
  sub: "face fabric, membrane, knit backer", img: "laminateshell",
  swatch: { pattern: "laminate", colors: ["#2d4a63", "#cfd6db", "#1a2a38"] },
  hook: "The waterproof-breathable membrane is the whole point of the jacket and it cannot be either surface: abrasion destroys it from outside and skin oil blocks it from inside. So it is buried between a face fabric and a scrim. The sandwich, not the film, is the invention.",
  stats: [["Layers", "3, bonded"], ["Membrane", "buried, never exposed"], ["Seams", "taped, not just sewn"]],
  uses: "Hardshell jackets and gloves, drysuits, surgical drapes, tent flys.",
  link: "https://en.wikipedia.org/wiki/Waterproof_fabric"
},
{
  id: "mercerised", cat: "fabric", name: "Mercerised cotton",
  sub: "caustic treatment under tension", img: "mercerised",
  hook: "Cotton is a flat twisted ribbon. Hold it in tension in caustic soda and it swells into a round rod and the cellulose recrystallises — so it reflects light, holds dye far better, gains strength and stops shrinking. Mercer found it in 1844; Lowe added the tension and made it useful.",
  stats: [["Strength", "+20–30%"], ["Dye uptake", "much higher"], ["Shrinkage", "largely stabilised"]],
  uses: "Sewing and embroidery thread, shirting and polo knits, quilting cotton, lace.",
  link: "https://en.wikipedia.org/wiki/Mercerised_cotton"
},
{
  id: "dwrfinish", cat: "fabric", name: "Durable water repellent",
  sub: "low-surface-energy surface finish", img: "dwrfinish",
  hook: "A coating a few nanometres thick that does not block the fabric at all: it lowers the surface energy so water beads and rolls, while the weave stays open to vapour. The old C8 fluorochemistry did it almost permanently — and stayed in the environment just as permanently.",
  stats: [["Thickness", "nanometres"], ["Old chemistry", "C8, now phased out"], ["Upkeep", "wears off, heat reactivates"]],
  uses: "Shell jackets and softshells, tents, umbrellas, upholstery stain finishes.",
  link: "https://en.wikipedia.org/wiki/Durable_water_repellent"
},
{
  id: "ringmesh", cat: "fabric", name: "Ring mesh",
  sub: "riveted or welded steel rings", img: "ringmesh",
  hook: "Fabric made of small steel circles, each one riveted or welded shut and linked to four neighbours. A blade cannot part a single ring without the load spreading to the others, so a cut becomes a push. Fifteen centuries as armour, now a butcher's glove.",
  stats: [["Pattern", "4-in-1 is standard"], ["Ring", "riveted or welded closed"], ["Cut", "stopped, not slowed"]],
  uses: "Butchers and oyster gloves, shark suits, abrasive blast curtains, chef aprons, reproduction mail.",
  link: "https://en.wikipedia.org/wiki/Mail_(armour)"
},
{
  id: "weldedseam", cat: "fabric", name: "Welded seam",
  sub: "ultrasonic and RF bonding", img: "weldedseam",
  hook: "A stitch is a neat row of holes through a waterproof layer, which is why it has to be taped afterwards. A weld melts the two layers into each other instead — no needle, no thread, no holes, and a joint thinner than the stitched one it replaces.",
  stats: [["Holes", "none"], ["Ultrasonic", "20–40 kHz"], ["Limit", "thermoplastics only"]],
  uses: "Drysuits and waders, inflatable boats, medical disposables, taped shell jackets, filter bags.",
  link: "https://en.wikipedia.org/wiki/Ultrasonic_welding"
},
{
  id: "tufted", cat: "fabric", name: "Tufting",
  sub: "yarn needled into a backing", img: "tufted",
  hook: "Hundreds of needles push yarn through a ready-made backing cloth and hooks hold the loops while the needles withdraw. A carpet that took a weaver months comes off the machine in minutes — which is the entire reason wall-to-wall carpet stopped being a luxury in the 1950s.",
  stats: [["Share of carpet", "over 90%"], ["Speed", "minutes, not months"], ["Backing", "woven or nonwoven, added"]],
  uses: "Carpet and rugs, automotive floor mats, artificial turf, upholstery, tufted art.",
  link: "https://en.wikipedia.org/wiki/Tufting"
},
{
  id: "etextile", cat: "fabric", name: "E-textile",
  sub: "conductive yarn knitted as circuit", img: "etextile",
  swatch: { pattern: "weave", colors: ["#9ba3a9", "#dde3e7", "#5f666c"] },
  hook: "Spin a conductor into the yarn and the fabric becomes the sensor: a knitted stripe reads stretch, a woven grid reads touch, an embroidered trace carries the signal. The physics is easy. Surviving forty washes and a tumble dryer is the research problem.",
  stats: [["Conductors", "silver, steel, copper yarn"], ["Sensing", "stretch, touch, ECG"], ["Hard part", "laundering durability"]],
  uses: "Touch-sensitive garments and bags, heated seats and clothing, ECG and respiration shirts, soft robotics.",
  link: "https://en.wikipedia.org/wiki/E-textiles"
},
{
  id: "byborre", cat: "fabric", name: "Byborre engineered knit",
  sub: "layered double-knit, specified per zone", img: "byborre",
  hook: "An Amsterdam studio that treats the knit itself as the design. On a circular machine two faces are knitted at once and a further yarn can be trapped between them, so weight, stretch, insulation and texture change from one zone to the next inside a single continuous piece, with no seam and no panel to cut. The cloth is knitted to order rather than held as stock, and each run carries a passport recording the yarns that went into it.",
  stats: [["Structure", "two faces, knitted as one"], ["Specified", "per zone, not per panel"], ["Made", "to order, not from stock"]],
  uses: "Upholstery and interiors, footwear and apparel panels, acoustic and insulating textiles.",
  link: "https://byborre.com/"
},
{
  id: "dcf", cat: "fabric", name: "Dyneema composite fabric",
  sub: "UHMWPE scrim laminated between films", img: "dcf",
  hook: "Not woven at all. Parallel UHMWPE filaments are laid down in a thin cross-plied grid and sandwiched between polyester films, so every fibre carries load in a straight line instead of crimping over and under a weave. It barely stretches, takes up no water and comes out translucent — and it creases rather than drapes, which is why sails and packs are made of it and clothing is not.",
  stats: [["Construction", "laid and laminated, no weave"], ["Stretch", "very low, no crimp"], ["Water", "the films stop it entirely"]],
  uses: "Racing sails, ultralight packs and shelters, kites, protective covers.",
  link: "https://en.wikipedia.org/wiki/Ultra-high-molecular-weight_polyethylene"
},
{
  id: "seersucker", cat: "fabric", name: "Seersucker",
  sub: "slack-tension stripe weave", img: "seersucker",
  hook: "Two warps are run at different tensions on the same loom, so when the cloth comes off and relaxes, the slack stripes bunch up into permanent puckers. The point is not the look: the ridges hold the fabric off the skin so air moves underneath it, and it never needs ironing, because the wrinkles are the construction.",
  stats: [["Made by", "two warp tensions at once"], ["Pucker", "permanent, woven in"], ["Why", "it stands off the skin"]],
  uses: "Summer suits and shirting, children's clothes, bedding, curtains.",
  link: "https://en.wikipedia.org/wiki/Seersucker"
},
{
  id: "flyknit", cat: "fabric", name: "Engineered knit upper",
  sub: "one piece, structure changed mid-knit", img: "flyknit",
  hook: "A shoe upper knitted as a single piece, with the stitch structure changing as it goes: open mesh where the foot needs air, tight structure where it needs holding, and a fused yarn knitted in along the lines that take the load. Cutting and stitching panels disappears, and most of the offcut waste goes with it.",
  stats: [["Pieces", "one, knitted to shape"], ["Zones", "structure changes mid-knit"], ["Waste", "far below cut-and-sew"]],
  uses: "Running and lifestyle shoe uppers, seamless garments, orthopaedic braces.",
  link: "https://en.wikipedia.org/wiki/Knitted_fabric"
},
{
  id: "surgmesh", cat: "fabric", name: "Surgical mesh",
  sub: "knitted polypropylene, pore size tuned", img: "surgmesh",
  hook: "A warp-knitted polypropylene net whose whole specification is its holes. Large pores let tissue grow through and leave the repair flexible; small ones give a stiffer, denser patch that the body walls off instead. It is knitted rather than woven so a cut edge cannot run, and the modern meshes are deliberately lighter, because the first generation was far stronger than any abdomen needs.",
  stats: [["Pore size", "the design variable"], ["Knit", "cut edges do not unravel"], ["Trend", "lighter, larger-pore"]],
  uses: "Hernia repair, pelvic floor reconstruction, chest wall and soft tissue support.",
  link: "https://en.wikipedia.org/wiki/Surgical_mesh"
},
{
  id: "pinatex", cat: "fabric", name: "Piñatex",
  sub: "pineapple-leaf fibre nonwoven", img: "pinatex",
  hook: "Leaves left on the ground after the pineapple harvest, stripped down to fibre, dried and needle-punched into a web, then coated until the sheet behaves like a light leather. Nothing is planted for it — the fibre is a by-product of a crop already grown for its fruit, and the leaf pulp left over goes back to the field.",
  stats: [["Fibre", "pineapple leaf, a by-product"], ["Web", "needle-punched nonwoven"], ["Finish", "resin coated"]],
  uses: "Shoes and bags, upholstery, watch straps, accessories.",
  link: "https://en.wikipedia.org/wiki/Pi%C3%B1atex"
},
{
  id: "waffle", cat: "fabric", name: "Waffle weave",
  sub: "honeycomb float structure", img: "waffle",
  hook: "Long floats on both faces step down into a recessed grid, so the cloth ends up all ridges and hollows instead of flat. The hollows hold still air, which is what makes it insulate, and the ridges give a towel far more surface and far more grip on water than a flat weave of the same yarn.",
  stats: [["Structure", "floats stepping into cells"], ["Insulates", "by trapping air"], ["Absorbs", "more than a flat weave"]],
  uses: "Towels and bathrobes, thermal underwear, blankets, kitchen cloths.",
  link: "https://en.wikipedia.org/wiki/Waffle_fabric"
},
{
  id: "twill", cat: "fabric", name: "Broken twill",
  sub: "twill with the diagonal reversed", img: "twill",
  hook: "A twill's diagonal comes from floats that all step the same way, and those aligned floats also drag the leg of a pair of jeans into a slow spiral every time it is washed. Reversing the step every few ends breaks the diagonal into a zigzag too fine to see, cancels the twist, and leaves the drape and wear of a twill intact.",
  stats: [["Twill", "diagonal float, usually 3/1"], ["Broken", "step reverses across the warp"], ["Fixes", "leg twist after washing"]],
  uses: "Jeans and workwear, shirting, upholstery, uniform cloth.",
  link: "https://en.wikipedia.org/wiki/Twill"
},
{
  id: "tweed", cat: "fabric", name: "Harris Tweed",
  sub: "handwoven in the Outer Hebrides, by statute", img: "tweed",
  hook: "The only cloth with its own Act of Parliament: to be called Harris Tweed it must be made from virgin wool dyed and spun in the Outer Hebrides and woven by hand at the weaver's own home, on a treadle loom. The dyeing happens before spinning, so colour is blended inside the yarn rather than printed on the cloth, which is why a plain-looking brown turns out to be eight colours under a lens. Woollen-spun and loosely woven, it is thick and warm and does not hold a crease — the opposite of worsted, by construction rather than by fibre.",
  stats: [["Dyed", "in the wool, before spinning"], ["Woven", "at home, on a treadle loom"], ["Protected", "by the Harris Tweed Act 1993"]],
  uses: "Jackets and coats, caps, upholstery, bags and shoes.",
  link: "https://en.wikipedia.org/wiki/Harris_Tweed"
},
{
  id: "satin", cat: "fabric", name: "Satin weave",
  sub: "long floats, as few crossings as possible", img: "satin",
  hook: "The third basic weave, and the one defined by what it avoids: each warp thread passes over four or more wefts before tucking under a single one, and the tuck points are staggered so they never line up. The surface is therefore almost all unbroken float, which reflects light along the filament instead of scattering it at every crossing — the shine is geometry, not fibre, and the back of the same cloth is dull. Fewer crossings also means less friction holding the threads, so satin drapes beautifully and snags on anything.",
  stats: [["Float", "over four or more, under one"], ["Shine", "from the weave, not the fibre"], ["Weakness", "snags — nothing pins the floats"]],
  uses: "Linings and eveningwear, ribbon, bedding, pointe shoes, academic hoods.",
  link: "https://en.wikipedia.org/wiki/Satin"
},
{
  id: "carbonfab", cat: "fabric", name: "Woven carbon reinforcement",
  sub: "3K tow, plain or 2x2 twill", img: "carbonfab",
  hook: "Carbon fibre arrives as tow — a flat bundle of a few thousand filaments — and weaving it is a deliberate loss: every crossing bends the fibres out of line, and a crimped fibre carries less than a straight one. What the weave buys is handling. A dry fabric drapes over a mould, holds its yarns in place while resin wets it out, and resists the shear that would make a unidirectional sheet fall apart in the hands; a twill crosses less often than a plain weave and so follows a double curve where plain weave would wrinkle. Where the crimp cannot be afforded, the yarns are stitched instead of woven.",
  stats: [["3K tow", "3000 filaments laid flat"], ["Areal weight", "around 200 g/m² for 3K twill"], ["Crimp", "costs stiffness, buys drape"]],
  uses: "Wet lay-up and prepreg laminates, bike frames, car panels, repairs, cosmetic twill skins.",
  link: "https://en.wikipedia.org/wiki/Carbon_fibers"
},
{
  id: "fibc", cat: "fabric", name: "Bulk bag fabric",
  sub: "flat polypropylene tape, woven both ways", img: "fibc",
  hook: "The cloth a one-tonne bag is made of is not spun yarn at all: polypropylene film is slit into flat tapes and stretched several times its length, which lines the molecules up along the tape and makes it far stronger than the film it came from, then warp and weft of flat tape are woven into a cloth that barely stretches. Flat tape also packs edge to edge, so the weave is dense enough to hold powder without a liner. Sunlight is what ends it — a season outdoors and the tape goes chalky and tears in the hand, which is why a bag rated 5:1 is thrown away rather than reused.",
  stats: [["Tape", "slit film, drawn to orient it"], ["Safety factor", "5:1 reusable, 6:1 single trip"], ["Killed by", "UV — months, not years"]],
  uses: "FIBC big bags for sand, fertiliser and grain, woven sacks, ground sheets, tarpaulins.",
  link: "https://en.wikipedia.org/wiki/Flexible_intermediate_bulk_container"
},
{
  id: "machinelace", cat: "fabric", name: "Machine lace",
  sub: "threads twisted round each other, not interlaced", img: "machinelace",
  hook: "Lace is not a weave. Instead of passing over and under, each thread is twisted around its neighbours by a brass bobbin thin enough to swing through the warp in a comb, which produces a net that will not ravel when it is cut — the reason lace can be made as a shaped piece rather than a length. Heathcoat worked out the hexagonal bobbinet ground in 1808, and a Leavers machine with a Jacquard head on top of it can place pattern thread anywhere in that net. The machines still running are mostly a century old, because nobody has built new ones since.",
  stats: [["Threads", "twisted, never interlaced"], ["Cut edge", "does not ravel"], ["Bobbinet ground", "patented 1808, still the base"]],
  uses: "Lace trim and curtains, bridal and lingerie fabric, hosiery panels, millinery veiling.",
  link: "https://en.wikipedia.org/wiki/Bobbinet"
},
{
  id: "firehose", cat: "fabric", name: "Fire hose jacket",
  sub: "circular-woven polyester over a rubber liner", img: "firehose",
  hook: "A division of labour between two materials: a thin rubber or polyurethane liner holds the water and carries no load, and a jacket woven as a seamless tube on a circular loom takes the whole pressure. Because the jacket is woven rather than moulded it lies flat when empty — which is the only reason a hundred metres of it fits on a truck — and goes round the instant it is charged. Burst pressure is roughly three times the working pressure, but almost no hose dies of pressure: it dies of being dragged over concrete, and the jacket is what gets a coating to slow that down.",
  stats: [["Jacket", "circular-woven, no seam"], ["Burst", "around 3x working pressure"], ["Fails by", "abrasion, not pressure"]],
  uses: "Fire service attack and supply lines, industrial washdown, irrigation, layflat transfer hose.",
  link: "https://en.wikipedia.org/wiki/Fire_hose"
},
{
  id: "wiltoncarpet", cat: "fabric", name: "Woven carpet",
  sub: "pile tied in by the weave itself", img: "wiltoncarpet",
  hook: "Tufted carpet is needled into a finished backing and held there by glue; woven carpet makes backing and pile in one pass, each tuft locked by the warp that passes over it, with no latex doing the holding. A Wilton loom raises the pile as loops over wires and either leaves them or cuts them as the wire withdraws, limited to the few colours its shuttles carry; an Axminster loom instead grips individual tufts from spools of yarn and can place any colour anywhere, which is why figured carpet is woven that way. It is several times slower than tufting, and it does not shed.",
  stats: [["Pile", "locked by the weave, not glued"], ["Wilton", "loops raised over wires, then cut"], ["Axminster", "any colour, tuft by tuft"]],
  uses: "Hotel, theatre and ship carpet, stair runners, patterned domestic carpet.",
  link: "https://en.wikipedia.org/wiki/Carpet"
},

/* ---------- ACTIVE & EXOTIC ---------- */
{
  id: "mrf", cat: "exotic", name: "Magnetorheological fluid",
  sub: "iron particles in carrier oil", img: "mrf",
  hook: "Oil, until you energise a coil — then the iron particles chain up along the field lines and it stiffens into a paste within milliseconds. Switch the current off and it is oil again.",
  stats: [["Response", "~5–10 ms"], ["Yield stress", "~50–100 kPa"], ["Control", "continuously variable"]],
  uses: "Adaptive dampers, prosthetic knees, clutches and brakes, haptic devices.",
  link: "https://en.wikipedia.org/wiki/Magnetorheological_fluid"
},
{
  id: "ferrofluid", cat: "exotic", name: "Ferrofluid",
  sub: "colloidal magnetite", img: "ferrofluid",
  hook: "Nanoscale magnetite kept permanently suspended by a surfactant, so it stays liquid while being magnetic. In a field it breaks into the spike pattern that minimises its surface energy.",
  stats: [["Particle size", "~10 nm"], ["Invented", "NASA, 1963"], ["Spikes", "Rosensweig instability"]],
  uses: "Hard-drive and vacuum rotary seals, loudspeaker coil cooling, sensors.",
  link: "https://en.wikipedia.org/wiki/Ferrofluid"
},
{
  id: "vantablack", cat: "exotic", name: "Vantablack",
  sub: "vertically aligned nanotube array", img: "vantablack",
  hook: "A forest of carbon nanotubes that light enters and never leaves. Crumple the foil underneath and the surface still reads as a flat void, because your eye gets no shading information back.",
  stats: [["Absorption", "~99.96%"], ["Structure", "nanotube forest"], ["Looks like", "a hole"]],
  uses: "Stray-light baffles in telescopes and sensors, calibration targets, art.",
  link: "https://en.wikipedia.org/wiki/Vantablack"
},
{
  id: "mxene", cat: "exotic", name: "MXenes",
  sub: "Ti₃C₂Tx and family", img: "mxene",
  hook: "Two-dimensional metal carbides, etched out of a layered parent crystal one atomic sheet at a time. They conduct like a metal, disperse in water like clay, and block radio at micron thickness.",
  stats: [["Discovered", "2011"], ["Conductivity", "~10,000 S/cm"], ["Shielding", ">90 dB at ~45 µm"]],
  uses: "EMI shielding films, supercapacitor electrodes, sensors, antennas.",
  link: "https://en.wikipedia.org/wiki/MXenes"
},
{
  id: "starlite", cat: "exotic", name: "Starlite",
  sub: "lost ablative compound", img: "starlite",
  hook: "Demonstrated on live television by shielding a raw egg from a blowtorch. Its inventor, a hairdresser, never disclosed the formula and took it with him in 2011. Samples survive; nobody has reproduced it.",
  stats: [["Shown", "1990s, on TV"], ["Formula", "never disclosed"], ["Status", "lost"]],
  uses: "None — it survives as a cautionary tale about trade secrets.",
  link: "https://en.wikipedia.org/wiki/Starlite"
},
{
  id: "graphene", cat: "exotic", name: "Graphene",
  sub: "single-atom carbon sheet", img: "graphene",
  hook: "One atom thick, strong enough that an elephant balanced on a pencil would not push through a sheet of it, and it was first isolated with sticky tape and a pencil mark. Making it in square metres rather than square millimetres is still the whole problem.",
  stats: [["Thickness", "0.335 nm"], ["Tensile", "130 GPa"], ["Isolated", "2004, with tape"]],
  uses: "Transparent electrodes, composites, sensors, battery additives, membranes.",
  link: "https://en.wikipedia.org/wiki/Graphene"
},
{
  id: "cntyarn", cat: "exotic", name: "Carbon nanotube yarn",
  sub: "spun from a nanotube forest", img: "cntyarn",
  hook: "Drawn out of a vertical nanotube forest like candy floss off a drum and twisted into thread. It conducts electricity and heat like metal, survives temperatures that melt copper, and is the only route anyone has to a macroscopic nanotube object.",
  stats: [["Strength", "1–3 GPa as yarn"], ["Conductivity", "metallic"], ["Spun from", "a grown forest"]],
  uses: "Lightweight wiring, actuators, heaters, sensors, EMI shielding.",
  link: "https://en.wikipedia.org/wiki/Carbon_nanotube"
},
{
  id: "aerographite", cat: "exotic", name: "Aerographite",
  sub: "hollow carbon tube network", img: "aerographite",
  hook: "A sponge of hollow carbon tubes grown on a zinc oxide template which is then etched away. At 0.18 mg/cm³ it is a few times lighter than air itself would be if it were solid, and it springs back from being squashed to a twentieth of its height.",
  stats: [["Density", "0.18 mg/cm³"], ["Compressible", "to 5% and back"], ["Reported", "2012"]],
  uses: "Research: electrodes, sensors, lightweight shielding, water purification.",
  link: "https://en.wikipedia.org/wiki/Aerographite"
},
{
  id: "ybco", cat: "exotic", name: "YBCO",
  sub: "YBa₂Cu₃O₇, high-Tc superconductor", img: "ybco",
  hook: "The first superconductor that works in liquid nitrogen rather than liquid helium — 92 K, which turned a cryogenic laboratory into a thermos flask. It also pins magnetic flux lines, so it does not just float above a magnet, it hangs underneath one too.",
  stats: [["Tc", "92 K"], ["Coolant", "liquid nitrogen"], ["Trick", "flux pinning"]],
  uses: "Maglev demonstrators, fault current limiters, research magnets, SQUID sensors.",
  link: "https://en.wikipedia.org/wiki/Yttrium_barium_copper_oxide"
},
{
  id: "electrochromic", cat: "exotic", name: "Electrochromic glass",
  sub: "tungsten oxide ion-insertion stack", img: "electrochromic",
  hook: "Lithium ions are pushed into a tungsten oxide layer by a few volts and the glass darkens; reverse the polarity and they come out again. It only draws power while changing state, so a tinted window holds its tint on nothing at all.",
  stats: [["Drive", "~3 V"], ["Switch time", "3–10 min"], ["Holding power", "zero"]],
  uses: "Boeing 787 cabin windows, building façades, rear-view mirrors, sunroofs.",
  link: "https://en.wikipedia.org/wiki/Electrochromic_device"
},
{
  id: "vo2", cat: "exotic", name: "Vanadium dioxide",
  sub: "VO₂, thermochromic switch", img: "vo2",
  hook: "At 68 °C it rearranges its crystal structure in picoseconds and flips from insulator to metal — and from infrared-transparent to infrared-reflecting. A window coated with it rejects heat only on a hot day, and nobody has to switch anything.",
  stats: [["Transition", "68 °C"], ["Resistance change", "~10,000×"], ["Speed", "sub-picosecond"]],
  uses: "Smart window coatings, uncooled IR bolometers, optical switches, thermal camouflage.",
  link: "https://en.wikipedia.org/wiki/Vanadium(IV)_oxide"
},
{
  id: "qdot", cat: "exotic", name: "Quantum dots",
  sub: "CdSe / InP nanocrystals", img: "qdot",
  hook: "Identical chemistry, different colour — the emitted wavelength is set purely by how big the crystal is, because the electron is squeezed into a box and the box sets the energy. Grow them 2 nm and they glow blue, 6 nm and they glow red.",
  stats: [["Size", "2–10 nm"], ["Emission width", "~25 nm FWHM"], ["Colour set by", "diameter"]],
  uses: "QLED displays, LED phosphors, solar cells, biological tagging.",
  link: "https://en.wikipedia.org/wiki/Quantum_dot"
},
{
  id: "metamaterial", cat: "exotic", name: "Electromagnetic metamaterial",
  sub: "split-ring resonator arrays", img: "metamaterial",
  hook: "A material whose behaviour comes from its geometry rather than its chemistry. Pattern copper rings smaller than the wavelength and the array can show a negative refractive index — light bends the wrong way, which no substance on Earth does.",
  stats: [["Refractive index", "can be negative"], ["Feature size", "< wavelength"], ["First shown", "2000, microwave"]],
  uses: "Flat lenses, antenna miniaturisation, radar absorbers, cloaking demonstrations.",
  link: "https://en.wikipedia.org/wiki/Metamaterial"
},
{
  id: "acousticmeta", cat: "exotic", name: "Acoustic metamaterial",
  sub: "sub-wavelength resonator lattice", img: "acousticmeta",
  hook: "Normally blocking low frequencies means mass — a wall. A lattice of tuned resonators can stop a band of sound in a panel a hundredth of a wavelength thick, and some designs block sound while air flows straight through them.",
  stats: [["Thickness", "~λ/100"], ["Attenuation", ">20 dB in band"], ["Open versions", "sound out, air through"]],
  uses: "Ventilation silencers, machine enclosures, aircraft cabin panels, vibration isolation.",
  link: "https://en.wikipedia.org/wiki/Acoustic_metamaterial"
},
{
  id: "selfhealpoly", cat: "exotic", name: "Self-healing polymer",
  sub: "Diels–Alder and capsule systems", img: "selfhealpoly",
  hook: "Two approaches. One buries capsules of liquid monomer that burst when a crack passes and polymerise in it; the other uses reversible bonds that unzip with heat and re-form on cooling, so the same spot can be healed again and again.",
  stats: [["Strength recovered", "70–100%"], ["Capsule type", "one-shot per site"], ["Reversible type", "repeatable"]],
  uses: "Self-healing coatings and paint, phone screen protectors, aerospace sealants, soft robotics.",
  link: "https://en.wikipedia.org/wiki/Self-healing_material"
},
{
  id: "dea", cat: "exotic", name: "Dielectric elastomer actuator",
  sub: "compliant electrodes on acrylic film", img: "dea",
  swatch: { pattern: "gloss", colors: ["#6e6a7a", "#b0abc0", "#413e4b"] },
  hook: "A rubber film with stretchy electrodes on both faces. Charge it to a few kilovolts and electrostatic pressure squeezes it thinner and wider — over 100% strain, faster and more efficiently than muscle, which is why they are called artificial muscles.",
  stats: [["Strain", ">100%"], ["Drive", "1–5 kV"], ["Efficiency", "up to ~80%"]],
  uses: "Soft robotics, haptic feedback, tunable optics, energy harvesting from waves.",
  link: "https://en.wikipedia.org/wiki/Electroactive_polymers"
},
{
  id: "lce", cat: "exotic", name: "Liquid crystal elastomer",
  sub: "LCE, programmable-shape rubber", img: "lce",
  hook: "A rubber whose molecules are aligned like a liquid crystal. Heat it and the alignment collapses, so the strip contracts along one axis — up to 40%, reversibly, with the direction and shape written in during manufacture.",
  stats: [["Contraction", "to 40%"], ["Trigger", "heat, light or solvent"], ["Shape", "programmed in the mould"]],
  uses: "Artificial muscle research, micro-grippers, morphing optics, haptics.",
  link: "https://en.wikipedia.org/wiki/Liquid_crystal_elastomer"
},
{
  id: "erf", cat: "exotic", name: "Electrorheological fluid",
  sub: "polarisable particles in oil", img: "erf",
  swatch: { pattern: "speckle", colors: ["#6b5e3c", "#a3946a", "#413923"] },
  hook: "Magnetorheological fluid's electrical cousin: apply a few kilovolts per millimetre and the suspended particles chain up into columns, turning the oil into a paste in about a millisecond. Faster than MR fluid, but it needs high voltage and hates water.",
  stats: [["Response", "~1 ms"], ["Field", "1–5 kV/mm"], ["Yield stress", "~5 kPa"]],
  uses: "Fast clutches and valves, haptic devices, vibration dampers, research actuators.",
  link: "https://en.wikipedia.org/wiki/Electrorheological_fluid"
},
{
  id: "oobleck", cat: "exotic", name: "Shear-thickening suspension",
  sub: "cornstarch in water", img: "oobleck",
  hook: "Pour it and it flows; punch it and it is briefly a solid, because the particles jam into a force-carrying network faster than the water can flow out of the way. The kitchen version of the fluid that stiffens body armour.",
  stats: [["Solids", "~55% by volume"], ["Trigger", "shear rate"], ["Recovery", "instant"]],
  uses: "Demonstrations; the same physics in impact-hardening armour and sports padding.",
  link: "https://en.wikipedia.org/wiki/Dilatant"
},
{
  id: "thermoelectric", cat: "exotic", name: "Bismuth telluride",
  sub: "Bi₂Te₃ thermoelectric", img: "thermoelectric",
  hook: "Run a current through it and one face gets cold while the other gets hot — no compressor, no gas, no moving parts, and reversing the current reverses the direction. The catch is efficiency: it manages about a tenth of what a heat pump does.",
  stats: [["ΔT", "up to ~70 K single stage"], ["Efficiency", "~5–8% of Carnot"], ["Moving parts", "none"]],
  uses: "Peltier coolers, CPU and laser chip cooling, wine fridges, waste-heat generators, RTGs.",
  link: "https://en.wikipedia.org/wiki/Bismuth_telluride"
},
{
  id: "magnetocaloric", cat: "exotic", name: "Magnetocaloric material",
  sub: "Gd and Gd₅(Si,Ge)₄", img: "magnetocaloric",
  hook: "Put gadolinium in a magnetic field and it warms; take the field away and it cools. A fridge built on that effect needs no refrigerant gas at all, is quiet, and could be a third more efficient — if anyone can make it cheaply enough.",
  stats: [["ΔT per cycle", "2–5 K"], ["Refrigerant", "none — the metal is it"], ["Efficiency", "~+30% potential"]],
  uses: "Prototype magnetic refrigerators, gas liquefaction, sub-kelvin cooling for physics.",
  link: "https://en.wikipedia.org/wiki/Magnetic_refrigeration"
},
{
  id: "zeolite", cat: "exotic", name: "Zeolite",
  sub: "crystalline aluminosilicate molecular sieve", img: "zeolite",
  hook: "A crystal full of pores all exactly the same size, down to the fraction of an ångström. That lets it sort molecules by shape: a 3A sieve takes water out of ethanol and leaves everything else, which no filter can do.",
  stats: [["Pore size", "0.3–1 nm, exact"], ["Surface area", "~600 m²/g"], ["Regenerated", "by heating"]],
  uses: "Oil cracking catalysts, oxygen concentrators, drying insulated glazing, detergent softeners, cat litter.",
  link: "https://en.wikipedia.org/wiki/Zeolite"
},
{
  id: "mof", cat: "exotic", name: "Metal-organic framework",
  sub: "MOF, metal nodes and organic linkers", img: "mof",
  hook: "A crystalline scaffold that is mostly empty space. One gram can have the surface area of a football pitch — the record holders exceed 7000 m²/g — and the pore size can be dialled in by choosing a longer linker molecule.",
  stats: [["Surface area", "to >7000 m²/g"], ["Void fraction", "up to 90%"], ["Design", "pore size by linker"]],
  uses: "Gas storage and separation, carbon capture, water harvesting from desert air, catalysis.",
  link: "https://en.wikipedia.org/wiki/Metal%E2%80%93organic_framework"
},
{
  id: "metalhydride", cat: "exotic", name: "Metal hydride",
  sub: "LaNi₅ and related storage alloys", img: "metalhydride",
  hook: "Hydrogen gas is absorbed into the metal lattice and sits between the atoms, so the alloy holds more hydrogen per litre than liquid hydrogen does — at room temperature and low pressure. It is just extremely heavy per kilogram stored.",
  stats: [["Density", ">liquid H₂ by volume"], ["Pressure", "a few bar"], ["Penalty", "~1.5% H₂ by mass"]],
  uses: "NiMH battery electrodes, hydrogen storage, heat pumps, submarine fuel cells.",
  link: "https://en.wikipedia.org/wiki/Metal_hydride"
},
{
  id: "pcm", cat: "exotic", name: "Phase change material",
  sub: "paraffin and salt hydrates", img: "pcm",
  hook: "Stores heat by melting instead of by warming up, so it soaks up energy at a fixed temperature and hands it back at the same one. A centimetre of the right paraffin in a wall holds as much heat as a brick a foot thick.",
  stats: [["Latent heat", "150–250 kJ/kg"], ["vs sensible", "~10× per kg"], ["Temp", "fixed by the material"]],
  uses: "Building temperature buffering, cold chain packaging, hand warmers, spacecraft and electronics thermal control.",
  link: "https://en.wikipedia.org/wiki/Phase-change_material"
},
{
  id: "vip", cat: "exotic", name: "Vacuum insulation panel",
  sub: "fumed silica core in a barrier envelope", img: "vip",
  hook: "Remove the air and you remove the main way heat crosses an insulator. A 20 mm panel does the job of 200 mm of foam — and if a nail punctures the envelope, it instantly becomes a 20 mm panel of ordinary chalk.",
  stats: [["λ", "0.004 W/m·K"], ["vs foam", "~8× better"], ["Failure", "one puncture ends it"]],
  uses: "Fridge and freezer walls, vaccine shippers, retrofit insulation where thickness is fixed.",
  link: "https://en.wikipedia.org/wiki/Vacuum_insulated_panel"
},
{
  id: "getter", cat: "exotic", name: "Getter material",
  sub: "barium or zirconium alloy film", img: "getter",
  hook: "A pump with no moving parts that works after the thing is sealed. Reactive metal is flashed onto the inside of a vacuum tube or flask, and it chemically swallows the stray gas molecules that keep leaking out of the walls for years afterwards.",
  stats: [["Vacuum reached", "<10⁻⁹ mbar"], ["Mechanism", "chemisorption"], ["The silver patch", "in every old valve"]],
  uses: "Vacuum tubes and CRTs, vacuum flasks, MEMS packages, particle accelerator beam pipes.",
  link: "https://en.wikipedia.org/wiki/Getter"
},
{
  id: "strontiumal", cat: "exotic", name: "Strontium aluminate",
  sub: "SrAl₂O₄:Eu,Dy phosphor", img: "strontiumal",
  swatch: { pattern: "gloss", colors: ["#4fb36a", "#b8f3c4", "#1d6b33"] },
  hook: "The glow-in-the-dark pigment that actually works. It traps the energy of absorbed light in crystal defects and leaks it back out slowly — ten times brighter than the zinc sulfide of old toys and still visible after twelve hours in the dark.",
  stats: [["vs ZnS", "~10× brighter"], ["Afterglow", ">12 hours"], ["Radioactive", "no"]],
  uses: "Emergency exit marking, watch dials, safety signage, pigments and toys.",
  link: "https://en.wikipedia.org/wiki/Strontium_aluminate"
},
{
  id: "tritium", cat: "exotic", name: "Tritium gas light",
  sub: "GTLS, tritium in a phosphor-lined tube", img: "tritium",
  hook: "A sealed glass capillary of tritium gas lined with phosphor. Beta particles hit the coating and it glows — for twelve years, with no battery and no charging. The betas cannot get through the glass, so the tube is safe until it is broken.",
  stats: [["Half-life", "12.3 years"], ["Power", "none required"], ["Beta range", "a few mm of air"]],
  uses: "Gun and watch night sights, emergency exit signs, key fobs.",
  link: "https://en.wikipedia.org/wiki/Tritium_radioluminescence"
},
{
  id: "slips", cat: "exotic", name: "Liquid-infused surface",
  sub: "SLIPS, lubricant locked in a nanotexture", img: "slips",
  hook: "Copied from the pitcher plant: a nanoporous surface holds a layer of lubricant by capillary action, so what a droplet touches is liquid, not solid. Nothing sticks — not blood, not ice, not ketchup — and a scratch heals as the liquid flows back in.",
  stats: [["Contact angle hysteresis", "<2.5°"], ["Repels", "water, oil, blood, ice"], ["Self-healing", "liquid reflows"]],
  uses: "Anti-fouling and anti-icing coatings, medical tubing, condenser surfaces, bottles that empty.",
  link: "https://en.wikipedia.org/wiki/Slippery_Liquid-Infused_Porous_Surfaces"
},
{
  id: "tio2photo", cat: "exotic", name: "Photocatalytic titania",
  sub: "anatase TiO₂ coating", img: "tio2photo",
  hook: "Ultraviolet light knocks electrons loose in the coating, which then tear apart any organic molecule touching the surface. The same reaction makes the surface perfectly water-wetting, so rain sheets off and takes the broken-down dirt with it.",
  stats: [["Activated by", "UV < 390 nm"], ["Contact angle", "~0° under light"], ["Breaks down", "organics and NOₓ"]],
  uses: "Self-cleaning glass and façades, anti-fog mirrors, air-purifying paving and paint.",
  link: "https://en.wikipedia.org/wiki/Titanium_dioxide"
},
{
  id: "electret", cat: "exotic", name: "Electret",
  sub: "permanently charged fluoropolymer film", img: "electret",
  hook: "The electrostatic equivalent of a permanent magnet: charge frozen into a polymer film that stays there for decades. Nearly every microphone built in the last fifty years is one, and the same charge is what makes an N95 filter catch particles far smaller than its holes.",
  stats: [["Charge life", "decades"], ["Bias supply", "none needed"], ["Filter gain", "~10× at 0.3 µm"]],
  uses: "Microphones in every phone and laptop, N95 and HEPA filter media, air ionisers, energy harvesters.",
  link: "https://en.wikipedia.org/wiki/Electret"
},

/* ---------- NATURAL & BIOLOGICAL ---------- */
{
  id: "nacre", cat: "natural", name: "Nacre",
  sub: "mother of pearl, aragonite and conchiolin", img: "nacre",
  hook: "95% chalk, and three thousand times tougher than chalk. Microscopic aragonite tiles are laid like brickwork with a protein mortar between them; a crack cannot run straight, it has to go around every tile, and it runs out of energy trying.",
  stats: [["Mineral", "~95% aragonite"], ["Toughness", "~3000× the mineral"], ["Tile", "~0.5 µm thick"]],
  uses: "Inlay and buttons, pearls; the structural template for a generation of tough composites.",
  link: "https://en.wikipedia.org/wiki/Nacre"
},
{
  id: "bamboo", cat: "natural", name: "Bamboo",
  sub: "graded fibre-reinforced grass", img: "bamboo",
  hook: "A grass, not a tree, and a natural composite with the fibres packed densest at the outside where bending stress is highest. It reaches full height in a season, and along the grain it out-pulls mild steel for its weight.",
  stats: [["Tensile", "~400–800 MPa"], ["Growth", "to 1 m per day"], ["Fibres", "graded to the outside"]],
  uses: "Scaffolding, flooring and panels, bicycle frames, textiles, reinforcement research.",
  link: "https://en.wikipedia.org/wiki/Bamboo"
},
{
  id: "balsa", cat: "natural", name: "Balsa",
  sub: "Ochroma pyramidale", img: "balsa",
  hook: "A hardwood that floats higher than cork, because it is 60% air held in cells with thin but genuinely stiff walls. End-grain balsa, sliced across the cells, carries compression like a honeycomb and is still the core in most wind turbine blades.",
  stats: [["Density", "100–200 kg/m³"], ["Air", "~60% of volume"], ["End grain", "honeycomb-like"]],
  uses: "Wind turbine blade and boat cores, model aircraft, surfboards, packaging.",
  link: "https://en.wikipedia.org/wiki/Ochroma"
},
{
  id: "lignumvitae", cat: "natural", name: "Lignum vitae",
  sub: "Guaiacum, self-lubricating hardwood", img: "lignumvitae",
  hook: "The densest commercial wood — it sinks — and about a quarter of its weight is natural resin, so it oils itself. Submarine propeller shaft bearings were made from it well into the nuclear age, lubricated by nothing but seawater and the wood.",
  stats: [["Density", "1.23 g/cm³"], ["Resin", "~25% by weight"], ["Lubrication", "its own"]],
  uses: "Propeller shaft and turbine bearings, mallet heads, bowls, pulley sheaves.",
  link: "https://en.wikipedia.org/wiki/Lignum_vitae"
},
{
  id: "whiteoak", cat: "natural", name: "White oak",
  sub: "Quercus alba, tylosis-plugged pores", img: "whiteoak",
  hook: "The tree plugs its own vessels with balloon-like growths called tyloses as the heartwood forms. Red oak does not, and a red oak barrel leaks like a straw. That single anatomical difference is why every whisky and wine barrel is white oak.",
  stats: [["Pores", "plugged by tyloses"], ["Watertight", "yes — red oak is not"], ["Rot resistance", "high"]],
  uses: "Wine and whisky barrels, boat planking, flooring, timber framing.",
  link: "https://en.wikipedia.org/wiki/Quercus_alba"
},
{
  id: "spruce", cat: "natural", name: "Spruce tonewood",
  sub: "Picea, quartersawn soundboard stock", img: "spruce",
  swatch: { pattern: "grain", colors: ["#d9c295", "#f0e2c4", "#a98f63"] },
  hook: "Chosen for one number: stiffness along the grain divided by density, where spruce beats everything. A soundboard must be as light as possible and as stiff as possible at once, and the slow-grown Alpine trees Stradivari used grew in a cold spell that made the rings unusually tight.",
  stats: [["Stiffness/density", "best of woods"], ["Ring spacing", "1–2 mm prized"], ["Cut", "quartersawn only"]],
  uses: "Guitar, violin and piano soundboards, aircraft spars historically, ladders.",
  link: "https://en.wikipedia.org/wiki/Tonewood"
},
{
  id: "cork", cat: "natural", name: "Cork",
  sub: "suberised bark of Quercus suber", img: "cork",
  hook: "Fourteen-sided closed cells full of air, and almost uniquely among materials it has a Poisson's ratio of zero — squeeze it and it does not bulge sideways. That is the only reason a cork can be pushed into a bottle neck at all. Harvested without felling the tree.",
  stats: [["Poisson's ratio", "~0"], ["Cells", "~40 million/cm³"], ["Harvest", "every 9 years, tree lives"]],
  uses: "Wine closures, flooring, gaskets, cricket and baseball cores, spacecraft ablative layers.",
  link: "https://en.wikipedia.org/wiki/Cork_(material)"
},
{
  id: "vegleather", cat: "natural", name: "Vegetable-tanned leather",
  sub: "collagen cross-linked with plant tannins", img: "vegleather",
  hook: "Tannins from oak and chestnut bark lock the collagen fibres so they stop rotting, over weeks in a pit rather than hours in a drum. The resulting hide can be moulded wet and holds the shape dry, and it darkens with light and oil instead of wearing out.",
  stats: [["Tanning", "30–60 days"], ["Mouldable", "wet-formed"], ["Ages by", "darkening, not failing"]],
  uses: "Saddlery and belts, shoe soles, bookbinding, holsters and tool sheaths.",
  link: "https://en.wikipedia.org/wiki/Vegetable_tanning"
},
{
  id: "bone", cat: "natural", name: "Bone",
  sub: "collagen with hydroxyapatite mineral", img: "bone",
  hook: "A composite of a brittle mineral and a stretchy protein, in the one ratio that is tough rather than merely hard. It is also the only structural material that rebuilds itself to match its loads — stop loading it and it dissolves itself to save the weight.",
  stats: [["Mineral", "~60–70%"], ["Toughness", "~5 kJ/m²"], ["Remodels", "~10% per year"]],
  uses: "Living skeletons; historically buttons, handles, bone china and glue.",
  link: "https://en.wikipedia.org/wiki/Bone"
},
{
  id: "antler", cat: "natural", name: "Antler",
  sub: "high-collagen bone, shed annually", img: "antler",
  hook: "Bone tuned for impact rather than stiffness: less mineral, more collagen, so it absorbs several times the energy of a leg bone before it breaks. The fastest-growing tissue of any mammal, and it is shed and regrown every year.",
  stats: [["Work to fracture", "~6× leg bone"], ["Growth", "to 2 cm/day"], ["Regrown", "annually"]],
  uses: "Tool handles and knife scales, dog chews, carving, prehistoric picks and pressure flakers.",
  link: "https://en.wikipedia.org/wiki/Antler"
},
{
  id: "horn", cat: "natural", name: "Horn",
  sub: "keratin, a natural thermoplastic", img: "horn",
  hook: "Heat it in water and it softens, press it and it holds the new shape, and it can be welded to itself with nothing but heat and pressure. Horn was the thermoplastic of the pre-plastic world — window panes, lantern glazing, spoons and combs.",
  stats: [["Softens", "in hot water"], ["Welds", "to itself, heat and pressure"], ["Translucent", "when thin"]],
  uses: "Combs and buttons, drinking vessels, composite bow bellies, lantern panes historically.",
  link: "https://en.wikipedia.org/wiki/Horn_(anatomy)"
},
{
  id: "baleen", cat: "natural", name: "Baleen",
  sub: "keratin plates from filter-feeding whales", img: "baleen",
  hook: "Springy, mouldable and splittable into strips — the stiffening in corsets, umbrella ribs and buggy whips for two centuries. The whaling industry chased it as hard as it chased oil, and plastics are what finally made it worthless.",
  stats: [["Material", "keratin, like fingernail"], ["Formed", "by heat and pressure"], ["Replaced by", "spring steel, then plastic"]],
  uses: "Historical only: corset stays, umbrella ribs, brushes, whips. Trade now banned.",
  link: "https://en.wikipedia.org/wiki/Baleen"
},
{
  id: "amber", cat: "natural", name: "Amber",
  sub: "fossilised tree resin", img: "amber",
  hook: "Tree resin that has lost its volatiles and polymerised over tens of millions of years into a true solid. It is warm to the touch, floats in brine, builds a static charge when rubbed — the Greek word for it, elektron, is where electricity got its name.",
  stats: [["Age", "20–300 million years"], ["Hardness", "2–2.5 Mohs"], ["Gave us", "the word 'electron'"]],
  uses: "Jewellery, varnish historically, scientific specimens with trapped inclusions.",
  link: "https://en.wikipedia.org/wiki/Amber"
},
{
  id: "shellac", cat: "natural", name: "Shellac",
  sub: "resin secreted by the lac insect", img: "shellac",
  hook: "Scraped off twigs, dissolved in alcohol, and it dries by evaporation in minutes to a hard glossy film that later coats can re-dissolve and melt into. It is edible, blocks odours and stains that nothing else will, and it was the first record material.",
  stats: [["Dries", "in minutes"], ["Recoat", "melts into previous layer"], ["Food safe", "yes — E904"]],
  uses: "French polish, pill and sweet coating, odour-blocking primer, 78 rpm records historically.",
  link: "https://en.wikipedia.org/wiki/Shellac"
},
{
  id: "guttapercha", cat: "natural", name: "Gutta-percha",
  sub: "trans-polyisoprene from Palaquium sap", img: "guttapercha",
  hook: "Chemically natural rubber's mirror image, and that flipped bond makes it hard and thermoplastic instead of elastic. It was the insulation that made the first transatlantic telegraph cable possible — the only material of the age that stayed waterproof on the sea floor.",
  stats: [["Isomer", "trans, not cis"], ["Softens", "~60 °C"], ["Undersea life", "a century"]],
  uses: "Root canal fillings today; submarine cable insulation and golf balls historically.",
  link: "https://en.wikipedia.org/wiki/Gutta-percha"
},
{
  id: "diatomite", cat: "natural", name: "Diatomaceous earth",
  sub: "fossil diatom silica skeletons", img: "diatomite",
  hook: "A soft white powder that is actually billions of glass skeletons, each one microscopically perforated. It filters beer, absorbs three times its weight in liquid, and kills insects by scratching through their waxy coat so they dry out — physics, not poison.",
  stats: [["Porosity", "~80–90%"], ["Surface area", "~20 m²/g"], ["Insecticide", "mechanical"]],
  uses: "Beer and pool filtration, absorbent granules, mild abrasive, insecticide, dynamite originally.",
  link: "https://en.wikipedia.org/wiki/Diatomaceous_earth"
},
{
  id: "chitin", cat: "natural", name: "Chitin & chitosan",
  sub: "poly-N-acetylglucosamine", img: "chitin",
  hook: "The second most abundant polymer on Earth after cellulose, and the stuff of every insect shell and crab leg. Deacetylated into chitosan it becomes positively charged, which makes it clump bacteria and clot blood — field dressings are made of shellfish waste.",
  stats: [["Abundance", "2nd after cellulose"], ["Chitosan", "binds blood, clots fast"], ["Source", "shellfish waste"]],
  uses: "Haemostatic dressings, wound healing, water treatment flocculant, edible coatings.",
  link: "https://en.wikipedia.org/wiki/Chitin"
},
{
  id: "byssus", cat: "natural", name: "Byssus",
  sub: "mussel threads and their DOPA adhesive", img: "byssus",
  hook: "A mussel glues itself to a wet, salted, fouled rock in minutes and does not come off in a storm. The trick is an amino acid called DOPA that displaces water from the surface — and the thread behind it is stiff at the rock end and stretchy at the shell end.",
  stats: [["Bond", "sets underwater"], ["Thread", "graded stiff to soft"], ["Key molecule", "DOPA"]],
  uses: "Model for surgical and marine adhesives; historically woven into 'sea silk'.",
  link: "https://en.wikipedia.org/wiki/Byssus"
},
{
  id: "toothenamel", cat: "natural", name: "Tooth enamel",
  sub: "96% hydroxyapatite prisms", img: "toothenamel",
  hook: "The hardest substance the body makes — almost pure mineral, arranged in prisms that run from the inside out. It is also the only tissue with no living cells in it, so it cannot repair itself: every scratch is permanent for life.",
  stats: [["Mineral", "96%"], ["Hardness", "~5 Mohs"], ["Repair", "none — no cells"]],
  uses: "Chewing, for about eighty years without maintenance.",
  link: "https://en.wikipedia.org/wiki/Tooth_enamel"
},
{
  id: "pumice", cat: "natural", name: "Pumice",
  sub: "gas-frothed volcanic glass", img: "pumice",
  hook: "Lava so saturated with dissolved gas that it foams as the pressure drops and freezes mid-bubble. It is the only common rock that floats, and rafts of it have drifted across entire oceans after eruptions, carrying marine life with them.",
  stats: [["Porosity", "~90%"], ["Floats", "for months to years"], ["Hardness", "~6 Mohs, still abrasive"]],
  uses: "Lightweight concrete, abrasive blocks and stonewashing, horticultural grit, filtration.",
  link: "https://en.wikipedia.org/wiki/Pumice"
},
{
  id: "mica", cat: "natural", name: "Mica",
  sub: "muscovite and phlogopite sheet silicate", img: "mica",
  hook: "Splits into sheets a few microns thick that are flat at the atomic level, transparent, and good insulators to 500 °C. Before glass could be made large and flat, mica was the window in every furnace door and oil lamp.",
  stats: [["Cleavage", "to ~1 µm sheets"], ["Dielectric strength", "~100 kV/mm"], ["Use temp", "to 500 °C"]],
  uses: "Capacitors and heater insulation, furnace and stove windows, AFM substrates, cosmetics.",
  link: "https://en.wikipedia.org/wiki/Mica"
},
{
  id: "asbestos", cat: "natural", name: "Asbestos",
  sub: "chrysotile and amphibole silicate fibres",
  img: "asbestos",
  hook: "A mineral that comes out of the ground as a soft spinnable fibre, does not burn, and resists acid — it genuinely was a miracle material, and it was used everywhere for a century. The same fibres are thin enough to lodge in lung tissue permanently. The cautionary tale at the centre of modern materials regulation.",
  stats: [["Melting", ">1000 °C"], ["Fibre", "0.1–10 µm, respirable"], ["Status", "banned in 60+ countries"]],
  uses: "None permitted in most countries. Historically: insulation, brake pads, cement sheet, fireproof cloth.",
  link: "https://en.wikipedia.org/wiki/Asbestos"
},
{
  id: "nephrite", cat: "natural", name: "Nephrite jade",
  sub: "felted tremolite–actinolite amphibole", img: "nephrite",
  hook: "Not especially hard — a steel knife nearly scratches it — but the toughest natural stone there is, because the crystals grow in a matted tangle of interlocking fibres. Neolithic adzes made from it outperformed bronze.",
  stats: [["Hardness", "6–6.5 Mohs"], ["Toughness", "highest of minerals"], ["Structure", "felted fibres"]],
  uses: "Carving and jewellery, ceremonial objects, prehistoric axe and adze blades.",
  link: "https://en.wikipedia.org/wiki/Nephrite"
},
{
  id: "granite", cat: "natural", name: "Granite surface plate",
  sub: "lapped black diabase or granite", img: "granite",
  swatch: { pattern: "speckle", colors: ["#6f7378", "#b2b7bc", "#42464a"] },
  hook: "The reference flat of the machine shop, and it beats cast iron on every count: it does not rust, a knock raises no burr, it damps vibration, and it barely moves with temperature. Grade AA is flat to about two microns over a metre.",
  stats: [["Flatness", "~2 µm/m, grade AA"], ["Damage mode", "chips, never burrs"], ["Damping", "far better than iron"]],
  uses: "Metrology surface plates, CMM bases, machine tool bedways, optical benches.",
  link: "https://en.wikipedia.org/wiki/Surface_plate"
},
{
  id: "washi", cat: "natural", name: "Washi",
  sub: "long-fibre kozo bark paper", img: "washi",
  hook: "Made from the inner bark of mulberry, whose fibres are ten times longer than wood pulp's, so the sheet is strong enough to be a wall and translucent enough to be a window. Conservators use it to repair thousand-year-old documents because it outlasts them.",
  stats: [["Fibre length", "~10 mm"], ["pH", "neutral, no lignin"], ["Life", "1000+ years"]],
  uses: "Shoji screens, art conservation and repair, printmaking, lampshades, banknote stock.",
  link: "https://en.wikipedia.org/wiki/Washi"
},
{
  id: "vellum", cat: "natural", name: "Parchment & vellum",
  sub: "limed, stretched and scraped animal skin", img: "vellum",
  hook: "Not tanned — stretched wet on a frame and scraped until the collagen fibres dry in a flat, tensioned sheet. It survives a thousand years, can be scraped clean and written on again, and it reacts to humidity by cockling, which is how you can tell it from paper.",
  stats: [["Survival", ">1000 years"], ["Erasable", "scrape and rewrite"], ["Source", "calf, goat, sheep"]],
  uses: "Manuscripts and legal documents, drumheads, bookbinding, UK Acts of Parliament.",
  link: "https://en.wikipedia.org/wiki/Parchment"
},
{
  id: "beeswax", cat: "natural", name: "Beeswax",
  sub: "long-chain ester and hydrocarbon wax", img: "beeswax",
  hook: "Secreted by bees at a fixed composition that has not changed in millions of years, with a narrow melting range right above body temperature. It takes a mould impression perfectly and burns off cleanly, which is why bronze casting began with it.",
  stats: [["Melting", "62–64 °C"], ["Composition", "stable for millennia"], ["Burns out", "no residue"]],
  uses: "Lost-wax casting, candles, polish, waxed thread, cosmetics, food wraps.",
  link: "https://en.wikipedia.org/wiki/Beeswax"
},
{
  id: "cuttlebone", cat: "natural", name: "Cuttlebone",
  sub: "aragonite chambered buoyancy structure", img: "cuttlebone",
  hook: "A buoyancy tank built from stacked chambers braced by pillars — 90% empty space that still takes pressure at 200 metres. Jewellers saw one in half, press a model into the soft face, and cast silver straight into it; the grain prints onto the metal.",
  stats: [["Porosity", "~90%"], ["Crush depth", "~200 m"], ["Casting", "one-shot mould"]],
  uses: "One-off silver and pewter casting, bird calcium supplement, polishing powder.",
  link: "https://en.wikipedia.org/wiki/Cuttlebone"
},
{
  id: "nanocellulose", cat: "natural", name: "Nanocellulose",
  sub: "cellulose nanofibrils and nanocrystals", img: "nanocellulose",
  hook: "Wood pulp broken down to the crystalline fibrils that make up the fibre. At that scale cellulose is stiffer than Kevlar, transparent, and made from a tree — films, aerogels and reinforcements all come out of what used to be paper.",
  stats: [["Tensile modulus", "~140 GPa"], ["Width", "3–20 nm"], ["Feedstock", "wood pulp"]],
  uses: "Composite reinforcement, transparent films, rheology modifiers, aerogels, wound dressings.",
  link: "https://en.wikipedia.org/wiki/Nanocellulose"
},

/* ---------- SEMICONDUCTORS & OPTICS ---------- */
{
  id: "silicon", cat: "electronic", name: "Monocrystalline silicon",
  sub: "Czochralski-grown Si boule", img: "silicon",
  hook: "A single crystal 300 mm across and two metres long, pulled slowly out of a melt from one seed, with roughly one atom in a billion out of place. It is not a good semiconductor — germanium is better — but it grows a perfect insulating oxide on itself, and that decided the century.",
  stats: [["Purity", "11 nines"], ["Wafer", "300 mm, going to 450"], ["Bandgap", "1.12 eV"]],
  uses: "Every integrated circuit, most solar cells, MEMS sensors.",
  link: "https://en.wikipedia.org/wiki/Monocrystalline_silicon"
},
{
  id: "gaas", cat: "electronic", name: "Gallium arsenide",
  sub: "GaAs, direct bandgap III-V", img: "gaas",
  hook: "Electrons move five times faster through it than through silicon, and unlike silicon it can emit light, because its bandgap is direct. It is brittle, expensive and arsenic-bearing, so it is used only where silicon genuinely cannot go.",
  stats: [["Electron mobility", "~5× Si"], ["Bandgap", "1.42 eV, direct"], ["Solar record", "~29% single junction"]],
  uses: "Phone RF front ends, laser diodes, satellite and concentrator solar cells, IR LEDs.",
  link: "https://en.wikipedia.org/wiki/Gallium_arsenide"
},
{
  id: "gan", cat: "electronic", name: "Gallium nitride",
  sub: "GaN, wide bandgap III-V", img: "gan",
  hook: "Two Nobel-winning decades went into making it emit blue, which finally gave white LEDs. The same wide bandgap lets it switch hundreds of volts at megahertz with very little loss — which is why a 65 W laptop charger is now the size of a matchbox.",
  stats: [["Bandgap", "3.4 eV"], ["Breakdown field", "~10× Si"], ["Blue LED", "Nobel Prize 2014"]],
  uses: "White and blue LEDs, Blu-ray lasers, fast chargers, EV inverters, radar amplifiers.",
  link: "https://en.wikipedia.org/wiki/Gallium_nitride"
},
{
  id: "germanium", cat: "electronic", name: "Germanium",
  sub: "Ge, the first transistor material", img: "germanium",
  hook: "The first transistors were germanium, and silicon pushed it out because germanium's oxide is water-soluble. It came back anyway: it is transparent to thermal infrared, so almost every thermal camera lens is a disc of it.",
  stats: [["Bandgap", "0.67 eV"], ["IR window", "2–14 µm"], ["Oxide", "soluble — its downfall"]],
  uses: "Thermal imaging optics, SiGe high-speed transistors, fibre-optic dopant, solar cell substrates.",
  link: "https://en.wikipedia.org/wiki/Germanium"
},
{
  id: "hgcdte", cat: "electronic", name: "Mercury cadmium telluride",
  sub: "HgCdTe, tunable IR detector", img: "hgcdte",
  hook: "Change the mercury-to-cadmium ratio and the bandgap sweeps continuously, so the detector can be tuned to any infrared band you like. Nothing else offers that, which is why it is in every high-end thermal imager — and why it costs what it costs.",
  stats: [["Cutoff", "tunable 1–30 µm"], ["Operating temp", "usually 77 K"], ["Alloy", "Hg₁₋ₓCdₓTe"]],
  uses: "Military and astronomical infrared sensors, JWST detectors, gas spectroscopy.",
  link: "https://en.wikipedia.org/wiki/Mercury_cadmium_telluride"
},
{
  id: "perovskitepv", cat: "electronic", name: "Halide perovskite",
  sub: "CH₃NH₃PbI₃ and relatives", img: "perovskitepv",
  hook: "Solar cell efficiency went from 3% to over 25% in about a decade, faster than any technology before it, using a crystal you can print from solution at low temperature. It still degrades in damp heat, and that is the only thing between it and the market.",
  stats: [["Efficiency", "3% (2009) → 27%"], ["Processing", "solution, <150 °C"], ["Weakness", "moisture and heat"]],
  uses: "Tandem solar cells on silicon, flexible photovoltaics, X-ray detectors, LEDs.",
  link: "https://en.wikipedia.org/wiki/Perovskite_solar_cell"
},
{
  id: "ito", cat: "electronic", name: "Indium tin oxide",
  sub: "ITO transparent conductor", img: "ito",
  hook: "A material that should not exist: metals conduct and block light, insulators pass light and block current. Heavily doped ITO has a plasma edge just below the visible, so it passes 90% of daylight and still carries current — every touchscreen depends on it.",
  stats: [["Transmission", "~90%"], ["Sheet resistance", "10–100 Ω/sq"], ["Problem", "indium is scarce and brittle"]],
  uses: "Touchscreens, LCD and OLED electrodes, solar cells, defrosting aircraft windscreens.",
  link: "https://en.wikipedia.org/wiki/Indium_tin_oxide"
},
{
  id: "linbo3", cat: "electronic", name: "Lithium niobate",
  sub: "LiNbO₃, the silicon of photonics", img: "linbo3",
  hook: "Piezoelectric, pyroelectric, electro-optic and nonlinear all in one crystal. Apply a voltage and its refractive index shifts, which lets you stamp data onto a laser beam at a hundred gigabits a second — that is how long-haul internet traffic gets modulated.",
  stats: [["Modulation", ">100 GHz"], ["Also", "piezo, pyro, nonlinear"], ["Grown by", "Czochralski"]],
  uses: "Optical modulators, SAW filters in every phone, frequency doublers, optical isolators.",
  link: "https://en.wikipedia.org/wiki/Lithium_niobate"
},
{
  id: "yig", cat: "electronic", name: "Yttrium iron garnet",
  sub: "YIG, Y₃Fe₅O₁₂", img: "yig",
  hook: "A magnetic insulator with the narrowest ferromagnetic resonance line of any known material, so a small YIG sphere behaves as a tunable microwave filter with a Q in the thousands — swept simply by changing the magnet current.",
  stats: [["Linewidth", "<0.5 Oe"], ["Q", ">10,000"], ["Tuning", "by magnetic field"]],
  uses: "Tunable microwave filters and oscillators, optical isolators, magnonics research.",
  link: "https://en.wikipedia.org/wiki/Yttrium_iron_garnet"
},
{
  id: "ggg", cat: "electronic", name: "Gadolinium gallium garnet",
  sub: "GGG substrate crystal", img: "ggg",
  swatch: { pattern: "gloss", colors: ["#d7b7bf", "#f3e2e6", "#a7868f"] },
  hook: "Grown almost entirely to be a surface for something else to grow on: its lattice spacing matches magnetic garnet films to within a fraction of a percent. It carried the bubble memory industry, and now carries magneto-optic isolators. It also makes a convincing fake diamond.",
  stats: [["Lattice match", "<0.1% mismatch"], ["Role", "substrate, not device"], ["Also", "diamond simulant"]],
  uses: "Substrates for magnetic garnet films, optical isolators, laser hosts, cryogenic cooling salts.",
  link: "https://en.wikipedia.org/wiki/Gadolinium_gallium_garnet"
},
{
  id: "tisapphire", cat: "electronic", name: "Ti:sapphire",
  sub: "titanium-doped Al₂O₃ laser crystal", img: "tisapphire",
  hook: "The widest gain bandwidth of any laser crystal — it lases anywhere from 650 to 1100 nm. By the uncertainty principle, a wide spectrum permits a short pulse, and that is what makes femtosecond pulses possible: light in bursts shorter than a molecule takes to vibrate.",
  stats: [["Tuning", "650–1100 nm"], ["Pulse", "<10 fs achievable"], ["Pumped by", "green laser"]],
  uses: "Femtosecond lasers, two-photon microscopy, LASIK, attosecond and high-field physics.",
  link: "https://en.wikipedia.org/wiki/Ti-sapphire_laser"
},
{
  id: "bbo", cat: "electronic", name: "BBO crystal",
  sub: "β-barium borate, nonlinear optic", img: "bbo",
  swatch: { pattern: "gloss", colors: ["#b9cdd6", "#e9f4f8", "#87a0ab"] },
  hook: "Light goes in at one colour and comes out at double the frequency, because the crystal's response to a strong field is not quite linear. It is how an infrared laser becomes a green pointer, and how entangled photon pairs are made for quantum optics.",
  stats: [["Transparent", "190–3500 nm"], ["Damage threshold", "very high"], ["Does", "frequency doubling, SPDC"]],
  uses: "Frequency doubling and tripling, optical parametric oscillators, entangled photon sources, Pockels cells.",
  link: "https://en.wikipedia.org/wiki/Barium_borate"
},
{
  id: "calcite", cat: "electronic", name: "Calcite",
  sub: "CaCO₃, optical-grade Iceland spar", img: "calcite",
  hook: "Put a clear rhomb on a page and you see two lines of text, because the crystal's two axes bend light differently and split a beam into two polarisations. Viking navigators may have used it to find the sun through cloud, and polarising optics started here.",
  stats: [["Birefringence", "0.172 — the largest common"], ["Splits", "into two polarised rays"], ["Source", "Iceland spar"]],
  uses: "Polarising prisms (Nicol, Glan–Thompson), optical isolators, microscopy.",
  link: "https://en.wikipedia.org/wiki/Iceland_spar"
},
{
  id: "caf2", cat: "electronic", name: "Calcium fluoride",
  sub: "CaF₂, deep-UV optical crystal", img: "caf2",
  hook: "Transparent from 130 nm in the vacuum ultraviolet right out to 10 µm in the thermal infrared — a wider window than any common glass. It also barely disperses, so lenses made from it correct the colour fringing that normal glass cannot.",
  stats: [["Range", "0.13–10 µm"], ["Abbe number", "95 — very low dispersion"], ["Soft", "scratches easily"]],
  uses: "Apochromatic camera and telescope lenses, lithography optics, FTIR windows, excimer optics.",
  link: "https://en.wikipedia.org/wiki/Calcium_fluoride"
},
{
  id: "znse", cat: "electronic", name: "Zinc selenide",
  sub: "CVD-grown ZnSe", img: "znse",
  hook: "Transparent orange-yellow glass to the eye, and the standard window for a CO₂ laser at 10.6 µm because it absorbs almost nothing there. Very low absorption matters: a focusing lens taking 4 kW must not heat up, or it defocuses itself.",
  stats: [["Transmits", "0.6–21 µm"], ["Absorption", "<0.0005 /cm at 10.6 µm"], ["Soft", "0.1 Mohs scratch risk"]],
  uses: "CO₂ laser lenses and windows, thermal imaging optics, IR spectroscopy.",
  link: "https://en.wikipedia.org/wiki/Zinc_selenide"
},
{
  id: "yagce", cat: "electronic", name: "YAG:Ce phosphor",
  sub: "cerium-doped yttrium aluminium garnet", img: "yagce",
  hook: "The yellow powder that makes a blue LED look white. It absorbs part of the blue and re-emits broad yellow; the leftover blue and the yellow together read as white. Almost every white LED in the world is a blue chip under a dot of this.",
  stats: [["Absorbs", "~450 nm blue"], ["Emits", "broad ~550 nm"], ["Decay", "~70 ns"]],
  uses: "White LEDs, laser lighting and projection, scintillators, electron microscope screens.",
  link: "https://en.wikipedia.org/wiki/Yttrium_aluminium_garnet"
},
{
  id: "scintillator", cat: "electronic", name: "Scintillator crystal",
  sub: "NaI:Tl, LYSO, BGO", img: "scintillator",
  hook: "Turns a single gamma ray into a flash of a few thousand visible photons, so an invisible particle becomes something a photodetector can count. The crystal's density decides how likely it is to catch the gamma at all — which is why PET scanners use heavy ones.",
  stats: [["Light yield", "~38,000 photons/MeV (NaI)"], ["Decay", "40–250 ns"], ["NaI", "hygroscopic — sealed"]],
  uses: "PET and SPECT scanners, radiation survey meters, airport scanners, particle physics calorimeters.",
  link: "https://en.wikipedia.org/wiki/Scintillator"
},
{
  id: "hfo2", cat: "electronic", name: "Hafnium oxide",
  sub: "HfO₂ high-k gate dielectric", img: "hfo2",
  hook: "By 2007 the silicon dioxide gate insulator was five atoms thick and electrons were tunnelling straight through it. Hafnium oxide has a dielectric constant four times higher, so the layer can be four times thicker for the same effect — it is what let Moore's law continue.",
  stats: [["k", "~25 vs SiO₂'s 3.9"], ["Introduced", "45 nm node, 2007"], ["Deposited by", "atomic layer deposition"]],
  uses: "Gate dielectrics in every modern processor, DRAM capacitors, optical coatings, ferroelectric memory.",
  link: "https://en.wikipedia.org/wiki/Hafnium_dioxide"
},
{
  id: "opticalfibre", cat: "electronic", name: "Optical fibre",
  sub: "ultra-pure silica core and cladding", img: "opticalfibre",
  hook: "So transparent that a window twenty kilometres thick made of it would still be clear. Getting from 1000 dB/km to 0.2 dB/km took a decade of removing water and metal impurities — the glass itself was never the problem, the contamination was.",
  stats: [["Loss", "0.14–0.2 dB/km"], ["Core", "9 µm single mode"], ["Strength", "stronger than steel wire"]],
  uses: "Essentially all long-haul and subsea data traffic, FTTH, sensors, endoscopes, fibre lasers.",
  link: "https://en.wikipedia.org/wiki/Optical_fiber"
},
{
  id: "pcf", cat: "electronic", name: "Photonic crystal fibre",
  sub: "microstructured air-hole fibre", img: "pcf",
  hook: "A fibre with a lattice of air holes running its whole length. The guiding stops depending on the glass and starts depending on the geometry — some versions guide light in a hollow core, so the beam travels through air with glass only as a cage.",
  stats: [["Holes", "run the full length"], ["Hollow core", "light travels in air"], ["Also", "supercontinuum generation"]],
  uses: "Supercontinuum white-light lasers, high-power delivery, gas sensing, low-latency trading links.",
  link: "https://en.wikipedia.org/wiki/Photonic-crystal_fiber"
},
{
  id: "oled", cat: "electronic", name: "OLED emitter stack",
  sub: "organic small-molecule thin films", img: "oled",
  hook: "Layers of organic molecule a hundred nanometres thick, each with one job — inject, transport, block, emit. Because each pixel makes its own light, a black pixel is genuinely off, so the contrast ratio is not high, it is infinite.",
  stats: [["Stack", "~100–200 nm total"], ["Black level", "zero"], ["Weak point", "blue emitter lifetime"]],
  uses: "Phone and TV displays, wearables, automotive lighting, flexible and transparent panels.",
  link: "https://en.wikipedia.org/wiki/OLED"
},
{
  id: "eink", cat: "electronic", name: "Electrophoretic ink",
  sub: "E Ink microcapsules", img: "eink",
  hook: "Microcapsules the width of a hair, each holding white and black pigment particles with opposite charges in clear fluid. A voltage pulls one colour to the top and then the power can be cut — the image stays put with nothing holding it, for years.",
  stats: [["Capsule", "~40 µm"], ["Power to hold image", "zero"], ["Refresh", "~100s of ms"]],
  uses: "E-readers, shelf labels, digital signage, watch faces, variable-colour car wraps.",
  link: "https://en.wikipedia.org/wiki/E_Ink"
},
{
  id: "nematiclc", cat: "electronic", name: "Nematic liquid crystal",
  sub: "rod-shaped molecules, 5CB and mixtures", img: "nematiclc",
  hook: "A fourth state of matter: flows like a liquid while its molecules stay pointed the same way like a crystal. A field re-points them, which twists polarised light, which an LCD turns into a pixel. Discovered in 1888 by a botanist studying carrot cholesterol.",
  stats: [["State", "liquid order, crystal orientation"], ["Switch", "ms, at ~5 V"], ["Discovered", "1888"]],
  uses: "Every LCD panel, thermometers, spatial light modulators, tunable lenses.",
  link: "https://en.wikipedia.org/wiki/Liquid_crystal"
},
{
  id: "ga2o3", cat: "electronic", name: "Gallium oxide",
  sub: "β-Ga₂O₃, ultra-wide bandgap", img: "ga2o3",
  swatch: { pattern: "gloss", colors: ["#9fb6c4", "#dceaf1", "#6d8696"] },
  hook: "A 4.8 eV bandgap, wider than GaN or SiC, so it holds off voltage in a far thinner layer — and unlike them it can be grown from a melt, which makes wafers cheap. It barely conducts heat, which is the one thing standing in its way.",
  stats: [["Bandgap", "4.8 eV"], ["Breakdown field", "8 MV/cm"], ["Problem", "thermal conductivity ~11 W/m·K"]],
  uses: "Emerging high-voltage power devices, solar-blind UV detectors.",
  link: "https://en.wikipedia.org/wiki/Gallium(III)_oxide"
},
{
  id: "mov", cat: "electronic", name: "ZnO varistor",
  sub: "metal oxide varistor ceramic", img: "mov",
  hook: "A ceramic that is an insulator until a certain voltage and then a conductor, because every grain boundary acts as a back-to-back diode pair. A surge arrives, the disc turns on in nanoseconds and shunts it to earth, then goes back to blocking.",
  stats: [["Response", "<25 ns"], ["Surge", "to 70 kA"], ["Wears out", "degrades with each hit"]],
  uses: "Surge protector strips, mains and telecom protection, motor snubbers, substation arresters.",
  link: "https://en.wikipedia.org/wiki/Varistor"
},
{
  id: "ptcpoly", cat: "electronic", name: "Polymer PTC fuse",
  sub: "carbon-filled polyethylene resettable fuse", img: "ptcpoly",
  hook: "Conductive carbon particles touching each other through a plastic. Too much current heats the plastic, it expands, the chain of contact breaks and the resistance jumps a thousandfold — and when it cools, the chain reforms. A fuse that resets itself.",
  stats: [["Resistance jump", "~1000×"], ["Trip", "under a second"], ["Resets", "on cooling"]],
  uses: "USB port and battery protection, motor overload, telecom lines, Li-ion packs.",
  link: "https://en.wikipedia.org/wiki/Resettable_fuse"
},
{
  id: "etchedfoil", cat: "electronic", name: "Etched anode foil",
  sub: "aluminium electrolytic capacitor foil", img: "etchedfoil",
  hook: "Aluminium foil electrochemically eaten into a sponge of tunnels, multiplying its surface area a hundredfold, then anodised to grow an oxide dielectric nanometres thick. Huge area and a near-zero gap are what make a capacitor big — in a can the size of a thumb.",
  stats: [["Area gain", "up to ~100×"], ["Oxide", "~1.4 nm per volt"], ["Electrolyte", "the real cathode"]],
  uses: "Power supply smoothing capacitors in practically all mains-powered electronics.",
  link: "https://en.wikipedia.org/wiki/Aluminum_electrolytic_capacitor"
},
{
  id: "tim", cat: "electronic", name: "Thermal interface material",
  sub: "filled greases, pads and liquid metal", img: "tim",
  hook: "Two polished metal faces touch on maybe 2% of their area; the rest is air, which insulates. The paste's job is only to fill that gap — it is far worse than metal and far better than air, and the thinnest layer that fills the voids always wins.",
  stats: [["Real contact", "~1–2% of area"], ["Grease", "3–8 W/m·K"], ["Liquid metal", "~70 W/m·K"]],
  uses: "CPU and GPU coolers, LED and power module mounting, automotive electronics.",
  link: "https://en.wikipedia.org/wiki/Thermal_interface_material"
},
{
  id: "lfp", cat: "electronic", name: "Lithium iron phosphate",
  sub: "LiFePO4 olivine cathode", img: "lfp",
  hook: "An olivine cathode that trades some energy for peace of mind. Its phosphate groups hold their oxygen covalently, so an overheated cell has nothing of its own to burn with — unlike a nickel-cobalt cathode, which releases oxygen into its own fire. It runs on iron and phosphorus rather than cobalt and nickel, holds a flat 3.2 volts across most of the discharge, and takes several thousand cycles; the flatness is also its nuisance, since the voltage tells you almost nothing about the charge left.",
  stats: [["Cell voltage", "about 3.2 V, very flat"], ["Cycles", "several thousand"], ["Contains", "no cobalt and no nickel"]],
  uses: "Standard-range electric cars, home and grid storage, buses, boats and solar systems.",
  link: "https://en.wikipedia.org/wiki/Lithium_iron_phosphate_battery"
},
{
  id: "bellbronze", cat: "music", name: "Bell bronze",
  sub: "copper with about a fifth tin", img: "bellbronze",
  hook: "At a fifth tin this is a bronze no engineer would pick for a machine part: hard, brittle, and it cracks rather than bends. That is exactly what a bell wants, because metal that deforms at all swallows the vibration, and the casting has to keep sounding for half a minute after the clapper has left it. Tuning is subtractive — metal is turned off the inside until the hum, prime, tierce, quint and nominal sit in tune with each other, and none of it can be put back.",
  stats: [["Alloy", "roughly 78 copper, 22 tin"], ["Damping", "low — rings for tens of seconds"], ["Tuned by", "cutting metal off the inside"]],
  uses: "Church and tower bells, carillons, orchestral tubular bells and gongs.",
  link: "https://en.wikipedia.org/wiki/Bell_metal"
},
{
  id: "singingbowl", cat: "music", name: "Singing bowl bronze",
  sub: "hammered copper-tin, Himalayan", img: "singingbowl",
  hook: "The same copper-tin family as a bell, but hammered thin while hot rather than cast, so thickness and stiffness vary all the way round the rim. Rubbing that rim with a leather mallet is stick-slip — the same grab-and-release that makes a bowed string sound — feeding energy into a bending mode of the wall. Because the bowl is never quite round, that mode exists twice at slightly different frequencies, and the slow warble people find hypnotic is the two of them beating against each other.",
  stats: [["Alloy", "copper and tin, often with traces of more"], ["Formed by", "hot hammering, not casting"], ["Warble", "two split modes, beating"]],
  uses: "Meditation and sound therapy, temple ritual, percussion and film scoring.",
  link: "https://en.wikipedia.org/wiki/Standing_bell"
},
{
  id: "pipemetal", cat: "music", name: "Organ pipe metal",
  sub: "tin and lead, cast as sheet", img: "pipemetal",
  hook: "Tin and lead poured onto a long table, planed down to a sheet about a millimetre thick and rolled round a mandrel. The ratio is chosen stop by stop: high tin is stiff and bright, lead is soft, dull and slow to speak, and one instrument uses both. Near half and half the alloy freezes in two phases and the surface comes out mottled like hide — spotted metal, prized by eye, though what the sound cares about is the stiffness of the wall.",
  stats: [["Alloy", "tin with lead, 25–90 percent tin"], ["Spotted metal", "two-phase freezing, near 50/50"], ["Chosen per", "stop, not per organ"]],
  uses: "Flue and reed pipes in organs, facade ranks, reproduction historical instruments.",
  link: "https://en.wikipedia.org/wiki/Organ_pipe"
},
{
  id: "pernambuco", cat: "music", name: "Pernambuco",
  sub: "Paubrasilia echinata, bow wood", img: "pernambuco",
  hook: "Nearly every serious violin bow for two centuries has been cut from one species growing on one stretch of Brazilian coast. It is dense and very stiff along the grain, damps just enough internally that the stick does not ring on its own under the hand, and holds the camber bent into it over a flame. Carbon fibre bows are stiffer and far tougher and still lose on feel, and the tree is now CITES-listed, so most of what is worked today was cut decades ago.",
  stats: [["Density", "about 0.9–1.1 g/cm³"], ["Stiff along", "the grain, with internal damping"], ["Supply", "CITES-listed, old stock"]],
  uses: "Violin, viola, cello and bass bows; inlay and marquetry.",
  link: "https://en.wikipedia.org/wiki/Paubrasilia"
},
{
  id: "ebony", cat: "music", name: "Ebony",
  sub: "Diospyros, fingerboard wood", img: "ebony",
  hook: "A wood dense enough to sink, with pores fine enough that a planed face polishes without filler or varnish. On a fingerboard that counts twice: there is no coating to wear through, and the surface under a pressed string is stiff enough that the note stops exactly where the finger puts it. It is also brittle and moves with humidity, which is why a fingerboard is a thin cap glued to a lighter neck rather than a solid piece.",
  stats: [["Density", "about 0.9–1.2 g/cm³"], ["Finish", "none — polished bare"], ["Used as", "a thin cap, not a whole neck"]],
  uses: "Fingerboards, tailpieces and pegs, piano sharps, clarinet and oboe bodies.",
  link: "https://en.wikipedia.org/wiki/Ebony"
},
{
  id: "rosin", cat: "music", name: "Rosin",
  sub: "distilled pine resin", img: "rosin",
  hook: "Pine resin boiled down until the turpentine is gone, leaving a glass that cracks like toffee and softens at about the heat of a fingertip. A bow does not rub a string, it grabs and lets go a few hundred times a second, and rosin is what makes the grab possible: friction heat softens it under the hair, it sticks, the string tears free, and the cycle repeats. Without it, horsehair on steel simply slides and the instrument is silent.",
  stats: [["From", "distilled pine resin"], ["Softens", "at the heat of friction"], ["Does", "the grab half of stick-slip"]],
  uses: "String bows, grip for gymnasts and dancers, ballet shoes, solder fluxes and varnishes.",
  link: "https://en.wikipedia.org/wiki/Rosin"
},
{
  id: "fiddleback", cat: "music", name: "Fiddleback maple",
  sub: "wavy-grain Acer", img: "fiddleback",
  hook: "The stripes are not a pattern on the surface but a wave in the fibres themselves, so each band of figure catches light at a different angle and the back seems to move as the instrument is turned. Maple earns its place for a duller reason: it is stiff across the grain and dense enough to reflect sound back into the box, leaving a soft, light spruce top to do the radiating. Wavy grain is harder to work and does nothing for the sound — luthiers choose it anyway.",
  stats: [["Figure", "waves in the fibre, not the surface"], ["Role", "the stiff, reflecting back plate"], ["Paired with", "a light spruce top"]],
  uses: "Violin, viola and cello backs, necks and ribs, guitar backs, drum shells, veneer.",
  link: "https://en.wikipedia.org/wiki/Figure_(wood)"
},
{
  id: "instbrass", cat: "music", name: "Instrument brass",
  sub: "yellow brass, 70/30 copper-zinc", img: "instbrass",
  hook: "Seventy copper to thirty zinc, picked because it can be spun and hammered into a bell without splitting, not because of how it sounds. The bell is pressed from flat sheet over a mandrel and the metal thins as it flares, so the wall ends up thinnest exactly where it moves most. Players hear real differences between yellow, gold and red brass; measurement puts most of it in wall thickness, the flare of the bell and the lacquer, with the alloy a small term.",
  stats: [["Alloy", "about 70 copper, 30 zinc"], ["Formed by", "spinning and hammering sheet"], ["Timbre", "mostly geometry, not alloy"]],
  uses: "Trumpet, trombone, horn and tuba bells, mouthpieces, keywork and slides.",
  link: "https://en.wikipedia.org/wiki/Brass"
},
{
  id: "lithophone", cat: "music", name: "Sounding stone",
  sub: "fine-grained rock, cut to pitch", img: "lithophone",
  hook: "Dense, even-grained rock with no crack in it has very little internal damping, so a free slab struck on the edge rings like metal instead of thudding. The Chinese bianqing cut sets of them from jade and limestone and tuned them by thickness rather than length, and the same trick turns up wherever a quarry yields stone of uniform grain. One crack anywhere in the slab kills it — the ring collapses to a thud — which is why complete old sets are so rare.",
  stats: [["Needs", "even grain and no cracks"], ["Tuned by", "thickness"], ["Failure", "one crack and the ring is gone"]],
  uses: "Chinese and Vietnamese stone chimes, Ethiopian church stones, orchestral stone percussion.",
  link: "https://en.wikipedia.org/wiki/Lithophone"
},
{
  id: "cymbalbronze", cat: "music", name: "Cymbal bronze",
  sub: "B20 and B8, hammered sheet", img: "cymbalbronze",
  hook: "A fifth tin, like bell metal, but rolled and hammered rather than cast, which leaves a plate stressed unevenly and never quite symmetrical. That is the point: a symmetrical plate would ring on a few clean modes, while a hammered one carries hundreds of close, inharmonic ones that smear into a wash with no pitch in it. Drop the tin to eight percent and the alloy becomes forgiving enough to stamp out of sheet — brighter, more uniform, shorter, and much easier to make.",
  stats: [["B20", "about 20 percent tin, cast then hammered"], ["B8", "about 8 percent tin, from sheet"], ["Spectrum", "dense and inharmonic on purpose"]],
  uses: "Drum kit and orchestral cymbals, hi-hats, tam-tams and gongs.",
  link: "https://en.wikipedia.org/wiki/Cymbal"
},
{
  id: "tuningfork", cat: "music", name: "Tuning-fork steel",
  sub: "pitch from stiffness and density", img: "tuningfork",
  hook: "A fork's pitch follows from its geometry and from the stiffness of its metal divided by its density, and from nothing else — no air column, no string tension to creep. Which leaves one flaw: steel loses a little stiffness as it warms, so a fork goes flat in a warm room. Elinvar, a nickel-iron-chromium alloy whose stiffness barely moves with temperature, was invented for exactly that complaint, and the same alloy went into watch balance springs.",
  stats: [["Pitch set by", "geometry, stiffness, density"], ["Steel", "goes flat as it warms"], ["Fix", "Elinvar, near-constant stiffness"]],
  uses: "Pitch references, hearing and bone-conduction tests, clock oscillators, vibrating sensors.",
  link: "https://en.wikipedia.org/wiki/Tuning_fork"
},
{
  id: "singingsand", cat: "music", name: "Booming sand",
  sub: "dry, rounded, closely sized grains", img: "singingsand",
  hook: "A few dozen dune fields in the world boom when sand avalanches down the lee face, loud enough to carry for about a kilometre and low enough to feel in the chest. It takes a narrow spread of grain size, well-rounded dry grains and a slope steep enough to slip; the shearing layer then locks into step with itself and radiates one note, usually somewhere around 70–105 Hz. Wet the sand or mix the sizes and the dune falls silent, so the effect lives in the packing rather than in the mineral.",
  stats: [["Pitch", "roughly 70–105 Hz"], ["Needs", "dry, rounded, closely sized grains"], ["Carries", "about a kilometre"]],
  uses: "Dune fields from Dunhuang to the Mojave; a test case for how granular flows synchronise.",
  link: "https://en.wikipedia.org/wiki/Singing_sand"
},
{
  id: "ringingrock", cat: "music", name: "Ringing rock",
  sub: "diabase boulders under locked-in stress", img: "ringingrock",
  hook: "In a handful of boulder fields the rocks answer a hammer with a clear metallic ring rather than a thud, though the stone is ordinary fine-grained diabase. The fields are open and dry, the boulders rest on each other instead of in soil, and the rock still carries stress locked in by weathering — take a ringing boulder home and it often stops ringing. There is no single agreed explanation yet, which is unusual for something this easy to go and reproduce.",
  stats: [["Rock", "fine-grained diabase"], ["Needs", "an open dry field, boulder on boulder"], ["Cause", "locked-in stress, still argued"]],
  uses: "Ringing Rocks Park in Pennsylvania, Montana and elsewhere; struck-stone percussion.",
  link: "https://en.wikipedia.org/wiki/Ringing_rocks"
},
{
  id: "steelpan", cat: "music", name: "Oil-drum steel",
  sub: "a barrel end, sunk and tuned", img: "steelpan",
  hook: "The one acoustic instrument invented in the twentieth century, and it was invented out of rubbish: the end of a 55-gallon oil drum, sunk into a bowl with a sledgehammer and then raised into note areas with a punch. The hammering work-hardens and pre-stresses the mild sheet, and the tuner shapes each area until its octave and fifth fall in with its fundamental — a thin steel plate talked into behaving harmonically. Pans are chromed or chemically treated now, because rust and the slow loss of that locked-in stress both pull the instrument out of tune.",
  stats: [["From", "the end of a steel drum"], ["Tuned by", "hammering each note area"], ["Each note", "fundamental, octave and fifth aligned"]],
  uses: "Steel bands and panorama orchestras, carnival, school and community ensembles.",
  link: "https://en.wikipedia.org/wiki/Steelpan"
},
{
  id: "glassharp", cat: "music", name: "Rubbed glass",
  sub: "stemware as an instrument", img: "glassharp",
  hook: "Ordinary stemware does something nobody designed it to do: a wet finger dragged round the rim grabs and releases it hundreds of times a second, drives the bending mode of the bowl, and the pitch follows how much water is in the glass. It works because glass has almost no internal damping — the same property that makes a dropped tumbler ring as it breaks. Lead crystal damps even less, which is what these were built from when they were built as instruments.",
  stats: [["Driven by", "stick-slip from a wet finger"], ["Tuned by", "the water level"], ["Works because", "glass barely damps"]],
  uses: "Glass harps and glass harmonicas, tuned bowl sets, physics demonstrations.",
  link: "https://en.wikipedia.org/wiki/Glass_harp"
},
{
  id: "handpan", cat: "music", name: "Nitrided pan steel",
  sub: "deep-drawn sheet, case-hardened", img: "handpan",
  hook: "A handpan is two deep-drawn steel shells glued rim to rim, each note area hammered until its octave and fifth lock onto its fundamental, so one dome sounds a chord. Bare sheet steel rusts and a rusting pan drifts out of tune, so makers hold the shells in ammonia gas at around 500 °C until the surface turns to iron nitride: a hard, corrosion-resistant case a few hundredths of a millimetre deep, with soft steel left underneath to do the vibrating. It is a heat treatment borrowed straight from gearboxes and crankshafts.",
  stats: [["Shell", "deep-drawn sheet steel"], ["Case", "iron nitride, gas-nitrided"], ["Each note", "fundamental, octave, fifth"]],
  uses: "Handpans and steel tongue drums, percussion for film, street and studio.",
  link: "https://en.wikipedia.org/wiki/Handpan"
},
{
  id: "springreverb", cat: "music", name: "Reverb spring",
  sub: "coiled steel wire as a delay line", img: "springreverb",
  hook: "A coiled steel wire is a bad delay line, and that is the entire point. Twist one end and the torsional wave crawls along the coil for tens of milliseconds, dispersing as it goes so the high frequencies arrive first, then reflects off both ends until a pickup at the far end hears a smear of echoes no room has ever produced. Amplifier makers kept it long after plates and tapes were available, because the defect itself had become the sound.",
  stats: [["Medium", "torsional waves in coiled steel"], ["Delay", "tens of milliseconds per spring"], ["Character", "dispersion — highs arrive first"]],
  uses: "Guitar amplifiers and organs, dub and surf records, modular synthesisers.",
  link: "https://en.wikipedia.org/wiki/Spring_reverb"
},
{
  id: "thermowood", cat: "music", name: "Thermally modified wood",
  sub: "baked, not treated", img: "thermowood",
  hook: "Wood taken to 160–215 °C with the oxygen kept out, which breaks down the hemicellulose — the component that holds water — and leaves the cellulose and lignin behind. It comes out darker, a few percent lighter, almost indifferent to humidity and much slower to rot, at the cost of toughness across the grain. Instrument makers use it on tops and fingerboards to imitate what decades of slow drying do to a soundboard; the same ovens turn plantation softwood into cladding that survives outdoors untreated.",
  stats: [["Treated at", "160–215 °C, low oxygen"], ["Lost", "hemicellulose, and most humidity movement"], ["Cost", "toughness across the grain"]],
  uses: "Guitar tops and fingerboards, cladding and decking, sauna benches, window frames.",
  link: "https://en.wikipedia.org/wiki/Thermally_modified_wood"
},
{
  id: "headstock", cat: "music", name: "Bell headstock",
  sub: "the beam a bell hangs from", img: "headstock",
  hook: "A swinging bell throws several times its own weight at whatever holds it, over and over, for centuries — so the headstock has to be stiff, heavy and acoustically dull, because anything that rings along with the bell is stealing from it. Seasoned oak and elm did the job for six hundred years: wood soaks up the shock of each strike inside itself instead of passing it into the tower, and when it finally goes it goes slowly and visibly. Cast iron and welded steel took over where the loads grew, at the price of a harder hang and fatigue cracks that give no warning at all.",
  stats: [["Carries", "several times the bell's weight, each swing"], ["Wants to be", "stiff, heavy, non-resonant"], ["Traditionally", "seasoned oak or elm"]],
  uses: "Church and tower bell frames, carillons, bell restoration and rehanging.",
  link: "https://en.wikipedia.org/wiki/Bell_(instrument)"
},
{
  id: "clapper", cat: "music", name: "Clapper and baldric",
  sub: "wrought iron on a leather strap", img: "clapper",
  hook: "The clapper is deliberately the softer of the two: wrought iron against bronze, so a century of blows wears a flat onto the clapper instead of starting a crack in the bell. How it hangs matters more than what it is made of — the leather baldric lets it swing free and bounce clear, because a clapper still touching the bell damps the note it has just made. Leather is used because it takes millions of flexing cycles, gives a little at the instant of impact, and frays visibly long before it parts.",
  stats: [["Softer than", "the bell, on purpose"], ["Must", "bounce clear after the strike"], ["Strap", "leather — flexes, gives, warns"]],
  uses: "Church bells and carillons, ship and school bells, handbells.",
  link: "https://en.wikipedia.org/wiki/Wrought_iron"
},
{
  id: "cymbalfelt", cat: "music", name: "Cymbal felt and sleeve",
  sub: "wool felt and a plastic tube", img: "cymbalfelt",
  hook: "A cymbal has to be held up and left alone at the same time. Two wool felt washers carry the weight and do nothing else: felt is soft, lossy and conforms to the curve, so the plate can rock and swing on the stand without being clamped and without the ring being choked out of it. The plastic sleeve over the threaded rod handles the unglamorous half — bare metal through the centre hole would chew it into a keyhole within a season and rattle along with the stand.",
  stats: [["Held by", "two felt washers, deliberately loose"], ["Felt", "soft, lossy, conforming"], ["Sleeve", "keeps metal off metal"]],
  uses: "Cymbal stands and hi-hat clutches, gong and tam-tam mounts, drum hardware.",
  link: "https://en.wikipedia.org/wiki/Cymbal_stand"
},
{
  id: "bowlcushion", cat: "music", name: "Bowl cushion",
  sub: "cloth over a loose fill", img: "bowlcushion",
  hook: "A standing bowl rings in its wall, and the wall barely moves only in a narrow band near the base — so that band is the one place anything is allowed to touch. A ring cushion of cloth over a loose fill does two jobs at once: it holds the bowl steady, and it is soft enough to mould itself to the base instead of making the hard point contact that would short the vibration out. Set the same bowl on a bare table and it goes dull and buzzes; the cushion is not decoration, it is the mount.",
  stats: [["Touches", "only the quiet band near the base"], ["Fill", "loose, so it moulds to the bowl"], ["Bare table", "dull note and a buzz"]],
  uses: "Temple rin and singing bowls, gong cushions and stands, sound therapy sets.",
  link: "https://en.wikipedia.org/wiki/Standing_bell"
},
{
  id: "soundpost", cat: "music", name: "Soundpost",
  sub: "a spruce dowel held by friction", img: "soundpost",
  hook: "A stick of spruce about six millimetres thick, wedged between belly and back with no glue at all, its ends cut to match the curve of each plate so it stands up on friction alone. It stiffens the treble side so the bridge rocks instead of pumping the whole top, and moving it a millimetre is audible — it is the largest single adjustment anyone makes to a finished instrument. Leaving it unglued is also the safety feature: a hard knock drops the post instead of cracking the plates.",
  stats: [["Held by", "friction alone, never glued"], ["Adjusted in", "fractions of a millimetre"], ["Doubles as", "the fuse against a knock"]],
  uses: "Violins, violas, cellos and basses; some lutes, guitars and viols.",
  link: "https://en.wikipedia.org/wiki/Sound_post"
},
{
  id: "violinbridge", cat: "music", name: "Bridge maple",
  sub: "cut to fit one instrument", img: "violinbridge",
  hook: "The bridge is held on by string pressure alone, and its feet are cut by hand to the exact arch of that one belly — move it to another instrument of the same model and it fits nothing. Quarter-sawn maple is used because it has to be stiff enough not to fold under roughly nine kilograms of downward load and still light enough to move at audio frequencies. The cut-out waist, heart and kidneys are a tuned filter rather than decoration: they put a broad resonance somewhere near 2–3 kHz, right where the ear is sharpest.",
  stats: [["Held by", "string pressure, no glue"], ["Load", "about 9 kg pressing down"], ["Bridge hill", "a broad peak near 2–3 kHz"]],
  uses: "Violin family and double bass, and in other forms most stringed instruments.",
  link: "https://en.wikipedia.org/wiki/Bridge_(instrument)"
},
{
  id: "bonesaddle", cat: "music", name: "Nut and saddle",
  sub: "bone, Micarta or sintered polymer", img: "bonesaddle",
  hook: "Every string ends on a hard little block, and that block has to be harder than the string, uniform the whole way through, and slippery enough that the string slides across it while being tuned instead of catching and then jumping sharp. Bone has been the default for centuries because it is dense, takes a polish and has a bright attack — but no two pieces are alike and some are porous enough to deaden one string out of six. Micarta and sintered polymers give up a little of that brightness for blanks that are all identical, which is what a factory and a repairer both want.",
  stats: [["Harder than", "the string that sits on it"], ["Must", "let the string slide while tuning"], ["Bone", "dense and bright, but never twice the same"]],
  uses: "Guitar nuts and saddles, mandolin and banjo bridges, harp and zither bearing points.",
  link: "https://en.wikipedia.org/wiki/Nut_(string_instrument)"
},
{
  id: "hideglue", cat: "music", name: "Hot hide glue",
  sub: "collagen, brushed on at about 60 °C", img: "hideglue",
  hook: "Collagen boiled out of hide and bone, kept molten in a pot at around 60 °C and brushed on hot, where it gels as it cools — which gives perhaps ten seconds to close the joint. It dries hard and glassy rather than rubbery, and that is the whole point: a flexible glue line inside a violin would swallow the vibration the wood is trying to pass along. It also releases with heat and water, so a three-hundred-year-old instrument can be opened and closed again, and the maker gets to decide which joint lets go first when the thing is dropped.",
  stats: [["Worked at", "about 60 °C, sets as it cools"], ["Dry joint", "hard and glassy, not rubbery"], ["Reversible", "with heat and moisture"]],
  uses: "Violin family and acoustic guitars, piano actions, furniture restoration, gilding.",
  link: "https://en.wikipedia.org/wiki/Hide_glue"
},
{
  id: "shockmount", cat: "music", name: "Elastic shock mount",
  sub: "holding by not quite holding", img: "shockmount",
  hook: "The opposite job to a bell headstock: let nothing through. A microphone slung in elastic cords, plus its own mass, makes a simple spring-and-weight filter tuned so that footsteps and knocks travelling up the stand die away well below the frequencies being recorded. The elastomer has to be soft, heavily damped inside itself so the suspension does not bounce at its own resonance, and free of creep — cheap rubber takes a permanent set and quietly lowers the microphone onto the frame it was supposed to be floating in.",
  stats: [["Wants", "low stiffness, high internal damping"], ["Fails by", "creep — the cord sags into a set"], ["Tuned", "below the band being recorded"]],
  uses: "Studio microphone suspensions, drum and tom isolation mounts, sensitive instrument stands.",
  link: "https://en.wikipedia.org/wiki/Shock_mount"
},
{
  id: "endpin", cat: "music", name: "Endpin and stopper",
  sub: "couple to the floor, or do not", img: "endpin",
  hook: "A cello spike is a decision to make the floor part of the instrument: steel driven into a wooden stage couples the body to a large radiating surface, and players can hear the room change underneath them. Carbon fibre endpins are stiffer and lighter and shift that balance again, while a rubber stopper or a strap-and-puck cuts the coupling almost entirely — which is what most people use, because the first duty of the fitting is to stop the instrument sliding away. Couple or isolate is the choice behind every mount in this category.",
  stats: [["Steel spike", "couples the body to the floor"], ["Carbon fibre", "stiffer, lighter, different balance"], ["Rubber stopper", "isolates, and stops the slide"]],
  uses: "Cellos and double basses, bassoons, some banjos, drums and speaker stands.",
  link: "https://en.wikipedia.org/wiki/Endpin"
},
{
  id: "reedcane", cat: "music", name: "Reed cane (Arundo donax)",
  sub: "a grass, cut at two years and cured", img: "reedcane",
  hook: "A giant grass whose stem wall happens to be a natural composite: stiff vascular bundles running lengthwise in soft parenchyma, which is exactly the anisotropy a vibrating cantilever wants. The cane is cut after about two years, cured in the sun for months and only then cut into blanks, and still no two slips behave alike — players buy a box of ten and keep three, because density and bundle spacing vary within one field. Nothing synthetic has quite replaced it; polypropylene and composite reeds are consistent, which turns out to be only half of what players ask for.",
  stats: [["Cut", "at about two years, then cured in sun"], ["Graded by", "hardness, not thickness"], ["Yield", "most of a box gets rejected"]],
  uses: "Clarinet and saxophone reeds, oboe and bassoon double reeds, bagpipe and organ reeds.",
  link: "https://en.wikipedia.org/wiki/Reed_(mouthpiece)"
},
{
  id: "ebonite", cat: "music", name: "Ebonite",
  sub: "rubber vulcanised until it is hard", img: "ebonite",
  hook: "Natural rubber cooked for hours with up to half its weight in sulphur, until the crosslinking runs so far that the rubber stops being elastic and becomes a hard, dead, machinable solid. Mouthpieces are made of it for exactly that deadness — it absorbs rather than rings, so the tone is the air column and the reed, not the chamber — and because it cuts cleanly, so a player can have the facing filed and the chamber reworked by hand. Sunlight is its enemy: the surface oxidises, goes brown-green and smells of sulphur, which is why old mouthpieces look used even when they are not.",
  stats: [["Sulphur", "around a third to a half by weight"], ["Works like", "a hard plastic, cut and refaced by hand"], ["Ages by", "oxidising brown-green in UV"]],
  uses: "Clarinet and saxophone mouthpieces, bagpipe parts, fountain pens, bowling balls, battery cases.",
  link: "https://en.wikipedia.org/wiki/Ebonite"
},
{
  id: "snarewire", cat: "music", name: "Snare wires",
  sub: "coiled steel resting against the lower head", img: "snarewire",
  hook: "The thing that makes a snare drum a snare drum is a bundle of sixteen to forty-two steel coils stretched just touching the bottom head, so that every hit sets them slapping against it. It is a deliberate noise generator: the coils are not tuned to anything, so what they add is a short burst of broadband rattle on top of a pitched drum, which is why a snare cuts through a band that a tom cannot. It also answers things nobody played — a loud low note anywhere in the room makes the head move, and the wires buzz in sympathy. Drummers either throw them off or live with it.",
  stats: [["Coils", "16 to 42, commonly 20"], ["Tuned to", "nothing — broadband by design"], ["Buzzes", "in sympathy with any loud note nearby"]],
  uses: "Snare drums, piccolo snares, orchestral field drums, cajon interiors.",
  link: "https://en.wikipedia.org/wiki/Snare_drum"
},
{
  id: "conepulp", cat: "music", name: "Speaker cone pulp",
  sub: "paper felted onto a cone screen", img: "conepulp",
  hook: "A loudspeaker cone wants three things that fight each other: stiff, light, and lossy. Metal and carbon win the first two and lose the third badly — when a stiff cone finally breaks up it rings like the bell it is. Paper is mediocre at stiffness, good at mass and excellent at loss, so its breakup is a soft mush rather than a resonant peak, which is why pulp cones outlasted every announcement of their death. They are made like handmade paper: slurry of wood, bamboo or wool fibre sucked onto a conical screen, pressed, dried and then doped to slow down the one real weakness, which is humidity.",
  stats: [["Made by", "felting wet pulp onto a cone screen"], ["Wants", "stiff, light and lossy at once"], ["Breakup", "soft, not a ringing peak"]],
  uses: "Woofers and full-range drivers, guitar amplifier speakers, studio monitors, car audio.",
  link: "https://en.wikipedia.org/wiki/Loudspeaker"
},
{
  id: "voicecoil", cat: "music", name: "Voice coil",
  sub: "wire wound on a polyimide former", img: "voicecoil",
  hook: "The only part of a loudspeaker that actually moves under power: a few metres of copper or copper-clad aluminium wound onto a thin polyimide or glass-fibre tube and hung in a magnet gap about a millimetre wide. Every property is a compromise with heat. Copper conducts better, aluminium weighs a third as much, and both get hot enough to raise their own resistance mid-note — the quiet loss of output called power compression, audible long before anything smells. What usually ends a driver is not the wire but the adhesive holding it to the former, or the gap closing on a coil that has swollen.",
  stats: [["Gap", "about 1 mm, and it must not touch"], ["CCAW", "trades conductivity for mass"], ["Fails by", "heat — adhesive first, wire second"]],
  uses: "Every moving-coil loudspeaker and headphone, shakers, hard-disk head actuators.",
  link: "https://en.wikipedia.org/wiki/Voice_coil"
},
{
  id: "marimbarose", cat: "music", name: "Honduras rosewood",
  sub: "Dalbergia stevensonii bar stock", img: "marimbarose",
  hook: "The wood concert marimba and xylophone bars are sawn from, chosen for a combination nothing else quite has: dense and oily enough to ring for a long time, but with enough internal damping that the sound is warm rather than the glassy clang of metal. The tuning is cut rather than chosen — an arch is scooped out of the underside of each bar until its first overtone sits a clean two octaves above the fundamental, which is what makes a marimba sound pitched instead of merely struck. CITES listed the whole Dalbergia genus in 2017, so makers now work in padauk, synthetic bar stock and reclaimed billets.",
  stats: [["Density", "about 0.95–1.1 g/cm³"], ["Tuned by", "undercutting the overtone to 4x"], ["Supply", "CITES-listed since 2017"]],
  uses: "Marimba and xylophone bars, fine guitar backs, clarinet bodies, knife scales.",
  link: "https://en.wikipedia.org/wiki/Dalbergia_stevensonii"
},
{
  id: "rhodestine", cat: "music", name: "Rhodes tine",
  sub: "a hardened steel rod, struck off centre", img: "rhodestine",
  hook: "An electric piano key does not hit a string: it hits a short stiff steel rod clamped at one end, with a tuned bar beside it. A cantilever has overtones that do not fall into whole-number ratios the way a string's do, so the result is inharmonic — closer to a bell or a tuning fork than a piano, which is the entire sound of a Rhodes. Voicing is geometry: how far the electromagnetic pickup sits from the tine, and how far off centre, sets how much bark is in the attack. Tines are a consumable; they work-harden where they are clamped and snap, and a spare set is part of owning one.",
  stats: [["Vibrates as", "a cantilever, not a string"], ["Overtones", "inharmonic — bell, not piano"], ["Fails by", "fatigue at the clamp"]],
  uses: "Fender Rhodes and Rhodes Mark pianos, and the electric piano sound sampled from them.",
  link: "https://en.wikipedia.org/wiki/Rhodes_piano"
},
{
  id: "metaldome", cat: "music", name: "Metal dome diaphragm",
  sub: "aluminium, titanium or beryllium, 25 mm", img: "metaldome",
  hook: "A tweeter dome has to stay a piston across its whole range, so what matters is not stiffness but stiffness against density — the ratio that sets how high the first breakup mode lands. Aluminium puts it just above the top of hearing, titanium a little higher, beryllium far higher still, because sound travels through beryllium roughly three times as fast as through aluminium. The costs are real: metal rings hard when it does break up, where a fabric dome simply loses the energy as heat, and beryllium dust is toxic enough that the metal is machined under licence and the domes come with a warning not to touch a damaged one.",
  stats: [["Dome", "about 25 mm across, tens of µm thick"], ["Beryllium", "about 3x the sound speed of aluminium"], ["Costs", "a hard ring at breakup, and in Be, toxicity"]],
  uses: "Hi-fi and studio monitor tweeters, compression driver diaphragms, in-ear and headphone drivers.",
  link: "https://en.wikipedia.org/wiki/Tweeter"
},
{
  id: "recordvinyl", cat: "music", name: "Record vinyl",
  sub: "PVC with vinyl acetate and carbon black", img: "recordvinyl",
  hook: "A record is a copolymer picked for one job: to flow into a groove tens of micrometres wide under a hot stamper, then hold that shape for decades while something drags across it. Vinyl acetate softens the PVC enough to mould at a temperature that does not cook it; carbon black is there for colour and, more usefully, for conductivity — unfilled vinyl builds a static charge that pulls dust straight into the groove, which is why coloured and clear pressings are reliably noisier. Every play wears the modulation a little, and the heavier 180 g pressing buys flatness and handling rather than fidelity.",
  stats: [["Groove", "tens of micrometres wide"], ["Carbon black", "for antistatic as much as colour"], ["180 g", "flatness and handling, not fidelity"]],
  uses: "LP and single pressings, lacquer-cut masters, dub plates.",
  link: "https://en.wikipedia.org/wiki/Phonograph_record"
},
{
  id: "woodwool", cat: "music", name: "Wood-wool cement board",
  sub: "shaved spruce bound in cement", img: "woodwool",
  hook: "Long wood shavings sprayed with cement and pressed into a slab loose enough to see through in places — and the gaps are the product. Sound entering the open tangle is lost rubbing against fibre, so the board absorbs across the middle and top of the range without any membrane, facing or cavity to go wrong. Because the binder is mineral it does not burn, rot, or mind being damp, which is why the same material has been nailed to school hall ceilings since the 1920s and left bare in car parks. It is also the cheapest honest absorber there is, and the ugliest.",
  stats: [["Made of", "wood shavings, mineral-bound"], ["Absorbs by", "friction in the open tangle"], ["Indifferent to", "fire, rot and damp"]],
  uses: "Hall and classroom ceilings, car park soffits, industrial acoustic linings, permanent formwork.",
  link: "https://en.wikipedia.org/wiki/Wood_wool"
},
{
  id: "drumshell", cat: "music", name: "Drum shell maple",
  sub: "plies cross-laminated into a cylinder", img: "drumshell",
  hook: "Thin maple veneers glued with their grain crossed and pressed round a mould, because what a shell mainly has to do is hold two heads at several hundred newtons of tension without going oval. Most of the note is the heads and the air between them; the shell decides how fast energy leaves them — a thin shell flexes, absorbs and sings, a thick one reflects and projects. The part that changes the sound most is not the species but the bearing edge, the 45-degree knife the head sits on: cut sharp it is bright and open, rounded it is warm and short.",
  stats: [["Ply", "six to eight, grain crossed"], ["Note", "mostly the heads — the shell colours it"], ["Matters most", "the bearing edge, not the species"]],
  uses: "Drum kits, snare and orchestral drums, marching percussion.",
  link: "https://en.wikipedia.org/wiki/Drum"
},
{
  id: "goss", cat: "music", name: "Grain-oriented electrical steel",
  sub: "the hum in every transformer", img: "goss",
  hook: "Iron with about three percent silicon, rolled and annealed until nearly every crystal is lined up the same way, so that magnetising it along the rolling direction costs very little energy. The accident is that magnetising it also changes its length, by a few parts in a million — magnetostriction — and the core stretches and relaxes twice for every cycle of the supply. That is the hum: not 50 or 60 hertz but twice it, 100 or 120 hertz with a stack of harmonics, radiated by every transformer on the grid and by the one in a valve amplifier, which is why audio transformers are clamped, varnished and sometimes potted.",
  stats: [["Silicon", "about 3 percent, grains aligned"], ["Strain", "a few parts per million, per cycle"], ["Hums at", "twice the line frequency, 100 or 120 Hz"]],
  uses: "Power and audio transformer cores, large motor laminations, inductors and chokes.",
  link: "https://en.wikipedia.org/wiki/Electrical_steel"
}

];
