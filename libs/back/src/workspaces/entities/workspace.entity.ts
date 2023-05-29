import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ default: null })
  expiredDate: null | Date;
}
