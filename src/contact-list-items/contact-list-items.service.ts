import { Injectable } from '@nestjs/common';
import { CreateContactListItemDto } from './dto/create-contact-list-item.dto';
import { UpdateContactListItemDto } from './dto/update-contact-list-item.dto';

@Injectable()
export class ContactListItemsService {
  create(createContactListItemDto: CreateContactListItemDto) {
    return 'This action adds a new contactListItem';
  }

  findAll() {
    return `This action returns all contactListItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactListItem`;
  }

  update(id: number, updateContactListItemDto: UpdateContactListItemDto) {
    return `This action updates a #${id} contactListItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactListItem`;
  }
}
