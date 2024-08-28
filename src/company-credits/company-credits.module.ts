import { Module } from '@nestjs/common';
import { CompanyCreditsService } from './company-credits.service';
import { CompanyCreditsController } from './company-credits.controller';

@Module({
  controllers: [CompanyCreditsController],
  providers: [CompanyCreditsService],
})
export class CompanyCreditsModule {}
