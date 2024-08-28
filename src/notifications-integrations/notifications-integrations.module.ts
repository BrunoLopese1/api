import { Module } from '@nestjs/common';
import { NotificationsIntegrationsService } from './notifications-integrations.service';
import { NotificationsIntegrationsController } from './notifications-integrations.controller';

@Module({
  controllers: [NotificationsIntegrationsController],
  providers: [NotificationsIntegrationsService],
})
export class NotificationsIntegrationsModule {}
