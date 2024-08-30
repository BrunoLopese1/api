import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SettingsConnectionsService } from './settings-connections.service';
import { CreateSettingsConnectionDto } from './dto/create-settings-connection.dto';
import { UpdateSettingsConnectionDto } from './dto/update-settings-connection.dto';

@Controller('settings-connections')
export class SettingsConnectionsController {
  constructor(
    private readonly settingsConnectionsService: SettingsConnectionsService,
  ) {}

  @Post()
  create(@Body() createSettingsConnectionDto: CreateSettingsConnectionDto) {
    return this.settingsConnectionsService.create(createSettingsConnectionDto);
  }

  @Get()
  findAll() {
    return this.settingsConnectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.settingsConnectionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSettingsConnectionDto: UpdateSettingsConnectionDto,
  ) {
    return this.settingsConnectionsService.update(
      +id,
      updateSettingsConnectionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.settingsConnectionsService.remove(+id);
  }
}
