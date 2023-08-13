'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { THEME_DARK, useTheme } from '../components/ThemeProvider';

export const Template = ({ children }: PropsWithChildren) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === THEME_DARK ? 'dark' : ''}>
      <div className="min-h-screen transition bg-white text-black dark:bg-gray-800 dark:text-white py-10 md:py-20 space-y-10 md:space-y-20">
        <header className="px-5 md:px-10 lg:px-20">
          <div className="mx-auto max-w-5xl flex items-center justify-between">
            <Link
              href="/"
              prefetch={false}
              className="uppercase text-sm tracking-widest"
            >
              <Image
                className="rounded-full hover:animate-wiggle"
                src="https://www.gravatar.com/avatar/1399c5690d715fc64f800b26be3b9cee"
                alt="Mike Francis"
                width={48}
                height={48}
              />
            </Link>
            <nav className="flex justify-center space-x-2 md:space-x-5 font-bold">
              <a
                className="underline-offset-4 hover:underline"
                href="https://github.com/mikefrancis"
              >
                GitHub
              </a>
              <a
                className="underline-offset-4 hover:underline"
                href="https://twitter.com/_mikefrancis"
              >
                Twitter
              </a>
              <a
                className="underline-offset-4 hover:underline"
                href="https://dribbble.com/mikefrancis"
              >
                Dribbble
              </a>
              <a
                className="underline-offset-4 hover:underline"
                href="https://www.linkedin.com/in/mike-francis-77a65511/"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </header>
        <main className="px-5 md:px-10 lg:px-20">
          <div className="mx-auto max-w-5xl">{children}</div>
        </main>
        <footer className="px-5 md:px-10 lg:px-20">
          <div className="mx-auto max-w-5xl flex items-center justify-center md:justify-between space-x-5">
            <p>&copy; {new Date().getFullYear()} Michael Francis</p>
            <button
              title="Toggle theme (T)"
              onClick={toggleTheme}
              className="transition border-4 h-4 w-8 rounded-full bg-gray-900 border-gray-900 dark:bg-white dark:border-white"
            >
              <span className="transition rounded-full block w-2 h-2 bg-white border-white dark:bg-gray-900 dark:border-gray-900 dark:translate-x-4" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
