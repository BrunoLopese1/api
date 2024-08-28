import { Module } from '@nestjs/common';
import { HelpCategoriesService } from './help-categories.service';
import { HelpCategoriesController } from './help-categories.controller';

@Module({
  controllers: [HelpCategoriesController],
  providers: [HelpCategoriesService],
})
export class HelpCategoriesModule {}
