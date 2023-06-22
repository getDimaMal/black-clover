import { LoginFormUIType } from '@black-clover/front/shared/types/auth.type';
import type { Meta, StoryObj } from '@storybook/react';

import LoginFormUI from './LoginFormUI';

export default {
  component: LoginFormUI,
  args: {
    isLoading: false,
    error: 'Some Error',
  },
  argTypes: {
    onSignUp: { control: false },
    onSignIn: { control: false },
  },
} as Meta<LoginFormUIType>;

type Story = StoryObj<typeof LoginFormUI>;

export const Default: Story = {};
