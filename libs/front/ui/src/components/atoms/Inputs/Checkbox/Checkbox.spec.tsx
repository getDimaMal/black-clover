import { customRender, fireEvent } from '../../../../test-utils';

import Checkbox, { CheckboxProps } from './Checkbox';

const getProps = (props: Partial<CheckboxProps> = {}): CheckboxProps => ({
  label: 'label',
  checked: false,
  onChange: jest.fn(),
  ...props,
});

describe('Checkbox', () => {
  it('should render default', () => {
    const props = getProps();
    const { getByLabelText } = customRender(<Checkbox {...props} />);

    expect(getByLabelText(props.label)).toBeInTheDocument();
  });

  it('should call onChange on click', () => {
    const onChange = jest.fn();
    const props = getProps({ onChange, checked: false });
    const { getByLabelText } = customRender(<Checkbox {...props} />);

    fireEvent.change(getByLabelText(props.label), { target: { checked: true } });
    fireEvent.click(getByLabelText(props.label));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
