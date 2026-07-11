import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";

const TITLE = "Swiss Butterflies Site Guide (2016)";
const DESCRIPTION = "This is a pioneering, original, site guide to Swiss Butterflies. Easily accessible butterfly sites across Switzerland are described. The full range of habitat is visited including Woodland, Wetland, Rocky Steppe, Mountain and High Mountain. Nectar plants are identified where possible. Butterfly subspecies found in specific locations are highlighted. Locations for species not covered in the main sites, are indicated in additional sites to visit. Each page has a unique selection of photographs. All photographs are identified with the butterfly, date and place. Photograph locations are given according to the River Valley and Canton.";
const BULLET_POINTS = [
    "Describes 30 top butterfly sites in Bern, Geneva, Graubünden, Jura, Schwyz, Ticino and Valais.",
    "Where to find all butterfly species in Switzerland.",
    "Includes Climate, Geology and Natural History of sites",
    "150 species illustrated.",
    "250 colour photographs."
]
const ISBN = "ISBN: 978-0-9575048-5-1";
const IMAGE_TOP_LEFT = "swiss-butterflies-site-guide-2016-front-cover.jpg"
const IMAGE_TOP_RIGHT = "swiss-butterflies-site-guide-2016-back.jpg"
const IMAGE_BOTTOM_LEFT = "swiss-butterflies-site-guide-2016-page-18.jpg"
const IMAGE_BOTTOM_RIGHT = "swiss-butterflies-site-guide-2016-page-19.jpg"

const content = main({
        class: "two-halves"
    },
    div(
        p(DESCRIPTION),
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