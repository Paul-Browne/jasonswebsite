import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";

const TITLE = "European Butterflies Magazine Issue Five: Spring 2022";
const DESCRIPTION = [
    "This is an A4 magazine, 36 pages.",
    "Articles in the magazine cover: Endemic and rare butterflies in Spain and the progress of rare butterflies in Hungary. There is a trip to three countries: Bulgaria, Greece and Macedonia in just three days. Local excursions to find butterflies in Croatia are described. Developments at Corfu Butterfly Conservation now include species recording and distribution maps. A mountain site in Graubünden in eastern Switzerland is described. There are features on the Southern Swallowtail in France and the butterflies of La Palma in the Canary Islands. Butterflies in Turkey are introduced by Wild Echo Tours.",
    "Contributors are butterfly enthusiasts and include: Dan Danahar, Robin Fox, James Gibbs, Adam Gor, Mario Langourov Gyorgy Liptovszky, David Moore and Pete Smith.",
    "Each page has a unique selection of photographs. All photographs are identified where possible with the butterfly, date and place."
];
const BULLET_POINTS = [
    "Describes butterflies in sites in Bulgaria, Greece, Macedonia, Corfu, the Canaries, Croatia, France, Hungary, Spain, Switzerland and Turkey.",
    "Over 100 species illustrated.",
    "150 colour photographs."
]
const ISBN = "ISSN: 2516-5275-05";
const IMAGE_TOP_LEFT = "spring-2022-1.jpeg"
const IMAGE_TOP_RIGHT = "spring-2022-4.jpeg"
const IMAGE_BOTTOM_LEFT = "spring-2022-2.jpeg"
const IMAGE_BOTTOM_RIGHT = "spring-2022-3.jpeg"

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
            priceToUK: 10
        }),
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