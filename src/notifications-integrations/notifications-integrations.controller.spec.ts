import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsIntegrationsController } from './notifications-integrations.controller';
import { NotificationsIntegrationsService } from './notifications-integrations.service';

describe('NotificationsIntegrationsController', () => {
  let controller: NotificationsIntegrationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationsIntegrationsController],
      providers: [NotificationsIntegrationsService],
    }).compile();

    controller = module.get<NotificationsIntegrationsController>(
      NotificationsIntegrationsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
