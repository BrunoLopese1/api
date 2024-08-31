import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class Help {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    video: string;
    @Column()
    link: string;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
    @Column()
    categoryId: number;
    @Column()
    permission: string;
}
