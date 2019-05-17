import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "./Default";
import Container from "../styled/Container";
import Hero from "../styled/Hero";
import SEO from "../SEO";

const Row = styled.div`
  @media (min-width: ${props => props.theme.width.sm}px) {
    display: flex;
    margin: -2rem -2rem 0;
  }
`;

const Column = styled.div`
  @media (min-width: ${props => props.theme.width.sm}px) {
    padding: 0 2rem;
  }
`;

const PostMetaColumn = styled(Column)`
  margin-bottom: 2rem;

  @media (min-width: ${props => props.theme.width.sm}px) {
    flex: 0 0 16rem;
  }

  .inner {
    position: sticky;
    top: 0;

    @media (min-width: ${props => props.theme.width.sm}px) {
      padding-top: 2rem;
    }
  }

  p {
    margin-bottom: 0;
  }
`;

const ContentColumn = styled(Column)`
  @media (min-width: ${props => props.theme.width.sm}px) {
    padding: 2rem 0;
  }

  pre code {
    display: block;
    width: 1px;
  }

  a {
    text-decoration: underline;

    &:hover {
      opacity: 0.75;
    }
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

const Template: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Layout>
        <Hero>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.description}</p>
        </Hero>
        <Container>
          <Row>
            <PostMetaColumn>
              <div className="inner">
                <p>🗓 {frontmatter.date}</p>
                <p>👀 {`${timeToRead} minutes`}</p>
              </div>
            </PostMetaColumn>
            <ContentColumn>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </ContentColumn>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        description
      }
    }
  }
`;

export default Template;