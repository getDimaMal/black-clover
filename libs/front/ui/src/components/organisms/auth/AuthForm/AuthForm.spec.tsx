import { customRender, fireEvent } from '../../../../test-utils';

import AuthForm, { AuthFormProps } from './AuthForm';

const getProps = (props: Partial<AuthFormProps> = {}): AuthFormProps => ({
  isLoading: false,
  errorMessage: null,
  handleSubmit: jest.fn(),
  children: 'children',
  ...props,
});

describe('AuthForm', () => {
  it('should render children', () => {
    const children = 'children';
    const { getByText } = customRender(<AuthForm {...getProps()}>{children}</AuthForm>);

    expect(getByText(children)).toBeInTheDocument();
  });

  it('should render errorMessage', () => {
    const errorMessage = 'errorMessage';
    const { getByText } = customRender(<AuthForm {...getProps({ errorMessage })} />);

    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it('should render Loading', () => {
    const { getByText } = customRender(<AuthForm {...getProps({ isLoading: true })} />);

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should call handleSubmit', () => {
    const handleSubmit = jest.fn();
    const { getByRole } = customRender(<AuthForm {...getProps({ handleSubmit })} />);

    fireEvent.submit(getByRole('form'));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
