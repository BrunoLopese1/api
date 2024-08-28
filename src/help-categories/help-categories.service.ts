import { Injectable } from '@nestjs/common';
import { CreateHelpCategoryDto } from './dto/create-help-category.dto';
import { UpdateHelpCategoryDto } from './dto/update-help-category.dto';

@Injectable()
export class HelpCategoriesService {
  create(createHelpCategoryDto: CreateHelpCategoryDto) {
    return 'This action adds a new helpCategory';
  }

  findAll() {
    return `This action returns all helpCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} helpCategory`;
  }

  update(id: number, updateHelpCategoryDto: UpdateHelpCategoryDto) {
    return `This action updates a #${id} helpCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} helpCategory`;
  }
}
