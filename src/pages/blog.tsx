import * as React from "react";
import { graphql } from "gatsby";

import { GraphQLResponse, AllMarkdownQuery, Post } from "./../types";
import Layout from "../components/Layout";
import PostGrid from "../components/PostGrid";

const Blog: React.FC<GraphQLResponse<AllMarkdownQuery<Post>>> = ({ data }) => (
  <Layout>
    <div className="max-w-5xl">
      <h1 className="text-4xl mb-32">Blog Archive</h1>

      <PostGrid posts={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
);

export const query = graphql`
  query Posts($skip: Int, $limit: Int) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`;

export default Blog;
