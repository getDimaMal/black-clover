import type { Meta, StoryObj } from '@storybook/react';

import Typography, { TypographyProps as Props } from './Typography';

export default {
  component: Typography,
  args: {
    variant: 'bodyM',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'bodyM', 'bodyS', 'textL', 'textM', 'textS'] as Props['variant'][],
      },
    },
  },
} as Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Hello, Event Panel!',
  },
};
