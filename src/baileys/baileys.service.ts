import { Injectable } from '@nestjs/common';
import { CreateBaileyDto } from './dto/create-bailey.dto';
import { UpdateBaileyDto } from './dto/update-bailey.dto';

@Injectable()
export class BaileysService {
  create(createBaileyDto: CreateBaileyDto) {
    return 'This action adds a new bailey';
  }

  findAll() {
    return `This action returns all baileys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bailey`;
  }

  update(id: number, updateBaileyDto: UpdateBaileyDto) {
    return `This action updates a #${id} bailey`;
  }

  remove(id: number) {
    return `This action removes a #${id} bailey`;
  }
}
