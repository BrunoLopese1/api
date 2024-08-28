import { Injectable } from '@nestjs/common';
import { CreateQuickMessageDto } from './dto/create-quick-message.dto';
import { UpdateQuickMessageDto } from './dto/update-quick-message.dto';

@Injectable()
export class QuickMessagesService {
  create(createQuickMessageDto: CreateQuickMessageDto) {
    return 'This action adds a new quickMessage';
  }

  findAll() {
    return `This action returns all quickMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quickMessage`;
  }

  update(id: number, updateQuickMessageDto: UpdateQuickMessageDto) {
    return `This action updates a #${id} quickMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} quickMessage`;
  }
}
