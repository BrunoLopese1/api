import { Module } from '@nestjs/common';
import { CampaignSettingsService } from './campaign-settings.service';
import { CampaignSettingsController } from './campaign-settings.controller';

@Module({
  controllers: [CampaignSettingsController],
  providers: [CampaignSettingsService],
})
export class CampaignSettingsModule {}
