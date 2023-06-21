import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@black-clover/front/redux/store/store';
import GlobalStyles from '@black-clover/front/ui/compoents/organisms/GlobalStyles/GlobalStyles';
import ThemeProvider from '@black-clover/front/ui/compoents/organisms/ThemeProvider/ThemeProvider';
import useTheme from '@black-clover/front/ui/hooks/useTheme';
import { darkTheme, lightTheme } from '@black-clover/front/ui/theme/theme';

import 'reflect-metadata';

import Pages from './pages/Pages';

export function App() {
  const theme = useTheme({ darkTheme, lightTheme });

  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider {...theme}>
          <GlobalStyles />
          <Pages />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
}

export default App;
