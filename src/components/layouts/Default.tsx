import * as React from "react";
import Footer from "./../Footer";
import Header from "./../Header";
import styled, { GlobalStyle } from "./../../theme";

const StyledMain = styled.main`
  background-color: ${props => props.theme.colours.background};
  color: ${props => props.theme.colours.text};
  padding: 4rem 0;
  transition: all 300ms;
`;

const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </>
);

export default Layout;
