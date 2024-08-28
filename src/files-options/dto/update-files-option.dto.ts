import { PartialType } from '@nestjs/swagger';
import { CreateFilesOptionDto } from './create-files-option.dto';

export class UpdateFilesOptionDto extends PartialType(CreateFilesOptionDto) {}
