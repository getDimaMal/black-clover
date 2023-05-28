import { CreateWorkspaceDto } from '@black-clover/back/workspaces/dto/create-workspace.dto';
import { WorkspaceDto } from '@black-clover/back/workspaces/dto/workspace.dto';

import { getUUID } from '../test-utils/test-utils';

const name = 'Test Workspace';

export const workspaceId = getUUID();

export const getCreateWorkspaceProps = (props: Partial<CreateWorkspaceDto> = {}): CreateWorkspaceDto => ({
  name,
  ...props,
});

export const getWorkspaceProps = (props: Partial<Omit<WorkspaceDto, 'id'>> = {}): Omit<WorkspaceDto, 'id'> => ({
  name,
  maxNumberOfMembers: 5,
  expiredDate: null,
  ...props,
});

export const getCreateResultCases: {
  case: string;
  props: CreateWorkspaceDto;
  result: Omit<WorkspaceDto, 'id'>;
}[] = [
  {
    case: 'a regular name',
    props: getCreateWorkspaceProps({ name: 'Regular Name' }),
    result: getWorkspaceProps({ name: 'Regular Name' }),
  },
  {
    case: 'a name surrounded by spaces',
    props: getCreateWorkspaceProps({ name: '   Regular Name   ' }),
    result: getWorkspaceProps({ name: 'Regular Name' }),
  },
];

export const getCreateErrorCases: { case: string; props: CreateWorkspaceDto; error: string }[] = [
  {
    case: 'a name is null',
    props: getCreateWorkspaceProps({ name: null }),
    error: 'name must be a string',
  },
  {
    case: 'a name is undefined',
    props: getCreateWorkspaceProps({ name: undefined }),
    error: 'name must be a string',
  },
  {
    case: 'a name is empty',
    props: getCreateWorkspaceProps({ name: '' }),
    error: 'name must be longer than or equal to 3 characters',
  },
  {
    case: 'a name is too long',
    props: getCreateWorkspaceProps({ name: 'very long name of workspace to check validation rules' }),
    error: 'name must be shorter than or equal to 48 characters',
  },
];
