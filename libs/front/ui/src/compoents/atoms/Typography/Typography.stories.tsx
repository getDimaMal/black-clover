import type { Meta, StoryObj } from '@storybook/react';

import Typography, { TypographyProps } from './Typography';

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
        options: [] as TypographyProps['variant'][],
      },
    },
    color: {
      control: {
        type: 'radio',
        options: [] as TypographyProps['color'][],
      },
    },
  },
} as Meta<TypographyProps>;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Hello, Event Panel!',
  },
};
