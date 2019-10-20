import * as React from 'react';

import ThemeProvider from './src/components/ThemeProvider';
import 'prismjs/themes/prism-okaidia.css';

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
