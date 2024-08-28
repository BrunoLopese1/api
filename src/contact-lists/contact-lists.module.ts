import { Module } from '@nestjs/common';
import { ContactListsService } from './contact-lists.service';
import { ContactListsController } from './contact-lists.controller';

@Module({
  controllers: [ContactListsController],
  providers: [ContactListsService],
})
export class ContactListsModule {}
