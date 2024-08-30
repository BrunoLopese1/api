import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotificationsIntegrationsService } from './notifications-integrations.service';
import { CreateNotificationsIntegrationDto } from './dto/create-notifications-integration.dto';
import { UpdateNotificationsIntegrationDto } from './dto/update-notifications-integration.dto';

@Controller('notifications-integrations')
export class NotificationsIntegrationsController {
  constructor(
    private readonly notificationsIntegrationsService: NotificationsIntegrationsService,
  ) {}

  @Post()
  create(
    @Body()
    createNotificationsIntegrationDto: CreateNotificationsIntegrationDto,
  ) {
    return this.notificationsIntegrationsService.create(
      createNotificationsIntegrationDto,
    );
  }

  @Get()
  findAll() {
    return this.notificationsIntegrationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationsIntegrationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateNotificationsIntegrationDto: UpdateNotificationsIntegrationDto,
  ) {
    return this.notificationsIntegrationsService.update(
      +id,
      updateNotificationsIntegrationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsIntegrationsService.remove(+id);
  }
}
