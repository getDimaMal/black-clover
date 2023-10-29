import { Meta, StoryObj } from '@storybook/react';

import CategoriesTable, { CategoriesTableProps } from './CategoriesTable';

const event: CategoriesTableProps['events'][0] = {
  name: 'Share Button Tap',
  description: 'A share button has been tapped',
  parameters: [
    'available_auth_services: [String]',
    'available_auth_services: [String]',
    'available_auth_services: [String]',
  ],
  sources: ['iOS', 'Android'],
  tags: ['Generated', 'Skipped', 'Skipped', 'Skipped', 'Generated', 'Skipped', 'Skipped', 'Skipped', 'Generated'],
};

export default {
  component: CategoriesTable,
  args: {
    name: 'Landing',
    eventsCount: 12,
    columns: ['name', 'parameters', 'sources', 'tags'],
    columnsName: { name: 'Name', parameters: 'Parameters', sources: 'Sources', tags: 'Tags' },
  },
} as Meta<CategoriesTableProps>;

type Story = StoryObj<CategoriesTableProps>;

export const Default: Story = {
  render: ({ eventsCount, ...args }) => (
    <CategoriesTable {...args} eventsCount={eventsCount} events={new Array(eventsCount).fill(event)} />
  ),
};
