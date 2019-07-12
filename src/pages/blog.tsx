import * as React from "react";
import { graphql, Link } from "gatsby";

import { GraphQLResponse, AllMarkdownQuery, Post } from "./../types";
import Layout from "../components/Layout";

const Blog: React.FC<GraphQLResponse<AllMarkdownQuery<Post>>> = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <h2>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
      </h2>
    ))}
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
