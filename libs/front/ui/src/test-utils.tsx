import React, { ReactElement, ReactNode } from 'react';
import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';

import ThemeProvider from './components/organisms/ThemeProvider/ThemeProvider';
import { lightTheme } from './theme/theme';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme} mode="light" setMode={() => {}} toggleMode={() => {}}>
      {children}
    </ThemeProvider>
  );
};

const customRender = (component: ReactElement) => render(component, { wrapper: Provider });

const fillForm = (form: NonNullable<unknown>, container: HTMLElement) => {
  Object.entries(form).forEach(([key, value]) =>
    // ToDo find a better solution instead of `key.toUpperCase()`
    fireEvent.change(getByLabelText(container, `${key[0].toUpperCase()}${key.slice(1)}`), { target: { value } })
  );
};

export { fireEvent, screen, customRender, fillForm };
