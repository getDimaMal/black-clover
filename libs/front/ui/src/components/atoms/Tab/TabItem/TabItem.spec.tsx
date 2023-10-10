import { customRender, fireEvent } from '../../../../test-utils';

import TabItem, { TabItemProps } from './TabItem';

const id = 1;
const label = 'Taxi';
const onClick = (id: number) => console.log(id);

const getProps = (props: Partial<TabItemProps> = {}): TabItemProps => ({
  id,
  label,
  onClick,
  ...props,
});

describe('Tab Item', () => {
  it('should render props', () => {
    const { getByText } = customRender(<TabItem {...getProps()} />);
    expect(getByText(label)).toBeInTheDocument();
  });
  it('should .active when isActive', () => {
    const { getByText } = customRender(<TabItem {...getProps({ isActive: true })} />);
    expect(getByText(label).className).toContain('active');
  });
  it('should call cb with item id', () => {
    const props = getProps({ onClick: jest.fn() });
    const { getByText } = customRender(<TabItem {...props} />);
    fireEvent.click(getByText(label));
    expect(props.onClick).toBeCalledWith(id);
  });
});
