import React from 'react';
import { render } from '@testing-library/react';

// TODO add to base test config
import '@testing-library/jest-dom';

import WelcomePage from './WelcomePage';

describe('WelcomePage', () => {
  it('should render the welcome message', () => {
    const { getByText } = render(<WelcomePage />);
    // TODO get text from localisation
    expect(getByText('Welcome to Black Clover APP')).toBeInTheDocument();
  });
});
