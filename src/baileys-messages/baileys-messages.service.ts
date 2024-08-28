import { Injectable } from '@nestjs/common';
import { CreateBaileysMessageDto } from './dto/create-baileys-message.dto';
import { UpdateBaileysMessageDto } from './dto/update-baileys-message.dto';

@Injectable()
export class BaileysMessagesService {
  create(createBaileysMessageDto: CreateBaileysMessageDto) {
    return 'This action adds a new baileysMessage';
  }

  findAll() {
    return `This action returns all baileysMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} baileysMessage`;
  }

  update(id: number, updateBaileysMessageDto: UpdateBaileysMessageDto) {
    return `This action updates a #${id} baileysMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} baileysMessage`;
  }
}
