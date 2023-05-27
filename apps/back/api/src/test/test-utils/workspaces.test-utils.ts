import { CreateWorkspaceDto } from '@black-clover/back/workspaces/dto/create-workspace.dto';
import { WorkspaceDto } from '@black-clover/back/workspaces/dto/workspace.dto';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';

import { getCreateWorkspaceProps } from '../test-data/workspaces.test-data';

import { ErrorType } from './types';

type UseProps = {
  app: INestApplication;
  header?: [string, string];
};

type UsePostWorkspaceProps = UseProps & {
  props?: CreateWorkspaceDto;
};

type UseGetWorkspaceByIdProps = UseProps & {
  workspaceId: string;
};

type UsePutWorkspaceProps = UseProps & {
  workspaceId: string;
  props?: CreateWorkspaceDto;
};

type UseWorkspaceResultProps = [WorkspaceDto & ErrorType, number];

export const usePostWorkspace = async ({
  app,
  header = ['header', ''],
  props = getCreateWorkspaceProps(),
}: UsePostWorkspaceProps): Promise<UseWorkspaceResultProps> => {
  const { status, body } = await request(app.getHttpServer())
    .post('/workspaces')
    .set(...header)
    .send(props);

  return [body as UseWorkspaceResultProps[0], status];
};

export const useGetWorkspaceById = async ({
  app,
  workspaceId,
  header = ['header', ''],
}: UseGetWorkspaceByIdProps): Promise<UseWorkspaceResultProps> => {
  const { status, body } = await request(app.getHttpServer())
    .get(`/workspaces/${workspaceId}`)
    .set(...header);

  return [body as UseWorkspaceResultProps[0], status];
};

export const usePutWorkspace = async ({
  app,
  workspaceId,
  header = ['header', ''],
  props = getCreateWorkspaceProps(),
}: UsePutWorkspaceProps): Promise<UseWorkspaceResultProps> => {
  const { status, body } = await request(app.getHttpServer())
    .put(`/workspaces/${workspaceId}`)
    .set(...header)
    .send(props);

  return [body as UseWorkspaceResultProps[0], status];
};
