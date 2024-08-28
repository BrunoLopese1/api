import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaileysService } from './baileys.service';
import { CreateBaileyDto } from './dto/create-bailey.dto';
import { UpdateBaileyDto } from './dto/update-bailey.dto';

@Controller('baileys')
export class BaileysController {
  constructor(private readonly baileysService: BaileysService) {}

  @Post()
  create(@Body() createBaileyDto: CreateBaileyDto) {
    return this.baileysService.create(createBaileyDto);
  }

  @Get()
  findAll() {
    return this.baileysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baileysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaileyDto: UpdateBaileyDto) {
    return this.baileysService.update(+id, updateBaileyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baileysService.remove(+id);
  }
}
