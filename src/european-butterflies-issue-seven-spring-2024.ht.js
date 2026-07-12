import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";

const TITLE = "European Butterflies Magazine Issue Seven: Spring 2024";
const DESCRIPTION = [
    "This is an A4 magazine, 36 pages.",
    "Articles in the magazine include: A search for the Two- tailed Pasha in Spain, descriptions of butterflies to be found in Central and Northern Spain in late April and also in Southern Spain in the Sierra Nevada. The wildfires in Corfu are detailed with the possible implications for butterflies in Corfu. More desirable species to be found in the French Pyrenees are described. Scarce butterflies in Bulgaria are described by Wild Echo Tours. There are features on butterflies in North-east Greece in June and butterflies at a prolific mountain site in Graubünden in Switzerland. The butterflies of a bushveld farm in South Africa are introduced.",
    "Contributors are butterfly enthusiasts and include: Steve Baines, Dan Danahar, Mario Langourov, David Moore, John Needham, Alvaro Peral, Scott Richardson and Pete Smith.",
    "Each page has a unique selection of photographs. All photographs are identified where possible with the butterfly, date and place."
];
const BULLET_POINTS = [
    "Describes butterflies in sites in Bulgaria, Corfu, France, Greece, South Africa, Spain and Switzerland.",
    "Over 100 species illustrated.",
    "150 colour photographs."
]
const ISBN = "ISSN: 2516-5275-07";
const IMAGE_TOP_LEFT = "spring-2024-1.jpg"
const IMAGE_TOP_RIGHT = "spring-2024-3.jpg"
const IMAGE_BOTTOM_LEFT = "spring-2024-2.jpg"
const IMAGE_BOTTOM_RIGHT = "spring-2024-4.jpg"

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