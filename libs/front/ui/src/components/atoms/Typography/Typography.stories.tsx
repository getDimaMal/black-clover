import type { Meta, StoryObj } from '@storybook/react';

import Typography, { Colors, TypographyProps, Variant } from './Typography';

export default {
  component: Typography,
  args: {
    variant: 'bodyM',
    color: 'main',
  },
  argTypes: {
    variant: { type: { name: 'enum', value: ['h1', 'h2', 'h3', 'h4', 'h5', 'bodyM', 'textM'] as Variant[] } },
    color: { type: { name: 'enum', value: ['main', 'primary', 'secondary'] as Colors[] } },
  },
} as Meta<TypographyProps>;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Hello, Event Panel!',
  },
};
