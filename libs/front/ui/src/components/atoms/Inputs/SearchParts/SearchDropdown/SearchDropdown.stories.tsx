import { FC, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { suggestions } from './__test-data__';
import SearchDropdown, { SearchDropdownProps } from './SearchDropdown';

export default {
  component: SearchDropdown,
  args: {
    suggestions,
    fullWidth: false,
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
