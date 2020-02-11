import * as React from 'react';
import 'prismjs/themes/prism-okaidia.css';
import 'typeface-work-sans';

import ThemeProvider from './src/components/ThemeProvider';
import './src/index.css';

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
