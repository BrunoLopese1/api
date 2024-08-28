import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QueueOptionsService } from './queue-options.service';
import { CreateQueueOptionDto } from './dto/create-queue-option.dto';
import { UpdateQueueOptionDto } from './dto/update-queue-option.dto';

@Controller('queue-options')
export class QueueOptionsController {
  constructor(private readonly queueOptionsService: QueueOptionsService) {}

  @Post()
  create(@Body() createQueueOptionDto: CreateQueueOptionDto) {
    return this.queueOptionsService.create(createQueueOptionDto);
  }

  @Get()
  findAll() {
    return this.queueOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queueOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQueueOptionDto: UpdateQueueOptionDto) {
    return this.queueOptionsService.update(+id, updateQueueOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queueOptionsService.remove(+id);
  }
}
