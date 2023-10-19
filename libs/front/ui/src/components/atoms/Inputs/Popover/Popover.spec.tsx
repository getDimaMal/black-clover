import { customRender, fireEvent } from '../../../../test-utils';

import Popover, { PopoverProps } from './Popover';

const getProps = (props: Partial<PopoverProps> = {}): PopoverProps => ({
  isOpen: true,
  onClose: jest.fn(),
  anchor: 'anchor',
  children: 'children',
  ...props,
});

describe('Popover', () => {
  it('should render anchor AND children', () => {
    const props = getProps();
    const { getByText } = customRender(<Popover {...props} />);

    expect(getByText(String(props.anchor))).toBeInTheDocument();
    expect(getByText(String(props.children))).toBeInTheDocument();
  });

  it('should NOT render children when isOpen false', () => {
    const props = getProps({ isOpen: false });
    const { getByText, queryByText } = customRender(<Popover {...props} />);

    expect(getByText(String(props.anchor))).toBeInTheDocument();
    expect(queryByText(String(props.children))).not.toBeInTheDocument();
  });

  it('should render with className', () => {
    const props = getProps({ className: 'className' });
    const { getByText } = customRender(<Popover {...props} />);

    expect(getByText(String(props.children)).parentElement?.className).toContain(props.className);
  });

  it('should call onClose when click outside', () => {
    const outer = 'Outer';
    const props = getProps();
    const { getByText } = customRender(
      <>
        <Popover {...props} />
        <div>{outer}</div>
      </>
    );

    fireEvent.click(getByText(String(props.children)));
    expect(props.onClose).not.toHaveBeenCalled();

    fireEvent.click(getByText(outer));
    expect(props.onClose).toHaveBeenCalled();
  });
});
