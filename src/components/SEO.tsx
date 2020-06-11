import React from 'react';
import Head from 'next/head';

interface Props {
  image?: string;
  title?: string;
  description?: string;
  url?: string;
}

const SEO: React.FC<Props> = ({ title, description, image, url }) => {
  const meta = [
    {
      name: 'og:title',
      content: title,
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'og:description',
      content: description,
    },
    {
      name: 'twitter:site',
      content: '@_mikefrancis',
    },
    {
      name: 'twitter:creator',
      content: '@_mikefrancis',
    },
  ];

  if (url) {
    meta.push({
      name: 'og:url',
      content: url,
    });
  }

  if (image) {
    meta.push(
      {
        name: 'og:image',
        content: image,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    );
  }

  return (
    <Head>
      <title>{title}</title>
      {meta.map((metaItem, i) => (
        <meta key={`meta-item-${i}`} {...metaItem} />
      ))}
    </Head>
  );
};

export default SEO;
