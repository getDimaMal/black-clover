import React from 'react';

import { customRender } from '../../../test-utils';

import SignUp from './SignUp';

describe('SignUp', () => {
  it('should render default', () => {
    const test = 'test';
    const { getByText } = customRender(<SignUp signInLink="link">{() => <div>{test}</div>}</SignUp>);

    expect(getByText(test)).toBeInTheDocument();
  });
});
