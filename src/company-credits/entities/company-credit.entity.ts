import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class CompanyCredit {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    type:string;
    @Column()
    amount:number;
    @Column()
    companyId:number;
    @Column()
    createdAt:Date;
    @Column()
    updatedAt:Date;
    @Column()
    paymentId:number;
    @Column()
    transaction:string;
    @Column()
    status:string;
}
