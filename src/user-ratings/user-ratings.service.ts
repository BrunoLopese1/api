import { Injectable } from '@nestjs/common';
import { CreateUserRatingDto } from './dto/create-user-rating.dto';
import { UpdateUserRatingDto } from './dto/update-user-rating.dto';

@Injectable()
export class UserRatingsService {
  create(createUserRatingDto: CreateUserRatingDto) {
    return 'This action adds a new userRating';
  }

  findAll() {
    return `This action returns all userRatings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userRating`;
  }

  update(id: number, updateUserRatingDto: UpdateUserRatingDto) {
    return `This action updates a #${id} userRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} userRating`;
  }
}
