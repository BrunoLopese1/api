import { Module } from '@nestjs/common';
import { SettingsAppearanceService } from './settings-appearance.service';
import { SettingsAppearanceController } from './settings-appearance.controller';

@Module({
  controllers: [SettingsAppearanceController],
  providers: [SettingsAppearanceService],
})
export class SettingsAppearanceModule {}
