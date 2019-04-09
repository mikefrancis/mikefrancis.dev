import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layouts/Default";
import Article from "../components/Article";
import SEO from "../components/SEO";
import Container from "../components/styled/Container";

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          frontmatter: {
            title: string;
            slug: string;
            description: string;
            date: string;
          };
        };
      }[];
    };
  };
}

const Blog: React.FC<Props> = ({ data }) => (
  <>
    <SEO title="Blog" />
    <Layout>
      <Container>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Article
            link={node.frontmatter.slug}
            title={node.frontmatter.title}
            summary={node.frontmatter.description}
            key={node.id}
          />
        ))}
      </Container>
    </Layout>
  </>
);

export const query = graphql`
  query Posts {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            slug
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
