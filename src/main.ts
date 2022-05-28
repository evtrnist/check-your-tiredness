import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import env from 'env-var';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = env.get('PORT').default(5000).asPortNumber();
  await app.listen(PORT);
}
bootstrap();
