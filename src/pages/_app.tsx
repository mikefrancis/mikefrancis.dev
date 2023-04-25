import { AppPropsType } from 'next/dist/shared/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import * as React from 'react';
import 'typeface-work-sans';

import ThemeProvider from '../components/ThemeProvider';
import '../styles/global.css';

const WrappedApp = ({ Component, pageProps }: AppPropsType) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
};

export default WrappedApp;
