import { PartialType } from '@nestjs/swagger';
import { CreateContactCustomFieldDto } from './create-contact-custom-field.dto';

export class UpdateContactCustomFieldDto extends PartialType(CreateContactCustomFieldDto) {}
