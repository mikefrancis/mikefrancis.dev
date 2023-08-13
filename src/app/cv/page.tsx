import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Mike Francis CV',
};

const Page = () => {
  return (
    <>
      <Head>
        <title>Mike Francis CV</title>
      </Head>
      <div className="text-black md:flex p-10 print:p-0 print:flex max-w-5xl">
        <div className="flex-1 md:pr-16 print:pr-16 space-y-10 print:space-y-5">
          <header>
            <h1 className="text-4xl print:text-2xl mb-4 uppercase tracking-widest">
              Mike Francis
            </h1>
            <p className="text-lg print:text-sm">
              Technical Leader, Software Engineer & UI Designer based in London,
              UK. Tasked with bootstrapping and leading teams to deliver fast
              prototypes and scalable solutions, while mentoring and running
              sprints along the way.
            </p>
          </header>
          <main className="space-y-10 print:space-y-5">
            <section className="space-y-5">
              <h2 className="text-2xl print:text-lg">Selected Skills</h2>
              <ul className="list-disc px-8 print:text-sm">
                <li>
                  JavaScript/Node.js (TypeScript, React [Native], Redux, Jest,
                  Express, Webpack)
                </li>
                <li>PHP 7+ (Composer, Symfony, Laravel, PHPUnit, PSRs)</li>
                <li>HTML5/CSS3 (Sass/LESS, BEM, Atomic CSS, CSS-in-JS)</li>
                <li>Docker/Kubernetes, Vagrant, Chef, AWS, GCP, Heroku</li>
                <li>Git (Gitflow, Pull Requests, Code Reviews, CI)</li>
                <li>GraphQL/REST APIs</li>
                <li>Agile Methodologies (Scrum/Kanban)</li>
              </ul>
            </section>
            <section className="space-y-5">
              <h2 className="text-2xl print:text-lg">
                Professional Employment
              </h2>
              <article>
                <div className="flex items-center mb-2">
                  <h3 className="font-bold mr-4">
                    Sunsave - Head of Engineering
                  </h3>
                  <p className="text-gray-700 text-sm">
                    London, UK • March 2022 - Present
                  </p>
                </div>
                <p className="print:text-sm">
                  Creating a technical function from scratch: picking the
                  initial tech and infrastructure stack for rapid prototyping
                  and iteration for product-market fit, creating a hiring
                  process and executing to staff a team of engineers, creating a
                  fundamental Engineering culture and iterating with new hires,
                  providing IT services (inventory, onboarding, support) and
                  creating data/reporting stacks for business metrics.
                </p>
              </article>
              <article>
                <div className="flex items-center mb-2">
                  <h3 className="font-bold mr-4">Cuckoo - Senior Engineer</h3>
                  <p className="text-gray-700 text-sm">
                    London, UK • October 2021 - March 2022
                  </p>
                </div>
                <p className="print:text-sm">
                  Main area of focus was architecture, tooling and incremental
                  adoption of a Design System (now in production across a suite
                  of clients). Also mentoring and coaching of less senior
                  engineers, and working on other marketing projects (A/B
                  testing, Promotions etc.).
                </p>
              </article>
              <section>
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-bold mr-4">Bulb</h3>
                  <p className="text-sm text-gray-700">
                    London, UK • December 2018 - October 2021
                  </p>
                </div>
                <div className="pl-8">
                  <article>
                    <div className="flex items-center mb-2">
                      <h4 className="font-bold mr-4">Engineering Manager</h4>
                      <p className="text-sm text-gray-700">
                        January 2021 - October 2021
                      </p>
                    </div>
                    <p className="print:text-sm">
                      Managing and scaling 3 product engineering teams,
                      currently consisting of 12 direct reports. Focussing
                      mainly on career development & coaching, hiring,
                      onboarding, regular feedback, continuous improvement and
                      operational standards.
                    </p>
                  </article>
                  <article>
                    <div className="flex items-center mb-2">
                      <h4 className="font-bold mr-4">Technical Lead</h4>
                      <p className="text-sm text-gray-700">
                        April 2020 - January 2021
                      </p>
                    </div>
                    <p className="print:text-sm">
                      Research, design and implementation of technical
                      solutions. Guiding the quality, correctness, security and
                      observability of systems, services and data in my
                      team&apos;s business domain. Mentoring and coaching of
                      software engineers and acting as a DRI for technology
                      related projects driving continuous improvement.
                    </p>
                  </article>
                  <article>
                    <div className="flex items-center mb-2">
                      <h4 className="font-bold mr-4">
                        Senior Software Engineer
                      </h4>
                      <p className="text-sm text-gray-700">
                        December 2018 - April 2020
                      </p>
                    </div>
                    <p className="print:text-sm">
                      Planning and delivering team and organisation-wide
                      projects, implementing technical strategy and improvements
                      while mentoring more junior members of the team. Main
                      focusses were internal (customer service) tooling and
                      productivity enablers, operational processes and
                      implementing security initiatives.
                    </p>
                  </article>
                </div>
              </section>
              <section>
                <div className="flex items-center mb-2">
                  <h3 className="font-bold text-lg mr-4">Pod Point</h3>
                  <p className="text-gray-700 text-sm">
                    London, UK • June 2015 - November 2018
                  </p>
                </div>
                <div className="pl-8">
                  <article>
                    <div className="flex items-center mb-2">
                      <h4 className="font-bold mr-4">
                        Senior Software Engineer
                      </h4>
                      <p className="text-gray-700 text-sm">
                        June 2015 - November 2018
                      </p>
                    </div>
                    <p className="print:text-sm">
                      Developing, scaling and mentoring in an agile environment
                      on various internal and external APIs, Microservices and
                      Native/Web Applications for a range of stakeholders.
                    </p>
                  </article>
                  <article>
                    <div className="flex items-center mb-2">
                      <h4 className="font-bold mr-4">Software Engineer</h4>
                      <p className="text-gray-700 text-sm">
                        June 2015 - May 2017
                      </p>
                    </div>
                    <p className="print:text-sm">
                      Developing, scaling and mentoring in an agile environment
                      on various internal and external APIs, Microservices and
                      Native/Web Applications for a range of stakeholders.
                    </p>
                  </article>
                </div>
              </section>
              <article>
                <div className="flex items-center mb-2">
                  <h3 className="font-bold mr-4">Benchmark - Lead Developer</h3>
                  <p className="text-gray-700 text-sm">
                    London, UK • September 2013 - June 2015
                  </p>
                </div>
                <p className="print:text-sm">
                  Development Studio Manager, introducing new workflows,
                  teaching new and existing developers new tools, frameworks and
                  principles while project managing and working on eCommerce
                  sites/products and web applications.
                </p>
              </article>
              <article>
                <div className="flex items-center mb-2">
                  <h3 className="font-bold mr-4">ilk - Web Developer</h3>
                  <p className="text-gray-700 text-sm">
                    Leeds, UK • June 2008 - September 2013
                  </p>
                </div>
                <p className="print:text-sm">
                  Also Digital Studio Manager, responsible for planning,
                  creating and maintaining interactive online and offline
                  applications, from consultancy, design and support to all
                  aspects of development.
                </p>
              </article>
              <article>
                <div className="flex items-center mb-2">
                  <h3 className="font-bold mr-4">
                    Code Blue Group - Web Developer
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Huddersfield, UK • September 2007 – June 2008
                  </p>
                </div>
                <p className="print:text-sm">
                  Worked developing and maintaining websites, eCommerce stores
                  and internal apps on a pro-rata basis while studying for my
                  degree.
                </p>
              </article>
              <article>
                <div className="flex items-center mb-2">
                  <h3 className="font-bold mr-4">
                    Volunteer - Ministry of Stories
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Remote • May 2010 - Present
                  </p>
                </div>
                <p className="print:text-sm">
                  After building the original site as part of a work brief I
                  became a volunteer for Ministry of Stories and working
                  alongside another volunteer, delivered maintenance and feature
                  requests in my spare time.
                </p>
              </article>
            </section>
            <section className="space-y-5">
              <h2 className="text-2xl">Education</h2>
              <article className="flex items-center">
                <h3 className="font-bold mr-4">BA Multimedia (Hons)</h3>
                <p className="text-gray-700 text-sm">
                  University of Huddersfield • September 2004 - June 2008
                </p>
              </article>
              <article className="flex items-center">
                <h3 className="font-bold mr-4">A-levels</h3>
                <p className="text-gray-700 text-sm">
                  Penistone 6th Form • September 2002 - June 2004
                </p>
              </article>
              <article className="flex items-center">
                <h3 className="font-bold mr-4">GCSEs</h3>
                <p className="text-gray-700 text-sm">
                  Penistone Grammar School • September 1997 - June 2002
                </p>
              </article>
            </section>
          </main>
        </div>
        <footer className="md:pt-14 print:pt-10 space-y-10 print:space-y-5">
          <dl className="print:text-sm">
            <dt className="font-bold">Telephone</dt>
            <dd className="mb-2">+44 (0) 7853 123 424</dd>
            <dt className="font-bold">Email/Skype</dt>
            <dd className="mb-2">
              <a href="mailto:mikeffrancis@gmail.com">mikeffrancis@gmail.com</a>
            </dd>
            <dt className="font-bold">Web</dt>
            <dd className="mb-2">
              <a href="https://mikefrancis.dev">mikefrancis.dev</a>
            </dd>
            <dt className="font-bold">Twitter</dt>
            <dd className="mb-2">
              <a href="https://twitter.com/_mikefrancis">@_mikefrancis</a>
            </dd>
            <dt className="font-bold">Code</dt>
            <dd className="mb-2">
              <a href="https://github.com/mikefrancis">
                github.com/mikefrancis
              </a>
            </dd>
            <dt className="font-bold">Portfolio</dt>
            <dd>
              <a href="https://dribbble.com/mikefrancis">
                dribbble.com/mikefrancis
              </a>
            </dd>
          </dl>
          <section className="space-y-5">
            <h2 className="text-2xl print:text-base">Speaking</h2>
            <ul className="list-disc px-8 print:text-sm">
              <li>Work In The Web 2020</li>
              <li>ForeFront 2016</li>
              <li>The Digital Barn 2012</li>
            </ul>
          </section>
          <section className="space-y-5">
            <h2 className="text-2xl print:text-base">FOSS Contributions</h2>
            <ul className="list-disc px-8 print:text-sm">
              <li>Laravel</li>
              <li>Symfony</li>
              <li>create-react-app</li>
              <li>Next.js</li>
              <li>Bootstrap</li>
            </ul>
          </section>
        </footer>
      </div>
    </>
  );
};

export default Page;
