import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'ledger' }),
    UserModule,
    AuthModule,
    CategoryModule,
    SubCategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
