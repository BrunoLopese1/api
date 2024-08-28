import { Injectable } from '@nestjs/common';
import { CreateWhatsappQueueDto } from './dto/create-whatsapp-queue.dto';
import { UpdateWhatsappQueueDto } from './dto/update-whatsapp-queue.dto';

@Injectable()
export class WhatsappQueuesService {
  create(createWhatsappQueueDto: CreateWhatsappQueueDto) {
    return 'This action adds a new whatsappQueue';
  }

  findAll() {
    return `This action returns all whatsappQueues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whatsappQueue`;
  }

  update(id: number, updateWhatsappQueueDto: UpdateWhatsappQueueDto) {
    return `This action updates a #${id} whatsappQueue`;
  }

  remove(id: number) {
    return `This action removes a #${id} whatsappQueue`;
  }
}
