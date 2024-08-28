import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaileysChatsService } from './baileys-chats.service';
import { CreateBaileysChatDto } from './dto/create-baileys-chat.dto';
import { UpdateBaileysChatDto } from './dto/update-baileys-chat.dto';

@Controller('baileys-chats')
export class BaileysChatsController {
  constructor(private readonly baileysChatsService: BaileysChatsService) {}

  @Post()
  create(@Body() createBaileysChatDto: CreateBaileysChatDto) {
    return this.baileysChatsService.create(createBaileysChatDto);
  }

  @Get()
  findAll() {
    return this.baileysChatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baileysChatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaileysChatDto: UpdateBaileysChatDto) {
    return this.baileysChatsService.update(+id, updateBaileysChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baileysChatsService.remove(+id);
  }
}
