import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { store } from '@black-clover/front/redux';
import Button from '@black-clover/front/ui/compoents/atoms/Button/Button';
import ThemeProvider from '@black-clover/front/ui/compoents/organisms/ThemeProvider/ThemeProvider';
import useTheme from '@black-clover/front/ui/hooks/useTheme';
import { darkTheme, lightTheme } from '@black-clover/front/ui/theme/theme';

import ROUTES from './constants/routes.json';

export function App() {
  const theme = useTheme({ darkTheme, lightTheme });

  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider {...theme}>
            <div role="navigation">
              <Link to={ROUTES.ROOT}>Home</Link>
              <span> | </span>
              <Link to={ROUTES.LOGIN}>Login</Link>
            </div>

            <Button label="Hello Black Clover" onClick={() => console.log('!!! HELLO CLOVER !!!')} />

            {/*<Routes>*/}
            {/*  <Route path={ROUTES.ROOT} element={<WelcomePage />} />*/}
            {/*  <Route path={ROUTES.LOGIN} element={<LoginPage />} />*/}
            {/*</Routes>*/}
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}

export default App;
