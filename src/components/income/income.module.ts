import { Module } from '@nestjs/common';
import { IncomeController } from './income.controller';
import { IncomeService } from './income.service';
import { IncomeSchema } from '@models/schema/incomes.schema';
import constants from '@config/constants';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeHistoryService } from '@components/income-history/income-history.service';
import { IncomeHistorySchema } from '@models/schema/incomeHistory.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: constants.MODELS.INCOMES, schema: IncomeSchema }]), MongooseModule.forFeature([{ name: constants.MODELS.INCOME_HISTORY, schema: IncomeHistorySchema }])],
  controllers: [IncomeController],
  providers: [IncomeService, IncomeHistoryService]
})
export class IncomeModule { }
