import { CreateWorkspaceDto } from '@black-clover/shared/dto/workspaces/create-workspace.dto';
import { UpdateWorkspaceDto } from '@black-clover/shared/dto/workspaces/update-workspace.dto';

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
};

export const workspaceCreate: CreateWorkspaceDto = { name: 'New Workspace' };

export const workspaceUpdate: UpdateWorkspaceDto = { name: 'Wubba Lubba Dub Dub' };
