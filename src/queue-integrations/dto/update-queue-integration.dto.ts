import { PartialType } from '@nestjs/swagger';
import { CreateQueueIntegrationDto } from './create-queue-integration.dto';

export class UpdateQueueIntegrationDto extends PartialType(CreateQueueIntegrationDto) {}
