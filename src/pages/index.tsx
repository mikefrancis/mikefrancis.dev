import * as React from "react";
import { graphql, Link } from "gatsby";

import { GraphQLResponse, AllMarkdownQuery, Post, SiteQuery } from "../types";
import Layout from "../components/Layout";

const Index: React.FC<GraphQLResponse<AllMarkdownQuery<Post> & SiteQuery>> = ({
  data
}) => (
  <Layout>
    <div className="max-w-5xl">
      <div className="mb-32 text-3xl max-w-2xl">
        {data.site.siteMetadata.description}
      </div>

      <h2 className="mb-8 uppercase tracking-widest">Latest Posts</h2>
      <div className="md:flex md:-mx-8">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="md:w-1/3 md:px-8 mb-16">
            <article key={node.id}>
              <div className="border border-white w-full h-48 mb-8" />
              <h3 className="mb-2">
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h3>
              <p className="text-sm text-gray-600">
                {node.frontmatter.description}
              </p>
            </article>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query Index {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default Index;
