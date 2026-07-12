import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";
import platform5 from "./components/platform5.js";

const TITLE = "Swiss Narrow Gauge RhB Bernina (2026)";
const DESCRIPTION = [
    "This is an A4 softback book, 40 pages.", 
    "This is a guide to the Bernina Railway of the Rhätische Bahn, found in Graubünden in Eastern Switzerland. The journey starts in St Moritz and finishes in Tirano in Italy. The route from each station to the next station is described. Significant landscape features are described including mountains, glaciers and lakes. Most of the railway photographs are taken in stations, but the key scenic locations are illustrated, including Muottas Muragl, Morteratsch, Bernina Mountain Range, Lago Nero and Lago Bianco, Alp Grüm and Lago Poschiavo. All photographs are identified by place, motive power and date. Photographs taken over period 2006 to 2025."
];
const BULLET_POINTS = [
    "Describes RhB Bernina line from St Moritz to Tirano.",
    "Includes details of Motive Power.", 
    "100 colour photographs.",
    "Recommendations for books and websites.",
]
const ISBN = "ISBN: 978-1-9193073-0-5";
const IMAGE_TOP_LEFT = "bernina-1.jpg"
const IMAGE_TOP_RIGHT = "bernina-3.jpg"
const IMAGE_BOTTOM_LEFT = "bernina-4.jpg"
const IMAGE_BOTTOM_RIGHT = "bernina-2.jpg"

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
            priceToUK: 12,
            priceToEurope: 15
        }),
        amazon(),
        platform5(),
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
