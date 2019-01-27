import App, { Container, NextAppContext } from "next/app";
import Head from "next/head";
import * as React from "react";
import { createGlobalStyle, IThemeInterface, ThemeProvider } from "../theme";

const baseTheme = {
  black: "#3d4852",
  blue: "#3490dc",
  fontFamilyAlternate: '"Playfair Display", serif',
  fontFamilyBase: '"Montserrat", sans-serif',
  grey: "#B8C2CC",
  greyDark: "#8795A1",
  greyDarker: "#606F7B",
  greyLight: "#DAE1E7",
  greyLighter: "#F1F5F8",
  width: {
    sm: 768,
  },
};

const lightTheme: IThemeInterface = Object.assign({}, baseTheme, {
  backgroundColour: "#fff",
  colour: "#3d4852",
});

const darkTheme: IThemeInterface = Object.assign({}, baseTheme, {
  backgroundColour: "#3d4852",
  colour: "#fff",
});

const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-family: ${baseTheme.fontFamilyBase};
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
  public static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public state = {
    theme: "light",
  };

  public changeTheme = () => {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark",
    });
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title>Mike Francis</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="UI Designer and Software Developer based in London UK."
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Playfair+Display"
          />
        </Head>
        <ThemeProvider
          theme={this.state.theme === "light" ? lightTheme : darkTheme}
        >
          <Component
            {...pageProps}
            themeName={this.state.theme}
            changeTheme={this.changeTheme}
          />
        </ThemeProvider>
      </Container>
    );
  }
}
