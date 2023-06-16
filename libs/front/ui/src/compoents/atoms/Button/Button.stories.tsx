import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from './Button';

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
        options: [] as ButtonProps['color'][],
      },
    },
    onClick: { control: false },
    className: { control: false },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Press ME!',
  },
};
