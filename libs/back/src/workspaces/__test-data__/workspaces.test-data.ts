import { CreateWorkspaceDto, UpdateWorkspaceDto } from '../dto';
import { Workspace } from '../entities';

export const workspace: Workspace = {
  id: 'workspaceId',
  name: 'New Workspace',
  maxNumberOfMembers: 1,
  expiredDate: null,
};

export const workspaceCreate: CreateWorkspaceDto = { name: 'New Workspace' };

export const workspaceUpdate: UpdateWorkspaceDto = { name: 'Wubba Lubba Dub Dub' };
