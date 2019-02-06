import * as React from "react";
import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

export interface IThemeInterface {
  backgroundColour: string;
  colour: string;
  black: string;
  blue: string;
  greyLighter: string;
  greyLight: string;
  grey: string;
  greyDark: string;
  greyDarker: string;
  fontFamilyBase: string;
  fontFamilyAlternate: string;
  width: {
    sm: number;
  };
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

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
    sm: 768
  }
};

interface IThemesInterface {
  [key: string]: IThemeInterface;
}

export const themes: IThemesInterface = {
  light: Object.assign({}, baseTheme, {
    backgroundColour: "#fff",
    colour: "#3d4852"
  }) as IThemeInterface,
  dark: Object.assign({}, baseTheme, {
    backgroundColour: "#3d4852",
    colour: "#fff"
  }) as IThemeInterface
};

const ThemeContext = React.createContext({
  themeName: "dark",
  toggleTheme: () => {}
});

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Playfair+Display');
  
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

export { css, GlobalStyle, keyframes, ThemeProvider, withTheme, ThemeContext };
export default styled;
