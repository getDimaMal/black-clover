import { ResetPasswordFormProps } from '@black-clover/front/shared/types/auth.type';

import { customRender, fireEvent } from '../../../../test-utils';

import ResetPasswordForm from './ResetPasswordForm';

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
    const { getByLabelText, getByRole } = customRender(<ResetPasswordForm {...props} />);

    fireEvent.change(getByLabelText('Email'), { target: { value: 'mail@mail.com' } });
    fireEvent.blur(getByLabelText('Email'));
    fireEvent.click(getByRole('button', { name: 'Reset Password' }));

    expect(props.onSubmit).toHaveBeenCalled();
  });

  it('should NOT call onSubmit when email is NOT an Email', async () => {
    const props = getProps();
    const { getByLabelText, getByRole } = customRender(<ResetPasswordForm {...props} />);

    fireEvent.change(getByLabelText('Email'), { target: { value: 'notEmail' } });
    fireEvent.blur(getByLabelText('Email'));
    fireEvent.click(getByRole('button', { name: 'Reset Password' }));

    expect(props.onSubmit).not.toHaveBeenCalled();
  });
});
