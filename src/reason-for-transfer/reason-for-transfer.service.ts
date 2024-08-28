import { Injectable } from '@nestjs/common';
import { CreateReasonForTransferDto } from './dto/create-reason-for-transfer.dto';
import { UpdateReasonForTransferDto } from './dto/update-reason-for-transfer.dto';

@Injectable()
export class ReasonForTransferService {
  create(createReasonForTransferDto: CreateReasonForTransferDto) {
    return 'This action adds a new reasonForTransfer';
  }

  findAll() {
    return `This action returns all reasonForTransfer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reasonForTransfer`;
  }

  update(id: number, updateReasonForTransferDto: UpdateReasonForTransferDto) {
    return `This action updates a #${id} reasonForTransfer`;
  }

  remove(id: number) {
    return `This action removes a #${id} reasonForTransfer`;
  }
}
