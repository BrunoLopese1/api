import { Test, TestingModule } from '@nestjs/testing';
import { BaileysMessagesService } from './baileys-messages.service';

describe('BaileysMessagesService', () => {
  let service: BaileysMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaileysMessagesService],
    }).compile();

    service = module.get<BaileysMessagesService>(BaileysMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
