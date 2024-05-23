import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryController } from './sub-category.controller';
import constants from '@config/constants';
import { SubCategorySchema } from '@models/schema/sub-category.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: constants.MODELS.SUB_CATEGORIES, schema: SubCategorySchema}])],
  providers: [SubCategoryService],
  controllers: [SubCategoryController]
})
export class SubCategoryModule {}
