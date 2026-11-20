/* The curriculum wheel: Gropius's diagram of the Bauhaus course, drawn again as rings
   that answer the pointer. The figure is from the statutes of July 1922 and was reprinted
   in the 1923 exhibition book; its English wording is the one usually reproduced. Read it
   from the outside in: the preliminary course, half a year; the three years of workshop
   training with the studies that ran beside it; the seven workshops by their material;
   and building at the centre. Every segment carries what is known about it, and the
   catalogue's own workshop where it has one. Set in the school's lowercase, which Bayer
   made the rule in 1925: the words are the diagram's, the case is the page's. The German is
   the statutes'. No Russian translation from the school's time could be found; the Russian
   here follows the vocabulary of VKhUTEMAS, the Moscow school founded in 1920 on the same
   plan, whose basic department, disciplines of space, colour and composition, and
   production workshops were the same rings under their own names. */

window.WHEEL = (() => {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const CAT = "./#cat=";

  // The segments. ring: 0 centre, 1 workshops, 2 studies, 3 the preliminary course.
  // a0, a1: degrees clockwise from the top. en/de: the words on the diagram, both tongues.
  const SEG = [
    { key: "bau", ring: 0, en: "building", de: "bau", ru: "строительство",
      sub: "the centre · Bau · site, testing, design, building and engineering science",
      text: [
        "Gropius's programme of 1919 opened with the sentence that the goal of all creative work is the building, and the diagram puts it at the middle, the place a student arrives at last. The four words round it are the diagram's own: the site, meaning a testing ground; testing; design; and building and engineering science.",
        "For eight years it was a destination without a course. The school taught no architecture until 1927; a student who got this far worked in the private office of Gropius and Adolf Meyer, or on the one house the workshops built together, the Haus am Horn of 1923, designed by the painter Georg Muche. The building department opened in April 1927 under Hannes Meyer, who became director in 1928 and built the trade-union school at Bernau with Hans Wittwer and the students. Under Mies van der Rohe, from 1930, the school became in effect a school of building."
      ],
      cats: ["composite"], lib: ["gropius1919", "gropius1930bd"] },

    { key: "wood", ring: 1, a0: 0, a1: 48.4, en: "wood", de: "holz", ru: "дерево",
      sub: "the wood sculpture workshop and the joinery · Weimar 1919, Dessau to 1933",
      text: [
        "Two workshops in Weimar handled wood. The wood sculpture shop carved the whole interior of the Sommerfeld house in 1920 and 1921, the apprentice Joost Schmidt cutting its doors and stair cladding, and made models for the other shops. The joinery was Itten's from 1919 to 1922, Gropius's own from 1922 to 1925, and Marcel Breuer's from 1925 to 1928: the African chair of 1921, the slatted chair of 1924, the furniture of the Haus am Horn, and the stacking tables Thonet put into production in 1929.",
        "In Dessau the sculpture shops were merged under Schmidt and the joinery became, in 1929, the fitting-out workshop. Breuer's bent tubular steel, the club chair of 1926, was made outside the school; the wood stayed."
      ],
      cats: ["natural"] },

    { key: "metal", ring: 1, a0: 48.4, a1: 102.8, en: "metal", de: "metall", ru: "металл",
      sub: "the metal workshop · 1919 to 1929, then part of the fitting-out workshop",
      text: [
        "It began in the old gold, silver and copper forge of the Weimar art school, with Itten as master of form from 1919 and the silversmith Christian Dell as master of craft from 1922. When Itten left in 1923 László Moholy-Nagy turned the forge into a design laboratory: prototypes for industry, a small production line, and the pieces the school is remembered by, the Bauhaus lamp of 1924 by Wagenfeld and Jucker, Marianne Brandt's tea infuser, Tümpel's and Brandt's ashtrays.",
        "In Dessau the shop lit the new building with its own lamps, numbered ME, and in 1928, with Brandt running it, signed contracts with the lamp makers Schwintzer & Gräff of Berlin and Körting & Mathiesen of Leipzig, whose Kandem desk lamp by Brandt and Hin Bredendieck sold in tens of thousands. In 1929 it was folded into the fitting-out workshop under Alfred Arndt."
      ],
      cats: ["metal"], lib: ["gropius1925na", "brandt1966"] },

    { key: "textiles", ring: 1, a0: 102.8, a1: 156.8, en: "textiles", de: "gewebe", ru: "ткань",
      sub: "the weaving workshop · 1919 to 1933, the most productive of them all",
      text: [
        "It opened in 1919 with Itten as master of form and Helene Börner teaching the craft until 1925; the women's class, where most women were sent whatever they had asked for, was merged into it in 1920. Georg Muche ran it from 1921 to 1927 and pushed it from the hand loom toward industrial production and the so-called Bauhaus fabrics sold by the metre; Gunta Stölzl, who had taught herself dyeing as a student, led it to 1931, then Lilly Reich.",
        "The students learned weaving, spinning, dyeing, crochet, macramé and embroidery, and put Klee's and Kandinsky's colour teaching through the loom: Stölzl's slit tapestry of 1927, Benita Koch-Otte's nursery carpet of 1923, Anni Albers's wall cloths. Under Hannes Meyer the work turned to cheap fabrics and synthetic fibres for buildings. It was the workshop that paid."
      ],
      cats: ["fibre", "fabric", "warmth"], lib: ["stolzl1931", "annialbers1965"] },

    { key: "color", ring: 1, a0: 156.8, a1: 208.5, en: "colour", de: "farbe", ru: "цвет",
      sub: "the wall-painting workshop · 1920 to 1933, the fitting-out workshop from 1929",
      text: [
        "Colour on the diagram meant the wall-painting workshop: Itten first, Oskar Schlemmer and Wassily Kandinsky from 1922 to 1925, then Hinnerk Scheper, who had trained in it, from 1925 to 1933, with Alfred Arndt standing in while Scheper was in Moscow from 1929 to 1931. It painted the corridors of the Weimar building to Itten's scheme, the murals of the 1923 exhibition, and gave each of the Dessau masters' houses its own colour plan, Scheper letting the building decide where colour went and using it to show the way through.",
        "Its best seller was paper: in 1929 the Hanover firm Rasch took an exclusive contract for Bauhaus wallpaper, designed by students and in production from 1930. This catalogue has no paint workshop. Its colour is one red, and the three primaries are kept for the three forms."
      ],
      cats: [], lib: ["kandinsky1926"] },

    { key: "glass", ring: 1, a0: 208.5, a1: 261.1, en: "glass", de: "glas", ru: "стекло",
      sub: "the glass-painting workshop · Weimar 1920 to 1925",
      text: [
        "Stained glass had its own workshop in Weimar, with Itten and then Paul Klee as masters of form, and Josef Albers, who had arrived as a student in 1920 and built the shop up from salvaged glass, as its craftsman from 1923. It made leaded windows for the Sommerfeld house in 1921 and the Otte house in 1922, and Albers's sandblasted flashed-glass pictures came out of it.",
        "It did not go to Dessau; when the school moved in 1925 the workshop closed and Albers went to the preliminary course. Glass stayed in the Bauhaus as a material of the building, the curtain wall of the Dessau workshop wing, rather than of a workshop."
      ],
      cats: ["ceramic"] },

    { key: "clay", ring: 1, a0: 261.1, a1: 309.5, en: "clay", de: "ton", ru: "глина",
      sub: "the pottery at Dornburg · 1919 to 1925",
      text: [
        "The pottery opened in 1919 and moved in 1920 to Dornburg an der Saale, twenty kilometres from Weimar, into the stables of a castle, because there was a kiln and a master potter there: Max Krehan, master of craft until 1925, with the sculptor Gerhard Marcks as master of form. Theodor Bogler and Otto Lindig were its apprentices and then its masters.",
        "In 1923 it turned from the wheel to slip casting and designed for the factory: Bogler's combination teapot, built from interchangeable parts, and his mocha machine, shown at the Werkbund exhibition in Stuttgart in 1924. It was the one workshop that did not survive the move to Dessau in 1925; Lindig kept part of it going in Weimar."
      ],
      cats: ["ceramic"] },

    { key: "stone", ring: 1, a0: 309.5, a1: 360, en: "stone", de: "stein", ru: "камень",
      sub: "the stone sculpture workshop · Weimar 1919 to 1925",
      text: [
        "Weimar kept separate workshops for stone and for wood, both directed in practice by Itten and then Schlemmer, with the sculptor Josef Hartwig, who carved the Bauhaus chess set of 1924, as the master of craft. The stone shop cut the Monument to the March Dead in the Weimar cemetery in 1921 and 1922 to Gropius's design, and made plaster models for the pottery and fittings for the 1923 exhibition.",
        "In Dessau the two were merged into one sculpture workshop under the young master Joost Schmidt, which taught spatial thinking through elementary sculpture and turned, by 1929, to exhibition design. The catalogue has no stone; its nearest shelf is wood, bone and horn, and the lattices."
      ],
      cats: ["natural"] },

    { key: "nature", ring: 2, a0: 0, a1: 69.1, en: "study of nature", de: "naturstudium", ru: "изучение натуры",
      sub: "the studies beside the workshop, three years",
      text: [
        "Drawing from nature ran beside the workshop for the whole three years. Itten had students draw a thistle, a plant stem or a block of wood until they had its structure, not its outline; Klee carried on from 1921 with studies of growth and movement; Moholy-Nagy and later Walter Peterhans brought the camera to it. The point was not botany but the habit of looking at how a thing is built before deciding what to make of it."
      ],
      cats: ["natural"] },

    { key: "materials", ring: 2, a0: 69.1, a1: 144.1, en: "study of materials", de: "lehre von den stoffen", ru: "материаловедение",
      sub: "the studies beside the workshop, three years",
      text: [
        "The science of the workshop's own stuff: what a clay body does in the kiln, what a dye does to wool, what an alloy does under the hammer. In Weimar it was taught by the masters of craft from experience; under Hannes Meyer in Dessau the programme added lectures from outside the school in the sciences and in sociology, on the argument that a designer who could not reckon the material could not design for the factory. This catalogue is a study of materials, and nothing else."
      ],
      cats: ["metal", "ceramic", "polymer"] },

    { key: "space", ring: 2, a0: 144.1, a1: 218.9, en: "space study, colour study, composition study", de: "raumlehre · farblehre · kompositionslehre", ru: "пространство, цвет, композиция",
      sub: "the studies beside the workshop, three years",
      text: [
        "The form teaching proper, the Formlehre: Klee's elementary design theory from 1921 to 1931, which became the Pedagogical Sketchbook of 1925; Kandinsky's colour seminar and analytical drawing from 1922 to 1933, which became Point and Line to Plane in 1926; and Oskar Schlemmer's course on the human figure in 1928 and 1929. Kandinsky's 1923 questionnaire, which gave the yellow to the triangle, the red to the square and the blue to the circle, is the page's own colour rule."
      ],
      cats: ["exotic"], lib: ["klee1925", "kandinsky1926"] },

    { key: "construction", ring: 2, a0: 218.9, a1: 290.9, en: "study of construction and representation", de: "lehre der konstruktionen und der darstellung", ru: "конструкция и изображение",
      sub: "the studies beside the workshop, three years",
      text: [
        "How to draw a thing so that someone else can make it: technical drawing, projection and descriptive geometry, lettering, model building. It was taught by the masters of craft and by the building office, and from 1927 inside the building department; Herbert Bayer's lowercase type and Joost Schmidt's lettering course belong here as much as any machine drawing."
      ],
      cats: ["additive"] },

    { key: "tools", ring: 2, a0: 290.9, a1: 360, en: "study of materials and tools", de: "material- und werkzeuglehre", ru: "материалы и инструменты",
      sub: "the studies beside the workshop, three years",
      text: [
        "The craft itself, the Werklehre, learned at the bench from the master of craft: warping a loom, turning a pot, raising a bowl, cutting a tenon. A student signed an apprentice's contract, and the three years ended, where the trade allowed it, in the journeyman's examination before the local chamber of crafts, so that a Bauhaus weaver or joiner left with a trade paper as well as a school's. It was the half of the dual mastership that made the school a school and not an academy."
      ],
      cats: ["metal", "natural"] },

    { key: "vorkurs", ring: 3, a0: 0, a1: 360, en: "basic course", de: "vorlehre", ru: "основной курс",
      sub: "the preliminary course · half a year, compulsory, from 1919; a full year later",
      text: [
        "Every entrant took it before any workshop would have them: a half-year on probation, set up by Johannes Itten in 1919 and run by him until he left in the spring of 1923. From that autumn László Moholy-Nagy and Josef Albers shared it, Albers taking the handicraft and material work in the first semester and Moholy-Nagy a course on material and space in the second; when Moholy-Nagy left with Gropius in 1928, Albers ran it alone until the school closed in 1933. It covered form and colour, composition, materials, drawing from life and from nature, and at the end of it the masters decided which workshop a student was fit for.",
        "The diagram writes half a year at the top; in Dessau it grew to a full year. This catalogue is filed as its continuation, and the cards that fit no workshop are kept under its name."
      ],
      cats: ["exotic"], lib: ["itten1961", "albers1963"] },

    { key: "form", ring: 3, line: 1, en: "elementary study of form", de: "elementare formlehre", ru: "элементарное учение о форме",
      sub: "the first half of the preliminary course",
      text: [
        "Itten's exercises: the contrasts, light against dark, rough against smooth, large against small, drawn until the student could feel them; rhythm studies made with the whole arm; analyses of old paintings for their structure; and breathing and movement before the drawing began. After him the form side passed to Klee's and Kandinsky's theory courses, and Moholy-Nagy's studies of balance and suspended construction."
      ],
      cats: ["exotic"], lib: ["klee1925", "itten1961"] },

    { key: "matstudy", ring: 3, line: 2, en: "study of materials in the basic workshop", de: "materiestudien in der vorwerkstatt", ru: "изучение материалов в учебной мастерской",
      sub: "the second half of the preliminary course, and the half this page continues",
      text: [
        "Students handled wood, metal, glass, paper, clay and cloth with simple tools and no product in mind: a sheet of paper folded until it stood up and carried a load, a brass sheet cut and bent into a structure, wood shavings arranged by how they sprang, a study in wire. Albers made this the heart of the course, extended it to as much as eighteen hours a week, and called it a school of invention: the most effect from the least material, energy and time.",
        "That exercise, carried on, is this catalogue: what each material will do, how it is made, and what it refuses."
      ],
      cats: ["exotic", "film"], lib: ["albers1963", "moholy1929"] }
  ];

  // The texts in the library that a segment leans on, by id, so a reader can go to the source.
  const LIB = window.LIBRARY ? new Map(window.LIBRARY.map(t => [t.id, t])) : new Map();
  const CATS = window.CATS || {};

  // Geometry: a 720-square viewBox, the centre at 360, rings by outer radius, all measured
  // on the lithograph in the 1922 statutes (Getty Research Institute 850513), whose outer
  // ring is 349 px across in the scan, near enough one to one: the centre circle is drawn
  // double at 83.5 and 94.5, the workshops end at 203, the studies at a double line of
  // 265.5 and 275, the preliminary course at 346. The letters keep the lithograph's
  // proportion to their ring, the same in every language; a word that will not fit its
  // room is condensed as the original's long ones are, and only then set smaller.
  const C = 360, R = [94.5, 203, 265.5, 346], RI = 83.5, RO = 275;
  const FS = { 1: 46, 2: 24, 3: 40 }, EM = { 1: 0.56, 2: 0.52, 3: 0.56 };
  const rad = a => (a - 90) * Math.PI / 180;
  const pt = (r, a) => [C + r * Math.cos(rad(a)), C + r * Math.sin(rad(a))];
  const f = n => n.toFixed(1);
  // An annular sector from a0 to a1 clockwise, between radii r0 and r1.
  function sector(r0, r1, a0, a1) {
    const big = a1 - a0 > 180 ? 1 : 0;
    const [x0, y0] = pt(r1, a0), [x1, y1] = pt(r1, a1), [x2, y2] = pt(r0, a1), [x3, y3] = pt(r0, a0);
    return `M${f(x0)} ${f(y0)} A${r1} ${r1} 0 ${big} 1 ${f(x1)} ${f(y1)} L${f(x2)} ${f(y2)} A${r0} ${r0} 0 ${big} 0 ${f(x3)} ${f(y3)} Z`;
  }
  // An arc for text at radius r. In the lower half the arc runs the other way, so the
  // words stay the right way up.
  function arc(r, a0, a1) {
    const mid = (a0 + a1) / 2 % 360, low = mid > 90 && mid < 270;
    const big = a1 - a0 > 180 ? 1 : 0;
    if (!low) { const [x0, y0] = pt(r, a0), [x1, y1] = pt(r, a1); return `M${f(x0)} ${f(y0)} A${r} ${r} 0 ${big} 1 ${f(x1)} ${f(y1)}`; }
    const [x0, y0] = pt(r, a1), [x1, y1] = pt(r, a0); return `M${f(x0)} ${f(y0)} A${r} ${r} 0 ${big} 0 ${f(x1)} ${f(y1)}`;
  }

  let lang = "en";
  const word = s => s[lang];

  function svg() {
    const out = [], defs = [];
    let np = 0;
    // A word on an arc at radius r, centred between two angles. data-fit is the room it may
    // take; fit() below condenses or shrinks it once the fonts are in.
    const onArc = (cls, r, a0, a1, text) => {
      const id = `w-p${np++}`;
      defs.push(`<path id="${id}" d="${arc(r, a0, a1)}"/>`);
      const room = f(Math.abs(a1 - a0) / 180 * Math.PI * r * 0.92);
      return `<text class="${cls}" data-fit="${room}"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${esc(text)}</textPath></text>`;
    };
    // The word of a segment: one line, or two when one arc is short for it, as the original
    // breaks its long ones; the first line is the one nearer the reader's top. On the path
    // the glyphs stand outward above the top half and inward below it, so the baseline
    // moves by half a cap height to centre them on the ring.
    const lines = (s, a0, a1, r0, r1) => {
      const fs = FS[s.ring], rm = (r0 + r1) / 2, mid = (a0 + a1) / 2 % 360, low = mid > 90 && mid < 270;
      const room = (a1 - a0) / 180 * Math.PI * rm, w = word(s);
      // At the sides the original letters the workshop names straight along the tangent,
      // not on the curve; straight text can also be condensed, which text on a path cannot.
      if (s.ring === 1 && (Math.abs(mid - 90) < 45 || Math.abs(mid - 270) < 45)) {
        const [x, y] = pt(rm, mid), rot = low ? mid - 180 : mid;
        return `<text class="arc r1" data-fit="${f(room * 0.92)}" x="${f(x)}" y="${f(y)}" text-anchor="middle" dominant-baseline="central" transform="rotate(${f(rot)} ${f(x)} ${f(y)})">${esc(w)}</text>`;
      }
      let parts = [w];
      if (w.length * EM[s.ring] * fs > 0.92 * room && w.includes(" ")) {
        let best = -1;
        for (let k = w.indexOf(" "); k >= 0; k = w.indexOf(" ", k + 1)) if (best < 0 || Math.abs(k - w.length / 2) < Math.abs(best - w.length / 2)) best = k;
        parts = [w.slice(0, best), w.slice(best + 1)];
      }
      // The first line is the one nearer the tops of the letters: outside above the top
      // half, inside below it, where the words are turned over, as the original has them.
      const cap = 0.36 * fs, gap = parts.length > 1 ? 0.58 * fs : 0, innerFirst = low;
      return parts.map((p, n) => {
        const off = parts.length > 1 ? (n === 0 ? gap : -gap) * (innerFirst ? -1 : 1) : 0;
        return onArc(`arc r${s.ring}`, rm + off + (low ? cap : -cap), a0, a1, p);
      }).join("");
    };
    const label = s => `${esc(word(s))}: ${esc(s.sub)}`;
    const seg = s => {
      const r0 = R[s.ring - 1], r1 = R[s.ring];
      return `<g class="seg" data-key="${s.key}" tabindex="0" role="button" aria-label="${label(s)}">
        <path class="area" d="${sector(r0, r1, s.a0, s.a1)}"/>${lines(s, s.a0, s.a1, r0, r1)}
      </g>`;
    };
    for (const s of SEG) if (s.ring === 1 || s.ring === 2) out.push(seg(s));
    // The outer ring is one band with no line across it, as on the original: the name of the
    // preliminary course twice in the upper half, and in the lower half the two lines that
    // name what it held, each a segment of its own to the pointer and the keyboard.
    const vk = SEG.find(s => s.key === "vorkurs"), rm3 = (RO + R[3]) / 2, cap3 = 0.36 * FS[3];
    const circ = (r, sw) => `M${C} ${C - r} A${r} ${r} 0 1 ${sw} ${C} ${C + r} A${r} ${r} 0 1 ${sw} ${C} ${C - r} Z`;
    const ring3 = circ(R[3], 1) + " " + circ(R[2], 0);
    out.push(`<g class="seg" data-key="vorkurs" tabindex="0" role="button" aria-label="${label(vk)}">
        <path class="area" fill-rule="evenodd" d="${ring3}"/>${onArc("arc r3", rm3 - cap3, 12, 72, word(vk))}${onArc("arc r3", rm3 - cap3, 288, 348, word(vk))}
      </g>`);
    for (const s of SEG) if (s.line) {
      const rc = RO + (R[3] - RO) * (s.line === 1 ? 0.33 : 0.70), capL = 0.36 * 28, span = s.line === 1 ? 60 : 70;
      out.push(`<g class="seg" data-key="${s.key}" tabindex="0" role="button" aria-label="${label(s)}">${onArc("arc line hit", rc + capL, 180 - span, 180 + span, word(s))}</g>`);
    }
    // The centre: the word and the five lines of the original, each fitted to its chord.
    const bau = SEG[0];
    const chord = y => f(2 * Math.sqrt(RI * RI - y * y) - 8);
    const LINES = { de: ["bauplatz", "versuchsplatz", "entwurf", "bau u. ingenieur-", "wissen"],
      ru: ["площадка", "испытания", "проект", "строительная и", "инженерная наука"] }[lang]
      || ["site", "testing", "design", "building and", "engineering science"];
    const centre = `<g class="seg centre" data-key="bau" tabindex="0" role="button" aria-label="${label(bau)}">
      <circle class="area" cx="${C}" cy="${C}" r="${R[0]}"/>
      <text class="big" x="${C}" y="${C - 34}" text-anchor="middle" data-fit="${chord(-62)}">${esc(word(bau))}</text>
      ${LINES.map((t, n) => { const y = -12 + n * 17; return `<text class="small" x="${C}" y="${C + y}" text-anchor="middle" data-fit="${chord(y > 0 ? y : y - 10.5)}">${esc(t)}</text>`; }).join("")}
    </g>`;
    // The line down from the top, as on the original, with the two durations written along
    // it: half a year across the outer ring, three years across the two inside it.
    const M = { de: ["½ jahr", "3 jahre"], ru: ["½ года", "3 года"] }[lang] || ["½ year", "3 years"];
    const marks = `<g class="marks">
      <line x1="${C}" y1="${C - R[3]}" x2="${C}" y2="${C - R[0]}"/>
      <text transform="translate(${C + 4} ${C - R[3] + 7}) rotate(90)">${esc(M[0])}</text>
      <text transform="translate(${C + 4} ${C - R[2] + 7}) rotate(90)">${esc(M[1])}</text>
    </g>`;
    const rings = [RI, ...R, RO].map(r => `<circle class="ring" cx="${C}" cy="${C}" r="${r}"/>`).join("");
    // Under the rings, the same three stages to scale in years: the half-year of the basic
    // course, the three years at the bench to the journeyman, and building, which the 1922
    // statutes left without a term and which became a nine-semester course in 1929. The
    // rings above are drawn as Gropius drew them, and their widths mean nothing in time.
    const T0 = 60, T1 = 660, TY = 748, TH = 18, YRS = 8, PY = (T1 - T0) / YRS;
    const W3 = (lang === "de" ? ["vorlehre · ½ jahr; ab 1926 meist zwei semester", "werkstatt und die fünf lehren · 3 jahre, bis zum gesellen", "bau · 1922 ohne frist; ab 1929 ein kurs von neun semestern"]
      : lang === "ru" ? ["основной курс · ½ года; с 1926 обычно два семестра", "мастерская и пять учений · 3 года, до звания подмастерья", "строительство · в 1922 без срока; с 1929 курс в девять семестров"]
      : ["basic course · ½ year; mostly two semesters from 1926", "workshop and the five studies · 3 years, to the journeyman", "building · no term in 1922; a nine-semester course from 1929"]);
    const stages = [[0.5, "a"], [3, "b"], [4.5, "c open"]];
    let x = T0, bars = "", labs = "";
    stages.forEach(([yr, cls], i) => {
      const w = yr * PY;
      bars += `<rect class="stage ${cls}" x="${f(x)}" y="${TY}" width="${f(w)}" height="${TH}"/>`;
      // Three lines, each starting where its stage starts, so none runs into the next.
      labs += `<text class="tl" x="${f(x)}" y="${TY - 36 + i * 14}">${esc(W3[i])}</text>`;
      x += w;
    });
    let ticks = "";
    for (let y = 0; y <= YRS; y++) ticks += `<line class="tt" x1="${f(T0 + y * PY)}" y1="${TY + TH}" x2="${f(T0 + y * PY)}" y2="${TY + TH + 5}"/><text class="tk" x="${f(T0 + y * PY)}" y="${TY + TH + 17}" text-anchor="middle">${y}</text>`;
    const unit = { de: "jahre, maßstäblich; die ringe oben sind es nicht", ru: "годы, в масштабе; кольца выше — нет" }[lang] || "years, to scale; the rings above are not";
    const time = `<g class="time">${bars}${labs}${ticks}<text class="tk unit" x="${T1}" y="${TY + TH + 32}" text-anchor="end">${esc(unit)}</text></g>`;
    return `<svg class="wheel" viewBox="0 0 720 800" role="group" aria-label="the Bauhaus curriculum as a wheel of rings, with the three stages to scale in years beneath">
      <defs>${defs.join("")}</defs>${out.join("")}${centre}${rings}${marks}${time}</svg>`;
  }

  // Once the fonts are in, every word measures itself against its room. A straight word up
  // to a quarter too long is condensed, as the original's long ones are lettered, and a
  // longer one is set smaller until a quarter is enough; a word on a curve is set smaller.
  // Nothing is done where the DOM cannot measure.
  function fit(root) {
    const svgEl = root.querySelector("svg");
    if (!svgEl || typeof svgEl.createSVGPoint !== "function") return;
    // A word on a path does not measure reliably, so each is measured as plain text in a
    // scratch element with the same class, then the path copy is told its length.
    const probe = document.createElementNS("http://www.w3.org/2000/svg", "text");
    probe.setAttribute("x", "-9999"); probe.setAttribute("y", "-9999"); svgEl.appendChild(probe);
    for (const t of root.querySelectorAll("text[data-fit]")) {
      const tp = t.querySelector("textPath"), el = t;
      el.removeAttribute("textLength"); el.removeAttribute("lengthAdjust"); t.style.fontSize = "";
      probe.setAttribute("class", t.getAttribute("class")); probe.textContent = (tp || t).textContent;
      const max = +t.dataset.fit, w = probe.getComputedTextLength();
      if (!(w > max)) continue;
      const ratio = max / w, fs = parseFloat(getComputedStyle(probe).fontSize);
      // Chrome will not condense text on a path, so a word on a curve is only set smaller.
      if (tp) { t.style.fontSize = (fs * ratio).toFixed(1) + "px"; continue; }
      if (ratio < 0.75) t.style.fontSize = (fs * ratio / 0.75).toFixed(1) + "px";
      el.setAttribute("textLength", max.toFixed(1)); el.setAttribute("lengthAdjust", "spacingAndGlyphs");
    }
    probe.remove();
  }

  // The facts of each segment, as label and value: what it was, how long, when, who, how many.
  const FACTS = {
    whole: [
      ["the school", "1919 to 1933: Weimar 1919–25, Dessau 1925–32, Berlin 1932–33"],
      ["directors", "Gropius 1919–28 · Hannes Meyer 1928–30 · Mies van der Rohe 1930–33"],
      ["the course", "basic course, half a year → a workshop, three years → building"],
      ["durations", "½ year in the 1922 statutes, mostly two semesters from winter 1926 · 3 years to the journeyman · building with no term in 1922, a nine-semester course from 1929"],
      ["workshops", "7 on the wheel: stone, wood, metal, textiles, colour, glass, clay"],
      ["studies", "5 beside the bench: nature, materials, space and colour and composition, construction and representation, materials and tools"],
      ["the diagram", "Gropius, statutes of July 1922; reprinted 1923 in Staatliches Bauhaus Weimar 1919–1923"]
    ],
    vorkurs: [
      ["duration", "half a year in the 1922 statutes; compulsory from 1921; mostly two semesters from winter 1926/27, renamed the Grundlehre; the general training under the 1930 statutes"],
      ["years", "1919 to 1933, every entrant"],
      ["taught by", "Itten 1919–23 · Moholy-Nagy and Albers 1923–28 · Albers alone 1928–33"],
      ["contents", "form and colour, composition, materials, drawing from life and from nature"],
      ["hours", "material studies up to 18 a week under Albers"],
      ["ends with", "the masters assign a workshop, or not"]
    ],
    form: [
      ["part of", "the preliminary course, the first half-year"],
      ["taught by", "Itten 1919–23; then the theory courses of Klee and Kandinsky, and Moholy-Nagy"],
      ["exercises", "contrasts (light–dark, rough–smooth, large–small), rhythm studies with the whole arm, analyses of old masters, breathing and movement"],
      ["texts", "Pedagogical Sketchbook 1925 · Point and Line to Plane 1926"]
    ],
    matstudy: [
      ["part of", "the preliminary course, the first half-year; up to 18 hours a week from 1928"],
      ["materials", "wood, metal, glass, paper, clay, cloth"],
      ["tools", "simple hand tools; no product in mind"],
      ["taught by", "Itten 1919–23 · Albers 1923–33"],
      ["principle", "the most effect from the least material, energy and time"],
      ["carried on by", "this catalogue"]
    ],
    tools: [
      ["duration", "three years, at the bench"],
      ["taught by", "the master of craft of each workshop"],
      ["form", "an apprentice's contract"],
      ["ends with", "the journeyman's examination before the chamber of crafts, where the trade allowed it"],
      ["status", "the craft half of the dual mastership; dropped in Dessau, 1925, when graduates taught both"]
    ],
    nature: [
      ["duration", "through the three years"],
      ["taught by", "Itten; Klee from 1921; Peterhans with the camera from 1929"],
      ["content", "drawing from nature, a thistle, a stem, a block of wood, for its structure"],
      ["aim", "to see how a thing is built before deciding what to make of it"]
    ],
    materials: [
      ["duration", "through the three years"],
      ["content", "the science of the workshop's stuff: clay in the kiln, dye in wool, an alloy under the hammer"],
      ["taught by", "the masters of craft, from experience; outside lecturers in the sciences under Meyer, 1928–30"],
      ["carried on by", "this catalogue, which is a study of materials and nothing else"]
    ],
    space: [
      ["subjects", "3: Raumlehre, Farbenlehre, Kompositionslehre"],
      ["taught by", "Klee 1921–31 · Kandinsky 1922–33 · Schlemmer, the human figure, 1928–29"],
      ["texts", "Pedagogical Sketchbook 1925 · Point and Line to Plane 1926"],
      ["colour rule", "yellow triangle, red square, blue circle: Kandinsky's questionnaire, 1923"]
    ],
    construction: [
      ["subjects", "technical drawing, projection and descriptive geometry, lettering, model building"],
      ["taught by", "the masters of craft; the building office; the building department from 1927"],
      ["also", "Bayer's lowercase type, 1925; Joost Schmidt's lettering course"]
    ],
    stone: [
      ["years", "1919 to 1925, Weimar only"],
      ["masters", "form: Itten, then Schlemmer · craft: Josef Hartwig"],
      ["work", "the Monument to the March Dead, 1921–22; plaster models for the pottery; fittings for the 1923 exhibition"],
      ["fate", "merged with wood into one sculpture workshop in Dessau, under Joost Schmidt"]
    ],
    wood: [
      ["workshops", "2 in Weimar: wood sculpture, and the joinery"],
      ["years", "1919 to 1933; the fitting-out workshop from 1929"],
      ["masters", "joinery: Itten 1919–22 · Gropius 1922–25 · Breuer 1925–28"],
      ["work", "the Sommerfeld house carvings 1920–21 · African chair 1921 · slatted chair 1924 · Haus am Horn furniture 1923 · stacking tables, Thonet 1929"],
      ["fate", "folded into the fitting-out workshop, 1929"]
    ],
    metal: [
      ["years", "1919 to 1929; part of the fitting-out workshop after"],
      ["masters", "form: Itten 1919–23 · Moholy-Nagy 1923–28 · craft: Christian Dell 1922–25 · Brandt in charge 1928"],
      ["work", "the Bauhaus lamp 1924 · tea infusers, ashtrays · the Dessau building's lamps, numbered ME · the Kandem lamps, 1928"],
      ["industry", "Schwintzer & Gräff, Berlin; Körting & Mathiesen, Leipzig"],
      ["fate", "merged into the fitting-out workshop under Alfred Arndt, 1929"]
    ],
    textiles: [
      ["years", "1919 to 1933, the whole life of the school"],
      ["masters", "form: Itten 1919–21 · Muche 1921–27 · Stölzl to 1931 · Lilly Reich · craft: Helene Börner to 1925"],
      ["learned", "weaving, spinning, dyeing, crochet, macramé, embroidery"],
      ["work", "fabrics for the Sommerfeld house and the Haus am Horn · Bauhaus fabrics by the metre · Stölzl's slit tapestry 1927 · synthetic fibres under Meyer"],
      ["note", "the women's class was merged into it in 1920; it was the workshop that paid"]
    ],
    color: [
      ["workshop", "wall painting"],
      ["years", "1920 to 1933; the fitting-out workshop from 1929"],
      ["masters", "Itten · Schlemmer and Kandinsky 1922–25 · Hinnerk Scheper 1925–33 · Alfred Arndt standing in 1929–31"],
      ["work", "the Weimar corridors · the 1923 exhibition murals · a colour plan for each Dessau masters' house"],
      ["best seller", "Bauhaus wallpaper, Rasch of Hanover, contract 1929, in production 1930"]
    ],
    glass: [
      ["workshop", "glass painting"],
      ["years", "1920 to 1925, Weimar only"],
      ["masters", "form: Itten, then Klee · craft: Josef Albers from 1923"],
      ["work", "leaded windows for the Sommerfeld house 1921 and the Otte house 1922; Albers's sandblasted glass pictures"],
      ["fate", "closed at the move to Dessau; Albers to the preliminary course"]
    ],
    clay: [
      ["workshop", "the pottery"],
      ["where", "Dornburg an der Saale from 1920, twenty kilometres from Weimar"],
      ["years", "1919 to 1925"],
      ["masters", "form: Gerhard Marcks · craft: Max Krehan 1920–25 · then Theodor Bogler and Otto Lindig"],
      ["work", "thrown ware; from 1923 slip-cast prototypes for industry: the combination teapot, the mocha machine; shown at Stuttgart 1924"],
      ["fate", "the one workshop not moved to Dessau in 1925; Lindig kept part of it in Weimar"]
    ],
    bau: [
      ["the words", "site (a testing ground), testing, design, building and engineering science"],
      ["duration", "none set in 1922; a nine-semester course from 1929, a journeyman's paper to enter"],
      ["course", "none until April 1927; before that, work in the office of Gropius and Adolf Meyer"],
      ["department", "Hannes Meyer 1927–30 · Mies van der Rohe 1930–33"],
      ["built", "Haus am Horn 1923 · the Dessau building 1926 · Törten estate 1926–28 · the trade-union school at Bernau 1928–30"],
      ["who got there", "a few: the diagram puts it at the middle as the goal, not the rule"]
    ]
  };
  const factsHTML = rows => rows.map(([k, v]) => `<div class="ro"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join("");

  // The panel beside the wheel: what a segment was, as facts; then, on the full page, the
  // paragraphs; and where it lives in this catalogue.
  function panelHTML(s, full) {
    if (!s) return `<p class="no">the wheel</p><h3>the course, from the outside in</h3>
      <p class="sub">Gropius, 1922; point at a ring, click to keep it</p>
      <div class="facts">${factsHTML(FACTS.whole)}</div>`
      + (full ? `<p>The outer ring is the preliminary course, half a year, which every student took first. Inside it run the three years of workshop training and the five studies taught beside it. Then the seven workshops, each named for its material. At the centre, building, where the course was meant to end. The switch above the wheel turns the words to the German of the 1922 statutes.</p>` : "");
    const cats = (s.cats || []).map(c => `<a href="${CAT}${c}">${esc(CATS[c] || c)}</a>`).join(", ");
    const lib = (s.lib || []).map(id => LIB.get(id)).filter(Boolean)
      .map(t => `<a href="${CAT}library">${esc(t.author.split(" and ")[0].split(",")[0])}, ${esc(t.english || t.title)}, ${t.year}</a>`).join("; ");
    return `<p class="no">${esc(["the centre", "workshop", "study", "preliminary course"][s.ring])} · ${esc(s.de)} · ${esc(s.ru)}</p>
      <h3>${esc(s.en)}</h3><p class="sub">${esc(s.sub)}</p>
      <div class="facts">${factsHTML(FACTS[s.key] || [])}</div>
      ${full ? s.text.map(t => `<p>${esc(t)}</p>`).join("") : ""}
      <p class="here"><b>in this catalogue:</b> ${cats || "no workshop of its own"}${lib ? `<br><b>in the library:</b> ${lib}` : ""}</p>`;
  }

  // Mount the wheel in a container, with its panel and its switch; full shows the paragraphs
  // under the facts, as the page does.
  function mount(root, panel, toggle, full) {
    let kept = null;
    const draw = () => {
      root.innerHTML = svg(); light(); fit(root);
      if (typeof document !== "undefined" && document.fonts && document.fonts.ready) document.fonts.ready.then(() => fit(root));
    };
    const light = () => {
      for (const g of root.querySelectorAll(".seg")) g.classList.toggle("on", !!kept && g.dataset.key === kept);
    };
    const show = key => { panel.innerHTML = panelHTML(key ? SEG.find(s => s.key === key) : null, full); };
    draw(); show(null);
    root.addEventListener("pointerover", e => { const g = e.target.closest(".seg"); if (g && !kept) show(g.dataset.key); });
    root.addEventListener("pointerout", e => { const g = e.target.closest(".seg"); if (g && !kept) show(null); });
    const pick = key => { kept = kept === key ? null : key; light(); show(kept); };
    root.addEventListener("click", e => { const g = e.target.closest(".seg"); if (g) pick(g.dataset.key); });
    root.addEventListener("keydown", e => {
      const g = e.target.closest && e.target.closest(".seg");
      if (!g || (e.key !== "Enter" && e.key !== " ")) return;
      e.preventDefault(); pick(g.dataset.key);
    });
    root.addEventListener("focusin", e => { const g = e.target.closest(".seg"); if (g && !kept) show(g.dataset.key); });
    if (toggle) toggle.addEventListener("click", e => {
      const b = e.target.closest("[data-lang]");
      if (!b) return;
      lang = b.dataset.lang;
      for (const x of toggle.querySelectorAll("[data-lang]")) x.setAttribute("aria-pressed", String(x.dataset.lang === lang));
      draw();
    });
  }

  // The wheel as an entry of the catalogue, for the shelf of its own on the main page.
  const card = {
    id: "wheel", wheel: true, name: "The curriculum wheel",
    sub: "Gropius's scheme of the Bauhaus course, 1922, drawn as rings that answer the pointer",
    hook: "The school drew its course as a target. Everyone began on the rim, with half a year of the preliminary course; those who passed entered one of seven workshops, named for a material, for three years, with five studies beside the bench; a few reached the centre, which the school called building. Point at a ring for what it was, who ran it and what became of it; click to keep it; the switch turns the words to the German of the statutes. This catalogue is the lower rim carried on, and its workshops are the middle ring.",
    stats: [["Rings", "preliminary course, studies, workshops, building"], ["Workshops", "stone, wood, metal, textiles, colour, glass, clay"], ["Drawn", "statutes of July 1922; reprinted 1923"]],
    cats: ["exotic"], link: "bauhaus.html"
  };

  return { SEG, FACTS, svg, panelHTML, mount, card };
})();
