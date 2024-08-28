import { Module } from '@nestjs/common';
import { WhatsappQueuesService } from './whatsapp-queues.service';
import { WhatsappQueuesController } from './whatsapp-queues.controller';

@Module({
  controllers: [WhatsappQueuesController],
  providers: [WhatsappQueuesService],
})
export class WhatsappQueuesModule {}
