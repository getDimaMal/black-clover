import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@black-clover/front/redux/store/store';
import { render } from '@testing-library/react';

import AuthProvider from './components/auth/AuthContext/AuthContext';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <Provider store={store}>{children}</Provider>
    </AuthProvider>
  );
};

export const customRender = (component: React.ReactElement, options?: Parameters<typeof render>[1]) => {
  return render(component, { wrapper: Wrapper, ...options });
};
