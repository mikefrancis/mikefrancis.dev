import * as React from 'react';
import { graphql, Link } from 'gatsby';

import { GraphQLResponse, AllMarkdownQuery, Post, SiteQuery } from '../types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostGrid from '../components/PostGrid';
import { ThemeContext, THEME_DARK } from '../components/ThemeProvider';

const Index: React.FC<GraphQLResponse<AllMarkdownQuery<Post> & SiteQuery>> = ({
  data
}: GraphQLResponse<AllMarkdownQuery<Post> & SiteQuery>) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <SEO />
      <Layout>
        <div className="max-w-5xl">
          <div className="mb-8 md:mb-32 max-w-2xl overflow-auto">
            <h1 className="text-3xl md:text-4xl mb-8">
              {data.site.siteMetadata.description}
            </h1>
          </div>

          <h2 className="mb-8 uppercase text-sm tracking-widest">
            Latest Posts
          </h2>
          <PostGrid posts={data.allContentfulBlogPost.edges} />
          <p
            className={theme === THEME_DARK ? 'text-gray-500' : 'text-gray-700'}
          >
            <Link to="/blog">More from the archive →</Link>
          </p>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query Index {
    allContentfulBlogPost(
      sort: { order: DESC, fields: [dateCreated] }
      limit: 3
    ) {
      edges {
        node {
          id
          slug
          title
          excerpt {
            excerpt
          }
          dateCreated(formatString: "MMMM D, YYYY")
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default Index;
