import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";

const TITLE = "Papilio (2015)";
const DESCRIPTION = [
    "This is a pioneering, original, site guide to butterflies in Europe and the Western United States. It is my personal butterfly footprint, the best places I have visited in the last 15 years. It describes 22 top butterfly sites, 18 in Europe and 4 in the United States. Eight countries are visited: Corfu (Ropa Valley), England (Chambers Farm and Wilberforce Way), France (Chamonix Valley), Gibraltar (Alameda Gardens and Upper Rock), Hungary (Farm Lator), Italy (Valle Vigezzo), Switzerland (Albula Valley, Val Poschiavo and Vispa Valley) and the United States (La Sal Mountains and Abajo Mountains in Utah).",
    "Key species include: Southern White Admiral, Southern Comma, Large Copper, Scarce Fritillary, Hungarian Glider, Poplar Admiral, Monarch, Two-tailed Pasha, Large Blue, Swallowtail and Scarce Swallowtail in Europe and Weidermeyer’s Admiral, Pale Swallowtail, Two-tailed Swallowtail and Mourning Cloak in Utah. Each page has a unique selection of photographs. All photographs are identified with the butterfly, date and place."
];
const BULLET_POINTS = [
    "Describes butterflies in eight countries: Corfu, England, France, Gibraltar, Hungary, Italy, Switzerland and the United States",
    "140 colour photographs, 100 species illustrated",
    "Includes Climate, Geology and Natural History of sites",
    "Recommendations on websites and books",
    "Clear site directions and when to go"
]
const ISBN = "ISBN: 978-0-9575048-3-7";
const IMAGE_TOP_LEFT = "papilio-front-600x838.jpg"
const IMAGE_TOP_RIGHT = "papilio-back-600x838.jpg"
const IMAGE_BOTTOM_LEFT = "papilio-page-10-600x838.jpg"
const IMAGE_BOTTOM_RIGHT = "papilio-page-11-600x838.jpg"

const content = main({
        class: "two-halves"
    },
    div(
        DESCRIPTION.map(paragraph => p(paragraph)),
        ul(
            BULLET_POINTS.map(point => li(point))
        ),
        p(ISBN),
        purchaseDirect(),
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