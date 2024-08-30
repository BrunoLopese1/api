import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WhatsappQueuesService } from './whatsapp-queues.service';
import { CreateWhatsappQueueDto } from './dto/create-whatsapp-queue.dto';
import { UpdateWhatsappQueueDto } from './dto/update-whatsapp-queue.dto';

@Controller('whatsapp-queues')
export class WhatsappQueuesController {
  constructor(private readonly whatsappQueuesService: WhatsappQueuesService) {}

  @Post()
  create(@Body() createWhatsappQueueDto: CreateWhatsappQueueDto) {
    return this.whatsappQueuesService.create(createWhatsappQueueDto);
  }

  @Get()
  findAll() {
    return this.whatsappQueuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whatsappQueuesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWhatsappQueueDto: UpdateWhatsappQueueDto,
  ) {
    return this.whatsappQueuesService.update(+id, updateWhatsappQueueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whatsappQueuesService.remove(+id);
  }
}
