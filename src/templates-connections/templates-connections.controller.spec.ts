import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesConnectionsController } from './templates-connections.controller';
import { TemplatesConnectionsService } from './templates-connections.service';

describe('TemplatesConnectionsController', () => {
  let controller: TemplatesConnectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemplatesConnectionsController],
      providers: [TemplatesConnectionsService],
    }).compile();

    controller = module.get<TemplatesConnectionsController>(TemplatesConnectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
