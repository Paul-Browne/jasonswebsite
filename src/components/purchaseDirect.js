import { fragment, h4, p, a } from "javascript-to-html";

export default ({
    priceToUK = 11,
    priceToEurope = 14
} = {}) => fragment(
    h4("Purchase Direct"),
    p("Obtain direct from Jason Sargerson, 17 Muirfield Park, Westbourne Avenue, Hull, HU5 3JF. Cheques payable to Jason Sargerson. Price ", `£${priceToUK.toFixed(2)}`, " to UK, or ", `£${priceToEurope.toFixed(2)}`, " to Europe, including postage.", " Contact me ", a({ href: "mailto:jasonsargerson88@gmail.com" }, "jasonsargerson88@gmail.com"), " to credit my bank account directly.")
);