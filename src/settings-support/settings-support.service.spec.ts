import { Test, TestingModule } from '@nestjs/testing';
import { SettingsSupportService } from './settings-support.service';

describe('SettingsSupportService', () => {
  let service: SettingsSupportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SettingsSupportService],
    }).compile();

    service = module.get<SettingsSupportService>(SettingsSupportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
