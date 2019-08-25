import * as React from "react";
import { graphql } from "gatsby";

import { GraphQLResponse, AllMarkdownQuery, Post } from "./../types";
import Layout from "../components/Layout";
import PostGrid from "../components/PostGrid";

const Blog: React.FC<GraphQLResponse<AllMarkdownQuery<Post>>> = ({ data }) => (
  <Layout>
    <div className="max-w-5xl">
      <h1 className="text-4xl mb-32">Blog Archive</h1>

      <PostGrid posts={data.allContentfulBlogPost.edges} />
    </div>
  </Layout>
);

export const query = graphql`
  query Posts($skip: Int, $limit: Int) {
    allContentfulBlogPost(
      sort: { fields: [createdAt], order: DESC }
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
          createdAt(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`;

export default Blog;
