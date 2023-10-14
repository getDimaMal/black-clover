import { Meta, StoryObj } from '@storybook/react';

import Search, { SearchProps } from './Search';

export default {
  component: Search,
  args: {
    fullWidth: false,
  },
  argTypes: {
    fullWidth: { control: 'boolean' },
  },
} as Meta<SearchProps>;

type Story = StoryObj<typeof Search>;

export const Default: Story = {};
