import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/user.entity';
import { TicketTrakingModule } from './ticket-traking/ticket-traking.module';
import { TicketTraking } from './ticket-traking/entities/ticket-traking.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'xama2',
      entities: [Users, TicketTraking],
      synchronize: false, // não usar true em produção
    }),
    TicketTrakingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
