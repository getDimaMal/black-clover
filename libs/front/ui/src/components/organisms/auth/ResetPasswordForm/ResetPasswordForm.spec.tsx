import { ResetPasswordFormProps } from '@black-clover/front/shared/types/auth.type';
import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';

import { customRender, fillForm, fireEvent } from '../../../../test-utils';

import ResetPasswordForm from './ResetPasswordForm';

const getForm = (props: Partial<CheckEmailDto> = {}): CheckEmailDto => ({
  email: 'mail@email.com',
  ...props,
});

const getProps = (props: Partial<ResetPasswordFormProps> = {}): ResetPasswordFormProps => ({
  isLoading: false,
  errorMessage: null,
  onSubmit: jest.fn(),
  changePasswordLink: null,
  ...props,
});

describe('ResetPasswordForm', () => {
  it('should render without error', () => {
    const { getByLabelText, getByRole } = customRender(<ResetPasswordForm {...getProps()} />);

    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Reset Password' })).toBeInTheDocument();
  });

  it('should call onSubmit when the submit button is clicked', async () => {
    const props = getProps();
    const { container, getByRole } = customRender(<ResetPasswordForm {...props} />);

    fillForm(getForm(), container);
    fireEvent.click(getByRole('button', { name: 'Reset Password' }));

    expect(props.onSubmit).toHaveBeenCalled();
  });

  it('should NOT call onSubmit when email is NOT an Email', async () => {
    const props = getProps();
    const { container, getByRole } = customRender(<ResetPasswordForm {...props} />);

    fillForm(getForm({ email: 'NotEmail' }), container);
    fireEvent.click(getByRole('button', { name: 'Reset Password' }));

    expect(props.onSubmit).not.toHaveBeenCalled();
  });
});
