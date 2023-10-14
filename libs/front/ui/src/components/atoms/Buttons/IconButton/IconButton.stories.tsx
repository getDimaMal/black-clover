import { Meta, StoryObj } from '@storybook/react';

import { Add } from '../../../../assets/images';

import IconButton, { IconButtonProps } from './IconButton';

export default {
  component: IconButton,
  args: {
    icon: Add,
    size: 'md',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'xl'] as IconButtonProps['size'][],
    },
    icon: { control: false },
    onClick: { control: false },
  },
} as Meta<IconButtonProps>;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};
