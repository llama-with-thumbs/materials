/* Plates: the figures between the cards. A plate is not a material; it is a diagram that
   explains several, the way the plates in the Bauhaus books sat between the chapters.
   Each one names the workshops it belongs to (cats) and the cards it explains (cards),
   and carries either a credited image (img, through tools/images.txt like any card) or
   a drawn figure (figure), which figures.js renders from the data here and makes
   interactive. Shape of a drawn figure:

     figure: {
       x: [min, max, "axis label"], y: [min, max, "axis label"],
       zones: [{ id, name, phases, structure, note, one: true|false, pts: [[x, y], ...] }],
       lines: [{ pts: [[x, y], ...], red: true, dashed: true }],      // extra rules
       labels: [[x, y, "text"]],                                        // set inside a zone
       xticks: [[value, "text"]], yticks: [[value, "text"]]
     }

   Values are in the axis units; figures.js scales them. Zones are closed polygons and
   must tile the field with no overlap, because the readout picks the first zone that
   contains the pointer. */

// The liquidus, solidus and solvus lines of the metastable iron–cementite diagram, as
// published (Massalski; ASM Handbook vol. 3), rounded to the nearest five degrees.
// Shared between the zone outlines so that neighbouring zones meet exactly.
const FEC = (() => {
  const A = [0, 1538], B = [0.53, 1495], H = [0.09, 1495], J = [0.17, 1495], N = [0, 1394];
  const C = [4.3, 1147], D = [6.67, 1227], E = [2.14, 1147], F = [6.67, 1147];
  const G = [0, 912], P = [0.022, 727], S = [0.76, 727], K = [6.67, 727], Q = [0.005, 0];
  const liqBC = [B, [1.0, 1455], [1.5, 1410], [2.0, 1365], [2.5, 1315], [3.0, 1265], [3.5, 1215], [4.0, 1165], C];
  const liqCD = [C, [5.0, 1170], [6.0, 1205], D];
  const solJE = [J, [0.5, 1440], [1.0, 1360], [1.5, 1270], E];
  const a3GS = [G, [0.1, 890], [0.2, 865], [0.3, 840], [0.4, 815], [0.5, 790], [0.6, 765], S];
  const acmSE = [S, [1.0, 790], [1.25, 870], [1.5, 945], [1.75, 1030], [2.0, 1110], E];
  const rev = a => a.slice().reverse();
  return {
    x: [0, 6.67, "carbon, mass %"], y: [0, 1600, "temperature, °C"],
    zones: [
      { id: "L", name: "liquid", phases: "melt", one: true,
        structure: "none: the atoms have no lattice",
        note: "steel is poured from about 1600 °C; the lower boundary is the liquidus, where the first crystals appear",
        pts: [A, ...liqBC, ...liqCD.slice(1), [6.67, 1600], [0, 1600]] },
      { id: "d", name: "delta ferrite", phases: "δ-iron", one: true,
        structure: "body-centred cubic, the same packing as ferrite, stable only in this corner above 1394 °C",
        note: "dissolves at most 0.09 % carbon; most steels pass through it for a few seconds while solidifying",
        pts: [A, H, N] },
      { id: "dL", name: "delta ferrite and melt", phases: "δ-iron in liquid", one: false,
        structure: "bcc crystals growing in the melt",
        note: "the first solid in a low-carbon steel is δ, not austenite",
        pts: [A, B, H] },
      { id: "dg", name: "delta ferrite and austenite", phases: "δ-iron and γ-iron", one: false,
        structure: "bcc and fcc side by side",
        note: "the peritectic at 1495 °C and 0.17 % C: melt plus δ react to give γ",
        pts: [H, J, N] },
      { id: "gL", name: "austenite and melt", phases: "γ-iron in liquid", one: false,
        structure: "fcc crystals growing in the melt",
        note: "solidification; the crystals are poorer in carbon than the liquid they grow from, which is why castings segregate",
        pts: [J, B, ...liqBC.slice(1), E, ...rev(solJE).slice(1)] },
      { id: "g", name: "austenite", phases: "γ-iron", one: true,
        structure: "face-centred cubic; carbon sits in the octahedral holes, up to 2.14 % at 1147 °C",
        note: "every hardening, normalising and forging operation starts in this field; it is not magnetic",
        pts: [N, J, ...solJE.slice(1), ...rev(acmSE).slice(1), ...rev(a3GS).slice(1)] },
      { id: "LC", name: "melt and cementite", phases: "liquid and Fe₃C", one: false,
        structure: "orthorhombic iron carbide, 12 iron and 4 carbon atoms to the cell, growing in the melt",
        note: "hypereutectic cast irons: the carbide forms before the melt freezes",
        pts: [...liqCD, F] },
      { id: "gC", name: "austenite and cementite", phases: "γ-iron and Fe₃C", one: false,
        structure: "fcc austenite with orthorhombic Fe₃C; in cast irons the eutectic mixture of the two is called ledeburite",
        note: "hypereutectoid steels above 727 °C, and white cast iron between 727 and 1147 °C",
        pts: [...acmSE, F, K] },
      { id: "ag", name: "ferrite and austenite", phases: "α-iron and γ-iron", one: false,
        structure: "bcc ferrite forming from fcc austenite as it cools through A3",
        note: "the intercritical field; dual-phase steels are heat-treated here on purpose",
        pts: [...a3GS, P] },
      { id: "a", name: "ferrite", phases: "α-iron", one: true,
        structure: "body-centred cubic; carbon almost insoluble, 0.022 % at most and far less when cold",
        note: "soft, ductile, magnetic below 770 °C: this sliver is nearly pure iron",
        pts: [G, P, Q, [0, 0]] },
      { id: "aC", name: "ferrite and cementite", phases: "α-iron and Fe₃C", one: false,
        structure: "bcc ferrite plus orthorhombic Fe₃C: as pearlite below 0.76 % C, pearlite with extra carbide above it, ledeburite in white iron",
        note: "what every steel and white iron is at room temperature; grey iron replaces the carbide with graphite",
        pts: [P, K, [6.67, 0], Q] }
    ],
    lines: [
      { pts: [P, K], red: true },                      // A1, the eutectoid line
      { pts: [[0, 770], [0.76, 770]], dashed: true },  // A2, the Curie line
      { pts: [[2.14, 0], [2.14, 1147]], dashed: true } // steel on the left, iron on the right
    ],
    labels: [
      [2.2, 1480, "liquid"], [0.9, 1000, "austenite γ"], [0.7, 1432, "γ + melt"],
      [2.55, 1200, "γ + melt"], [5.5, 1168, "melt + Fe₃C"], [4.0, 950, "austenite + Fe₃C"],
      [4.0, 400, "ferrite + Fe₃C"], [0.25, 820, "α + γ"], [0.05, 1465, "δ"],
      [0.5, 300, "steel"], [2.5, 300, "cast iron"]
    ],
    xticks: [[0, "0"], [0.76, "0.76"], [2.14, "2.14"], [4.3, "4.3"], [6.67, "6.67"]],
    yticks: [[0, "0"], [727, "727"], [912, "912"], [1147, "1147"], [1394, "1394"], [1538, "1538"]]
  };
})();

