import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Header from './header';

const Footer = ({ siteTitle }) => (
    <footer className="bg-black text-white p-8 sm:p-16 pb-0 sm:pb-8">
        <div className="container sm:flex sm:flex-row-reverse">
            <div className="pb-6 sm:w-1/5">
                <ul className="list-reset flex sm:inline-block items-stretch">
                    <li className="mb-1 flex-1 text-center sm:text-left">
                        <Link href="/">
                            <a className="no-underline text-white">Home</a>
                        </Link>
                    </li>
                    <li className="mb-1 flex-1 text-center sm:text-left">
                        <Link href="/about">
                            <a className="no-underline text-white">About</a>
                        </Link>
                    </li>
                    <li className="mb-1 flex-1 text-center sm:text-left">
                        <Link href="mailto:mikeffrancis@gmail.com">
                            <a className="no-underline text-white">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="pb-6 sm:w-1/5">
                <ul className="list-reset flex sm:inline-block">
                    <li className="mb-1 flex-1 sm:w-auto text-center sm:text-left">
                        <a
                            className="no-underline text-white"
                            href="https://github.com/mikefrancis"
                        >
                            GitHub
                        </a>
                    </li>
                    <li className="mb-1 flex-1 sm:w-auto text-center sm:text-left">
                        <a
                            className="no-underline text-white"
                            href="https://dribbble.com/mikefrancis"
                        >
                            Dribbble
                        </a>
                    </li>
                    <li className="mb-1 flex-1 sm:w-auto text-center sm:text-left">
                        <a
                            className="no-underline text-white"
                            href="https://www.linkedin.com/in/mike-francis-77a65511"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li className="mb-1 w-1/4 sm:w-auto text-center sm:text-left">
                        <a
                            className="no-underline text-white"
                            href="https://twitter.com/_mikefrancis"
                        >
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>

            <div className="pb-6 text-center sm:w-3/5 sm:text-left">
                <span className="text-grey">
                    &copy; { siteTitle } { new Date().getFullYear() }
                </span>
                .
                <a
                    className="ml-2 text-white no-underline"
                    href="https://github.com/mikefrancis/mikefrancis.github.io"
                >
                    View source
                </a>
            </div>
        </div>
    </footer>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '',
};

export default Footer;
