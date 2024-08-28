import { Test, TestingModule } from '@nestjs/testing';
import { UserAnnouncementsService } from './user-announcements.service';

describe('UserAnnouncementsService', () => {
  let service: UserAnnouncementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAnnouncementsService],
    }).compile();

    service = module.get<UserAnnouncementsService>(UserAnnouncementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
