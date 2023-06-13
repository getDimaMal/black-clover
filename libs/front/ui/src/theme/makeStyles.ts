import { createMakeAndWithStyles } from 'tss-react';

import { useThemeContext } from './ThemeContext';

const useTheme = () => {
  const { theme } = useThemeContext();
  return theme;
};

export const { makeStyles, useStyles } = createMakeAndWithStyles({ useTheme });
