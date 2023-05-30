import { CreateGroupDto } from '../dto/create-group.dto';
import { Group } from '../entities/group.entity';

export const group: Group = {
  id: 'group-id-123',
  name: 'Group Name',
  description: 'Some Group Description',
};

export const groupsList: Group[] = [
  {
    id: 'group-id-123',
    name: 'Group Name',
    description: 'Some Group Description',
  },
  {
    id: 'group-id-456',
    name: 'Another Group',
    description: 'Another Group Description',
  },
];

export const createGroup: CreateGroupDto = {
  name: 'New Group',
  description: 'Description for new group',
};
