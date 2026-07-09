import { fragment, h4, p, a } from "javascript-to-html";

export default ({
    amazonUrl = "https://www.amazon.com/stores/Jason-Sargerson/author/B00IAAUFAW",
} = {}) => fragment(
    h4("Credit and Debit Card Customers"),
    p("If you wish to use Credit and Debit Cards, obtain from ", a({ href: amazonUrl }, "www.amazon.co.uk"), ".")
);