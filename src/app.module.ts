import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import env from 'env-var';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: env.get('BOT_TOKEN').required().asString(),
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
