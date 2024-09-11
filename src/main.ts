import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  // Permitir a aplicação Vite acessar a API Nest
  app.enableCors({
    origin: 'http://localhost:5173', // URL da aplicação Vite
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Se estiver usando cookies ou autenticação
  });

  await app.listen(3000);
}
bootstrap();
