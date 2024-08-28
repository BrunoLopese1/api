import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactListItemsService } from './contact-list-items.service';
import { CreateContactListItemDto } from './dto/create-contact-list-item.dto';
import { UpdateContactListItemDto } from './dto/update-contact-list-item.dto';

@Controller('contact-list-items')
export class ContactListItemsController {
  constructor(private readonly contactListItemsService: ContactListItemsService) {}

  @Post()
  create(@Body() createContactListItemDto: CreateContactListItemDto) {
    return this.contactListItemsService.create(createContactListItemDto);
  }

  @Get()
  findAll() {
    return this.contactListItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactListItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactListItemDto: UpdateContactListItemDto) {
    return this.contactListItemsService.update(+id, updateContactListItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactListItemsService.remove(+id);
  }
}
