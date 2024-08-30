import { PartialType } from '@nestjs/swagger';
import { CreateUserAnnouncementDto } from './create-user-announcement.dto';

export class UpdateUserAnnouncementDto extends PartialType(
  CreateUserAnnouncementDto,
) {}
