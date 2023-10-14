import { customRender, fireEvent } from '../../../../test-utils';

import TextInput, { TextInputProps, Types } from './TextInput';

const testId = 'testId';
const getProps = (props: Partial<TextInputProps> = {}): TextInputProps => ({
  name: 'email',
  value: null,
  ...props,
});

describe('TextInput', () => {
  it('should render', () => {
    const { getByTestId } = customRender(<TextInput {...getProps({ testId })} />);

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('should call onChange & update value', () => {
    const value = 'Some value';
    const onChange = jest.fn();
    const { getByTestId, getByDisplayValue } = customRender(<TextInput {...getProps({ testId, onChange })} />);

    fireEvent.change(getByTestId(testId), { target: { value } });

    expect(onChange).toHaveBeenCalled();
    expect(getByDisplayValue(value)).toBeInTheDocument();
  });

  it('should be disabled when disabled === true', () => {
    const { getByTestId } = customRender(<TextInput {...getProps({ testId, disabled: true })} />);

    expect(getByTestId(testId)).toBeDisabled();
  });

  it.each<[Types, Types]>([
    ['text', 'text'],
    ['email', 'email'],
    ['password', 'password'],
  ])('should render with type: %s', (type, result) => {
    const { getByTestId } = customRender(<TextInput {...getProps({ testId, type })} />);

    expect(getByTestId(testId)).toHaveAttribute('type', result);
  });

  it.each<[string, string]>([
    ['error', 'error'],
    ['success', 'success'],
  ])('should render with className: %s', (prop, className) => {
    const { getByTestId } = customRender(<TextInput {...getProps({ testId, [prop]: true })} />);

    expect(getByTestId(testId).className).toContain(className);
  });

  it('should render with autoFocus', () => {
    const { getByTestId } = customRender(<TextInput {...getProps({ testId, autoFocus: true })} />);

    expect(getByTestId(testId)).toHaveFocus();
  });
});
