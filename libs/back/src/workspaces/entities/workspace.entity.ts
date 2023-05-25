import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workspace {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: 5 })
  maxNumberOfMembers: number;

  @Column({ default: null })
  expiredDate: null | Date;
}
