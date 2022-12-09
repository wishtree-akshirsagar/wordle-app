import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // read configuration form .env
  const configService = app.get(ConfigService);

  app.enableCors({
    credentials: true,
    origin: [configService.get('ORIGIN')],
  });

  //to setup use cookies
  app.use(cookieParser(configService.get('SECRET')));
  await app.listen(5000);
}
bootstrap();
