import { Test, TestingModule } from '@nestjs/testing';
import { QueueIntegrationsController } from './queue-integrations.controller';
import { QueueIntegrationsService } from './queue-integrations.service';

describe('QueueIntegrationsController', () => {
  let controller: QueueIntegrationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueueIntegrationsController],
      providers: [QueueIntegrationsService],
    }).compile();

    controller = module.get<QueueIntegrationsController>(QueueIntegrationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
