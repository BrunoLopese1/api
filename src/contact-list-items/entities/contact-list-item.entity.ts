import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class ContactListItem {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    number:string;
    @Column()
    email:string;
    @Column()
    contactListId:number;
    @Column()
    isWhatsappValid:boolean;
    @Column()
    companyId:number;
    @Column()
    createdAt:Date;
    @Column()
    updatedAt:Date;
}
