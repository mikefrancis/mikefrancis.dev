import * as React from "react";
import { graphql, Link } from "gatsby";

import { GraphQLResponse, AllMarkdownQuery, Post, SiteQuery } from "../types";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Index: React.FC<GraphQLResponse<AllMarkdownQuery<Post> & SiteQuery>> = ({
  data
}) => (
  <>
    <SEO />
    <Layout>
      <div className="max-w-5xl">
        <div className="mb-32 max-w-2xl">
          <h1 className="text-4xl">{data.site.siteMetadata.description}</h1>
        </div>

        <h2 className="mb-8 uppercase text-sm tracking-widest">Latest Posts</h2>
        <div className="md:flex md:-mx-8">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className="md:w-1/3 md:px-8 mb-16">
              <article>
                <h3 className="text-2xl mb-3">
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h3>
                <p className="mb-3 text-gray-500 uppercase text-xs tracking-widest">
                  {node.frontmatter.date}
                </p>
                <p className="text-sm">{node.frontmatter.description}</p>
              </article>
            </div>
          ))}
        </div>
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
