import { Test, TestingModule } from '@nestjs/testing';

import { createGroup, group, groupsList } from './test-data/groups.test-data';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

describe('GroupsController', () => {
  let groupsController: GroupsController;
  let groupsService: GroupsService;

  const mockGroupsService: Partial<GroupsService> = {
    create: jest.fn().mockResolvedValue(group),
    update: jest.fn().mockResolvedValue(group),
    findOne: jest.fn().mockResolvedValue(group),
    findAll: jest.fn().mockResolvedValue(groupsList),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupsController],
      providers: [GroupsService, { provide: GroupsService, useValue: mockGroupsService }],
    }).compile();

    groupsController = module.get<GroupsController>(GroupsController);
    groupsService = module.get<GroupsService>(GroupsService);
  });

  describe('create', () => {
    it('should call groupsService.crete and return the result', async () => {
      const result = await groupsController.create(createGroup);

      expect(groupsService.create).toHaveBeenCalledWith(createGroup);
      expect(result).toEqual(group);
    });
  });

  describe('findAll', () => {
    it('should call groupsService.findAll and return the result', async () => {
      const result = await groupsController.findAll();

      expect(groupsService.findAll).toHaveBeenCalledWith();
      expect(result).toEqual(groupsList);
    });
  });

  describe('findOne', () => {
    it('should call groupsService.findOne and return the result', async () => {
      const groupId = 'group-id-123';
      const result = await groupsController.findOne(groupId);

      expect(groupsService.findOne).toHaveBeenCalledWith(groupId);
      expect(result).toEqual(group);
    });
  });

  describe('update', () => {
    it('should call groupsService.update and return the result', async () => {
      const groupId = 'group-id-123';
      const result = await groupsController.update(groupId, createGroup);

      expect(groupsService.update).toHaveBeenCalledWith(groupId, createGroup);
      expect(result).toEqual(group);
    });
  });
});
