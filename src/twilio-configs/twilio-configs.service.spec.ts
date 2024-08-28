import { Test, TestingModule } from '@nestjs/testing';
import { TwilioConfigsService } from './twilio-configs.service';

describe('TwilioConfigsService', () => {
  let service: TwilioConfigsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwilioConfigsService],
    }).compile();

    service = module.get<TwilioConfigsService>(TwilioConfigsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
