import { PartialType } from '@nestjs/swagger';
import { CreateTwilioConfigDto } from './create-twilio-config.dto';

export class UpdateTwilioConfigDto extends PartialType(CreateTwilioConfigDto) {}
