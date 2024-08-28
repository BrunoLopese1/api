import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactCustomFieldsService } from './contact-custom-fields.service';
import { CreateContactCustomFieldDto } from './dto/create-contact-custom-field.dto';
import { UpdateContactCustomFieldDto } from './dto/update-contact-custom-field.dto';

@Controller('contact-custom-fields')
export class ContactCustomFieldsController {
  constructor(private readonly contactCustomFieldsService: ContactCustomFieldsService) {}

  @Post()
  create(@Body() createContactCustomFieldDto: CreateContactCustomFieldDto) {
    return this.contactCustomFieldsService.create(createContactCustomFieldDto);
  }

  @Get()
  findAll() {
    return this.contactCustomFieldsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactCustomFieldsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactCustomFieldDto: UpdateContactCustomFieldDto) {
    return this.contactCustomFieldsService.update(+id, updateContactCustomFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactCustomFieldsService.remove(+id);
  }
}
