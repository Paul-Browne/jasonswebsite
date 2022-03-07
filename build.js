import wbp from "web-build-process";

wbp({
    id: "jasonsite",
    source: "src",                // source directory default:"src"
    dist: "public",               // build directory default:"public"
    buildOnly: true,             // builds once only, doesn't serve, watch or prettify default:false
    prettify: true,               // prettify source files, default:true
    forceBuild: true,            // force build of all files, regardless if they have changed default:false
    verbose: true,               // prints time-stamped messages to console when files are processed or prettified
    optimizeImages: true,          // optimize pngs and jpgs default true
    sourceMaps: true              // outputs source maps for js anc css (sass/less) files
});