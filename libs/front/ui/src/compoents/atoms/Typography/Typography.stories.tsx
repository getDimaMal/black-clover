import type { Meta, StoryObj } from '@storybook/react';

import Typography, { TypographyProps as Props } from './Typography';

export default {
  component: Typography,
  args: {
    variant: 'bodyM',
    color: 'main',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'bodyM', 'bodyS', 'textL', 'textM', 'textS'] as Props['variant'][],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['main', 'info', 'error', 'warning', 'success', 'primary', 'secondary'] as Props['color'][],
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
