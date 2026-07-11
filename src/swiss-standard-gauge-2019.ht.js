import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";
import allan from "./components/allan.js";
import platform5 from "./components/platform5.js";

const TITLE = "Swiss Standard Gauge (2019)";
const DESCRIPTION = [
    "This is an A4 book, 40 pages.", 
    "This is a guide to the Standard Gauge Railways in Switzerland, mainly focusing on the Passenger Railway. Each railway is described in terms of their location and type of line. The key motive power or rolling stock is described and the route of the line. Service frequency and time of journey are detailed. The SBB is described as eight key routes and associated local services. Heritage or historic services running regular trains are mentioned. Most of the photographs are taken in stations, but some scenic locations are illustrated, including Brig, Martigny, Kandersteg, Chur, Sargans, Spiez Einigen, Unterterzen, Rapperswil, Arth-am-See and Schaffhausen. All photographs are identified by railway, place, motive power and date."
];
const BULLET_POINTS = [
    "Describes Standard Gauge Passenger Railways in Switzerland.",
    "Includes Private Railways and the SBB.",
    "140 colour photographs.",
    "Recommendations for books and websites.",
]
const ISBN = "ISBN: 978-0-9575048-9-9";
const IMAGE_TOP_LEFT = "swiss-standard-guage-cover.jpg"
const IMAGE_TOP_RIGHT = "swiss-standard-guage-back.jpg"
const IMAGE_BOTTOM_LEFT = "swiss-standard-guage-16.jpg"
const IMAGE_BOTTOM_RIGHT = "swiss-standard-guage-17.jpg"

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
