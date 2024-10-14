import { Module } from '@nestjs/common';
import { ElectionService } from './election.service';
import { ElectionController } from './election.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Election } from 'src/typeorm/entities/election.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Election])],
  controllers: [ElectionController],
  providers: [ElectionService],
})
export class ElectionModule {}
