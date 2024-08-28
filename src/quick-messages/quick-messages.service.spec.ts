import { Test, TestingModule } from '@nestjs/testing';
import { QuickMessagesService } from './quick-messages.service';

describe('QuickMessagesService', () => {
  let service: QuickMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuickMessagesService],
    }).compile();

    service = module.get<QuickMessagesService>(QuickMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
