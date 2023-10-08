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
    type: { control: false },
    className: { control: false },
    onClick: { control: false },
    testId: { control: false },
  },
} as Meta<ButtonProps>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Press ME!',
  },
};
