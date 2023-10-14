import { customRender, fireEvent } from '../../../../test-utils';

import TextField, { TextFieldProps } from './TextField';

const label = 'email';
const testId = 'testId';
const getProps = (props: Partial<TextFieldProps> = {}): TextFieldProps => ({
  name: 'test',
  value: null,
  onChange: jest.fn(),
  ...props,
});

describe('InputField', () => {
  it('should render default', () => {
    const { getByText, getByTestId } = customRender(<TextField {...getProps({ testId, label })} />);

    expect(getByText(label)).toBeInTheDocument();
    expect(getByTestId(testId)).toHaveAttribute('type', 'text');
  });

  it('should render error message', () => {
    const message = 'message';
    const { getByText } = customRender(<TextField {...getProps({ errorMessage: message })} />);

    expect(getByText(message)).toBeInTheDocument();
  });

  it('should render success message', () => {
    const message = 'message';
    const { getByText } = customRender(<TextField {...getProps({ successMessage: message })} />);

    expect(getByText(message)).toBeInTheDocument();
  });

  it('should render & toggle "Hide Password Button"', () => {
    const { queryByText, getByTestId } = customRender(<TextField {...getProps({ testId, type: 'password' })} />);

    expect(getByTestId(testId)).toHaveAttribute('type', 'password');
    fireEvent.click(queryByText(/eye/) as Element);

    expect(getByTestId(testId)).toHaveAttribute('type', 'text');
    fireEvent.click(queryByText(/eyeSlash/) as Element);

    expect(getByTestId(testId)).toHaveAttribute('type', 'password');
  });
});
