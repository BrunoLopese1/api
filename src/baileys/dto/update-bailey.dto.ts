import { PartialType } from '@nestjs/swagger';
import { CreateBaileyDto } from './create-bailey.dto';

export class UpdateBaileyDto extends PartialType(CreateBaileyDto) {}
