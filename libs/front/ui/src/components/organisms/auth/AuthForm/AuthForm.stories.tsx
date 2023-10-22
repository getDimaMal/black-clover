import { Meta, StoryObj } from '@storybook/react';

import AuthForm, { AuthFormProps } from './AuthForm';

export default {
  component: AuthForm,
  args: {
    isLoading: false,
    errorMessage: 'Some error message',
  },
  argTypes: {
    handleSubmit: { control: false },
  },
} as Meta<AuthFormProps>;

type Story = StoryObj<AuthFormProps>;

export const Default: Story = {
  render: (args) => (
    <AuthForm {...args}>
      <div style={{ padding: '12px', textAlign: 'center', border: '1px solid grey' }}>This is an AuthForm</div>
    </AuthForm>
  ),
};
