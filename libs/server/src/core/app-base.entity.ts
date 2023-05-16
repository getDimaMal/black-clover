import { randomUUID } from 'crypto';
import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class AppBase {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @BeforeInsert()
  setId() {
    this.id = randomUUID();
  }

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date().toISOString();
  }

  @BeforeInsert()
  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date().toISOString();
  }
}
