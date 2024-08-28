import { Injectable } from '@nestjs/common';
import { CreateUserQueueDto } from './dto/create-user-queue.dto';
import { UpdateUserQueueDto } from './dto/update-user-queue.dto';

@Injectable()
export class UserQueuesService {
  create(createUserQueueDto: CreateUserQueueDto) {
    return 'This action adds a new userQueue';
  }

  findAll() {
    return `This action returns all userQueues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userQueue`;
  }

  update(id: number, updateUserQueueDto: UpdateUserQueueDto) {
    return `This action updates a #${id} userQueue`;
  }

  remove(id: number) {
    return `This action removes a #${id} userQueue`;
  }
}
