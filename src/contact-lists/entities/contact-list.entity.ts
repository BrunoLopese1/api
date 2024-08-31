import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class ContactList {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string;
    @Column()
    companyId: number;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
    @Column()
    validationStatus: string;
}
