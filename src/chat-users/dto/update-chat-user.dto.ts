import { PartialType } from '@nestjs/swagger';
import { CreateChatUserDto } from './create-chat-user.dto';

export class UpdateChatUserDto extends PartialType(CreateChatUserDto) {}
