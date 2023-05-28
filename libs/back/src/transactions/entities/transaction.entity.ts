import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  totalPrice: number;

  @Column()
  amountOfDays: number;

  @Column()
  amountOfMembers: number;

  @CreateDateColumn()
  createdAt: Date;
}
