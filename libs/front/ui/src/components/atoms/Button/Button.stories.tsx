import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps, Variants } from './Button';

export default {
  component: Button,
  args: {
    variant: 'contained',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'ghost'] as Variants[],
    },
    type: { control: false },
    label: { control: false },
    onClick: { control: false },
  },
} as Meta<ButtonProps>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};
