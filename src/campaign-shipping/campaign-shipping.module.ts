import { Module } from '@nestjs/common';
import { CampaignShippingService } from './campaign-shipping.service';
import { CampaignShippingController } from './campaign-shipping.controller';

@Module({
  controllers: [CampaignShippingController],
  providers: [CampaignShippingService],
})
export class CampaignShippingModule {}
