import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TemplatesConnectionsService } from './templates-connections.service';
import { CreateTemplatesConnectionDto } from './dto/create-templates-connection.dto';
import { UpdateTemplatesConnectionDto } from './dto/update-templates-connection.dto';

@Controller('templates-connections')
export class TemplatesConnectionsController {
  constructor(
    private readonly templatesConnectionsService: TemplatesConnectionsService,
  ) {}

  @Post()
  create(@Body() createTemplatesConnectionDto: CreateTemplatesConnectionDto) {
    return this.templatesConnectionsService.create(
      createTemplatesConnectionDto,
    );
  }

  @Get()
  findAll() {
    return this.templatesConnectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templatesConnectionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTemplatesConnectionDto: UpdateTemplatesConnectionDto,
  ) {
    return this.templatesConnectionsService.update(
      +id,
      updateTemplatesConnectionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templatesConnectionsService.remove(+id);
  }
}
