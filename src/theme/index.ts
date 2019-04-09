import * as React from "react";
import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

export interface IThemeInterface {
  colours: {
    primary: string;
    text: string;
    background: string;
    white: string;
    black: string;
    greyLighter: string;
    greyLight: string;
    grey: string;
    greyDark: string;
    greyDarker: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    mono: string;
  };
  width: {
    sm: number;
  };
}

const {
  default: styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider,
  withTheme
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

const baseTheme = {
  colours: {
    background: "#FFF",
    text: "#3d4852",
    primary: "#3490dc",
    white: "#fff",
    black: "#3d4852",
    grey: "#B8C2CC",
    greyDark: "#8795A1",
    greyDarker: "#606F7B",
    greyLight: "#DAE1E7",
    greyLighter: "#F1F5F8"
  },
  fonts: {
    primary: '"Montserrat", sans-serif',
    secondary: '"Playfair Display", serif',
    mono: "Menlo, Monaco, monospace"
  },
  width: {
    sm: 768
  }
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Playfair+Display');
  
  :root {
      box-sizing: border-box;
      font-family: ${baseTheme.fonts.primary};
      font-size: 1rem;
      line-height: 2rem;
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

  p, pre {
    margin: 0 0 1.5rem;
  }

  pre, code {
    color: ${baseTheme.colours.black};
    background-color: ${baseTheme.colours.greyLighter};
    font-family: ${baseTheme.fonts.mono};
  }

  code {
    padding: 0.25rem 0.5rem;
  }

  pre {
    padding: 1.5rem;
    overflow-x: scroll;

    code {
      padding: 0;
    }
  }
`;

export const themes: { [key: string]: IThemeInterface } = {
  light: baseTheme,
  dark: {
    ...baseTheme,
    colours: {
      ...baseTheme.colours,
      background: baseTheme.colours.text,
      text: baseTheme.colours.background
    }
  }
};

const ThemeContext = React.createContext({
  themeName: "light",
  toggleTheme: () => {}
});

export { GlobalStyle, css, keyframes, ThemeProvider, withTheme, ThemeContext };
export default styled;
