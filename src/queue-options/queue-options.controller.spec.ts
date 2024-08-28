import { Test, TestingModule } from '@nestjs/testing';
import { QueueOptionsController } from './queue-options.controller';
import { QueueOptionsService } from './queue-options.service';

describe('QueueOptionsController', () => {
  let controller: QueueOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueueOptionsController],
      providers: [QueueOptionsService],
    }).compile();

    controller = module.get<QueueOptionsController>(QueueOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
