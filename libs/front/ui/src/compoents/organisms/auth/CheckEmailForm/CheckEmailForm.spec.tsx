import { CheckEmailFormProps } from '@black-clover/front/shared/types/auth.type';
import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';

import { customRender, fillForm, fireEvent } from '../../../../test-utils';

import CheckEmailForm, { CheckEmailFormTestID } from './CheckEmailForm';

const getForm = (props: Partial<CheckEmailDto> = {}): CheckEmailDto => ({
  email: 'mail@email.com',
  ...props,
});

const getProps = (props: Partial<CheckEmailFormProps> = {}): CheckEmailFormProps => ({
  isLoading: false,
  onSubmit: jest.fn(),
  ...props,
});

describe('CheckEmailForm', () => {
  it('should render without error', () => {
    const { getByTestId } = customRender(<CheckEmailForm {...getProps()} />);

    expect(getByTestId(CheckEmailFormTestID['email'])).toBeInTheDocument();
    expect(getByTestId(CheckEmailFormTestID['checkEmailSubmit'])).toBeInTheDocument();
  });

  it('should render Loader when isLoading true', () => {
    const { getByTestId } = customRender(<CheckEmailForm {...getProps({ isLoading: true })} />);

    expect(getByTestId(CheckEmailFormTestID['checkEmailLoader'])).toBeInTheDocument();
  });

  it('should render error when defined', () => {
    const error = 'Some Error';
    const { getByText } = customRender(<CheckEmailForm {...getProps({ error })} />);

    expect(getByText(error)).toBeInTheDocument();
  });

  it('should call onSubmit when submit', async () => {
    const props = getProps();
    const { container, getByTestId } = customRender(<CheckEmailForm {...props} />);

    fillForm(getForm(), container);
    fireEvent.submit(getByTestId(CheckEmailFormTestID['checkEmailForm']));

    expect(props.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call onSubmit when the submit button is clicked', async () => {
    const props = getProps();
    const { container, getByTestId } = customRender(<CheckEmailForm {...props} />);

    fillForm(getForm(), container);
    fireEvent.click(getByTestId(CheckEmailFormTestID['checkEmailSubmit']));

    expect(props.onSubmit).toHaveBeenCalled();
  });

  it('should NOT submit when email is NOT an Email', async () => {
    const props = getProps();
    const { container, getByTestId } = customRender(<CheckEmailForm {...props} />);

    fillForm(getForm({ email: 'NotEmail' }), container);
    fireEvent.click(getByTestId(CheckEmailFormTestID['checkEmailSubmit']));

    expect(props.onSubmit).not.toHaveBeenCalled();
  });
});
