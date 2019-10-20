// eslint-disable-next-line
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/post.tsx`);

  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    return Promise.reject(result.errors);
  }

  const posts = result.data.allContentfulBlogPost.edges;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    const realPage = i + 1;

    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${realPage}`,
      component: path.resolve('./src/pages/blog.tsx'),
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
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug
      }
    });
  });
};
