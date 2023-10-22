import { SignUpFormProps } from '@black-clover/front/shared/types/auth.type';
import type { Meta, StoryObj } from '@storybook/react';

import SignUpForm from './SignUpForm';

export default {
  component: SignUpForm,
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
} as Meta<SignUpFormProps>;

type Story = StoryObj<SignUpFormProps>;

export const Default: Story = {};
