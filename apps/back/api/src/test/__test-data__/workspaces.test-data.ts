import { CreateWorkspaceDto, UpdateWorkspaceDto } from '@black-clover/back/workspaces/dto';
import { WorkspaceDto } from '@black-clover/back/workspaces/dto/workspace.dto';

const name = 'Test Workspace';

export const createWorkspace: CreateWorkspaceDto = { name };

export const updateWorkspace: UpdateWorkspaceDto = { name: 'New Test Name' };

export const workspace: Omit<WorkspaceDto, 'id'> = { name, maxNumberOfMembers: 1, expiredDate: null };
