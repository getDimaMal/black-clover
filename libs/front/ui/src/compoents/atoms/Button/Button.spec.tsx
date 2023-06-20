import { customRender, fireEvent } from '../../../test-utils';

import Button, { ButtonProps, Types } from './Button';

const getProps = (props: Partial<ButtonProps> = {}): ButtonProps => ({
  label: 'Press Me!',
  ...props,
});

describe('Button', () => {
  it('should render without error', () => {
    const props = getProps();
    const { getByText } = customRender(<Button {...props} />);
    const button = getByText(props.label);

    expect(button).toBeInTheDocument();
  });

  it('should render with class name', () => {
    const props = getProps({ className: 'class-name' });
    const { getByText } = customRender(<Button {...props} />);
    const button = getByText(props.label);

    expect(button.className).toContain(props.className);
  });

  it('should render disabled', () => {
    const props = getProps({ disabled: true });
    const { getByText } = customRender(<Button {...props} />);
    const button = getByText(props.label);

    expect(button).toBeDisabled();
  });

  it('should call onClick when click', () => {
    const props = getProps({ onClick: jest.fn() });
    const { getByText } = customRender(<Button {...props} />);
    const button = getByText(props.label);

    fireEvent.click(button);

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
});
