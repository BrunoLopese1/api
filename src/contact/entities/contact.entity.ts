import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    namber: string;
    @Column()
    profilePicUrl: string;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
    @Column()
    email: string;
    @Column()
    isGroup: boolean;
    @Column()
    companyId: number;
    @Column()
    whatsappId: number;
    @Column()
    block: boolean;
}
