import { ResetPasswordFormProps } from '@black-clover/front/shared/types/auth.type';
import type { Meta, StoryObj } from '@storybook/react';

import ResetPasswordForm from './ResetPasswordForm';

export default {
  component: ResetPasswordForm,
  args: {},
} as Meta<ResetPasswordFormProps>;

type Story = StoryObj<ResetPasswordFormProps>;

export const Default: Story = {};
