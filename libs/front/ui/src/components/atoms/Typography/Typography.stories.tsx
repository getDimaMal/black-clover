import type { Meta, StoryObj } from '@storybook/react';

import Typography, { TypographyProps, Variant } from './Typography';

export default {
  component: Typography,
  args: {
    variant: 'bodyM',
  },
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'bodyXL', 'bodyM', 'bodyS', 'bodyXS', 'bodyXXS'] as Variant[],
      control: { type: 'radio' },
    },
  },
} as Meta<TypographyProps>;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Hello, Event Panel!',
  },
};
