import { main, fragment, div, p, ul, li, img, button, iframe } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";

const TITLE = "Swiss Butterflies: West DVD (2019)";
const DESCRIPTION = [
    "This is an all regions, original film, of butterflies in Western Switzerland. Easily accessible butterfly sites in Bern, Geneva, Jura, Ticino, Valais and Vaud are visited, including the Lütschine Valley, Laubach Valley, Allondon Valley, Tabeillon Valley, Melezza Valley, Rhone Valley, Val d’Anniviers, Trient Valley, Vispa Valley and Saas Valley.",
    "A full range of habitat is featured, including Woodland, Wetland, Rocky Steppe, Mountain and High Mountain. Butterfly subspecies found in specific locations are highlighted. Rare butterflies filmed include: Asian Fritillary, Bath White, Cardinal, Grison’s Fritillary, Large Copper, Large Tortoiseshell, Poplar Admiral, Scarce Large Blue and Woodland Brown. A species list, site by site is included."
];
const BULLET_POINTS = [
    "Locations in Bern, Geneva, Jura, Ticino, Valais and Vaud.",
    "Filmed at 12 top butterfly sites in Western Switzerland.",
    "Shot over five years from 2014 to 2018.",
    "Over 90 species filmed.",
    "Running time: 90 minutes."
]

const IMAGE_TOP_LEFT = "swiss-butterflies-west-front-cover.jpg"
const IMAGE_TOP_RIGHT = "swiss-butterflies-west-back.jpg"

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
                src: "https://www.youtube.com/embed/pv1vPLA1NNQ",
                frameborder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: true
            })
        ),
        div({
                class: "video-container"
            },
            iframe({
                src: "https://www.youtube.com/embed/AvVKXa4f-iU",
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