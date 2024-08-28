import { Test, TestingModule } from '@nestjs/testing';
import { BaileysController } from './baileys.controller';
import { BaileysService } from './baileys.service';

describe('BaileysController', () => {
  let controller: BaileysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaileysController],
      providers: [BaileysService],
    }).compile();

    controller = module.get<BaileysController>(BaileysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
