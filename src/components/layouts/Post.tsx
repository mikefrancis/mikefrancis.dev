import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "./Default";
import Container from "../styled/Container";
import SEO from "../SEO";

const getReadingTime = (words: number) => {
  const minutes = words / 150;
  const wholeMinutes = Math.round(minutes);

  return wholeMinutes;
};

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
      wordCount: {
        words: number;
      };
    };
  };
}

const Template: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, wordCount } = markdownRemark;
  const readingTime = getReadingTime(wordCount.words);

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
              <p>{`${readingTime} minutes reading time`}</p>
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

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      wordCount {
        words
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`;

export default Template;
