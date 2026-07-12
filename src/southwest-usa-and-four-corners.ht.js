import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";
import monticello from "./components/monticello.js";

const TITLE = "Southwest USA and Four Corners (2015)";
const DESCRIPTION = [
    "This is a pioneering, original guide to the South West United States (Arizona, Colorado, New Mexico and Utah). Key places of interest in the Four Corners region are covered; including Arches, Bryce Canyon, Canyonlands, Capitol Reef, Grand Canyon, Mesa Verde and Zion National Parks; Monument Valley, Canyon de Chelly, Cedar Breaks, Rainbow Bridge and Navajo National Monuments; Lake Powell and the Durango to Silverton and Cumbres and Toltec Railroads. Each page has a unique selection of photographs. All photographs are described by location, state and date.",
];
const BULLET_POINTS = [
    "Describes National Parks and National Monuments in Southwest USA",
    "Includes Lake Powell, Moab and Monticello",
    "Describes Durango to Silverton and Cumbres and Toltec Railroads",
    "Includes Climate, Geology and Natural History of sites",
    "100 colour photographs"
]
const ISBN = "ISBN: 978-0-9575048-4-4";
const IMAGE_TOP_LEFT = "southwest-usa-front-cover.jpg"
const IMAGE_TOP_RIGHT = "southwest-usa-back-cover.jpg"
const IMAGE_BOTTOM_LEFT = "southwest-usa-page-10.jpg"
const IMAGE_BOTTOM_RIGHT = "southwest-usa-page-11.jpg"

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
            priceToUK: 5,
            priceToEurope: 9
        }),
        amazon(),
        overseasCustomers(),
        monticello(),
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