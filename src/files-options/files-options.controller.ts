import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilesOptionsService } from './files-options.service';
import { CreateFilesOptionDto } from './dto/create-files-option.dto';
import { UpdateFilesOptionDto } from './dto/update-files-option.dto';

@Controller('files-options')
export class FilesOptionsController {
  constructor(private readonly filesOptionsService: FilesOptionsService) {}

  @Post()
  create(@Body() createFilesOptionDto: CreateFilesOptionDto) {
    return this.filesOptionsService.create(createFilesOptionDto);
  }

  @Get()
  findAll() {
    return this.filesOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filesOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFilesOptionDto: UpdateFilesOptionDto,
  ) {
    return this.filesOptionsService.update(+id, updateFilesOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filesOptionsService.remove(+id);
  }
}
