import { Test, TestingModule } from '@nestjs/testing';
import { SettingsConnectionsController } from './settings-connections.controller';
import { SettingsConnectionsService } from './settings-connections.service';

describe('SettingsConnectionsController', () => {
  let controller: SettingsConnectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SettingsConnectionsController],
      providers: [SettingsConnectionsService],
    }).compile();

    controller = module.get<SettingsConnectionsController>(
      SettingsConnectionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
