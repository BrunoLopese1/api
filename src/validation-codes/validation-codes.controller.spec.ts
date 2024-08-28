import { Test, TestingModule } from '@nestjs/testing';
import { ValidationCodesController } from './validation-codes.controller';
import { ValidationCodesService } from './validation-codes.service';

describe('ValidationCodesController', () => {
  let controller: ValidationCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidationCodesController],
      providers: [ValidationCodesService],
    }).compile();

    controller = module.get<ValidationCodesController>(ValidationCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
