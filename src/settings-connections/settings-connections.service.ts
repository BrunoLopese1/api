import { Injectable } from '@nestjs/common';
import { CreateSettingsConnectionDto } from './dto/create-settings-connection.dto';
import { UpdateSettingsConnectionDto } from './dto/update-settings-connection.dto';

@Injectable()
export class SettingsConnectionsService {
  create(createSettingsConnectionDto: CreateSettingsConnectionDto) {
    return 'This action adds a new settingsConnection';
  }

  findAll() {
    return `This action returns all settingsConnections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} settingsConnection`;
  }

  update(id: number, updateSettingsConnectionDto: UpdateSettingsConnectionDto) {
    return `This action updates a #${id} settingsConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} settingsConnection`;
  }
}
