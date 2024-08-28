import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAnnouncementsService } from './user-announcements.service';
import { CreateUserAnnouncementDto } from './dto/create-user-announcement.dto';
import { UpdateUserAnnouncementDto } from './dto/update-user-announcement.dto';

@Controller('user-announcements')
export class UserAnnouncementsController {
  constructor(private readonly userAnnouncementsService: UserAnnouncementsService) {}

  @Post()
  create(@Body() createUserAnnouncementDto: CreateUserAnnouncementDto) {
    return this.userAnnouncementsService.create(createUserAnnouncementDto);
  }

  @Get()
  findAll() {
    return this.userAnnouncementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAnnouncementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAnnouncementDto: UpdateUserAnnouncementDto) {
    return this.userAnnouncementsService.update(+id, updateUserAnnouncementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAnnouncementsService.remove(+id);
  }
}
