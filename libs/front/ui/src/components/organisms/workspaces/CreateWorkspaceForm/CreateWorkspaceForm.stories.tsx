import { Meta, StoryObj } from '@storybook/react';

import CreateWorkspaceForm from './CreateWorkspaceForm';

export default {
  component: CreateWorkspaceForm,
  args: {
    isLoading: false,
    errorMessage: '',
  },
} as Meta<typeof CreateWorkspaceForm>;

type Story = StoryObj<typeof CreateWorkspaceForm>;

export const Default: Story = {
  render: (args) => <CreateWorkspaceForm {...args} />,
};
