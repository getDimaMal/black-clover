import { LoginFormProps } from '@black-clover/front/shared/types/auth.type';
import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';

export default {
  component: LoginForm,
  args: {
    isLoading: false,
    error: 'Some Error',
  },
  argTypes: {
    onSignUp: { control: false },
    onSignIn: { control: false },
  },
} as Meta<LoginFormProps>;

type Story = StoryObj<LoginFormProps>;

export const Default: Story = {};
