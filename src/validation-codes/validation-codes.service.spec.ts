import { Test, TestingModule } from '@nestjs/testing';
import { ValidationCodesService } from './validation-codes.service';

describe('ValidationCodesService', () => {
  let service: ValidationCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValidationCodesService],
    }).compile();

    service = module.get<ValidationCodesService>(ValidationCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
