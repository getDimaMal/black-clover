import { CreateWorkspaceDto } from '@black-clover/shared/dto/workspaces/create-workspace.dto';
import { UpdateWorkspaceDto } from '@black-clover/shared/dto/workspaces/update-workspace.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../users/entities/user.entity';

import { Workspace } from './entities/workspace.entity';

@Injectable()
export class WorkspacesService {
  constructor(@InjectRepository(Workspace) private repo: Repository<Workspace>) {}

  async create(attrs: CreateWorkspaceDto, user: User): Promise<Workspace> {
    const workspace = this.repo.create(attrs);
    workspace.author = user;

    return await this.repo.save(workspace);
  }

  async findOne(id: string): Promise<Workspace> {
    const workspace = await this.repo.findOne({ where: { id }, relations: ['groups', 'transactions'] });

    if (!workspace) throw new NotFoundException('workspace not found');

    return workspace;
  }

  async findAll(id: string): Promise<Workspace[]> {
    const workspace = await this.repo.find({ where: { author: { id } } });

    if (!workspace) throw new NotFoundException('workspace not found');

    return workspace;
  }

  async update(id: string, attrs: UpdateWorkspaceDto): Promise<Workspace> {
    const workspace = await this.findOne(id);
    Object.assign(workspace, attrs);

    return this.repo.save(workspace);
  }
}
