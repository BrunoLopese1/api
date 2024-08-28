import { Module } from '@nestjs/common';
import { UserAnnouncementsService } from './user-announcements.service';
import { UserAnnouncementsController } from './user-announcements.controller';

@Module({
  controllers: [UserAnnouncementsController],
  providers: [UserAnnouncementsService],
})
export class UserAnnouncementsModule {}
