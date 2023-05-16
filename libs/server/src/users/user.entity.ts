import { Column, Entity } from 'typeorm';

import { AppBase } from '../core/app-base.entity';

@Entity()
export class User extends AppBase {
  @Column({ unique: true })
  email: string;

  @Column()
  hash: string;
}
