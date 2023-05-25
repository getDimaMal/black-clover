import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { workspace, workspaceCreate, workspaceUpdate } from './__test-data__/workspaces.test-data';
import { Workspace } from './entities';
import { WorkspacesService } from './workspaces.service';

describe('WorkspacesService', () => {
  let workspacesService: WorkspacesService;

  const mockRepository: Partial<Repository<Workspace>> = {
    create: jest.fn().mockReturnValue(workspace),
    save: jest.fn().mockResolvedValue(workspace),
    findOneBy: jest.fn().mockResolvedValue(workspace),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkspacesService, { provide: getRepositoryToken(Workspace), useValue: mockRepository }],
    }).compile();

    workspacesService = module.get<WorkspacesService>(WorkspacesService);
  });

  describe('create', () => {
    it('should create a new workspace', async () => {
      const result = await workspacesService.create(workspaceCreate);

      expect(mockRepository.create).toHaveBeenCalledWith({ name: workspaceCreate.name });
      expect(mockRepository.save).toHaveBeenCalledWith(workspace);
      expect(result).toEqual(workspace);
    });
  });

  describe('findOne', () => {
    it('should find a workspace by id', async () => {
      const result = await workspacesService.findOne(workspace.id);

      expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: workspace.id });
      expect(result).toEqual(workspace);
    });

    it('should throw NotFoundException when workspace is not found', async () => {
      jest.spyOn(mockRepository, 'findOneBy').mockResolvedValue(null);

      try {
        await workspacesService.findOne(workspace.id);
      } catch (error) {
        expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: workspace.id });
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('update', () => {
    it('should find and update a workspace', async () => {
      const updatedWorkspace = { ...workspace, ...workspaceUpdate };

      jest.spyOn(workspacesService, 'findOne').mockResolvedValue(workspace);
      jest.spyOn(mockRepository, 'save').mockResolvedValue(updatedWorkspace);

      const result = await workspacesService.update(workspace.id, workspaceUpdate);

      expect(workspacesService.findOne).toHaveBeenCalledWith(workspace.id);
      expect(mockRepository.save).toHaveBeenCalledWith(updatedWorkspace);
      expect(result).toEqual(updatedWorkspace);
    });
  });
});
