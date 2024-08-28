import { Test, TestingModule } from '@nestjs/testing';
import { SettingsAppearanceController } from './settings-appearance.controller';
import { SettingsAppearanceService } from './settings-appearance.service';

describe('SettingsAppearanceController', () => {
  let controller: SettingsAppearanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SettingsAppearanceController],
      providers: [SettingsAppearanceService],
    }).compile();

    controller = module.get<SettingsAppearanceController>(SettingsAppearanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
