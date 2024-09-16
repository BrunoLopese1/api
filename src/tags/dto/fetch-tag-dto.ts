import { PartialType } from '@nestjs/swagger';
import { CreateTagDto } from './create-tag.dto';

export class FetchTagDto extends PartialType(CreateTagDto) {}