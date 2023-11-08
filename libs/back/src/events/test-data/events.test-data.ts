import { workspace } from '../../__test-data__/workspaces.test-data';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { Event } from '../entities/event.entity';

export const event: Event = {
  workspace,
  id: 'event-id-123',
  name: 'Event Name',
  description: 'Some Event Description',
};

export const eventsList: Event[] = [
  {
    workspace,
    id: 'event-id-123',
    name: 'Event Name',
    description: 'Some Event Description',
  },
  {
    workspace,
    id: 'event-id-456',
    name: 'Another Event',
    description: 'Another Event Description',
  },
];

export const createEvent: CreateEventDto = {
  name: 'New Event',
  description: 'Description for new event',
  workspaceId: 'workspace-id-123',
};

export const updateEvent: UpdateEventDto = {
  name: 'New Event',
  description: 'Description for new event',
};
