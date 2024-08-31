import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class File {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    companyId: number;
    @Column()
    name: string;
    @Column()
    message: string;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}
