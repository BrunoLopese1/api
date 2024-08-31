import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class CampaignShipping {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    jobId: string;
    @Column()
    number: string;
    @Column()
    message: string;
    @Column()
    confirmationMessage: string;
    @Column()
    confirmation: boolean;
    @Column()
    contactId: number;
    @Column()
    campaingId: number;
    @Column()
    confirmationRequestedAt: Date;
    @Column()
    confirmedAt: Date;
    @Column()
    deliveredAt: Date;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;

}
