import { PartialType } from '@nestjs/swagger';
import { CreateNotificationsIntegrationDto } from './create-notifications-integration.dto';

export class UpdateNotificationsIntegrationDto extends PartialType(
  CreateNotificationsIntegrationDto,
) {}
