import type { Meta, StoryObj } from '@storybook/react';

import Alert, { AlertProps } from './Alert';

export default {
  component: Alert,
  args: {
    message: 'Hello, Event Panel! This is Alert component!',
    variant: 'textM',
    color: 'info',
  },
  argTypes: {
    color: { control: { type: 'radio', options: [] as AlertProps['color'][] } },
    variant: { control: { type: 'radio', options: [] as AlertProps['variant'][] } },
    className: { control: false },
  },
} as Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {};
