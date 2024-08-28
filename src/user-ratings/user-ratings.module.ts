import { Module } from '@nestjs/common';
import { UserRatingsService } from './user-ratings.service';
import { UserRatingsController } from './user-ratings.controller';

@Module({
  controllers: [UserRatingsController],
  providers: [UserRatingsService],
})
export class UserRatingsModule {}
