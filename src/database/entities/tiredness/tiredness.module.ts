import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TirednessController } from './tiredness.controller';
import { Tiredness } from './tiredness.entity';
import { TirednessService } from './tiredness.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tiredness])],
  controllers: [TirednessController],
  providers: [TirednessService],
})
export class TirednessModule {}
