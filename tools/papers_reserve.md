# papers.json — build log (2026-10-22)

Output: 48 papers, 24 founding + 24 recent, 20 with a verified open-access link.
Every DOI in papers.json was fetched from api.crossref.org/works/<doi>; title, journal, year, volume and pages come from the Crossref record. 0 candidates failed DOI resolution.

## Verified but cut for the 48-paper count (reserve list, DOIs all resolve)

| id | doi | why cut |
|---|---|---|
| peker1993 | 10.1063/1.110520 | Vitreloy bulk metallic glass; metallic glass already covered by klement1960. OA copy exists: https://authors.library.caltech.edu/records/7n9wh-yak19 |
| zheng2014 | 10.1126/science.1252291 | ultralight microlattice; lattices covered by zhang2019 and hou2019. OA: https://hdl.handle.net/1721.1/88084 |
| bednorz1986 | 10.1007/BF01303701 | cuprate origin; wu1987 chosen instead (YBCO card) |
| smith2000 | 10.1103/PhysRevLett.84.4184 | negative-index metamaterial (metamaterial card) |
| wong2011 | 10.1038/nature10447 | SLIPS (slips card) |
| saito2003 | 10.1126/science.1081957 | Gum Metal (gummetal card) |
| hench1971 | 10.1002/jbm.820050611 | Bioglass (bioglass card) |
| morin1959 | 10.1103/PhysRevLett.3.34 | VO2 transition (vo2 card) |
| comiskey1998 | 10.1038/28349 | electrophoretic ink (eink card) |
| yang2008 | 10.1021/nl072369t | darkest CNT array (vantablack card) |
| mecklenburg2012 | 10.1002/adma.201200491 | aerographite (aerographite card) |
| zhang2004 | 10.1126/science.1104276 | CNT yarn (cntyarn card) |
| jonkers2010 | 10.1016/j.ecoleng.2008.12.036 | bacterial self-healing concrete (selfhealconcrete card) |
| boscke2011 | 10.1063/1.3634052 | ferroelectric HfO2 (hfo2 card) |
| higashiwaki2012 | 10.1063/1.3674287 | Ga2O3 transistor (ga2o3 card) |
| montarnal2011 | 10.1126/science.1212648 | vitrimers (epoxy card) |
| ovshinsky1968 | 10.1103/PhysRevLett.21.1450 | chalcogenide switching (chalcogenide card) |
| knight1996 | 10.1364/OL.21.001547 | photonic crystal fibre (pcf card) |
| maruo1997 | 10.1364/OL.22.000132 | two-photon lithography (twophoton card) |
| murray1993 | 10.1021/ja00072a025 | monodisperse quantum dots (qdot card) |
| tang1987 | 10.1063/1.98799 | OLED (oled card) |
| kao1966 | 10.1049/piee.1966.0189 | optical fibre (opticalfibre card) |
| nakamura1994 | 10.1063/1.111832 | blue InGaN LED (gan card) |
| matthias1954 | 10.1103/PhysRev.95.1435 | Nb3Sn superconductivity (nb3sn card) |
| pecharsky1997 | 10.1103/PhysRevLett.78.4494 | giant magnetocaloric effect (magnetocaloric card) |
| goldsmid1954 | 10.1088/0508-3443/5/11/303 | Bi2Te3 thermoelectric cooling (thermoelectric card) |
| kupfer1991 | 10.1002/marc.1991.030121211 | liquid crystal elastomer (lce card) |
| gosline1999 | 10.1242/jeb.202.23.3295 | spider silk mechanics (spidersilk card) |
| ge2013 | 10.1063/1.4819837 | 4D printing (fourd card) |
| kolesky2014 | 10.1002/adma.201305506 | bioprinting (bioink card) |
| pelrine2000 | 10.1126/science.287.5454.836 | dielectric elastomer actuator (dea card) |
| fujishima1972 | 10.1038/238037a0 | TiO2 photocatalysis (tio2photo card) |
| shin2022 | 10.1126/science.abn4290 | boron arsenide mobility; the thermal-conductivity paper (Kang et al. 2018, 10.1126/science.aat5522) is outside the 2019–2026 window, and this one is about mobility, so neither fitted the brief cleanly |
| wang2020fe | 10.1016/j.jmmm.2019.165962 | Fe16N2 magnet; it is a review, not a primary result |
| iqbal2020 | 10.1126/science.aba7977 | MXene EMI absorption; MXene already covered by naguib2011 |
| chin2023 | 10.1126/science.adg0091 | 31.25 percent perovskite/silicon tandem; perovskite covered by kojima2009 |

