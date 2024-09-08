import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class ChatUser {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    chatId:number;
    @Column()
    userId:number;
    @Column()
    unreads:number;
    @Column()
    createdAt:Date;
    @Column()
    updatedAt:Date;
}
