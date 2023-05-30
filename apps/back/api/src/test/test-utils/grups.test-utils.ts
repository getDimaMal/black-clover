import { CreateGroupDto } from '@black-clover/back/groups/dto/create-group.dto';
import { GroupDto } from '@black-clover/back/groups/dto/group.dto';
import { INestApplication } from '@nestjs/common';

import { getCreateGroupProps } from '../test-data/groups.test-data';

import { getServer } from './test-utils';
import { ErrorType } from './types';

type UseProps = {
  app: INestApplication;
  header?: [string, string];
};

type UsePostProps = UseProps & {
  props?: CreateGroupDto;
};

type UseGetProps = UseProps & {
  groupId: string;
};

type UsePutProps = UseProps & UsePostProps & UseGetProps;

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
  header = ['header', ''],
}: UseProps): Promise<UseListGroupsResultProps> => {
  const { body, status } = await getServer(app)
    .get('/groups')
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
  props = getCreateGroupProps(),
}: UsePutProps): Promise<UseGroupResultProps> => {
  const { body, status } = await getServer(app)
    .put(`/groups/${groupId}`)
    .set(...header)
    .send(props);

  return [body as UseGroupResultProps[0], status];
};
