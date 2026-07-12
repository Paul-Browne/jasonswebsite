import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";


const TITLE = "Swiss Butterflies (2016) Second Edition";
const DESCRIPTION = ["This is a completely redesigned, updated and revised second edition.", "This is an original, habitat based guide to Swiss Butterflies. Butterflies are classified as Common, Lowland, Wetland, Rocky Steppe, Mountain, High Mountain or Ringlets. Each page has a unique selection of photographs. All photographs are identified with the butterfly, date and place. Locations are given according to the River Valley and Canton."];
const BULLET_POINTS = [
    "Describes 198 species found in Switzerland",
    "Recommended locations to visit",
    "All 198 species illustrated",
    "240 colour photographs",
    "Recommendations for books and websites",
    "Guide to Swiss Butterfly database"
]
const ISBN = "ISBN: 978-0-9575048-6-8";
const IMAGE_TOP_LEFT = "swiss-butterflies-front-600x860.jpg"
const IMAGE_TOP_RIGHT = "swiss-butterflies-back-600x860.jpg"
const IMAGE_BOTTOM_LEFT = "swiss-butterflies-page-21-600x860.jpg"
const IMAGE_BOTTOM_RIGHT = "swiss-butterflies-page-23-600x860.jpg"

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