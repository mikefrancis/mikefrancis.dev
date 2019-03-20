import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";

interface Props {
  title?: string;
  description?: string;
}

export const query = graphql`
  query SiteMetaDataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const SEO: React.FC<Props> = ({ title, description }) => {
  const { site } = useStaticQuery(query);

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title || site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: description || site.siteMetadata.description
        }
      ]}
    />
  );
};

export default SEO;
