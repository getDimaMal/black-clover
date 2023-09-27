import { Meta, StoryObj } from '@storybook/react';

import Clip, { ClipProps } from './Clip';

export default {
  component: Clip,
} as Meta<ClipProps>;

type Story = StoryObj<typeof Clip>;

export const Default: Story = {
  args: {
    label: 'iOS',
  },
};
