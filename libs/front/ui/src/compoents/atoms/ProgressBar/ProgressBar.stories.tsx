import type { Meta, StoryObj } from '@storybook/react';

import ProgressBar, { ProgressBarProps } from './ProgressBar';

export default {
  component: ProgressBar,
  args: {
    isLoading: true,
  },
  argTypes: {},
} as Meta<ProgressBarProps>;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};
