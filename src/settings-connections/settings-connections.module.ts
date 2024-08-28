import { Module } from '@nestjs/common';
import { SettingsConnectionsService } from './settings-connections.service';
import { SettingsConnectionsController } from './settings-connections.controller';

@Module({
  controllers: [SettingsConnectionsController],
  providers: [SettingsConnectionsService],
})
export class SettingsConnectionsModule {}
