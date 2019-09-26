import darkmodejs from '@assortment/darkmodejs';
import * as React from 'react';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
const KEYCODE_T = 116;

export const ThemeContext = React.createContext({
  theme: THEME_LIGHT,
  toggleTheme: () => {}
});

const useKeyboard = (keyCode: number, onKeyPress: Function): void => {
  React.useEffect(() => {
    const listener = (event: KeyboardEvent): void => {
      if (event.keyCode === keyCode) {
        onKeyPress();
      }
    };

    window.addEventListener('keypress', listener);

    return (): void => {
      window.removeEventListener('keypress', listener);
    };
  });
};

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const [theme, setTheme] = React.useState(THEME_LIGHT);
  const toggleTheme = (): void => {
    setTheme(theme => (theme === THEME_DARK ? THEME_LIGHT : THEME_DARK));
  };

  useKeyboard(KEYCODE_T, toggleTheme);

  React.useEffect(() => {
    const dmjs = darkmodejs({
      onChange: (currentTheme: string) => {
        if (currentTheme === 'no-support' || theme === currentTheme) {
          return;
        }

        toggleTheme();
      }
    });

    return (): void => {
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
