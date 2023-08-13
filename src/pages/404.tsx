import { NextPage } from 'next';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import SEO from '../components/SEO';

const PageNotFound: NextPage = () => (
  <>
    <SEO title="Page not found" />
    <Layout>
      <article className="max-w-3xl mx-auto space-y-10">
        <div className="text-center">
          <PageTitle>Page not found</PageTitle>
          <p className="mt-20">Well, this is embarrasing 😳</p>
        </div>
      </article>
    </Layout>
  </>
);

export default PageNotFound;
