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
