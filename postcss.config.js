const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.tsx"],
  whitelist: ["body", "pre", "code", "gatsby-highlight"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = () => ({
  plugins: [require("tailwindcss"), require("autoprefixer"), purgecss]
});
