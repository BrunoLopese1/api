import { PartialType } from '@nestjs/swagger';
import { CreateQuickMessageDto } from './create-quick-message.dto';

export class UpdateQuickMessageDto extends PartialType(CreateQuickMessageDto) {}
