import { Test, TestingModule } from '@nestjs/testing';
import { PromptsController } from './prompts.controller';
import { PromptsService } from './prompts.service';

describe('PromptsController', () => {
  let controller: PromptsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromptsController],
      providers: [PromptsService],
    }).compile();

    controller = module.get<PromptsController>(PromptsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
