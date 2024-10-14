import { Injectable } from '@nestjs/common';
import { CreateElectionDto } from './dto/create-election.dto';
import { UpdateElectionDto } from './dto/update-election.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Election } from 'src/typeorm/entities/election.entity';

@Injectable()
export class ElectionService {
  constructor(@InjectRepository(Election) private electionRepository: Repository<Election>) {}

  create(createElectionDto: CreateElectionDto) {
    const created = this.electionRepository.create(createElectionDto);
    console.log({ created });
    this.electionRepository.insert(created);

    return created;
  }

  findAll() {
    // return `No we're not gonna expose all of our elections you absolute lemon.`;
    return this.electionRepository.find();
  }

  findOne(id: number) {
    return this.electionRepository.findOneBy({ id });
  }

  update(id: number, updateElectionDto: UpdateElectionDto) {
    this.electionRepository.update(id, updateElectionDto);
  }

  remove(id: number) {
    this.electionRepository.softRemove({ id });
  }
}
