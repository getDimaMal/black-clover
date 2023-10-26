import { Meta, StoryObj } from '@storybook/react';

import CategoryHeader, { CategoryHeaderProps } from './CategoryHeader';

export default {
  component: CategoryHeader,
  args: {
    name: 'Workspace Name',
  },
} as Meta<CategoryHeaderProps>;

type Story = StoryObj<CategoryHeaderProps>;

export const Default: Story = {
  render: (args) => <CategoryHeader {...args} />,
};
