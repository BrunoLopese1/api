import { Test, TestingModule } from '@nestjs/testing';
import { ReasonForTransferService } from './reason-for-transfer.service';

describe('ReasonForTransferService', () => {
  let service: ReasonForTransferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReasonForTransferService],
    }).compile();

    service = module.get<ReasonForTransferService>(ReasonForTransferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
