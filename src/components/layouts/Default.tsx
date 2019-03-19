import * as React from "react";
import Footer from "./../Footer";
import Header from "./../Header";
import styled, {
  GlobalStyle,
  ThemeContext,
  ThemeProvider,
  themes
} from "./../../theme";

const siteTitle = "Mike Francis";

const StyledMain = styled.main`
  background-color: ${props => props.theme.colours.background};
  color: ${props => props.theme.colours.text};
  padding: 4rem 0;
  transition: all 300ms;

  article {
    background-color: ${props => props.theme.colours.primary};
    border-radius: 0.25rem;
    color: white;
    padding: 2rem;
    text-align: center;

    @media (min-width: ${props => props.theme.width.sm}px) {
      padding: 4rem;
    }

    h2 {
      font-size: 1.875rem;
      margin: 0 0 2rem;
    }

    p {
      font-family: ${props => props.theme.fonts.secondary};
      font-size: 1.25rem;
      margin: 0 0 2rem;
    }
  }
`;

interface Props {
  children: React.ReactNode;
}

interface State {
  themeName: string;
  toggleTheme: () => void;
}

class Layout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      themeName: "light",
      toggleTheme: this.toggleTheme
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      themeName: state.themeName === "dark" ? "light" : "dark"
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeProvider theme={themes[this.state.themeName]}>
          <>
            <GlobalStyle />
            <Header siteTitle={siteTitle} />

            <StyledMain>{this.props.children}</StyledMain>

            <Footer siteTitle={siteTitle} />
          </>
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}

export default Layout;
