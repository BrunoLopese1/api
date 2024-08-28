import { Injectable } from '@nestjs/common';
import { CreateCompanyCreditDto } from './dto/create-company-credit.dto';
import { UpdateCompanyCreditDto } from './dto/update-company-credit.dto';

@Injectable()
export class CompanyCreditsService {
  create(createCompanyCreditDto: CreateCompanyCreditDto) {
    return 'This action adds a new companyCredit';
  }

  findAll() {
    return `This action returns all companyCredits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyCredit`;
  }

  update(id: number, updateCompanyCreditDto: UpdateCompanyCreditDto) {
    return `This action updates a #${id} companyCredit`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyCredit`;
  }
}
