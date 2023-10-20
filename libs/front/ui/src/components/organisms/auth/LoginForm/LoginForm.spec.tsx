import { LoginFormProps } from '@black-clover/front/shared/types/auth.type';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import { customRender, fireEvent } from '../../../../test-utils';

import LoginForm from './LoginForm';

const getForm = (props: Partial<CreateUserDto> = {}): CreateUserDto => ({
  email: 'mail@email.com',
  password: 'password123',
  ...props,
});

const getProps = (props: Partial<LoginFormProps> = {}): LoginFormProps => ({
  isLoading: false,
  onSignUp: jest.fn(),
  onSignIn: jest.fn(),
  resetPasswordLink: '/',
  error: null,
  ...props,
});

describe('LoginForm', () => {
  it('should render without error', () => {
    const { getByLabelText, getByText, getByRole } = customRender(<LoginForm {...getProps()} />);

    // fields
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    // buttons
    expect(getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Sign In' })).toBeInTheDocument();

    expect(getByRole('heading', { name: 'Login' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Reset' })).toBeInTheDocument();
    expect(getByText('Forgot password?')).toBeInTheDocument();
  });

  it('should render Loader when isLoading true', () => {
    const { getByText } = customRender(<LoginForm {...getProps({ isLoading: true })} />);

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should render error when defined', () => {
    const error = 'Some Error';
    const { getByText } = customRender(<LoginForm {...getProps({ error })} />);

    expect(getByText(error)).toBeInTheDocument();
  });

  it('should call onSignIn when submit', async () => {
    const props = getProps();
    const { getByLabelText, getByRole } = customRender(<LoginForm {...props} />);

    fireEvent.change(getByLabelText('Email'), { target: { value: getForm().email } });
    fireEvent.change(getByLabelText('Password'), { target: { value: getForm().password } });
    fireEvent.submit(getByRole('form'));

    expect(props.onSignIn).toHaveBeenCalledTimes(1);
  });

  it.each<[keyof LoginFormProps, string]>([
    ['onSignUp', 'Sign Up'],
    ['onSignIn', 'Sign In'],
  ])('should call: %s', async (method, label) => {
    const props = getProps();
    const { getByLabelText, getByText } = customRender(<LoginForm {...props} />);

    fireEvent.change(getByLabelText('Email'), { target: { value: getForm().email } });
    fireEvent.change(getByLabelText('Password'), { target: { value: getForm().password } });
    fireEvent.click(getByText(label));

    expect(props[method]).toHaveBeenCalled();
  });

  it.each<[string, CreateUserDto]>([
    ['email is NOT an Email', getForm({ email: 'NotEmail' })],
    ['password is too short', getForm({ password: '1qwer' })],
    ['password has only numbers', getForm({ password: '1234567890' })],
    ['password has only letters', getForm({ password: 'onlyLettersPassword' })],
  ])('should NOT submit when: %s', async (_, form) => {
    const props = getProps();
    const { getByLabelText, getByText } = customRender(<LoginForm {...props} />);

    fireEvent.change(getByLabelText('Email'), { target: { value: form.email } });
    fireEvent.change(getByLabelText('Password'), { target: { value: form.password } });
    fireEvent.click(getByText('Sign Up'));
    fireEvent.click(getByText('Sign In'));

    expect(props.onSignUp).not.toHaveBeenCalled();
    expect(props.onSignIn).not.toHaveBeenCalled();
  });
});
