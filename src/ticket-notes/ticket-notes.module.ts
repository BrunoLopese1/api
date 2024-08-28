import { Module } from '@nestjs/common';
import { TicketNotesService } from './ticket-notes.service';
import { TicketNotesController } from './ticket-notes.controller';

@Module({
  controllers: [TicketNotesController],
  providers: [TicketNotesService],
})
export class TicketNotesModule {}
