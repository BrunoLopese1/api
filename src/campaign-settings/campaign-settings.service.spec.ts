import { Test, TestingModule } from '@nestjs/testing';
import { CampaignSettingsService } from './campaign-settings.service';

describe('CampaignSettingsService', () => {
  let service: CampaignSettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignSettingsService],
    }).compile();

    service = module.get<CampaignSettingsService>(CampaignSettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
