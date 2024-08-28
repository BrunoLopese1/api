import { Test, TestingModule } from '@nestjs/testing';
import { WhatsappQueuesController } from './whatsapp-queues.controller';
import { WhatsappQueuesService } from './whatsapp-queues.service';

describe('WhatsappQueuesController', () => {
  let controller: WhatsappQueuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhatsappQueuesController],
      providers: [WhatsappQueuesService],
    }).compile();

    controller = module.get<WhatsappQueuesController>(WhatsappQueuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
