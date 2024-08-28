import { Injectable } from '@nestjs/common';
import { CreateQueueOptionDto } from './dto/create-queue-option.dto';
import { UpdateQueueOptionDto } from './dto/update-queue-option.dto';

@Injectable()
export class QueueOptionsService {
  create(createQueueOptionDto: CreateQueueOptionDto) {
    return 'This action adds a new queueOption';
  }

  findAll() {
    return `This action returns all queueOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} queueOption`;
  }

  update(id: number, updateQueueOptionDto: UpdateQueueOptionDto) {
    return `This action updates a #${id} queueOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} queueOption`;
  }
}