## Topics asked for but not delivered

- Lignin-based materials: Crossref bibliographic search returned peer-review records and reviews; OpenAlex search returned unrelated highly cited reviews. No primary paper I could vouch for, so none included.
- Liquid-metal composites: same outcome from both searches; the known primary papers (Markvicka 2018, Bartlett 2017) are outside the 2019 window.
- COF fibres: no clear primary paper found; COFs are covered by zhou2024 (COF-999 direct air capture).
- Iron-nitride magnets: only a review found (see wang2020fe above).
- Sodium/solid-state batteries: covered by jun2022 only.

## Open-access checks

Rule applied: an oa URL is given only where the page was fetched and the title or the record was seen in the response.

- Verified and used: arXiv abs pages (novoselov2004, hou2019, drozdov2019, puphal2023), PMC article pages (sun2012, barber2015, chanut2023, zhang2019, seymour2023, posnjak2024, yang2020, guan2020), MIT DSpace handles (chen2020), nature.com CC-BY page (wat2019), escholarship PDF (jun2022), OSTI purl redirecting to an escholarship PDF (christensen2019), Aalto research portal page (wang2020sh), Utrecht DSpace record listing the publisher version as open access (appels2019), Purdue e-Pubs page with a download link (li2021), figshare record confirmed through the figshare API (haines2014).
- Found but not usable from a script, so left null: ACS pdf (li2016, publisher says open), Wiley pdfdirect (naguib2011), APS pdf (wu1987), AIP pdf (puphal2023, arXiv used instead), ScienceDirect pdf (appels2019, repository used instead), UNC Carolina Digital Repository (wang2024, host unreachable from this machine).
- Nature pages checked with the strict test (text 'This article is licensed under a Creative Commons'): only wat2019 passed. zeng2022, wang2024, zhou2024, shang2021, gong2024, zhao2024, jun2022, christensen2019, wang2020sh and drozdov2019 are paywalled on nature.com; repository or arXiv copies were used where found.
- Cantor 2004 (Birmingham portal), Lendlein 2002 (RWTH), Xu 2019 (Lanzhou IR) and Naguib 2011 (DiVA) repository records had no full text, so null.
- Nothing found for the pre-2000 Nature, Science, JAP and Planta papers.

## Title and name clean-ups

- Crossref titles carrying HTML or MathML were cleaned: naguib2011 (Ti3AlC2 subscripts), li2021 (BaSO4), puphal2023 (Pb10-xCux(PO4)6O italics), yeh2004 (non-breaking hyphen), li2016 (line breaks).
- Author strings use Crossref family names: one to three authors in full, four or more as 'Surname et al.'.
- ref is volume and page range from Crossref; single-page items collapsed (127, 741).

## Honesty notes carried into the entries

- drozdov2019: implies field notes that the Dias group room-temperature claims (2020 CSH, 2023 LuNH) were retracted; the LaH10 result itself stands.
- puphal2023: included as the refutation of LK-99, not as a material.
- gong2024, zhao2024, posnjak2024, zeng2022, chanut2023: implies fields hedge on scale-up and replication.

## Searches used

0 web searches. All lookups went through api.crossref.org, api.openalex.org, Europe PMC, arXiv API, Semantic Scholar (rate-limited, little gained) and direct fetches of candidate pages.
