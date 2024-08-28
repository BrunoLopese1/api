import { Test, TestingModule } from '@nestjs/testing';
import { WhatsappQueuesService } from './whatsapp-queues.service';

describe('WhatsappQueuesService', () => {
  let service: WhatsappQueuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhatsappQueuesService],
    }).compile();

    service = module.get<WhatsappQueuesService>(WhatsappQueuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
