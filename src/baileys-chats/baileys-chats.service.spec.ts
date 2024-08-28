import { Test, TestingModule } from '@nestjs/testing';
import { BaileysChatsService } from './baileys-chats.service';

describe('BaileysChatsService', () => {
  let service: BaileysChatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaileysChatsService],
    }).compile();

    service = module.get<BaileysChatsService>(BaileysChatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
