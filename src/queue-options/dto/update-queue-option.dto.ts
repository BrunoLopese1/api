import { PartialType } from '@nestjs/swagger';
import { CreateQueueOptionDto } from './create-queue-option.dto';

export class UpdateQueueOptionDto extends PartialType(CreateQueueOptionDto) {}
