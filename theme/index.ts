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
  withTheme,
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider, withTheme };
export default styled;
