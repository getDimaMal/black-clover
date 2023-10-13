import { LoginFormProps } from '@black-clover/front/shared/types/auth.type';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import { customRender, fillForm, fireEvent } from '../../../../test-utils';

import LoginForm, { LoginFormTestID } from './LoginForm';

const getForm = (props: Partial<CreateUserDto> = {}): CreateUserDto => ({
  email: 'mail@email.com',
  password: 'password123',
  ...props,
});

const getProps = (props: Partial<LoginFormProps> = {}): LoginFormProps => ({
  isLoading: false,
  onSignUp: jest.fn(),
  onSignIn: jest.fn(),
  ...props,
});

describe('LoginForm', () => {
  it('should render without error', () => {
    const { getByTestId, getByText } = customRender(<LoginForm {...getProps()} />);

    // fields
    expect(getByTestId(LoginFormTestID['email'])).toBeInTheDocument();
    expect(getByTestId(LoginFormTestID['password'])).toBeInTheDocument();
    // buttons
    expect(getByText('Sign Up')).toBeInTheDocument();
    expect(getByText('Sign In')).toBeInTheDocument();
    // link
    expect(getByText('Forgot Password?')).toBeInTheDocument();
  });

  it('should render Loader when isLoading true', () => {
    const { getByTestId } = customRender(<LoginForm {...getProps({ isLoading: true })} />);

    expect(getByTestId(LoginFormTestID['loginFormLoader'])).toBeInTheDocument();
  });

  it('should render error when defined', () => {
    const error = 'Some Error';
    const { getByText } = customRender(<LoginForm {...getProps({ error })} />);

    expect(getByText(error)).toBeInTheDocument();
  });

  it('should call onSignIn when submit', async () => {
    const props = getProps();
    const { container, getByTestId } = customRender(<LoginForm {...props} />);

    fillForm(getForm(), container);
    fireEvent.submit(getByTestId(LoginFormTestID['loginForm']));

    expect(props.onSignIn).toHaveBeenCalledTimes(1);
  });

  it.each<[keyof LoginFormProps, string]>([
    ['onSignUp', 'Sign Up'],
    ['onSignIn', 'Sign In'],
  ])('should call: %s', async (method, label) => {
    const props = getProps();
    const { container, getByText } = customRender(<LoginForm {...props} />);

    fillForm(getForm(), container);
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
    const { container, getByText } = customRender(<LoginForm {...props} />);

    fillForm(form, container);
    fireEvent.click(getByText('Sign Up'));
    fireEvent.click(getByText('Sign In'));

    expect(props.onSignUp).not.toHaveBeenCalled();
    expect(props.onSignIn).not.toHaveBeenCalled();
  });
});
