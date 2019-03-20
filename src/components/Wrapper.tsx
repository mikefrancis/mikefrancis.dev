import React from "react";
import { ThemeContext, ThemeProvider, themes } from "./../theme";

interface Props {
  children: JSX.Element;
}

interface State {
  themeName: string;
  toggleTheme: () => void;
}

class Wrapper extends React.Component<Props, State> {
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
          {this.props.children}
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}

export default Wrapper;
