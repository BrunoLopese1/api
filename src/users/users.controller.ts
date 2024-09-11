import { UsersService } from 'src/users/users.service';
import { Body, Controller, Post, Get, Req, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { Users } from './entities/user.entity';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from 'src/auth/constants';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async verify(@Req() request: Request): Promise<Users> {
    const token = request.cookies['Authentication'];
    if (!token) {
      throw new UnauthorizedException('Token não encontrado');
    }

    try {
      const decoded = jwt.verify(token, jwtConstants.secret) as unknown as { sub: number };
      const userId = decoded.sub;
      
      // Agora busque o usuário com base no ID decodificado
      return this.usersService.findOne(userId);
    } catch (err) {
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }
}

