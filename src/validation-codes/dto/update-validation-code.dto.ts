import { PartialType } from '@nestjs/swagger';
import { CreateValidationCodeDto } from './create-validation-code.dto';

export class UpdateValidationCodeDto extends PartialType(
  CreateValidationCodeDto,
) {}
