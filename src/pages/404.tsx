import { NextPage } from 'next';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const PageNotFound: NextPage = () => (
  <>
    <SEO title="Page not found" />
    <Layout>
      <div className="max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl mb-8">Page not found</h1>

          <p>Well this is embarrasing.</p>
        </div>
      </div>
    </Layout>
  </>
);

export default PageNotFound;
