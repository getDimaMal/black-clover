import { CreateWorkspaceDto } from '@black-clover/shared/dto/workspaces/create-workspace.dto';
import axios from 'axios';

import { baseURL } from '../../../jest.setup';
import BaseApi from '../base.api';

import WorkspacesApi from './workspaces.api';

describe('WorkspaceApi', () => {
  let Api: WorkspacesApi;

  const root = '/workspaces';
  const body: CreateWorkspaceDto = { name: 'Workspace Name' };
  const config = undefined;

  beforeEach(() => {
    Api = new WorkspacesApi(new BaseApi(baseURL));
  });

  it('should make createWorkspace request', async () => {
    await Api.createWorkspace(body);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(root, body, config);
  });

  it('should make getWorkspaces request', async () => {
    await Api.getWorkspaces();

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
