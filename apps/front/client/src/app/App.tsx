import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '@black-clover/front/services/components/auth/AuthProvider/AuthProvider';
import WorkspaceProvider from '@black-clover/front/services/components/workspaces/WorkspaceProvider/WorkspaceProvider';
import GlobalStyles from '@black-clover/front/ui/components/organisms/GlobalStyles/GlobalStyles';
import ThemeProvider from '@black-clover/front/ui/components/organisms/ThemeProvider/ThemeProvider';
import useTheme from '@black-clover/front/ui/hooks/useTheme';
import { darkTheme, lightTheme } from '@black-clover/front/ui/theme/theme';

import 'reflect-metadata';

import Pages from './pages/Pages';

export function App() {
  const theme = useTheme({ darkTheme, lightTheme });

  return (
    <StrictMode>
      <WorkspaceProvider>
        <AuthProvider>
          <ThemeProvider {...theme}>
            <GlobalStyles />
            <BrowserRouter>
              <Pages />
            </BrowserRouter>
          </ThemeProvider>
        </AuthProvider>
      </WorkspaceProvider>
    </StrictMode>
  );
}

export default App;
