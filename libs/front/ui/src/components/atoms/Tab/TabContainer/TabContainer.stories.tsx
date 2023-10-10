import { Meta, StoryObj } from '@storybook/react';

import { Tab } from '../TabItem/TabItem';

import TabContainer, { TabContainerProps } from './TabContainer';

export default {
  component: TabContainer,
} as Meta<TabContainerProps>;

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

export const Default: StoryObj<typeof TabContainer> = {
  args: {
    tabs,
    onClick,
  },
  argTypes: {
    onClick: {
      action: 'Click',
    },
  },
};
