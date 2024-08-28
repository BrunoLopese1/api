import { Injectable } from '@nestjs/common';
import { CreateResetPasswordDto } from './dto/create-reset-password.dto';
import { UpdateResetPasswordDto } from './dto/update-reset-password.dto';

@Injectable()
export class ResetPasswordService {
  create(createResetPasswordDto: CreateResetPasswordDto) {
    return 'This action adds a new resetPassword';
  }

  findAll() {
    return `This action returns all resetPassword`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resetPassword`;
  }

  update(id: number, updateResetPasswordDto: UpdateResetPasswordDto) {
    return `This action updates a #${id} resetPassword`;
  }

  remove(id: number) {
    return `This action removes a #${id} resetPassword`;
  }
}
