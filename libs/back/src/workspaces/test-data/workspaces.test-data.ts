import { CreateWorkspaceDto } from '../dto/create-workspace.dto';
import { UpdateWorkspaceDto } from '../dto/update-workspace.dto';
import { Workspace } from '../entities/workspace.entity';

export const workspace: Workspace = {
  id: 'workspaceId',
  name: 'New Workspace',
  maxNumberOfMembers: 1,
  expiredDate: null,
  transactions: [],
  groups: [],
};

export const workspaceCreate: CreateWorkspaceDto = { name: 'New Workspace' };

export const workspaceUpdate: UpdateWorkspaceDto = { name: 'Wubba Lubba Dub Dub' };
