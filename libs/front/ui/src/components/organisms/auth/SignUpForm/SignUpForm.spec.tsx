import { SignUpFormProps } from '@black-clover/front/shared/types/auth.type';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import { customRender, fireEvent } from '../../../../test-utils';

import SignUpForm from './SignUpForm';

const getForm = (props: Partial<CreateUserDto> = {}): CreateUserDto => ({
  email: 'mail@email.com',
  password: 'password123',
  ...props,
});

const getProps = (props: Partial<SignUpFormProps> = {}): SignUpFormProps => ({
  signInLink: '/',
  isLoading: false,
  onSignUp: jest.fn(),
  errorMessage: null,
  ...props,
});

describe('SignUpForm', () => {
  it('should render default', () => {
    const { getByLabelText, getByText, getByRole } = customRender(<SignUpForm {...getProps()} />);

    // fields
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    // buttons
    expect(getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
    //other
    expect(getByRole('link', { name: 'Sign In' })).toBeInTheDocument();
    expect(getByText('Already have an account?')).toBeInTheDocument();
  });

  it('should call onSignUp', async () => {
    const props = getProps();
    const { getByLabelText, getByRole } = customRender(<SignUpForm {...props} />);

    fireEvent.change(getByLabelText('Email'), { target: { value: getForm().email } });
    fireEvent.change(getByLabelText('Password'), { target: { value: getForm().password } });
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
    const { getByLabelText, getByText } = customRender(<SignUpForm {...props} />);

    fireEvent.change(getByLabelText('Email'), { target: { value: form.email } });
    fireEvent.change(getByLabelText('Password'), { target: { value: form.password } });
    fireEvent.click(getByText('Sign Up'));

    expect(props.onSignUp).not.toHaveBeenCalled();
  });
});
