import { Module } from '@nestjs/common';
import { ReasonForTransferService } from './reason-for-transfer.service';
import { ReasonForTransferController } from './reason-for-transfer.controller';

@Module({
  controllers: [ReasonForTransferController],
  providers: [ReasonForTransferService],
})
export class ReasonForTransferModule {}
