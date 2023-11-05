import { CreateWorkspaceDto } from '@black-clover/shared/dto/workspaces/create-workspace.dto';
import { UpdateWorkspaceDto } from '@black-clover/shared/dto/workspaces/update-workspace.dto';

import { user } from '../../__test-data__/users.test-data';
import { Workspace } from '../entities/workspace.entity';

export const workspace: Workspace = {
  id: 'workspaceId',
  name: 'New Workspace',
  maxNumberOfMembers: 1,
  expiredDate: null,
  transactions: [],
  properties: [],
  categories: [],
  events: [],
  groups: [],
  author: user,
};

export const workspacesList: Workspace[] = [
  {
    id: 'workspaceId-1',
    name: 'New Workspace',
    maxNumberOfMembers: 1,
    expiredDate: null,
    transactions: [],
    properties: [],
    categories: [],
    events: [],
    groups: [],
    author: user,
  },
  {
    id: 'workspaceId-2',
    name: 'Another Workspace',
    maxNumberOfMembers: 1,
    expiredDate: null,
    transactions: [],
    properties: [],
    categories: [],
    events: [],
    groups: [],
    author: user,
  },
];

export const workspaceCreate: CreateWorkspaceDto = { name: 'New Workspace' };

export const workspaceUpdate: UpdateWorkspaceDto = { name: 'Wubba Lubba Dub Dub' };
