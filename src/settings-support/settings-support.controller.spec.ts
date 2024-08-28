import { Test, TestingModule } from '@nestjs/testing';
import { SettingsSupportController } from './settings-support.controller';
import { SettingsSupportService } from './settings-support.service';

describe('SettingsSupportController', () => {
  let controller: SettingsSupportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SettingsSupportController],
      providers: [SettingsSupportService],
    }).compile();

    controller = module.get<SettingsSupportController>(SettingsSupportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
