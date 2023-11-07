import { Meta, StoryObj } from '@storybook/react';

import EventsHeader, { CategoryHeaderProps } from './EventsHeader';

export default {
  component: EventsHeader,
  args: {
    name: 'Workspace Name',
    Search: <div>Place for Search</div>,
    Filters: <div>Place for Filters</div>,
    Modal: <div>Modal Form</div>,
  },
} as Meta<CategoryHeaderProps>;

type Story = StoryObj<CategoryHeaderProps>;

export const Default: Story = {
  render: (args) => <EventsHeader {...args} />,
};
