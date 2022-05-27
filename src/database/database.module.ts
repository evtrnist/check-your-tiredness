import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { TirednessModule } from './entities/tiredness/tiredness.module';
import { UserModule } from './entities/user/user.module';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
