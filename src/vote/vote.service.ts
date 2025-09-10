import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { Vote } from 'src/typeorm/entities/vote.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VoteService {
  constructor(@InjectRepository(Vote) private voteRepository: Repository<Vote>) {}

  async create(createVoteDto: CreateVoteDto) {
    const created = this.voteRepository.create(createVoteDto);
    const inserted = await this.voteRepository.insert(created);

    return inserted.generatedMaps[0];
  }

  findAll() {
    return `This action returns all vote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vote`;
  }

  update(id: number, updateVoteDto: UpdateVoteDto) {
    return `This action updates a #${id} vote`;
  }

  upsert(createVoteDto: CreateVoteDto) {
    this.voteRepository.upsert(createVoteDto, ['author', 'candidate', 'election']);
  }

  remove(id: number) {
    return `This action removes a #${id} vote`;
  }
}
