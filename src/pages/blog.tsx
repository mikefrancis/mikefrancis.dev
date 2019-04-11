import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layouts/Default";
import Article from "../components/Article";
import SEO from "../components/SEO";
import Pagination from "../components/Pagination";
import Container from "../components/styled/Container";

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            description: string;
            date: string;
          };
        };
      }[];
    };
  };
  pageContext: {
    current: number;
    skip: number;
    limit: number;
    total: number;
  };
}

const Blog: React.FC<Props> = ({ data, pageContext }) => (
  <>
    <SEO title="Blog" />
    <Layout>
      <Container>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Article
            link={node.fields.slug}
            title={node.frontmatter.title}
            summary={node.frontmatter.description}
            key={node.id}
          />
        ))}
        <Pagination current={pageContext.current} total={pageContext.total} />
      </Container>
    </Layout>
  </>
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
