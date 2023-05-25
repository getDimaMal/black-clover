import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '../app.module';

import { createUser } from './__test-data__/users.test-data';
import { createWorkspace, updateWorkspace, workspace } from './__test-data__/workspaces.test-data';
import { getAuthHeader } from './test-utils/get-auth-header';

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
    it('should create a new workspace', async () => {
      const auth = await getAuthHeader(app, createUser);

      const {
        status,
        body: { id, ...other },
      } = await request(app.getHttpServer())
        .post('/workspaces')
        .set(...auth)
        .send(createWorkspace);

      expect(status).toEqual(201);
      expect(id).toBeDefined();
      expect(other).toEqual(workspace);
    });

    it('should return unauthorized errr when auth header not provided', async () => {
      const { status, body } = await request(app.getHttpServer()).post('/workspaces').send(createWorkspace);

      expect(status).toEqual(401);
      expect(body.message).toEqual('Unauthorized');
    });
  });

  describe('/workspaces/:id (GET)', () => {
    it('should return a workspace by id', async () => {
      const auth = await getAuthHeader(app, createUser);

      const {
        body: { id: workspaceId },
      } = await request(app.getHttpServer())
        .post('/workspaces')
        .set(...auth)
        .send(createWorkspace);

      const {
        status,
        body: { id, ...other },
      } = await request(app.getHttpServer())
        .get(`/workspaces/${workspaceId}`)
        .set(...auth);

      expect(status).toEqual(200);
      expect(id).toEqual(workspaceId);
      expect(other).toEqual(workspace);
    });

    it('should return validation errr when id is not UUID format', async () => {
      const auth = await getAuthHeader(app, createUser);

      const { status, body } = await request(app.getHttpServer())
        .get('/workspaces/workspaceId')
        .set(...auth);

      expect(status).toEqual(400);
      expect(body.message).toEqual('Validation failed (uuid is expected)');
    });

    it('should return unauthorized errr when auth header not provided', async () => {
      const auth = await getAuthHeader(app, createUser);

      const {
        body: { id: workspaceId },
      } = await request(app.getHttpServer())
        .post('/workspaces')
        .set(...auth)
        .send(createWorkspace);

      const res = await request(app.getHttpServer()).get(`/workspaces/${workspaceId}`);

      expect(res.status).toEqual(401);
      expect(res.body.message).toEqual('Unauthorized');
    });
  });

  describe('/workspaces/:id (PUT)', () => {
    it('should return a workspace with new name', async () => {
      const auth = await getAuthHeader(app, createUser);

      const {
        body: { id: workspaceId },
      } = await request(app.getHttpServer())
        .post('/workspaces')
        .set(...auth)
        .send(createWorkspace);

      const {
        status,
        body: { id, ...other },
      } = await request(app.getHttpServer())
        .put(`/workspaces/${workspaceId}`)
        .set(...auth)
        .send(updateWorkspace);

      expect(status).toEqual(200);
      expect(id).toBeDefined();
      expect(other).toEqual({ ...workspace, ...updateWorkspace });
    });

    it('should return unauthorized errr when auth header not provided', async () => {
      const auth = await getAuthHeader(app, createUser);

      const {
        body: { id: workspaceId },
      } = await request(app.getHttpServer())
        .post('/workspaces')
        .set(...auth)
        .send(createWorkspace);

      const { status, body } = await request(app.getHttpServer())
        .put(`/workspaces/${workspaceId}`)
        .send(createWorkspace);

      expect(status).toEqual(401);
      expect(body.message).toEqual('Unauthorized');
    });

    it('should return validation errr when id is not UUID format', async () => {
      const auth = await getAuthHeader(app, createUser);

      const { status, body } = await request(app.getHttpServer())
        .put('/workspaces/workspaceId')
        .set(...auth)
        .send(createWorkspace);

      expect(status).toEqual(400);
      expect(body.message).toEqual('Validation failed (uuid is expected)');
    });
  });
});
