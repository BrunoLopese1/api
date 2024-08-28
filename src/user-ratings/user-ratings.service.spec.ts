import { Test, TestingModule } from '@nestjs/testing';
import { UserRatingsService } from './user-ratings.service';

describe('UserRatingsService', () => {
  let service: UserRatingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRatingsService],
    }).compile();

    service = module.get<UserRatingsService>(UserRatingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
