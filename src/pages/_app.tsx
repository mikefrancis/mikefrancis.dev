import { AppPropsType } from 'next/dist/next-server/lib/utils';
import 'typeface-work-sans';

import ThemeProvider from '../components/ThemeProvider';
import '../styles/global.css';

const WrappedApp: React.FC<AppPropsType> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default WrappedApp;
