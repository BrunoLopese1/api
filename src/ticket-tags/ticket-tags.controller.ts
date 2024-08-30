import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketTagsService } from './ticket-tags.service';
import { CreateTicketTagDto } from './dto/create-ticket-tag.dto';
import { UpdateTicketTagDto } from './dto/update-ticket-tag.dto';

@Controller('ticket-tags')
export class TicketTagsController {
  constructor(private readonly ticketTagsService: TicketTagsService) {}

  @Post()
  create(@Body() createTicketTagDto: CreateTicketTagDto) {
    return this.ticketTagsService.create(createTicketTagDto);
  }

  @Get()
  findAll() {
    return this.ticketTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketTagsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTicketTagDto: UpdateTicketTagDto,
  ) {
    return this.ticketTagsService.update(+id, updateTicketTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketTagsService.remove(+id);
  }
}
