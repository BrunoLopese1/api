import { Test, TestingModule } from '@nestjs/testing';
import { UserRatingsController } from './user-ratings.controller';
import { UserRatingsService } from './user-ratings.service';

describe('UserRatingsController', () => {
  let controller: UserRatingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRatingsController],
      providers: [UserRatingsService],
    }).compile();

    controller = module.get<UserRatingsController>(UserRatingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
