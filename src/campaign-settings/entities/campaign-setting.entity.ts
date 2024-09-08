import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class CampaignSetting {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    key: string;
    @Column()
    value: string;
    @Column()
    companyId: number;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}
