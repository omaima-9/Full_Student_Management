import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3001','*'], // Allow requests from Next.js server
    methods:'GET,POST,PUT,PATCH,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true, //remove any extra fields not in DTO
      forbidNonWhitelisted:true,// instead of removing it , it throws an error
      transform:true // convert string  inputs to its expected type
    })
  )
  app.use(cookieParser());

  await app.listen(3000);
}
bootstrap();
