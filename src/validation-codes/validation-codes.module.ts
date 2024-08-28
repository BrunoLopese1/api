import { Module } from '@nestjs/common';
import { ValidationCodesService } from './validation-codes.service';
import { ValidationCodesController } from './validation-codes.controller';

@Module({
  controllers: [ValidationCodesController],
  providers: [ValidationCodesService],
})
export class ValidationCodesModule {}
