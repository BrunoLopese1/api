import { PartialType } from '@nestjs/swagger';
import { CreateTicketNoteDto } from './create-ticket-note.dto';

export class UpdateTicketNoteDto extends PartialType(CreateTicketNoteDto) {}
