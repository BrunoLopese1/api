import { Injectable } from '@nestjs/common';
import { CreateWhatsappDto } from './dto/create-whatsapp.dto';
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';

@Injectable()
export class WhatsappsService {
  create(createWhatsappDto: CreateWhatsappDto) {
    return 'This action adds a new whatsapp';
  }

  findAll() {
    return `This action returns all whatsapps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whatsapp`;
  }

  update(id: number, updateWhatsappDto: UpdateWhatsappDto) {
    return `This action updates a #${id} whatsapp`;
  }

  remove(id: number) {
    return `This action removes a #${id} whatsapp`;
  }
}
