import { Injectable } from '@nestjs/common';
import { CreateSettingsSupportDto } from './dto/create-settings-support.dto';
import { UpdateSettingsSupportDto } from './dto/update-settings-support.dto';

@Injectable()
export class SettingsSupportService {
  create(createSettingsSupportDto: CreateSettingsSupportDto) {
    return 'This action adds a new settingsSupport';
  }

  findAll() {
    return `This action returns all settingsSupport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} settingsSupport`;
  }

  update(id: number, updateSettingsSupportDto: UpdateSettingsSupportDto) {
    return `This action updates a #${id} settingsSupport`;
  }

  remove(id: number) {
    return `This action removes a #${id} settingsSupport`;
  }
}
