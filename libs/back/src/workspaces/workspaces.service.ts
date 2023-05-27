import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace } from './entities/workspace.entity';

@Injectable()
export class WorkspacesService {
  constructor(@InjectRepository(Workspace) private repo: Repository<Workspace>) {}

  async create(attrs: CreateWorkspaceDto): Promise<Workspace> {
    const workspace = this.repo.create(attrs);
    return await this.repo.save(workspace);
  }

  async findOne(id: string): Promise<Workspace> {
    const workspace = await this.repo.findOneBy({ id });

    if (!workspace) throw new NotFoundException('workspace not found');

    return workspace;
  }

  async update(id: string, attrs: UpdateWorkspaceDto): Promise<Workspace> {
    const workspace = await this.findOne(id);
    Object.assign(workspace, attrs);

    return this.repo.save(workspace);
  }
}
