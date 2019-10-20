import * as React from 'react';
import { graphql } from 'gatsby';

import { GraphQLResponse, AllMarkdownQuery, Post } from './../types';
import Layout from '../components/Layout';
import PostGrid from '../components/PostGrid';
import SEO from '../components/SEO';
import Pagination from '../components/Pagintation';

const Blog: React.FC<GraphQLResponse<AllMarkdownQuery<Post>>> = ({
  data,
  pageContext
}: GraphQLResponse<AllMarkdownQuery<Post>>) => (
  <>
    <SEO title="Blog Archive" />
    <Layout>
      <div className="max-w-5xl">
        <h1 className="text-4xl mb-32">Blog Archive</h1>

        {pageContext && pageContext.current && pageContext.total && (
          <Pagination current={pageContext.current} total={pageContext.total} />
        )}

        <PostGrid posts={data.allContentfulBlogPost.edges} />
      </div>
    </Layout>
  </>
);

export const query = graphql`
  query Posts($skip: Int, $limit: Int) {
    allContentfulBlogPost(
      sort: { fields: [dateCreated], order: DESC }
      limit: $limit
      skip: $skip
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
  }
`;

export default Blog;
