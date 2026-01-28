import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElectionModule } from './election/election.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from './typeorm/typeorm.module';
import { CandidateModule } from './candidate/candidate.module';
import { VoteModule } from './vote/vote.module';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule,
    TerminusModule,
    ElectionModule,
    CandidateModule,
    VoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
