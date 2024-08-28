import { Injectable } from '@nestjs/common';
import { CreateTicketTrakingDto } from './dto/create-ticket-traking.dto';
import { UpdateTicketTrakingDto } from './dto/update-ticket-traking.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketTraking } from './entities/ticket-traking.entity';

@Injectable()
export class TicketTrakingService {
  constructor(
    @InjectRepository(TicketTraking)
    private ticketTrakingRepository: Repository<TicketTraking>,
  ) {}

  create(createTicketTrakingDto: CreateTicketTrakingDto) {
    return 'This action adds a new ticketTraking';
  }

  findAll(): Promise<TicketTraking[]> {
    return this.ticketTrakingRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketTraking`;
  }

  update(id: number, updateTicketTrakingDto: UpdateTicketTrakingDto) {
    return `This action updates a #${id} ticketTraking`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketTraking`;
  }
}
