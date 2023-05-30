import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateGroupDto } from './dto/create-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(@InjectRepository(Group) private repo: Repository<Group>) {}

  async create(args: CreateGroupDto): Promise<Group> {
    const group = this.repo.create(args);
    return await this.repo.save(group);
  }

  async findAll(): Promise<Group[]> {
    return await this.repo.find();
  }

  async findOne(id: string): Promise<Group> {
    const group = await this.repo.findOne({ where: { id } });

    if (!group) throw new NotFoundException('group not found');

    return group;
  }

  async update(id: string, args: CreateGroupDto) {
    try {
      const group = await this.findOne(id);
      Object.assign(group, args);
      return await this.repo.save(group);
    } catch (error) {
      throw new BadRequestException('group not found');
    }
  }
}
