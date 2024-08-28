import { Test, TestingModule } from '@nestjs/testing';
import { CampaignSettingsController } from './campaign-settings.controller';
import { CampaignSettingsService } from './campaign-settings.service';

describe('CampaignSettingsController', () => {
  let controller: CampaignSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignSettingsController],
      providers: [CampaignSettingsService],
    }).compile();

    controller = module.get<CampaignSettingsController>(CampaignSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
