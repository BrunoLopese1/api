import { PartialType } from '@nestjs/swagger';
import { CreateCampaignSettingDto } from './create-campaign-setting.dto';

export class UpdateCampaignSettingDto extends PartialType(
  CreateCampaignSettingDto,
) {}
