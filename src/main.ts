import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

const PORT = 8001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());

  const port = process.env.PORT || PORT;
  await app.listen(port);
}

bootstrap();
