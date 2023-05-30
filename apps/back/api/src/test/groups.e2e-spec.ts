import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { AppModule } from '../app.module';

import {
  getCreateGroupProps,
  getCreateUpdateGroupErrorCases,
  getCreateUpdateGroupResultCases,
  getGroupProps,
} from './test-data/groups.test-data';
import { getFindByIdErrorCases } from './test-data/test-data';
import { useGetGroup, useGetListGroups, usePostGroup, usePutGroup } from './test-utils/grups.test-utils';
import { getUUID } from './test-utils/test-utils';
import { useGetAuthHeader } from './test-utils/users.test-utils';

describe('GroupsController (e2e)', () => {
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

  describe('/groups (POST)', () => {
    it.each<(typeof getCreateUpdateGroupResultCases)[0]>(getCreateUpdateGroupResultCases)(
      'should return a new group when: $case',
      async ({ props, result }) => {
        const header = await useGetAuthHeader({ app });
        const [{ id, ...other }, status] = await usePostGroup({ app, header, props });

        expect(status).toBe(201);
        expect(id).toBeDefined();
        expect(other).toEqual(result);
      }
    );

    it.each<(typeof getCreateUpdateGroupErrorCases)[0]>(getCreateUpdateGroupErrorCases)(
      'should return an error when: $case',
      async ({ props, error }) => {
        const header = await useGetAuthHeader({ app });
        const [{ message }, status] = await usePostGroup({ app, header, props });

        expect(status).toBe(400);
        expect(message).toContain(error);
      }
    );

    it('should return an error when the auth header was not provided', async () => {
      const [{ message }, status] = await usePostGroup({ app });

      expect(status).toBe(401);
      expect(message).toEqual('Unauthorized');
    });
  });

  describe('/groups (GET)', () => {
    it('should return an empty list', async () => {
      const header = await useGetAuthHeader({ app });
      const [body, status] = await useGetListGroups({ app, header });

      expect(status).toBe(200);
      expect(body).toEqual([]);
    });

    it('should return a list of groups', async () => {
      const header = await useGetAuthHeader({ app });

      const result = [
        (await usePostGroup({ app, header, props: getCreateGroupProps({ name: 'One Group' }) }))[0],
        (await usePostGroup({ app, header, props: getCreateGroupProps({ name: 'Another Group' }) }))[0],
      ];

      const [body, status] = await useGetListGroups({ app, header });

      expect(status).toBe(200);
      expect(body).toEqual(result);
    });

    it('should return an error when the auth header was not provided', async () => {
      const [{ message }, status] = await useGetListGroups({ app });

      expect(status).toBe(401);
      expect(message).toEqual('Unauthorized');
    });
  });

  describe('/groups/:id (GET)', () => {
    it('should return a group', async () => {
      const header = await useGetAuthHeader({ app });
      const [{ id: groupId }] = await usePostGroup({ app, header });
      const [{ id, ...other }, status] = await useGetGroup({ app, header, groupId });

      expect(status).toBe(200);
      expect(id).toBeDefined();
      expect(other).toEqual(getGroupProps());
    });

    it.each<(typeof getFindByIdErrorCases)[0]>(getFindByIdErrorCases)(
      'should return an error when: $case',
      async ({ id, error, code }) => {
        const header = await useGetAuthHeader({ app });
        const [{ message }, status] = await useGetGroup({ app, header, groupId: id });

        expect(status).toBe(code);
        expect(message).toContain(error);
      }
    );

    it('should return an error when the auth header was not provided', async () => {
      const [{ message }, status] = await useGetGroup({ app, groupId: getUUID() });

      expect(status).toBe(401);
      expect(message).toEqual('Unauthorized');
    });
  });

  describe('/groups/:id (PUT)', () => {
    it.each<(typeof getCreateUpdateGroupResultCases)[0]>(getCreateUpdateGroupResultCases)(
      'should return an updated group when: $case',
      async ({ props, result }) => {
        const header = await useGetAuthHeader({ app });
        const [{ id: groupId }] = await usePostGroup({ app, header });
        const [{ id, ...other }, status] = await usePutGroup({ app, header, props, groupId });

        expect(status).toBe(200);
        expect(id).toBeDefined();
        expect(other).toEqual(result);
      }
    );

    it.each<(typeof getCreateUpdateGroupErrorCases)[0]>(getCreateUpdateGroupErrorCases)(
      'should return an error when: $case',
      async ({ props, error }) => {
        const header = await useGetAuthHeader({ app });
        const [{ id: groupId }] = await usePostGroup({ app, header });
        const [{ message }, status] = await usePutGroup({ app, header, props, groupId });

        expect(status).toBe(400);
        expect(message).toContain(error);
      }
    );

    it('should return an error when the auth header was not provided', async () => {
      const [{ message }, status] = await usePutGroup({ app, groupId: getUUID() });

      expect(status).toBe(401);
      expect(message).toEqual('Unauthorized');
    });
  });
});
