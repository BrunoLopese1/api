import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotificationsIntegrationsSetupService } from './notifications-integrations-setup.service';
import { CreateNotificationsIntegrationsSetupDto } from './dto/create-notifications-integrations-setup.dto';
import { UpdateNotificationsIntegrationsSetupDto } from './dto/update-notifications-integrations-setup.dto';

@Controller('notifications-integrations-setup')
export class NotificationsIntegrationsSetupController {
  constructor(
    private readonly notificationsIntegrationsSetupService: NotificationsIntegrationsSetupService,
  ) {}

  @Post()
  create(
    @Body()
    createNotificationsIntegrationsSetupDto: CreateNotificationsIntegrationsSetupDto,
  ) {
    return this.notificationsIntegrationsSetupService.create(
      createNotificationsIntegrationsSetupDto,
    );
  }

  @Get()
  findAll() {
    return this.notificationsIntegrationsSetupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationsIntegrationsSetupService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateNotificationsIntegrationsSetupDto: UpdateNotificationsIntegrationsSetupDto,
  ) {
    return this.notificationsIntegrationsSetupService.update(
      +id,
      updateNotificationsIntegrationsSetupDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsIntegrationsSetupService.remove(+id);
  }
}
