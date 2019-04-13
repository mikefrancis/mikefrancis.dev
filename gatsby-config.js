module.exports = {
  siteMetadata: {
    title: "Mike Francis",
    description: "Software Engineer & UI Designer based in London, UK"
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "markdown-pages"
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-portal",
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
