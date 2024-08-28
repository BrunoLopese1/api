import { Module } from '@nestjs/common';
import { TicketTrakingService } from './ticket-traking.service';
import { TicketTrakingController } from './ticket-traking.controller';
import { TicketTraking } from './entities/ticket-traking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TicketTraking])],
  controllers: [TicketTrakingController],
  providers: [TicketTrakingService],
  exports: [TicketTrakingService],
})
export class TicketTrakingModule {}
