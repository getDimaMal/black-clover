import { Meta, StoryObj } from '@storybook/react';

import Tag, { TagProps } from './Tag';

export default {
  component: Tag,
  args: {
    color: 'primary',
  },
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: [] as TagProps['color'][],
      },
    },
  },
} as Meta<TagProps>;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'Generated',
  },
};
