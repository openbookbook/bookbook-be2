import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import type { NestExpressApplication } from '@nestjs/platform-express';

const PORT = 8001;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.enableShutdownHooks();

  // Express config
  app.use(helmet());
  app.set('trust proxy', true);

  // Start application
  const port = process.env.PORT || PORT;
  await app.listen(port);
}

bootstrap();
