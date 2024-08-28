import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhatsappsService } from './whatsapps.service';
import { CreateWhatsappDto } from './dto/create-whatsapp.dto';
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';

@Controller('whatsapps')
export class WhatsappsController {
  constructor(private readonly whatsappsService: WhatsappsService) {}

  @Post()
  create(@Body() createWhatsappDto: CreateWhatsappDto) {
    return this.whatsappsService.create(createWhatsappDto);
  }

  @Get()
  findAll() {
    return this.whatsappsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whatsappsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhatsappDto: UpdateWhatsappDto) {
    return this.whatsappsService.update(+id, updateWhatsappDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whatsappsService.remove(+id);
  }
}
