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
        options: [] as Props['variant'][],
      },
    },
    color: {
      control: {
        type: 'radio',
        options: [] as Props['color'][],
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
