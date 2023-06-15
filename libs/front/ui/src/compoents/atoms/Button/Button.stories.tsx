import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

export default {
  component: Button,
  args: {
    color: 'primary',
    disabled: false,
  },
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
    className: { control: false },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Press ME!',
  },
};
