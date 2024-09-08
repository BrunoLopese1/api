import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class Contract {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    externalId: number;
    @Column()
    owner: string;
    @Column()
    cpfCnpj: string;
    @Column()
    rn: string;
    @Column()
    email: string;
    @Column()
    ddi: string;
    @Column()
    phone: string;
    @Column()
    isContractSigned: boolean;
    @Column()
    hasPhysicalContract: boolean;
    @Column()
    dueDate: number;
    @Column()
    invoiceValue: number;
    @Column()
    contract: string;
    @Column()
    deliveryProtocol: string;
    @Column()
    date: Date;
    @Column()
    isInternational: boolean;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
    @Column()
    balance: number;
}
