import { Test, TestingModule } from '@nestjs/testing';
import { QueueOptionsService } from './queue-options.service';

describe('QueueOptionsService', () => {
  let service: QueueOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueueOptionsService],
    }).compile();

    service = module.get<QueueOptionsService>(QueueOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
