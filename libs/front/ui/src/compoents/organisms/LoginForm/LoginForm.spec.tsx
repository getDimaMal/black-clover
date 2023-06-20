import { act } from 'react-dom/test-utils';

import { customRender, fireEvent } from '../../../test-utils';

import LoginForm, { LoginFormProps } from './LoginForm';

const getProps = (props: Partial<LoginFormProps> = {}): LoginFormProps => ({
  onSignUp: jest.fn(),
  onSignIn: jest.fn(),
  ...props,
});

describe('LoginForm', () => {
  it('should render without error', () => {
    const props = getProps();
    const { getByText, getByLabelText } = customRender(<LoginForm {...props} />);

    expect(getByText('Sign Up')).toBeInTheDocument();
    expect(getByText('Sign In')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it.each<[keyof LoginFormProps, string]>([
    ['onSignUp', 'Sign Up'],
    ['onSignIn', 'Sign In'],
  ])('should call: %s', async (method, text) => {
    const props = getProps();
    const { getByText } = customRender(<LoginForm {...props} />);

    await act(async () => {
      fireEvent.click(getByText(text));
    });
    expect(props[method]).toHaveBeenCalled();
  });
});
