import * as React from 'react';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
const KEYCODE_T = 116;

export const ThemeContext = React.createContext({
  theme: THEME_LIGHT,
  toggleTheme: () => {},
});

const useKeyboard = (keyCode: number, onKeyPress: Function) => {
  React.useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.keyCode === keyCode) {
        onKeyPress();
      }
    };

    window.addEventListener('keypress', listener);

    return () => {
      window.removeEventListener('keypress', listener);
    };
  });
};

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = React.useState(THEME_LIGHT);
  const toggleTheme = () => {
    setTheme((theme) => (theme === THEME_DARK ? THEME_LIGHT : THEME_DARK));
  };

  useKeyboard(KEYCODE_T, toggleTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
