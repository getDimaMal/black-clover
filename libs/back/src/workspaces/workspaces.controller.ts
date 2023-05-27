import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { Serialize } from '../core/interseptors/serialize.interceptor';

import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { WorkspaceDto } from './dto/workspace.dto';
import { WorkspacesService } from './workspaces.service';

@ApiTags('Workspaces')
@Controller('workspaces')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
@Serialize(WorkspaceDto)
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Post()
  create(@Body() body: CreateWorkspaceDto): Promise<WorkspaceDto> {
    return this.workspacesService.create(body);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): Promise<WorkspaceDto> {
    return this.workspacesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateWorkspaceDto): Promise<WorkspaceDto> {
    return this.workspacesService.update(id, body);
  }
}
