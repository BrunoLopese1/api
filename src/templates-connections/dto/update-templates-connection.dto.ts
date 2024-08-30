import { PartialType } from '@nestjs/swagger';
import { CreateTemplatesConnectionDto } from './create-templates-connection.dto';

export class UpdateTemplatesConnectionDto extends PartialType(
  CreateTemplatesConnectionDto,
) {}
