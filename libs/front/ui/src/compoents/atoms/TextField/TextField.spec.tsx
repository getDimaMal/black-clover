import { customRender, fireEvent } from '../../../test-utils';

import TextField, { InputTypes, TextFieldProps } from './TextField';

const getProps = (props: Partial<TextFieldProps> = {}): TextFieldProps => ({
  name: 'test',
  value: null,
  ...props,
});

describe('InputField', () => {
  it('should render default', () => {
    const label = 'some label';
    const testId = 'test-field';
    const { getByTestId, getByLabelText } = customRender(<TextField {...getProps({ label, testId })} />);

    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByLabelText(label)).toBeInTheDocument();
    expect(getByLabelText(label)).toHaveAttribute('type', 'text');
  });

  it.each<[InputTypes, InputTypes]>([
    ['text', 'text'],
    ['email', 'email'],
    ['password', 'password'],
  ])('should render with type: %s', () => {
    const testId = 'test-field';
    const { getByTestId } = customRender(<TextField {...getProps({ testId })} />);

    expect(getByTestId(testId)).toHaveAttribute('type', 'text');
  });

  it('should call onChange', () => {
    const testId = 'test-field';
    const props = getProps({ testId, onChange: jest.fn() });
    const { getByTestId } = customRender(<TextField {...props} />);

    fireEvent.change(getByTestId(testId), { target: { value: 'Some New Text' } });

    expect(props.onChange).toHaveBeenCalledTimes(1);
  });

  it('should render error message', () => {
    const error = 'some error message';
    const { getByText } = customRender(<TextField {...getProps({ error })} />);

    expect(getByText(error)).toBeInTheDocument();
  });
});
