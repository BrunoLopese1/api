import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsIntegrationsService } from './notifications-integrations.service';

describe('NotificationsIntegrationsService', () => {
  let service: NotificationsIntegrationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationsIntegrationsService],
    }).compile();

    service = module.get<NotificationsIntegrationsService>(
      NotificationsIntegrationsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
