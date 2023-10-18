import { customRender } from '../../../../test-utils';

import Popover, { PopoverProps } from './Popover';

const getProps = (props: Partial<PopoverProps> = {}): PopoverProps => ({
  isOpen: true,
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
    const { getByText } = customRender(<Popover {...props} />);

    expect(getByText(String(props.anchor))).toBeInTheDocument();
    expect(getByText(String(props.children)).className).toContain('closed');
  });
});
