import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { repl } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //await repl(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Rotas')
  .setDescription('Documentação da API')
  .setVersion('1.0')
  .addTag('API')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();