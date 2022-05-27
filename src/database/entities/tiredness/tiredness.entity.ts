import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tiredness {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @Column()
  date: string;
}
