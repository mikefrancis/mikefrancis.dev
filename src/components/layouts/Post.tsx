import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "./Default";
import Container from "../styled/Container";
import SEO from "../SEO";

const PostHeader = styled.div`
  max-width: 40rem;

  h1 {
    @media (min-width: ${props => props.theme.width.sm}px) {
      font-size: 4rem;
      line-height: 5rem;
    }
  }
`;

const Row = styled.div`
  @media (min-width: ${props => props.theme.width.sm}px) {
    display: flex;
    margin: 0 -1.5rem;
  }
`;

const Column = styled.div`
  @media (min-width: ${props => props.theme.width.sm}px) {
    padding: 0 1.5rem;
  }
`;

const PostMetaColumn = styled(Column)`
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 0;
  }

  @media (min-width: ${props => props.theme.width.sm}px) {
    width: 50rem;
  }
`;

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        description: string;
        date: string;
      };
      html: string;
      timeToRead: number;
    };
  };
}

const Template: React.FC<Props> = props => {
  const { markdownRemark } = props.data;
  const { frontmatter, html, timeToRead } = markdownRemark;

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Layout>
        <Container>
          <PostHeader>
            <h1>{frontmatter.title}</h1>
          </PostHeader>
          <Row>
            <PostMetaColumn>
              <p>{frontmatter.date}</p>
              <p>{`${timeToRead} minutes reading time`}</p>
            </PostMetaColumn>
            <Column>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Column>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
    }
  }
`;

export default Template;
