// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("D:\\temp\\tutorial-part-two\\.cache\\dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\temp\\tutorial-part-two\\src\\pages\\index.js")),
  "component---src-pages-about-css-modules-js": preferDefault(require("D:\\temp\\tutorial-part-two\\src\\pages\\about-css-modules.js"))
}

exports.json = {
  "dev-404-page.json": require("D:\\temp\\tutorial-part-two\\.cache\\json\\dev-404-page.json"),
  "index.json": require("D:\\temp\\tutorial-part-two\\.cache\\json\\index.json"),
  "about-css-modules.json": require("D:\\temp\\tutorial-part-two\\.cache\\json\\about-css-modules.json")
}