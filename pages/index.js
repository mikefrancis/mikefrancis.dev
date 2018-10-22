import React, { Fragment } from 'react';
import Header from '../src/components/header';
import Footer from '../src/components/footer';

export default () => (
    <Fragment>
        <Header />
        <main>
            main stuff
        </main>
        <Footer siteTitle="Mike Francis" />
    </Fragment>
);
