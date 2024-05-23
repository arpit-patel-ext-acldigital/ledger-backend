import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '@components/user/user.module';
import { AuthModule } from '@components/auth/auth.module';
import { CategoryModule } from '@components/category/category.module';
import { SubCategoryModule } from '@components/sub-category/sub-category.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BanksModule } from '@components/banks/banks.module';
import { IncomeModule } from './components/income/income.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'ledger' }),
    UserModule,
    AuthModule,
    CategoryModule,
    SubCategoryModule,
    BanksModule,
    IncomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
