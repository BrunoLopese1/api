import { Module } from '@nestjs/common';
import { HelpsService } from './helps.service';
import { HelpsController } from './helps.controller';

@Module({
  controllers: [HelpsController],
  providers: [HelpsService],
})
export class HelpsModule {}
