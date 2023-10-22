import { SignInFormProps } from '@black-clover/front/shared/types/auth.type';
import type { Meta, StoryObj } from '@storybook/react';

import SignInForm from './SignInForm';

export default {
  component: SignInForm,
  args: {
    isLoading: false,
  },
  argTypes: {
    isLoading: { control: 'boolean' },
    errorMessage: { control: 'text' },

    changePasswordLink: { control: false },
    onSignUp: { control: false },
    onSignIn: { control: false },
  },
} as Meta<SignInFormProps>;

type Story = StoryObj<SignInFormProps>;

export const Default: Story = {};
