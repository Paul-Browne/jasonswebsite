import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";

const TITLE = "European Butterflies Magazine Issue Eight: Spring 2025";
const DESCRIPTION = [
    "This is an A4 magazine, 36 pages.",
    "Contents: Pete Smith describes summer butterflies in the South of France. Markus Dumke (new contributor) illustrates the butterflies of Bavaria in Germany. John Green (new contributor) outlines two trips in the South of France looking at different butterfly variations. David Moore presents an account of Mariposa Tours trip to Romania in May. Butterflies at sunny Filisur in Graubünden in Switzerland are described by Jason Sargerson. John Needham continues his report of the butterflies found near him in the French Pyrenees. Mario Langourov gives a portrayal of the butterflies of North Macedonia. Dan Danahar describes the best timing for visits to Corfu and the difficulties still found in identifying some species. The Charaxes butterflies of a bushveld farm in South Africa are introduced by Scott Richardson. The rarer Fritillaries found in Andalusia in Southern Spain are highlighted by Pete Smith.",
    "Contributors are all butterfly enthusiasts and keen photographers. Each page has a unique selection of photographs. All photographs are identified where possible with the butterfly, date and place.",
    "Each page has a unique selection of photographs. All photographs are identified where possible with the butterfly, date and place."
];
const BULLET_POINTS = [
    "Describes butterflies in sites in Corfu, France, Germany, North Macedonia, Romania, South Africa, Spain and Switzerland.",
    "Over 100 species illustrated.",
    "160 colour photographs."
]
const ISBN = "ISSN: 2516-5275-08";
const IMAGE_TOP_LEFT = "spring-2025-4.jpg"
const IMAGE_TOP_RIGHT = "spring-2025-1.jpg"
const IMAGE_BOTTOM_LEFT = "spring-2025-2.jpg"
const IMAGE_BOTTOM_RIGHT = "spring-2025-3.jpg"

const content = main({
        class: "two-halves"
    },
    div(
        DESCRIPTION.map(paragraph => p(paragraph)),
        ul(
            BULLET_POINTS.map(point => li(point))
        ),
        p(ISBN),
        purchaseDirect({
            priceToUK: 10
        }),
        amazon(),
        overseasCustomers(),
    ),
    div({
            class: "images-container",
        },
        img({ src: `/images/${IMAGE_TOP_LEFT}`, alt: "", onclick: "import('/js/lightbox.js').then(M => M.default(this))" }),
        img({ src: `/images/${IMAGE_TOP_RIGHT}`, alt: "", onclick: "import('/js/lightbox.js').then(M => M.default(this))" }),
        img({ src: `/images/${IMAGE_BOTTOM_LEFT}`, alt: "", onclick: "import('/js/lightbox.js').then(M => M.default(this))" }),
        img({ src: `/images/${IMAGE_BOTTOM_RIGHT}`, alt: "", onclick: "import('/js/lightbox.js').then(M => M.default(this))" }),
        button({ 
            onclick: "import('/js/lightbox.js').then(M => M.closeLightboxes())",
            class: "lightbox-close",
            type: "button",
            "aria-label": "Close lightbox"
        }, closeIcon())
    ),
);

export default html(fragment(
    simpleHeader(TITLE),
    content
), { 
    pageStyles: "styles",
    pageTitle: TITLE 
});