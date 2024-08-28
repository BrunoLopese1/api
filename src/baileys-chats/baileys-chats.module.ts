import { Module } from '@nestjs/common';
import { BaileysChatsService } from './baileys-chats.service';
import { BaileysChatsController } from './baileys-chats.controller';

@Module({
  controllers: [BaileysChatsController],
  providers: [BaileysChatsService],
})
export class BaileysChatsModule {}
