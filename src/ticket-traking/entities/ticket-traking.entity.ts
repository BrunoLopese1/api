import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tickettraking')
export class TicketTraking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ticketId: number;

  @Column()
  companyId: number;

  @Column()
  whatsappId: number;

  @Column()
  userId: number;

  @Column()
  updatedAt: Date;

  @Column()
  queuedAt: number;

  @Column()
  startedAt: Date;

  @Column()
  finishedAt: Date;

  @Column()
  ratingAt: Date;

  @Column()
  chatbotAt: Date;

  @Column()
  rating: number;
}
