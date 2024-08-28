import { PartialType } from '@nestjs/swagger';
import { CreateUserRatingDto } from './create-user-rating.dto';

export class UpdateUserRatingDto extends PartialType(CreateUserRatingDto) {}
