import { ChangePasswordFormProps } from '@black-clover/front/shared/types/auth.type';
import { ChangePasswordDto } from '@black-clover/shared/dto/users/change-password.dto';

import { customRender, fillForm, fireEvent } from '../../../../test-utils';

import ChangePasswordForm, { ChangePasswordFormTestID } from './ChangePasswordForm';

const getForm = (props: Partial<Omit<ChangePasswordDto, 'token'>> = {}): Omit<ChangePasswordDto, 'token'> => ({
  password: 'password123',
  ...props,
});

const getProps = (props: Partial<ChangePasswordFormProps> = {}): ChangePasswordFormProps => ({
  isLoading: false,
  onSubmit: jest.fn(),
  ...props,
});

describe('ChangePasswordForm', () => {
  it('should render without error', () => {
    const { getByTestId } = customRender(<ChangePasswordForm {...getProps()} />);

    expect(getByTestId(ChangePasswordFormTestID['password'])).toBeInTheDocument();
    expect(getByTestId(ChangePasswordFormTestID['changePasswordFormSubmit'])).toBeInTheDocument();
  });

  it('should render Loader when isLoading true', () => {
    const { getByTestId } = customRender(<ChangePasswordForm {...getProps({ isLoading: true })} />);

    expect(getByTestId(ChangePasswordFormTestID['changePasswordFormLoader'])).toBeInTheDocument();
  });

  it('should render error when defined', () => {
    const error = 'Some Error';
    const { getByText } = customRender(<ChangePasswordForm {...getProps({ error })} />);

    expect(getByText(error)).toBeInTheDocument();
  });

  it('should call onSubmit when submit', async () => {
    const props = getProps();
    const { container, getByTestId } = customRender(<ChangePasswordForm {...props} />);

    fillForm(getForm(), container);
    fireEvent.submit(getByTestId(ChangePasswordFormTestID['changePasswordForm']));

    expect(props.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call onSubmit when the submit button is clicked', async () => {
    const props = getProps();
    const { container, getByTestId } = customRender(<ChangePasswordForm {...props} />);

    fillForm(getForm(), container);
    fireEvent.click(getByTestId(ChangePasswordFormTestID['changePasswordFormSubmit']));

    expect(props.onSubmit).toHaveBeenCalled();
  });

  it.each<[string, Omit<ChangePasswordDto, 'token'>]>([
    ['password is too short', getForm({ password: '1qwer' })],
    ['password has only numbers', getForm({ password: '1234567890' })],
    ['password has only letters', getForm({ password: 'onlyLettersPassword' })],
  ])('should NOT submit when: %s', async (_, form) => {
    const props = getProps();
    const { container, getByTestId } = customRender(<ChangePasswordForm {...props} />);

    fillForm(form, container);
    fireEvent.click(getByTestId(ChangePasswordFormTestID['changePasswordFormSubmit']));

    expect(props.onSubmit).not.toHaveBeenCalled();
  });
});
