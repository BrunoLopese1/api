import { Injectable } from '@nestjs/common';
import { CreateContactCustomFieldDto } from './dto/create-contact-custom-field.dto';
import { UpdateContactCustomFieldDto } from './dto/update-contact-custom-field.dto';

@Injectable()
export class ContactCustomFieldsService {
  create(createContactCustomFieldDto: CreateContactCustomFieldDto) {
    return 'This action adds a new contactCustomField';
  }

  findAll() {
    return `This action returns all contactCustomFields`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactCustomField`;
  }

  update(id: number, updateContactCustomFieldDto: UpdateContactCustomFieldDto) {
    return `This action updates a #${id} contactCustomField`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactCustomField`;
  }
}
