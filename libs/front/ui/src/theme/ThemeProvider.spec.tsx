import React from 'react';
import { render } from '@testing-library/react';

import { darkTheme, lightTheme } from './theme';
import ThemeProvider, { ThemeProviderProps } from './ThemeProvider';

const getProps = (props: Partial<ThemeProviderProps> = {}): ThemeProviderProps => ({
  light: lightTheme,
  dark: darkTheme,
  children: <div>Application</div>,
  ...props,
});

describe('ThemeProvider', () => {
  it('should render the children with the light theme by default', () => {
    const { getByText } = render(<ThemeProvider {...getProps()} />);

    expect(getByText('Application')).toBeInTheDocument();
  });
});
