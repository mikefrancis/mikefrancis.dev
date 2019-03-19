const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-layouts-post-tsx": hot(preferDefault(require("/Users/mikefrancis/code/mikefrancis.github.io/src/components/layouts/Post.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mikefrancis/code/mikefrancis.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/mikefrancis/code/mikefrancis.github.io/src/pages/index.tsx")))
}

