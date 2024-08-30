import { Test, TestingModule } from '@nestjs/testing';
import { BaileysMessagesController } from './baileys-messages.controller';
import { BaileysMessagesService } from './baileys-messages.service';

describe('BaileysMessagesController', () => {
  let controller: BaileysMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaileysMessagesController],
      providers: [BaileysMessagesService],
    }).compile();

    controller = module.get<BaileysMessagesController>(
      BaileysMessagesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
