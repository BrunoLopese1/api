import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BaileysMessagesService } from './baileys-messages.service';
import { CreateBaileysMessageDto } from './dto/create-baileys-message.dto';
import { UpdateBaileysMessageDto } from './dto/update-baileys-message.dto';

@Controller('baileys-messages')
export class BaileysMessagesController {
  constructor(
    private readonly baileysMessagesService: BaileysMessagesService,
  ) {}

  @Post()
  create(@Body() createBaileysMessageDto: CreateBaileysMessageDto) {
    return this.baileysMessagesService.create(createBaileysMessageDto);
  }

  @Get()
  findAll() {
    return this.baileysMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baileysMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBaileysMessageDto: UpdateBaileysMessageDto,
  ) {
    return this.baileysMessagesService.update(+id, updateBaileysMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baileysMessagesService.remove(+id);
  }
}
