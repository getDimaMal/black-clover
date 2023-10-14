import type { Meta, StoryObj } from '@storybook/react';

import { Add } from '../../../assets/images';

import Button, { ButtonProps, Variants } from './Button';

export default {
  component: Button,
  args: {
    label: 'Button',
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
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <div>
        <Button {...args} />
      </div>

      <div>
        <Button {...args} endIcon={Add} />
      </div>

      <div>
        <Button {...args} startIcon={Add} />
      </div>
    </div>
  ),
};
