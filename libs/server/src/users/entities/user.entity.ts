import { Column, Entity } from 'typeorm';

import { AppBaseEntity } from '../../core/app-base.entity';

@Entity()
export class User extends AppBaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  hash: string;
}
