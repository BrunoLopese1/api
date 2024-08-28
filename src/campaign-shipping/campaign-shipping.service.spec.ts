import { Test, TestingModule } from '@nestjs/testing';
import { CampaignShippingService } from './campaign-shipping.service';

describe('CampaignShippingService', () => {
  let service: CampaignShippingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignShippingService],
    }).compile();

    service = module.get<CampaignShippingService>(CampaignShippingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
