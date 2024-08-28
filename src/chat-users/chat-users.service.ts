import { Injectable } from '@nestjs/common';
import { CreateChatUserDto } from './dto/create-chat-user.dto';
import { UpdateChatUserDto } from './dto/update-chat-user.dto';

@Injectable()
export class ChatUsersService {
  create(createChatUserDto: CreateChatUserDto) {
    return 'This action adds a new chatUser';
  }

  findAll() {
    return `This action returns all chatUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatUser`;
  }

  update(id: number, updateChatUserDto: UpdateChatUserDto) {
    return `This action updates a #${id} chatUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatUser`;
  }
}
