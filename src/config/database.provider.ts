import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';


const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => {
        return mongoose.connect('mongodb://localhost:27017/ledger-analysis').then((e)=> console.log('Database Connected'));
    }
  },
];


@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}