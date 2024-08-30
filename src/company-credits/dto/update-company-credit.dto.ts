import { PartialType } from '@nestjs/swagger';
import { CreateCompanyCreditDto } from './create-company-credit.dto';

export class UpdateCompanyCreditDto extends PartialType(
  CreateCompanyCreditDto,
) {}
