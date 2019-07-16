const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/post.tsx`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
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
  const postsPerPage = 6;
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
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {}
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "posts",
      trailingSlash: false
    });

    createNodeField({
      node,
      name: "slug",
      value: `/blog${slug}`
    });
  }
};
