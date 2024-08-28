import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SettingsSupportService } from './settings-support.service';
import { CreateSettingsSupportDto } from './dto/create-settings-support.dto';
import { UpdateSettingsSupportDto } from './dto/update-settings-support.dto';

@Controller('settings-support')
export class SettingsSupportController {
  constructor(private readonly settingsSupportService: SettingsSupportService) {}

  @Post()
  create(@Body() createSettingsSupportDto: CreateSettingsSupportDto) {
    return this.settingsSupportService.create(createSettingsSupportDto);
  }

  @Get()
  findAll() {
    return this.settingsSupportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.settingsSupportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSettingsSupportDto: UpdateSettingsSupportDto) {
    return this.settingsSupportService.update(+id, updateSettingsSupportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.settingsSupportService.remove(+id);
  }
}
