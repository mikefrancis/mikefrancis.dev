import React from 'react';
import Head from 'next/head';

const CV: React.FC = () => (
  <>
    <Head>
      <style media="screen">
        {`
        body {
          padding: 2rem;
        }
      `}
      </style>
      <style media="print">
        {`
        :root {
          font-size: 0.7rem;
        }
      `}
      </style>
      <title>Mike Francis CV</title>
    </Head>
    <div className="font-sans text-black md:flex print:flex max-w-5xl">
      <div className="flex-1 md:pr-16 print:pr-16">
        <header className="mb-8">
          <h1 className="text-4xl mb-4 uppercase tracking-widest">
            Mike Francis
          </h1>
          <p className="text-lg">
            Speaker at Work In The Web 2020, ForeFront Leeds 2016 and The
            Digital Barn 2012.
            <br />
            Member of{' '}
            <a href="https://twitter.com/SummitAwesome">@SummitAwesome</a>.
            Featured on <a href="https://cssdeck.com">cssdeck.com</a>
          </p>
        </header>
        <main>
          <section className="mb-8">
            <h2 className="text-2xl mb-4">Selected skills</h2>
            <ul className="list-disc px-8">
              <li>PHP 7+ (Composer, Symfony, Laravel, PHPUnit, PSRs)</li>
              <li>
                JavaScript/Node (TypeScript, React [Native], Redux, Mocha, Koa,
                Webpack)
              </li>
              <li>
                HTML5/CSS3 (Sass/LESS, OOCSS, SMACSS, BEM, Atomic CSS,
                CSS-in-JS)
              </li>
              <li>Agile Methodologies (Scrum/Kanban)</li>
              <li>Docker/Kubernetes, Vagrant, Chef, AWS, GCP, Heroku</li>
              <li>Git (Gitflow, Pull Requests, Code Reviews, CI)</li>
              <li>GraphQL/REST APIs</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl mb-4">Professional Employment</h2>
            <article className="mb-4">
              <h3 className="font-bold">
                Senior Software Engineer Technical Lead - Bulb
              </h3>
              <h4 className="text-gray-700 mb-4">
                London, UK • December 2018 - Present
              </h4>
              <p>
                Bootstrapping teams to design, build and measure services, applications and
                automations cross-functionally to help serve members in
                the best and most efficient way.
              </p>
            </article>
            <article className="mb-4">
              <h3 className="font-bold">
                Senior Software Engineer - Pod Point
              </h3>
              <h4 className="text-gray-700 mb-4">
                London, UK • June 2015 - December 2018
              </h4>
              <p>
                Developing, scaling and mentoring in an agile environment on
                various internal and external APIs, Microservices and Native/Web
                Applications for a range of stakeholders.
              </p>
            </article>
            <article className="mb-4">
              <h3 className="font-bold">Lead Developer - Benchmark</h3>
              <h4 className="text-gray-700 mb-4">
                London, UK • September 2013 - June 2015
              </h4>
              <p>
                Development Studio Manager, introducing new workflows, teaching
                new and existing developers new tools, frameworks and principles
                while project managing and working on eCommerce sites/products
                and web applications.
              </p>
            </article>
            <article className="mb-4">
              <h3 className="font-bold">Lead Developer - Manifest (now Ilk)</h3>
              <h4 className="text-gray-700 mb-4">
                Leeds, UK • June 2008 - September 2013
              </h4>
              <p>
                Also Digital Studio Manager, responsible for planning, creating
                and maintaining interactive online and offline applications,
                from consultancy, design and support to all aspects of
                development.
              </p>
            </article>
            <article className="mb-4">
              <h3 className="font-bold">Developer - Code Blue Group</h3>
              <h4 className="text-gray-700 mb-4">
                Huddersfield, UK • September 2007 – June 2008
              </h4>
              <p>
                Worked developing and maintaining websites, eCommerce stores and
                internal apps on a pro-rata basis while studying for my degree.
              </p>
            </article>
            <article>
              <h3 className="font-bold">Volunteer - Ministry of Stories</h3>
              <h4 className="text-gray-700 mb-4">
                Remote • May 2010 - Present
              </h4>
              <p>
                After building the original site as part of a work brief I
                became a volunteer for Ministry of Stories and working alongside
                another volunteer, delivered maintenance and feature requests in
                my spare time.
              </p>
            </article>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl mb-4">Education</h2>
            <article className="mb-4">
              <h3 className="font-bold">
                BA (Hons) 2:1 Multimedia - University of Huddersfield
              </h3>
              <h4 className="text-gray-700">September 2004 - June 2008</h4>
            </article>
            <article>
              <h3 className="font-bold">
                A-levels (B, C, D, E) - Penistone 6th Form
              </h3>
              <h4 className="text-gray-700">September 2002 - June 2004</h4>
            </article>
          </section>
        </main>
      </div>
      <footer className="md:pt-16 print:pt-16">
        <dl className="mb-10">
          <dt className="font-bold">Telephone</dt>
          <dd className="mb-4">+44 (0) 7853 123 424</dd>
          <dt className="font-bold">Email/Skype</dt>
          <dd className="mb-4">
            <a href="mailto:mikeffrancis@gmail.com">mikeffrancis@gmail.com</a>
          </dd>
          <dt className="font-bold">Web</dt>
          <dd className="mb-4">
            <a href="https://mikefrancis.dev">mikefrancis.dev</a>
          </dd>
          <dt className="font-bold">Twitter</dt>
          <dd className="mb-4">
            <a href="https://twitter.com/_mikefrancis">@_mikefrancis</a>
          </dd>
          <dt className="font-bold">Code</dt>
          <dd className="mb-4">
            <a href="https://github.com/mikefrancis">github.com/mikefrancis</a>
          </dd>
          <dt className="font-bold">Portfolio</dt>
          <dd>
            <a href="https://dribbble.com/mikefrancis">
              dribbble.com/mikefrancis
            </a>
          </dd>
        </dl>
        <h2 className="text-2xl mb-4">FOSS Contributions</h2>
        <ul>
          <li>Laravel</li>
          <li>Symfony</li>
          <li>create-react-app</li>
          <li>Next.js</li>
          <li>Bootstrap</li>
        </ul>
      </footer>
    </div>
  </>
);
export default CV;
