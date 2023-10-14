import { Meta, StoryObj } from '@storybook/react';

import { Search } from '../../../assets/images';

import Icon, { IconProps } from './Icon';

export default {
  component: Icon,
  args: {
    icon: Search,
    size: 'md',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'xl'],
    },
    icon: { control: false },
  },
} as Meta<IconProps>;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
