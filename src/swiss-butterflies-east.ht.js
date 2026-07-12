import { main, fragment, div, p, ul, li, img, button, iframe } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";

const TITLE = "Swiss Butterflies: East DVD (2017)";
const DESCRIPTION = [
    "This is an original film of butterflies in Eastern Switzerland. Easily accessible butterfly sites in Graubünden, Uri and Schwyz are visited, including the Albula Valley, Alp Valley, Beverin Valley, Oberalppass, Inn Valley, Poschiavo Valley and Rhine Valley.",
    "A full range of habitat is featured, including Woodland, Wetland, Rocky Steppe, Mountain and High Mountain. Butterfly subspecies found in specific locations are highlighted. Rare butterflies filmed include: Alcon Blue, Silvery Argus, Escher’s Blue, Thor’s Fritillary and Southern White Admiral. A species list, site by site is included."
];
const BULLET_POINTS = [
    "Locations in Graubünden, Uri and Schwyz.",
    "Filmed at 11 top butterfly sites in Eastern Switzerland.",
    "Shot over four years from 2014 to 2017.",
    "Over 60 species filmed.",
    "Running time: 74 minutes."
]

const IMAGE_TOP_LEFT = "Swiss-Butterflies-East-Front.jpg"
const IMAGE_TOP_RIGHT = "Swiss-Butterflies-East-Back.jpg"

const content = main({
        class: "two-halves"
    },
    div(
        DESCRIPTION.map(paragraph => p(paragraph)),
        ul(
            BULLET_POINTS.map(point => li(point))
        ),

        purchaseDirect({
            priceToUK: 13,
            priceToEurope: 17
        }),
        amazon(),
        overseasCustomers(),
    ),
    div({
            class: "images-container",
        },
        img({ src: `/images/${IMAGE_TOP_LEFT}`, alt: "", onclick: "import('/js/lightbox.js').then(M => M.default(this))" }),
        img({ src: `/images/${IMAGE_TOP_RIGHT}`, alt: "", onclick: "import('/js/lightbox.js').then(M => M.default(this))" }),
        button({ 
            onclick: "import('/js/lightbox.js').then(M => M.closeLightboxes())",
            class: "lightbox-close",
            type: "button",
            "aria-label": "Close lightbox"
        }, closeIcon()),
        div({
                class: "video-container"
            },
            iframe({
                src: "https://www.youtube.com/embed/iQQZU65TifI",
                frameborder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: true
            })
        ),
        div({
                class: "video-container"
            },
            iframe({
                src: "https://www.youtube.com/embed/VJ5L6CNUiBs",
                frameborder: "0",
                allowfullscreen: true,
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            })
        )        
    )
);

export default html(fragment(
    simpleHeader(TITLE),
    content
), { 
    pageStyles: "styles",
    pageTitle: TITLE 
});