import { Test, TestingModule } from '@nestjs/testing';
import { TwilioConfigsController } from './twilio-configs.controller';
import { TwilioConfigsService } from './twilio-configs.service';

describe('TwilioConfigsController', () => {
  let controller: TwilioConfigsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwilioConfigsController],
      providers: [TwilioConfigsService],
    }).compile();

    controller = module.get<TwilioConfigsController>(TwilioConfigsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
