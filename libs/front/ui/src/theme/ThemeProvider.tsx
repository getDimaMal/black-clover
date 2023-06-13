import React, { FC, ReactNode } from 'react';

import { Theme } from './theme';
import ThemeContext from './ThemeContext';
import useTheme from './useTheme';

export type ThemeProviderProps = {
  dark: Theme;
  light: Theme;
  children: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ dark, light, children }) => {
  const { theme, setMode, toggleMode } = useTheme({ dark, light });

  return <ThemeContext.Provider value={{ theme, setMode, toggleMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
