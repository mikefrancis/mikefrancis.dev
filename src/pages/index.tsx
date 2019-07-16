import * as React from "react";
import { graphql } from "gatsby";

import { GraphQLResponse, AllMarkdownQuery, Post, SiteQuery } from "../types";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostGrid from "../components/PostGrid";

const Index: React.FC<GraphQLResponse<AllMarkdownQuery<Post> & SiteQuery>> = ({
  data
}) => (
  <>
    <SEO />
    <Layout>
      <div className="max-w-5xl">
        <div className="mb-32 max-w-2xl">
          <h1 className="text-3xl md:text-4xl">
            {data.site.siteMetadata.description}
          </h1>
        </div>

        <h2 className="mb-8 uppercase text-sm tracking-widest">Latest Posts</h2>
        <PostGrid posts={data.allMarkdownRemark.edges} />
      </div>
    </Layout>
  </>
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
            date(formatString: "MMMM D, YYYY")
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
