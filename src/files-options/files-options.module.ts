import { Module } from '@nestjs/common';
import { FilesOptionsService } from './files-options.service';
import { FilesOptionsController } from './files-options.controller';

@Module({
  controllers: [FilesOptionsController],
  providers: [FilesOptionsService],
})
export class FilesOptionsModule {}
