import { Test, TestingModule } from '@nestjs/testing';
import { BaileysService } from './baileys.service';

describe('BaileysService', () => {
  let service: BaileysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaileysService],
    }).compile();

    service = module.get<BaileysService>(BaileysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
