/* Papers: the third kind of entry. Not a material and not a figure: the paper that introduced
   a material on a card, or a recent one whose result promises something. Fields:
     id        letters and digits, e.g. kistler1931
     kind      founding | recent
     material  what it is about, a few words; this is the card's heading
     title, authors, journal, year, doi   the citation; year is a number
     oa        a URL to a free full text, or null
     why       two or three sentences on what it showed; no hype
     implies   one sentence on what it implied or promises, hedged where unconfirmed
     cats      the workshops it belongs to; cards  the card ids it touches
   Verified against Crossref by tools/papers.py; check.js refuses a malformed DOI. */
window.PAPERS = [
];
