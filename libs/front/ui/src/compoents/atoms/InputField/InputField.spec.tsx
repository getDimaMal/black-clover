import { customRender, fireEvent } from '../../../test-utils';

import InputField, { InputFieldProps, InputTypes } from './InputField';

const getProps = (props: Partial<InputFieldProps> = {}): InputFieldProps => ({
  name: 'test',
  label: 'Test',
  value: null,
  ...props,
});

describe('InputField', () => {
  it('should render default', () => {
    const props = getProps();
    const { getByLabelText } = customRender(<InputField {...props} />);
    const element = getByLabelText(props?.label || '');

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('type', 'text');
  });

  it.each<[InputTypes, InputTypes]>([
    ['text', 'text'],
    ['email', 'email'],
    ['password', 'password'],
  ])('should render with type: %s', () => {
    const props = getProps();
    const { getByLabelText } = customRender(<InputField {...props} />);
    const element = getByLabelText(props?.label || '');

    expect(element).toHaveAttribute('type', 'text');
  });

  it('should call onChange', () => {
    const props = getProps({ onChange: jest.fn() });
    const { getByLabelText } = customRender(<InputField {...props} />);
    const element = getByLabelText(props?.label || '');

    fireEvent.change(element, { target: { value: 'Some New Text' } });

    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
