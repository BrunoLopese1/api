import { Injectable } from '@nestjs/common';
import { CreateCampaignSettingDto } from './dto/create-campaign-setting.dto';
import { UpdateCampaignSettingDto } from './dto/update-campaign-setting.dto';

@Injectable()
export class CampaignSettingsService {
  create(createCampaignSettingDto: CreateCampaignSettingDto) {
    return 'This action adds a new campaignSetting';
  }

  findAll() {
    return `This action returns all campaignSettings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignSetting`;
  }

  update(id: number, updateCampaignSettingDto: UpdateCampaignSettingDto) {
    return `This action updates a #${id} campaignSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignSetting`;
  }
}
