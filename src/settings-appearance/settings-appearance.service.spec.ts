import { Test, TestingModule } from '@nestjs/testing';
import { SettingsAppearanceService } from './settings-appearance.service';

describe('SettingsAppearanceService', () => {
  let service: SettingsAppearanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SettingsAppearanceService],
    }).compile();

    service = module.get<SettingsAppearanceService>(SettingsAppearanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
