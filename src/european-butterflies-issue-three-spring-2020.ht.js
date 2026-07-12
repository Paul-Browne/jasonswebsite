import { main, fragment, div, p, ul, li, img, button } from "javascript-to-html";

import html from "./components/html.js";
import simpleHeader from "./components/simpleHeader.js";
import overseasCustomers from "./components/overseasCustomers.js";
import amazon from "./components/amazon.js";
import purchaseDirect from "./components/purchaseDirect.js";
import closeIcon from "./components/closeIcon.js";

const TITLE = "European Butterflies Magazine Issue Three: Spring 2020";
const DESCRIPTION = [
    "This is an A4 magazine, 36 pages.",
    "Articles in the magazine cover: Butterflies in the Piedmont Alps in Italy, in Valgaudamar in France and in the Mediterranean island of Cyprus. The development of Corfu Butterfly Conservation is featured. Conservation work of the European Butterflies Group in Spain is described. Naturetrek describe the butterflies of Normandy in France. There are features on Cardinal Fritillaries in Switzerland and the Lapland Fritillary in Turkey. Articles also cover butterflies in North East Hungary, St Petersburg in Russia and in Eastern Turkey. Butterflies in Armenia are introduced by Wild Echo Tours. Contributors are butterfly enthusiasts and include: Andy Adcock, Tom Brereton, Dan Danahar, James Gibbs, Mario Langourov, Gyorgy Liptovszky, Dave Maertens, David Moore, Nick Morgan and Mike Prentice. Each page has a unique selection of photographs. All photographs are identified where possible with the butterfly, date and place."
];
const BULLET_POINTS = [
    "Describes butterflies in sites in Spain, Hungary, Russia, Armenia, Corfu, Cyprus, Turkey, Switzerland, France and Italy.",
    "Book Reviews.",
    "Over 90 species illustrated.",
    "140 colour photographs."
]
const ISBN = "ISSN: 2516-5275-03";
const IMAGE_TOP_LEFT = "European-Butterflies-2020-Cover.jpg"
const IMAGE_TOP_RIGHT = "Page-16.jpg"
const IMAGE_BOTTOM_LEFT = "Page-28.jpg"
const IMAGE_BOTTOM_RIGHT = "Page-5.jpg"

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