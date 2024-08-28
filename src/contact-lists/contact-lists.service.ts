import { Injectable } from '@nestjs/common';
import { CreateContactListDto } from './dto/create-contact-list.dto';
import { UpdateContactListDto } from './dto/update-contact-list.dto';

@Injectable()
export class ContactListsService {
  create(createContactListDto: CreateContactListDto) {
    return 'This action adds a new contactList';
  }

  findAll() {
    return `This action returns all contactLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactList`;
  }

  update(id: number, updateContactListDto: UpdateContactListDto) {
    return `This action updates a #${id} contactList`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactList`;
  }
}
