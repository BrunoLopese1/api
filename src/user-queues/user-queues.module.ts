import { Module } from '@nestjs/common';
import { UserQueuesService } from './user-queues.service';
import { UserQueuesController } from './user-queues.controller';

@Module({
  controllers: [UserQueuesController],
  providers: [UserQueuesService],
})
export class UserQueuesModule {}
