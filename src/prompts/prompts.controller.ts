import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PromptsService } from './prompts.service';
import { CreatePromptDto } from './dto/create-prompt.dto';
import { UpdatePromptDto } from './dto/update-prompt.dto';

@Controller('prompts')
export class PromptsController {
  constructor(private readonly promptsService: PromptsService) {}

  @Post()
  create(@Body() createPromptDto: CreatePromptDto) {
    return this.promptsService.create(createPromptDto);
  }

  @Get()
  findAll() {
    return this.promptsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promptsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePromptDto: UpdatePromptDto) {
    return this.promptsService.update(+id, updatePromptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promptsService.remove(+id);
  }
}
