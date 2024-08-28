import { Module } from '@nestjs/common';
import { TemplatesConnectionsService } from './templates-connections.service';
import { TemplatesConnectionsController } from './templates-connections.controller';

@Module({
  controllers: [TemplatesConnectionsController],
  providers: [TemplatesConnectionsService],
})
export class TemplatesConnectionsModule {}
