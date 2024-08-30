import { PartialType } from '@nestjs/swagger';
import { CreateBaileysMessageDto } from './create-baileys-message.dto';

export class UpdateBaileysMessageDto extends PartialType(
  CreateBaileysMessageDto,
) {}
