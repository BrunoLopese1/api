import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketNotesService } from './ticket-notes.service';
import { CreateTicketNoteDto } from './dto/create-ticket-note.dto';
import { UpdateTicketNoteDto } from './dto/update-ticket-note.dto';

@Controller('ticket-notes')
export class TicketNotesController {
  constructor(private readonly ticketNotesService: TicketNotesService) {}

  @Post()
  create(@Body() createTicketNoteDto: CreateTicketNoteDto) {
    return this.ticketNotesService.create(createTicketNoteDto);
  }

  @Get()
  findAll() {
    return this.ticketNotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketNotesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTicketNoteDto: UpdateTicketNoteDto,
  ) {
    return this.ticketNotesService.update(+id, updateTicketNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketNotesService.remove(+id);
  }
}
