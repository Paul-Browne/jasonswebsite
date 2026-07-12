import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";

const TITLE = "European Butterflies Magazine Issue Nine: Spring 2026";
const DESCRIPTION = [
    "This is an A4 magazine, 36 pages.",
    "Contents: David Moore presents an account of Mariposa Tours trip to Austria in July. Pete Smith describes his trip to Southwest Bulgaria in July. Dan Danahar describes how his interest in the butterflies of Corfu developed. Paul Selby (new contributor) describes his recent trips to the Italian Alps and French Mercantour. John Needham continues his report of the butterflies found near him in the French Pyrenees. John Green highlights butterflies in his region in Southern France and Spain. Mario Langourov gives a portrayal of the butterflies of Poland. Scott Richardson introduces the Lycaenid butterflies found on his bushveld farm in South Africa. The possibilities of Phenotype Plasticity in Switzerland are explored by Jason Sargerson. Markus Dumke and Dave Maertens describe the butterflies of Southern Turkey.",
    "Contributors are all butterfly enthusiasts and keen photographers. Each page has a unique selection of photographs. All photographs are identified where possible with the butterfly, date and place."
];
const BULLET_POINTS = [
    "Describes butterflies in sites in Austria, Bulgaria, Corfu, France, Italy, Poland, South Africa, Spain, Switzerland and Turkey.",
    "Over 100 species illustrated.",
    "160 colour photographs."
]
const ISBN = "ISSN: 2516-5275-09";
const IMAGE_TOP_LEFT = "2026-spring-1.jpg"
const IMAGE_TOP_RIGHT = "2026-spring-3.jpg"
const IMAGE_BOTTOM_LEFT = "2026-spring-4.jpg"
const IMAGE_BOTTOM_RIGHT = "2026-spring-2.jpg"

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