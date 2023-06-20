import { act } from 'react-dom/test-utils';

import { customRender, fireEvent } from '../../../test-utils';

import LoginForm, { LoginFormProps } from './LoginForm';

const getDefaultValues = (props: Partial<LoginFormProps['defaultValues']> = {}): LoginFormProps['defaultValues'] => ({
  email: 'test@email.com',
  password: 'password123',
  ...props,
});

const getProps = (props: Partial<LoginFormProps> = {}): LoginFormProps => ({
  defaultValues: getDefaultValues(),
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

  it.each<{ case: string; defaultValues: LoginFormProps['defaultValues'] }>([
    { case: 'email is NOT an email', defaultValues: getDefaultValues({ email: 'Not an Email' }) },
    { case: 'password is too short', defaultValues: getDefaultValues({ password: 'q123' }) },
    { case: 'password has only letters', defaultValues: getDefaultValues({ password: 'qwertyasdf' }) },
    { case: 'password has only numbers', defaultValues: getDefaultValues({ password: '1234567890' }) },
  ])('should NOT submit when: $case', async ({ defaultValues }) => {
    const props = getProps({ defaultValues });
    const { getByText } = customRender(<LoginForm {...props} />);

    await act(async () => {
      fireEvent.click(getByText('Sign Up'));
    });

    expect(props.onSignUp).not.toHaveBeenCalled();
  });
});
