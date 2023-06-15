import { customRender, fireEvent } from '../../../test-utils';

import Button, { ButtonProps } from './Button';

const getProps = (props: Partial<ButtonProps> = {}): ButtonProps => ({
  label: 'Press Me!',
  onClick: jest.fn(),
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

  it('should render with disabled', () => {
    const props = getProps({ disabled: true });
    const { getByText } = customRender(<Button {...props} />);
    const button = getByText(props.label);

    expect(button).toBeDisabled();
  });

  it('should call onClick when click', () => {
    const handleClick = jest.fn();
    const props = getProps({ onClick: handleClick });
    const { getByText } = customRender(<Button {...props} />);
    const button = getByText(props.label);

    fireEvent.click(button);

    expect(handleClick).toBeCalled();
  });
});
