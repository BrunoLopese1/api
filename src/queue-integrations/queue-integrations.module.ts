import { Module } from '@nestjs/common';
import { QueueIntegrationsService } from './queue-integrations.service';
import { QueueIntegrationsController } from './queue-integrations.controller';

@Module({
  controllers: [QueueIntegrationsController],
  providers: [QueueIntegrationsService],
})
export class QueueIntegrationsModule {}
