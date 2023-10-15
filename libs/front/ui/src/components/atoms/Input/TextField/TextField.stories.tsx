import type { Meta, StoryObj } from '@storybook/react';

import { Types } from '../TextInput/TextInput';

import TextField, { TextFieldProps } from './TextField';

export default {
  component: TextField,
  args: {
    type: 'email',
    value: 'mail@gmail.com',
    label: 'Email',
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'email', 'password'] as Types[],
    },
    name: { control: false },
    testId: { control: false },
    autoFocus: { control: false },
    onBlur: { control: false },
    onChange: { control: false },
  },
} as Meta<TextFieldProps>;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: (args) => (
    <div>
      <TextField {...args} />
    </div>
  ),
};
