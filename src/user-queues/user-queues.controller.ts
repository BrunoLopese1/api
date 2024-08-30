import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserQueuesService } from './user-queues.service';
import { CreateUserQueueDto } from './dto/create-user-queue.dto';
import { UpdateUserQueueDto } from './dto/update-user-queue.dto';

@Controller('user-queues')
export class UserQueuesController {
  constructor(private readonly userQueuesService: UserQueuesService) {}

  @Post()
  create(@Body() createUserQueueDto: CreateUserQueueDto) {
    return this.userQueuesService.create(createUserQueueDto);
  }

  @Get()
  findAll() {
    return this.userQueuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userQueuesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserQueueDto: UpdateUserQueueDto,
  ) {
    return this.userQueuesService.update(+id, updateUserQueueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userQueuesService.remove(+id);
  }
}
