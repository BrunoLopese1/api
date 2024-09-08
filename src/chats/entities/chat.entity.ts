import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class Chat {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    uuid: string;
    @Column()
    ownerId: number;
    @Column()
    lastMessage: string;
    @Column()
    companyId: number;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}
