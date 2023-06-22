import { act } from 'react-dom/test-utils';
import { LoginFormUIType } from '@black-clover/front/shared/types/auth.type';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import { customRender, fillForm, fireEvent } from '../../../../test-utils';

import LoginFormUI, { LoginFormUITestId, LoginFormUITestIdTypes } from './LoginFormUI';

const getForm = (props: Partial<CreateUserDto> = {}): CreateUserDto => ({
  email: 'mail@email.com',
  password: 'password123',
  ...props,
});

const getProps = (props: Partial<LoginFormUIType> = {}): LoginFormUIType => ({
  isLoading: false,
  onSignUp: jest.fn(),
  onSignIn: jest.fn(),
  ...props,
});

describe('LoginForm', () => {
  it('should render without error', () => {
    const { getByTestId } = customRender(<LoginFormUI {...getProps()} />);

    // fields
    expect(getByTestId(LoginFormUITestId['email'])).toBeInTheDocument();
    expect(getByTestId(LoginFormUITestId['password'])).toBeInTheDocument();
    // buttons
    expect(getByTestId(LoginFormUITestId['signUp'])).toBeInTheDocument();
    expect(getByTestId(LoginFormUITestId['signIn'])).toBeInTheDocument();
  });

  it('should render Loader when isLoading true', () => {
    const { getByTestId } = customRender(<LoginFormUI {...getProps({ isLoading: true })} />);

    expect(getByTestId(LoginFormUITestId['loginLoader'])).toBeInTheDocument();
  });

  it('should render error when defined', () => {
    const error = 'Some Error';
    const { getByText } = customRender(<LoginFormUI {...getProps({ error })} />);

    expect(getByText(error)).toBeInTheDocument();
  });

  it('should call onSignIn when submit', async () => {
    const props = getProps();
    const { container, getByTestId } = customRender(<LoginFormUI {...props} />);

    await act(async () => {
      fillForm(getForm(), container);
      fireEvent.submit(getByTestId(LoginFormUITestId['loginForm']));
    });

    expect(props.onSignIn).toHaveBeenCalledTimes(1);
  });

  it.each<[keyof LoginFormUIType, LoginFormUITestIdTypes]>([
    ['onSignUp', 'signUp'],
    ['onSignIn', 'signIn'],
  ])('should call: %s', async (method, testId) => {
    const props = getProps();
    const { container, getByTestId } = customRender(<LoginFormUI {...props} />);

    await act(async () => {
      fillForm(getForm(), container);
      fireEvent.click(getByTestId(testId));
    });

    expect(props[method]).toHaveBeenCalled();
  });

  it.each<[string, CreateUserDto]>([
    ['email is NOT an Email', getForm({ email: 'NotEmail' })],
    ['password is too short', getForm({ password: '1qwer' })],
    ['password has only numbers', getForm({ password: '1234567890' })],
    ['password has only letters', getForm({ password: 'onlyLettersPassword' })],
  ])('should NOT submit when: %s', async (_, form) => {
    const props = getProps();
    const { container, getByTestId } = customRender(<LoginFormUI {...props} />);

    await act(async () => {
      fillForm(form, container);
      fireEvent.click(getByTestId(LoginFormUITestId['signUp']));
      fireEvent.click(getByTestId(LoginFormUITestId['signIn']));
    });

    expect(props.onSignUp).not.toHaveBeenCalled();
    expect(props.onSignIn).not.toHaveBeenCalled();
  });
});
