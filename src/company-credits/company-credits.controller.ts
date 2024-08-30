import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompanyCreditsService } from './company-credits.service';
import { CreateCompanyCreditDto } from './dto/create-company-credit.dto';
import { UpdateCompanyCreditDto } from './dto/update-company-credit.dto';

@Controller('company-credits')
export class CompanyCreditsController {
  constructor(private readonly companyCreditsService: CompanyCreditsService) {}

  @Post()
  create(@Body() createCompanyCreditDto: CreateCompanyCreditDto) {
    return this.companyCreditsService.create(createCompanyCreditDto);
  }

  @Get()
  findAll() {
    return this.companyCreditsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyCreditsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyCreditDto: UpdateCompanyCreditDto,
  ) {
    return this.companyCreditsService.update(+id, updateCompanyCreditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyCreditsService.remove(+id);
  }
}
