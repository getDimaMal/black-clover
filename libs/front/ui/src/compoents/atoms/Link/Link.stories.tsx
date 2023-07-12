import { Meta, StoryObj } from '@storybook/react';

import Link, { Colors, Variants } from './Link';

export default {
  component: Link,
  args: {
    children: 'Link to the bright future',
    variant: 'textM',
    color: 'info',
  },
  argTypes: {
    variant: { type: { name: 'enum', value: ['textL', 'textM', 'textS'] as Variants[] } },
    color: { type: { name: 'enum', value: ['main', 'info'] as Colors[] } },
  },
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Default: Story = {};
