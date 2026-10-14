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
  swatch: { pattern: "fiber", colors: ["#7d5f12", "#e5c85f", "#4c3807"] },
  hook: "Stronger and stiffer than aramid, and the cautionary tale of the field: it quietly loses strength to heat and humidity, which turned into a body-armour recall.",
  stats: [["Tensile", "~5.8 GPa"], ["Modulus", "~270 GPa"], ["Weakness", "hydrolysis + UV"]],
  uses: "F1 cockpit anti-intrusion panels, tethers, formerly ballistic vests.",
  link: "https://en.wikipedia.org/wiki/Zylon"
},
{
  id: "lignostone", cat: "polymer", name: "Densified wood laminate",
  sub: "Lignostone, Permali",
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
  swatch: { pattern: "gloss", colors: ["#9fb0b8", "#e3edf1", "#5f7079"] },
  hook: "Applied as a gas, not a liquid. The monomer drifts in under vacuum and polymerises on every surface it touches, so it coats the inside of a connector and the back of a chip in the same pinhole-free micron-thick skin, with no solvent and no curing stress.",
  stats: [["Applied as", "a vapour"], ["Thickness", "~0.1–50 µm"], ["Coverage", "truly conformal"]],
  uses: "PCB conformal coating, implant and stent coatings, MEMS, museum conservation.",
  link: "https://en.wikipedia.org/wiki/Parylene"
},
{
  id: "vectran", cat: "polymer", name: "Vectran",
  sub: "melt-spun liquid crystal polymer",
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
  swatch: { pattern: "ribbon", colors: ["#394049", "#b5bdc6", "#1f2328"] },
  hook: "Molten alloy squirted onto a spinning chilled wheel and frozen into a glassy ribbon 25 µm thick. With no crystal structure there is almost no hysteresis loss.",
  stats: [["Thickness", "~25 µm"], ["Core loss", "~70–80% below Si steel"], ["Quench", "~10⁶ K/s"]],
  uses: "Distribution transformer cores, current sensors, anti-theft tags.",
  link: "https://en.wikipedia.org/wiki/Amorphous_metal"
},
{
  id: "terfenol", cat: "metal", name: "Terfenol-D",
  sub: "Tb–Dy–Fe",
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
}
];
