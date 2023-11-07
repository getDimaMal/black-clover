import { Columns, Event } from './EventsTable';

const event: Event = {
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

export const getEventsList = (count: number) => new Array(count).fill(event);
export const columns: Columns[] = ['name', 'parameters', 'sources', 'tags'];
export const columnsName: Record<Columns, string> = {
  name: 'Name',
  parameters: 'Parameters',
  sources: 'Sources',
  tags: 'Tags',
};
