import { Meta, StoryObj } from '@storybook/react';

import Link from './Link';

export default {
  component: Link,
  args: {
    children: 'Link to the bright future',
  },
  argTypes: {
    to: { control: false },
  },
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Default: Story = {};
