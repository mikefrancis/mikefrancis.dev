import { Link, useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';

import { ThemeContext, THEME_DARK } from './ThemeProvider';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div
      className={`transition font-sans min-h-screen ${
        theme === THEME_DARK
          ? 'bg-gray-800 text-white theme-dark'
          : 'bg-white text-black theme-light'
      }`}
    >
      <header className="p-8 pb-16 md:px-32 md:pt-16 md:pb-32">
        <div className="max-w-5xl flex">
          <div className="flex-1">
            <Link to="/">
              <span className="uppercase text-sm tracking-widest">
                {site.siteMetadata.title}
              </span>
            </Link>
          </div>
          <button
            title="Toggle theme (T)"
            onClick={toggleTheme}
            className={`transition border-4 h-4 w-8 rounded-full ${
              theme === THEME_DARK
                ? 'bg-white border-white'
                : 'bg-gray-800 border-gray-800'
            }`}
          >
            <span
              className={`transition rounded-full block w-2 h-2 ${
                theme === THEME_DARK
                  ? 'bg-gray-800 border-gray-800 translate-x'
                  : 'bg-white border-white'
              }`}
            />
          </button>
        </div>
      </header>
      <main className="px-8 pb-8 md:px-32 md:pb-16">{children}</main>
      <footer className="px-8 pb-8 md:px-32 md:pb-16">
        <div className="max-w-5xl md:flex items-center">
          <div className="flex-1 text-sm tracking-widest text-center md:text-left">
            &copy;{' '}
            <span className="uppercase mx-2">{site.siteMetadata.title}</span>{' '}
            {new Date().getFullYear()}
          </div>
          <nav className="flex justify-center -mx-4 mt-8 md:mt-0">
            <a
              className="mx-3"
              href="https://github.com/mikefrancis"
              title="GitHub"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 1792 1792"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill="currentcolor"
                  d="M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                />
              </svg>
            </a>
            <a
              className="mx-3"
              href="https://twitter.com/_mikefrancis"
              title="Twitter"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 1792 1792"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill="currentcolor"
                  d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"
                />
              </svg>
            </a>
            <a
              className="mx-3"
              href="https://dribbble.com/mikefrancis"
              title="Dribbble"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 1792 1792"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill="currentcolor"
                  d="M1152 1500q-42-241-140-498h-2l-2 1q-16 6-43 16.5t-101 49-137 82-131 114.5-103 148l-15-11q184 150 418 150 132 0 256-52zm-185-607q-21-49-53-111-311 93-673 93-1 7-1 21 0 124 44 236.5t124 201.5q50-89 123.5-166.5t142.5-124.5 130.5-81 99.5-48l37-13q4-1 13-3.5t13-4.5zm-107-212q-120-213-244-378-138 65-234 186t-128 272q302 0 606-80zm684 319q-210-60-409-29 87 239 128 469 111-75 185-189.5t96-250.5zm-805-741q-1 0-2 1 1-1 2-1zm590 145q-185-164-433-164-76 0-155 19 131 170 246 382 69-26 130-60.5t96.5-61.5 65.5-57 37.5-40.5zm223 485q-3-232-149-410l-1 1q-9 12-19 24.5t-43.5 44.5-71 60.5-100 65-131.5 64.5q25 53 44 95 2 6 6.5 17.5t7.5 16.5q36-5 74.5-7t73.5-2 69 1.5 64 4 56.5 5.5 48 6.5 36.5 6 25 4.5zm112 7q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                />
              </svg>
            </a>
            <a
              className="mx-3"
              href="https://www.linkedin.com/in/mike-francis-77a65511/"
              title="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 1792 1792"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill="currentcolor"
                  d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"
                />
              </svg>
            </a>
            <a
              className="mx-3"
              href="mailto:mikeffrancis@gmail.com"
              title="Mail"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 1792 1792"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill="currentcolor"
                  d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
                />
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
