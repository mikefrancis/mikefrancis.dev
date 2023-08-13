import { Inter } from 'next/font/google';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import './global.css';
import { Template } from '../components/Template';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '700', '900'],
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {draftMode().isEnabled && (
          <div className="py-5 px-10 bg-green-300">
            Draft mode is on!{' '}
            <Link
              className="underline"
              prefetch={false}
              href="/api/exit-preview"
            >
              Exit
            </Link>
          </div>
        )}
        <ThemeProvider>
          <Template>{children}</Template>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
