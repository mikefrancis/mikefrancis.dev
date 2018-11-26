import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const AboutModalButton = () => (
    <span className="inline-block py-2 px-4">
        <span className="block font-bold text-grey-darkest pb-1 border-b-2 border-transparent hover:border-grey-darkest tracking-wide uppercase">
            About
        </span>
    </span>
);

const AboutModalContent = () => (
    <Fragment>
        <h2 className="mb-8">Hello!</h2>
        <p className="mb-4 leading-normal">
            I'm a designer/full-stack developer currently working at Pod Point, an electric car charging network based in London. We ship APIs and Microservices written in Laravel/Lumen and Node, as well as cross-platform apps and UIs written in React and React Native.
        </p>
        <p className="mb-4 leading-normal">
            I'm also the co-founder/CTO of FortSort, a property search management tool which aims to make house-hunting a little easier.
        </p>
        <p className="mb-4 leading-normal">
            Put simply, I <span role="img" aria-label="love">❤️</span> designing and building products. If you've got an idea you'd like to discuss, please get in touch.
        </p>
    </Fragment>
);

const Header = ({ siteTitle }) => (
    <header className="bg-white relative z-10 pt-4 md:pt-8">
        <div className="container mx-auto px-2 flex">
            <div className="flex-1">
                <a className="relative inline-block py-2 px-4 text-grey-darkest font-bold tracking-wide uppercase no-underline" href="/">
                    { siteTitle }
                    <span className="absolute pin-l pin-b ml-4 border-b-2 border-grey-darkest h-1 w-12"></span>
                </a>
            </div>

            <ul className="list-reset flex">
                <li>
                    <Modal
                        button={ <AboutModalButton /> }
                        content={ <AboutModalContent /> }
                    />
                </li>
            </ul>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
    siteTitle: '',
};

export default Header;
