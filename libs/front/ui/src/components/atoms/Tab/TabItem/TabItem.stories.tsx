import { Meta, StoryObj } from '@storybook/react';

import TabItem, { TabItemProps } from './TabItem';

export default {
  component: TabItem,
} as Meta<TabItemProps>;

export const Default: StoryObj<typeof TabItem> = {
  args: {
    id: 1,
    label: 'Taxi',
    isActive: true,
    onClick: (id) => console.log(id),
  },
  argTypes: {
    onClick: {
      action: 'Click',
    },
  },
};
