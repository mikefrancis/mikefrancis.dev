import { Metadata } from 'next';

import PageTitle from '../components/PageTitle';

export const metadata: Metadata = {
  title: 'Page not found',
};

const Page = () => (
  <article className="max-w-3xl mx-auto space-y-10">
    <div className="text-center">
      <PageTitle>Page not found</PageTitle>
      <p className="mt-20">Well, this is embarrasing 😳</p>
    </div>
  </article>
);

export default Page;
