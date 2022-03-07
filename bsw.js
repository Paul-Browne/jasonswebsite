import wbp from "web-build-process";

wbp({
    id: "jasonssite",
    source: "src",                // source directory default:"src"
    dist: "public",               // build directory default:"public"
    buildOnly: false,             // builds once only, doesn't serve, watch or prettify default:false
    prettify: true,               // prettify source files, default:true
    forceBuild: false,            // force build of all files, regardless if they have changed default:false
    port: 8888,                   // port, localhost:8888 default:8888
    key: ".ssl/localhost.key.pem",    // path to your local ssl key for https default shown
    cert: ".ssl/localhost.crt.pem",   // path to your local ssl cert for https default shown
    cache: 3600000,               // time in ms for the server to cache assets default 1 hour
    verbose: true,               // prints time-stamped messages to console when files are processed or prettified
    optimizeImages: true,          // optimize pngs and jpgs default true
    sourceMaps: true              // outputs source maps for js anc css (sass/less) files
});