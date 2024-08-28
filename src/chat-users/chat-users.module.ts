import { Module } from '@nestjs/common';
import { ChatUsersService } from './chat-users.service';
import { ChatUsersController } from './chat-users.controller';

@Module({
  controllers: [ChatUsersController],
  providers: [ChatUsersService],
})
export class ChatUsersModule {}
