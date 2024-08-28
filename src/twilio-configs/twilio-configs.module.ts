import { Module } from '@nestjs/common';
import { TwilioConfigsService } from './twilio-configs.service';
import { TwilioConfigsController } from './twilio-configs.controller';

@Module({
  controllers: [TwilioConfigsController],
  providers: [TwilioConfigsService],
})
export class TwilioConfigsModule {}
