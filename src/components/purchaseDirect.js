import { fragment, h4, p, a } from "javascript-to-html";

export default ({
    priceToUK = "£10.00",
    priceToEurope = "£14.00",
    priceInForeignCurrency = "16.00 Euros or 17.00 CHF"
} = {}) => fragment(
    h4("Purchase Direct"),
    p("Obtain direct from Jason Sargerson, 17 Muirfield Park, Westbourne Avenue, Hull, HU5 3JF. Cheques payable to Jason Sargerson. Price ", priceToUK, " to UK, or ", priceToEurope, " to Europe, including postage. In foreign currency ", priceInForeignCurrency, ". Contact me ", a({ href: "mailto:jasonsargerson88@gmail.com" }, "jasonsargerson88@gmail.com"), " to credit my bank account directly.")
);