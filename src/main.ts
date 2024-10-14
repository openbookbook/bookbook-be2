import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = process.env.PORT || PORT;
  await app.listen(port);
}

bootstrap();
