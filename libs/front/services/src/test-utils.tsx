import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import AuthProvider from './components/auth/AuthProvider/AuthProvider';
import WorkspaceProvider from './components/workspaces/WorkspaceProvider/WorkspaceProvider';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <WorkspaceProvider>
      <AuthProvider>{children}</AuthProvider>
    </WorkspaceProvider>
  );
};

export const customRender = (component: React.ReactElement, options?: Parameters<typeof render>[1]) => {
  return render(component, { wrapper: Wrapper, ...options });
};

export { render, renderHook };
