import type { Meta, StoryObj } from '@storybook/react';

import TextField, { TextFieldProps } from './TextField';

export default {
  component: TextField,
  args: {
    value: 'mail@gmail.com',
  },
  argTypes: {
    name: { control: false },
    value: { control: false },
    label: { control: false },
    type: { control: false },
    testId: { control: false },
    onBlur: { control: false },
    onChange: { control: false },
    autoFocus: { control: false },
  },
} as Meta<TextFieldProps>;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: (args) => (
    <>
      <TextField {...args} type="text" value="without label" />
      <TextField {...args} label="E-Mail" type="email" value="mail@mail.com" />
      <TextField {...args} label="Password" type="password" value="mail@mail.com" />
    </>
  ),
};
