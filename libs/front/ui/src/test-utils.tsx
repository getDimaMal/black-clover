import React, { ReactElement, ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import ThemeProvider from './components/organisms/ThemeProvider/ThemeProvider';
import { lightTheme } from './theme/theme';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme} mode="light" setMode={() => {}} toggleMode={() => {}}>
      {children}
    </ThemeProvider>
  );
};

export const customRender = (component: ReactElement) => render(component, { wrapper: Provider });

export { fireEvent, screen, renderHook };
