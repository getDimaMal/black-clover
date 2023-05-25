import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { AppModule } from '../app.module';

import {
  getCreateErrorCases,
  getCreateResultCases,
  getWorkspaceProps,
  workspaceId,
} from './test-data/workspaces.test-data';
import { useGetAuthHeader } from './test-utils/users.test-utils';
import { useGetWorkspaceById, usePostWorkspace, usePutWorkspace } from './test-utils/workspaces.test-utils';

describe('WorkspacesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/workspaces (POST)', () => {
    it.each<(typeof getCreateResultCases)[0]>(getCreateResultCases)(
      'should return a new workspace when: $case',
      async ({ props, result }) => {
        const header = await useGetAuthHeader({ app });
        const [{ id, ...other }, status] = await usePostWorkspace({ app, header, props });

        expect(status).toEqual(201);
        expect(id).toBeDefined();
        expect(other).toEqual(result);
      }
    );

    it.each<(typeof getCreateErrorCases)[0]>(getCreateErrorCases)(
      'should return an error when: $case',
      async ({ props, error }) => {
        const header = await useGetAuthHeader({ app });
        const [{ message }, status] = await usePostWorkspace({ app, header, props });

        expect(status).toEqual(400);
        expect(message).toContain(error);
      }
    );

    it('should return an unauthorized error when auth header not provided', async () => {
      const [{ message }, status] = await usePostWorkspace({ app });

      expect(status).toEqual(401);
      expect(message).toEqual('Unauthorized');
    });
  });

  describe('/workspaces/:id (GET)', () => {
    it('should return a workspace by id', async () => {
      const header = await useGetAuthHeader({ app });
      const [{ id: workspaceId }] = await usePostWorkspace({ app, header });
      const [{ id, ...other }, status] = await useGetWorkspaceById({ app, header, workspaceId });

      expect(status).toEqual(200);
      expect(id).toEqual(workspaceId);
      expect(other).toEqual(getWorkspaceProps());
    });

    it('should return a validation error when id is not UUID format', async () => {
      const header = await useGetAuthHeader({ app });
      const [{ message }, status] = await useGetWorkspaceById({ app, header, workspaceId: 'not-uuid' });

      expect(status).toEqual(400);
      expect(message).toEqual('Validation failed (uuid is expected)');
    });

    it('should return an error when workspace not found', async () => {
      const header = await useGetAuthHeader({ app });
      const [{ message }, status] = await useGetWorkspaceById({ app, header, workspaceId });

      expect(status).toEqual(404);
      expect(message).toEqual('workspace not found');
    });

    it('should return an unauthorized error when auth header not provided', async () => {
      const [{ message }, status] = await useGetWorkspaceById({ app, workspaceId });

      expect(status).toEqual(401);
      expect(message).toEqual('Unauthorized');
    });
  });

  describe('/workspaces/:id (PUT)', () => {
    it.each<(typeof getCreateResultCases)[0]>(getCreateResultCases)(
      'should update a workspace when: $case',
      async ({ props, result }) => {
        const header = await useGetAuthHeader({ app });
        const [{ id: workspaceId }] = await usePostWorkspace({ app, header });
        const [{ id, ...other }, status] = await usePutWorkspace({ app, header, workspaceId, props });

        expect(status).toEqual(200);
        expect(id).toBeDefined();
        expect(other).toEqual(result);
      }
    );

    it.each<(typeof getCreateErrorCases)[0]>(getCreateErrorCases)(
      'should return an error when: $case',
      async ({ props, error }) => {
        const header = await useGetAuthHeader({ app });
        const [{ id: workspaceId }] = await usePostWorkspace({ app, header });
        const [{ message }, status] = await usePutWorkspace({ app, header, workspaceId, props });

        expect(status).toEqual(400);
        expect(message).toContain(error);
      }
    );

    it('should return a validation error when id is not UUID format', async () => {
      const header = await useGetAuthHeader({ app });
      const [{ message }, status] = await usePutWorkspace({ app, header, workspaceId: 'not-uuid' });

      expect(status).toEqual(400);
      expect(message).toEqual('Validation failed (uuid is expected)');
    });

    it('should return an error when workspace not found', async () => {
      const header = await useGetAuthHeader({ app });
      const [{ message }, status] = await usePutWorkspace({ app, header, workspaceId });

      expect(status).toEqual(404);
      expect(message).toEqual('workspace not found');
    });

    it('should return an unauthorized error when auth header not provided', async () => {
      const [{ message }, status] = await usePutWorkspace({ app, workspaceId });

      expect(status).toEqual(401);
      expect(message).toEqual('Unauthorized');
    });
  });
});
