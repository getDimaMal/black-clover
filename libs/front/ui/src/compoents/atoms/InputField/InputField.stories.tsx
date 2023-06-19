import type { Meta, StoryObj } from '@storybook/react';

import InputField, { InputFieldProps } from './InputField';

export default {
  component: InputField,
  args: {
    label: 'Some Field Label',
    type: 'text',
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: [] as InputFieldProps['type'][],
      },
    },
    name: { control: false },
    value: { control: false },
    onChange: { control: false },
  },
} as Meta<typeof InputField>;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {},
};
