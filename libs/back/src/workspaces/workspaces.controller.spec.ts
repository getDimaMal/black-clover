import { Test, TestingModule } from '@nestjs/testing';

import { workspace, workspaceCreate, workspaceUpdate } from './test-data/workspaces.test-data';
import { WorkspacesController } from './workspaces.controller';
import { WorkspacesService } from './workspaces.service';

describe('WorkspacesController', () => {
  let workspacesController: WorkspacesController;
  let workspacesService: WorkspacesService;

  const mockWorkspacesService: Partial<WorkspacesService> = {
    create: jest.fn().mockResolvedValue(workspace),
    update: jest.fn().mockResolvedValue(workspace),
    findOne: jest.fn().mockResolvedValue(workspace),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkspacesController],
      providers: [{ provide: WorkspacesService, useValue: mockWorkspacesService }],
    }).compile();

    workspacesController = module.get<WorkspacesController>(WorkspacesController);
    workspacesService = module.get<WorkspacesService>(WorkspacesService);
  });

  describe('create', () => {
    it('should call workspacesService.create and return the result', async () => {
      const result = await workspacesController.create(workspaceCreate);

      expect(workspacesService.create).toHaveBeenCalledWith(workspaceCreate);
      expect(result).toEqual(workspace);
    });
  });

  describe('findOne', () => {
    it('should call workspacesService.findOne and return the result', async () => {
      const result = await workspacesController.findOne(workspace.id);

      expect(workspacesService.findOne).toHaveBeenCalledWith(workspace.id);
      expect(result).toEqual(workspace);
    });
  });

  describe('update', () => {
    it('should call workspacesService.update and return the result', async () => {
      const result = await workspacesController.update(workspace.id, workspaceUpdate);

      expect(workspacesService.update).toHaveBeenCalledWith(workspace.id, workspaceUpdate);
      expect(result).toEqual(workspace);
    });
  });
});
