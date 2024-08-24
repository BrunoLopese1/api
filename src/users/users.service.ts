import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user-dto';

interface UserOlder {
    userId:number,
    username: string,
    password:string
}

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId:1,
            username:'john',
            password:'changeme'
        },
        {
            userId:2,
            username:'maria',
            password:'guess'
        }
    ];

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

    async findOneOlder(username: string): Promise<UserOlder | undefined>{
        return this.users.find(user => user.username === username)
    }

    async createUser(createUserDto:CreateUserDto): Promise<User>{
      const user = this.usersRepository.save(createUserDto)
      return user
    }

    findAll(): Promise<User[]> {
      return this.usersRepository.find();
    }
    
    findOne(id: number): Promise<User | null> {
      return this.usersRepository.findOneBy({ id });
    }
    
    async remove(id: number): Promise<void> {
      await this.usersRepository.delete(id);
    }
}