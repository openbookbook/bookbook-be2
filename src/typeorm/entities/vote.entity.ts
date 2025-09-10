import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Candidate } from './candidate.entity';
import { Election } from './election.entity';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ default: '' })
  author: string;
  @Column({ type: 'decimal', default: 0, precision: 5, scale: 4 })
  score: number;

  @ManyToOne(() => Candidate, candidate => candidate.votes)
  @JoinColumn()
  candidate: Candidate;
  @ManyToOne(() => Election, election => election.votes)
  @JoinColumn()
  election: Election;

  @CreateDateColumn()
  createdAt: Date;
  @DeleteDateColumn()
  deletedAt?: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
