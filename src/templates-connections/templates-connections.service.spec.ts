import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesConnectionsService } from './templates-connections.service';

describe('TemplatesConnectionsService', () => {
  let service: TemplatesConnectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemplatesConnectionsService],
    }).compile();

    service = module.get<TemplatesConnectionsService>(
      TemplatesConnectionsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
