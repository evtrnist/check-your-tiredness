import { DataSource } from 'typeorm';
import { Tiredness } from './tiredness.entity';

export const tirednessProviders = [
  {
    provide: 'TIREDNESS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tiredness),
    inject: ['DATA_SOURCE'],
  },
];
