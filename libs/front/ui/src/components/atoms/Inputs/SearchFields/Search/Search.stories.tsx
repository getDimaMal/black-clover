import { FC, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Search, { SearchProps } from './Search';

export default {
  component: Search,
  args: {
    withFocus: true,
    fullWidth: false,
  },
  argTypes: {
    withFocus: { control: 'boolean' },
    fullWidth: { control: 'boolean' },

    onSearch: { control: false },
    onKeyDown: { control: false },
  },
} as Meta<SearchProps>;

type Story = StoryObj<typeof Search>;

const SearchWithHook: FC<SearchProps> = (props) => {
  const [value, setValue] = useState('');

  return <Search {...props} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: (args) => <SearchWithHook {...args} />,
};
