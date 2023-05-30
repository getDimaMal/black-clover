import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Group } from './entities/group.entity';
import { createGroup, group, groupsList } from './test-data/groups.test-data';
import { GroupsService } from './groups.service';

describe('GroupsService', () => {
  let groupsService: GroupsService;

  const mockRepository: Partial<Repository<Group>> = {
    create: jest.fn().mockReturnValue(group),
    save: jest.fn().mockResolvedValue(group),
    update: jest.fn().mockResolvedValue(group),
    findOne: jest.fn().mockResolvedValue(group),
    find: jest.fn().mockResolvedValue(groupsList),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupsService, { provide: getRepositoryToken(Group), useValue: mockRepository }],
    }).compile();

    groupsService = module.get<GroupsService>(GroupsService);
  });

  describe('create', () => {
    it('should create a new group', async () => {
      const result = await groupsService.create(createGroup);

      expect(mockRepository.create).toHaveBeenCalledWith(createGroup);
      expect(mockRepository.save).toHaveBeenCalledWith(group);
      expect(result).toEqual(group);
    });
  });

  describe('findAll', () => {
    it('should return a list of groups', async () => {
      const result = await groupsService.findAll();

      expect(mockRepository.find).toHaveBeenCalledTimes(1);
      expect(result).toEqual(groupsList);
    });

    it('should return an empty list', async () => {
      jest.spyOn(mockRepository, 'find').mockResolvedValue([]);

      const result = await groupsService.findAll();

      expect(mockRepository.find).toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should return a group', async () => {
      const result = await groupsService.findOne('group-id-123');

      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
      expect(result).toEqual(group);
    });

    it('should throw NotFoundException', async () => {
      jest.spyOn(mockRepository, 'findOne').mockResolvedValue(null);

      await expect(groupsService.findOne('group-id-123')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should return an updated group', async () => {
      const newGroup = { ...group, ...createGroup };

      jest.spyOn(groupsService, 'findOne').mockResolvedValue(group);
      jest.spyOn(mockRepository, 'save').mockResolvedValue(newGroup);

      const result = await groupsService.update(group.id, createGroup);

      expect(groupsService.findOne).toHaveBeenCalledWith(group.id);
      expect(result).toEqual(newGroup);
    });

    it('should throw NotFoundException', async () => {
      jest.spyOn(mockRepository, 'findOne').mockResolvedValue(null);

      await expect(groupsService.findOne('group-id-123')).rejects.toThrow(NotFoundException);
    });
  });
});
