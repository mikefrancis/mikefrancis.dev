import { Work_Sans } from 'next/font/google';
import { PropsWithChildren } from 'react';

import './global.css';
import { Template } from '../components/Template';
import { ThemeProvider } from '../components/ThemeProvider';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={workSans.variable}>
      <body>
        <ThemeProvider>
          <Template>{children}</Template>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
