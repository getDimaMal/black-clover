import { Meta, StoryObj } from '@storybook/react';

import SearchDropdown, { SearchProps } from './SearchDropdown';

export default {
  component: SearchDropdown,
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

    onSearch: { control: false },
    suggestions: { control: false },
  },
} as Meta<SearchProps>;

type Story = StoryObj<typeof SearchDropdown>;

export const Default: Story = {
  render: (args) => <SearchDropdown {...args} />,
};
