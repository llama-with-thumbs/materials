# Sources

The second opinion behind the cards. Every card links to Wikipedia; the ones listed here
also carry a `src` that is not Wikipedia — a maker's datasheet, a trade body, a teaching
page, an archive or a standards reference. One source is not a source.

## What a source has to be

- It says the thing the card says, in its own words, and it loads.
- It is not a shop. A product page with a datasheet is fine; a listing with a price is not.
- It answers a script, or it is recorded here as one that opens in a browser but 403s a
  script, so nobody wastes an hour rediscovering that.

## Families that have held up

| Family | Good for | Note |
|---|---|---|
| `pslc.ws/macrog/<x>.htm` (Macrogalleria) | commodity polymers, taught properly | the most-cited site in the register |
| `boedeker.com/Family/<Name>` | engineering plastics, grade tables | answers a script politely |
| `o-ring.info/en/materials/<x>/` (ERIKS) | elastomers | — |
| `edmundoptics.com/knowledge-center/` | optics application notes | — |
| `loc.gov/preservation/care/` | film, paper, archives | — |
| `spinoff.nasa.gov`, `nasa.gov/mission/` | anything that flew | — |
| trade bodies: `alufoil.org`, `epsindustry.org`, `plasticpipe.org`, `esda.org`, `geosynthetic-institute.org`, `pda-online.org` | the industry's own numbers | often the only place a figure is stated plainly |
| makers' own pages where they load: Covestro, Kuraray, Arkema, Zotefoams, Trosifol, Gore, Dyneema, Kurz, Orafol, Vishay, Amcor, Gauzy, Futamura | the datasheet | corporate sites move pages constantly; re-check before trusting |

## Refused or dead, do not retry

MatWeb, Curbell, Omnexus/SpecialChem, Parker, Dow, Chemours, ExxonMobil, Celanese, Daicel,
ScienceDirect, CAMEO, Britannica, CITES, Smithsonian MCI, FHWA, 3M, Sealed Air, BPF
Plastipedia, NEDCC all answer 403 to a script. polymerdatabase.com is parked. ACS pages
return an empty JS shell. PubMed Central puts a reCAPTCHA in front of scripts. The full
history is in `tools/searchlog.md`.

## Where the papers are

A few cards rest on a paper rather than a page: milkweed floss (a textile-science study),
the self-healing concrete, the two-photon resist. The plan for a `refs` field that carries a
DOI per card is in `ROADMAP.md`; until it exists, a paper goes in `src` like anything else,
with the journal as the label.

<!-- generated below this line: python -I tools/sources.py -->

## The register

94 of 539 cards carry a second source, across 61 sites. Generated from `data.js`; edit the cards, not this table.

