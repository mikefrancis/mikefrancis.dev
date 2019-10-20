import * as React from 'react';
import { Link } from 'gatsby';

import { ThemeContext, THEME_DARK } from './ThemeProvider';

interface Props {
  current: number;
  total: number;
}

const Pagination = ({ current, total }: Props) => {
  const pages = Array.from({ length: total });
  const { theme } = React.useContext(ThemeContext);

  if (total === 1) {
    return null;
  }

  return (
    <div className="mb-8">
      {pages.map((page, i) => {
        const realPage = i + 1;
        const link = i === 0 ? '/blog' : `/blog/page/${realPage}`;

        if (realPage === current) {
          return (
            <span className="inline-block p-2" key={i}>
              {realPage}
            </span>
          );
        }

        return (
          <Link to={link} key={i}>
            <span
              className={`inline-block p-2 ${
                theme === THEME_DARK ? 'text-gray-500' : 'text-gray-700'
              }`}
            >
              {realPage}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
