import { PartialType } from '@nestjs/swagger';
import { CreateUserQueueDto } from './create-user-queue.dto';

export class UpdateUserQueueDto extends PartialType(CreateUserQueueDto) {}
