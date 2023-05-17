import React from 'react';
import { render } from '@testing-library/react';

// TODO add to base test config
import '@testing-library/jest-dom';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('should render the login message', () => {
    const { getByText } = render(<LoginPage />);
    // TODO get text from localisation
    const loginMessage = getByText("Let's Login to our app");
    expect(loginMessage).toBeInTheDocument();
  });
});
