import * as React from "react";
import darkmodejs from "@assortment/darkmodejs";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";

export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {}
});

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState(THEME_LIGHT);

  const toggleTheme = () =>
    setTheme(theme => (theme === THEME_DARK ? THEME_LIGHT : THEME_DARK));

  React.useEffect(() => {
    const dmjs = darkmodejs({ onChange: toggleTheme });

    return () => {
      dmjs.removeListeners();
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
