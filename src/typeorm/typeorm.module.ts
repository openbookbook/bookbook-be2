import { Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: DataSource,
      inject: [],
      useFactory: async () => {
        try {
          const dataSource = new DataSource({
            type: process.env.DATABASE_DIALECT as MysqlConnectionOptions['type'],
            database: process.env.DATABASE_NAME,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT),
            synchronize: process.env.NODE_ENV === 'development',
            entities: [__dirname + '/**/*.entity.{js,ts}'],
          });
          await dataSource.initialize();

          return dataSource;
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
    },
  ],
  exports: [DataSource],
})
export class TypeOrmModule {}
