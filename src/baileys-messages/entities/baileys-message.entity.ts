import { Entity, Column, PrimaryGeneratedColumn, CommandSucceededEvent } from 'typeorm';
export class BaileysMessage {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    whatsappId:number;
    @Column()
    jid:string;
    @Column()
    conversationTimestamp:string;
    @Column()
    unreadCount:number;
    @Column()
    createdAt:Date;
    @Column()
    updatedAt:Date;
}
