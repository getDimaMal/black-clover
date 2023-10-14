import { Meta, StoryObj } from '@storybook/react';

import Chips, { ChipsProps, Variants } from './Chips';

export default {
  component: Chips,
  args: {
    label: 'iOS',
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'disabled', 'active'] as Variants[],
    },
  },
} as Meta<ChipsProps>;

type Story = StoryObj<typeof Chips>;

export const Default: Story = {};
