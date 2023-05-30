import { CreateGroupDto } from '@black-clover/back/groups/dto/create-group.dto';
import { GroupDto } from '@black-clover/back/groups/dto/group.dto';
import { UpdateGroupDto } from '@black-clover/back/groups/dto/update-group.dto';
import { INestApplication } from '@nestjs/common';

import { getCreateGroupProps, getUpdateGroupProps } from '../test-data/groups.test-data';

import { getServer } from './test-utils';
import { ErrorType } from './types';

type UseProps = {
  app: INestApplication;
  header?: [string, string];
};

type UsePostProps = UseProps & {
  props?: CreateGroupDto;
};

type UseGetListProps = UseProps & {
  workspaceId: string;
};

type UseGetProps = UseProps & {
  groupId: string;
};

type UsePutProps = UseProps &
  UseGetProps & {
    props?: UpdateGroupDto;
  };

type UseGroupResultProps = [GroupDto & ErrorType, number];
type UseListGroupsResultProps = [GroupDto[] & ErrorType, number];

export const usePostGroup = async ({
  app,
  header = ['header', ''],
  props = getCreateGroupProps(),
}: UsePostProps): Promise<UseGroupResultProps> => {
  const { body, status } = await getServer(app)
    .post('/groups')
    .set(...header)
    .send(props);

  return [body as UseGroupResultProps[0], status];
};

export const useGetListGroups = async ({
  app,
  workspaceId,
  header = ['header', ''],
}: UseGetListProps): Promise<UseListGroupsResultProps> => {
  const { body, status } = await getServer(app)
    .get(`/groups/workspace/${workspaceId}`)
    .set(...header);

  return [body as UseListGroupsResultProps[0], status];
};

export const useGetGroup = async ({
  app,
  groupId,
  header = ['header', ''],
}: UseGetProps): Promise<UseGroupResultProps> => {
  const { body, status } = await getServer(app)
    .get(`/groups/${groupId}`)
    .set(...header);

  return [body as UseGroupResultProps[0], status];
};

export const usePutGroup = async ({
  app,
  groupId,
  header = ['header', ''],
  props = getUpdateGroupProps(),
}: UsePutProps): Promise<UseGroupResultProps> => {
  const { body, status } = await getServer(app)
    .put(`/groups/${groupId}`)
    .set(...header)
    .send(props);

  return [body as UseGroupResultProps[0], status];
};
