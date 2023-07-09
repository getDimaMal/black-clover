import { CheckEmailFormProps } from '@black-clover/front/shared/types/auth.type';
import type { Meta, StoryObj } from '@storybook/react';

import CheckEmailForm from './CheckEmailForm';

export default {
  component: CheckEmailForm,
  args: {
    isLoading: false,
    error: 'Some Error',
  },
  argTypes: {
    onSubmit: { control: false },
  },
} as Meta<CheckEmailFormProps>;

type Story = StoryObj<CheckEmailFormProps>;

export const Default: Story = {};
