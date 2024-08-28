import { PartialType } from '@nestjs/swagger';
import { CreateTicketTrakingDto } from './create-ticket-traking.dto';

export class UpdateTicketTrakingDto extends PartialType(
  CreateTicketTrakingDto,
) {}
