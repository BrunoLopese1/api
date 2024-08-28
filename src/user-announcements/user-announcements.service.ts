import { Injectable } from '@nestjs/common';
import { CreateUserAnnouncementDto } from './dto/create-user-announcement.dto';
import { UpdateUserAnnouncementDto } from './dto/update-user-announcement.dto';

@Injectable()
export class UserAnnouncementsService {
  create(createUserAnnouncementDto: CreateUserAnnouncementDto) {
    return 'This action adds a new userAnnouncement';
  }

  findAll() {
    return `This action returns all userAnnouncements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAnnouncement`;
  }

  update(id: number, updateUserAnnouncementDto: UpdateUserAnnouncementDto) {
    return `This action updates a #${id} userAnnouncement`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAnnouncement`;
  }
}
