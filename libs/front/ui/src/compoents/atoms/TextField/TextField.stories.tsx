import type { Meta, StoryObj } from '@storybook/react';

import TextField, { TextFieldProps } from './TextField';

export default {
  component: TextField,
  args: {
    label: 'Some Field Label',
    type: 'text',
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: [] as TextFieldProps['type'][],
      },
    },
    name: { control: false },
    value: { control: false },
    onChange: { control: false },
  },
} as Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {},
};
