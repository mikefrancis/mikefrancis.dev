import * as React from "react";
import { graphql } from "gatsby";
import { GraphQLResponse, MarkdownQuery, Post } from "../types";
import Layout from "../components/Layout";

const Blog: React.FC<GraphQLResponse<MarkdownQuery<Post>>> = ({ data }) => (
  <Layout>
    <article className="max-w-3xl">
      <div className="mb-16">
        <h1 className="text-5xl mb-8">
          {data.markdownRemark.frontmatter.title}
        </h1>
        <p className="text-2xl text-gray-500">
          {data.markdownRemark.frontmatter.description}
        </p>
      </div>

      <div
        className="wysiwyg"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </article>
  </Layout>
);

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

export default Blog;
