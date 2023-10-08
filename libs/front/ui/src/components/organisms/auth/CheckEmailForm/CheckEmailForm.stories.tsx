import type { Meta, StoryObj } from '@storybook/react';

import CheckEmailForm from './CheckEmailForm';

export default {
  component: CheckEmailForm,
  args: {
    isLoading: false,
    error: 'Some Error',
  },
} as Meta<typeof CheckEmailForm>;

type Story = StoryObj<typeof CheckEmailForm>;

export const Default: Story = {};
