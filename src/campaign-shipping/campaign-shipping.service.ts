import { Injectable } from '@nestjs/common';
import { CreateCampaignShippingDto } from './dto/create-campaign-shipping.dto';
import { UpdateCampaignShippingDto } from './dto/update-campaign-shipping.dto';

@Injectable()
export class CampaignShippingService {
  create(createCampaignShippingDto: CreateCampaignShippingDto) {
    return 'This action adds a new campaignShipping';
  }

  findAll() {
    return `This action returns all campaignShipping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignShipping`;
  }

  update(id: number, updateCampaignShippingDto: UpdateCampaignShippingDto) {
    return `This action updates a #${id} campaignShipping`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignShipping`;
  }
}
