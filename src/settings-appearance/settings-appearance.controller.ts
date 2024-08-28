import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SettingsAppearanceService } from './settings-appearance.service';
import { CreateSettingsAppearanceDto } from './dto/create-settings-appearance.dto';
import { UpdateSettingsAppearanceDto } from './dto/update-settings-appearance.dto';

@Controller('settings-appearance')
export class SettingsAppearanceController {
  constructor(private readonly settingsAppearanceService: SettingsAppearanceService) {}

  @Post()
  create(@Body() createSettingsAppearanceDto: CreateSettingsAppearanceDto) {
    return this.settingsAppearanceService.create(createSettingsAppearanceDto);
  }

  @Get()
  findAll() {
    return this.settingsAppearanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.settingsAppearanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSettingsAppearanceDto: UpdateSettingsAppearanceDto) {
    return this.settingsAppearanceService.update(+id, updateSettingsAppearanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.settingsAppearanceService.remove(+id);
  }
}
