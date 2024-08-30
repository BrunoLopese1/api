import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserRatingsService } from './user-ratings.service';
import { CreateUserRatingDto } from './dto/create-user-rating.dto';
import { UpdateUserRatingDto } from './dto/update-user-rating.dto';

@Controller('user-ratings')
export class UserRatingsController {
  constructor(private readonly userRatingsService: UserRatingsService) {}

  @Post()
  create(@Body() createUserRatingDto: CreateUserRatingDto) {
    return this.userRatingsService.create(createUserRatingDto);
  }

  @Get()
  findAll() {
    return this.userRatingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRatingsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserRatingDto: UpdateUserRatingDto,
  ) {
    return this.userRatingsService.update(+id, updateUserRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRatingsService.remove(+id);
  }
}
