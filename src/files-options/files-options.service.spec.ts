import { Test, TestingModule } from '@nestjs/testing';
import { FilesOptionsService } from './files-options.service';

describe('FilesOptionsService', () => {
  let service: FilesOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilesOptionsService],
    }).compile();

    service = module.get<FilesOptionsService>(FilesOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
