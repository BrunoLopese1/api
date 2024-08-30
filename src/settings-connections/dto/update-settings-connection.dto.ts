import { PartialType } from '@nestjs/swagger';
import { CreateSettingsConnectionDto } from './create-settings-connection.dto';

export class UpdateSettingsConnectionDto extends PartialType(
  CreateSettingsConnectionDto,
) {}
