// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("D:\\exp\\wp\\src\\templates\\BlogPost.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-page-js": () => import("D:\\exp\\wp\\src\\templates\\Page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---cache-dev-404-page-js": () => import("D:\\exp\\wp\\.cache\\dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("D:\\exp\\wp\\src\\pages\\404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("D:\\exp\\wp\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("D:\\exp\\wp\\src\\pages\\page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "D:\\exp\\wp\\.cache\\data.json")

