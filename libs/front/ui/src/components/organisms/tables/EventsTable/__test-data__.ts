import { Event } from './EventsTable';

const event: Omit<Event, 'id'> = {
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

export const getEventsList = (amount: number): Event[] =>
  new Array(amount).fill(event).map((event, index) => ({ ...event, id: index }));
