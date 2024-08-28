import { Test, TestingModule } from '@nestjs/testing';
import { QuickMessagesController } from './quick-messages.controller';
import { QuickMessagesService } from './quick-messages.service';

describe('QuickMessagesController', () => {
  let controller: QuickMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuickMessagesController],
      providers: [QuickMessagesService],
    }).compile();

    controller = module.get<QuickMessagesController>(QuickMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
