import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class Announcement {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    priority:number
    @Column()
    title:string
    @Column()
    text:string
    @Column()
    mediaPath:string
    @Column()
    mediaName:string
    @Column()
    companyId:number
    @Column()
    status:boolean
    @Column()
    createdAt:Date
    @Column()
    updatedAt:Date
    @Column()
    userId:number
}