| Site | Cards | As cited |
|---|---|---|
| pslc.ws | `aramid`, `natrubber`, `pc`, `pp`, `epoxy`, `pet`, `pvc`, `nylon66`, `hdpe`, `surlyn`, `clingfilm`, `stretchwrap`, `ldpefilm`, `shrinkart` | Macrogalleria: PVC; Macrogalleria: aramids; Macrogalleria: epoxies; Macrogalleria: ionomers; Macrogalleria: nylon; Macrogalleria: polycarbonates; Macrogalleria: polyesters; Macrogalleria: polyethylene; Macrogalleria: polyisoprene; Macrogalleria: polypropylene; Macrogalleria: polystyrene |
| boedeker.com | `peek`, `torlon`, `ptfe`, `pvdf`, `pmma`, `pps`, `abs`, `pei`, `fep`, `pbi` | Boedeker: ABS grades; Boedeker: Celazole; Boedeker: FEP; Boedeker: Kynar; Boedeker: PEEK grades; Boedeker: PTFE grades; Boedeker: Ryton; Boedeker: Torlon; Boedeker: Ultem; Boedeker: acrylic grades |
| o-ring.info | `fkm`, `silicone`, `neoprene`, `epdm`, `nbr` | ERIKS: CR; ERIKS: EPDM; ERIKS: FKM; ERIKS: NBR; ERIKS: VMQ |
| textileschool.com | `chambray`, `oxfordcloth`, `gingham` | Textile School, chambray; Textile School, fabric types; Textile School, weave patterns |
| edmundoptics.com | `polarfilm`, `fresnelsheet` | Edmund Optics: advantages of Fresnel lenses; Edmund Optics: introduction to polarisation |
| loc.gov | `cellacetate`, `nitratefilm` | Library of Congress: care of film; Library of Congress: film care |
| plastics-rubber.basf.com | `tpu`, `melaminefoam` | BASF Basotect; BASF Elastollan |
| qnityelectronics.com | `ffkm`, `kapton` | Kalrez; Kapton datasheet |
| spinoff.nasa.gov | `memoryfoam`, `spaceblanket` | NASA Spinoff |
| alpacainfo.com | `alpaca` | Alpaca Owners Association |
| alufoil.org | `alufoil` | European Aluminium Foil Association |
| amcor.com | `parafilm` | Amcor: sealing films and wraps |
| archives.gov | `microfilm` | US National Archives: microfilming |
| cellulose.org | `cellulosefill` | Cellulose Insulation Manufacturers Association |
| d3o.com | `d3o` | D3O |
| delrin.com | `delrin` | Delrin |
| digitalcommons.unl.edu | `milkweed` | Crews et al., University of Nebraska |
| doc.govt.nz | `possum` | NZ Department of Conservation |
| downandfeathercouncil.com | `featherdown` | American Down and Feather Council |
| dupont.com | `vespel` | DuPont Vespel |
| dyneema.com | `uhmwpe` | Dyneema |
| en.toyobo-mc.jp | `zylon` | Toyobo |
| epsindustry.org | `eps` | EPS Industry Alliance |
| esda.org | `esdbag` | ESD Association: ESD overview |
| famsf.org | `furfelt` | Fine Arts Museums of San Francisco |
| futamuragroup.com | `cellophane` | Futamura: cellulose films |
| gauzy.com | `pdlcfilm` | Gauzy: PDLC |
| gelest.com | `pdms` | Gelest: silicones |
| geosynthetic-institute.org | `geomembrane` | Geosynthetic Institute |
| gore.com | `eptfe` | Gore |
| hexpol.com | `butyl` | HEXPOL: IIR |
| hpp.arkema.com | `pebax` | Arkema Pebax |
| icelandiceiderdown.com | `eiderdown` | Icelandic Eiderdown |
| iibec.org | `eelgrass` | IIBEC |
| iucnredlist.org | `vicuna` | IUCN Red List |
| kurz-world.com | `holofoil` | Kurz: hot stamping and transfer foils |
| mylar.com | `mylar` | Mylar films |
| nafion.com | `nafion` | Nafion (Chemours) |
| nasa.gov | `sailfilm` | NASA: Advanced Composite Solar Sail System |
| nationalangorarabbitbreeders.com | `angora` | National Angora Rabbit Breeders |
| natureworksllc.com | `pla` | NatureWorks |
| nsidc.org | `snow` | NSIDC: the science of snow |
| orafol.com | `retrosheet` | Orafol: reflective solutions |
| pda-online.org | `polyurea` | Polyurea Development Association |
| permabond.com | `cyanoacrylate` | Permabond |
| personal-care-hygiene.basf.com | `sap` | BASF HySorb |
| plasticpipe.org | `pex` | Plastics Pipe Institute |
| poval.kuraray.com | `pva` | Kuraray Poval |
| reindeerherding.org | `reindeerhide` | International Centre for Reindeer Husbandry |
| roechling.com | `lignostone` | Röchling |
| sciencehistory.org | `bakelite` | Science History Institute |
| scscoatings.com | `parylene` | SCS Coatings |
| societyofgilders.org | `goldleaf` | Society of Gilders |
| solutions.covestro.com | `vulkollan` | Covestro |
| sorbothane.com | `sorbothane` | Sorbothane, Inc. |
| trosifol.com | `pvb` | Trosifol |
| tufnol.com | `phenolic` | Tufnol |
| ube.co.jp | `br` | UBE Elastomer |
| vectran.kuraray.com | `vectran` | Kuraray Vectran |
| vishay.com | `capfilm` | Vishay: film capacitors |
| zotefoams.com | `eva` | Zotefoams Evazote |

## Last check

2026-10-22: 90 URLs fetched, 4 failed.

| Card | Answer | URL |
|---|---|---|
| `pdms` | The read operation timed out | https://www.gelest.com/product-lines/silicones/ |
| `pla` | 403 | https://natureworksllc.com/ |
| `nafion` | 403 | https://www.nafion.com/en/products/sulfonic-membranes |
| `furfelt` | 403 | https://www.famsf.org/stories/poisons-part-i-the-mercurial-world-of-felt |

A 403 is usually the site refusing scripts, not a dead page; open it in a browser before replacing it.
