import { Test, TestingModule } from '@nestjs/testing';
import { FilesOptionsController } from './files-options.controller';
import { FilesOptionsService } from './files-options.service';

describe('FilesOptionsController', () => {
  let controller: FilesOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilesOptionsController],
      providers: [FilesOptionsService],
    }).compile();

    controller = module.get<FilesOptionsController>(FilesOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
