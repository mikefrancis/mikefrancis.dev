require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Mike Francis',
    description:
      'Software Engineer & UI Designer based in London, UK. Currently building and scaling a modern, renewable energy provider at Bulb.'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs'
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-strata',
      options: {
        token: process.env.STRATA_KEY
      }
    }
  ]
};
