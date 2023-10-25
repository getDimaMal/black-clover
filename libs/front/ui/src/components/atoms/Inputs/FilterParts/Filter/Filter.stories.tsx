import { FC, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Filter, { FilterProps } from './Filter';

export default {
  component: Filter,
  args: {
    label: 'Label',
    value: [],
    options: {
      '1': { id: '1', label: 'Label 1' },
      '2': { id: '2', label: 'Label 2' },
      '3': { id: '3', label: 'Label 3' },
      '4': { id: '4', label: 'This Label 4 is too long' },
      '5': { id: '5', label: 'Label 5' },
    },
  },
  argTypes: {
    value: { control: false },
    options: { control: false },
    onChange: { control: false },
  },
} as Meta<FilterProps>;

type Story = StoryObj<FilterProps>;

const FilterWithHook: FC<FilterProps> = (props) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (id: string) => {
    if (value.includes(id)) {
      const index = value.findIndex((val) => val === id);
      setValue((old) => [...old.slice(0, index), ...old.slice(index + 1)]);
    } else {
      setValue((old) => [...old, id]);
    }
  };

  return <Filter {...props} value={value} onChange={handleChange} />;
};

export const Default: Story = {
  render: (args) => <FilterWithHook {...args} />,
};
