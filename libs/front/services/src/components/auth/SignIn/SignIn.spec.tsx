import { customRender } from '../../../test-utils';

import SignIn from './SignIn';

describe('SignIn', () => {
  it('should render without error', () => {
    const test = 'test';
    const { getByText } = customRender(
      <SignIn resetPasswordLink="link" onSignUp={jest.fn}>
        {() => <div>{test}</div>}
      </SignIn>
    );

    expect(getByText(test)).toBeInTheDocument();
  });
});
