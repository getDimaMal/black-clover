import { ChangePasswordFormProps } from '@black-clover/front/shared/types/auth.type';

import { customRender, fireEvent } from '../../../../test-utils';

import ChangePasswordForm from './ChangePasswordForm';

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
    const { getByLabelText, getByRole } = customRender(<ChangePasswordForm {...props} />);

    fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.blur(getByLabelText('Password'));
    fireEvent.click(getByRole('button', { name: 'Change Password' }));

    expect(props.onSubmit).toHaveBeenCalled();
  });

  it.each<[string, string]>([
    ['password is too short', '1qwer'],
    ['password has only numbers', '1234567890'],
    ['password has only letters', 'onlyLettersPassword'],
  ])('should NOT submit when: %s', async (_, password) => {
    const props = getProps();
    const { getByLabelText, getByRole } = customRender(<ChangePasswordForm {...props} />);

    fireEvent.change(getByLabelText('Password'), { target: { value: password } });
    fireEvent.blur(getByLabelText('Password'));
    fireEvent.click(getByRole('button', { name: 'Change Password' }));

    expect(props.onSubmit).not.toHaveBeenCalled();
  });
});
