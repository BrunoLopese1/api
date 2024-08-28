import { Test, TestingModule } from '@nestjs/testing';
import { BaileysChatsController } from './baileys-chats.controller';
import { BaileysChatsService } from './baileys-chats.service';

describe('BaileysChatsController', () => {
  let controller: BaileysChatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaileysChatsController],
      providers: [BaileysChatsService],
    }).compile();

    controller = module.get<BaileysChatsController>(BaileysChatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
