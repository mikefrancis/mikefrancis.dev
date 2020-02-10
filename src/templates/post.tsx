import { RouterProps } from '@reach/router';
import * as React from 'react';
import { graphql, Link } from 'gatsby';

import { GraphQLResponse, MarkdownQuery, Post } from '../types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { THEME_DARK, ThemeContext } from '../components/ThemeProvider';

const Page: React.FC<GraphQLResponse<MarkdownQuery<Post>> & RouterProps> = ({
  data,
  location
}: GraphQLResponse<MarkdownQuery<Post>> & RouterProps) => {
  const { theme } = React.useContext(ThemeContext);
  const seoProps: React.ComponentProps<typeof SEO> = {
    title: data.contentfulBlogPost.title,
    description: data.contentfulBlogPost.excerpt.excerpt
  };

  if (location) {
    seoProps.url = location.href;
  }

  if (data.contentfulBlogPost.featuredImage) {
    seoProps.image = data.contentfulBlogPost.featuredImage.file.url;
  }

  return (
    <>
      <SEO {...seoProps} />
      <Layout>
        <article className="max-w-3xl">
          <div className="mb-8">
            <h1 className="text-4xl mb-8">{data.contentfulBlogPost.title}</h1>

            <div
              className={`md:flex md:-mx-4 mb-8 text-sm tracking-widest ${
                theme === THEME_DARK ? 'text-gray-500' : 'text-gray-700'
              }`}
            >
              <span className="block md:px-4 uppercase">
                {data.contentfulBlogPost.dateCreated}
              </span>
              <span className="block md:px-4 uppercase">
                {data.contentfulBlogPost.updatedAt !==
                  data.contentfulBlogPost.dateCreated &&
                  `(Updated ${data.contentfulBlogPost.updatedAt})`}
              </span>
              <span className="block md:px-4 uppercase">
                {data.contentfulBlogPost.content.childMarkdownRemark.timeToRead}{' '}
                {data.contentfulBlogPost.content.childMarkdownRemark
                  .timeToRead === 1
                  ? 'minute'
                  : 'minutes'}
              </span>
            </div>

            <p className="text-2xl font-light">
              {data.contentfulBlogPost.excerpt.excerpt}
            </p>
          </div>

          <div
            className="wysiwyg mb-16"
            dangerouslySetInnerHTML={{
              __html: data.contentfulBlogPost.content.childMarkdownRemark.html
            }}
          />
        </article>

        <p className={theme === THEME_DARK ? 'text-gray-500' : 'text-gray-700'}>
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
      updatedAt(formatString: "MMMM D, YYYY")
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
