import React, { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';

import ThemeProvider from './compoents/organisms/ThemeProvider/ThemeProvider';
import { lightTheme } from './theme/theme';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme} mode="light" setMode={() => {}} toggleMode={() => {}}>
      {children}
    </ThemeProvider>
  );
};

export const customRender = (component: ReactElement) => render(component, { wrapper: Provider });
