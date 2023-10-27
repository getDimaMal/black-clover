import { FC, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import SearchDropdown, { SearchDropdownProps } from './SearchDropdown';

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
} as Meta<SearchDropdownProps>;

type Story = StoryObj<SearchDropdownProps>;

const SearchDropdownHook: FC<SearchDropdownProps> = (props) => {
  const [value, setValue] = useState('');

  return <SearchDropdown {...props} value={value} onSearch={setValue} />;
};

export const Default: Story = {
  render: (args) => <SearchDropdownHook {...args} />,
};
