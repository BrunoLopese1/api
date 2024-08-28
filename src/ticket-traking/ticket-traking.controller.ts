import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketTrakingService } from './ticket-traking.service';
import { CreateTicketTrakingDto } from './dto/create-ticket-traking.dto';
import { UpdateTicketTrakingDto } from './dto/update-ticket-traking.dto';
import { TicketTraking } from './entities/ticket-traking.entity';

@Controller('ticket-traking')
export class TicketTrakingController {
  constructor(private readonly ticketTrakingService: TicketTrakingService) {}

  @Post()
  create(@Body() createTicketTrakingDto: CreateTicketTrakingDto) {
    return this.ticketTrakingService.create(createTicketTrakingDto);
  }

  @Get()
  findAll(): Promise<TicketTraking[]> {
    return this.ticketTrakingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketTrakingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTicketTrakingDto: UpdateTicketTrakingDto,
  ) {
    return this.ticketTrakingService.update(+id, updateTicketTrakingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketTrakingService.remove(+id);
  }
}
