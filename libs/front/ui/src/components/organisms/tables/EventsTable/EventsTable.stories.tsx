import { Meta, StoryObj } from '@storybook/react';

import { columns, columnsName, getEventsList } from './__test-data__';
import EventsTable, { CategoriesTableProps } from './EventsTable';

type PropsWithCount = CategoriesTableProps & { eventsCount: number };

export default {
  component: EventsTable,
  args: {
    columns,
    columnsName,
    name: 'Landing',

    eventsCount: 12,
  },
} as Meta<PropsWithCount>;

type Story = StoryObj<PropsWithCount>;

export const Default: Story = {
  render: ({ eventsCount, ...args }) => <EventsTable {...args} events={getEventsList(eventsCount)} />,
};
