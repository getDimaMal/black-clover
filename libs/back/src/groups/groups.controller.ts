import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { Serialize } from '../core/interseptors/serialize.interceptor';

import { CreateGroupDto } from './dto/create-group.dto';
import { GroupDto } from './dto/group.dto';
import { GroupsService } from './groups.service';

@ApiTags('Groups')
@Controller('groups')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('auth-token')
@Serialize(GroupDto)
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  async create(@Body() body: CreateGroupDto): Promise<GroupDto> {
    return await this.groupsService.create(body);
  }

  @Get()
  async findAll(): Promise<GroupDto[]> {
    return await this.groupsService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<GroupDto> {
    return await this.groupsService.findOne(id);
  }

  @Put('/:id')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() body: CreateGroupDto): Promise<GroupDto> {
    return await this.groupsService.update(id, body);
  }
}
