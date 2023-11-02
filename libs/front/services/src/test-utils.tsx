import React from 'react';
import { render } from '@testing-library/react';

import AuthProvider from './components/auth/AuthContext/AuthContext';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export const customRender = (component: React.ReactElement, options?: Parameters<typeof render>[1]) => {
  return render(component, { wrapper: Wrapper, ...options });
};
