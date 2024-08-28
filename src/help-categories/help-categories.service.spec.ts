import { Test, TestingModule } from '@nestjs/testing';
import { HelpCategoriesService } from './help-categories.service';

describe('HelpCategoriesService', () => {
  let service: HelpCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpCategoriesService],
    }).compile();

    service = module.get<HelpCategoriesService>(HelpCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
