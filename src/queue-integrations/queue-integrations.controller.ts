import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QueueIntegrationsService } from './queue-integrations.service';
import { CreateQueueIntegrationDto } from './dto/create-queue-integration.dto';
import { UpdateQueueIntegrationDto } from './dto/update-queue-integration.dto';

@Controller('queue-integrations')
export class QueueIntegrationsController {
  constructor(
    private readonly queueIntegrationsService: QueueIntegrationsService,
  ) {}

  @Post()
  create(@Body() createQueueIntegrationDto: CreateQueueIntegrationDto) {
    return this.queueIntegrationsService.create(createQueueIntegrationDto);
  }

  @Get()
  findAll() {
    return this.queueIntegrationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queueIntegrationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQueueIntegrationDto: UpdateQueueIntegrationDto,
  ) {
    return this.queueIntegrationsService.update(+id, updateQueueIntegrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queueIntegrationsService.remove(+id);
  }
}
