import { Injectable } from '@nestjs/common';
import { CreateNotificationsIntegrationDto } from './dto/create-notifications-integration.dto';
import { UpdateNotificationsIntegrationDto } from './dto/update-notifications-integration.dto';

@Injectable()
export class NotificationsIntegrationsService {
  create(createNotificationsIntegrationDto: CreateNotificationsIntegrationDto) {
    return 'This action adds a new notificationsIntegration';
  }

  findAll() {
    return `This action returns all notificationsIntegrations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notificationsIntegration`;
  }

  update(id: number, updateNotificationsIntegrationDto: UpdateNotificationsIntegrationDto) {
    return `This action updates a #${id} notificationsIntegration`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificationsIntegration`;
  }
}
