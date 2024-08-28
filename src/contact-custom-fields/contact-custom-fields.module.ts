import { Module } from '@nestjs/common';
import { ContactCustomFieldsService } from './contact-custom-fields.service';
import { ContactCustomFieldsController } from './contact-custom-fields.controller';

@Module({
  controllers: [ContactCustomFieldsController],
  providers: [ContactCustomFieldsService],
})
export class ContactCustomFieldsModule {}
