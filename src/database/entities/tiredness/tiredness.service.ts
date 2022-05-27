import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tiredness } from './tiredness.entity';

@Injectable()
export class TirednessService {
  constructor(
    @Inject('TIREDNESS_REPOSITORY')
    private TirednessRepository: Repository<Tiredness>,
  ) {}

  async findAllByUserId(id: number): Promise<Tiredness[]> {
    return this.TirednessRepository.find();
  }
}
