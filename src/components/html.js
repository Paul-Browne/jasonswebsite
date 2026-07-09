import { html, head, body, title, meta, link } from "javascript-to-html";

export default (content, {
    pageTitle = "Home",
    pageStyles = "homepage",
    pageClass = "",
    includeJQuery = false,
    includePopupScripts = false,
} = {}) => html(
  head(
      meta({ charset: "utf-8" }),
      meta({ name: "viewport", content: "width=device-width, initial-scale=1" }),
      meta({ name: "description", content: "Charaxes Publications produces quality books about Switzerland. My name is Jason Sargerson. This is my website to provide information about my books" }),
      meta({ name: "keywords", content: "swiss,butterflies,jason,sargerson,railways,papilio,jasonsargerson" }),
      title(`Jason Sargerson | ${pageTitle}`),
      link({ rel: "stylesheet", href: `/css/${pageStyles}.css` }),
      includeJQuery ? script({ src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js" }) : null,
      includePopupScripts ? script({ src: "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.0.0/jquery.magnific-popup.min.js" }) : null,
  ),
    body({ class: pageClass }, content)
);


