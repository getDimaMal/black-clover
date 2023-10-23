import { ChangePasswordFormProps } from '@black-clover/front/shared/types/auth.type';
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
} as Meta<ChangePasswordFormProps>;

type Story = StoryObj<ChangePasswordFormProps>;

export const Default: Story = {};
