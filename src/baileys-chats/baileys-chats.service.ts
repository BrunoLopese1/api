import { Injectable } from '@nestjs/common';
import { CreateBaileysChatDto } from './dto/create-baileys-chat.dto';
import { UpdateBaileysChatDto } from './dto/update-baileys-chat.dto';

@Injectable()
export class BaileysChatsService {
  create(createBaileysChatDto: CreateBaileysChatDto) {
    return 'This action adds a new baileysChat';
  }

  findAll() {
    return `This action returns all baileysChats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} baileysChat`;
  }

  update(id: number, updateBaileysChatDto: UpdateBaileysChatDto) {
    return `This action updates a #${id} baileysChat`;
  }

  remove(id: number) {
    return `This action removes a #${id} baileysChat`;
  }
}
