import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Candidate } from './candidate.entity';
import { Vote } from './vote.entity';

@Entity()
export class Election {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ default: false })
  isCompleted: boolean = false;
  @Column({ length: 127, default: '' })
  name: string;

  @OneToMany(() => Candidate, candidate => candidate.election)
  candidates: Candidate[];
  @OneToMany(() => Vote, vote => vote.election)
  votes: Vote[];

  @CreateDateColumn()
  createdAt: Date;
  @DeleteDateColumn()
  deletedAt?: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
