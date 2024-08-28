import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatUsersService } from './chat-users.service';
import { CreateChatUserDto } from './dto/create-chat-user.dto';
import { UpdateChatUserDto } from './dto/update-chat-user.dto';

@Controller('chat-users')
export class ChatUsersController {
  constructor(private readonly chatUsersService: ChatUsersService) {}

  @Post()
  create(@Body() createChatUserDto: CreateChatUserDto) {
    return this.chatUsersService.create(createChatUserDto);
  }

  @Get()
  findAll() {
    return this.chatUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatUserDto: UpdateChatUserDto) {
    return this.chatUsersService.update(+id, updateChatUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatUsersService.remove(+id);
  }
}
