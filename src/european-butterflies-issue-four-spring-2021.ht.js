import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";

const TITLE = "European Butterflies Magazine Issue Four: Spring 2021";
const DESCRIPTION = [
    "This is an A4 magazine, 36 pages.",
    "Articles in the magazine cover: Butterflies in the Queyras Regional Park in France and in the Eastern Pyrenees in France. The further development of Corfu Butterfly Conservation is featured. A species rich Butterfly Garden in Bulgaria is described and illustrated with photographs and paintings. The search for the False Comma in Serbia is featured and also the discovery of new sites in Northern Italy. A wetland butterfly site in central Switzerland is described. There are features on variation in Cynthia’s Fritillary and the prospects for a butterfly tour in Herzegovina. Butterflies in Morocco are introduced by Wild Echo Tours. Contributors are butterfly enthusiasts and include: Jim Asher, Dan Danahar, Dobromir Domuschiev, Robin Fox, Mario Langourov, David Moore, Dan and Rosemary Powell, Pete Smith and Ervin Szombathelyi. Each page has a unique selection of photographs. All photographs are identified where possible with the butterfly, date and place."
];
const BULLET_POINTS = [
    "Describes butterflies in sites in France, Bulgaria, Corfu, Italy, Herzegovina, Switzerland, Morocco and Serbia.",
    "Book and Website Reviews.",
    "Over 90 species illustrated.",
    "140 colour photographs."
]
const ISBN = "ISSN: 2516-5275-04";
const IMAGE_TOP_LEFT = "spring-2021-1.jpeg"
const IMAGE_TOP_RIGHT = "spring-2021-3.jpeg"
const IMAGE_BOTTOM_LEFT = "spring-2021-2.jpeg"
const IMAGE_BOTTOM_RIGHT = "spring-2021-4.jpeg"

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