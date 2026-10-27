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
}
];
