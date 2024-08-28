import { PartialType } from '@nestjs/swagger';
import { CreateBaileysChatDto } from './create-baileys-chat.dto';

export class UpdateBaileysChatDto extends PartialType(CreateBaileysChatDto) {}
