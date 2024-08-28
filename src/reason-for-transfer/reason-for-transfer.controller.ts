import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReasonForTransferService } from './reason-for-transfer.service';
import { CreateReasonForTransferDto } from './dto/create-reason-for-transfer.dto';
import { UpdateReasonForTransferDto } from './dto/update-reason-for-transfer.dto';

@Controller('reason-for-transfer')
export class ReasonForTransferController {
  constructor(private readonly reasonForTransferService: ReasonForTransferService) {}

  @Post()
  create(@Body() createReasonForTransferDto: CreateReasonForTransferDto) {
    return this.reasonForTransferService.create(createReasonForTransferDto);
  }

  @Get()
  findAll() {
    return this.reasonForTransferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reasonForTransferService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReasonForTransferDto: UpdateReasonForTransferDto) {
    return this.reasonForTransferService.update(+id, updateReasonForTransferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reasonForTransferService.remove(+id);
  }
}
