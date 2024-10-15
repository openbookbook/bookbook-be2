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

@Entity()
export class Vote {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ default: '' })
  author: string;
  @Column({ type: 'decimal', default: 0 })
  score: number;

  @ManyToOne(() => Candidate, candidate => candidate.votes)
  @JoinColumn({ name: 'candidateId' })
  candidate: Candidate;
  @ManyToOne(() => Candidate, candidate => candidate.votes)
  @JoinColumn({ name: 'electionId' })
  election: Candidate;

  @CreateDateColumn()
  createdAt: Date;
  @DeleteDateColumn()
  deletedAt?: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
