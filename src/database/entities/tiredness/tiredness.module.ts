import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { tirednessProviders } from './tiredness.providers';
import { TirednessService } from './tiredness.service';

@Module({
  imports: [DatabaseModule],
  providers: [...tirednessProviders, TirednessService],
})
export class TirednessModule {}
