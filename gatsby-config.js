module.exports = {
  siteMetadata: {
    title: "Mike Francis",
    description: "Software Engineer & UI Designer based in London, UK"
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts`,
        name: "markdown-pages"
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138287170-1",
        anonymize: true,
        respectDNT: true
      }
    }
  ]
};
