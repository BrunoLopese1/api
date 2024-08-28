import { PartialType } from '@nestjs/swagger';
import { CreateHelpCategoryDto } from './create-help-category.dto';

export class UpdateHelpCategoryDto extends PartialType(CreateHelpCategoryDto) {}
