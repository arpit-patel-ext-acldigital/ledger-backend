import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from '@models/schema/category.schema';
import constants from '@config/constants';

@Module({
  imports: [MongooseModule.forFeature([{ name:constants.MODELS.CATEGORIES, schema: CategorySchema}])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
