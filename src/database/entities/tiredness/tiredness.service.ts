import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tiredness } from './tiredness.entity';

@Injectable()
export class TirednessService {
  constructor(
    @InjectRepository(Tiredness)
    private tirednessRepository: Repository<Tiredness>,
  ) {}

  async findAllByUserId(id: number): Promise<Tiredness[]> {
    return this.tirednessRepository.find();
  }
}
