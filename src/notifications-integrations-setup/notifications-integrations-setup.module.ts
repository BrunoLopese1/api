import { Module } from '@nestjs/common';
import { NotificationsIntegrationsSetupService } from './notifications-integrations-setup.service';
import { NotificationsIntegrationsSetupController } from './notifications-integrations-setup.controller';

@Module({
  controllers: [NotificationsIntegrationsSetupController],
  providers: [NotificationsIntegrationsSetupService],
})
export class NotificationsIntegrationsSetupModule {}
