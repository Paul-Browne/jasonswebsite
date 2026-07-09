import { fragment, div, a, img, script, br } from "javascript-to-html";

export default (image1, image2, image3, image4) => fragment(
    div({ id: "photo-1" },
        a({ class: "image-1", href: image1 }, img({ src: image1 })),
        a({ class: "image-1", href: image2 }, img({ src: image2 }))
    ),
    div({ id: "photo-2" },
        a({ class: "image-1", href: image3 }, img({ src: image3 })),
        a({ class: "image-1", href: image4 }, img({ src: image4 }))
    ),
    br({ style: "clear: both" }),
    script(`
        $(document).ready(function () {
            $(".image-1").magnificPopup({
                type: "image",
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: "mfp-no-margins mfp-with-zoom",
                image: {
                    verticalFit: true,
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                },
            });
        });
    `)
)