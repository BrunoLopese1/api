import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column({ nullable: true })
  companyId?: number;

  @Column()
  createdAt?: Date;

  @Column()
  updatedAt?: Date;

  @Column()
  kanban: boolean;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  index?: string;

  @BeforeInsert()
  setCreationDate() {
    console.log('BeforeInsert called');
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  setUpdateDate() {
    console.log('BeforeUpdate called');
    this.updatedAt = new Date();
  }
}
