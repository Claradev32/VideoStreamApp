import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  console.log(`
Listen on http://127.0.0.1:${process.env.PORT}
Using DB at ${process.env.MONGO}
`);
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap().catch((e) => console.error(e));
