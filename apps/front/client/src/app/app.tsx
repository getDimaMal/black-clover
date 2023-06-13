import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { store } from '@black-clover/front/redux';
import Button from '@black-clover/front/ui/atoms/Button/Button';
import { darkTheme, lightTheme } from '@black-clover/front/ui/theme/theme';
import ThemeProvider from '@black-clover/front/ui/theme/ThemeProvider';

import ROUTES from './constants/routes.json';

export function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <div role="navigation">
              <Link to={ROUTES.ROOT}>Home</Link>
              <span> | </span>
              <Link to={ROUTES.LOGIN}>Login</Link>
            </div>

            <ThemeProvider light={lightTheme} dark={darkTheme}>
              <Button label="Hello Black Clover" onClick={() => console.log('!!! HELLO CLOVER !!!')} />
            </ThemeProvider>

            {/*<Routes>*/}
            {/*  <Route path={ROUTES.ROOT} element={<WelcomePage />} />*/}
            {/*  <Route path={ROUTES.LOGIN} element={<LoginPage />} />*/}
            {/*</Routes>*/}
          </div>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}

export default App;
