import * as React from "react";
import { graphql } from "gatsby";
import { GraphQLResponse, MarkdownQuery, Post } from "../types";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Page: React.FC<GraphQLResponse<MarkdownQuery<Post>>> = ({ data }) => (
  <>
    <SEO
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.description}
    />
    <Layout>
      <article className="max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl mb-8">
            {data.markdownRemark.frontmatter.title}
          </h1>

          <div className="flex -mx-4 mb-8 text-gray-500 text-sm tracking-widest">
            <span className="px-4 uppercase">
              {data.markdownRemark.frontmatter.date}
            </span>
            <span className="px-4 uppercase">
              {data.markdownRemark.timeToRead} minutes
            </span>
          </div>

          <p className="text-2xl font-light">
            {data.markdownRemark.frontmatter.description}
          </p>
        </div>

        <div
          className="wysiwyg leading-relaxed mb-16"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </article>
    </Layout>
  </>
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

export default Page;
