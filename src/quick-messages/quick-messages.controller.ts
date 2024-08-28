import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuickMessagesService } from './quick-messages.service';
import { CreateQuickMessageDto } from './dto/create-quick-message.dto';
import { UpdateQuickMessageDto } from './dto/update-quick-message.dto';

@Controller('quick-messages')
export class QuickMessagesController {
  constructor(private readonly quickMessagesService: QuickMessagesService) {}

  @Post()
  create(@Body() createQuickMessageDto: CreateQuickMessageDto) {
    return this.quickMessagesService.create(createQuickMessageDto);
  }

  @Get()
  findAll() {
    return this.quickMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quickMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuickMessageDto: UpdateQuickMessageDto) {
    return this.quickMessagesService.update(+id, updateQuickMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quickMessagesService.remove(+id);
  }
}
