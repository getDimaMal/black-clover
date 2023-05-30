import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Workspace } from '../../workspaces/entities/workspace.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: '' })
  description: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.groups)
  workspace: Workspace;
}
