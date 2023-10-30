import { CreateWorkspaceDto } from '@black-clover/shared/dto/workspaces/create-workspace.dto';
import { UpdateWorkspaceDto } from '@black-clover/shared/dto/workspaces/update-workspace.dto';
import { WorkspaceDto } from '@black-clover/shared/dto/workspaces/workspace.dto';
import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { Serialize } from '../core/interseptors/serialize.interceptor';

import { WorkspacesService } from './workspaces.service';

@ApiTags('Workspaces')
@Controller('workspaces')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
@Serialize(WorkspaceDto)
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Post()
  create(@Body() body: CreateWorkspaceDto) {
    return this.workspacesService.create(body);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.workspacesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateWorkspaceDto) {
    return this.workspacesService.update(id, body);
  }
}
