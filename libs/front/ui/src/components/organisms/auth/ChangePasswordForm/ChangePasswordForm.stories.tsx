import { Meta, StoryObj } from '@storybook/react';

import ChangePasswordForm from './ChangePasswordForm';

export default {
  component: ChangePasswordForm,
  args: {
    isLoading: false,
    error: 'Some Error',
  },
  argTypes: {
    onSubmit: { control: false },
  },
} as Meta<typeof ChangePasswordForm>;

type Story = StoryObj<typeof ChangePasswordForm>;

export const Default: Story = {};
