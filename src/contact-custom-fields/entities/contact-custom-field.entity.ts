import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class ContactCustomField {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    value:string;
    @Column()
    contactId:number;
    @Column()
    createdAt:Date;
    @Column()
    updatedAt: Date;
}
