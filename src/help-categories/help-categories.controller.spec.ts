import { Test, TestingModule } from '@nestjs/testing';
import { HelpCategoriesController } from './help-categories.controller';
import { HelpCategoriesService } from './help-categories.service';

describe('HelpCategoriesController', () => {
  let controller: HelpCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelpCategoriesController],
      providers: [HelpCategoriesService],
    }).compile();

    controller = module.get<HelpCategoriesController>(HelpCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
