import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeContext, ThemeProvider, themes } from "./theme";

interface IState {
  themeName: string;
  toggleTheme: () => void;
}

class Root extends React.Component<React.Props<{}>, IState> {
  constructor(props: React.Props<{}>) {
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
          <App />
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
