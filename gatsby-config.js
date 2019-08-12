// postcss.config.js
module.exports = {
  siteMetadata: {
    title: "Mike Francis",
    description:
      "Software Engineer & UI Designer based in London, UK. Currently building and scaling a modern, renewable energy provider at Bulb."
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts`,
        name: "markdown-pages"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet"
  ]
};
