import { SignInFormProps } from '@black-clover/front/shared/types/auth.type';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import { customRender, fireEvent } from '../../../../test-utils';

import SignInForm from './SignInForm';

const getForm = (props: Partial<CreateUserDto> = {}): CreateUserDto => ({
  email: 'mail@email.com',
  password: 'password123',
  ...props,
});

const getProps = (props: Partial<SignInFormProps> = {}): SignInFormProps => ({
  isLoading: false,
  onSignUp: jest.fn(),
  onSignIn: jest.fn(),
  changePasswordLink: '/',
  errorMessage: null,
  ...props,
});

describe('SignInForm', () => {
  it('should render default', () => {
    const { getByLabelText, getByText, getByRole } = customRender(<SignInForm {...getProps()} />);

    // fields
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    // buttons
    expect(getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
    //other
    expect(getByRole('link', { name: 'Reset' })).toBeInTheDocument();
    expect(getByText('Forgot password?')).toBeInTheDocument();
  });

  it('should call onSignIn', async () => {
    const props = getProps();
    const { getByLabelText, getByRole } = customRender(<SignInForm {...props} />);

    fireEvent.change(getByLabelText('Email'), { target: { value: getForm().email } });
    fireEvent.change(getByLabelText('Password'), { target: { value: getForm().password } });
    fireEvent.click(getByRole('button', { name: 'Sign In' }));

    expect(props.onSignIn).toHaveBeenCalled();
  });

  it('should call onSignUp', async () => {
    const props = getProps();
    const { getByRole } = customRender(<SignInForm {...props} />);

    fireEvent.click(getByRole('button', { name: 'Sign Up' }));

    expect(props.onSignUp).toHaveBeenCalled();
  });

  it.each<[string, CreateUserDto]>([
    ['email is NOT an Email', getForm({ email: 'NotEmail' })],
    ['password is too short', getForm({ password: '1qwer' })],
    ['password has only numbers', getForm({ password: '1234567890' })],
    ['password has only letters', getForm({ password: 'onlyLettersPassword' })],
  ])('should NOT submit when: %s', async (_, form) => {
    const props = getProps();
    const { getByLabelText, getByText } = customRender(<SignInForm {...props} />);

    fireEvent.change(getByLabelText('Email'), { target: { value: form.email } });
    fireEvent.change(getByLabelText('Password'), { target: { value: form.password } });
    fireEvent.click(getByText('Sign In'));

    expect(props.onSignIn).not.toHaveBeenCalled();
  });
});
