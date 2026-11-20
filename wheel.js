/* The curriculum wheel: Gropius's diagram of the Bauhaus course, drawn again as rings
   that answer a click. The figure is from the statutes of July 1922 and was reprinted
   in the 1923 exhibition book; its English wording is the one usually reproduced. Read it
   from the outside in: the preliminary course, half a year; the three years of workshop
   training with the studies that ran beside it; the seven workshops by their material;
   and building at the centre. Every segment carries what is known about it, and the
   catalogue's own workshop where it has one. Set in the school's lowercase, which Bayer
   made the rule in 1925: the words are the diagram's, the case is the page's. The German is
   the statutes'. No Russian translation from the school's time could be found; the Russian
   here follows the vocabulary of VKhUTEMAS, the Moscow school founded in 1920 on the same
   plan, whose basic department, disciplines of space, colour and composition, and
   production workshops were the same rings under their own names. A switch of dates draws
   the course as it stood in 1919, 1927, 1929 and 1930 on the same rings, from the programme,
   the Dessau regulations, the chronology and the statutes of October 1930. How long each
   stage took, and how many students got how far, is read out in the panel, not drawn. */

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
      cats: ["exotic", "film"], lib: ["albers1963", "moholy1929"] },
    // The segments the other periods need. ring says where each sits; the angles are dealt out
    // evenly when a period is drawn. kind names the ring in the panel where it is not the 1922 one.
    { key: "sculpture19", ring: 1, en: "sculpture", de: "bildhauerei", ru: "скульптура",
      sub: "stone, wood, clay and plaster together · 1919; the pottery went to Dornburg in 1920, stone and wood split in 1921",
      text: ["The 1919 programme names the trades the workshop was for: sculptors, stonemasons, plasterers, wood carvers, potters, plaster casters. It split within two years into the stone and wood workshops of the 1922 wheel and the pottery at Dornburg."],
      cats: ["ceramic", "natural"] },
    { key: "painting19", ring: 1, en: "painting and decoration", de: "malerei und dekoration", ru: "живопись и декор",
      sub: "decorative painters, glass painters, mosaicists, enamellers · 1919; the wall-painting and glass workshops from 1920",
      text: ["One workshop in the 1919 programme for everyone who put colour on a building: decorators, glass painters, mosaicists, enamellers. By 1922 it was two, wall painting under Kandinsky and glass painting under Klee, with Albers at the bench."],
      cats: ["film"] },
    { key: "joinery", ring: 1, en: "joinery", de: "tischlerei", ru: "столярная мастерская",
      sub: "the cabinetmaking workshop · Weimar 1919–25, Dessau 1925–29 under Breuer, then part of the fitting-out workshop",
      text: ["Gropius was its master of form in Weimar; Marcel Breuer, its best apprentice, ran it in Dessau from 1925 and bent the first steel-tube chair there the same year. In the winter of 1929 it was folded with metal and wall painting into the fitting-out workshop."],
      cats: ["natural", "metal"] },
    { key: "weaving", ring: 1, en: "weaving", de: "weberei", ru: "ткацкая мастерская",
      sub: "1919 to 1933, the workshop that outlasted every reorganisation · Muche to 1927, Stölzl 1927–31, Reich 1932–33",
      text: ["The one workshop on every version of the wheel. In Dessau it turned from pictorial hangings to cloth for industry: upholstery for steel-tube chairs, sound-damping and light-reflecting fabrics, prototypes sold to mills."],
      cats: ["fabric", "fibre"], lib: ["stolzl1931", "annialbers1965"] },
    { key: "wallpainting", ring: 1, en: "wall painting", de: "wandmalerei", ru: "настенная живопись",
      sub: "Weimar 1920–25 under Kandinsky and Schlemmer; Dessau 1925–29 under Hinnerk Scheper; then part of the fitting-out workshop",
      text: ["Colour as part of a building rather than a picture on it. Scheper's workshop drew colour plans for whole buildings, the Dessau school among them, and sold wallpaper designs to Rasch from 1929 that paid the school's bills."],
      cats: ["film"] },
    { key: "printing", ring: 1, en: "printing", de: "druckerei", ru: "печатная мастерская",
      sub: "the graphic printing workshop · Weimar 1919–25 under Feininger; in Dessau the printing and advertising workshop under Bayer, 1925–28",
      text: ["In Weimar a fine-art press for woodcuts and lithographs, Feininger's own among them; in Dessau Herbert Bayer turned it to typography, the school's lowercase, letterheads and posters, and the name changed to advertising."],
      cats: ["film"] },
    { key: "stage", ring: 1, en: "stage", de: "bühne", ru: "сцена",
      sub: "Schreyer 1921–23, Schlemmer 1923–29 · the Triadic Ballet; closed when Schlemmer left",
      text: ["Lothar Schreyer founded it in the winter of 1921; Oskar Schlemmer took it over in 1923 and made it the school's public face, with the Triadic Ballet and the Bauhaus dances. It closed when he left in 1929."],
      cats: ["fabric"] },
    { key: "plastic", ring: 1, en: "sculpture workshop", de: "plastische werkstatt", ru: "скульптурная мастерская",
      sub: "Dessau 1925–30 under Joost Schmidt · models, lettering, exhibition stands",
      text: ["What was left of the stone and wood workshops after the move: a modelling shop under Joost Schmidt that made exhibition stands and lettering, and fed the advertising workshop he also ran."],
      cats: ["natural"] },
    { key: "advertising", ring: 1, en: "advertising", de: "reklame", ru: "реклама",
      sub: "typography, printing, exhibitions, from 1929 photography · Bayer 1925–28, Joost Schmidt 1928–32",
      text: ["The 1927 prospectus made advertising one of four fields a student could finish in; in 1929 it took in the printing shop and the new photography class, and under Mies it became Werbung, one of five fields of study."],
      cats: ["film"] },
    { key: "photo", ring: 1, en: "photography", de: "fotografie", ru: "фотография",
      sub: "a class from 1929 under Walter Peterhans, inside advertising; a field of its own in the 1930 statutes",
      text: ["Photography had been everywhere at the school since Moholy-Nagy and nowhere on the timetable until Peterhans's class of 1929: exact studio work, long exposures, the texture of things. Mies made it a department."],
      cats: ["film"] },
    { key: "ausbau", ring: 1, en: "fitting-out", de: "ausbau", ru: "отделка",
      sub: "joinery, metal and wall painting merged in the winter of 1929/30 under Alfred Arndt",
      text: ["Hannes Meyer's second reform: the three workshops that furnish a building became one, the fitting-out workshop under Alfred Arndt, so that a flat could be designed as a whole, furniture, lamps, colour, from one bench. Under Mies it was paired with building itself."],
      cats: ["metal", "natural"] },
    { key: "art", ring: 1, en: "fine art", de: "freie malklasse", ru: "свободная живопись",
      sub: "the free painting classes of Klee and Kandinsky, from 1927; a field of study in the 1930 statutes",
      text: ["Painting was taught at the Bauhaus for eight years without being admitted to the programme; from 1927 Klee and Kandinsky ran free painting classes, and the 1930 statutes list art as one of five fields."],
      cats: ["film"], lib: ["klee1925", "kandinsky1926"] },

    { key: "werklehre19", ring: 2, en: "craft teaching", de: "werklehre", ru: "ремесленное обучение",
      sub: "the 1919 programme's first area of teaching: the craft, learned in a workshop under a master",
      text: ["The programme of April 1919 set out three areas of teaching. The first was the craft itself, learned at the bench the way a guild apprentice learned it."], cats: ["metal"] },
    { key: "zeichnen19", ring: 2, en: "drawing and painting", de: "zeichen- und mallehre", ru: "рисунок и живопись",
      sub: "the second area of 1919: drawing from memory and imagination, from nature, geometry, construction, lettering",
      text: ["The second area: free sketching, drawing and painting of heads, figures and landscapes, ornament, composition, lettering, and the construction and projection drawing a builder needs."], cats: ["film"] },
    { key: "wissen19", ring: 2, en: "science and theory", de: "wissenschaftlich-theoretische lehre", ru: "наука и теория",
      sub: "the third area of 1919: art history, materials, anatomy, colour physics, accounting and contracts",
      text: ["The third area: the history of art, the science of materials, anatomy, the physics and chemistry of colour, and the bookkeeping and contract law of a working craftsman."], cats: ["composite"] },
    { key: "formwerk", ring: 2, en: "form teaching and workshop training", de: "form- und werklehre", ru: "формальное и производственное обучение",
      sub: "normally six semesters under the regulations of winter 1926/27: the form classes of Klee and Kandinsky, the master of craft at the bench",
      text: ["The 1926 regulations put the two together and gave them six semesters: the analytical drawing and form classes of Klee and Kandinsky beside the bench work of the workshop, ending in the journeyman's status the third stage required."],
      cats: ["exotic"], lib: ["klee1925", "kandinsky1926"] },
    { key: "sciences", ring: 2, en: "sciences and building theory", de: "wissenschaftliche fächer", ru: "научные предметы",
      sub: "mathematics, physics, mechanics, statics, technical drawing · taught for the building department from 1927",
      text: ["Once there was a building department the school had to teach what a builder is examined on: mathematics, statics, materials, heating, surveying, taught by engineers hired for it."], cats: ["composite"] },
    { key: "guest", ring: 2, en: "guest lectures and sport", de: "gastvorträge und sport", ru: "лекции и спорт",
      sub: "Hannes Meyer's additions, 1928–30: psychology, sociology, economics, gymnastics",
      text: ["Meyer wanted designers who knew the people they built for: lectures on psychology, sociology and economics by visiting scientists, and compulsory sport."], cats: ["exotic"] },
    { key: "course30", ring: 2, en: "the six-semester course", de: "sechssemestriger lehrgang", ru: "шестисеместровый курс",
      sub: "the statutes of 8 October 1930: one course of six semesters through general training, a workshop and building",
      text: ["Mies van der Rohe's statutes replaced the open-ended course with a fixed one of six semesters, general training inside it, and the workshops as departments of a school of architecture."], cats: ["composite"], lib: ["gropius1930bd"] },

    { key: "vorlehre19", ring: 3, kind: "preliminary course", en: "preliminary course", de: "vorlehre", ru: "вводный курс",
      sub: "Itten's course from the winter of 1919/20, a trial semester; compulsory for every entrant from the statutes of January 1921",
      text: ["Johannes Itten began it in the first winter as his own course and the school made it the gate: from 1921 nobody chose a workshop or a master of form without passing it."], cats: ["exotic"], lib: ["itten1961"] },
    { key: "itten1", ring: 3, line: 1, en: "contrast and material studies", de: "kontrast- und materialstudien", ru: "контрасты и материалы",
      sub: "Itten's exercises: light and dark, rough and smooth, the material collages", text: ["Itten's exercises in contrast, the material collages, and the rhythm studies with the whole arm."], cats: ["exotic"] },
    { key: "itten2", ring: 3, line: 2, en: "analyses of old masters", de: "analysen alter meister", ru: "анализ старых мастеров",
      sub: "drawing the forces in a Grünewald or a Giotto", text: ["The analyses of old masters: a painting redrawn as the lines of force it is built on."], cats: ["film"] },
    { key: "grundlehre", ring: 3, kind: "basic teaching", en: "basic teaching", de: "grundlehre", ru: "основное обучение",
      sub: "the preliminary course renamed in the regulations of winter 1926/27: mostly two semesters, compulsory, and the probation period",
      text: ["The Dessau regulations gave the course its second name and a second semester: the Grundlehre, mostly two semesters, compulsory for everyone, and at the same time the school's probation. Moholy-Nagy and Albers ran it; Albers alone from 1928."],
      cats: ["exotic"], lib: ["albers1963", "moholy1929"] },
    { key: "gl1", ring: 3, line: 1, en: "material studies · Albers", de: "materialstudien · albers", ru: "материаловедение · Альберс",
      sub: "paper, glass, wire and tin worked without tools, up to 18 hours a week", text: ["Albers's material studies, the half of the course this catalogue continues."], cats: ["exotic"], lib: ["albers1963"] },
    { key: "gl2", ring: 3, line: 2, en: "form, colour, construction", de: "form, farbe, konstruktion", ru: "форма, цвет, конструкция",
      sub: "Moholy-Nagy's constructions; the form and colour classes of Klee and Kandinsky", text: ["Moholy-Nagy's balance constructions and the theory classes of Klee and Kandinsky."], cats: ["film"], lib: ["moholy1929"] },
    { key: "allgemein", ring: 3, kind: "general training", en: "general training", de: "allgemeine ausbildung", ru: "общая подготовка",
      sub: "the course's third name, in the statutes of 8 October 1930: mathematics, sciences, psychology and art history beside Albers's class",
      text: ["Under Mies the course was no longer the gate it had been: the statutes of October 1930 call it general training, add mathematics, the sciences, psychology and art history, and fold it into a six-semester plan."],
      cats: ["exotic"] },
    { key: "ag1", ring: 3, line: 1, en: "mathematics, sciences", de: "mathematik, wissenschaften", ru: "математика, науки",
      sub: "added to the course in 1930", text: ["The sciences a school of architecture examines."], cats: ["composite"] },
    { key: "ag2", ring: 3, line: 2, en: "psychology, art history", de: "psychologie, kunstgeschichte", ru: "психология, история искусства",
      sub: "added to the course in 1930", text: ["The humanities the 1930 statutes name."], cats: ["film"] },

    { key: "bau27", ring: 0, en: "building", de: "bau", ru: "строительство",
      sub: "the building department, from April 1927 under Hannes Meyer: the centre finally taught",
      text: ["Eight years after the programme put building at the goal, the school opened a department for it in April 1927 under the Swiss architect Hannes Meyer, who became director a year later. The 1927 prospectus lists architecture beside advertising, stage and free art as the fields a student could finish in, each of at least five semesters."],
      cats: ["composite"], lib: ["gropius1919"] },
    { key: "bau29", ring: 0, en: "building", de: "bau", ru: "строительство",
      sub: "under Hannes Meyer: a nine-semester course, a journeyman's paper to enter; the Törten estate and the Bernau school as the classroom",
      text: ["Meyer's building course ran nine semesters and took only students with a journeyman's paper. It built: the five balcony-access blocks at Törten and the trade-union school at Bernau were designed and detailed by the students as the coursework."],
      cats: ["composite"], lib: ["gropius1930bd"] },
    { key: "bauausbau", ring: 0, en: "building", de: "bau", ru: "строительство",
      sub: "the 1930 statutes: building and fitting-out as one department, the single-family house as the exercise",
      text: ["Mies van der Rohe put building and fitting-out together at the centre of a six-semester course and set the house as its exercise: plans, models and the detailing of a dwelling, from the site to the chair in it, until the school closed in 1933."],
      cats: ["composite"] },
  ];


  // The course as it stood at five dates, each drawn on the same rings. 1922 is the
  // lithograph; the others are read from the programme of April 1919, the Dessau
  // regulations of winter 1926/27, the chronology of 1929 and the statutes of 8 October
  // 1930. ring1 and ring2 are dealt out evenly; outer names the rim, lines the two lines
  // under it, centre the middle; marks are the two durations written down the top line;
  // bar the durations of the stages, read out in the panel; heads the students who got how
  // far; lines5 the words in the centre circle.
  const ERAS = [
    { key: "1919", title: { en: "the programme of April 1919", de: "das programm vom april 1919", ru: "программа апреля 1919" },
      ring1: ["sculpture19", "metal", "joinery", "painting19", "printing", "weaving"],
      ring2: ["werklehre19", "zeichnen19", "wissen19"],
      outer: "vorlehre19", lines: ["itten1", "itten2"], centre: "bau",
      marks: { en: ["1 semester", "3 years"], de: ["1 semester", "3 jahre"], ru: ["1 семестр", "3 года"] },
      lines5: { en: ["the goal of", "all creative", "work", "programme", "april 1919"], de: ["das endziel", "aller bildnerischen", "tätigkeit", "programm", "april 1919"], ru: ["цель всякой", "творческой", "работы", "программа", "апрель 1919"] },
      bar: { en: ["preliminary course · a trial semester; compulsory from 1921", "workshop apprenticeship · three years to the journeyman", "building · no course; work in the office of Gropius"],
             de: ["vorlehre · ein probesemester; pflicht ab 1921", "werkstattlehre · drei jahre bis zum gesellen", "bau · kein lehrgang; arbeit im büro gropius"],
             ru: ["вводный курс · пробный семестр; обязателен с 1921", "обучение в мастерской · три года до подмастерья", "строительство · курса нет; работа в бюро Гропиуса"] },
      heads: [["enrolled", "about 150: 78 men and 59 women in October 1920, 25 to 50 per cent women by semester"], ["journeymen", "none yet: the first three-year apprenticeships ended in 1924"], ["diplomas", "none: the journeyman's paper of the chamber of crafts was the school's leaving certificate"]],
      facts: [["the school", "Weimar, opened 1 April 1919 in the two art schools' buildings"], ["director", "Walter Gropius"],
        ["the course", "three areas of teaching: craft, drawing and painting, science and theory; the grades apprentice, journeyman, young master"],
        ["workshops", "6 in the programme: sculpture, metal, joinery, painting and decoration, printing, weaving; bookbinding and stage added 1921"],
        ["preliminary course", "Itten's, from the winter of 1919/20; compulsory from the statutes of January 1921"],
        ["source", "Gropius, Programm des Staatlichen Bauhauses in Weimar, April 1919; the chronology of the school"]] },
    { key: "1922", title: { en: "the statutes of July 1922", de: "die satzungen vom juli 1922", ru: "устав июля 1922" },
      bar: { en: ["basic course · ½ year; mostly two semesters from 1926", "workshop and the five studies · 3 years, to the journeyman", "building · no term in 1922; a nine-semester course from 1929"],
             de: ["vorlehre · ½ jahr; ab 1926 meist zwei semester", "werkstatt und die fünf lehren · 3 jahre, bis zum gesellen", "bau · 1922 ohne frist; ab 1929 ein kurs von neun semestern"],
             ru: ["основной курс · ½ года; с 1926 обычно два семестра", "мастерская и пять учений · 3 года, до звания подмастерья", "строительство · в 1922 без срока; с 1929 курс в девять семестров"] },
      heads: [["enrolled", "about 150 at a time in Weimar; 89 in the summer of 1924, 63 in the winter the school moved"], ["journeymen", "the first in 1924: Breuer, Dieckmann, Consemüller, Wagenfeld; no total has been published"], ["diplomas", "none yet; the school's own paper came in 1929"]] },
    { key: "1927", title: { en: "Dessau, the regulations of 1926 and the building department of 1927", de: "dessau, die lehrordnung 1926 und die bauabteilung 1927", ru: "Дессау, положение 1926 и строительное отделение 1927" },
      ring1: ["joinery", "metal", "wallpainting", "weaving", "advertising", "stage", "plastic"],
      ring2: ["formwerk", "sciences"],
      outer: "grundlehre", lines: ["gl1", "gl2"], centre: "bau27",
      marks: { en: ["2 semesters", "6 semesters"], de: ["2 semester", "6 semester"], ru: ["2 семестра", "6 семестров"] },
      lines5: { en: ["building", "department", "from april 1927", "hannes meyer", "five semesters"], de: ["bauabteilung", "ab april 1927", "hannes meyer", "mindestens", "fünf semester"], ru: ["строительное", "отделение", "с апреля 1927", "Ханнес Майер", "пять семестров"] },
      bar: { en: ["basic teaching · mostly two semesters, the probation", "form teaching and workshop training · normally six semesters", "building department · at least five semesters, from April 1927"],
             de: ["grundlehre · meist zwei semester, zugleich probezeit", "form- und werklehre · normalerweise sechs semester", "bauabteilung · mindestens fünf semester, ab april 1927"],
             ru: ["основное обучение · обычно два семестра, испытательный срок", "форма и мастерская · обычно шесть семестров", "строительное отделение · не менее пяти семестров, с апреля 1927"] },
      heads: [["enrolled", "83 in 1926, 166 in 1928: 119 men, 51 women"], ["journeymen", "the journeyman's paper still ended the workshop years; no total has been published"], ["diplomas", "the Bauhaus diploma of the Dessau statutes, first issued in 1929"]],
      facts: [["the school", "Dessau from 1925; the new building opened December 1926; renamed Hochschule für Gestaltung"], ["director", "Walter Gropius to April 1928"],
        ["the course", "basic teaching, mostly two semesters → form teaching and workshop training, normally six → architecture, advertising, stage or free art, at least five"],
        ["workshops", "7: joinery, metal, wall painting, weaving, printing and advertising, stage, sculpture; stone, wood, glass painting and pottery were not continued"],
        ["basic teaching", "the Vorkurs renamed Grundlehre in the regulations of winter 1926/27; Moholy-Nagy and Albers"],
        ["building", "a department at last, April 1927, Hannes Meyer"],
        ["source", "Satzung and Lehrordnung, winter 1926/27; the prospectus of 1927; the chronology of the school"]] },
    { key: "1929", title: { en: "under Hannes Meyer, 1929", de: "unter hannes meyer, 1929", ru: "при Ханнесе Майере, 1929" },
      ring1: ["ausbau", "weaving", "advertising", "photo", "stage", "plastic"],
      ring2: ["formwerk", "sciences", "guest"],
      outer: "grundlehre", lines: ["gl1", "gl2"], centre: "bau29",
      marks: { en: ["2 semesters", "9 in all"], de: ["2 semester", "9 insgesamt"], ru: ["2 семестра", "всего 9"] },
      lines5: { en: ["building", "nine semesters", "in all", "a journeyman's", "paper to enter"], de: ["bau", "neun semester", "insgesamt", "gesellenbrief", "zur aufnahme"], ru: ["строительство", "девять", "семестров", "принимают", "подмастерьев"] },
      bar: { en: ["basic teaching · two semesters, Albers alone from 1928", "workshop · to the journeyman's paper, which building required", "building · nine semesters in all from entry"],
             de: ["grundlehre · zwei semester, albers allein ab 1928", "werkstatt · bis zum gesellenbrief, den der bau verlangte", "bau · neun semester insgesamt ab eintritt"],
             ru: ["основное обучение · два семестра, один Альберс с 1928", "мастерская · до свидетельства подмастерья", "строительство · девять семестров от поступления"] },
      heads: [["enrolled", "170 in 1929, 140 of them German; 201 in the winter of 1930, the most the school ever had"], ["journeymen", "required to enter building; no total has been published"], ["diplomas", "the first in November 1929, Consemüller's is No. 4; 133 in all by 1933"]],
      facts: [["the school", "Dessau; the travelling exhibition ten years of Bauhaus, 1929–30"], ["director", "Hannes Meyer, April 1928 to August 1930"],
        ["the course", "basic teaching → a workshop → building, nine semesters in all; a journeyman's paper to enter building"],
        ["workshops", "6: fitting-out (joinery, metal and wall painting merged, winter 1929/30, Alfred Arndt), weaving, advertising with printing and photography, photography (Peterhans, 1929), stage (closed 1929), sculpture"],
        ["added", "guest lectures in psychology, sociology and economics; sport; the students' building brigades at Törten and Bernau"],
        ["source", "the chronology of the school; Zuschlag on the exhibition of 1929"]] },
    { key: "1930", title: { en: "the statutes of 8 October 1930, Mies van der Rohe", de: "die statuten vom 8. oktober 1930, mies van der rohe", ru: "устав 8 октября 1930, Мис ван дер Роэ" },
      ring1: ["ausbau", "advertising", "photo", "weaving", "art"],
      ring2: ["course30"],
      outer: "allgemein", lines: ["ag1", "ag2"], centre: "bauausbau",
      marks: { en: ["", "6 semesters"], de: ["", "6 semester"], ru: ["", "6 семестров"] },
      lines5: { en: ["and fitting-out", "one department", "six semesters", "statutes of", "8 oct 1930"], de: ["und ausbau", "eine abteilung", "sechs semester", "statuten vom", "8. 10. 1930"], ru: ["и отделка", "одно отделение", "шесть семестров", "устав", "8. 10. 1930"] },
      bar: { en: ["the six-semester course of the 1930 statutes · general training inside it, then a workshop, then building"],
             de: ["der sechssemestrige lehrgang der statuten von 1930 · allgemeine ausbildung darin, dann werkstatt, dann bau"],
             ru: ["шестисеместровый курс устава 1930 · общая подготовка внутри него, затем мастерская, затем строительство"] },
      heads: [["enrolled", "168 in the summer of 1932, 33 of them foreign; 32 arrested when Berlin was searched in April 1933"], ["journeymen", "no longer the gate; the six-semester course ended in the diploma"], ["diplomas", "No. 54 in 1931, No. 110 on 1 April 1933; 133 issued in all, one for every nine or ten who had enrolled"]],
      facts: [["the school", "Dessau to September 1932; Berlin-Steglitz 1932–33; closed 20 July 1933"], ["director", "Ludwig Mies van der Rohe, 1930–33"],
        ["the course", "one course of six semesters, defined in the statutes of 8 October 1930"],
        ["fields", "5: building and fitting-out, advertising, photography, weaving, art"],
        ["general training", "the Vorkurs under its third name; mathematics, sciences, psychology, art history added; Albers's class continued"],
        ["source", "Statuten der Hochschule für Gestaltung, 8 October 1930; the chronology of the school"]] }
  ];
  let era = "1922";
  const ERA = () => ERAS.find(e => e.key === era);
  const BY = new Map(SEG.map(s => [s.key, s]));

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
    const E = ERA(), is22 = era === "1922";
    let np = 0;
    // A word on an arc at radius r, centred between two angles. data-fit is the room it may
    // take; fit() below shrinks it once the fonts are in.
    const onArc = (cls, r, a0, a1, text) => {
      const id = `w-p${np++}`;
      defs.push(`<path id="${id}" d="${arc(r, a0, a1)}"/>`);
      const room = f(Math.abs(a1 - a0) / 180 * Math.PI * r * 0.92);
      return `<text class="${cls}" data-fit="${room}"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${esc(text)}</textPath></text>`;
    };
    // The word of a segment, on the arc of its ring: one line, or two when one arc is short
    // for it, as the original breaks its long ones. On the path the glyphs stand outward
    // above the top half and inward below it, so the baseline moves by half a cap height to
    // centre them on the ring, and the first of two lines is the one nearer the letter tops.
    const lines = (s, a0, a1, r0, r1) => {
      const fs = FS[s.ring], rm = (r0 + r1) / 2, mid = (a0 + a1) / 2 % 360, low = mid > 90 && mid < 270;
      const room = (a1 - a0) / 180 * Math.PI * rm, w = word(s);
      let parts = [w];
      if (w.length * EM[s.ring] * fs > 0.92 * room && w.includes(" ")) {
        let best = -1;
        for (let k = w.indexOf(" "); k >= 0; k = w.indexOf(" ", k + 1)) if (best < 0 || Math.abs(k - w.length / 2) < Math.abs(best - w.length / 2)) best = k;
        parts = [w.slice(0, best), w.slice(best + 1)];
      }
      const cap = 0.36 * fs, gap = parts.length > 1 ? 0.58 * fs : 0;
      return parts.map((p, n) => {
        const off = parts.length > 1 ? (n === 0 ? gap : -gap) * (low ? -1 : 1) : 0;
        return onArc(`arc r${s.ring}`, rm + off + (low ? cap : -cap), a0, a1, p);
      }).join("");
    };
    const label = s => `${esc(word(s))}: ${esc(s.sub)}`;
    const circ = (r, sw) => `M${C} ${C - r} A${r} ${r} 0 1 ${sw} ${C} ${C + r} A${r} ${r} 0 1 ${sw} ${C} ${C - r} Z`;
    const seg = (s, a0, a1) => {
      const r0 = R[s.ring - 1], r1 = R[s.ring];
      return `<g class="seg" data-key="${s.key}" tabindex="0" role="button" aria-label="${label(s)}">
        <path class="area" d="${sector(r0, r1, a0, a1)}"/>${lines(s, a0, a1, r0, r1)}
      </g>`;
    };
    // The workshops and the studies: the lithograph's angles in 1922, an even deal otherwise.
    if (is22) { for (const s of SEG) if ((s.ring === 1 || s.ring === 2) && s.a1 != null) out.push(seg(s, s.a0, s.a1)); }
    else for (const keys of [E.ring1, E.ring2]) {
      if (keys.length === 1) {
        // One study for the whole ring: a band with no line across it, the word top and bottom.
        const s = BY.get(keys[0]), r0 = R[s.ring - 1], r1 = R[s.ring], rm = (r0 + r1) / 2, cap = 0.36 * FS[s.ring];
        out.push(`<g class="seg" data-key="${s.key}" tabindex="0" role="button" aria-label="${label(s)}">
        <path class="area" fill-rule="evenodd" d="${circ(r1, 1)} ${circ(r0, 0)}"/>${onArc(`arc r${s.ring}`, rm - cap, 300, 420, word(s))}${onArc(`arc r${s.ring}`, rm + cap, 120, 240, word(s))}
      </g>`);
      } else keys.forEach((k, i) => out.push(seg(BY.get(k), i * 360 / keys.length, (i + 1) * 360 / keys.length)));
    }
    // The outer ring is one band with no line across it, as on the original: its name twice
    // in the upper half, and in the lower half the two lines that name what it held, each a
    // segment of its own to the pointer and the keyboard.
    const vk = BY.get(is22 ? "vorkurs" : E.outer), rm3 = (RO + R[3]) / 2, cap3 = 0.36 * FS[3];
    const ring3 = circ(R[3], 1) + " " + circ(R[2], 0);
    out.push(`<g class="seg" data-key="${vk.key}" tabindex="0" role="button" aria-label="${label(vk)}">
        <path class="area" fill-rule="evenodd" d="${ring3}"/>${onArc("arc r3", rm3 - cap3, 12, 72, word(vk))}${onArc("arc r3", rm3 - cap3, 288, 348, word(vk))}
      </g>`);
    (is22 ? ["form", "matstudy"] : E.lines).forEach((k, n) => {
      const s = BY.get(k), rc = RO + (R[3] - RO) * (n === 0 ? 0.33 : 0.70), capL = 0.36 * 28, span = n === 0 ? 60 : 70;
      out.push(`<g class="seg" data-key="${s.key}" tabindex="0" role="button" aria-label="${label(s)}">${onArc("arc line hit", rc + capL, 180 - span, 180 + span, word(s))}</g>`);
    });
    // The centre: the word and the five lines of the original, each fitted to its chord.
    const bau = BY.get(is22 ? "bau" : E.centre);
    const chord = y => f(2 * Math.sqrt(RI * RI - y * y) - 8);
    const LINES = is22 ? ({ de: ["bauplatz", "versuchsplatz", "entwurf", "bau u. ingenieur-", "wissen"],
      ru: ["площадка", "испытания", "проект", "строительная и", "инженерная наука"] }[lang]
      || ["site", "testing", "design", "building and", "engineering science"]) : E.lines5[lang] || E.lines5.en;
    const centre = `<g class="seg centre" data-key="${bau.key}" tabindex="0" role="button" aria-label="${label(bau)}">
      <circle class="area" cx="${C}" cy="${C}" r="${R[0]}"/>
      <text class="big" x="${C}" y="${C - 34}" text-anchor="middle" data-fit="${chord(-62)}">${esc(word(bau))}</text>
      ${LINES.map((t, n) => { const y = -12 + n * 17; return `<text class="small" x="${C}" y="${C + y}" text-anchor="middle" data-fit="${chord(y > 0 ? y : y - 10.5)}">${esc(t)}</text>`; }).join("")}
    </g>`;
    // The original writes two durations along a line from the rim to the centre. Here they
    // stand on a scale beside the wheel, level with the rings of the lower half: a tick at
    // every ring, the outer band's duration against the rim, the three years against the
    // two rings inside it, and the centre open, since building had no fixed term in 1922.
    const M = is22 ? ({ de: ["½ jahr", "3 jahre"], ru: ["½ года", "3 года"] }[lang] || ["½ year", "3 years"]) : (E.marks[lang] || E.marks.en);
    const BX = 752;
    const marks = `<g class="marks">
      <line x1="${BX}" y1="${f(C + R[0])}" x2="${BX}" y2="${f(C + R[3])}"/>
      ${[R[0], R[2], R[3]].map(r => `<line x1="${BX - 7}" y1="${f(C + r)}" x2="${BX + 7}" y2="${f(C + r)}"/>`).join("")}
      ${M[1] ? `<text data-fit="${f(R[2] - R[0] - 12)}" transform="translate(${BX + 18} ${f(C + R[0] + 6)}) rotate(90)">${esc(M[1])}</text>` : ""}
      ${M[0] ? `<text data-fit="${f(R[3] - R[2] - 12)}" transform="translate(${BX + 18} ${f(C + R[2] + 6)}) rotate(90)">${esc(M[0])}</text>` : ""}
    </g>`;
    const rings = [RI, ...R, RO].map(r => `<circle class="ring" cx="${C}" cy="${C}" r="${r}"/>`).join("");
    // The durations of the stages are not in the drawing: the rings are Gropius's and their
    // widths mean nothing in time. They are read out beside the wheel, in the panel.
    return `<svg class="wheel" viewBox="0 0 780 720" role="group" aria-label="the Bauhaus curriculum as a wheel of rings, as it stood in ${era}">
      <defs>${defs.join("")}</defs>${out.join("")}${centre}${rings}${marks}</svg>`;
  }

  // Once the fonts are in, every word measures itself against its room. A word on a curve
  // is set smaller to fit, since Chrome will not condense text on a path; the straight lines
  // in the centre are condensed up to a quarter, as the original's long words are lettered,
  // and set smaller beyond that. Nothing is done where the DOM cannot measure.
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
    // How many got how far, for the panel beside every period: the rim, the workshops, the
    // centre. From Dietzsch's database of the students, the semester counts in the school's
    // own papers, and the numbered diplomas.
    heads: [
      ["entered the rim", "1,253 in the school's files, 791 men and 462 women; never more than 242 at a time, 63 the winter the school moved, 201 at the most in 1930"],
      ["two semesters or fewer", "674, more than half: the preliminary course, and out"],
      ["reached a workshop", "397 stayed longer and left without a paper; the journeyman's examination before the chamber of crafts, the first in 1924, has no separate total"],
      ["reached the centre", "182 left with a paper of some kind, one in seven; 133 of them the Bauhaus diploma, from No. 4 in November 1929 to No. 110 on 1 April 1933"]
    ],
    vorkurs: [
      ["duration", "half a year in the 1922 statutes; compulsory from 1921; mostly two semesters from winter 1926/27, renamed the Grundlehre; the general training under the 1930 statutes"],
      ["years", "1919 to 1933, every entrant"],
      ["taught by", "Itten 1919–23 · Moholy-Nagy and Albers 1923–28 · Albers alone 1928–33"],
      ["contents", "form and colour, composition, materials, drawing from life and from nature"],
      ["hours", "material studies up to 18 a week under Albers"],
      ["ends with", "the masters assign a workshop, or not"],
      ["how many", "everyone: about 1,250 students in fourteen years, 1,258 in Dietzsch's database; 150 to 200 at a time"]
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
      ["status", "the craft half of the dual mastership; dropped in Dessau, 1925, when graduates taught both"],
      ["how many", "no count has been published; the first passed before the Weimar chamber in 1924, Breuer, Dieckmann, Consemüller and Wagenfeld among them"]
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
    joinery: [["years", "1919–29 as a workshop; in the fitting-out workshop 1929–33"], ["masters", "Gropius, form, to 1925; Marcel Breuer 1925–28; Josef Albers 1928–29"], ["made", "the slatted chair 1922, the Wassily chair 1925, the Dessau fittings"]],
    weaving: [["years", "1919–33, every version of the wheel"], ["masters", "Muche to 1927 · Stölzl 1927–31 · Lilly Reich 1932–33"], ["turned to", "upholstery and curtain cloth for industry, from 1926"]],
    wallpainting: [["years", "1920–29 as a workshop"], ["masters", "Schlemmer, Kandinsky in Weimar; Hinnerk Scheper in Dessau"], ["paid for", "the school, from 1929: Bauhaus wallpapers for Rasch"]],
    printing: [["years", "1919–25 Weimar, Feininger; 1925–28 Dessau, Bayer, as typography and advertising"], ["printed", "the Bauhaus portfolios 1921–24; the Bauhaus books from 1925"]],
    stage: [["years", "1921–29"], ["masters", "Lothar Schreyer 1921–23 · Oskar Schlemmer 1923–29"], ["made", "the Triadic Ballet 1922, the Bauhaus dances 1926–29"]],
    plastic: [["years", "Dessau 1925–30"], ["master", "Joost Schmidt"], ["made", "exhibition stands, lettering, models"]],
    advertising: [["years", "1925–33, under three names: Druckerei und Reklame, Reklame, Werbung"], ["masters", "Herbert Bayer 1925–28 · Joost Schmidt 1928–32"], ["took in", "photography 1929; one of the four fields of 1927 and the five of 1930"]],
    photo: [["years", "a class from 1929; a department in the 1930 statutes"], ["master", "Walter Peterhans 1929–33"]],
    ausbau: [["formed", "winter 1929/30, from joinery, metal and wall painting"], ["master", "Alfred Arndt 1929–32; Lilly Reich 1932–33"], ["paired", "with building, in the 1930 statutes"]],
    art: [["years", "free painting classes from 1927; a field of study 1930–33"], ["masters", "Paul Klee to 1931 · Wassily Kandinsky to 1933"]],
    sculpture19: [["in the programme", "sculptors, stonemasons, plasterers, wood carvers, potters, plaster casters"], ["became", "the stone and wood workshops of 1921; the pottery at Dornburg, 1920"]],
    painting19: [["in the programme", "decorative painters, glass painters, mosaicists, enamellers"], ["became", "the wall-painting and glass-painting workshops, 1920–22"]],
    werklehre19: [["the programme", "area one of three: the craft, in a workshop of the school or under contract outside"], ["grades", "apprentice, journeyman, young master, after the guilds"]],
    zeichnen19: [["the programme", "area two: free sketching, drawing and painting, ornament, lettering, construction and projection drawing, design of interiors and buildings"]],
    wissen19: [["the programme", "area three: art history, materials, anatomy, physics and chemistry of colour, bookkeeping, contracts"]],
    formwerk: [["duration", "normally six semesters, regulations of winter 1926/27"], ["form classes", "Klee: form and pictorial theory; Kandinsky: analytical drawing and colour"], ["ends with", "the journeyman's status the third stage required"]],
    sciences: [["from", "April 1927, for the building department"], ["subjects", "mathematics, statics, building materials, heating, surveying; taught by engineers"]],
    guest: [["years", "1928–30"], ["lecturers", "psychologists, sociologists, economists invited by Meyer"], ["sport", "compulsory, on the school's own ground"]],
    course30: [["statutes", "8 October 1930, Mies van der Rohe"], ["length", "six semesters, fixed"], ["fields", "building and fitting-out, advertising, photography, weaving, art"]],
    vorlehre19: [["began", "winter 1919/20, Johannes Itten"], ["compulsory", "from the statutes of January 1921, one semester, on probation"]],
    itten1: [["exercises", "contrasts, material collages, rhythm studies"]],
    itten2: [["exercises", "old masters redrawn as lines of force"]],
    grundlehre: [["renamed", "winter 1926/27, in the Dessau regulations"], ["duration", "mostly two semesters; compulsory; the probation period"], ["taught by", "Moholy-Nagy and Albers to 1928; Albers alone 1928–33"]],
    gl1: [["hours", "up to 18 a week"], ["materials", "paper, card, glass, wire, tin, worked without tools"]],
    gl2: [["classes", "Moholy-Nagy's constructions; Klee's form theory; Kandinsky's colour and analytical drawing"]],
    allgemein: [["renamed", "statutes of 8 October 1930"], ["added", "mathematics, the sciences, psychology, art history"], ["still taught", "Albers's class, to 1933"]],
    ag1: [["added", "1930"]], ag2: [["added", "1930"]],
    bau27: [["opened", "April 1927"], ["head", "Hannes Meyer"], ["length", "at least five semesters, prospectus of 1927"], ["built", "the Törten estate 1926–28, with Gropius's office"]],
    bau29: [["length", "nine semesters"], ["to enter", "a journeyman's paper"], ["built", "the Bernau trade-union school 1928–30; the Törten balcony-access blocks 1929–30"]],
    bauausbau: [["statutes", "8 October 1930"], ["head", "Mies van der Rohe; Hilberseimer for town planning"], ["exercise", "the single-family house: plans, models, detail"]],
    bau: [
      ["the words", "site (a testing ground), testing, design, building and engineering science"],
      ["duration", "none set in 1922; a nine-semester course from 1929, a journeyman's paper to enter"],
      ["course", "none until April 1927; before that, work in the office of Gropius and Adolf Meyer"],
      ["department", "Hannes Meyer 1927–30 · Mies van der Rohe 1930–33"],
      ["built", "Haus am Horn 1923 · the Dessau building 1926 · Törten estate 1926–28 · the trade-union school at Bernau 1928–30"],
      ["who got there", "133 Bauhaus diplomas, 1929 to 1933, out of 1,253 who enrolled, and 182 with any paper at all: the diagram puts it at the middle as the goal, not the rule"]
    ]
  };
  const factsHTML = rows => rows.map(([k, v]) => `<div class="ro"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join("");

  // The panel beside the wheel: what a segment was, as facts; then, on the full page, the
  // paragraphs; and where it lives in this catalogue.
  function panelHTML(s, full) {
    const E = ERA();
    if (!s) {
      // How long each stage took, from the words the time bar used to carry: label · value.
      const bar = (E.bar[lang] || E.bar.en).map(t => { const i = t.indexOf(" · "); return i < 0 ? ["", t] : [t.slice(0, i), t.slice(i + 3)]; });
      const heads = era === "1922" ? FACTS.heads : (E.heads || []);
      return `<p class="no">the wheel · ${esc(era)}</p><h3>the course, from the outside in</h3>
      <p class="sub">${esc(E.title.en)}; click a ring; click it again to let go</p>
      <div class="facts">${factsHTML(E.facts || FACTS.whole)}</div>
      <p class="no">how long</p><div class="facts">${factsHTML(bar)}</div>
      <p class="no">how many</p><div class="facts">${factsHTML(heads)}</div>`
      + (full ? `<p>The outer ring is the preliminary course, half a year, which every student took first. Inside it run the three years of workshop training and the five studies taught beside it. Then the seven workshops, each named for its material. At the centre, building, where the course was meant to end. The switch in the corner turns the words to the German of the 1922 statutes.</p>` : "");
    }
    const cats = (s.cats || []).map(c => `<a href="${CAT}${c}">${esc(CATS[c] || c)}</a>`).join(", ");
    const lib = (s.lib || []).map(id => LIB.get(id)).filter(Boolean)
      .map(t => `<a href="${CAT}library">${esc(t.author.split(" and ")[0].split(",")[0])}, ${esc(t.english || t.title)}, ${t.year}</a>`).join("; ");
    return `<p class="no">${esc(s.kind || ["the centre", "workshop", "study", "preliminary course"][s.ring])} · ${esc(s.de)} · ${esc(s.ru)}</p>
      <h3>${esc(s.en)}</h3><p class="sub">${esc(s.sub)}</p>
      <div class="facts">${factsHTML(FACTS[s.key] || [])}</div>
      ${full ? s.text.map(t => `<p>${esc(t)}</p>`).join("") : ""}
      <p class="here"><b>in this catalogue:</b> ${cats || "no workshop of its own"}${lib ? `<br><b>in the library:</b> ${lib}` : ""}</p>`;
  }

  // Mount the wheel in a container, with its panel and its switch; full shows the paragraphs
  // under the facts, as the page does.
  function mount(root, panel, toggle, full, eras) {
    let kept = null;
    const draw = () => {
      root.innerHTML = svg(); light(); fit(root);
      if (typeof document !== "undefined" && document.fonts && document.fonts.ready) document.fonts.ready.then(() => fit(root));
    };
    const light = () => {
      for (const g of root.querySelectorAll(".seg")) g.classList.toggle("on", !!kept && g.dataset.key === kept);
    };
    const show = key => { panel.innerHTML = panelHTML(key ? BY.get(key) : null, full); };
    draw(); show(null);
    const pick = key => { kept = kept === key ? null : key; light(); show(kept); };
    root.addEventListener("click", e => { const g = e.target.closest(".seg"); if (g) pick(g.dataset.key); });
    root.addEventListener("keydown", e => {
      const g = e.target.closest && e.target.closest(".seg");
      if (!g || (e.key !== "Enter" && e.key !== " ")) return;
      e.preventDefault(); pick(g.dataset.key);
    });
    if (toggle) toggle.addEventListener("click", e => {
      const b = e.target.closest("[data-lang]");
      if (!b) return;
      lang = b.dataset.lang;
      for (const x of toggle.querySelectorAll("[data-lang]")) x.setAttribute("aria-pressed", String(x.dataset.lang === lang));
      draw(); show(kept);
    });
    if (eras) eras.addEventListener("click", e => {
      const b = e.target.closest("[data-era]");
      if (!b) return;
      era = b.dataset.era; kept = null;
      for (const x of eras.querySelectorAll("[data-era]")) x.setAttribute("aria-pressed", String(x.dataset.era === era));
      draw(); show(null);
    });
  }

  // How many got how far, as branches from the rim down. The branches are the register count
  // of the Bewegte Netze project (Bauhaus-ShortCut No. 1, 2019), built on Dietzsch's database:
  // 1,253 students, 674 of them gone within two semesters, 397 who stayed longer and left
  // without a paper, 182 who left with one; men in ink, women in paper. The 133 diplomas are
  // Siebenbrodt and Schöbe's count, so the lowest split is a subtraction across two sources.
  // Above it, the head count by term, from the school's papers: year, winter term or not, count.
  const HEADS = [[1919, 0, 163], [1919, 1, 242], [1920, 1, 137], [1922, 0, 147], [1924, 0, 89], [1924, 1, 102], [1925, 1, 63],
    [1926, 0, 83], [1928, 0, 166], [1928, 1, 170], [1930, 1, 201], [1932, 0, 168], [1932, 1, 115]];
  const TREE = { all: [791, 462], short: [393, 281], longer: [254, 143], paper: [144, 38], diploma: 133 };
  function treeSVG() {
    const out = [];
    const x0 = 70, x1 = 710, yb = 92, hmax = 62, top = Math.max(...HEADS.map(h => h[2]));
    const xt = (y, w) => x0 + (y + w * 0.5 - 1919) / 14 * (x1 - x0);
    out.push(`<text class="lab" x="${x0 - 30}" y="14">in the school at a time, term by term</text>`);
    out.push(`<line class="base" x1="${x0 - 30}" y1="${yb}" x2="${x1 + 30}" y2="${yb}"/>`);
    for (let y = 1919; y <= 1933; y += 2) out.push(`<text class="yr" x="${f(xt(y, 0))}" y="${yb + 15}" text-anchor="middle">${y}</text>`);
    for (const [y, w, n] of HEADS) {
      const x = xt(y, w), h = n / top * hmax;
      out.push(`<rect class="men" x="${f(x - 4)}" y="${f(yb - h)}" width="8" height="${f(h)}"/><text class="n" x="${f(x)}" y="${f(yb - h - 3)}" text-anchor="middle">${n}</text>`);
    }
    // The branches: a scale in pixels a head, bars split men then women, ribbons between.
    const S = 0.38, bh = 20;
    const sum = p => p[0] + p[1];
    const bar = (x, y, p) => `<rect class="men" x="${f(x)}" y="${y}" width="${f(p[0] * S)}" height="${bh}"/><rect class="women" x="${f(x + p[0] * S)}" y="${y}" width="${f(p[1] * S)}" height="${bh}"/>`;
    const rib = (a0, a1, y0, b0, b1, y1) => { const ym = (y0 + y1) / 2; return `<path class="rib" d="M${f(a0)} ${y0} C${f(a0)} ${ym} ${f(b0)} ${ym} ${f(b0)} ${y1} L${f(b1)} ${y1} C${f(b1)} ${ym} ${f(a1)} ${ym} ${f(a1)} ${y0} Z"/>`; };
    const text = (x, y, lines, anchor) => lines.map((t, n) => `<text class="${n ? "" : "big"}" x="${f(x)}" y="${y + n * 15}"${anchor ? ` text-anchor="${anchor}"` : ""}>${esc(t)}</text>`).join("");
    const Y0 = 150, Y1 = 262, Y2 = 392;
    const wAll = sum(TREE.all) * S, rx = (820 - wAll) / 2;
    const wA = sum(TREE.short) * S, wB = sum(TREE.longer) * S, wC = sum(TREE.paper) * S;
    const ax = 40, bx = 336, cx = 540;
    const wJ = (sum(TREE.paper) - TREE.diploma) * S, wD = TREE.diploma * S, jx = cx, dx = cx + wJ + 22;
    out.push(`<text class="lab" x="${f(rx)}" y="${Y0 - 20}">the register: who entered, and how far each got</text>`);
    out.push(text(rx, Y0 - 6, ["1,253 entered, 1919 to 1933 · 791 men in ink, 462 women in paper"]));
    out.push(rib(rx, rx + wA, Y0 + bh, ax, ax + wA, Y1), rib(rx + wA, rx + wA + wB, Y0 + bh, bx, bx + wB, Y1), rib(rx + wA + wB, rx + wAll, Y0 + bh, cx, cx + wC, Y1));
    out.push(bar(rx, Y0, TREE.all), bar(ax, Y1, TREE.short), bar(bx, Y1, TREE.longer), bar(cx, Y1, TREE.paper));
    out.push(text(ax, Y1 + bh + 17, ["674 left within two semesters", "the rim, and no further: more than half", "393 men · 281 women"]));
    out.push(text(bx, Y1 + bh + 17, ["397 stayed longer, no paper", "the workshops", "254 men · 143 women"]));
    out.push(text(cx, Y1 + bh + 17, ["182 left with a paper", "one in seven", "144 men · 38 women"]));
    out.push(rib(cx, cx + wJ, Y1 + bh, jx, jx + wJ, Y2), rib(cx + wJ, cx + wC, Y1 + bh, dx, dx + wD, Y2));
    out.push(`<rect class="men" x="${f(jx)}" y="${Y2}" width="${f(wJ)}" height="${bh}"/><rect class="men" x="${f(dx)}" y="${Y2}" width="${f(wD)}" height="${bh}"/>`);
    out.push(text(jx - 10, Y2 + 10, ["about 50 a journeyman's paper and no diploma", "the difference of two counts, not a record"], "end"));
    out.push(text(dx, Y2 + bh + 19, ["133 the Bauhaus diploma", "the centre, from November 1929", "Siebenbrodt and Schöbe's count", "155 is also quoted"]));
    return `<svg class="tree" viewBox="0 0 820 494" role="img" aria-label="the Bauhaus register as branches: 1,253 students entered, 674 left within two semesters, 397 stayed longer without a paper, 182 left with one, 133 of them with the diploma">${out.join("")}</svg>`;
  }

  // The switch of periods, for the card and the page: one button a date.
  const eraHTML = id => `<span class="opts era-opts" id="${id}" role="group" aria-label="the course at five dates">${ERAS.map(e =>
    `<button class="opt" type="button" data-era="${e.key}" aria-pressed="${String(e.key === era)}" title="${esc(e.title.en)}">${e.key}</button>`).join("")}</span>`;

  // The wheel as an entry of the catalogue, for the shelf of its own on the main page.
  const card = {
    id: "wheel", wheel: true, name: "The curriculum wheel",
    sub: "Gropius's scheme of the Bauhaus course, 1922, drawn as rings that answer a click",
    hook: "The school drew its course as a target. Everyone began on the rim, with half a year of the preliminary course; those who passed entered one of seven workshops, named for a material, for three years, with five studies beside the bench; a few reached the centre, which the school called building. Click a ring for what it was, who ran it and what became of it; click it again to let go; the switch turns the words to the German of the statutes. This catalogue is the lower rim carried on, and its workshops are the middle ring.",
    stats: [["Rings", "preliminary course, studies, workshops, building"], ["Workshops", "stone, wood, metal, textiles, colour, glass, clay"], ["Drawn", "statutes of July 1922; reprinted 1923"]],
    cats: ["exotic"], link: "bauhaus.html"
  };

  return { SEG, ERAS, FACTS, svg, treeSVG, panelHTML, mount, eraHTML, card };
})();
