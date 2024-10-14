import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElectionModule } from './election/election.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from './typeorm/typeorm.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule, ElectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
