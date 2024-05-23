import { Module } from '@nestjs/common';
import { BanksService } from './banks.service';
import { BanksController } from './banks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import constants from '@config/constants';
import { BanksSchema } from '@models/schema/banks.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: constants.MODELS.BANKS, schema: BanksSchema}])],
  controllers: [BanksController],
  providers: [BanksService]
})
export class BanksModule {}
