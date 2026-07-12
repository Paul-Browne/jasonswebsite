import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";

const TITLE = "European Butterflies Magazine Issue Six: Spring 2023";
const DESCRIPTION = [
    "This is an A4 magazine, 36 pages.",
    "Articles in the magazine include: Excursions to several Swiss sites in Valais and Bern and a monthly description of the Corfu Butterfly Year. A butterfly holiday in Herzegovina is featured. The butterflies of Fejèr County in Hungary are detailed. Two sites for High Mountain Fritillaries in Switzerland are described. Purple Emperors and Lesser Purple Emperors in the Pyrenees in France are portrayed. There are features on the spring butterflies of North East France and the early spring butterflies of North East Greece. Butterflies across the Southern Green Belt (Greece, Macedonia and Bulgaria) are described by Wild Echo Tours.",
    "Contributors are butterfly enthusiasts and include: Jim Asher, Dan Danahar, Adam Gor, Tamás Hudák, John Needham, Mario Langourov, David Moore and Pete Smith.",
    "Each page has a unique selection of photographs. All photographs are identified where possible with the butterfly, date and place."
];
const BULLET_POINTS = [
    "Describes butterflies in sites in Bulgaria, Greece, Macedonia, Corfu, France, Herzegovina, Hungary, and Switzerland.",
    "Over 90 species illustrated.",
    "150 colour photographs."
]
const ISBN = "ISSN: 2516-5275-06";
const IMAGE_TOP_LEFT = "spring-2023-1.jpg"
const IMAGE_TOP_RIGHT = "spring-2023-2.jpg"
const IMAGE_BOTTOM_LEFT = "spring-2023-3.jpg"
const IMAGE_BOTTOM_RIGHT = "spring-2023-4.jpg"

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