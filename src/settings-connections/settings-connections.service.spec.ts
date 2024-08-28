import { Test, TestingModule } from '@nestjs/testing';
import { SettingsConnectionsService } from './settings-connections.service';

describe('SettingsConnectionsService', () => {
  let service: SettingsConnectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SettingsConnectionsService],
    }).compile();

    service = module.get<SettingsConnectionsService>(SettingsConnectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
