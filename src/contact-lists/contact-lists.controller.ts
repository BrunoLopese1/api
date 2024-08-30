import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactListsService } from './contact-lists.service';
import { CreateContactListDto } from './dto/create-contact-list.dto';
import { UpdateContactListDto } from './dto/update-contact-list.dto';

@Controller('contact-lists')
export class ContactListsController {
  constructor(private readonly contactListsService: ContactListsService) {}

  @Post()
  create(@Body() createContactListDto: CreateContactListDto) {
    return this.contactListsService.create(createContactListDto);
  }

  @Get()
  findAll() {
    return this.contactListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactListsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContactListDto: UpdateContactListDto,
  ) {
    return this.contactListsService.update(+id, updateContactListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactListsService.remove(+id);
  }
}
