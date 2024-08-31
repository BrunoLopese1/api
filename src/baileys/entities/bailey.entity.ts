import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class Bailey {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    whatsapp:number
    @Column()
    contacts:string
    @Column()
    chats:string
    @Column()
    createdAt:Date
    @Column()
    updatedAt:Date
}
