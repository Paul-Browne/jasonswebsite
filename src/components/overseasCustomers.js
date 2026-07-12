import { fragment, h4, p, a } from "javascript-to-html";

export default ({
    pemberleyBooksUrl = "https://www.pemberleybooks.com/Author.asp?AID=12950",
    nhbsUrl = "https://www.nhbs.com/publisher/charaxes-publications",
} = {}) => fragment(
    h4("Overseas Customers"),
    p("Obtain from the Natural History specialist book suppliers Pemberley Books and NHBS. They have stocks of my books and can supply worldwide. ", a({ href: pemberleyBooksUrl }, "www.pemberleybooks.com"), " or ", a({ href: nhbsUrl }, "www.nhbs.com"), ".")
);