import { PartialType } from '@nestjs/swagger';
import { CreateNotificationsIntegrationsSetupDto } from './create-notifications-integrations-setup.dto';

export class UpdateNotificationsIntegrationsSetupDto extends PartialType(
  CreateNotificationsIntegrationsSetupDto,
) {}
