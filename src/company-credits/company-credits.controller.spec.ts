import { Test, TestingModule } from '@nestjs/testing';
import { CompanyCreditsController } from './company-credits.controller';
import { CompanyCreditsService } from './company-credits.service';

describe('CompanyCreditsController', () => {
  let controller: CompanyCreditsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyCreditsController],
      providers: [CompanyCreditsService],
    }).compile();

    controller = module.get<CompanyCreditsController>(CompanyCreditsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
