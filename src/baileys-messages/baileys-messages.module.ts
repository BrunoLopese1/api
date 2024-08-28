import { Module } from '@nestjs/common';
import { BaileysMessagesService } from './baileys-messages.service';
import { BaileysMessagesController } from './baileys-messages.controller';

@Module({
  controllers: [BaileysMessagesController],
  providers: [BaileysMessagesService],
})
export class BaileysMessagesModule {}
