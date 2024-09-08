import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class ChatMessage {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    chatId: number;
    @Column()
    senderId: number;
    @Column()
    message: string;
    @Column()
    mediaPath: string;
    @Column()
    mediaName: string;
    @Column()
    cratedAt: Date;
    @Column()
    updatedAt: Date;
    @Column()
    MediaType: string;
}
