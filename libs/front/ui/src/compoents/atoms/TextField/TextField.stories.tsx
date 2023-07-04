import type { Meta, StoryObj } from '@storybook/react';

import TextField, { TextFieldProps } from './TextField';

export default {
  component: TextField,
  args: {
    type: 'text',
    value: 'Some Value',
    label: 'Some Field Label',
    error: 'Some Error Message',
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: [] as TextFieldProps['type'][],
      },
    },
    name: { control: false },
    testId: { control: false },
    autoFocus: { control: false },
    onBlur: { control: false },
    onChange: { control: false },
  },
} as Meta<TextFieldProps>;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {};
