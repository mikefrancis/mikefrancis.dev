import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";

interface Props {
  image?: string;
  title?: string;
  description?: string;
  url?: string;
}

export const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const SEO: React.FC<Props> = ({ title, description, image, url }) => {
  const { site } = useStaticQuery(query);
  const meta = [
    {
      name: "og:title",
      content: title || site.siteMetadata.title
    },
    {
      name: "description",
      content: description || site.siteMetadata.description
    }
  ];

  if (url) {
    meta.push({
      name: "og:url",
      content: url
    });
  }

  if (image) {
    meta.push({
      name: "og:image",
      content: image
    });
  }

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title || site.siteMetadata.title}
      meta={meta}
    />
  );
};

export default SEO;
