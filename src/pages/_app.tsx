import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';

import { ThemeProvider } from '../components/ThemeProvider';

import '../styles/global.css';

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
};

export default WrappedApp;
