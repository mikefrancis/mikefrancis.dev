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
      name: 'title',
      property: 'og:title',
      content: title,
    },
    {
      name: 'description',
      property: 'og:description',
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
    {
      name: 'author',
      content: 'Mike Francis',
    },
  ];

  if (url) {
    meta.push({
      name: 'url',
      property: 'og:url',
      content: url,
    });
  }

  if (image) {
    meta.push(
      {
        name: 'image',
        property: 'og:image',
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
