import App, { Container } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import React from 'react';

const theme = {
    black: '#3d4852',
    blue: '#3490dc',
    greyLighter: '#F1F5F8',
    greyLight: '#DAE1E7',
    grey: '#B8C2CC',
    greyDark: '#8795A1',
    greyDarker: '#606F7B',
    fontFamilyBase: '"Montserrat", sans-serif',
    fontFamilyAlternate: '"Playfair Display", serif',
    width: {
        sm: '768px',
    },
};

const GlobalStyle = createGlobalStyle`
    :root {
        color: ${theme.black};
        box-sizing: border-box;
        font-family: ${theme.fontFamilyBase};
        line-height: 1.5;
    }

    body {
        margin: 0;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }
`;

export default class MyApp extends App {

    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render () {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <GlobalStyle />
                <Head>
                    <title>Mike Francis</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="UI Designer and Software Developer based in London UK." />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Playfair+Display" />
                </Head>
                <ThemeProvider theme={ theme }>
                    <Component { ...pageProps } />
                </ThemeProvider>
            </Container>
        );
    }
}
