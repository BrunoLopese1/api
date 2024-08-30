import { PartialType } from '@nestjs/swagger';
import { CreateContactListItemDto } from './create-contact-list-item.dto';

export class UpdateContactListItemDto extends PartialType(
  CreateContactListItemDto,
) {}
