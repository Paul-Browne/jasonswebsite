import html from "./components/html.js";
import { fragment, img, h1, header, main, h3, a, small, p, ul, li, b } from "javascript-to-html";

const pageHeader = header({
        class: "homepage-header"
    },
    img({ src: "/images/fag.png" }),
    h1("Charaxes Publications"),
    img({ src: "/images/fag.png" })
)

const content = main(
    h3({ style: "text-align:center" }, a({ href: "http://jasonsargerson.uk/" }, "jasonsargerson.uk")),
    img({ src: "/images/main-bg.jpg", style: "width:100%" }),
    small("GGB, Gornergrat, 3089m – Matterhorn, 4478m – 01.07.13"),
    p("Charaxes Publications produces quality books mostly about Switzerland. My name is Jason Sargerson. This is my website to provide information about my books and how to buy them. I have been interested in railways and butterflies since the 1960’s. I first visited Switzerland in 1977 and I have since visited regularly, every year in the last ten years."),
    p("I occasionally have articles published about butterflies in Argus (the Yorkshire Butterfly magazine: ", a({ href: "http://www.yorkshirebutterflies.org.uk/" }, "www.yorkshirebutterflies.org.uk"), "). Articles about Swiss Railways appear in Swiss Express (the Swiss Rail Society magazine: ", a({ href: "http://www.swissrailsoc.org.uk/" }, "www.swissrailsoc.org.uk"), ")."),
    p("Some of my photos now appear on ", a({ href: "https://www.lepido.ch" }, "www.lepido.ch"), ", ", a({ href: "https://www.lepidoptera.eu" }, "www.lepidoptera.eu"), " and ", a({ href: "https://www.pinterest.co.uk" }, "www.pinterest.co.uk"), "."),
    p("Some of my video clips now appear on ", a({ href: "https://www.youtube.com/channel/UCXnDSZ0L6vuh39lpxVL6htg" }, "Youtube"), "."),
    p("I have a Personal diary and a European Butterflies Magazine diary in the Overseas section on ", a({ href: "https://www.ukbutterflies.co.uk" }, "www.ukbutterflies.co.uk"), "."),
    p("All my books have a similar format. They are all softback, A4, 36 pages, with at least 100 medium to large colour photographs and a good size print."),
    p(b("Special Offer: "), "Buy any two publications for £20.00, three for £30.00, four for £40.00"),
    p(b("Overseas Customers price per book including postage: "), "USA $20.00, Euros 17.00, CHF 18.00."),
    p("The books available are:"),
    ul({ class: "no-bullets" },
        li(a({ href: "swiss-butterflies-site-guide-2016" }, "Swiss Butterflies Site Guide (2016)")),
        li(a({ href: "swiss-butterflies" }, "Swiss Butterflies (2016) Second Edition.")),
        li(a({ href: "swiss-standard-gauge-2019" }, "Swiss Standard Gauge (2019)")),
        li(a({ href: "swiss-narrow-gauge-north-and-east-2017" }, "Swiss Narrow Gauge North and East (2017)")),
        li(a({ href: "swiss-narrow-gauge-south-and-west-2017" }, "Swiss Narrow Gauge South and West (2017)")),
        li(a({ href: "papilio" }, "Papilio (2015): European and US Butterfly Site Guide")),
        li(a({ href: "southwest-usa-and-four-corners" }, "Southwest USA and Four Corners (2015)")),
    ),
    p(b("Charaxes Films: "), "My butterfly DVD films were inspired by and are intended to complement Paul Wetton's excellent film: Searching for Butterflies in South West Switzerland - see ", a({ href: "http://www.wildlife-films.com" }, "www.wildlife-films.com"), " and ", a({ href: "http://www.ibirdz.co.uk" }, "www.ibirdz.co.uk"), ". Each film covers butterflies in easy access sites in specific regions of Switzerland." ),
    p("The DVD films available are:"),
    ul({ class: "no-bullets" },
        li(a({ href: "swiss-butterflies-west" }, "Swiss Butterflies: West (2019)")),
        li(a({ href: "swiss-butterflies-east" }, "Swiss Butterflies: East (2017)")),
    ),
    p("Special offer: Buy both DVDs for £24.00 including postage"),
    p(b("European Butterflies Magazine: "), "This is a new butterfly enthusiasts magazine covering Europe, including articles about Individual Species, Conservation, Life Cycle, Field Trips and Butterfly Sites."),
    p("The issues available are:"),
    ul({ class: "no-bullets" },
        li(a({ href: "european-butterflies-issue-eight-spring-2025" }, "European Butterflies Issue Eight: Spring 2025")),
        li(a({ href: "european-butterflies-issue-seven-spring-2024" }, "European Butterflies Issue Seven: Spring 2024")),
        li(a({ href: "european-butterflies-issue-six-spring-2023" }, "European Butterflies Issue Six: Spring 2023")),
        li(a({ href: "european-butterflies-issue-five-spring-2022" }, "European Butterflies Issue Five: Spring 2022")),
        li(a({ href: "european-butterflies-issue-four-spring-2021" }, "European Butterflies Issue Four: Spring 2021")),
        li(a({ href: "european-butterflies-issue-three-spring-2020" }, "European Butterflies Issue Three: Spring 2020")),
    ),
    p("Special offer: Buy two magazines for £18.00 including postage."),
    p(b("Early books and magazines "), "(view online)"),
    ul({ class: "no-bullets" },
        li(a({ href: "/images/European Butterflies Issue Two 2019.pdf" }, "European Butterflies Issue Two 2019")),
        li(a({ href: "/images/European Butterflies Issue One 2018.pdf" }, "European Butterflies Issue One 2018")),
        li(a({ href: "/images/Swiss Narrow Gauge volume two 2014.pdf" }, "Swiss Narrow Gauge volume two 2014")),
        li(a({ href: "/images/Swiss Narrow Gauge volume one 2013.pdf" }, "Swiss Narrow Gauge volume one 2013")),
    ),
    p(b("East Yorkshire Wildlife Magazine: "), "This is a new wildlife enthusiasts magazine covering East Yorkshire, with articles about Local Wildlife, Nature Reserves, Parks and Gardens."),
    p("The issues available are:"),
    ul({ class: "no-bullets" },
        li(a({ href: "east-yorkshire-wildlife-issue-one-autumn-2020" }, "East Yorkshire Wildlife Issue One: Autumn 2020")),
    ),
    p("Contact me: ", a({ href: "mailto:jasonsargerson88@gmail.com" }, "jasonsargerson88@gmail.com")),
)


export default html(
    fragment(
        pageHeader,
        content
    ),{
        pageStyles: "styles",
        pageClass: "homepage"
    }
);