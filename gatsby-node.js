const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/components/layouts/Post.tsx`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    return Promise.reject(result.errors);
  }

  const posts = result.data.allMarkdownRemark.edges;
  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    const realPage = i + 1;

    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${realPage}`,
      component: path.resolve("./src/pages/blog.tsx"),
      context: {
        current: realPage,
        total: numPages,
        limit: postsPerPage,
        skip: i * postsPerPage
      }
    });
  });

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {}
    });
  });
};
