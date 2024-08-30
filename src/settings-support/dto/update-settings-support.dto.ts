import { PartialType } from '@nestjs/swagger';
import { CreateSettingsSupportDto } from './create-settings-support.dto';

export class UpdateSettingsSupportDto extends PartialType(
  CreateSettingsSupportDto,
) {}
