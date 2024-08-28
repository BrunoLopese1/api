import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsIntegrationsSetupService } from './notifications-integrations-setup.service';

describe('NotificationsIntegrationsSetupService', () => {
  let service: NotificationsIntegrationsSetupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationsIntegrationsSetupService],
    }).compile();

    service = module.get<NotificationsIntegrationsSetupService>(NotificationsIntegrationsSetupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
