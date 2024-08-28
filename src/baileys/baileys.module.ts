import { Module } from '@nestjs/common';
import { BaileysService } from './baileys.service';
import { BaileysController } from './baileys.controller';

@Module({
  controllers: [BaileysController],
  providers: [BaileysService],
})
export class BaileysModule {}
