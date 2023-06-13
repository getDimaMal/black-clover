import { createMakeAndWithStyles } from 'tss-react';

import { useThemeContext } from '../compoents/organisms/ThemeProvider/ThemeContext';

const useTheme = () => {
  const { theme } = useThemeContext();
  return theme;
};

export const { makeStyles, useStyles } = createMakeAndWithStyles({ useTheme });
