import { TirednessService } from './tiredness.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

type Tiredness = {
  id?: number;
  score: number;
  date: string;
};

@Controller('Tiredness')
export class TirednessController {
  constructor(private readonly tirednessService: TirednessService) {}

  @Get()
  getAllByUserId(id: number) {
    return this.tirednessService.findAllByUserId(id);
  }
}
