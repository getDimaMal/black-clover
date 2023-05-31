import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { WorkspacesService } from '../workspaces/workspaces.service';

import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private repo: Repository<Event>,
    @Inject(WorkspacesService) private workspacesService: WorkspacesService
  ) {}

  async create({ workspaceId, ...args }: CreateEventDto): Promise<Event> {
    try {
      const workspace = await this.workspacesService.findOne(workspaceId);
      const event = this.repo.create(args);
      event.workspace = workspace;

      return await this.repo.save(event);
    } catch {
      throw new BadRequestException('workspace not found');
    }
  }

  async findAllByWorkspaceId(id: string): Promise<Event[]> {
    const workspace = await this.workspacesService.findOne(id);

    workspace.events.forEach((event) => {
      event.workspace = workspace;
    });

    return workspace.events;
  }

  async findOne(id: string): Promise<Event> {
    const event = await this.repo.findOne({ where: { id }, relations: { workspace: true } });

    if (!event) throw new NotFoundException('event not found');

    return event;
  }

  async update(id: string, args: Partial<Event>) {
    try {
      const event = await this.findOne(id);
      Object.assign(event, args);
      return await this.repo.save(event);
    } catch (error) {
      throw new BadRequestException('event not found');
    }
  }
}
