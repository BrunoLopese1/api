import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampaignShippingService } from './campaign-shipping.service';
import { CreateCampaignShippingDto } from './dto/create-campaign-shipping.dto';
import { UpdateCampaignShippingDto } from './dto/update-campaign-shipping.dto';

@Controller('campaign-shipping')
export class CampaignShippingController {
  constructor(private readonly campaignShippingService: CampaignShippingService) {}

  @Post()
  create(@Body() createCampaignShippingDto: CreateCampaignShippingDto) {
    return this.campaignShippingService.create(createCampaignShippingDto);
  }

  @Get()
  findAll() {
    return this.campaignShippingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campaignShippingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampaignShippingDto: UpdateCampaignShippingDto) {
    return this.campaignShippingService.update(+id, updateCampaignShippingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaignShippingService.remove(+id);
  }
}
