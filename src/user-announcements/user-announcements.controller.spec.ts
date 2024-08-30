import { Test, TestingModule } from '@nestjs/testing';
import { UserAnnouncementsController } from './user-announcements.controller';
import { UserAnnouncementsService } from './user-announcements.service';

describe('UserAnnouncementsController', () => {
  let controller: UserAnnouncementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAnnouncementsController],
      providers: [UserAnnouncementsService],
    }).compile();

    controller = module.get<UserAnnouncementsController>(
      UserAnnouncementsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
