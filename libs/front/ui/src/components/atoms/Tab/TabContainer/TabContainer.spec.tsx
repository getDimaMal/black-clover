import { customRender } from '../../../../test-utils';
import { Tab } from '../TabItem/TabItem';

import TabContainer, { TabContainerProps } from './TabContainer';

const tabs: Tab[] = [
  {
    id: 1,
    label: 'Taxi',
    isActive: true,
  },
  {
    id: 2,
    label: 'Food',
  },
  {
    id: 3,
    label: 'Delivery',
  },
];

const onClick = (id: number) => console.log(id);

const getProps = (props: Partial<TabContainerProps> = {}): TabContainerProps => ({
  tabs,
  onClick,
  ...props,
});

describe('Tab Container', () => {
  it('should render tabs', () => {
    const { getByText } = customRender(<TabContainer {...getProps()} />);
    tabs.forEach((tab) => {
      expect(getByText(tab.label)).toBeInTheDocument();
    });
  });
});
