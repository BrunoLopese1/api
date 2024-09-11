import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    const user = this.usersRepository.save(createUserDto);
    return user;
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async findOneByEmail(email: string): Promise<Users | null> {
    const user = await this.usersRepository.findOneBy({email});
    return user
  }

  async findOne(id: number): Promise<Users | null> {
    const user = await this.usersRepository.findOneBy({id});
    return user
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
