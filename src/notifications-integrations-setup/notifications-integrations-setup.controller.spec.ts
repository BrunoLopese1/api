import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsIntegrationsSetupController } from './notifications-integrations-setup.controller';
import { NotificationsIntegrationsSetupService } from './notifications-integrations-setup.service';

describe('NotificationsIntegrationsSetupController', () => {
  let controller: NotificationsIntegrationsSetupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationsIntegrationsSetupController],
      providers: [NotificationsIntegrationsSetupService],
    }).compile();

    controller = module.get<NotificationsIntegrationsSetupController>(NotificationsIntegrationsSetupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
