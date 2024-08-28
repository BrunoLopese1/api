import { Injectable } from '@nestjs/common';
import { CreateQueueIntegrationDto } from './dto/create-queue-integration.dto';
import { UpdateQueueIntegrationDto } from './dto/update-queue-integration.dto';

@Injectable()
export class QueueIntegrationsService {
  create(createQueueIntegrationDto: CreateQueueIntegrationDto) {
    return 'This action adds a new queueIntegration';
  }

  findAll() {
    return `This action returns all queueIntegrations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} queueIntegration`;
  }

  update(id: number, updateQueueIntegrationDto: UpdateQueueIntegrationDto) {
    return `This action updates a #${id} queueIntegration`;
  }

  remove(id: number) {
    return `This action removes a #${id} queueIntegration`;
  }
}
