import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
    <header className="p-8 md:p-16">
        <div className="container">
            <Link href="/">
                <a className="no-underline text-black tracking-wide uppercase font-bold">{ siteTitle }</a>
            </Link>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '',
};

export default Header;
