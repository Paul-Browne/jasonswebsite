import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";

const TITLE = "East Yorkshire Wildlife Issue One: Autumn 2020";
const DESCRIPTION = [
    "This is an A4 magazine, 36 pages.",
    "Articles in the magazine cover: Wildlife in Thixendale, Butterflies in East Yorkshire, Wildlife in the Avenues in Hull, Solitary Bees and Bumblebees of the Avenues, Wildlife at Tophill Low and North Cave Wetlands, The Renovation of Pearson Park in Hull, Red Kites in East Yorkshire, Gardening for Butterflies, The Great Creature Count in Yorkshire and How Trees Sustain Life.",
    "Contributors are local naturalists and include: Nikki Abramson, Andrew Ashworth, Margaret Boyd, Sean Clough, Robert Fuller, Harriet Lawrence and Nigel Puckrin.",
    "Each page has a unique selection of photographs. All photographs are identified where possible with the species, date and place."
];
const BULLET_POINTS = [
    "Describes local wildlife in the Avenues in Kingston upon Hull, North Cave Wetlands, Pearson Park in Hull, Thixendale, Tophill Low and Yorkshire Wolds.",
    "Book Review.",
    "Over 70 species illustrated.",
    "120 colour photographs."
]
const ISBN = "ISSN: 2634-8748-01";
const IMAGE_TOP_LEFT = "cover-east-yorkshire-wildlife.jpg"
const IMAGE_TOP_RIGHT = "page-17.jpg"
const IMAGE_BOTTOM_LEFT = "page-29.jpg"
const IMAGE_BOTTOM_RIGHT = "page-33.jpg"

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