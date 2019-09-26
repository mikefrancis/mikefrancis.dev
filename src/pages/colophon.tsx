import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Colophon: React.FC = () => (
  <>
    <SEO title="Colophon" />
    <Layout>
      <article className="max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl mb-8">Colophon</h1>

          <p className="text-2xl font-light">
            An exhaustive list of what was used to build this site.
          </p>
        </div>

        <div className="wysiwyg leading-relaxed mb-16">
          <p>Contentful</p>
          <p>Netlify</p>
          <p>Gatsby</p>
          <p>TailwindCSS</p>
          <p>Unsplash</p>
        </div>
      </article>
    </Layout>
  </>
);

export default Colophon;
