import { PartialType } from '@nestjs/swagger';
import { CreateReasonForTransferDto } from './create-reason-for-transfer.dto';

export class UpdateReasonForTransferDto extends PartialType(
  CreateReasonForTransferDto,
) {}
