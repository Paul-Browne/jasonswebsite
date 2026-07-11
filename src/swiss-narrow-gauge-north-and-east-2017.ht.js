import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";
import platform5 from "./components/platform5.js";
import allan from "./components/allan.js";

const TITLE = "Swiss Narrow Gauge North and East (2017)";
const DESCRIPTION = [
    "This is an updated, second edition of Swiss Narrow Gauge Volume Two: East, now including trams.",
    "This is a guide to Narrow Gauge Railways in North, East and Central Switzerland. Each railway is described in terms of their location and type of line. The key motive power is described and the route of the line. Heritage or historic services are mentioned if applicable. Photographs illustrate the railway in the landscape, in the town this includes churches, stations and other buildings, in the countryside this includes lakes, rivers and mountains. All photographs are identified by railway, place, motive power and date."
];
const BULLET_POINTS = [
    "Describes 21 railways in North, East and Central Switzerland",
    "Includes Tram Systems in Basel and Zurich",
    "120 colour photographs",
    "Recommendations for websites and books"
]
const ISBN = "ISBN: 978-0-9575048-8-2";
const IMAGE_TOP_LEFT = "swiss-narrow-gauge-north-and-east-2017-front.jpg"
const IMAGE_TOP_RIGHT = "swiss-narrow-gauge-north-and-east-2017-back.jpg"
const IMAGE_BOTTOM_LEFT = "swiss-narrow-gauge-north-and-east-2017-22.jpg"
const IMAGE_BOTTOM_RIGHT = "swiss-narrow-gauge-north-and-east-2017-23.jpg"

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
            priceToUK: 11,
        }),
        amazon(),
        allan(),
        platform5()
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
