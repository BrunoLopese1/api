import { PartialType } from '@nestjs/swagger';
import { CreateSettingsAppearanceDto } from './create-settings-appearance.dto';

export class UpdateSettingsAppearanceDto extends PartialType(CreateSettingsAppearanceDto) {}
