import { PartialType } from '@nestjs/swagger';
import { CreateWhatsappQueueDto } from './create-whatsapp-queue.dto';

export class UpdateWhatsappQueueDto extends PartialType(
  CreateWhatsappQueueDto,
) {}
