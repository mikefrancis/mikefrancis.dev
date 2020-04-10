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
  ];

  if (url) {
    meta.push({
      name: 'og:url',
      content: url,
    });
  }

  if (image) {
    meta.push({
      name: 'og:image',
      content: image,
    });
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
