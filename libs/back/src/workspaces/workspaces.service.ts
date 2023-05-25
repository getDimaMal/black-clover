import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateWorkspaceDto, UpdateWorkspaceDto } from './dto';
import { Workspace } from './entities';

@Injectable()
export class WorkspacesService {
  constructor(@InjectRepository(Workspace) private repo: Repository<Workspace>) {}

  async create(workspaceCreate: CreateWorkspaceDto): Promise<Workspace> {
    const workspace = this.repo.create(workspaceCreate);
    return await this.repo.save(workspace);
  }

  async findOne(id: string): Promise<Workspace> {
    const workspace = await this.repo.findOneBy({ id });

    if (!workspace) throw new NotFoundException('workspace not found');

    return workspace;
  }

  async update(id: string, workspaceUpdate: UpdateWorkspaceDto): Promise<Workspace> {
    const workspace = await this.findOne(id);
    const updateWorkspace = { ...workspace, ...workspaceUpdate };

    return this.repo.save(updateWorkspace);
  }
}
