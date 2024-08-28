import { Module } from '@nestjs/common';
import { ContactTagsService } from './contact-tags.service';
import { ContactTagsController } from './contact-tags.controller';

@Module({
  controllers: [ContactTagsController],
  providers: [ContactTagsService],
})
export class ContactTagsModule {}
