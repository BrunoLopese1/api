import { Injectable } from '@nestjs/common';
import { CreateSettingsAppearanceDto } from './dto/create-settings-appearance.dto';
import { UpdateSettingsAppearanceDto } from './dto/update-settings-appearance.dto';

@Injectable()
export class SettingsAppearanceService {
  create(createSettingsAppearanceDto: CreateSettingsAppearanceDto) {
    return 'This action adds a new settingsAppearance';
  }

  findAll() {
    return `This action returns all settingsAppearance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} settingsAppearance`;
  }

  update(id: number, updateSettingsAppearanceDto: UpdateSettingsAppearanceDto) {
    return `This action updates a #${id} settingsAppearance`;
  }

  remove(id: number) {
    return `This action removes a #${id} settingsAppearance`;
  }
}
