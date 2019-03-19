import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";

interface Props {
  title?: string;
  description?: string;
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

const SEO: React.FC<Props> = () => {
  const { site } = useStaticQuery(query);

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: site.siteMetadata.description
        }
      ]}
    />
  );
};

export default SEO;
