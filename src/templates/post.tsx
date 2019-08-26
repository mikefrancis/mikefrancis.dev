import * as React from "react";
import { graphql, Link } from "gatsby";

import { GraphQLResponse, MarkdownQuery, Post } from "../types";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { THEME_DARK, ThemeContext } from "../components/ThemeProvider";
import { RouterProps } from "@reach/router";

const Page: React.FC<GraphQLResponse<MarkdownQuery<Post>> & RouterProps> = ({
  data,
  location
}) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <SEO
        image={data.contentfulBlogPost.featuredImage.file.url}
        title={data.contentfulBlogPost.title}
        description={data.contentfulBlogPost.excerpt.excerpt}
        url={location && location.href}
      />
      <Layout>
        <article className="max-w-3xl">
          <div className="mb-8">
            <h1 className="text-4xl mb-8">{data.contentfulBlogPost.title}</h1>

            <div
              className={`flex -mx-4 mb-8 text-sm tracking-widest ${
                theme === THEME_DARK ? "text-gray-500" : "text-gray-700"
              }`}
            >
              <span className="px-4 uppercase">
                {data.contentfulBlogPost.dateCreated}
              </span>
              <span className="px-4 uppercase">
                {data.contentfulBlogPost.content.childMarkdownRemark.timeToRead}{" "}
                {data.contentfulBlogPost.content.childMarkdownRemark
                  .timeToRead === 1
                  ? "minute"
                  : "minutes"}
              </span>
            </div>

            <p className="text-2xl font-light">
              {data.contentfulBlogPost.excerpt.excerpt}
            </p>
          </div>

          <div
            className="wysiwyg leading-relaxed mb-16"
            dangerouslySetInnerHTML={{
              __html: data.contentfulBlogPost.content.childMarkdownRemark.html
            }}
          />
        </article>

        <p className={theme === THEME_DARK ? "text-gray-500" : "text-gray-700"}>
          <Link to="/blog">← Back to the archive</Link>
        </p>
      </Layout>
    </>
  );
};

export const query = graphql`
  query SinglePost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      dateCreated(formatString: "MMMM D, YYYY")
      title
      featuredImage {
        file {
          url
        }
      }
      excerpt {
        excerpt
      }
      content {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`;

export default Page;
