import { Test, TestingModule } from '@nestjs/testing';
import { CampaignShippingController } from './campaign-shipping.controller';
import { CampaignShippingService } from './campaign-shipping.service';

describe('CampaignShippingController', () => {
  let controller: CampaignShippingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignShippingController],
      providers: [CampaignShippingService],
    }).compile();

    controller = module.get<CampaignShippingController>(
      CampaignShippingController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
