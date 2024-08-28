import { Injectable } from '@nestjs/common';
import { CreateTwilioConfigDto } from './dto/create-twilio-config.dto';
import { UpdateTwilioConfigDto } from './dto/update-twilio-config.dto';

@Injectable()
export class TwilioConfigsService {
  create(createTwilioConfigDto: CreateTwilioConfigDto) {
    return 'This action adds a new twilioConfig';
  }

  findAll() {
    return `This action returns all twilioConfigs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} twilioConfig`;
  }

  update(id: number, updateTwilioConfigDto: UpdateTwilioConfigDto) {
    return `This action updates a #${id} twilioConfig`;
  }

  remove(id: number) {
    return `This action removes a #${id} twilioConfig`;
  }
}
