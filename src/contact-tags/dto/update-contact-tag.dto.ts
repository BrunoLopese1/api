import { PartialType } from '@nestjs/swagger';
import { CreateContactTagDto } from './create-contact-tag.dto';

export class UpdateContactTagDto extends PartialType(CreateContactTagDto) {}
