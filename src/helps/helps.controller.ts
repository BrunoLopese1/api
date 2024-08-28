import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelpsService } from './helps.service';
import { CreateHelpDto } from './dto/create-help.dto';
import { UpdateHelpDto } from './dto/update-help.dto';

@Controller('helps')
export class HelpsController {
  constructor(private readonly helpsService: HelpsService) {}

  @Post()
  create(@Body() createHelpDto: CreateHelpDto) {
    return this.helpsService.create(createHelpDto);
  }

  @Get()
  findAll() {
    return this.helpsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helpsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHelpDto: UpdateHelpDto) {
    return this.helpsService.update(+id, updateHelpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helpsService.remove(+id);
  }
}
