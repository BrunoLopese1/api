import { Module } from '@nestjs/common';
import { QueueOptionsService } from './queue-options.service';
import { QueueOptionsController } from './queue-options.controller';

@Module({
  controllers: [QueueOptionsController],
  providers: [QueueOptionsService],
})
export class QueueOptionsModule {}
