import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Election } from './election.entity';
import { Vote } from './vote.entity';

enum CandidateKind {
  Book = 'book',
  Other = 'other',
}

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ length: 127, default: '' })
  author?: string;
  @Column({ length: 127, default: '' })
  googleBooksId?: string;
  @Column({ type: 'enum', enum: CandidateKind, default: 'other' })
  kind: `${CandidateKind}`;
  @Column({ length: 255, default: '' })
  title: string;

  @ManyToOne(() => Election, election => election.candidates)
  @JoinColumn()
  election: Election;
  @OneToMany(() => Vote, vote => vote.candidate, { eager: true })
  votes: Vote[];

  @CreateDateColumn()
  createdAt: Date;
  @DeleteDateColumn()
  deletedAt?: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
