import { Module } from '@nestjs/common';
import { QuickMessagesService } from './quick-messages.service';
import { QuickMessagesController } from './quick-messages.controller';

@Module({
  controllers: [QuickMessagesController],
  providers: [QuickMessagesService],
})
export class QuickMessagesModule {}
