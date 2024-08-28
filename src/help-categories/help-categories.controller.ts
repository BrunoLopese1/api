import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelpCategoriesService } from './help-categories.service';
import { CreateHelpCategoryDto } from './dto/create-help-category.dto';
import { UpdateHelpCategoryDto } from './dto/update-help-category.dto';

@Controller('help-categories')
export class HelpCategoriesController {
  constructor(private readonly helpCategoriesService: HelpCategoriesService) {}

  @Post()
  create(@Body() createHelpCategoryDto: CreateHelpCategoryDto) {
    return this.helpCategoriesService.create(createHelpCategoryDto);
  }

  @Get()
  findAll() {
    return this.helpCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helpCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHelpCategoryDto: UpdateHelpCategoryDto) {
    return this.helpCategoriesService.update(+id, updateHelpCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helpCategoriesService.remove(+id);
  }
}
