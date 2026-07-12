import { header, a, h2 } from "javascript-to-html";

export default title => header({
        class: "page-header"
    },
    h2(title),
    h2(a({ href: "/" }, "jasonsargerson.uk"))
)