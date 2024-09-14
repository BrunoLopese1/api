import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  color: string;
  @Column()
  companyId: number;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
  @Column()
  kanban: boolean;
  @Column()
  description: string;
  @Column()
  index: string;
}
