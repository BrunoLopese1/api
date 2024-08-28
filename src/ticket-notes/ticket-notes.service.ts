import { Injectable } from '@nestjs/common';
import { CreateTicketNoteDto } from './dto/create-ticket-note.dto';
import { UpdateTicketNoteDto } from './dto/update-ticket-note.dto';

@Injectable()
export class TicketNotesService {
  create(createTicketNoteDto: CreateTicketNoteDto) {
    return 'This action adds a new ticketNote';
  }

  findAll() {
    return `This action returns all ticketNotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketNote`;
  }

  update(id: number, updateTicketNoteDto: UpdateTicketNoteDto) {
    return `This action updates a #${id} ticketNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketNote`;
  }
}
