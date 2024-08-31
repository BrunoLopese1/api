import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class FilesOption {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    path: string;
    @Column()
    fileId: number;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
    @Column()
    mediaType: string;
}
