import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TwilioConfigsService } from './twilio-configs.service';
import { CreateTwilioConfigDto } from './dto/create-twilio-config.dto';
import { UpdateTwilioConfigDto } from './dto/update-twilio-config.dto';

@Controller('twilio-configs')
export class TwilioConfigsController {
  constructor(private readonly twilioConfigsService: TwilioConfigsService) {}

  @Post()
  create(@Body() createTwilioConfigDto: CreateTwilioConfigDto) {
    return this.twilioConfigsService.create(createTwilioConfigDto);
  }

  @Get()
  findAll() {
    return this.twilioConfigsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.twilioConfigsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTwilioConfigDto: UpdateTwilioConfigDto) {
    return this.twilioConfigsService.update(+id, updateTwilioConfigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.twilioConfigsService.remove(+id);
  }
}