window.PLATES = [
{
  id: "fec", name: "The iron–carbon diagram",
  sub: "phases of steel and cast iron against carbon and temperature",
  hook: "Every heat treatment of steel is a path drawn on this map. Across is carbon, up is temperature, and the lines are where iron changes its mind about how to pack its atoms. Below 912 °C pure iron is body-centred cubic and holds almost no carbon; above it the atoms repack face-centred and suddenly dissolve two percent. Heat a steel into that upper field and quench it, and the carbon is trapped in a lattice that wants to collapse: that is hardening. Cool it slowly instead and the austenite splits at 727 °C into alternating plates of ferrite and iron carbide, pearlite, which is what most steel is. Past 2.14 percent carbon the melt itself throws out carbide, and the material is cast iron.",
  stats: [["Eutectoid", "0.76 % C at 727 °C, into pearlite"], ["Austenite holds", "up to 2.14 % C at 1147 °C"], ["Steel or iron", "the line is 2.14 % carbon"]],
  cats: ["metal"],
  cards: ["wroughtiron", "pianowire", "tuningfork", "greyiron", "hadfield", "damascus", "hss", "maraging"],
  link: "https://en.wikipedia.org/wiki/Allotropes_of_iron",
  src: ["Cambridge: the microstructure of steels", "https://www.phase-trans.msm.cam.ac.uk/2008/Steel_Microstructure/SM.html"],
  figure: FEC
},
{
  id: "ashby", name: "The Ashby chart: stiffness against density",
  sub: "every material placed by how stiff and how heavy it is, on a log–log map",
  hook: "A material-selection map in the manner of Michael Ashby: every material is a point, placed by how stiff it is up the page and how heavy across, both on a logarithmic scale that holds six powers of ten. Metals gather dense and stiff at the top right; polymers and foams fall away to the lower left; a wood or a carbon-fibre laminate buys much of a metal's stiffness at a fraction of its weight. Slide a line of constant stiffness-per-weight up and to the left and it finds the lightest material that will still do the job, which is how a generation of engineers learned to choose one.",
  stats: [["Axes", "density across, stiffness up, each on a log scale"], ["Span", "six powers of ten in stiffness, three in density"], ["Read it", "stiff and light is up and to the left"]],
  cats: ["metal", "ceramic", "polymer", "composite"],
  cards: ["pianowire", "greyiron", "nitinol", "bmg", "alumina", "sic", "ytzp", "cfrp", "aerogel", "ptfe", "bamboo", "cork"],
  link: "https://en.wikipedia.org/wiki/Material_selection",
  figure: {
    x: [30, 25000, "density, kg/m³"], xlog: true,
    y: [0.001, 1500, "stiffness, GPa"], ylog: true,
    zones: [],
    points: [
      { id: "pianowire", name: "Music wire (steel)", fam: "metal", x: 7850, y: 205 },
      { id: "wroughtiron", name: "Wrought iron", fam: "metal", x: 7700, y: 190 },
      { id: "greyiron", name: "Grey cast iron", fam: "metal", x: 7150, y: 110 },
      { id: "hadfield", name: "Hadfield steel", fam: "metal", x: 7900, y: 200 },
      { id: "duplex", name: "Duplex stainless", fam: "metal", x: 7800, y: 200 },
      { id: "hss", name: "High-speed steel", fam: "metal", x: 8100, y: 220 },
      { id: "maraging", name: "Maraging steel", fam: "metal", x: 8100, y: 190 },
      { id: "invar", name: "Invar 36", fam: "metal", x: 8100, y: 145 },
      { id: "nitinol", name: "Nitinol", fam: "metal", x: 6450, y: 70 },
      { id: "bmg", name: "Bulk metallic glass", fam: "metal", x: 6100, y: 95 },
      { id: "metglas", name: "Metglas", fam: "metal", x: 7200, y: 110 },
      { name: "Titanium", fam: "metal", x: 4500, y: 116 },
      { name: "Aluminium", fam: "metal", x: 2700, y: 70 },
      { name: "Copper", fam: "metal", x: 8930, y: 120 },
      { name: "Tungsten", fam: "metal", x: 19300, y: 410 },
      { name: "Lead", fam: "metal", x: 11340, y: 16 },
      { id: "alumina", name: "Alumina", fam: "ceramic", x: 3900, y: 380 },
      { id: "sic", name: "Silicon carbide", fam: "ceramic", x: 3150, y: 410 },
      { id: "ytzp", name: "Zirconia (Y-TZP)", fam: "ceramic", x: 6050, y: 205 },
      { id: "zta", name: "Zirconia-toughened alumina", fam: "ceramic", x: 4100, y: 350 },
      { id: "sialon", name: "Sialon", fam: "ceramic", x: 3250, y: 300 },
      { name: "Diamond", fam: "ceramic", x: 3515, y: 1050 },
      { id: "sodalime", name: "Soda-lime glass", fam: "glass", x: 2500, y: 70 },
      { id: "borosilicate", name: "Borosilicate glass", fam: "glass", x: 2230, y: 64 },
      { id: "peek", name: "PEEK", fam: "polymer", x: 1300, y: 3.8 },
      { id: "pmma", name: "PMMA", fam: "polymer", x: 1180, y: 3.0 },
      { id: "epoxy", name: "Epoxy", fam: "polymer", x: 1250, y: 3.0 },
      { id: "ptfe", name: "PTFE", fam: "polymer", x: 2180, y: 0.5 },
      { id: "hdpe", name: "HDPE", fam: "polymer", x: 960, y: 1.0 },
      { id: "silicone", name: "Silicone rubber", fam: "elastomer", x: 1100, y: 0.01 },
      { id: "neoprene", name: "Neoprene", fam: "elastomer", x: 1250, y: 0.003 },
      { name: "Natural rubber", fam: "elastomer", x: 930, y: 0.0015 },
      { id: "cfrp", name: "CFRP laminate", fam: "composite", x: 1550, y: 120 },
      { id: "gfrp", name: "Glass-fibre laminate", fam: "composite", x: 1900, y: 25 },
      { id: "aerogel", name: "Silica aerogel", fam: "foam", x: 120, y: 0.004 },
      { name: "Flexible PU foam", fam: "foam", x: 45, y: 0.002 },
      { id: "cork", name: "Cork", fam: "foam", x: 180, y: 0.02 },
      { id: "bamboo", name: "Bamboo", fam: "wood", x: 700, y: 18 },
      { id: "balsa", name: "Balsa (along grain)", fam: "wood", x: 160, y: 3.5 }
    ],
    labels: [
      [9500, 290, "metals"], [2250, 800, "ceramics"], [1480, 95, "glass"],
      [820, 160, "composites"], [720, 6.5, "polymers"], [780, 0.006, "elastomers"],
      [50, 0.013, "foams"], [300, 11, "woods"]
    ],
    xticks: [[100, "100"], [1000, "1000"], [10000, "10000"]],
    yticks: [[0.001, "0.001"], [0.01, "0.01"], [0.1, "0.1"], [1, "1"], [10, "10"], [100, "100"], [1000, "1000"]]
  }
}
];
