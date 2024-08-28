import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  passwordHash: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  profile: string;

  @Column()
  tokenVersion: number;

  @Column()
  companyId: number;

  @Column()
  super: number;

  @Column()
  whatsappId: number;

  @Column()
  phone: string;

  @Column()
  photo: string;

  @Column()
  plan: string;

  @Column()
  message: string;
}
