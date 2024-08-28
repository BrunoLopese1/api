import { Module } from '@nestjs/common';
import { TicketTagsService } from './ticket-tags.service';
import { TicketTagsController } from './ticket-tags.controller';

@Module({
  controllers: [TicketTagsController],
  providers: [TicketTagsService],
})
export class TicketTagsModule {}
