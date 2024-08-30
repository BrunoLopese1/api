import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ValidationCodesService } from './validation-codes.service';
import { CreateValidationCodeDto } from './dto/create-validation-code.dto';
import { UpdateValidationCodeDto } from './dto/update-validation-code.dto';

@Controller('validation-codes')
export class ValidationCodesController {
  constructor(
    private readonly validationCodesService: ValidationCodesService,
  ) {}

  @Post()
  create(@Body() createValidationCodeDto: CreateValidationCodeDto) {
    return this.validationCodesService.create(createValidationCodeDto);
  }

  @Get()
  findAll() {
    return this.validationCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.validationCodesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateValidationCodeDto: UpdateValidationCodeDto,
  ) {
    return this.validationCodesService.update(+id, updateValidationCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.validationCodesService.remove(+id);
  }
}
