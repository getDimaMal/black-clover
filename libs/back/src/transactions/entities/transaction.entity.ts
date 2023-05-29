import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  totalPrice: number;

  @Column({ nullable: true })
  amountOfDays: null | number;

  @Column({ nullable: true })
  amountOfMembers: null | number;

  @CreateDateColumn()
  createdAt: Date;
}
