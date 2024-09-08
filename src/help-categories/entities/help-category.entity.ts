import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class HelpCategory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    permission: string;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}
