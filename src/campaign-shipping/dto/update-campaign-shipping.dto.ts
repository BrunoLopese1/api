import { PartialType } from '@nestjs/swagger';
import { CreateCampaignShippingDto } from './create-campaign-shipping.dto';

export class UpdateCampaignShippingDto extends PartialType(CreateCampaignShippingDto) {}
