import { useState } from 'react';

import { Theme } from './theme';

type UseThemeProps = {
  light: Theme;
  dark: Theme;
};

const useTheme = ({ light, dark }: UseThemeProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleMode = () => {
    setMode((old) => (old === 'light' ? 'dark' : 'light'));
  };

  return {
    mode,
    setMode,
    toggleMode,
    theme: { ...(mode === 'light' ? light : dark) },
  };
};

export default useTheme;
