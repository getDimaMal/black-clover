import { customRender, fireEvent } from '../../../test-utils';

import Button, { ButtonProps, Types, Variants } from './Button';

const getProps = (props: Partial<ButtonProps> = {}): ButtonProps => ({
  label: 'Button',
  ...props,
});

describe('Button', () => {
  it('should render without error', () => {
    const props = getProps();
    const { getByText } = customRender(<Button {...props} />);

    expect(getByText(props.label)).toBeInTheDocument();
  });

  it('should render disabled', () => {
    const props = getProps({ disabled: true });
    const { getByText } = customRender(<Button {...props} />);

    expect(getByText(props.label)).toBeDisabled();
  });

  it('should call onClick when click', () => {
    const props = getProps({ onClick: jest.fn() });
    const { getByText } = customRender(<Button {...props} />);

    fireEvent.click(getByText(props.label));

    expect(props.onClick).toBeCalled();
  });

  it.each<[Types, Types]>([
    ['submit', 'submit'],
    ['button', 'button'],
    ['reset', 'reset'],
  ])('should render with type: %s', (type, result) => {
    const props = getProps({ type });
    const { getByText } = customRender(<Button {...props} />);

    expect(getByText(props.label)).toHaveAttribute('type', result);
  });

  it.each<[Variants, Variants]>([
    ['contained', 'contained'],
    ['outlined', 'outlined'],
    ['ghost', 'ghost'],
  ])('should render with class variant: %s', (variant, result) => {
    const props = getProps({ variant });
    const { getByText } = customRender(<Button {...props} />);

    expect(getByText(props.label).className).toContain(result);
  });
});
