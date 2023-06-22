import type { Meta, StoryObj } from '@storybook/react';

import TextField, { TextFieldProps } from './TextField';

export default {
  component: TextField,
  args: {
    type: 'text',
    label: 'Some Field Label',
    error: 'some error message',
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
    testId: { control: false },
    inputRef: { control: false },
    onChange: { control: false },
  },
} as Meta<TextFieldProps>;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {};
