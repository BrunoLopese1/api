import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactTagsService } from './contact-tags.service';
import { CreateContactTagDto } from './dto/create-contact-tag.dto';
import { UpdateContactTagDto } from './dto/update-contact-tag.dto';

@Controller('contact-tags')
export class ContactTagsController {
  constructor(private readonly contactTagsService: ContactTagsService) {}

  @Post()
  create(@Body() createContactTagDto: CreateContactTagDto) {
    return this.contactTagsService.create(createContactTagDto);
  }

  @Get()
  findAll() {
    return this.contactTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactTagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactTagDto: UpdateContactTagDto) {
    return this.contactTagsService.update(+id, updateContactTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactTagsService.remove(+id);
  }
}
