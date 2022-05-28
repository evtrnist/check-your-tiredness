import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';

import env from 'env-var';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    TelegrafModule.forRoot({
      token: env.get('BOT_TOKEN').required().asString(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
