import { Injectable } from '@nestjs/common';
import { CreateNotificationsIntegrationsSetupDto } from './dto/create-notifications-integrations-setup.dto';
import { UpdateNotificationsIntegrationsSetupDto } from './dto/update-notifications-integrations-setup.dto';

@Injectable()
export class NotificationsIntegrationsSetupService {
  create(
    createNotificationsIntegrationsSetupDto: CreateNotificationsIntegrationsSetupDto,
  ) {
    return 'This action adds a new notificationsIntegrationsSetup';
  }

  findAll() {
    return `This action returns all notificationsIntegrationsSetup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notificationsIntegrationsSetup`;
  }

  update(
    id: number,
    updateNotificationsIntegrationsSetupDto: UpdateNotificationsIntegrationsSetupDto,
  ) {
    return `This action updates a #${id} notificationsIntegrationsSetup`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificationsIntegrationsSetup`;
  }
}
