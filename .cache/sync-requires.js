const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("D:\\exp\\wp\\src\\templates\\BlogPost.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("D:\\exp\\wp\\src\\templates\\Page.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\exp\\wp\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\exp\\wp\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\exp\\wp\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("D:\\exp\\wp\\src\\pages\\page-2.js")))
}

