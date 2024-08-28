import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampaignSettingsService } from './campaign-settings.service';
import { CreateCampaignSettingDto } from './dto/create-campaign-setting.dto';
import { UpdateCampaignSettingDto } from './dto/update-campaign-setting.dto';

@Controller('campaign-settings')
export class CampaignSettingsController {
  constructor(private readonly campaignSettingsService: CampaignSettingsService) {}

  @Post()
  create(@Body() createCampaignSettingDto: CreateCampaignSettingDto) {
    return this.campaignSettingsService.create(createCampaignSettingDto);
  }

  @Get()
  findAll() {
    return this.campaignSettingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campaignSettingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampaignSettingDto: UpdateCampaignSettingDto) {
    return this.campaignSettingsService.update(+id, updateCampaignSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaignSettingsService.remove(+id);
  }
}
