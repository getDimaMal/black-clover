import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@black-clover/front/redux/store/store';
import { render } from '@testing-library/react';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export const customRender = (component: React.ReactElement, options?: Parameters<typeof render>[1]) => {
  return render(component, { wrapper: Wrapper, ...options });
};
