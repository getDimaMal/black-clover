import { ChangePasswordFormProps } from '@black-clover/front/shared/types/auth.type';
import { ChangePasswordDto } from '@black-clover/shared/dto/users/change-password.dto';

import { customRender, fillForm, fireEvent } from '../../../../test-utils';

import ChangePasswordForm from './ChangePasswordForm';

const getForm = (props: Partial<Omit<ChangePasswordDto, 'token'>> = {}): Omit<ChangePasswordDto, 'token'> => ({
  password: 'password123',
  ...props,
});

const getProps = (props: Partial<ChangePasswordFormProps> = {}): ChangePasswordFormProps => ({
  isLoading: false,
  errorMessage: null,
  onSubmit: jest.fn(),
  ...props,
});

describe('ChangePasswordForm', () => {
  it('should render default', () => {
    const { getByLabelText, getByText } = customRender(<ChangePasswordForm {...getProps()} />);

    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Change Password')).toBeInTheDocument();
  });

  it('should call onSubmit', async () => {
    const props = getProps();
    const { container, getByRole } = customRender(<ChangePasswordForm {...props} />);

    fillForm(getForm(), container);
    fireEvent.click(getByRole('button', { name: 'Change Password' }));

    expect(props.onSubmit).toHaveBeenCalled();
  });

  it.each<[string, Omit<ChangePasswordDto, 'token'>]>([
    ['password is too short', getForm({ password: '1qwer' })],
    ['password has only numbers', getForm({ password: '1234567890' })],
    ['password has only letters', getForm({ password: 'onlyLettersPassword' })],
  ])('should NOT submit when: %s', async (_, form) => {
    const props = getProps();
    const { getByLabelText, getByRole } = customRender(<ChangePasswordForm {...props} />);

    fireEvent.change(getByLabelText('Password'), { target: { value: form.password } });
    fireEvent.click(getByRole('button', { name: 'Change Password' }));

    expect(props.onSubmit).not.toHaveBeenCalled();
  });
});
