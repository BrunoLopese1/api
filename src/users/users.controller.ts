import { UsersService } from 'src/users/users.service';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { Users } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }
}
