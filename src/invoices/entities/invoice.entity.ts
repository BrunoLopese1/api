import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    detail: string;
    @Column()
    status: string;
    @Column()
    value: number;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
    @Column()
    dueDate: string;
    @Column()
    companyId: number;
    @Column()
    nsu: string;
}
