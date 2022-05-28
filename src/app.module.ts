import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { TypeOrmModule } from '@nestjs/typeorm';

import env from 'env-var';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './database/entities/user/user.module';
import { TirednessModule } from './database/entities/tiredness/tiredness.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      token: env.get('BOT_TOKEN').required().asString(),
    }),
    UserModule,
    TirednessModule,
    TypeOrmModule.forRoot({
      url: env.get('DATABASE_URL').required().asUrlString(),
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // This for development
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
