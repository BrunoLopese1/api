import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class ContactTag {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    contactId: number;
    @Column()
    tagId: number;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}
