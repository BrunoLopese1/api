import { Injectable } from '@nestjs/common';
import { CreateValidationCodeDto } from './dto/create-validation-code.dto';
import { UpdateValidationCodeDto } from './dto/update-validation-code.dto';

@Injectable()
export class ValidationCodesService {
  create(createValidationCodeDto: CreateValidationCodeDto) {
    return 'This action adds a new validationCode';
  }

  findAll() {
    return `This action returns all validationCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} validationCode`;
  }

  update(id: number, updateValidationCodeDto: UpdateValidationCodeDto) {
    return `This action updates a #${id} validationCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} validationCode`;
  }
}
