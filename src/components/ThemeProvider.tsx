import { createContext, useContext, useEffect, useState } from 'react';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

const ThemeContext = createContext({
  theme: THEME_LIGHT,
  toggleTheme: () => {},
});

const useKeyboard = (key: string, onKeyPress: Function) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === key) {
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

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(THEME_LIGHT);
  const toggleTheme = () => {
    setTheme((theme) => (theme === THEME_DARK ? THEME_LIGHT : THEME_DARK));
  };

  useKeyboard('t', toggleTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
