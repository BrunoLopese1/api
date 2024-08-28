import { Module } from '@nestjs/common';
import { SettingsSupportService } from './settings-support.service';
import { SettingsSupportController } from './settings-support.controller';

@Module({
  controllers: [SettingsSupportController],
  providers: [SettingsSupportService],
})
export class SettingsSupportModule {}
