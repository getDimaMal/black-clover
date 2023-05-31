import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Category } from '../../categories/entities/category.entity';
import { Event } from '../../events/entities/event.entity';
import { Group } from '../../groups/entities/group.entity';
import { Property } from '../../properties/entities/property.entity';
import { Transaction } from '../../transactions/entities/transaction.entity';

@Entity()
export class Workspace {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: 5 })
  maxNumberOfMembers: number;

  @OneToMany(() => Transaction, (transaction) => transaction.workspace, { eager: true })
  transactions: Transaction[];

  @OneToMany(() => Group, (group) => group.workspace, { eager: true })
  groups: Group[];

  @OneToMany(() => Category, (category) => category.workspace, { eager: true })
  categories: Category[];

  @OneToMany(() => Event, (event) => event.workspace, { eager: true })
  events: Category[];

  @OneToMany(() => Property, (property) => property.workspace, { eager: true })
  properties: Category[];

  @Column({ default: null })
  expiredDate: null | Date;
}
