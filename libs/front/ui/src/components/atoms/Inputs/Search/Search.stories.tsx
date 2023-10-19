import { Meta, StoryObj } from '@storybook/react';

import Search, { SearchProps } from './Search';

export default {
  component: Search,
  args: {
    fullWidth: false,
    suggestions: [
      { label: 'Search', subLabel: 'suggestion' },
      { label: 'Another search', subLabel: 'and another suggestion' },
      { label: 'One more search', subLabel: 'and one more suggestion' },
      { label: 'Wubba Lubba', subLabel: 'Dub Dub' },
    ],
  },
  argTypes: {
    fullWidth: { control: 'boolean' },
    suggestions: { control: false },
  },
} as Meta<SearchProps>;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  render: (args) => <Search {...args} />,
};
