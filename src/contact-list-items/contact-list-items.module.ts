import { Module } from '@nestjs/common';
import { ContactListItemsService } from './contact-list-items.service';
import { ContactListItemsController } from './contact-list-items.controller';

@Module({
  controllers: [ContactListItemsController],
  providers: [ContactListItemsService],
})
export class ContactListItemsModule {}
