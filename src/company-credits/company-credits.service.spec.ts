import { Test, TestingModule } from '@nestjs/testing';
import { CompanyCreditsService } from './company-credits.service';

describe('CompanyCreditsService', () => {
  let service: CompanyCreditsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyCreditsService],
    }).compile();

    service = module.get<CompanyCreditsService>(CompanyCreditsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
