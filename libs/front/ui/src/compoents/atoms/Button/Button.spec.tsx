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

    expect(getByText(props.label)).toBeInTheDocument();
  });

  it('should render with className', () => {
    const className = 'className';
    const props = getProps({ className });
    const { getByText } = customRender(<Button {...props} />);

    expect(getByText(props.label).classList.contains(className)).toBe(true);
  });

  it('should render with testId', () => {
    const testId = 'test-button';
    const props = getProps({ testId });
    const { getByTestId } = customRender(<Button {...props} />);

    expect(getByTestId(testId)).toBeInTheDocument();
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
});
