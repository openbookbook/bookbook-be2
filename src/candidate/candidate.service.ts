import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidate } from 'src/typeorm/entities/candidate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CandidateService {
  constructor(@InjectRepository(Candidate) private candidateRepository: Repository<Candidate>) {}

  create(createCandidateDto: CreateCandidateDto) {
    const created = this.candidateRepository.create(createCandidateDto);
    this.candidateRepository.insert(created);

    return created;
  }

  findAll() {
    return `This action returns all candidate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} candidate`;
  }

  update(id: number, updateCandidateDto: UpdateCandidateDto) {
    return `This action updates a #${id} candidate`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidate`;
  }
}
