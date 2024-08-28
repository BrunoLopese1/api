import { Test, TestingModule } from '@nestjs/testing';
import { QueueIntegrationsService } from './queue-integrations.service';

describe('QueueIntegrationsService', () => {
  let service: QueueIntegrationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueueIntegrationsService],
    }).compile();

    service = module.get<QueueIntegrationsService>(QueueIntegrationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
