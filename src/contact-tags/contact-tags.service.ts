import { Injectable } from '@nestjs/common';
import { CreateContactTagDto } from './dto/create-contact-tag.dto';
import { UpdateContactTagDto } from './dto/update-contact-tag.dto';

@Injectable()
export class ContactTagsService {
  create(createContactTagDto: CreateContactTagDto) {
    return 'This action adds a new contactTag';
  }

  findAll() {
    return `This action returns all contactTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactTag`;
  }

  update(id: number, updateContactTagDto: UpdateContactTagDto) {
    return `This action updates a #${id} contactTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactTag`;
  }
}
